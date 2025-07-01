#!/usr/bin/env python3
"""
Demo Interactive Annual Reports Downloader
Demonstrates the interactive interface for downloading annual reports
"""

import os
import time
from pathlib import Path

class DemoInteractiveDownloader:
    def __init__(self):
        self.base_folder = ""
        self.selected_exchanges = []
        self.year_range = []
        
    def get_user_preferences(self):
        """Get user preferences for download"""
        print("=" * 60)
        print("📊 ANNUAL REPORTS DOWNLOADER - DEMO")
        print("=" * 60)
        print()
        
        # Get download folder
        print("📁 Choose download folder:")
        print("1. Current directory (./reports/)")
        print("2. Desktop (~/Desktop/reports/)")
        print("3. Documents (~/Documents/reports/)")
        print("4. Custom path")
        
        # For demo, use option 1
        choice = "1"
        print(f"Demo selection: {choice}")
        
        if choice == "1":
            self.base_folder = "./reports"
        elif choice == "2":
            self.base_folder = os.path.expanduser("~/Desktop/reports")
        elif choice == "3":
            self.base_folder = os.path.expanduser("~/Documents/reports")
        else:
            self.base_folder = "./reports"
        
        print(f"✅ Download folder: {self.base_folder}")
        
        # Get exchange selection
        print("\n📈 Select exchanges to download:")
        print("1. All exchanges (recommended)")
        print("2. US exchanges only (ICE, NASDAQ)")
        print("3. European exchanges only (LSEG)")
        print("4. Asian exchanges only (HKEX, JPX)")
        print("5. Custom selection")
        
        # For demo, use option 4 (Asian exchanges)
        exchange_choice = "4"
        print(f"Demo selection: {exchange_choice}")
        
        if exchange_choice == "1":
            self.selected_exchanges = ["ice", "nasdaq", "lseg", "hkex", "jpx"]
        elif exchange_choice == "2":
            self.selected_exchanges = ["ice", "nasdaq"]
        elif exchange_choice == "3":
            self.selected_exchanges = ["lseg"]
        elif exchange_choice == "4":
            self.selected_exchanges = ["hkex", "jpx"]
        else:
            self.selected_exchanges = ["hkex", "jpx"]
        
        print(f"✅ Selected exchanges: {', '.join(self.selected_exchanges)}")
        
        # Get year range
        print("\n📅 Select year range:")
        print("1. Last 5 years (2020-2024)")
        print("2. Last 10 years (2015-2024)")
        print("3. Custom range")
        
        # For demo, use option 1
        year_choice = "1"
        print(f"Demo selection: {year_choice}")
        
        if year_choice == "1":
            self.year_range = list(range(2020, 2025))
        elif year_choice == "2":
            self.year_range = list(range(2015, 2025))
        else:
            self.year_range = list(range(2020, 2025))
        
        print(f"✅ Year range: {min(self.year_range)}-{max(self.year_range)}")
        
        # Confirmation
        print("\n" + "=" * 60)
        print("📋 DOWNLOAD SUMMARY")
        print("=" * 60)
        print(f"📁 Folder: {self.base_folder}")
        print(f"📈 Exchanges: {', '.join(self.selected_exchanges)}")
        print(f"📅 Years: {min(self.year_range)}-{max(self.year_range)}")
        print("=" * 60)
        
        return True
    
    def get_demo_reports_data(self):
        """Demo reports data"""
        return {
            'hkex': {
                'name': 'Hong Kong Exchanges and Clearing (HKEX)',
                'reports': [
                    {
                        'year': 2024,
                        'title': 'HKEX Annual Report 2024',
                        'url': 'https://www.hkexgroup.com/-/media/HKEX-Group-Site/ssd/Investor-Relations/Regulatory-Reports/documents/2025/250317ar_e.pdf',
                        'localPath': 'hkex/HKEX_Annual_2024.pdf'
                    },
                    {
                        'year': 2023,
                        'title': 'HKEX Annual Report 2023',
                        'url': 'https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2024',
                        'localPath': 'hkex/HKEX_Annual_2023.pdf'
                    }
                ]
            },
            'jpx': {
                'name': 'Japan Exchange Group (JPX)',
                'reports': [
                    {
                        'year': 2024,
                        'title': 'JPX Report 2024',
                        'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2024_A4.pdf',
                        'localPath': 'jpx/JPX_Report_2024.pdf'
                    },
                    {
                        'year': 2023,
                        'title': 'JPX Report 2023',
                        'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2023.pdf',
                        'localPath': 'jpx/JPX_Report_2023.pdf'
                    },
                    {
                        'year': 2022,
                        'title': 'JPX Report 2022',
                        'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2022.pdf',
                        'localPath': 'jpx/JPX_Report_2022.pdf'
                    },
                    {
                        'year': 2021,
                        'title': 'JPX Report 2021',
                        'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2021_A4.pdf',
                        'localPath': 'jpx/JPX_Report_2021.pdf'
                    },
                    {
                        'year': 2020,
                        'title': 'JPX Report 2020',
                        'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2020.pdf',
                        'localPath': 'jpx/JPX_Report_2020.pdf'
                    }
                ]
            }
        }
    
    def create_directory_structure(self):
        """Create the reports directory structure"""
        for exchange in self.selected_exchanges:
            exchange_dir = os.path.join(self.base_folder, exchange)
            Path(exchange_dir).mkdir(parents=True, exist_ok=True)
            print(f"📁 Created directory: {exchange_dir}")
    
    def simulate_download(self, title, exchange, year):
        """Simulate downloading a report"""
        print(f"  📥 Downloading: {title}")
        print(f"  🔗 Exchange: {exchange.upper()}")
        print(f"  📅 Year: {year}")
        
        # Simulate download time
        for i in range(3):
            print(f"  {'.' * (i+1)} downloading", end='\r')
            time.sleep(0.5)
        
        print("  ✅ Download completed!                    ")
        return True
    
    def demo_download_process(self):
        """Demonstrate the download process"""
        print(f"\n🚀 Starting demo download to: {self.base_folder}")
        
        # Create directory structure
        self.create_directory_structure()
        
        # Load demo reports data
        exchanges_data = self.get_demo_reports_data()
        
        # Filter reports based on user selection
        reports_to_download = []
        for exchange_key in self.selected_exchanges:
            if exchange_key in exchanges_data:
                exchange_data = exchanges_data[exchange_key]
                for report in exchange_data['reports']:
                    if report['year'] in self.year_range:
                        reports_to_download.append({
                            'exchange_key': exchange_key,
                            'exchange_name': exchange_data['name'],
                            **report
                        })
        
        total_reports = len(reports_to_download)
        print(f"\n📊 Found {total_reports} reports to download")
        
        if total_reports == 0:
            print("❌ No reports found matching your criteria.")
            return
        
        print(f"\n📋 Reports to download:")
        for report in reports_to_download:
            print(f"  • {report['exchange_name']} {report['year']}")
        
        print(f"\n🎯 Starting download simulation...")
        
        # Simulate downloading each report
        downloaded_count = 0
        for i, report in enumerate(reports_to_download, 1):
            print(f"\n[{i}/{total_reports}] {report['exchange_name']} {report['year']}")
            
            success = self.simulate_download(
                report['title'],
                report['exchange_key'],
                report['year']
            )
            
            if success:
                downloaded_count += 1
        
        # Summary
        print(f"\n{'='*60}")
        print("📊 DEMO DOWNLOAD SUMMARY")
        print(f"{'='*60}")
        print(f"✅ Successfully simulated: {downloaded_count}")
        print(f"📁 Target folder: {self.base_folder}")
        print(f"📂 Directory structure created: ✅")
        
        # Show created directories
        print(f"\n📋 Created directories:")
        for exchange in self.selected_exchanges:
            exchange_dir = os.path.join(self.base_folder, exchange)
            if os.path.exists(exchange_dir):
                print(f"  ✅ {exchange_dir}")

def main():
    print("🎬 Starting Interactive Downloader Demo...")
    print("This demo shows how the interactive downloader works.")
    print()
    
    downloader = DemoInteractiveDownloader()
    
    # Get user preferences (demo mode)
    if not downloader.get_user_preferences():
        print("\n❌ Demo cancelled.")
        return
    
    # Simulate download process
    downloader.demo_download_process()
    
    print(f"\n🎉 Demo completed!")
    print(f"📁 Check the created directories in: {downloader.base_folder}")
    print("\n💡 To use the real downloader:")
    print("   python3 download-reports-interactive.py")

if __name__ == "__main__":
    main()
