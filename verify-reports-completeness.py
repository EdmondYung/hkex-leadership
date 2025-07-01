#!/usr/bin/env python3
"""
Verify Annual Reports Completeness
Check that all 78 downloaded files are properly represented in the database
"""

import os
import re
import json

def scan_downloaded_files():
    """Scan the downloaded files and return a summary"""
    reports_folder = "/Users/Edmond/Documents/augment-projects/e/reports"
    
    if not os.path.exists(reports_folder):
        print(f"❌ Reports folder not found: {reports_folder}")
        return {}
    
    exchange_files = {}
    total_files = 0
    
    for root, dirs, files in os.walk(reports_folder):
        if files:
            exchange = os.path.basename(root)
            pdf_files = [f for f in files if f.endswith('.pdf')]
            
            if pdf_files:
                exchange_files[exchange] = []
                
                for file in pdf_files:
                    file_path = os.path.join(root, file)
                    file_size = os.path.getsize(file_path)
                    
                    # Extract year from filename
                    year_match = re.search(r'20(\d{2})', file)
                    year = int(f"20{year_match.group(1)}") if year_match else None
                    
                    exchange_files[exchange].append({
                        'filename': file,
                        'size_bytes': file_size,
                        'size_mb': round(file_size / (1024 * 1024), 1),
                        'year': year
                    })
                    total_files += 1
                
                # Sort by year
                exchange_files[exchange].sort(key=lambda x: x['year'] or 0, reverse=True)
    
    return exchange_files, total_files

def parse_database_reports():
    """Parse the annual reports database"""
    db_file = "annual-reports-data.js"
    
    if not os.path.exists(db_file):
        print(f"❌ Database file not found: {db_file}")
        return {}
    
    with open(db_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract exchange data
    exchange_pattern = r'(\w+):\s*{[^}]*name:\s*"([^"]+)"[^}]*reports:\s*\[(.*?)\]'
    exchanges = re.findall(exchange_pattern, content, re.DOTALL)
    
    database_reports = {}
    total_db_reports = 0
    
    for exchange_key, exchange_name, reports_content in exchanges:
        # Count reports for this exchange
        report_count = len(re.findall(r'year:\s*\d{4}', reports_content))
        database_reports[exchange_key] = {
            'name': exchange_name,
            'count': report_count
        }
        total_db_reports += report_count
    
    return database_reports, total_db_reports

def main():
    """Main verification function"""
    print("🔍 Annual Reports Completeness Verification")
    print("=" * 60)
    
    # Scan downloaded files
    print("📁 Scanning downloaded files...")
    downloaded_files, total_downloaded = scan_downloaded_files()
    
    # Parse database
    print("📊 Parsing database...")
    database_reports, total_database = parse_database_reports()
    
    print(f"\n📈 SUMMARY")
    print("=" * 60)
    print(f"📁 Downloaded files: {total_downloaded}")
    print(f"📊 Database entries: {total_database}")
    print(f"✅ Match: {'Yes' if total_downloaded == total_database else 'No'}")
    
    print(f"\n📋 BY EXCHANGE")
    print("=" * 60)
    
    all_exchanges = set(downloaded_files.keys()) | set(database_reports.keys())
    
    for exchange in sorted(all_exchanges):
        downloaded_count = len(downloaded_files.get(exchange, []))
        database_count = database_reports.get(exchange, {}).get('count', 0)
        
        status = "✅" if downloaded_count == database_count else "❌"
        
        print(f"{status} {exchange.upper()}: Downloaded={downloaded_count}, Database={database_count}")
        
        if exchange in downloaded_files:
            files = downloaded_files[exchange]
            total_size = sum(f['size_mb'] for f in files)
            years = [f['year'] for f in files if f['year']]
            year_range = f"{min(years)}-{max(years)}" if years else "Unknown"
            print(f"    📊 Size: {total_size:.1f}MB, Years: {year_range}")
    
    print(f"\n🎯 RECOMMENDATIONS")
    print("=" * 60)
    
    if total_downloaded == total_database:
        print("✅ Perfect match! All downloaded files are in the database.")
        print("✅ The annual reports library should display all 78 reports.")
    else:
        print("❌ Mismatch detected!")
        
        if total_downloaded > total_database:
            print(f"📁 {total_downloaded - total_database} files downloaded but not in database")
            print("💡 Add missing entries to annual-reports-data.js")
        
        if total_database > total_downloaded:
            print(f"📊 {total_database - total_downloaded} database entries without files")
            print("💡 Download missing files or remove database entries")
    
    print(f"\n📱 NEXT STEPS")
    print("=" * 60)
    print("1. Open annual-reports-demo.html in browser")
    print("2. Check that all exchanges appear in the filter dropdown")
    print("3. Verify that all 78 reports are displayed")
    print("4. Test the 'Local File' buttons")
    print("5. Confirm statistics show correct numbers")
    
    # Generate file path mapping for debugging
    print(f"\n🔧 FILE PATH MAPPING")
    print("=" * 60)
    
    for exchange, files in downloaded_files.items():
        print(f"\n{exchange.upper()}:")
        for file in files[:3]:  # Show first 3 files
            expected_path = f"reports/{exchange}/{file['filename']}"
            print(f"  📄 {file['filename']} → {expected_path}")
        if len(files) > 3:
            print(f"  ... and {len(files) - 3} more files")

if __name__ == "__main__":
    main()
