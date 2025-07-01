#!/bin/bash

# Annual Reports Downloader for Mac/Linux
# Downloads verified PDF reports from global stock exchanges

echo "========================================"
echo "Annual Reports Downloader"
echo "========================================"
echo

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
downloaded_count=0
failed_count=0

# Function to download file with progress
download_file() {
    local url="$1"
    local output="$2"
    local title="$3"
    
    echo -e "${BLUE}Downloading: ${title}${NC}"
    echo "URL: $url"
    echo "Output: $output"
    
    # Check if file already exists
    if [ -f "$output" ]; then
        local size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        if [ "$size" -gt 1000 ]; then
            echo -e "${YELLOW}File already exists: $output ($size bytes)${NC}"
            ((downloaded_count++))
            return 0
        fi
    fi
    
    # Download with curl
    if curl -L --fail --silent --show-error --progress-bar "$url" -o "$output"; then
        local size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        echo -e "${GREEN}✓ Successfully downloaded: $title ($size bytes)${NC}"
        ((downloaded_count++))
        return 0
    else
        echo -e "${RED}✗ Failed to download: $title${NC}"
        ((failed_count++))
        return 1
    fi
}

# Create directory structure
echo "Creating directory structure..."
mkdir -p reports/{hkex,jpx,ice,nasdaq,lseg,sse,szse,tmx,deutsche,euronext}
echo "Directory structure created."
echo

# Download HKEX 2024 Annual Report
echo "========================================"
echo "Downloading HKEX 2024 Annual Report..."
echo "========================================"
download_file \
    "https://www.hkexgroup.com/-/media/HKEX-Group-Site/ssd/Investor-Relations/Regulatory-Reports/documents/2025/250317ar_e.pdf" \
    "reports/hkex/HKEX_Annual_2024.pdf" \
    "HKEX Annual Report 2024"
echo

# Download JPX Reports
echo "========================================"
echo "Downloading JPX Reports (2015-2024)..."
echo "========================================"

# JPX 2024
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2024_A4.pdf" \
    "reports/jpx/JPX_Report_2024.pdf" \
    "JPX Report 2024"

# JPX 2023
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2023.pdf" \
    "reports/jpx/JPX_Report_2023.pdf" \
    "JPX Report 2023"

# JPX 2022
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2022.pdf" \
    "reports/jpx/JPX_Report_2022.pdf" \
    "JPX Report 2022"

# JPX 2021
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2021_A4.pdf" \
    "reports/jpx/JPX_Report_2021.pdf" \
    "JPX Report 2021"

# JPX 2020
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2020.pdf" \
    "reports/jpx/JPX_Report_2020.pdf" \
    "JPX Report 2020"

# JPX 2019
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2019.pdf" \
    "reports/jpx/JPX_Report_2019.pdf" \
    "JPX Report 2019"

# JPX 2018
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2018_English.pdf" \
    "reports/jpx/JPX_Report_2018.pdf" \
    "JPX Report 2018"

# JPX 2017
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2017_English.pdf" \
    "reports/jpx/JPX_Report_2017.pdf" \
    "JPX Report 2017"

# JPX 2016
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXreport2016e_all.pdf" \
    "reports/jpx/JPX_Report_2016.pdf" \
    "JPX Report 2016"

# JPX 2015
download_file \
    "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/2015_jpxreport_e_all.pdf" \
    "reports/jpx/JPX_Report_2015.pdf" \
    "JPX Report 2015"

echo
echo "========================================"
echo "Download Summary"
echo "========================================"

# Calculate total size
total_size=0
if command -v du >/dev/null 2>&1; then
    total_size=$(du -sh reports/ 2>/dev/null | cut -f1)
fi

echo -e "${GREEN}Successfully downloaded: $downloaded_count${NC}"
echo -e "${RED}Failed downloads: $failed_count${NC}"
echo "Total processed: $((downloaded_count + failed_count))"
if [ "$total_size" != "0" ]; then
    echo "Total size: $total_size"
fi
echo

# List downloaded files
echo "Downloaded files:"
echo "=================="
find reports/ -name "*.pdf" -exec ls -lh {} \; 2>/dev/null | while read -r line; do
    echo -e "${GREEN}✓${NC} $line"
done

echo
echo "========================================"
echo "Additional Reports Available"
echo "========================================"
echo
echo "The following exchanges have reports available through navigation:"
echo
echo -e "${BLUE}ICE (NYSE):${NC}"
echo "  URL: https://ir.theice.com/financials/sec-filings/default.aspx"
echo "  Reports: 2015-2024 Form 10-K"
echo
echo -e "${BLUE}NASDAQ:${NC}"
echo "  URL: https://ir.nasdaq.com/sec-filings/"
echo "  Reports: 2015-2024 Form 10-K"
echo
echo -e "${BLUE}LSEG:${NC}"
echo "  URL: https://www.lseg.com/en/investor-relations/annual-reports"
echo "  Reports: 2015-2024 Annual Reports"
echo

echo "========================================"
echo -e "${GREEN}Download Complete!${NC}"
echo "========================================"
echo
echo "Next steps:"
echo "1. Open index.html in your browser"
echo "2. Navigate to \"深度分析\" > \"年度報告庫\""
echo "3. Use the interface to browse downloaded reports"
echo
echo "For additional reports, visit the URLs listed above."
echo

# Verify downloads
echo "Verifying PDF files..."
pdf_count=0
for pdf in reports/*/*.pdf; do
    if [ -f "$pdf" ]; then
        if file "$pdf" | grep -q "PDF"; then
            ((pdf_count++))
        else
            echo -e "${YELLOW}Warning: $pdf may not be a valid PDF file${NC}"
        fi
    fi
done

echo -e "${GREEN}Verified $pdf_count valid PDF files${NC}"
echo

# Create download log
log_file="download_log_$(date +%Y%m%d_%H%M%S).txt"
{
    echo "Annual Reports Download Log"
    echo "=========================="
    echo "Date: $(date)"
    echo "Successfully downloaded: $downloaded_count"
    echo "Failed downloads: $failed_count"
    echo "Total processed: $((downloaded_count + failed_count))"
    echo
    echo "Downloaded files:"
    find reports/ -name "*.pdf" -exec ls -lh {} \; 2>/dev/null
} > "$log_file"

echo "Download log saved to: $log_file"
