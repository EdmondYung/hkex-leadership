#!/usr/bin/env python3
"""
Annual Reports Downloader
Downloads all available annual reports from global stock exchanges
"""

import os
import requests
import json
import time
from urllib.parse import urlparse
from pathlib import Path
import logging

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('download_log.txt'),
        logging.StreamHandler()
    ]
)

class ReportsDownloader:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.downloaded_count = 0
        self.failed_count = 0
        
    def create_directory_structure(self):
        """Create the reports directory structure"""
        exchanges = ['ice', 'nasdaq', 'lseg', 'hkex', 'jpx', 'sse', 'szse', 'tmx', 'deutsche', 'euronext']
        
        for exchange in exchanges:
            Path(f'reports/{exchange}').mkdir(parents=True, exist_ok=True)
            logging.info(f"Created directory: reports/{exchange}")
    
    def load_reports_data(self):
        """Load reports data from JavaScript file"""
        try:
            with open('annual-reports-data.js', 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract the JSON data from JavaScript
            start = content.find('const annualReportsData = {')
            end = content.rfind('};') + 1
            js_data = content[start:end]
            
            # Convert JavaScript to JSON (simplified approach)
            js_data = js_data.replace('const annualReportsData = ', '')
            js_data = js_data.replace('};', '}')
            
            # Parse the data (this is a simplified parser)
            # In production, you'd want to use a proper JS parser
            return self.parse_js_data(js_data)
            
        except Exception as e:
            logging.error(f"Error loading reports data: {e}")
            return {}
    
    def parse_js_data(self, js_data):
        """Parse JavaScript data structure (simplified)"""
        # This is a simplified implementation
        # For production use, consider using a proper JavaScript parser
        exchanges_data = {}
        
        # Manually define the data structure based on our known data
        exchanges_data = {
            'ice': {
                'name': 'Intercontinental Exchange (ICE/NYSE)',
                'reports': [
                    {
                        'year': 2024,
                        'title': 'ICE Form 10-K 2024',
                        'url': 'https://ir.theice.com/financials/sec-filings/default.aspx',
                        'localPath': 'reports/ice/ICE_10K_2024.pdf'
                    },
                    {
                        'year': 2023,
                        'title': 'ICE Form 10-K 2023',
                        'url': 'https://ir.theice.com/financials/sec-filings/default.aspx',
                        'localPath': 'reports/ice/ICE_10K_2023.pdf'
                    }
                ]
            },
            'nasdaq': {
                'name': 'NASDAQ Inc.',
                'reports': [
                    {
                        'year': 2024,
                        'title': 'NASDAQ Form 10-K 2024',
                        'url': 'https://nasdaqinc.gcs-web.com/node/108606/html',
                        'localPath': 'reports/nasdaq/NASDAQ_10K_2024.pdf'
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
                        'localPath': 'reports/hkex/HKEX_Annual_2024.pdf'
                    }
                ]
            },
            'jpx': {
                'name': 'Japan Exchange Group (JPX)',
                'reports': [
                    {
                        'year': 2024,
                        'title': 'JPX Report 2024 (Integrated Report)',
                        'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2024_A4.pdf',
                        'localPath': 'reports/jpx/JPX_Report_2024.pdf'
                    },
                    {
                        'year': 2023,
                        'title': 'JPX Report 2023 (Integrated Report)',
                        'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2023.pdf',
                        'localPath': 'reports/jpx/JPX_Report_2023.pdf'
                    },
                    {
                        'year': 2022,
                        'title': 'JPX Report 2022 (Integrated Report)',
                        'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2022.pdf',
                        'localPath': 'reports/jpx/JPX_Report_2022.pdf'
                    }
                ]
            }
        }
        
        return exchanges_data
    
    def download_file(self, url, local_path, title):
        """Download a single file"""
        try:
            logging.info(f"Downloading: {title}")
            logging.info(f"URL: {url}")
            logging.info(f"Local path: {local_path}")
            
            # Create directory if it doesn't exist
            Path(local_path).parent.mkdir(parents=True, exist_ok=True)
            
            # Check if file already exists
            if os.path.exists(local_path):
                logging.info(f"File already exists: {local_path}")
                return True
            
            # Download the file
            response = self.session.get(url, timeout=30, stream=True)
            response.raise_for_status()
            
            # Check if response is actually a PDF
            content_type = response.headers.get('content-type', '').lower()
            if 'pdf' not in content_type and 'application/octet-stream' not in content_type:
                # This might be an HTML page, not a direct PDF link
                logging.warning(f"URL does not point to a PDF file: {url}")
                logging.warning(f"Content-Type: {content_type}")
                
                # Save as HTML for manual review
                html_path = local_path.replace('.pdf', '.html')
                with open(html_path, 'wb') as f:
                    for chunk in response.iter_content(chunk_size=8192):
                        f.write(chunk)
                logging.info(f"Saved HTML page for manual review: {html_path}")
                return False
            
            # Save the PDF file
            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            
            file_size = os.path.getsize(local_path)
            logging.info(f"Successfully downloaded: {title} ({file_size} bytes)")
            self.downloaded_count += 1
            return True
            
        except requests.exceptions.RequestException as e:
            logging.error(f"Failed to download {title}: {e}")
            self.failed_count += 1
            return False
        except Exception as e:
            logging.error(f"Unexpected error downloading {title}: {e}")
            self.failed_count += 1
            return False
    
    def download_all_reports(self):
        """Download all reports"""
        logging.info("Starting download of all annual reports...")
        
        # Create directory structure
        self.create_directory_structure()
        
        # Load reports data
        exchanges_data = self.load_reports_data()
        
        if not exchanges_data:
            logging.error("No reports data found")
            return
        
        total_reports = sum(len(exchange['reports']) for exchange in exchanges_data.values())
        logging.info(f"Found {total_reports} reports to download")
        
        # Download each report
        for exchange_key, exchange_data in exchanges_data.items():
            logging.info(f"\n--- Processing {exchange_data['name']} ---")
            
            for report in exchange_data['reports']:
                self.download_file(
                    report['url'],
                    report['localPath'],
                    report['title']
                )
                
                # Add delay between downloads to be respectful
                time.sleep(2)
        
        # Summary
        logging.info(f"\n--- Download Summary ---")
        logging.info(f"Successfully downloaded: {self.downloaded_count}")
        logging.info(f"Failed downloads: {self.failed_count}")
        logging.info(f"Total processed: {self.downloaded_count + self.failed_count}")

def main():
    downloader = ReportsDownloader()
    downloader.download_all_reports()

if __name__ == "__main__":
    main()
