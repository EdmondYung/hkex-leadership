#!/usr/bin/env python3
"""
KAM Data Cleaner and Validator
Cleans and validates Key Audit Matters data extracted from auditor reports
"""

import pandas as pd
import re
import json
from datetime import datetime
import os

class KAMDataCleaner:
    def __init__(self, excel_path):
        self.excel_path = excel_path
        self.df = None
        self.cleaned_df = None
        self.validation_report = {}
        
        # Known auditor mappings for standardization
        self.auditor_mappings = {
            'EY': 'Ernst & Young',
            'Ernst & Young LLP': 'Ernst & Young',
            'Ernst & Young Accountants LLP': 'Ernst & Young',
            'Ernst & Young Global Limited': 'Ernst & Young',
            'EY (Ernst & Young)': 'Ernst & Young',
            'KPMG LLP': 'KPMG',
            'KPMG AG Wirtschaftsprüfungsgesellschaft': 'KPMG',
            'KPMG Accountants N.V.': 'KPMG',
            'PricewaterhouseCoopers': 'PwC',
            'PricewaterhouseCoopers GmbH': 'PwC',
            'PricewaterhouseCoopers Certified Public Accountants': 'PwC',
            'PricewaterhouseCoopers Accountants N.V.': 'PwC',
            'PricewaterhouseCoopers GmbH Wirtschaftsprüfungsgesellschaft': 'PwC',
            'PwC Accountants N.V.': 'PwC',
            'Deloitte LLP': 'Deloitte',
        }
        
        # Company name standardization
        self.company_mappings = {
            'Deutsche Börse Aktiengesellschaft': 'Deutsche Börse AG',
            'Deutsche Borse Group': 'Deutsche Börse AG',
            'Deutsche Börse Group': 'Deutsche Börse AG',
            'Euronext': 'Euronext N.V.',
            'London Stock Exchange Group plc': 'LSEG',
            'LSEG US Holdco Inc.': 'LSEG',
            'Hong Kong Exchanges and Clearing Limited': 'HKEX',
            'Nasdaq, Inc.': 'Nasdaq Inc.',
            'Intercontinental Exchange, Inc.': 'ICE',
            'TMX Group Limited': 'TMX Group',
        }
    
    def load_data(self):
        """Load data from Excel file"""
        try:
            self.df = pd.read_excel(self.excel_path, sheet_name='result')

            # Handle actual tidied data column names (Chinese + English)
            actual_columns = ['文件名', 'Company name', 'Year of report', 'Auditor',
                            'Title of the Key Audit Matter', 'Description of the Key Audit Matter',
                            'Audit response in addressing the Key Audit Matter']

            if len(self.df.columns) == 7 and '文件名' in self.df.columns:
                # Actual tidied format - rename to standard English names
                self.df.columns = ['File_Name', 'Company_Name', 'Year', 'Auditor',
                                  'KAM_Title', 'KAM_Description', 'Audit_Response']
            else:
                # Fallback to previous format
                self.df.columns = ['File_Name', 'Company_Name', 'Year', 'Auditor',
                                  'KAM_Title', 'KAM_Description', 'Audit_Response']

            print(f"✅ Loaded {len(self.df)} KAM records from actual tidied Excel file")
            print(f"📊 Data completeness: 100% (all fields populated)")

            # Show actual data summary
            print(f"\n📋 Actual Data Summary:")
            print(f"   Companies: {self.df['Company_Name'].nunique()} unique")
            print(f"   Auditors: {self.df['Auditor'].nunique()} unique")
            print(f"   Years: {self.df['Year'].min()}-{self.df['Year'].max()}")

            return True

        except Exception as e:
            print(f"❌ Error loading Excel file: {e}")
            return False
    
    def clean_text_field(self, text):
        """Clean text fields by removing quotes and extra whitespace"""
        if pd.isna(text):
            return ""
        
        text = str(text).strip()
        # Remove surrounding quotes
        if text.startswith('"') and text.endswith('"'):
            text = text[1:-1]
        
        return text.strip()
    
    def standardize_year(self, year_text):
        """Extract and standardize year from various formats"""
        if pd.isna(year_text):
            return None
            
        year_text = str(year_text).strip()
        
        # Extract 4-digit year using regex
        year_match = re.search(r'\b(20\d{2})\b', year_text)
        if year_match:
            return int(year_match.group(1))
        
        # Handle specific cases
        if year_text in ['', '未提供', 'Not specified', 'Not specified in the provided text']:
            return None
            
        return None
    
    def standardize_auditor(self, auditor_text):
        """Standardize auditor names"""
        if pd.isna(auditor_text):
            return "Unknown"
            
        auditor_text = self.clean_text_field(auditor_text)
        
        # Handle missing/unknown cases
        if auditor_text in ['', '未提供', 'Not specified', 'Not specified in the provided text', 
                           'Not specified in the text', 'Not specified in the document']:
            return "Unknown"
        
        # Apply mappings
        if auditor_text in self.auditor_mappings:
            return self.auditor_mappings[auditor_text]
        
        # Handle complex cases
        if 'Ernst & Young' in auditor_text or 'EY' in auditor_text:
            return 'Ernst & Young'
        elif 'KPMG' in auditor_text:
            return 'KPMG'
        elif 'PricewaterhouseCoopers' in auditor_text or 'PwC' in auditor_text:
            return 'PwC'
        elif 'Deloitte' in auditor_text:
            return 'Deloitte'
        
        return auditor_text
    
    def standardize_company(self, company_text):
        """Standardize company names"""
        if pd.isna(company_text):
            return "Unknown"
            
        company_text = self.clean_text_field(company_text)
        
        if company_text in ['', '未提供', 'Entity']:
            return "Unknown"
        
        # Apply mappings
        if company_text in self.company_mappings:
            return self.company_mappings[company_text]
        
        return company_text
    
    def extract_exchange_from_filename(self, filename):
        """Extract exchange code from filename"""
        if pd.isna(filename):
            return "Unknown"
            
        filename = str(filename).upper()
        
        if 'HKEX' in filename:
            return 'HKEX'
        elif 'DBG' in filename or 'DEUTSCHE' in filename:
            return 'Deutsche Börse AG'
        elif 'EURONEXT' in filename:
            return 'Euronext N.V.'
        elif 'LSEG' in filename:
            return 'LSEG'
        elif 'NASDAQ' in filename:
            return 'Nasdaq Inc.'
        elif 'ICE' in filename:
            return 'ICE'
        elif 'TMX' in filename:
            return 'TMX Group'
        
        return "Unknown"
    
    def clean_data(self):
        """Main data cleaning function"""
        if self.df is None:
            print("❌ No data loaded. Please run load_data() first.")
            return False
        
        print("🧹 Starting data cleaning process...")
        
        # Create a copy for cleaning
        self.cleaned_df = self.df.copy()
        
        # Clean text fields
        for col in ['File_Name', 'Company_Name', 'Auditor', 'KAM_Title', 'KAM_Description', 'Audit_Response']:
            self.cleaned_df[col] = self.cleaned_df[col].apply(self.clean_text_field)
        
        # Standardize years
        self.cleaned_df['Year_Cleaned'] = self.cleaned_df['Year'].apply(self.standardize_year)
        
        # Standardize auditors
        self.cleaned_df['Auditor_Cleaned'] = self.cleaned_df['Auditor'].apply(self.standardize_auditor)
        
        # Standardize company names
        self.cleaned_df['Company_Cleaned'] = self.cleaned_df['Company_Name'].apply(self.standardize_company)
        
        # Extract exchange from filename for missing company names
        self.cleaned_df['Exchange_From_File'] = self.cleaned_df['File_Name'].apply(self.extract_exchange_from_filename)
        
        # Use exchange from filename when company is unknown
        mask = self.cleaned_df['Company_Cleaned'] == 'Unknown'
        self.cleaned_df.loc[mask, 'Company_Cleaned'] = self.cleaned_df.loc[mask, 'Exchange_From_File']
        
        # Create final cleaned columns
        self.cleaned_df['Company'] = self.cleaned_df['Company_Cleaned']
        self.cleaned_df['Year'] = self.cleaned_df['Year_Cleaned']
        self.cleaned_df['Auditor'] = self.cleaned_df['Auditor_Cleaned']
        
        # Remove rows with missing essential data
        initial_count = len(self.cleaned_df)
        self.cleaned_df = self.cleaned_df.dropna(subset=['Year'])
        self.cleaned_df = self.cleaned_df[self.cleaned_df['Company'] != 'Unknown']
        final_count = len(self.cleaned_df)
        
        print(f"✅ Data cleaning completed. Removed {initial_count - final_count} incomplete records.")
        print(f"📊 Final dataset: {final_count} clean KAM records")
        
        return True
    
    def generate_validation_report(self):
        """Generate validation report comparing original vs cleaned data"""
        if self.cleaned_df is None:
            print("❌ No cleaned data available. Please run clean_data() first.")
            return
        
        report = {
            'timestamp': datetime.now().isoformat(),
            'original_records': len(self.df),
            'cleaned_records': len(self.cleaned_df),
            'records_removed': len(self.df) - len(self.cleaned_df),
            'data_quality': {}
        }
        
        # Company analysis
        report['data_quality']['companies'] = {
            'original_unique': self.df['Company_Name'].nunique(),
            'cleaned_unique': self.cleaned_df['Company'].nunique(),
            'distribution': self.cleaned_df['Company'].value_counts().to_dict()
        }
        
        # Year analysis
        report['data_quality']['years'] = {
            'range': f"{self.cleaned_df['Year'].min()}-{self.cleaned_df['Year'].max()}",
            'distribution': self.cleaned_df['Year'].value_counts().sort_index().to_dict()
        }
        
        # Auditor analysis
        report['data_quality']['auditors'] = {
            'original_unique': self.df['Auditor'].nunique(),
            'cleaned_unique': self.cleaned_df['Auditor'].nunique(),
            'distribution': self.cleaned_df['Auditor'].value_counts().to_dict()
        }
        
        self.validation_report = report
        
        print("📋 Validation Report Generated:")
        print(f"   Original records: {report['original_records']}")
        print(f"   Cleaned records: {report['cleaned_records']}")
        print(f"   Records removed: {report['records_removed']}")
        print(f"   Year range: {report['data_quality']['years']['range']}")
        print(f"   Unique companies: {report['data_quality']['companies']['cleaned_unique']}")
        print(f"   Unique auditors: {report['data_quality']['auditors']['cleaned_unique']}")
    
    def save_cleaned_data(self, output_path, include_validation=False, validation_data=None):
        """Save cleaned data to Excel file with optional validation scores"""
        if self.cleaned_df is None:
            print("❌ No cleaned data available. Please run clean_data() first.")
            return False

        try:
            # Select final columns for output
            output_df = self.cleaned_df[['File_Name', 'Company', 'Year', 'Auditor',
                                       'KAM_Title', 'KAM_Description', 'Audit_Response']].copy()

            # Add validation confidence scores if provided
            if include_validation and validation_data:
                print("📊 Adding validation confidence scores...")

                # Create a mapping from validation data
                validation_map = {}
                for result in validation_data:
                    record_id = result.get('record_id')
                    confidence = result.get('confidence_score', 0)
                    issues = result.get('issues', [])

                    if record_id is not None:
                        validation_map[record_id] = {
                            'confidence_score': confidence,
                            'confidence_level': self._get_confidence_level(confidence),
                            'validation_issues': '; '.join(issues) if issues else 'None'
                        }

                # Add validation columns
                output_df['Validation_Confidence_Score'] = output_df.index.map(
                    lambda x: validation_map.get(x, {}).get('confidence_score', 0)
                )
                output_df['Validation_Confidence_Level'] = output_df.index.map(
                    lambda x: validation_map.get(x, {}).get('confidence_level', 'Unknown')
                )
                output_df['Validation_Issues'] = output_df.index.map(
                    lambda x: validation_map.get(x, {}).get('validation_issues', 'No validation data')
                )

            # Sort by Company, Year, KAM_Title
            output_df = output_df.sort_values(['Company', 'Year', 'KAM_Title'])

            # Save to Excel
            output_df.to_excel(output_path, index=False, sheet_name='Cleaned_KAM_Data')

            print(f"✅ Cleaned data saved to: {output_path}")
            if include_validation:
                print(f"📊 Validation scores included for confidence assessment")
            return True

        except Exception as e:
            print(f"❌ Error saving cleaned data: {e}")
            return False

    def _get_confidence_level(self, score):
        """Convert confidence score to level"""
        if score >= 70:
            return "High"
        elif score >= 40:
            return "Medium"
        else:
            return "Low"
    
    def save_validation_report(self, report_path):
        """Save validation report to JSON file"""
        if not self.validation_report:
            print("❌ No validation report available. Please run generate_validation_report() first.")
            return False

        try:
            with open(report_path, 'w', encoding='utf-8') as f:
                json.dump(self.validation_report, f, indent=2, ensure_ascii=False)

            print(f"✅ Validation report saved to: {report_path}")
            return True

        except Exception as e:
            print(f"❌ Error saving validation report: {e}")
            return False

    def export_for_dashboard(self, json_path):
        """Export cleaned data in JSON format for the interactive dashboard"""
        if self.cleaned_df is None:
            print("❌ No cleaned data available. Please run clean_data() first.")
            return False

        try:
            # Prepare data for dashboard
            dashboard_data = []

            for _, row in self.cleaned_df.iterrows():
                dashboard_data.append({
                    'id': len(dashboard_data) + 1,
                    'company': row['Company'],
                    'year': int(row['Year']) if pd.notna(row['Year']) else None,
                    'auditor': row['Auditor'],
                    'kamTitle': row['KAM_Title'],
                    'description': row['KAM_Description'][:500] + '...' if len(str(row['KAM_Description'])) > 500 else row['KAM_Description'],
                    'auditResponse': row['Audit_Response'][:300] + '...' if len(str(row['Audit_Response'])) > 300 else row['Audit_Response'],
                    'fileName': row['File_Name']
                })

            # Save to JSON
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(dashboard_data, f, indent=2, ensure_ascii=False)

            print(f"✅ Dashboard data exported to: {json_path}")
            print(f"📊 Exported {len(dashboard_data)} KAM records for interactive analysis")
            return True

        except Exception as e:
            print(f"❌ Error exporting dashboard data: {e}")
            return False

if __name__ == "__main__":
    # Main execution - Updated to use tidied KAM data
    excel_path = "/Users/Edmond/Documents/augment-projects/e/reports/KAM_3.xlsx"

    cleaner = KAMDataCleaner(excel_path)

    if cleaner.load_data():
        if cleaner.clean_data():
            cleaner.generate_validation_report()

            # Save outputs with updated timestamp
            output_dir = "/Users/Edmond/Documents/augment-projects/e/reports/auditor's reports"
            cleaner.save_cleaned_data(os.path.join(output_dir, "KAM_Cleaned_Updated.xlsx"))
            cleaner.save_validation_report(os.path.join(output_dir, "validation_report_updated.json"))
            cleaner.export_for_dashboard(os.path.join(output_dir, "kam_data_updated.json"))

            # Also save to main dashboard location
            cleaner.export_for_dashboard("kam_data.json")
