@echo off
REM Annual Reports Downloader for Windows
REM Downloads verified PDF reports from global stock exchanges

echo ========================================
echo Annual Reports Downloader
echo ========================================
echo.

REM Create directory structure
echo Creating directory structure...
mkdir reports\hkex 2>nul
mkdir reports\jpx 2>nul
mkdir reports\ice 2>nul
mkdir reports\nasdaq 2>nul
mkdir reports\lseg 2>nul
mkdir reports\sse 2>nul
mkdir reports\szse 2>nul
mkdir reports\tmx 2>nul
mkdir reports\deutsche 2>nul
mkdir reports\euronext 2>nul

echo Directory structure created.
echo.

REM Download HKEX 2024 Annual Report
echo ========================================
echo Downloading HKEX 2024 Annual Report...
echo ========================================
curl -L "https://www.hkexgroup.com/-/media/HKEX-Group-Site/ssd/Investor-Relations/Regulatory-Reports/documents/2025/250317ar_e.pdf" -o "reports\hkex\HKEX_Annual_2024.pdf"
if %errorlevel% equ 0 (
    echo ✓ HKEX 2024 Annual Report downloaded successfully
) else (
    echo ✗ Failed to download HKEX 2024 Annual Report
)
echo.

REM Download JPX Reports
echo ========================================
echo Downloading JPX Reports (2015-2024)...
echo ========================================

echo Downloading JPX Report 2024...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2024_A4.pdf" -o "reports\jpx\JPX_Report_2024.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2024 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2024
)

echo Downloading JPX Report 2023...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2023.pdf" -o "reports\jpx\JPX_Report_2023.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2023 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2023
)

echo Downloading JPX Report 2022...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2022.pdf" -o "reports\jpx\JPX_Report_2022.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2022 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2022
)

echo Downloading JPX Report 2021...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2021_A4.pdf" -o "reports\jpx\JPX_Report_2021.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2021 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2021
)

echo Downloading JPX Report 2020...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2020.pdf" -o "reports\jpx\JPX_Report_2020.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2020 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2020
)

echo Downloading JPX Report 2019...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2019.pdf" -o "reports\jpx\JPX_Report_2019.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2019 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2019
)

echo Downloading JPX Report 2018...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2018_English.pdf" -o "reports\jpx\JPX_Report_2018.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2018 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2018
)

echo Downloading JPX Report 2017...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2017_English.pdf" -o "reports\jpx\JPX_Report_2017.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2017 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2017
)

echo Downloading JPX Report 2016...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXreport2016e_all.pdf" -o "reports\jpx\JPX_Report_2016.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2016 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2016
)

echo Downloading JPX Report 2015...
curl -L "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/2015_jpxreport_e_all.pdf" -o "reports\jpx\JPX_Report_2015.pdf"
if %errorlevel% equ 0 (
    echo ✓ JPX Report 2015 downloaded successfully
) else (
    echo ✗ Failed to download JPX Report 2015
)

echo.
echo ========================================
echo Download Summary
echo ========================================

REM Count downloaded files
set /a count=0
for %%f in (reports\hkex\*.pdf) do set /a count+=1
for %%f in (reports\jpx\*.pdf) do set /a count+=1

echo Total PDF files downloaded: %count%
echo.

REM List downloaded files with sizes
echo Downloaded files:
echo ==================
if exist "reports\hkex\HKEX_Annual_2024.pdf" (
    for %%f in ("reports\hkex\HKEX_Annual_2024.pdf") do echo ✓ HKEX_Annual_2024.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2024.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2024.pdf") do echo ✓ JPX_Report_2024.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2023.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2023.pdf") do echo ✓ JPX_Report_2023.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2022.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2022.pdf") do echo ✓ JPX_Report_2022.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2021.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2021.pdf") do echo ✓ JPX_Report_2021.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2020.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2020.pdf") do echo ✓ JPX_Report_2020.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2019.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2019.pdf") do echo ✓ JPX_Report_2019.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2018.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2018.pdf") do echo ✓ JPX_Report_2018.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2017.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2017.pdf") do echo ✓ JPX_Report_2017.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2016.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2016.pdf") do echo ✓ JPX_Report_2016.pdf - %%~zf bytes
)

if exist "reports\jpx\JPX_Report_2015.pdf" (
    for %%f in ("reports\jpx\JPX_Report_2015.pdf") do echo ✓ JPX_Report_2015.pdf - %%~zf bytes
)

echo.
echo ========================================
echo Additional Reports Available
echo ========================================
echo.
echo The following exchanges have reports available through navigation:
echo.
echo ICE (NYSE):
echo   URL: https://ir.theice.com/financials/sec-filings/default.aspx
echo   Reports: 2015-2024 Form 10-K
echo.
echo NASDAQ:
echo   URL: https://ir.nasdaq.com/sec-filings/
echo   Reports: 2015-2024 Form 10-K
echo.
echo LSEG:
echo   URL: https://www.lseg.com/en/investor-relations/annual-reports
echo   Reports: 2015-2024 Annual Reports
echo.
echo ========================================
echo Download Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Open index.html in your browser
echo 2. Navigate to "深度分析" ^> "年度報告庫"
echo 3. Use the interface to browse downloaded reports
echo.
echo For additional reports, visit the URLs listed above.
echo.

pause
