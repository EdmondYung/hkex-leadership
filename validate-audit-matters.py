#!/usr/bin/env python3
"""
Validate Key Audit Matters Data
Help users verify and update the key audit matters database with actual extracted data
"""

import json
import re
import os

def load_current_data():
    """Load current key audit matters data"""
    try:
        with open('key-audit-matters-data.js', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the data object (simplified parsing)
        start = content.find('const keyAuditMattersData = {')
        end = content.rfind('};')
        
        if start == -1 or end == -1:
            print("❌ Could not parse key-audit-matters-data.js")
            return None
        
        return content
    except FileNotFoundError:
        print("❌ key-audit-matters-data.js not found")
        return None

def analyze_current_data():
    """Analyze current data structure"""
    content = load_current_data()
    if not content:
        return
    
    print("🔍 Current Key Audit Matters Database Analysis")
    print("=" * 60)
    
    # Count exchanges
    exchange_pattern = r'(\w+):\s*{'
    exchanges = re.findall(exchange_pattern, content)
    
    print(f"📊 Exchanges in database: {len(exchanges)}")
    for exchange in exchanges:
        print(f"   🏢 {exchange.upper()}")
    
    # Count total matters
    matter_pattern = r'title:\s*"([^"]+)"'
    matters = re.findall(matter_pattern, content)
    
    print(f"\n📋 Total audit matters: {len(matters)}")
    
    # Count by risk level
    high_risk = len(re.findall(r'riskLevel:\s*"High"', content))
    medium_risk = len(re.findall(r'riskLevel:\s*"Medium"', content))
    low_risk = len(re.findall(r'riskLevel:\s*"Low"', content))
    
    print(f"\n⚠️ Risk Level Distribution:")
    print(f"   🔴 High Risk: {high_risk}")
    print(f"   🟡 Medium Risk: {medium_risk}")
    print(f"   🟢 Low Risk: {low_risk}")
    
    # Extract auditors
    auditor_pattern = r'auditor:\s*"([^"]+)"'
    auditors = re.findall(auditor_pattern, content)
    unique_auditors = list(set(auditors))
    
    print(f"\n👥 Auditors ({len(unique_auditors)}):")
    for auditor in unique_auditors:
        print(f"   • {auditor}")

def create_validation_template():
    """Create a template for manual validation"""
    template = """
# 📋 Key Audit Matters Validation Template

## 🎯 Instructions
For each PDF file you review, fill in the following information:

### Exchange: [EXCHANGE_NAME]
### Year: [YEAR]
### PDF File: [FILENAME]
### Auditor: [AUDITOR_NAME]

---

### Key Audit Matter #1
**Title:** [Exact title from PDF]
**Description:** [Why this is a key audit matter - copy from PDF]
**Risk Level:** [High/Medium/Low - based on auditor's assessment]
**Audit Response:** [How the auditor addressed this matter - copy from PDF]

### Key Audit Matter #2
**Title:** [Exact title from PDF]
**Description:** [Why this is a key audit matter - copy from PDF]
**Risk Level:** [High/Medium/Low - based on auditor's assessment]
**Audit Response:** [How the auditor addressed this matter - copy from PDF]

### Key Audit Matter #3
**Title:** [Exact title from PDF]
**Description:** [Why this is a key audit matter - copy from PDF]
**Risk Level:** [High/Medium/Low - based on auditor's assessment]
**Audit Response:** [How the auditor addressed this matter - copy from PDF]

---

### Notes:
- [Any additional observations]
- [Differences from current database]
- [Recommendations for updates]

"""
    
    with open('audit_matters_validation_template.txt', 'w', encoding='utf-8') as f:
        f.write(template)
    
    print("📝 Created validation template: audit_matters_validation_template.txt")

def generate_update_script():
    """Generate a script to help update the database"""
    script_content = '''#!/usr/bin/env python3
"""
Update Key Audit Matters Database
Use this script to update the database with manually extracted data
"""

def update_exchange_data(exchange_key, exchange_name, auditor, year, matters):
    """
    Update data for a specific exchange
    
    Args:
        exchange_key: e.g., 'ice', 'nasdaq', 'hkex'
        exchange_name: e.g., 'Intercontinental Exchange, Inc.'
        auditor: e.g., 'Ernst & Young LLP'
        year: e.g., 2024
        matters: list of dictionaries with keys: title, description, riskLevel, auditResponse
    """
    
    # Example usage:
    # matters = [
    #     {
    #         "title": "Revenue Recognition from Trading Services",
    #         "description": "Actual description from PDF...",
    #         "riskLevel": "High",
    #         "auditResponse": "Actual audit response from PDF..."
    #     }
    # ]
    
    print(f"Updating {exchange_key} for year {year}")
    print(f"Exchange: {exchange_name}")
    print(f"Auditor: {auditor}")
    print(f"Matters: {len(matters)}")
    
    # TODO: Implement actual update logic
    # This would modify the key-audit-matters-data.js file

# Example usage:
if __name__ == "__main__":
    # Example for ICE 2024
    ice_matters_2024 = [
        {
            "title": "Revenue Recognition from Trading and Clearing Services",
            "description": "ACTUAL DESCRIPTION FROM PDF",
            "riskLevel": "High",
            "auditResponse": "ACTUAL AUDIT RESPONSE FROM PDF"
        }
    ]
    
    update_exchange_data(
        exchange_key="ice",
        exchange_name="Intercontinental Exchange, Inc.",
        auditor="Ernst & Young LLP",
        year=2024,
        matters=ice_matters_2024
    )
'''
    
    with open('update_audit_matters.py', 'w', encoding='utf-8') as f:
        f.write(script_content)
    
    print("🔧 Created update script: update_audit_matters.py")

def check_pdf_accessibility():
    """Check if PDF files are accessible"""
    reports_folder = "/Users/Edmond/Documents/augment-projects/e/reports"
    
    if not os.path.exists(reports_folder):
        print(f"❌ Reports folder not accessible: {reports_folder}")
        return False
    
    print(f"✅ Reports folder accessible: {reports_folder}")
    
    # Count PDF files
    pdf_count = 0
    for root, dirs, files in os.walk(reports_folder):
        pdf_count += len([f for f in files if f.endswith('.pdf')])
    
    print(f"📄 Found {pdf_count} PDF files")
    return True

def main():
    """Main validation function"""
    print("🔍 Key Audit Matters Data Validation Tool")
    print("=" * 60)
    
    # Check current data
    analyze_current_data()
    
    print(f"\n📁 File Accessibility Check")
    print("=" * 60)
    check_pdf_accessibility()
    
    print(f"\n🛠️ Validation Tools")
    print("=" * 60)
    
    # Create validation tools
    create_validation_template()
    generate_update_script()
    
    print(f"\n📋 Validation Process")
    print("=" * 60)
    
    validation_steps = [
        "1. 📖 Open priority PDF files from MANUAL_EXTRACTION_GUIDE.md",
        "2. 📝 Use audit_matters_validation_template.txt to record findings",
        "3. 🔧 Use update_audit_matters.py to update the database",
        "4. ✅ Test the updated key-audit-matters.html page",
        "5. 🔄 Repeat for all priority files"
    ]
    
    for step in validation_steps:
        print(step)
    
    print(f"\n🎯 Priority Validation Files")
    print("=" * 60)
    
    priority_files = [
        "ICE_Annual_2024.pdf - Revenue recognition, goodwill, IT systems",
        "NASDAQ_Annual_2024.pdf - Technology revenue, software costs, market data",
        "HKEX_Annual_2024.pdf - Connect programs, LME operations, cross-border",
        "JPX_Report_2024.pdf - Derivatives clearing, technology infrastructure",
        "LSEG_Annual_2024.pdf - Refinitiv integration, data analytics",
        "DBG-annual-report-2024.pdf - Eurex clearing, ESG data",
        "EURONEXT_Annual_2024.pdf - Multi-jurisdictional revenue, ESG",
        "TMX_Annual_2024.pdf - Energy derivatives, technology integration"
    ]
    
    for i, file in enumerate(priority_files, 1):
        print(f"{i:2d}. {file}")
    
    print(f"\n💡 Validation Tips")
    print("=" * 60)
    
    tips = [
        "• Look for 'Independent Auditor's Report' section",
        "• Search for 'Key Audit Matters' or 'Critical Audit Matters'",
        "• Copy exact text from PDFs for accuracy",
        "• Note the auditor firm name and year",
        "• Classify risk levels based on auditor's language",
        "• Focus on 2024 reports first, then 2023"
    ]
    
    for tip in tips:
        print(tip)
    
    print(f"\n🚀 Ready to validate Key Audit Matters data!")
    print("Use the generated templates and scripts to ensure 100% accuracy.")

if __name__ == "__main__":
    main()
