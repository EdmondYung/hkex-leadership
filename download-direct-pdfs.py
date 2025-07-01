#!/usr/bin/env python3
"""
Direct PDF Downloader for Annual Reports
Downloads verified PDF links from global stock exchanges
"""

import os
import requests
import time
from pathlib import Path
import logging
from download_config import DownloadConfig

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('pdf_download_log.txt'),
        logging.StreamHandler()
    ]
)

class DirectPDFDownloader:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'application/pdf,application/octet-stream,*/*',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        })
        self.downloaded_count = 0
        self.failed_count = 0
        # Set default download folder to the project directory
        self.base_folder = DownloadConfig.get_default_folder()
        
        # Direct PDF links that we've verified
        self.direct_pdf_links = [
            {
                'title': 'HKEX Annual Report 2024',
                'url': 'https://www.hkexgroup.com/-/media/HKEX-Group-Site/ssd/Investor-Relations/Regulatory-Reports/documents/2025/250317ar_e.pdf',
                'local_path': 'hkex/HKEX_Annual_2024.pdf',
                'exchange': 'HKEX'
            },
            {
                'title': 'JPX Report 2024',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2024_A4.pdf',
                'local_path': 'jpx/JPX_Report_2024.pdf',
                'exchange': 'JPX'
            },
            {
                'title': 'JPX Report 2023',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2023.pdf',
                'local_path': 'jpx/JPX_Report_2023.pdf',
                'exchange': 'JPX'
            },
            {
                'title': 'JPX Report 2022',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2022.pdf',
                'local_path': 'jpx/JPX_Report_2022.pdf',
                'exchange': 'JPX'
            },
            {
                'title': 'JPX Report 2021',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2021_A4.pdf',
                'local_path': 'jpx/JPX_Report_2021.pdf',
                'exchange': 'JPX'
            },
            {
                'title': 'JPX Report 2020',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2020.pdf',
                'local_path': 'jpx/JPX_Report_2020.pdf',
                'exchange': 'JPX'
            },
            {
                'title': 'JPX Report 2019',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2019.pdf',
                'local_path': 'jpx/JPX_Report_2019.pdf',
                'exchange': 'JPX'
            },
            {
                'title': 'JPX Report 2018',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2018_English.pdf',
                'local_path': 'jpx/JPX_Report_2018.pdf',
                'exchange': 'JPX'
            },
            {
                'title': 'JPX Report 2017',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2017_English.pdf',
                'local_path': 'jpx/JPX_Report_2017.pdf',
                'exchange': 'JPX'
            },
            {
                'title': 'JPX Report 2016',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXreport2016e_all.pdf',
                'local_path': 'jpx/JPX_Report_2016.pdf',
                'exchange': 'JPX'
            },
            {
                'title': 'JPX Report 2015',
                'url': 'https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/2015_jpxreport_e_all.pdf',
                'local_path': 'jpx/JPX_Report_2015.pdf',
                'exchange': 'JPX'
            }
        ]
    
    def create_directory_structure(self):
        """Create the reports directory structure"""
        exchanges = ['ice', 'nasdaq', 'lseg', 'hkex', 'jpx', 'sse', 'szse', 'tmx', 'deutsche', 'euronext']

        for exchange in exchanges:
            Path(f'{self.base_folder}/{exchange}').mkdir(parents=True, exist_ok=True)
            logging.info(f"Created directory: {self.base_folder}/{exchange}")
    
    def download_pdf(self, url, local_path, title, exchange):
        """Download a single PDF file"""
        try:
            # Construct full path using base_folder
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

            # Verify it's a PDF file
            with open(full_path, 'rb') as f:
                header = f.read(4)
                if header != b'%PDF':
                    logging.warning(f"Downloaded file may not be a valid PDF: {full_path}")
                    # Rename to .html for inspection
                    html_path = full_path.replace('.pdf', '.html')
                    os.rename(full_path, html_path)
                    logging.info(f"Renamed to: {html_path}")
                    return False
            
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
    
    def download_all_pdfs(self):
        """Download all verified PDF files"""
        logging.info("Starting download of verified PDF reports...")
        
        # Create directory structure
        self.create_directory_structure()
        
        total_pdfs = len(self.direct_pdf_links)
        logging.info(f"Found {total_pdfs} verified PDF links to download")
        
        # Download each PDF
        for i, pdf_info in enumerate(self.direct_pdf_links, 1):
            logging.info(f"\n--- [{i}/{total_pdfs}] Processing {pdf_info['exchange']} ---")
            
            success = self.download_pdf(
                pdf_info['url'],
                pdf_info['local_path'],
                pdf_info['title'],
                pdf_info['exchange']
            )
            
            if success:
                logging.info("✅ Download successful")
            else:
                logging.error("❌ Download failed")
            
            # Add delay between downloads to be respectful
            if i < total_pdfs:
                logging.info("Waiting 3 seconds before next download...")
                time.sleep(3)
        
        # Summary
        logging.info(f"\n--- Download Summary ---")
        logging.info(f"Successfully downloaded: {self.downloaded_count}")
        logging.info(f"Failed downloads: {self.failed_count}")
        logging.info(f"Total processed: {self.downloaded_count + self.failed_count}")
        
        # List downloaded files
        logging.info(f"\n--- Downloaded Files ---")
        for pdf_info in self.direct_pdf_links:
            if os.path.exists(pdf_info['local_path']):
                size = os.path.getsize(pdf_info['local_path'])
                logging.info(f"✅ {pdf_info['local_path']} ({size} bytes)")
            else:
                logging.info(f"❌ {pdf_info['local_path']} (not found)")

def main():
    downloader = DirectPDFDownloader()
    downloader.download_all_pdfs()

if __name__ == "__main__":
    main()
