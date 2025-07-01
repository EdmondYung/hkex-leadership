#!/usr/bin/env python3
"""
Add Validation Confidence Scores to Cleaned KAM Excel
Combines cleaned KAM data with PDF validation results
"""

import pandas as pd
import json
import os
from datetime import datetime

def load_validation_results(validation_path):
    """Load validation results from JSON file"""
    try:
        with open(validation_path, 'r', encoding='utf-8') as f:
            validation_data = json.load(f)
        
        print(f"✅ Loaded validation results from: {validation_path}")
        return validation_data.get('detailed_results', [])
    
    except Exception as e:
        print(f"❌ Error loading validation results: {e}")
        return []

def get_confidence_level(score):
    """Convert confidence score to descriptive level"""
    if score >= 70:
        return "High"
    elif score >= 40:
        return "Medium"
    else:
        return "Low"

def get_confidence_description(score):
    """Get detailed description of confidence level"""
    if score >= 70:
        return "High confidence - Data well validated against PDF source"
    elif score >= 40:
        return "Medium confidence - Some validation issues identified"
    else:
        return "Low confidence - Significant validation concerns"

def add_validation_to_excel(excel_path, validation_path, output_path):
    """Add validation confidence scores to cleaned KAM Excel file"""
    
    print("🔍 Adding Validation Confidence Scores to KAM Excel")
    print("=" * 60)
    
    # Load cleaned KAM data
    try:
        df = pd.read_excel(excel_path, sheet_name='Cleaned_KAM_Data')
        print(f"✅ Loaded {len(df)} cleaned KAM records")
    except Exception as e:
        print(f"❌ Error loading Excel file: {e}")
        return False
    
    # Load validation results
    validation_results = load_validation_results(validation_path)
    if not validation_results:
        print("❌ No validation results available")
        return False
    
    print(f"✅ Loaded {len(validation_results)} validation results")
    
    # Create validation mapping
    validation_map = {}
    for result in validation_results:
        record_id = result.get('record_id')
        confidence = result.get('confidence_score', 0)
        issues = result.get('issues', [])
        
        if record_id is not None:
            validation_map[record_id] = {
                'confidence_score': confidence,
                'confidence_level': get_confidence_level(confidence),
                'confidence_description': get_confidence_description(confidence),
                'validation_issues': '; '.join(issues) if issues else 'None identified',
                'issues_count': len(issues)
            }
    
    print(f"📊 Created validation mapping for {len(validation_map)} records")
    
    # Add validation columns to DataFrame
    df['Validation_Confidence_Score'] = df.index.map(
        lambda x: validation_map.get(x, {}).get('confidence_score', 0)
    )
    
    df['Validation_Confidence_Level'] = df.index.map(
        lambda x: validation_map.get(x, {}).get('confidence_level', 'Unknown')
    )
    
    df['Validation_Description'] = df.index.map(
        lambda x: validation_map.get(x, {}).get('confidence_description', 'No validation data available')
    )
    
    df['Validation_Issues'] = df.index.map(
        lambda x: validation_map.get(x, {}).get('validation_issues', 'No validation performed')
    )
    
    df['Issues_Count'] = df.index.map(
        lambda x: validation_map.get(x, {}).get('issues_count', 0)
    )
    
    # Reorder columns for better readability
    column_order = [
        'File_Name', 'Company', 'Year', 'Auditor',
        'Validation_Confidence_Score', 'Validation_Confidence_Level', 'Validation_Description',
        'KAM_Title', 'KAM_Description', 'Audit_Response',
        'Validation_Issues', 'Issues_Count'
    ]
    
    df = df[column_order]
    
    # Sort by confidence score (highest first), then by company and year
    df = df.sort_values(['Validation_Confidence_Score', 'Company', 'Year'], ascending=[False, True, True])
    
    # Create summary statistics
    total_records = len(df)
    high_confidence = len(df[df['Validation_Confidence_Level'] == 'High'])
    medium_confidence = len(df[df['Validation_Confidence_Level'] == 'Medium'])
    low_confidence = len(df[df['Validation_Confidence_Level'] == 'Low'])
    unknown_confidence = len(df[df['Validation_Confidence_Level'] == 'Unknown'])
    
    avg_confidence = df['Validation_Confidence_Score'].mean()
    
    print(f"\n📊 Validation Summary:")
    print(f"   Total records: {total_records}")
    print(f"   High confidence (≥70%): {high_confidence} ({high_confidence/total_records*100:.1f}%)")
    print(f"   Medium confidence (40-69%): {medium_confidence} ({medium_confidence/total_records*100:.1f}%)")
    print(f"   Low confidence (<40%): {low_confidence} ({low_confidence/total_records*100:.1f}%)")
    print(f"   Unknown: {unknown_confidence} ({unknown_confidence/total_records*100:.1f}%)")
    print(f"   Average confidence score: {avg_confidence:.1f}%")
    
    # Save enhanced Excel file
    try:
        with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
            # Main data sheet
            df.to_excel(writer, sheet_name='KAM_Data_with_Validation', index=False)
            
            # Summary sheet
            summary_data = {
                'Metric': [
                    'Total Records',
                    'High Confidence (≥70%)',
                    'Medium Confidence (40-69%)',
                    'Low Confidence (<40%)',
                    'Unknown Confidence',
                    'Average Confidence Score',
                    'Validation Date'
                ],
                'Value': [
                    total_records,
                    f"{high_confidence} ({high_confidence/total_records*100:.1f}%)",
                    f"{medium_confidence} ({medium_confidence/total_records*100:.1f}%)",
                    f"{low_confidence} ({low_confidence/total_records*100:.1f}%)",
                    f"{unknown_confidence} ({unknown_confidence/total_records*100:.1f}%)",
                    f"{avg_confidence:.1f}%",
                    datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                ]
            }
            
            summary_df = pd.DataFrame(summary_data)
            summary_df.to_excel(writer, sheet_name='Validation_Summary', index=False)
            
            # Company-wise confidence analysis
            company_analysis = df.groupby('Company').agg({
                'Validation_Confidence_Score': ['count', 'mean', 'min', 'max'],
                'Validation_Confidence_Level': lambda x: (x == 'High').sum()
            }).round(1)
            
            company_analysis.columns = ['Total_KAMs', 'Avg_Confidence', 'Min_Confidence', 'Max_Confidence', 'High_Confidence_Count']
            company_analysis = company_analysis.reset_index()
            company_analysis['High_Confidence_Percentage'] = (company_analysis['High_Confidence_Count'] / company_analysis['Total_KAMs'] * 100).round(1)
            
            company_analysis.to_excel(writer, sheet_name='Company_Confidence_Analysis', index=False)
        
        print(f"\n✅ Enhanced Excel file saved to: {output_path}")
        print(f"📊 File includes validation confidence scores and analysis")
        
        return True
        
    except Exception as e:
        print(f"❌ Error saving enhanced Excel file: {e}")
        return False

def main():
    """Main execution function"""
    # File paths
    base_dir = "/Users/Edmond/Documents/augment-projects/e/reports/auditor's reports"
    excel_path = os.path.join(base_dir, "KAM_Cleaned.xlsx")
    validation_path = os.path.join(base_dir, "pdf_validation_report.json")
    output_path = os.path.join(base_dir, "KAM_Cleaned_with_Validation.xlsx")
    
    # Check if files exist
    if not os.path.exists(excel_path):
        print(f"❌ Excel file not found: {excel_path}")
        return False
    
    if not os.path.exists(validation_path):
        print(f"❌ Validation file not found: {validation_path}")
        return False
    
    # Process files
    success = add_validation_to_excel(excel_path, validation_path, output_path)
    
    if success:
        print(f"\n🎉 Successfully created enhanced KAM Excel file with validation scores!")
        print(f"📁 Location: {output_path}")
        print(f"\n📋 The file now includes:")
        print(f"   • Validation confidence scores (0-100%)")
        print(f"   • Confidence levels (High/Medium/Low)")
        print(f"   • Detailed validation descriptions")
        print(f"   • Specific validation issues identified")
        print(f"   • Summary statistics and company analysis")
        
        return True
    else:
        print(f"\n❌ Failed to create enhanced Excel file")
        return False

if __name__ == "__main__":
    main()
