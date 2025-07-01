#!/usr/bin/env python3
"""
Update Annual Reports Database
Automatically updates the annual-reports-data.js file based on actual downloaded files
"""

import os
import json
import re
from pathlib import Path

def scan_downloaded_files(reports_folder):
    """Scan the reports folder and return information about downloaded files"""
    
    if not os.path.exists(reports_folder):
        print(f"❌ Reports folder not found: {reports_folder}")
        return {}
    
    exchange_files = {}
    total_files = 0
    total_size = 0
    
    print(f"📁 Scanning: {reports_folder}")
    print("=" * 60)
    
    for root, dirs, files in os.walk(reports_folder):
        if files:
            exchange = os.path.basename(root)
            pdf_files = [f for f in files if f.endswith('.pdf')]
            
            if pdf_files:
                exchange_files[exchange] = []
                exchange_size = 0
                
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
                        'year': year,
                        'path': file_path
                    })
                    
                    exchange_size += file_size
                    total_files += 1
                    total_size += file_size
                
                # Sort by year
                exchange_files[exchange].sort(key=lambda x: x['year'] or 0, reverse=True)
                
                print(f"🏢 {exchange.upper()}:")
                print(f"   📊 Files: {len(pdf_files)} | Size: {exchange_size / (1024 * 1024):.1f} MB")
                
                for file_info in exchange_files[exchange]:
                    year_str = str(file_info['year']) if file_info['year'] else "Unknown"
                    print(f"   📄 {file_info['filename']} ({year_str}) - {file_info['size_mb']} MB")
                print()
    
    print("=" * 60)
    print(f"📊 TOTAL: {total_files} files | {total_size / (1024 * 1024):.1f} MB")
    print()
    
    return exchange_files

def generate_updated_database_info(exchange_files):
    """Generate updated database information"""
    
    print("📋 Database Update Summary:")
    print("=" * 60)
    
    total_reports = 0
    
    for exchange, files in exchange_files.items():
        total_reports += len(files)
        print(f"🏢 {exchange.upper()}: {len(files)} reports")
        
        # Show year range
        years = [f['year'] for f in files if f['year']]
        if years:
            year_range = f"{min(years)}-{max(years)}"
            print(f"   📅 Years: {year_range}")
        
        # Show total size
        total_size = sum(f['size_bytes'] for f in files)
        print(f"   💾 Size: {total_size / (1024 * 1024):.1f} MB")
        print()
    
    print(f"📊 Total Reports: {total_reports}")
    return total_reports

def create_download_status_report(exchange_files, reports_folder):
    """Create a comprehensive download status report"""
    
    report_content = f"""# 📊 年度報告下載狀態報告

## ✅ 文件掃描完成

基於實際下載文件的完整統計報告。

### 📁 掃描位置
```
{reports_folder}
```

### 📈 總體統計
"""
    
    total_files = sum(len(files) for files in exchange_files.values())
    total_size = sum(sum(f['size_bytes'] for f in files) for files in exchange_files.values())
    
    report_content += f"""
- **總文件數**: {total_files}個PDF文件
- **總大小**: {total_size / (1024 * 1024):.1f} MB
- **交易所數量**: {len(exchange_files)}個
- **掃描時間**: {Path(__file__).stat().st_mtime}

### 📊 按交易所分類

"""
    
    for exchange, files in sorted(exchange_files.items()):
        exchange_size = sum(f['size_bytes'] for f in files)
        years = [f['year'] for f in files if f['year']]
        year_range = f"{min(years)}-{max(years)}" if years else "Unknown"
        
        report_content += f"""#### **🏢 {exchange.upper()}**
- **文件數量**: {len(files)}個
- **總大小**: {exchange_size / (1024 * 1024):.1f} MB
- **年份範圍**: {year_range}

**文件列表**:
"""
        
        for file_info in files:
            year_str = str(file_info['year']) if file_info['year'] else "Unknown"
            report_content += f"- `{file_info['filename']}` ({year_str}) - {file_info['size_mb']} MB\n"
        
        report_content += "\n"
    
    report_content += f"""
### 🎯 數據庫更新建議

基於掃描結果，建議在 `annual-reports-data.js` 中：

1. **添加 `downloaded: true` 標記**到所有已下載的報告
2. **更新文件大小信息**以反映實際文件大小
3. **驗證年份和文件名**的對應關係
4. **添加掃描時間戳**到數據庫頭部

### 📋 下一步操作

1. ✅ 文件掃描完成
2. 🔄 更新數據庫標記
3. 🎨 更新年度報告庫界面
4. 📊 驗證界面顯示

---

**生成時間**: {Path(__file__).stat().st_mtime}  
**掃描位置**: `{reports_folder}`  
**文件狀態**: ✅ 全部掃描完成
"""
    
    # Save report
    report_file = "DOWNLOADED_FILES_SCAN_REPORT.md"
    with open(report_file, 'w', encoding='utf-8') as f:
        f.write(report_content)
    
    print(f"📄 Report saved: {report_file}")
    return report_file

def main():
    """Main function"""
    print("🔍 Annual Reports Database Updater")
    print("=" * 60)
    
    # Default reports folder
    reports_folder = "/Users/Edmond/Documents/augment-projects/e/reports"
    
    # Scan downloaded files
    exchange_files = scan_downloaded_files(reports_folder)
    
    if not exchange_files:
        print("❌ No PDF files found in reports folder")
        return
    
    # Generate database update info
    total_reports = generate_updated_database_info(exchange_files)
    
    # Create comprehensive report
    report_file = create_download_status_report(exchange_files, reports_folder)
    
    print("🎉 Database scan completed!")
    print(f"📊 Found {total_reports} reports across {len(exchange_files)} exchanges")
    print(f"📄 Detailed report: {report_file}")
    
    # Suggestions
    print("\n💡 Next steps:")
    print("1. Review the generated report")
    print("2. Update annual-reports-data.js with 'downloaded: true' flags")
    print("3. Refresh the annual reports library interface")
    print("4. Verify all downloaded files are properly displayed")

if __name__ == "__main__":
    main()
