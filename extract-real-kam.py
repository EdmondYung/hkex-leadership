#!/usr/bin/env python3
"""
Extract Real Key Audit Matters from PDF Annual Reports
Comprehensive extraction from all downloaded PDF files (2015-2024)
"""

import os
import re
import json
import pdfplumber
from datetime import datetime

def extract_kam_from_pdf(pdf_path):
    """Extract Key Audit Matters from a single PDF"""
    print(f"📄 Processing: {os.path.basename(pdf_path)}")
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            total_pages = len(pdf.pages)
            
            # Find pages with Key Audit Matters
            kam_pages = []
            auditor_firm = "Unknown"
            
            # Search for KAM and auditor info
            for i in range(total_pages):
                page_text = pdf.pages[i].extract_text()
                if page_text:
                    # Look for Key Audit Matters
                    if re.search(r'key audit matters|critical audit matters', page_text, re.IGNORECASE):
                        kam_pages.append(i)
                    
                    # Extract auditor firm
                    if "Ernst & Young" in page_text:
                        auditor_firm = "Ernst & Young LLP"
                    elif "Deloitte" in page_text:
                        auditor_firm = "Deloitte LLP"
                    elif "KPMG" in page_text:
                        auditor_firm = "KPMG LLP"
                    elif "PricewaterhouseCoopers" in page_text or "PwC" in page_text:
                        auditor_firm = "PricewaterhouseCoopers LLP"
            
            if not kam_pages:
                print(f"   ⚠️ No Key Audit Matters found")
                return None
            
            print(f"   🎯 Found KAM on pages: {[p+1 for p in kam_pages]}")
            print(f"   👥 Auditor: {auditor_firm}")
            
            # Extract text from KAM pages
            kam_text = ""
            for page_num in kam_pages:
                page_text = pdf.pages[page_num].extract_text()
                if page_text:
                    kam_text += page_text + "\n"
            
            # Parse individual matters
            matters = parse_audit_matters(kam_text)
            
            print(f"   ✅ Extracted {len(matters)} matters")
            
            return {
                "auditor": auditor_firm,
                "matters": matters
            }
            
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return None

def parse_audit_matters(kam_text):
    """Parse individual audit matters from KAM text"""
    matters = []
    
    # Clean up text
    kam_text = re.sub(r'\s+', ' ', kam_text)
    
    # Common patterns for matter identification
    matter_patterns = [
        # Pattern 1: Clear headings with common audit matter terms
        r'(?:^|\n)([A-Z][^.\n]*(?:revenue|goodwill|impairment|valuation|assessment|recognition|risk|technology|systems|controls|compliance|derivatives|clearing|data|esg|regulatory|capital|intangible|software)[^.\n]*?)[\n\.]([^A-Z]*?)(?=\n[A-Z][^.\n]*(?:revenue|goodwill|impairment|valuation|assessment|recognition|risk|technology|systems|controls|compliance|derivatives|clearing|data|esg|regulatory|capital|intangible|software)|\nHow our audit|\nOur audit|\nWe performed|\Z)',
        
        # Pattern 2: Numbered or bulleted matters
        r'(?:^|\n)(?:\d+\.?\s*|•\s*)?([A-Z][^.\n]{20,100}?)[\n\.]([^A-Z]*?)(?=\n(?:\d+\.?\s*|•\s*)?[A-Z][^.\n]{20,100}|\nHow our audit|\nOur audit|\nWe performed|\Z)',
        
        # Pattern 3: Bold or emphasized headings
        r'(?:^|\n)([A-Z][A-Z\s]{10,80})[\n\.]([^A-Z]*?)(?=\n[A-Z][A-Z\s]{10,80}|\nHow our audit|\nOur audit|\nWe performed|\Z)'
    ]
    
    for pattern in matter_patterns:
        matches = re.finditer(pattern, kam_text, re.DOTALL | re.MULTILINE)
        
        for match in matches:
            title = match.group(1).strip()
            description = match.group(2).strip()
            
            # Clean up title and description
            title = re.sub(r'\s+', ' ', title)
            description = re.sub(r'\s+', ' ', description)
            
            # Validate matter
            if (len(title) >= 15 and len(title) <= 150 and 
                len(description) >= 30 and
                any(keyword in title.lower() for keyword in 
                    ['revenue', 'goodwill', 'impairment', 'valuation', 'assessment', 
                     'recognition', 'risk', 'technology', 'systems', 'controls', 
                     'compliance', 'derivatives', 'clearing', 'data', 'esg', 
                     'regulatory', 'capital', 'intangible', 'software'])):
                
                # Extract audit response
                audit_response = extract_audit_response(description)
                if audit_response:
                    description = description.replace(audit_response, '').strip()
                
                # Determine risk level
                risk_level = determine_risk_level(title, description)
                
                matter = {
                    "title": title,
                    "description": description[:500],  # Limit description length
                    "riskLevel": risk_level,
                    "auditResponse": audit_response[:300] if audit_response else "Audit procedures performed to address this matter."
                }
                
                # Avoid duplicates
                if not any(existing['title'].lower() == title.lower() for existing in matters):
                    matters.append(matter)
    
    return matters

def extract_audit_response(text):
    """Extract audit response from matter description"""
    response_patterns = [
        r'(?:How our audit|Our audit|We performed|Our procedures|We tested|We evaluated|We examined|We assessed).*',
        r'(?:The audit procedures|Audit procedures|Our testing|We conducted).*'
    ]
    
    for pattern in response_patterns:
        match = re.search(pattern, text, re.DOTALL | re.IGNORECASE)
        if match:
            return match.group(0).strip()
    
    return ""

def determine_risk_level(title, description):
    """Determine risk level based on content"""
    text = (title + " " + description).lower()
    
    # High risk indicators
    high_risk_keywords = [
        'significant', 'material', 'complex', 'judgment', 'estimate', 'uncertainty',
        'impairment', 'goodwill', 'fair value', 'derivatives', 'clearing', 
        'risk management', 'regulatory capital', 'credit risk'
    ]
    
    # Medium risk indicators
    medium_risk_keywords = [
        'revenue', 'recognition', 'technology', 'systems', 'controls', 'compliance',
        'regulatory', 'data', 'integration', 'valuation', 'assessment'
    ]
    
    high_score = sum(1 for keyword in high_risk_keywords if keyword in text)
    medium_score = sum(1 for keyword in medium_risk_keywords if keyword in text)
    
    if high_score >= 2 or any(keyword in text for keyword in ['significant', 'material', 'complex']):
        return "High"
    elif medium_score >= 2 or high_score >= 1:
        return "Medium"
    else:
        return "Low"

def get_exchange_info(exchange_key):
    """Get exchange full name and expected auditor"""
    exchange_info = {
        'ice': {
            'name': 'Intercontinental Exchange, Inc. (ICE/NYSE)',
            'expected_auditor': 'Ernst & Young LLP'
        },
        'nasdaq': {
            'name': 'Nasdaq, Inc.',
            'expected_auditor': 'Ernst & Young LLP'
        },
        'hkex': {
            'name': 'Hong Kong Exchanges and Clearing Limited (HKEX)',
            'expected_auditor': 'PricewaterhouseCoopers LLP'
        },
        'jpx': {
            'name': 'Japan Exchange Group, Inc. (JPX)',
            'expected_auditor': 'Ernst & Young ShinNihon LLC'
        },
        'lseg': {
            'name': 'London Stock Exchange Group plc (LSEG)',
            'expected_auditor': 'Deloitte LLP'
        },
        'deutsche': {
            'name': 'Deutsche Börse AG',
            'expected_auditor': 'KPMG AG'
        },
        'euronext': {
            'name': 'Euronext N.V.',
            'expected_auditor': 'Deloitte Accountants B.V.'
        },
        'tmx': {
            'name': 'TMX Group Limited',
            'expected_auditor': 'Deloitte LLP'
        }
    }
    
    return exchange_info.get(exchange_key, {
        'name': exchange_key.upper(),
        'expected_auditor': 'Unknown'
    })

def process_all_pdfs():
    """Process all PDF files and extract KAM data"""
    reports_folder = "/Users/Edmond/Documents/augment-projects/e/reports"
    
    if not os.path.exists(reports_folder):
        print(f"❌ Reports folder not found: {reports_folder}")
        return
    
    print("🔍 Extracting Key Audit Matters from All PDF Reports")
    print("=" * 70)
    
    # Collect all PDF files
    pdf_files = []
    for root, dirs, files in os.walk(reports_folder):
        for file in files:
            if file.endswith('.pdf'):
                exchange = os.path.basename(root)
                file_path = os.path.join(root, file)
                
                # Extract year from filename
                year_match = re.search(r'20(\d{2})', file)
                year = int(f"20{year_match.group(1)}") if year_match else None
                
                if year and year >= 2015:  # Only process 2015-2024
                    pdf_files.append({
                        'exchange': exchange,
                        'filename': file,
                        'path': file_path,
                        'year': year
                    })
    
    print(f"📊 Found {len(pdf_files)} PDF files (2015-2024)")
    
    # Process files and extract data
    extracted_data = {}
    
    for pdf_info in pdf_files:
        exchange = pdf_info['exchange']
        year = pdf_info['year']
        
        if exchange not in extracted_data:
            exchange_info = get_exchange_info(exchange)
            extracted_data[exchange] = {
                'name': exchange_info['name'],
                'auditor': exchange_info['expected_auditor'],
                'matters': []
            }
        
        result = extract_kam_from_pdf(pdf_info['path'])
        
        if result and result['matters']:
            # Update auditor if found
            if result['auditor'] != 'Unknown':
                extracted_data[exchange]['auditor'] = result['auditor']
            
            # Add matters with year info
            for matter in result['matters']:
                matter['year'] = year
                matter['filename'] = pdf_info['filename']
                extracted_data[exchange]['matters'].append(matter)
    
    return extracted_data

def generate_javascript_database(data):
    """Generate the JavaScript database file"""
    print("\n📝 Generating JavaScript database...")
    
    js_content = f'''// Key Audit Matters Database for Global Stock Exchanges (2015-2024)
// Extracted from actual annual reports using automated PDF processing
// Generated on: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
// Total matters extracted: {sum(len(exchange_data['matters']) for exchange_data in data.values())}

const keyAuditMattersData = {{
'''
    
    for exchange_key, exchange_data in data.items():
        if not exchange_data['matters']:
            continue
        
        js_content += f'''    {exchange_key}: {{
        name: "{exchange_data['name']}",
        auditor: "{exchange_data['auditor']}",
        matters: [
'''
        
        # Group matters by year
        matters_by_year = {}
        for matter in exchange_data['matters']:
            year = matter['year']
            if year not in matters_by_year:
                matters_by_year[year] = []
            matters_by_year[year].append(matter)
        
        for year in sorted(matters_by_year.keys(), reverse=True):
            js_content += f'''            {{
                year: {year},
                keyMatters: [
'''
            for matter in matters_by_year[year]:
                title = matter['title'].replace('"', '\\"').replace('\n', ' ')
                description = matter['description'].replace('"', '\\"').replace('\n', ' ')
                audit_response = matter['auditResponse'].replace('"', '\\"').replace('\n', ' ')
                
                js_content += f'''                    {{
                        title: "{title}",
                        description: "{description}",
                        riskLevel: "{matter['riskLevel']}",
                        auditResponse: "{audit_response}"
                    }},
'''
            
            js_content += '''                ]
            },
'''
        
        js_content += '''        ]
    },

'''
    
    # Add analysis functions
    js_content += '''};

// Key Audit Matters Analysis Functions
const keyAuditMattersAnalysis = {
    // Get all matters by risk level
    getMattersByRiskLevel: function(riskLevel) {
        const matters = [];
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            exchange.matters.forEach(yearData => {
                yearData.keyMatters.forEach(matter => {
                    if (matter.riskLevel === riskLevel) {
                        matters.push({
                            exchange: exchange.name,
                            exchangeKey: exchangeKey,
                            year: yearData.year,
                            auditor: exchange.auditor,
                            ...matter
                        });
                    }
                });
            });
        });
        return matters;
    },

    // Get matters by theme
    getMattersByTheme: function(theme) {
        const matters = [];
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            exchange.matters.forEach(yearData => {
                yearData.keyMatters.forEach(matter => {
                    if (matter.title.toLowerCase().includes(theme.toLowerCase()) || 
                        matter.description.toLowerCase().includes(theme.toLowerCase())) {
                        matters.push({
                            exchange: exchange.name,
                            exchangeKey: exchangeKey,
                            year: yearData.year,
                            auditor: exchange.auditor,
                            ...matter
                        });
                    }
                });
            });
        });
        return matters;
    },

    // Get trending matters
    getTrendingMatters: function() {
        const matterCounts = {};
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            exchange.matters.forEach(yearData => {
                yearData.keyMatters.forEach(matter => {
                    const key = matter.title.split(' ')[0];
                    matterCounts[key] = (matterCounts[key] || 0) + 1;
                });
            });
        });
        
        return Object.entries(matterCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([matter, count]) => ({ matter, count }));
    }
};'''
    
    with open('key-audit-matters-data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print("✅ Generated key-audit-matters-data.js")

def generate_summary_report(data):
    """Generate extraction summary report"""
    print("\n📊 Generating summary report...")
    
    total_matters = sum(len(exchange_data['matters']) for exchange_data in data.values())
    
    report = f"""# 🔍 Key Audit Matters Extraction Report

**Generated**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  
**Source**: Automated extraction from PDF annual reports  
**Total Matters Extracted**: {total_matters}

## 📊 Extraction Results by Exchange

"""
    
    for exchange_key, exchange_data in data.items():
        matters_count = len(exchange_data['matters'])
        
        report += f"""### 🏢 {exchange_data['name']}
- **Auditor**: {exchange_data['auditor']}
- **Key Audit Matters Extracted**: {matters_count}
"""
        
        if exchange_data['matters']:
            years = sorted(set(m['year'] for m in exchange_data['matters']))
            report += f"- **Years Covered**: {min(years)}-{max(years)}\n"
            
            risk_dist = {}
            for matter in exchange_data['matters']:
                risk = matter['riskLevel']
                risk_dist[risk] = risk_dist.get(risk, 0) + 1
            
            report += f"- **Risk Distribution**: {', '.join([f'{risk}: {count}' for risk, count in risk_dist.items()])}\n"
            
            # Show sample matters
            report += "- **Sample Matters**:\n"
            for matter in exchange_data['matters'][:3]:
                report += f"  - {matter['title']} ({matter['riskLevel']})\n"
        
        report += "\n"
    
    report += f"""## 🎯 Overall Statistics

- **Total Exchanges Processed**: {len(data)}
- **Total Key Audit Matters**: {total_matters}
- **Average per Exchange**: {total_matters/len(data):.1f}
- **Extraction Success Rate**: {len([e for e in data.values() if e['matters']])/len(data)*100:.1f}%

## 📈 Next Steps

1. ✅ Review extracted data in `key-audit-matters-data.js`
2. 🔧 Test the updated `key-audit-matters.html` page
3. 📊 Verify statistics and charts display correctly
4. 🎯 Use the analysis tools for research and insights

---
*This report was generated automatically from {len([f for exchange_data in data.values() for f in exchange_data.get('files', [])])} PDF files.*
"""
    
    with open('KAM_EXTRACTION_REPORT.md', 'w', encoding='utf-8') as f:
        f.write(report)
    
    print("✅ Generated KAM_EXTRACTION_REPORT.md")

def main():
    """Main extraction function"""
    print("🚀 Starting Key Audit Matters Extraction")
    print("=" * 70)
    
    # Process all PDFs
    extracted_data = process_all_pdfs()
    
    if not extracted_data:
        print("❌ No data extracted")
        return
    
    # Generate outputs
    generate_javascript_database(extracted_data)
    generate_summary_report(extracted_data)
    
    print("\n🎉 Extraction Complete!")
    print("=" * 70)
    print("✅ Updated key-audit-matters-data.js with real data")
    print("✅ Generated extraction report")
    print("🔧 Ready to test key-audit-matters.html")

if __name__ == "__main__":
    main()
