#!/usr/bin/env python3
"""
Interactive Annual Reports Downloader
Downloads annual reports from global stock exchanges with user-specified folder
"""

import os
import requests
import time
import json
from pathlib import Path
import logging
from urllib.parse import urlparse
import sys
from download_config import DownloadConfig

# Setup logging
def setup_logging(log_file):
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(log_file),
            logging.StreamHandler()
        ]
    )

class InteractiveReportsDownloader:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'application/pdf,application/octet-stream,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        })
        self.downloaded_count = 0
        self.failed_count = 0
        self.base_folder = ""
        
    def get_user_preferences(self):
        """Get user preferences for download"""
        print("=" * 60)
        print("📊 ANNUAL REPORTS DOWNLOADER")
        print("=" * 60)
        print()
        
        # Get download folder
        default_folder = DownloadConfig.get_default_folder()

        while True:
            print("📁 Choose download folder:")
            print(f"1. Default project folder ({default_folder}) [RECOMMENDED]")
            print("2. Current directory (./reports/)")
            print("3. Desktop (~/Desktop/reports/)")
            print("4. Documents (~/Documents/reports/)")
            print("5. Custom path")

            choice = input("\nEnter your choice (1-5, or press Enter for default): ").strip()

            if choice == "" or choice == "1":
                self.base_folder = default_folder
                break
            elif choice == "2":
                self.base_folder = "./reports"
                break
            elif choice == "3":
                self.base_folder = os.path.expanduser("~/Desktop/reports")
                break
            elif choice == "4":
                self.base_folder = os.path.expanduser("~/Documents/reports")
                break
            elif choice == "5":
                custom_path = input("Enter custom path: ").strip()
                if custom_path:
                    self.base_folder = custom_path
                    break
                else:
                    print("❌ Invalid path. Please try again.")
            else:
                print("❌ Invalid choice. Please enter 1-5.")
        
        print(f"\n✅ Download folder: {self.base_folder}")
        
        # Get exchange selection
        print("\n📈 Select exchanges to download:")
        print("1. All exchanges (recommended)")
        print("2. US exchanges only (ICE, NASDAQ)")
        print("3. European exchanges only (LSEG)")
        print("4. Asian exchanges only (HKEX, JPX)")
        print("5. Custom selection")
        
        exchange_choice = input("\nEnter your choice (1-5): ").strip()
        
        if exchange_choice == "1":
            self.selected_exchanges = ["ice", "nasdaq", "lseg", "hkex", "jpx"]
        elif exchange_choice == "2":
            self.selected_exchanges = ["ice", "nasdaq"]
        elif exchange_choice == "3":
            self.selected_exchanges = ["lseg"]
        elif exchange_choice == "4":
            self.selected_exchanges = ["hkex", "jpx"]
        elif exchange_choice == "5":
            print("\nAvailable exchanges:")
            exchanges = ["ice", "nasdaq", "lseg", "hkex", "jpx"]
            for i, ex in enumerate(exchanges, 1):
                print(f"{i}. {ex.upper()}")
            
            selected = input("Enter exchange numbers (comma-separated, e.g., 1,3,5): ").strip()
            try:
                indices = [int(x.strip()) - 1 for x in selected.split(",")]
                self.selected_exchanges = [exchanges[i] for i in indices if 0 <= i < len(exchanges)]
            except:
                print("❌ Invalid selection. Using all exchanges.")
                self.selected_exchanges = exchanges
        else:
            print("❌ Invalid choice. Using all exchanges.")
            self.selected_exchanges = ["ice", "nasdaq", "lseg", "hkex", "jpx"]
        
        print(f"✅ Selected exchanges: {', '.join(self.selected_exchanges)}")
        
        # Get year range
        print("\n📅 Select year range:")
        print("1. Last 5 years (2020-2024)")
        print("2. Last 10 years (2015-2024)")
        print("3. Custom range")
        
        year_choice = input("\nEnter your choice (1-3): ").strip()
        
        if year_choice == "1":
            self.year_range = list(range(2020, 2025))
        elif year_choice == "2":
            self.year_range = list(range(2015, 2025))
        elif year_choice == "3":
            try:
                start_year = int(input("Enter start year (e.g., 2015): ").strip())
                end_year = int(input("Enter end year (e.g., 2024): ").strip())
                self.year_range = list(range(start_year, end_year + 1))
            except:
                print("❌ Invalid year range. Using last 10 years.")
                self.year_range = list(range(2015, 2025))
        else:
            print("❌ Invalid choice. Using last 10 years.")
            self.year_range = list(range(2015, 2025))
        
        print(f"✅ Year range: {min(self.year_range)}-{max(self.year_range)}")
        
        # Confirmation
        print("\n" + "=" * 60)
        print("📋 DOWNLOAD SUMMARY")
        print("=" * 60)
        print(f"📁 Folder: {self.base_folder}")
        print(f"📈 Exchanges: {', '.join(self.selected_exchanges)}")
        print(f"📅 Years: {min(self.year_range)}-{max(self.year_range)}")
        print("=" * 60)
        
        confirm = input("\nProceed with download? (y/n): ").strip().lower()
        return confirm in ['y', 'yes']
    
    def load_reports_data(self):
        """Load reports data from JavaScript file"""
        try:
            # Try to load from annual-reports-data.js
            if os.path.exists('annual-reports-data.js'):
                with open('annual-reports-data.js', 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Extract the JSON data (simplified parsing)
                start = content.find('{')
                end = content.rfind('};')
                if start != -1 and end != -1:
                    js_data = content[start:end+1]
                    # This is a simplified approach - in production use a proper JS parser
                    return self.parse_reports_data()
            
            # Fallback to hardcoded data
            return self.get_fallback_data()
            
        except Exception as e:
            logging.error(f"Error loading reports data: {e}")
            return self.get_fallback_data()
    
    def get_fallback_data(self):
        """Fallback data with verified links"""
        return {
            'ice': {
                'name': 'Intercontinental Exchange (ICE/NYSE)',
                'reports': [
                    {
                        'year': 2024,
                        'title': 'ICE Form 10-K 2024',
                        'url': 'https://www.sec.gov/Archives/edgar/data/1571949/000157194925000004/ice-20241231.htm',
                        'localPath': 'ice/ICE_10K_2024.pdf'
                    },
                    {
                        'year': 2023,
                        'title': 'ICE Form 10-K 2023',
                        'url': 'https://www.sec.gov/Archives/edgar/data/1571949/000157194924000004/ice-20231231.htm',
                        'localPath': 'ice/ICE_10K_2023.pdf'
                    }
                ]
            },
            'nasdaq': {
                'name': 'NASDAQ Inc.',
                'reports': [
                    {
                        'year': 2024,
                        'title': 'NASDAQ Form 10-K 2024',
                        'url': 'https://www.sec.gov/Archives/edgar/data/1120193/000112019325000004/ndaq-20241231.htm',
                        'localPath': 'nasdaq/NASDAQ_10K_2024.pdf'
                    },
                    {
                        'year': 2023,
                        'title': 'NASDAQ Form 10-K 2023',
                        'url': 'https://www.sec.gov/Archives/edgar/data/1120193/000112019324000006/ndaq-20231231.htm',
                        'localPath': 'nasdaq/NASDAQ_10K_2023.pdf'
                    }
                ]
            },
            'lseg': {
                'name': 'London Stock Exchange Group (LSEG)',
                'reports': [
                    {
                        'year': 2024,
                        'title': 'LSEG Annual Report 2024',
                        'url': 'https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2024.pdf',
                        'localPath': 'lseg/LSEG_Annual_2024.pdf'
                    },
                    {
                        'year': 2023,
                        'title': 'LSEG Annual Report 2023',
                        'url': 'https://www.lseg.com.cn/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2023.pdf',
                        'localPath': 'lseg/LSEG_Annual_2023.pdf'
                    }
                ]
            },
            'hkex': {
                'name': 'Hong Kong Exchanges and Clearing (HKEX)',
                'reports': [
                    {
                        'year': 2024,
                        'title': 'HKEX Annual Report 2024',
                        'url': 'https://www.hkexgroup.com/-/media/HKEX-Group-Site/ssd/Investor-Relations/Regulatory-Reports/documents/2025/250317ar_e.pdf',
                        'localPath': 'hkex/HKEX_Annual_2024.pdf'
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
                    }
                ]
            }
        }
    
    def parse_reports_data(self):
        """Parse the actual reports data from the JS file"""
        # This would need a proper JavaScript parser in production
        # For now, return fallback data
        return self.get_fallback_data()

    def create_directory_structure(self):
        """Create the reports directory structure"""
        for exchange in self.selected_exchanges:
            exchange_dir = os.path.join(self.base_folder, exchange)
            Path(exchange_dir).mkdir(parents=True, exist_ok=True)
            logging.info(f"Created directory: {exchange_dir}")

    def download_file(self, url, local_path, title, exchange):
        """Download a single file"""
        try:
            full_path = os.path.join(self.base_folder, local_path)
            logging.info(f"Downloading: {title} ({exchange})")
            logging.info(f"URL: {url}")
            logging.info(f"Local path: {full_path}")

            # Create directory if it doesn't exist
            Path(full_path).parent.mkdir(parents=True, exist_ok=True)

            # Check if file already exists
            if os.path.exists(full_path):
                file_size = os.path.getsize(full_path)
                if file_size > 1000:  # File exists and is not empty
                    logging.info(f"File already exists: {full_path} ({file_size} bytes)")
                    return True

            # Download the file
            logging.info("Starting download...")
            response = self.session.get(url, timeout=60, stream=True)
            response.raise_for_status()

            # Check content type
            content_type = response.headers.get('content-type', '').lower()
            content_length = response.headers.get('content-length')

            logging.info(f"Content-Type: {content_type}")
            if content_length:
                logging.info(f"Content-Length: {content_length} bytes")

            # Save the file
            with open(full_path, 'wb') as f:
                downloaded_size = 0
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
                        downloaded_size += len(chunk)

                        # Log progress for large files
                        if downloaded_size % (1024 * 1024) == 0:  # Every MB
                            logging.info(f"Downloaded: {downloaded_size // (1024 * 1024)} MB")

            final_size = os.path.getsize(full_path)
            logging.info(f"Successfully downloaded: {title}")
            logging.info(f"Final file size: {final_size} bytes ({final_size / (1024 * 1024):.2f} MB)")

            # Verify it's a valid file
            if 'pdf' in content_type or final_size > 10000:  # Basic validation
                self.downloaded_count += 1
                return True
            else:
                logging.warning(f"Downloaded file may not be valid: {full_path}")
                return False

        except requests.exceptions.RequestException as e:
            logging.error(f"Failed to download {title}: {e}")
            self.failed_count += 1
            return False
        except Exception as e:
            logging.error(f"Unexpected error downloading {title}: {e}")
            self.failed_count += 1
            return False

    def download_all_reports(self):
        """Download all selected reports"""
        logging.info("Starting download of annual reports...")

        # Create directory structure
        self.create_directory_structure()

        # Load reports data
        exchanges_data = self.load_reports_data()

        if not exchanges_data:
            logging.error("No reports data found")
            return

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
        logging.info(f"Found {total_reports} reports to download")

        if total_reports == 0:
            print("❌ No reports found matching your criteria.")
            return

        print(f"\n📊 Downloading {total_reports} reports...")

        # Download each report
        for i, report in enumerate(reports_to_download, 1):
            print(f"\n[{i}/{total_reports}] {report['exchange_name']} {report['year']}")

            success = self.download_file(
                report['url'],
                report['localPath'],
                report['title'],
                report['exchange_key']
            )

            if success:
                print("✅ Download successful")
            else:
                print("❌ Download failed")

            # Add delay between downloads to be respectful
            if i < total_reports:
                time.sleep(2)

        # Summary
        print(f"\n{'='*60}")
        print("📊 DOWNLOAD SUMMARY")
        print(f"{'='*60}")
        print(f"✅ Successfully downloaded: {self.downloaded_count}")
        print(f"❌ Failed downloads: {self.failed_count}")
        print(f"📁 Total processed: {self.downloaded_count + self.failed_count}")
        print(f"📂 Download folder: {self.base_folder}")

        # List downloaded files
        if self.downloaded_count > 0:
            print(f"\n📋 Downloaded files:")
            for root, dirs, files in os.walk(self.base_folder):
                for file in files:
                    if file.endswith('.pdf'):
                        file_path = os.path.join(root, file)
                        file_size = os.path.getsize(file_path)
                        print(f"  ✅ {file} ({file_size / (1024*1024):.1f} MB)")

def main():
    downloader = InteractiveReportsDownloader()

    # Get user preferences
    if not downloader.get_user_preferences():
        print("\n❌ Download cancelled by user.")
        return

    # Setup logging
    log_file = os.path.join(downloader.base_folder, 'download_log.txt')
    os.makedirs(downloader.base_folder, exist_ok=True)
    setup_logging(log_file)

    print(f"\n🚀 Starting download to: {downloader.base_folder}")
    print(f"📝 Log file: {log_file}")

    # Start download
    downloader.download_all_reports()

    print(f"\n🎉 Download process completed!")
    print(f"📁 Check your files in: {downloader.base_folder}")
    print(f"📝 Full log available at: {log_file}")

if __name__ == "__main__":
    main()
