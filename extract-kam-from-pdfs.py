#!/usr/bin/env python3
"""
Extract Key Audit Matters from PDF Annual Reports
Automatically extract and process Key Audit Matters from all downloaded PDF files
"""

import os
import re
import json
from pathlib import Path
import subprocess
import sys

def install_required_packages():
    """Install required packages for PDF processing"""
    packages = ['PyPDF2', 'pdfplumber', 'nltk']
    
    for package in packages:
        try:
            __import__(package.lower().replace('-', '_'))
            print(f"✅ {package} already installed")
        except ImportError:
            print(f"📦 Installing {package}...")
            subprocess.check_call([sys.executable, "-m", "pip", "install", package])

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF using multiple methods"""
    text = ""
    
    try:
        # Method 1: Try pdfplumber first (better for complex layouts)
        import pdfplumber
        
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
        
        if text.strip():
            return text
            
    except Exception as e:
        print(f"   ⚠️ pdfplumber failed: {e}")
    
    try:
        # Method 2: Fallback to PyPDF2
        import PyPDF2
        
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
                
    except Exception as e:
        print(f"   ⚠️ PyPDF2 failed: {e}")
    
    return text

def find_auditor_report_section(text):
    """Find the Independent Auditor's Report section"""
    # Common patterns for auditor report sections
    patterns = [
        r"INDEPENDENT AUDITOR'?S'? REPORT.*?(?=\n[A-Z][A-Z\s]{10,}|\nCONSOLIDATED|\nNOTES TO|\nMANAGEMENT|\Z)",
        r"REPORT OF INDEPENDENT.*?(?=\n[A-Z][A-Z\s]{10,}|\nCONSOLIDATED|\nNOTES TO|\nMANAGEMENT|\Z)",
        r"Independent Auditor'?s'? Report.*?(?=\n[A-Z][A-Z\s]{10,}|\nConsolidated|\nNotes to|\nManagement|\Z)"
    ]
    
    for pattern in patterns:
        match = re.search(pattern, text, re.DOTALL | re.IGNORECASE)
        if match:
            return match.group(0)
    
    return ""

def extract_key_audit_matters(auditor_section):
    """Extract Key Audit Matters from auditor report section"""
    if not auditor_section:
        return []
    
    # Patterns for Key Audit Matters sections
    kam_patterns = [
        r"KEY AUDIT MATTERS?.*?(?=\n[A-Z][A-Z\s]{10,}|\nOPINION|\nBASIS FOR|\nRESPONSIBILITIES|\Z)",
        r"CRITICAL AUDIT MATTERS?.*?(?=\n[A-Z][A-Z\s]{10,}|\nOPINION|\nBASIS FOR|\nRESPONSIBILITIES|\Z)",
        r"Key Audit Matters?.*?(?=\n[A-Z][A-Z\s]{10,}|\nOpinion|\nBasis for|\nResponsibilities|\Z)",
        r"Critical Audit Matters?.*?(?=\n[A-Z][A-Z\s]{10,}|\nOpinion|\nBasis for|\nResponsibilities|\Z)"
    ]
    
    kam_section = ""
    for pattern in kam_patterns:
        match = re.search(pattern, auditor_section, re.DOTALL | re.IGNORECASE)
        if match:
            kam_section = match.group(0)
            break
    
    if not kam_section:
        return []
    
    # Extract individual matters
    matters = []
    
    # Pattern to identify individual matters (usually numbered or with clear headings)
    matter_patterns = [
        r"(?:^|\n)(?:\d+\.?\s*)?([A-Z][A-Za-z\s,&-]+(?:Recognition|Assessment|Valuation|Management|Controls?|Testing|Compliance|Integration|Impairment|Revenue|Risk|Technology|Systems?|Capital|Derivatives|Clearing|Trading|Data|ESG|Regulatory|Goodwill|Intangible|Software)[A-Za-z\s,&-]*)\n(.*?)(?=\n(?:\d+\.?\s*)?[A-Z][A-Za-z\s,&-]+(?:Recognition|Assessment|Valuation|Management|Controls?|Testing|Compliance|Integration|Impairment|Revenue|Risk|Technology|Systems?|Capital|Derivatives|Clearing|Trading|Data|ESG|Regulatory|Goodwill|Intangible|Software)|\nHow our audit|\nOur audit|\nWe performed|\Z)",
        r"(?:^|\n)([A-Z][A-Za-z\s,&-]{10,})\n(.*?)(?=\n[A-Z][A-Za-z\s,&-]{10,}|\nHow our audit|\nOur audit|\nWe performed|\Z)"
    ]
    
    for pattern in matter_patterns:
        matches = re.finditer(pattern, kam_section, re.DOTALL | re.MULTILINE)
        for match in matches:
            title = match.group(1).strip()
            description = match.group(2).strip()
            
            # Clean up title and description
            title = re.sub(r'\s+', ' ', title)
            description = re.sub(r'\s+', ' ', description)
            
            # Skip if too short or doesn't look like a real matter
            if len(title) < 10 or len(description) < 50:
                continue
            
            # Extract audit response (usually starts with "How our audit", "Our audit", "We performed")
            audit_response = ""
            response_match = re.search(r"(?:How our audit|Our audit|We performed).*", description, re.DOTALL | re.IGNORECASE)
            if response_match:
                audit_response = response_match.group(0).strip()
                description = description[:response_match.start()].strip()
            
            # Determine risk level based on keywords
            risk_level = determine_risk_level(title, description)
            
            matters.append({
                "title": title,
                "description": description,
                "riskLevel": risk_level,
                "auditResponse": audit_response or "Audit procedures performed to address this matter."
            })
    
    return matters

def determine_risk_level(title, description):
    """Determine risk level based on content analysis"""
    high_risk_keywords = [
        "significant", "material", "complex", "judgment", "estimate", "uncertainty",
        "impairment", "goodwill", "fair value", "derivatives", "clearing", "risk management"
    ]
    
    medium_risk_keywords = [
        "revenue", "recognition", "technology", "systems", "controls", "compliance",
        "regulatory", "capital", "data", "integration"
    ]
    
    text = (title + " " + description).lower()
    
    high_score = sum(1 for keyword in high_risk_keywords if keyword in text)
    medium_score = sum(1 for keyword in medium_risk_keywords if keyword in text)
    
    if high_score >= 2 or "significant" in text or "material" in text:
        return "High"
    elif medium_score >= 2 or high_score >= 1:
        return "Medium"
    else:
        return "Low"

def extract_auditor_name(text):
    """Extract auditor firm name from the report"""
    auditor_patterns = [
        r"Ernst & Young LLP",
        r"PricewaterhouseCoopers LLP",
        r"PwC",
        r"Deloitte LLP",
        r"Deloitte & Touche LLP",
        r"KPMG LLP",
        r"KPMG AG",
        r"Ernst & Young ShinNihon LLC"
    ]
    
    for pattern in auditor_patterns:
        if re.search(pattern, text, re.IGNORECASE):
            return pattern
    
    # Generic extraction
    auditor_match = re.search(r"([\w\s&]+(?:LLP|LLC|AG|B\.V\.))", text)
    if auditor_match:
        return auditor_match.group(1).strip()
    
    return "Unknown Auditor"

def process_single_pdf(pdf_path):
    """Process a single PDF file and extract key audit matters"""
    print(f"📄 Processing: {os.path.basename(pdf_path)}")
    
    try:
        # Extract text from PDF
        text = extract_text_from_pdf(pdf_path)
        
        if not text.strip():
            print(f"   ❌ No text extracted")
            return None
        
        print(f"   📝 Extracted {len(text)} characters")
        
        # Find auditor report section
        auditor_section = find_auditor_report_section(text)
        
        if not auditor_section:
            print(f"   ⚠️ No auditor report section found")
            return None
        
        print(f"   🔍 Found auditor section ({len(auditor_section)} chars)")
        
        # Extract key audit matters
        matters = extract_key_audit_matters(auditor_section)
        
        if not matters:
            print(f"   ⚠️ No key audit matters found")
            return None
        
        print(f"   ✅ Extracted {len(matters)} key audit matters")
        
        # Extract auditor name
        auditor = extract_auditor_name(text)
        
        return {
            "auditor": auditor,
            "matters": matters,
            "text_length": len(text),
            "auditor_section_length": len(auditor_section)
        }
        
    except Exception as e:
        print(f"   ❌ Error processing PDF: {e}")
        return None

def main():
    """Main function to process all PDFs"""
    print("🔍 Key Audit Matters Extraction from PDF Reports")
    print("=" * 70)
    
    # Install required packages
    print("📦 Checking required packages...")
    install_required_packages()
    
    reports_folder = "/Users/Edmond/Documents/augment-projects/e/reports"
    
    if not os.path.exists(reports_folder):
        print(f"❌ Reports folder not found: {reports_folder}")
        return
    
    print(f"📁 Scanning: {reports_folder}")
    
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
                
                pdf_files.append({
                    'exchange': exchange,
                    'filename': file,
                    'path': file_path,
                    'year': year
                })
    
    print(f"📊 Found {len(pdf_files)} PDF files")
    
    # Process PDFs and extract data
    extracted_data = {}
    
    for pdf_info in pdf_files:
        exchange = pdf_info['exchange']
        year = pdf_info['year']
        
        if exchange not in extracted_data:
            extracted_data[exchange] = {
                'name': get_exchange_full_name(exchange),
                'auditor': 'Unknown',
                'matters': []
            }
        
        result = process_single_pdf(pdf_info['path'])
        
        if result:
            # Update auditor name
            if result['auditor'] != 'Unknown Auditor':
                extracted_data[exchange]['auditor'] = result['auditor']
            
            # Add matters with year
            for matter in result['matters']:
                matter['year'] = year
                matter['filename'] = pdf_info['filename']
                extracted_data[exchange]['matters'].append(matter)
    
    # Generate JavaScript database
    generate_javascript_database(extracted_data)
    
    # Generate summary report
    generate_summary_report(extracted_data)

def get_exchange_full_name(exchange_key):
    """Get full exchange name"""
    names = {
        'ice': 'Intercontinental Exchange, Inc. (ICE/NYSE)',
        'nasdaq': 'Nasdaq, Inc.',
        'hkex': 'Hong Kong Exchanges and Clearing Limited (HKEX)',
        'jpx': 'Japan Exchange Group, Inc. (JPX)',
        'lseg': 'London Stock Exchange Group plc (LSEG)',
        'deutsche': 'Deutsche Börse AG',
        'euronext': 'Euronext N.V.',
        'tmx': 'TMX Group Limited'
    }
    return names.get(exchange_key, exchange_key.upper())

def generate_javascript_database(data):
    """Generate JavaScript database file"""
    print("\n📝 Generating JavaScript database...")
    
    js_content = '''// Key Audit Matters Database for Global Stock Exchanges (2015-2024)
// Extracted from actual annual reports using automated PDF processing
// Generated on: ''' + str(datetime.now().strftime("%Y-%m-%d %H:%M:%S")) + '''

const keyAuditMattersData = {
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
            if year and year >= 2015:  # Only include valid years
                js_content += f'''            {{
                year: {year},
                keyMatters: [
'''
                for matter in matters_by_year[year]:
                    title = matter['title'].replace('"', '\\"')
                    description = matter['description'].replace('"', '\\"')
                    audit_response = matter['auditResponse'].replace('"', '\\"')
                    
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

    // Get matters by category/theme
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

    // Get trending matters across years
    getTrendingMatters: function() {
        const matterCounts = {};
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            exchange.matters.forEach(yearData => {
                yearData.keyMatters.forEach(matter => {
                    const key = matter.title.split(' - ')[0]; // Get main category
                    matterCounts[key] = (matterCounts[key] || 0) + 1;
                });
            });
        });
        
        return Object.entries(matterCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([matter, count]) => ({ matter, count }));
    },

    // Get auditor-specific patterns
    getAuditorPatterns: function() {
        const auditorMatters = {};
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            const auditor = exchange.auditor.split(' (')[0]; // Clean auditor name
            
            if (!auditorMatters[auditor]) {
                auditorMatters[auditor] = {
                    exchanges: [],
                    totalMatters: 0,
                    riskDistribution: { High: 0, Medium: 0, Low: 0 }
                };
            }
            
            auditorMatters[auditor].exchanges.push(exchange.name);
            
            exchange.matters.forEach(yearData => {
                yearData.keyMatters.forEach(matter => {
                    auditorMatters[auditor].totalMatters++;
                    auditorMatters[auditor].riskDistribution[matter.riskLevel]++;
                });
            });
        });
        
        return auditorMatters;
    }
};'''
    
    with open('key-audit-matters-data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print("✅ Generated key-audit-matters-data.js")

def generate_summary_report(data):
    """Generate summary report"""
    print("\n📊 Generating summary report...")
    
    total_matters = 0
    total_exchanges = len(data)
    
    report = "# 🔍 Key Audit Matters Extraction Report\n\n"
    report += f"**Generated**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n"
    report += "## 📊 Extraction Summary\n\n"
    
    for exchange_key, exchange_data in data.items():
        matters_count = len(exchange_data['matters'])
        total_matters += matters_count
        
        report += f"### 🏢 {exchange_data['name']}\n"
        report += f"- **Auditor**: {exchange_data['auditor']}\n"
        report += f"- **Key Audit Matters**: {matters_count}\n"
        
        if exchange_data['matters']:
            years = sorted(set(m['year'] for m in exchange_data['matters'] if m['year']))
            if years:
                report += f"- **Years Covered**: {min(years)}-{max(years)}\n"
            
            risk_dist = {}
            for matter in exchange_data['matters']:
                risk = matter['riskLevel']
                risk_dist[risk] = risk_dist.get(risk, 0) + 1
            
            report += f"- **Risk Distribution**: "
            report += ", ".join([f"{risk}: {count}" for risk, count in risk_dist.items()])
            report += "\n"
        
        report += "\n"
    
    report += f"## 🎯 Overall Statistics\n\n"
    report += f"- **Total Exchanges**: {total_exchanges}\n"
    report += f"- **Total Key Audit Matters**: {total_matters}\n"
    report += f"- **Average per Exchange**: {total_matters/total_exchanges:.1f}\n\n"
    
    with open('KAM_EXTRACTION_REPORT.md', 'w', encoding='utf-8') as f:
        f.write(report)
    
    print("✅ Generated KAM_EXTRACTION_REPORT.md")

if __name__ == "__main__":
    from datetime import datetime
    main()
