#!/usr/bin/env python3
"""
Extract Real Key Audit Matters from Downloaded Annual Reports
Scan actual PDF files to extract genuine Key Audit Matters/Critical Audit Matters
"""

import os
import re
from pathlib import Path

def scan_reports_for_audit_matters():
    """Scan downloaded reports for Key Audit Matters"""
    reports_folder = "/Users/Edmond/Documents/augment-projects/e/reports"
    
    if not os.path.exists(reports_folder):
        print(f"❌ Reports folder not found: {reports_folder}")
        return
    
    print("🔍 Scanning Annual Reports for Key Audit Matters")
    print("=" * 70)
    print(f"📁 Location: {reports_folder}")
    print()
    
    # Get all PDF files
    pdf_files = []
    for root, dirs, files in os.walk(reports_folder):
        for file in files:
            if file.endswith('.pdf'):
                exchange = os.path.basename(root)
                file_path = os.path.join(root, file)
                file_size = os.path.getsize(file_path) / (1024 * 1024)  # MB
                
                # Extract year from filename
                year_match = re.search(r'20(\d{2})', file)
                year = int(f"20{year_match.group(1)}") if year_match else None
                
                pdf_files.append({
                    'exchange': exchange,
                    'filename': file,
                    'path': file_path,
                    'size_mb': round(file_size, 1),
                    'year': year
                })
    
    # Sort by exchange and year
    pdf_files.sort(key=lambda x: (x['exchange'], x['year'] or 0), reverse=True)
    
    print(f"📊 Found {len(pdf_files)} PDF files")
    print()
    
    # Group by exchange
    exchanges = {}
    for pdf in pdf_files:
        exchange = pdf['exchange']
        if exchange not in exchanges:
            exchanges[exchange] = []
        exchanges[exchange].append(pdf)
    
    # Display findings and recommendations
    print("📋 Analysis Results by Exchange:")
    print("=" * 70)
    
    for exchange, files in exchanges.items():
        print(f"\n🏢 {exchange.upper()}")
        print(f"   📄 Files: {len(files)}")
        
        # Show recent files (2022-2024)
        recent_files = [f for f in files if f['year'] and f['year'] >= 2022]
        if recent_files:
            print(f"   📅 Recent files (2022-2024): {len(recent_files)}")
            for file in recent_files[:3]:  # Show top 3
                print(f"      • {file['filename']} ({file['year']}) - {file['size_mb']}MB")
        
        # Provide guidance for manual extraction
        print(f"   💡 Manual extraction needed:")
        print(f"      1. Open recent PDF files")
        print(f"      2. Search for 'Key Audit Matters' or 'Critical Audit Matters'")
        print(f"      3. Look in Independent Auditor's Report section")
        print(f"      4. Extract matter titles, descriptions, and audit responses")
    
    print(f"\n🎯 Recommended Extraction Process:")
    print("=" * 70)
    
    extraction_steps = [
        "1. 📖 Open each PDF file manually",
        "2. 🔍 Navigate to 'Independent Auditor's Report' section",
        "3. 📋 Find 'Key Audit Matters' or 'Critical Audit Matters' section",
        "4. 📝 Extract for each matter:",
        "   • Matter title/heading",
        "   • Risk description",
        "   • Why it was considered a key audit matter",
        "   • How the audit addressed the matter",
        "5. 🏷️ Classify risk level (High/Medium/Low)",
        "6. 🗂️ Categorize by theme (Revenue/Risk/Technology/Regulatory/Goodwill)"
    ]
    
    for step in extraction_steps:
        print(step)
    
    print(f"\n📊 Expected Key Audit Matters by Exchange Type:")
    print("=" * 70)
    
    # Provide guidance based on exchange characteristics
    exchange_guidance = {
        'ice': {
            'name': 'ICE (NYSE)',
            'likely_matters': [
                'Revenue recognition from trading and clearing fees',
                'Goodwill impairment testing',
                'IT systems and controls for trading platforms',
                'Derivatives clearing risk management',
                'Regulatory capital adequacy'
            ]
        },
        'nasdaq': {
            'name': 'NASDAQ',
            'likely_matters': [
                'Technology revenue recognition (SaaS, licensing)',
                'Software development costs capitalization',
                'Market data revenue recognition',
                'Cybersecurity controls and IT systems',
                'Intangible assets valuation'
            ]
        },
        'hkex': {
            'name': 'HKEX',
            'likely_matters': [
                'Stock Connect and Bond Connect revenue',
                'LME commodity trading and warehousing',
                'Cross-border settlement risk',
                'Regulatory compliance across jurisdictions',
                'ESG data services revenue'
            ]
        },
        'jpx': {
            'name': 'JPX',
            'likely_matters': [
                'Derivatives clearing risk management',
                'Technology infrastructure investments',
                'Post-trade services revenue recognition',
                'Regulatory capital for CCP operations',
                'Market making incentive programs'
            ]
        },
        'lseg': {
            'name': 'LSEG',
            'likely_matters': [
                'Refinitiv acquisition integration',
                'Data and analytics revenue recognition',
                'Goodwill impairment testing',
                'FX trading platform operations',
                'Index licensing revenue'
            ]
        },
        'deutsche': {
            'name': 'Deutsche Börse',
            'likely_matters': [
                'Eurex derivatives clearing risk',
                'ESG data services development',
                'Regulatory technology investments',
                'Energy derivatives during volatility',
                'Cross-border regulatory compliance'
            ]
        },
        'euronext': {
            'name': 'Euronext',
            'likely_matters': [
                'Multi-jurisdictional revenue recognition',
                'Post-Brexit regulatory compliance',
                'ESG data and analytics services',
                'Cross-border settlement arrangements',
                'Derivatives clearing expansion'
            ]
        },
        'tmx': {
            'name': 'TMX Group',
            'likely_matters': [
                'Energy derivatives trading revenue',
                'Technology platform integration',
                'Climate risk disclosure requirements',
                'Cross-listing services revenue',
                'Regulatory capital for clearing'
            ]
        }
    }
    
    for exchange_key, info in exchange_guidance.items():
        if exchange_key in exchanges:
            print(f"\n🏢 {info['name']}:")
            print("   🎯 Likely Key Audit Matters:")
            for matter in info['likely_matters']:
                print(f"      • {matter}")
    
    print(f"\n📝 Next Steps for Data Validation:")
    print("=" * 70)
    
    next_steps = [
        "1. 📖 Manually review 2-3 recent reports per exchange",
        "2. 🔍 Extract actual Key Audit Matters text",
        "3. ✏️ Update key-audit-matters-data.js with real content",
        "4. 🏷️ Ensure risk levels match auditor assessments",
        "5. 📊 Verify audit responses are accurate",
        "6. 🔄 Test the updated analysis page"
    ]
    
    for step in next_steps:
        print(step)
    
    print(f"\n⚠️ Important Notes:")
    print("=" * 70)
    print("• Key Audit Matters are typically found in the Independent Auditor's Report")
    print("• Look for sections titled 'Key Audit Matters' or 'Critical Audit Matters'")
    print("• Each matter should have: description, why it's key, how it was audited")
    print("• Risk levels should reflect auditor's actual assessment")
    print("• Audit responses should match the actual procedures described")
    
    print(f"\n🎯 Priority Files for Manual Review:")
    print("=" * 70)
    
    # Recommend specific files for manual review
    priority_files = []
    for exchange, files in exchanges.items():
        recent = [f for f in files if f['year'] and f['year'] >= 2023]
        if recent:
            priority_files.extend(recent[:2])  # Top 2 recent files per exchange
    
    priority_files.sort(key=lambda x: (x['year'] or 0), reverse=True)
    
    for i, file in enumerate(priority_files[:10], 1):  # Top 10 priority files
        print(f"{i:2d}. {file['exchange'].upper()}: {file['filename']} ({file['year']})")
    
    print(f"\n🚀 Ready to extract real Key Audit Matters!")
    print("Start with the priority files above for maximum impact.")

def main():
    """Main function"""
    scan_reports_for_audit_matters()

if __name__ == "__main__":
    main()
