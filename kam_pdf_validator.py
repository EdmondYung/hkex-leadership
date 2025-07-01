#!/usr/bin/env python3
"""
KAM PDF Validator
Cross-validates extracted KAM data against original PDF files
"""

import pandas as pd
import PyPDF2
import os
import re
import json
from collections import defaultdict
import difflib

class KAMPDFValidator:
    def __init__(self, excel_path, pdf_directory):
        self.excel_path = excel_path
        self.pdf_directory = pdf_directory
        self.kam_data = None
        self.pdf_texts = {}
        self.validation_results = {}
        
        # Known auditor patterns for extraction
        self.auditor_patterns = {
            'Ernst & Young': [r'Ernst\s*&\s*Young', r'\bEY\b', r'Ernst and Young'],
            'KPMG': [r'\bKMPG\b', r'KPMG\s+LLP', r'KPMG\s+AG'],
            'PwC': [r'PricewaterhouseCoopers', r'\bPwC\b', r'PricewaterhouseCoopers\s+LLP'],
            'Deloitte': [r'Deloitte', r'Deloitte\s+LLP', r'Deloitte\s+&\s+Touche']
        }
        
        # KAM-related keywords
        self.kam_keywords = [
            'key audit matter', 'key audit matters', 'kam', 'critical audit matter',
            'significant risk', 'audit risk', 'material misstatement'
        ]
    
    def load_kam_data(self):
        """Load KAM data from Excel file"""
        try:
            self.kam_data = pd.read_excel(self.excel_path, sheet_name='Cleaned_KAM_Data')
            print(f"✅ Loaded {len(self.kam_data)} KAM records for validation")
            return True
        except Exception as e:
            print(f"❌ Error loading KAM data: {e}")
            return False
    
    def extract_pdf_text(self, pdf_path, max_pages=None):
        """Extract text from PDF file"""
        try:
            with open(pdf_path, 'rb') as file:
                reader = PyPDF2.PdfReader(file)
                text = ''
                
                pages_to_read = len(reader.pages) if max_pages is None else min(len(reader.pages), max_pages)
                
                for i in range(pages_to_read):
                    try:
                        page_text = reader.pages[i].extract_text()
                        text += page_text + '\n'
                    except Exception as page_error:
                        print(f"⚠️ Error reading page {i+1} of {pdf_path}: {page_error}")
                        continue
                
                return text
        except Exception as e:
            print(f"❌ Error reading PDF {pdf_path}: {e}")
            return ""
    
    def identify_auditor_from_text(self, text):
        """Identify auditor from PDF text using pattern matching"""
        text_lower = text.lower()
        
        for auditor, patterns in self.auditor_patterns.items():
            for pattern in patterns:
                if re.search(pattern, text, re.IGNORECASE):
                    return auditor
        
        # Look for other common auditor indicators
        if re.search(r'independent\s+auditor', text, re.IGNORECASE):
            return "Independent Auditor (Unspecified)"
        
        return "Unknown"
    
    def extract_kam_sections(self, text):
        """Extract KAM-related sections from PDF text"""
        kam_sections = []
        
        # Split text into paragraphs
        paragraphs = text.split('\n\n')
        
        for i, paragraph in enumerate(paragraphs):
            paragraph_lower = paragraph.lower()
            
            # Check if paragraph contains KAM keywords
            if any(keyword in paragraph_lower for keyword in self.kam_keywords):
                # Include context (previous and next paragraphs)
                context_start = max(0, i-1)
                context_end = min(len(paragraphs), i+2)
                
                context = '\n\n'.join(paragraphs[context_start:context_end])
                kam_sections.append({
                    'paragraph_index': i,
                    'content': paragraph,
                    'context': context
                })
        
        return kam_sections
    
    def validate_kam_record(self, kam_record, pdf_text):
        """Validate a single KAM record against PDF text"""
        validation = {
            'record_id': kam_record.name,
            'company': kam_record['Company'],
            'year': kam_record['Year'],
            'file_name': kam_record['File_Name'],
            'issues': [],
            'confidence_score': 0
        }
        
        # Check if KAM title appears in PDF
        kam_title = str(kam_record['KAM_Title']).lower()
        if kam_title and kam_title != 'nan':
            title_found = kam_title in pdf_text.lower()
            if title_found:
                validation['confidence_score'] += 30
            else:
                # Check for similar titles
                similar_titles = difflib.get_close_matches(kam_title, pdf_text.lower().split(), n=3, cutoff=0.6)
                if similar_titles:
                    validation['confidence_score'] += 15
                    validation['issues'].append(f"KAM title not exact match, similar: {similar_titles}")
                else:
                    validation['issues'].append("KAM title not found in PDF")
        
        # Check if description keywords appear in PDF
        kam_description = str(kam_record['KAM_Description']).lower()
        if kam_description and kam_description != 'nan':
            description_words = set(kam_description.split())
            pdf_words = set(pdf_text.lower().split())
            
            common_words = description_words.intersection(pdf_words)
            if len(common_words) > len(description_words) * 0.3:  # 30% word overlap
                validation['confidence_score'] += 25
            else:
                validation['issues'].append("Low description word overlap with PDF")
        
        # Validate auditor
        extracted_auditor = self.identify_auditor_from_text(pdf_text)
        recorded_auditor = str(kam_record['Auditor'])
        
        if extracted_auditor != "Unknown":
            if extracted_auditor.lower() in recorded_auditor.lower() or recorded_auditor.lower() in extracted_auditor.lower():
                validation['confidence_score'] += 25
            else:
                validation['issues'].append(f"Auditor mismatch: PDF={extracted_auditor}, Record={recorded_auditor}")
        else:
            validation['issues'].append("Could not identify auditor from PDF")
        
        # Check for KAM section presence
        kam_sections = self.extract_kam_sections(pdf_text)
        if kam_sections:
            validation['confidence_score'] += 20
            validation['kam_sections_found'] = len(kam_sections)
        else:
            validation['issues'].append("No KAM sections identified in PDF")
        
        return validation
    
    def validate_all_records(self):
        """Validate all KAM records against their corresponding PDFs"""
        if self.kam_data is None:
            print("❌ No KAM data loaded. Please run load_kam_data() first.")
            return False
        
        print("🔍 Starting PDF validation process...")
        
        validation_results = []
        processed_files = set()
        
        for index, record in self.kam_data.iterrows():
            file_name = record['File_Name']
            pdf_path = os.path.join(self.pdf_directory, file_name)
            
            if not os.path.exists(pdf_path):
                validation = {
                    'record_id': index,
                    'company': record['Company'],
                    'year': record['Year'],
                    'file_name': file_name,
                    'issues': ['PDF file not found'],
                    'confidence_score': 0
                }
                validation_results.append(validation)
                continue
            
            # Extract PDF text (cache to avoid re-reading same file)
            if file_name not in self.pdf_texts:
                print(f"📄 Processing {file_name}...")
                self.pdf_texts[file_name] = self.extract_pdf_text(pdf_path)
                processed_files.add(file_name)
            
            pdf_text = self.pdf_texts[file_name]
            
            if not pdf_text.strip():
                validation = {
                    'record_id': index,
                    'company': record['Company'],
                    'year': record['Year'],
                    'file_name': file_name,
                    'issues': ['Could not extract text from PDF'],
                    'confidence_score': 0
                }
                validation_results.append(validation)
                continue
            
            # Validate the record
            validation = self.validate_kam_record(record, pdf_text)
            validation_results.append(validation)
        
        self.validation_results = validation_results
        
        print(f"✅ Validation completed for {len(validation_results)} records")
        print(f"📄 Processed {len(processed_files)} unique PDF files")
        
        return True
    
    def generate_validation_report(self):
        """Generate comprehensive validation report"""
        if not self.validation_results:
            print("❌ No validation results available. Please run validate_all_records() first.")
            return None
        
        # Calculate statistics
        total_records = len(self.validation_results)
        high_confidence = sum(1 for r in self.validation_results if r['confidence_score'] >= 70)
        medium_confidence = sum(1 for r in self.validation_results if 40 <= r['confidence_score'] < 70)
        low_confidence = sum(1 for r in self.validation_results if r['confidence_score'] < 40)
        
        # Group issues
        issue_counts = defaultdict(int)
        for result in self.validation_results:
            for issue in result['issues']:
                issue_counts[issue] += 1
        
        # Company-wise statistics
        company_stats = defaultdict(lambda: {'total': 0, 'high_conf': 0, 'avg_score': 0})
        for result in self.validation_results:
            company = result['company']
            company_stats[company]['total'] += 1
            if result['confidence_score'] >= 70:
                company_stats[company]['high_conf'] += 1
            company_stats[company]['avg_score'] += result['confidence_score']
        
        for company in company_stats:
            company_stats[company]['avg_score'] /= company_stats[company]['total']
        
        report = {
            'timestamp': pd.Timestamp.now().isoformat(),
            'summary': {
                'total_records': total_records,
                'high_confidence': high_confidence,
                'medium_confidence': medium_confidence,
                'low_confidence': low_confidence,
                'high_confidence_percentage': (high_confidence / total_records) * 100,
                'average_confidence_score': sum(r['confidence_score'] for r in self.validation_results) / total_records
            },
            'common_issues': dict(sorted(issue_counts.items(), key=lambda x: x[1], reverse=True)),
            'company_statistics': dict(company_stats),
            'detailed_results': self.validation_results
        }
        
        return report
    
    def save_validation_report(self, report_path):
        """Save validation report to JSON file"""
        report = self.generate_validation_report()
        if report is None:
            return False
        
        try:
            with open(report_path, 'w', encoding='utf-8') as f:
                json.dump(report, f, indent=2, ensure_ascii=False, default=str)
            
            print(f"✅ Validation report saved to: {report_path}")
            
            # Print summary
            summary = report['summary']
            print(f"\n📊 Validation Summary:")
            print(f"   Total records validated: {summary['total_records']}")
            print(f"   High confidence (≥70%): {summary['high_confidence']} ({summary['high_confidence_percentage']:.1f}%)")
            print(f"   Medium confidence (40-69%): {summary['medium_confidence']}")
            print(f"   Low confidence (<40%): {summary['low_confidence']}")
            print(f"   Average confidence score: {summary['average_confidence_score']:.1f}%")
            
            print(f"\n🔍 Most common issues:")
            for issue, count in list(report['common_issues'].items())[:5]:
                print(f"   {issue}: {count} records")
            
            return True
            
        except Exception as e:
            print(f"❌ Error saving validation report: {e}")
            return False

if __name__ == "__main__":
    # Main execution
    excel_path = "/Users/Edmond/Documents/augment-projects/e/reports/auditor's reports/KAM_Cleaned.xlsx"
    pdf_directory = "/Users/Edmond/Documents/augment-projects/e/reports/auditor's reports"
    
    validator = KAMPDFValidator(excel_path, pdf_directory)
    
    if validator.load_kam_data():
        if validator.validate_all_records():
            output_path = "/Users/Edmond/Documents/augment-projects/e/reports/auditor's reports/pdf_validation_report.json"
            validator.save_validation_report(output_path)
