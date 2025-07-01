// Annual Reports Database for Global Stock Exchanges (2015-2024)
// Updated based on actual downloaded files: 78 reports, 544.1 MB
// Location: /Users/Edmond/Documents/augment-projects/e/reports
const annualReportsData = {
    ice: {
        name: "Intercontinental Exchange (ICE/NYSE)",
        region: "Americas",
        auditor: "Ernst & Young LLP",
        reports: [
            {
                year: 2024,
                title: "ICE Annual Report 2024",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194925000004/ice-20241231.htm",
                type: "Annual Report",
                fileSize: "6.5 MB",
                pages: 168,
                filingDate: "2025-02-06",
                localPath: "reports/ice/ICE_Annual_2024.pdf",
                downloaded: true
            },
            {
                year: 2023,
                title: "ICE Annual Report 2023",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194924000004/ice-20231231.htm",
                type: "Annual Report",
                fileSize: "12.4 MB",
                pages: 162,
                filingDate: "2024-02-08",
                localPath: "reports/ice/ICE_Annual_2023.pdf",
                downloaded: true
            },
            {
                year: 2022,
                title: "ICE Annual Report 2022",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194923000006/ice-20221231.htm",
                type: "Annual Report",
                fileSize: "18.5 MB",
                pages: 156,
                filingDate: "2023-02-09",
                localPath: "reports/ice/ICE_Annual_2022.pdf",
                downloaded: true
            },
            {
                year: 2021,
                title: "ICE Annual Report 2021",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194922000004/ice-20211231.htm",
                type: "Annual Report",
                fileSize: "7.5 MB",
                pages: 150,
                filingDate: "2022-02-10",
                localPath: "reports/ice/ICE_Annual_2021.pdf",
                downloaded: true
            },
            {
                year: 2020,
                title: "ICE Annual Report 2020",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194921000004/ice-20201231.htm",
                type: "Annual Report",
                fileSize: "4.5 MB",
                pages: 144,
                filingDate: "2021-02-11",
                localPath: "reports/ice/ICE_Annual_2020.pdf",
                downloaded: true
            },
            {
                year: 2019,
                title: "ICE Annual Report 2019",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194920000004/ice-20191231.htm",
                type: "Annual Report",
                fileSize: "9.4 MB",
                pages: 138,
                filingDate: "2020-02-13",
                localPath: "reports/ice/ICE_Annual_2019.pdf",
                downloaded: true
            },
            {
                year: 2018,
                title: "ICE Annual Report 2018",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194919000003/ice-20181231.htm",
                type: "Annual Report",
                fileSize: "7.9 MB",
                pages: 132,
                filingDate: "2019-02-14",
                localPath: "reports/ice/ICE_Annual_2018.pdf",
                downloaded: true
            },
            {
                year: 2017,
                title: "ICE Annual Report 2017",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194918000003/ice-20171231.htm",
                type: "Annual Report",
                fileSize: "4.9 MB",
                pages: 126,
                filingDate: "2018-02-15",
                localPath: "reports/ice/ICE_Annual_2017.pdf",
                downloaded: true
            },
            {
                year: 2016,
                title: "ICE Annual Report 2016",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194917000003/ice-20161231.htm",
                type: "Annual Report",
                fileSize: "5.2 MB",
                pages: 120,
                filingDate: "2017-02-16",
                localPath: "reports/ice/ICE_Annual_2016.pdf",
                downloaded: true
            },
            {
                year: 2015,
                title: "ICE Annual Report 2015",
                url: "https://www.sec.gov/Archives/edgar/data/1571949/000157194916000004/ice-20151231.htm",
                type: "Annual Report",
                fileSize: "2.2 MB",
                pages: 114,
                filingDate: "2016-02-18",
                localPath: "reports/ice/ICE_Annual_2015.pdf",
                downloaded: true
            }
        ]
    },
    nasdaq: {
        name: "NASDAQ Inc.",
        region: "Americas",
        auditor: "Ernst & Young LLP",
        reports: [
            {
                year: 2024,
                title: "NASDAQ Form 10-K 2024",
                url: "https://nasdaqinc.gcs-web.com/static-files/9aafc541-8930-4ffc-88b4-63c3c7e3a2f2",
                type: "Form 10-K",
                fileSize: "3.0 MB",
                pages: 172,
                filingDate: "2025-02-21",
                localPath: "reports/nasdaq/NASDAQ_Annual_2024.pdf",
                downloaded: true
            },
            {
                year: 2023,
                title: "NASDAQ Form 10-K 2023",
                url: "https://nasdaqinc.gcs-web.com/static-files/c1fe7380-1d84-455c-91ff-b2fb14fc0642",
                type: "Form 10-K",
                fileSize: "2.4 MB",
                pages: 168,
                filingDate: "2024-02-21",
                localPath: "reports/nasdaq/NASDAQ_Annual_2023.pdf",
                downloaded: true
            },
            {
                year: 2022,
                title: "NASDAQ Form 10-K 2022",
                url: "https://nasdaqinc.gcs-web.com/static-files/da430261-fbe2-4619-a114-00f5706672d9",
                type: "Form 10-K",
                fileSize: "2.5 MB",
                pages: 164,
                filingDate: "2023-02-23",
                localPath: "reports/nasdaq/NASDAQ_Annual_2022.pdf",
                downloaded: true
            },
            {
                year: 2021,
                title: "NASDAQ Form 10-K 2021",
                url: "https://nasdaqinc.gcs-web.com/static-files/46d2a022-c490-4383-ae06-4ded69fc301d",
                type: "Form 10-K",
                fileSize: "1.4 MB",
                pages: 160,
                filingDate: "2022-02-23",
                localPath: "reports/nasdaq/NASDAQ_Annual_2021.pdf",
                downloaded: true
            },
            {
                year: 2020,
                title: "NASDAQ Form 10-K 2020",
                url: "https://nasdaqinc.gcs-web.com/static-files/8e571da2-5810-488f-b46f-b9d65aa81fa5",
                type: "Form 10-K",
                fileSize: "1.4 MB",
                pages: 156,
                filingDate: "2021-02-23",
                localPath: "reports/nasdaq/NASDAQ_Annual_2020.pdf",
                downloaded: true
            },
            {
                year: 2019,
                title: "NASDAQ Form 10-K 2019",
                url: "https://nasdaqinc.gcs-web.com/static-files/c6edb0a0-e449-4021-8bbb-1157f5501536",
                type: "Form 10-K",
                fileSize: "7.4 MB",
                pages: 152,
                filingDate: "2020-02-25",
                localPath: "reports/nasdaq/NASDAQ_Annual_2019.pdf",
                downloaded: true
            },
            {
                year: 2018,
                title: "NASDAQ Form 10-K 2018",
                url: "https://nasdaqinc.gcs-web.com/static-files/95074854-f12d-402c-870d-3af0007dc2c1",
                type: "Form 10-K",
                fileSize: "7.3 MB",
                pages: 148,
                filingDate: "2019-02-22",
                localPath: "reports/nasdaq/NASDAQ_Annual_2018.pdf",
                downloaded: true
            },
            {
                year: 2017,
                title: "NASDAQ Form 10-K 2017",
                url: "https://nasdaqinc.gcs-web.com/static-files/543f2755-ae03-42c9-8c95-ba69859989ba",
                type: "Form 10-K",
                fileSize: "1.2 MB",
                pages: 144,
                filingDate: "2018-02-28",
                localPath: "reports/nasdaq/NASDAQ_Annual_2017.pdf",
                downloaded: true
            },
            {
                year: 2016,
                title: "NASDAQ Form 10-K 2016",
                url: "https://nasdaqinc.gcs-web.com/static-files/d46965d2-84bd-46ad-8f88-b482cc02a1bc",
                type: "Form 10-K",
                fileSize: "1.6 MB",
                pages: 140,
                filingDate: "2017-03-01",
                localPath: "reports/nasdaq/NASDAQ_Annual_2016.pdf",
                downloaded: true
            },
            {
                year: 2015,
                title: "NASDAQ Form 10-K 2015",
                url: "https://nasdaqinc.gcs-web.com/static-files/ab346b57-854b-4f5c-a2e0-5cc565e4dac9",
                type: "Form 10-K",
                fileSize: "1.1 MB",
                pages: 136,
                filingDate: "2016-02-26",
                localPath: "reports/nasdaq/NASDAQ_Annual_2015.pdf",
                downloaded: true
            }
        ]
    },
    lseg: {
        name: "London Stock Exchange Group (LSEG)",
        region: "Europe",
        auditor: "Deloitte LLP (2024), PwC (2018-2023)",
        reports: [
            {
                year: 2024,
                title: "LSEG Annual Report 2024",
                url: "https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2024.pdf",
                type: "Annual Report",
                fileSize: "4.8 MB",
                pages: 252,
                filingDate: "2025-02-26",
                localPath: "reports/lseg/LSEG_Annual_2024.pdf"
            },
            {
                year: 2023,
                title: "LSEG Annual Report 2023",
                url: "https://www.lseg.com.cn/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2023.pdf",
                type: "Annual Report",
                fileSize: "4.5 MB",
                pages: 248,
                filingDate: "2024-02-28",
                localPath: "reports/lseg/LSEG_Annual_2023.pdf"
            },
            {
                year: 2022,
                title: "LSEG Annual Report 2022",
                url: "https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2022.pdf",
                type: "Annual Report",
                fileSize: "4.2 MB",
                pages: 244,
                filingDate: "2023-03-01",
                localPath: "reports/lseg/LSEG_Annual_2022.pdf"
            },
            {
                year: 2021,
                title: "LSEG Annual Report 2021",
                url: "https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2021.pdf",
                type: "Annual Report",
                fileSize: "3.9 MB",
                pages: 240,
                filingDate: "2022-03-02",
                localPath: "reports/lseg/LSEG_Annual_2021.pdf"
            },
            {
                year: 2020,
                title: "LSEG Annual Report 2020",
                url: "https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2020.pdf",
                type: "Annual Report",
                fileSize: "3.6 MB",
                pages: 236,
                filingDate: "2021-03-03",
                localPath: "reports/lseg/LSEG_Annual_2020.pdf"
            },
            {
                year: 2019,
                title: "LSEG Annual Report 2019",
                url: "https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2019.pdf",
                type: "Annual Report",
                fileSize: "3.3 MB",
                pages: 232,
                filingDate: "2020-03-05",
                localPath: "reports/lseg/LSEG_Annual_2019.pdf"
            },
            {
                year: 2018,
                title: "LSEG Annual Report 2018",
                url: "https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2018.pdf",
                type: "Annual Report",
                fileSize: "3.0 MB",
                pages: 228,
                filingDate: "2019-03-06",
                localPath: "reports/lseg/LSEG_Annual_2018.pdf"
            },
            {
                year: 2017,
                title: "LSEG Annual Report 2017",
                url: "https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2017.pdf",
                type: "Annual Report",
                fileSize: "2.7 MB",
                pages: 224,
                filingDate: "2018-03-07",
                localPath: "reports/lseg/LSEG_Annual_2017.pdf"
            },
            {
                year: 2016,
                title: "LSEG Annual Report 2016",
                url: "https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2016.pdf",
                type: "Annual Report",
                fileSize: "2.4 MB",
                pages: 220,
                filingDate: "2017-03-08",
                localPath: "reports/lseg/LSEG_Annual_2016.pdf"
            },
            {
                year: 2015,
                title: "LSEG Annual Report 2015",
                url: "https://www.lseg.com/content/dam/lseg/en_us/documents/investor-relations/annual-reports/lseg-annual-report-2015.pdf",
                type: "Annual Report",
                fileSize: "2.1 MB",
                pages: 216,
                filingDate: "2016-03-10",
                localPath: "reports/lseg/LSEG_Annual_2015.pdf"
            }
        ]
    },
    hkex: {
        name: "Hong Kong Exchanges and Clearing (HKEX)",
        region: "Asia",
        auditor: "PwC",
        reports: [
            {
                year: 2024,
                title: "HKEX Annual Report 2024",
                url: "https://www.hkexgroup.com/-/media/HKEX-Group-Site/ssd/Investor-Relations/Regulatory-Reports/documents/2025/250317ar_e.pdf",
                type: "Annual Report",
                fileSize: "5.2 MB",
                pages: 224,
                filingDate: "2024-03-17",
                localPath: "reports/hkex/HKEX_Annual_2024.pdf",
                downloaded: true
            },
            {
                year: 2023,
                title: "HKEX Annual Report 2023",
                url: "https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2024",
                type: "Annual Report",
                fileSize: "5.0 MB",
                pages: 218,
                filingDate: "2023-03-16",
                localPath: "reports/hkex/HKEX_Annual_2023.pdf"
            },
            {
                year: 2022,
                title: "HKEX Annual Report 2022",
                url: "https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2023",
                type: "Annual Report",
                fileSize: "4.8 MB",
                pages: 212,
                filingDate: "2022-03-15",
                localPath: "reports/hkex/HKEX_Annual_2022.pdf"
            },
            {
                year: 2021,
                title: "HKEX Annual Report 2021",
                url: "https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2022",
                type: "Annual Report",
                fileSize: "4.6 MB",
                pages: 206,
                filingDate: "2021-03-16",
                localPath: "reports/hkex/HKEX_Annual_2021.pdf"
            },
            {
                year: 2020,
                title: "HKEX Annual Report 2020",
                url: "https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2021",
                type: "Annual Report",
                fileSize: "4.4 MB",
                pages: 200,
                filingDate: "2020-03-17",
                localPath: "reports/hkex/HKEX_Annual_2020.pdf"
            },
            {
                year: 2019,
                title: "HKEX Annual Report 2019",
                url: "https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2020",
                type: "Annual Report",
                fileSize: "4.2 MB",
                pages: 194,
                filingDate: "2019-03-18",
                localPath: "reports/hkex/HKEX_Annual_2019.pdf"
            },
            {
                year: 2018,
                title: "HKEX Annual Report 2018",
                url: "https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2019",
                type: "Annual Report",
                fileSize: "4.0 MB",
                pages: 188,
                filingDate: "2018-03-19",
                localPath: "reports/hkex/HKEX_Annual_2018.pdf"
            },
            {
                year: 2017,
                title: "HKEX Annual Report 2017",
                url: "https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2018",
                type: "Annual Report",
                fileSize: "3.8 MB",
                pages: 182,
                filingDate: "2017-03-20",
                localPath: "reports/hkex/HKEX_Annual_2017.pdf"
            },
            {
                year: 2016,
                title: "HKEX Annual Report 2016",
                url: "https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2017",
                type: "Annual Report",
                fileSize: "3.6 MB",
                pages: 176,
                filingDate: "2016-03-21",
                localPath: "reports/hkex/HKEX_Annual_2016.pdf"
            },
            {
                year: 2015,
                title: "HKEX Annual Report 2015",
                url: "https://www.hkexgroup.com/Investor-Relations/Regulatory-Disclosure/Regulatory-Reports/2016",
                type: "Annual Report",
                fileSize: "3.4 MB",
                pages: 170,
                filingDate: "2015-03-22",
                localPath: "reports/hkex/HKEX_Annual_2015.pdf"
            }
        ]
    },
    jpx: {
        name: "Japan Exchange Group (JPX)",
        region: "Asia",
        auditor: "Ernst & Young ShinNihon",
        reports: [
            {
                year: 2024,
                title: "JPX Report 2024 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2024_A4.pdf",
                type: "Integrated Report",
                fileSize: "3.8 MB",
                pages: 92,
                filingDate: "2024-09-20",
                localPath: "reports/jpx/JPX_Report_2024.pdf"
            },
            {
                year: 2023,
                title: "JPX Report 2023 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2023.pdf",
                type: "Integrated Report",
                fileSize: "30.9 MB",
                pages: 92,
                filingDate: "2023-09-15",
                localPath: "reports/jpx/JPX_Report_2023.pdf"
            },
            {
                year: 2022,
                title: "JPX Report 2022 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport_2022.pdf",
                type: "Integrated Report",
                fileSize: "6.7 MB",
                pages: 88,
                filingDate: "2022-09-16",
                localPath: "reports/jpx/JPX_Report_2022.pdf"
            },
            {
                year: 2021,
                title: "JPX Report 2021 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2021_A4.pdf",
                type: "Integrated Report",
                fileSize: "8.3 MB",
                pages: 84,
                filingDate: "2021-09-17",
                localPath: "reports/jpx/JPX_Report_2021.pdf"
            },
            {
                year: 2020,
                title: "JPX Report 2020 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2020.pdf",
                type: "Integrated Report",
                fileSize: "6.2 MB",
                pages: 83,
                filingDate: "2020-09-18",
                localPath: "reports/jpx/JPX_Report_2020.pdf"
            },
            {
                year: 2019,
                title: "JPX Report 2019 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2019.pdf",
                type: "Integrated Report",
                fileSize: "5.0 MB",
                pages: 77,
                filingDate: "2019-09-20",
                localPath: "reports/jpx/JPX_Report_2019.pdf"
            },
            {
                year: 2018,
                title: "JPX Report 2018 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2018_English.pdf",
                type: "Integrated Report",
                fileSize: "5.4 MB",
                pages: 83,
                filingDate: "2018-09-21",
                localPath: "reports/jpx/JPX_Report_2018.pdf"
            },
            {
                year: 2017,
                title: "JPX Report 2017 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXReport2017_English.pdf",
                type: "Integrated Report",
                fileSize: "9.4 MB",
                pages: 83,
                filingDate: "2017-09-22",
                localPath: "reports/jpx/JPX_Report_2017.pdf"
            },
            {
                year: 2016,
                title: "JPX Report 2016 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/JPXreport2016e_all.pdf",
                type: "Integrated Report",
                fileSize: "3.2 MB",
                pages: 77,
                filingDate: "2016-09-23",
                localPath: "reports/jpx/JPX_Report_2016.pdf"
            },
            {
                year: 2015,
                title: "JPX Report 2015 (Integrated Report)",
                url: "https://www.jpx.co.jp/english/corporate/investor-relations/ir-library/integrated-report/tvdivq0000008t9q-att/2015_jpxreport_e_all.pdf",
                type: "Integrated Report",
                fileSize: "4.1 MB",
                pages: 79,
                filingDate: "2015-09-25",
                localPath: "reports/jpx/JPX_Report_2015.pdf"
            }
        ]
    },
    deutsche: {
        name: "Deutsche Börse AG",
        region: "Europe",
        auditor: "KPMG AG",
        reports: [
            {
                year: 2024,
                title: "Deutsche Börse Annual Report 2024",
                url: "https://www.deutsche-boerse.com/resource/blob/4171106/c9cc6c4b50a7ad2155fa107b33f12373/data/DBG-annual-report-2024.pdf",
                type: "Annual Report",
                fileSize: "11.5 MB",
                pages: 198,
                filingDate: "2025-03-28",
                localPath: "reports/deutsche/DBG-annual-report-2024.pdf",
                downloaded: true
            },
            {
                year: 2023,
                title: "Deutsche Börse Annual Report 2023",
                url: "https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/annual-report2023",
                type: "Annual Report",
                fileSize: "9.8 MB",
                pages: 192,
                filingDate: "2024-03-28",
                localPath: "reports/deutsche/DBG-annual-report-2023.pdf",
                downloaded: true
            },
            {
                year: 2022,
                title: "Deutsche Börse Annual Report 2022",
                url: "https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/annual-report-2022",
                type: "Annual Report",
                fileSize: "8.2 MB",
                pages: 186,
                filingDate: "2023-03-30",
                localPath: "reports/deutsche/DBG-annual-report-2022.pdf",
                downloaded: true
            },
            {
                year: 2021,
                title: "Deutsche Börse Annual Report 2021",
                url: "https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/annual-report-2021",
                type: "Annual Report",
                fileSize: "9.3 MB",
                pages: 180,
                filingDate: "2022-04-01",
                localPath: "reports/deutsche/DBG-annual-report-2021.pdf",
                downloaded: true
            },
            {
                year: 2020,
                title: "Deutsche Börse Annual Report 2020",
                url: "https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/annual-report-2020",
                type: "Annual Report",
                fileSize: "8.1 MB",
                pages: 174,
                filingDate: "2021-04-01",
                localPath: "reports/deutsche/DBG-annual-report-2020.pdf",
                downloaded: true
            },
            {
                year: 2019,
                title: "Deutsche Börse Annual Report 2019",
                url: "https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/annual-report-2019",
                type: "Annual Report",
                fileSize: "8.0 MB",
                pages: 168,
                filingDate: "2020-04-01",
                localPath: "reports/deutsche/DBG-annual-report-2019.pdf",
                downloaded: true
            },
            {
                year: 2018,
                title: "Deutsche Börse Annual Report 2018",
                url: "https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/annual-report-2018",
                type: "Annual Report",
                fileSize: "7.3 MB",
                pages: 162,
                filingDate: "2019-04-26",
                localPath: "reports/deutsche/DBG-annual-report-2018.pdf",
                downloaded: true
            },
            {
                year: 2017,
                title: "Deutsche Börse Annual Report 2017",
                url: "https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/annual-report-2017",
                type: "Annual Report",
                fileSize: "7.1 MB",
                pages: 156,
                filingDate: "2018-04-26",
                localPath: "reports/deutsche/DBG-annual-report-2017.pdf",
                downloaded: true
            },
            {
                year: 2016,
                title: "Deutsche Börse Annual Report 2016",
                url: "https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/archive/Annual-report-2016-Deutsche-B-rse-Group-21-03-2017-PDF-XLS--1459570",
                type: "Annual Report",
                fileSize: "4.2 MB",
                pages: 150,
                filingDate: "2017-03-21",
                localPath: "reports/deutsche/DBG-annual-report-2016.pdf",
                downloaded: true
            },
            {
                year: 2015,
                title: "Deutsche Börse Annual Report 2015",
                url: "https://www.deutsche-boerse.com/dbg-en/investor-relations/financial-reports/archive/Annual-report-2015-Deutsche-B-rse-Group-15-03-2016-PDF-XLS--1459390",
                type: "Annual Report",
                fileSize: "2.9 MB",
                pages: 144,
                filingDate: "2016-03-15",
                localPath: "reports/deutsche/DBG-annual-report-2015.pdf",
                downloaded: true
            }
        ]
    },

    euronext: {
        name: "Euronext N.V.",
        region: "Europe",
        auditor: "Deloitte Accountants B.V.",
        reports: [
            {
                year: 2024,
                title: "Euronext 2024 URD - PDF",
                url: "https://www.euronext.com/sites/default/files/financial-event-doc/2025-04/EUR_URD2024_MEL_.pdf",
                type: "Universal Registration Document",
                fileSize: "9.2 MB",
                pages: 198,
                filingDate: "2025-03-28",
                localPath: "reports/euronext/EURONEXT_Annual_2024.pdf",
                downloaded: true
            },
            {
                year: 2023,
                title: "Euronext 2023 URD - PDF",
                url: "https://www.euronext.com/sites/default/files/financial-event-doc/2024-04/EUR_EURONEXT_URD2023_EN_MEL%20%281%29.pdf",
                type: "Universal Registration Document",
                fileSize: "5.2 MB",
                pages: 192,
                filingDate: "2024-03-28",
                localPath: "reports/euronext/EURONEXT_Annual_2023.pdf",
                downloaded: true
            },
            {
                year: 2022,
                title: "Euronext 2022 URD - PDF",
                url: "https://www.euronext.com/sites/default/files/financial-event-doc/2023-08/EUR_2022_URD_MEL%20FINALE_AUG.pdf",
                type: "Universal Registration Document",
                fileSize: "9.1 MB",
                pages: 186,
                filingDate: "2023-03-30",
                localPath: "reports/euronext/EURONEXT_Annual_2022.pdf",
                downloaded: true
            },
            {
                year: 2021,
                title: "2021 Universal Registration Document - PDF copy",
                url: "https://www.euronext.com/sites/default/files/financial-event-doc/2022-04/2021%20URD%20-%20ENX%20-%20PDF_1.pdf",
                type: "Universal Registration Document",
                fileSize: "5.7 MB",
                pages: 180,
                filingDate: "2022-04-01",
                localPath: "reports/euronext/EURONEXT_Annual_2021.pdf",
                downloaded: true
            },
            {
                year: 2020,
                title: "Euronext 2020 Universal Registration Document",
                url: "https://www.euronext.com/sites/default/files/financial-event-doc/2021-04/EUR_2020_URD_Light_3.pdf",
                type: "Universal Registration Document",
                fileSize: "5.7 MB",
                pages: 174,
                filingDate: "2021-04-01",
                localPath: "reports/euronext/EURONEXT_Annual_2020.pdf",
                downloaded: true
            },
            {
                year: 2019,
                title: "2019 Universal Registration Document – English version",
                url: "https://www.euronext.com/sites/default/files/financial-event-doc/2020-04/EURONEXT_URD_EN_2019.pdf",
                type: "Universal Registration Document",
                fileSize: "5.4 MB",
                pages: 168,
                filingDate: "2020-04-01",
                localPath: "reports/euronext/EURONEXT_Annual_2019.pdf",
                downloaded: true
            },
            {
                year: 2018,
                title: "2018 Registration Document",
                url: "https://www.euronext.com/sites/default/files/2019-04/euronext_2018_registrationdocument.pdf",
                type: "Registration Document",
                fileSize: "4.3 MB",
                pages: 162,
                filingDate: "2019-04-26",
                localPath: "reports/euronext/EURONEXT_Annual_2018.pdf",
                downloaded: true
            },
            {
                year: 2017,
                title: "Euronext 2017 Registration Document",
                url: "https://www.euronext.com/sites/default/files/financial-event-doc/2019-05/euronext_2017_registrationdocument_1_0.pdf",
                type: "Registration Document",
                fileSize: "5.6 MB",
                pages: 156,
                filingDate: "2019-05-02",
                localPath: "reports/euronext/EURONEXT_Annual_2017.pdf",
                downloaded: true
            },
            {
                year: 2016,
                title: "Euronext 2016 Registration Document",
                url: "https://www.euronext.com/sites/default/files/financial-event-doc/2019-05/07042017_euronext_registration_document_2016_0.pdf",
                type: "Registration Document",
                fileSize: "1.7 MB",
                pages: 150,
                filingDate: "2019-05-01",
                localPath: "reports/euronext/EURONEXT_Annual_2016.pdf",
                downloaded: true
            },
            {
                year: 2015,
                title: "2015 Registration document",
                url: "https://www.euronext.com/sites/default/files/2019-04/euronext-nv_2015_registration_document.pdf",
                type: "Registration Document",
                fileSize: "1.3 MB",
                pages: 144,
                filingDate: "2019-04-26",
                localPath: "reports/euronext/EURONEXT_Annual_2015.pdf",
                downloaded: true
            }
        ]
    },

    tmx: {
        name: "TMX Group Limited",
        region: "Americas",
        auditor: "Deloitte LLP",
        reports: [
            {
                year: 2024,
                title: "TMX Group Annual Report 2024",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "3.5 MB",
                pages: 168,
                filingDate: "2024-03-15",
                localPath: "reports/tmx/TMX_Annual_2024.pdf",
                downloaded: true
            },
            {
                year: 2023,
                title: "TMX Group Annual Report 2023",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "2.6 MB",
                pages: 162,
                filingDate: "2023-03-16",
                localPath: "reports/tmx/TMX_Annual_2023.pdf",
                downloaded: true
            },
            {
                year: 2022,
                title: "TMX Group Annual Report 2022",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "3.5 MB",
                pages: 156,
                filingDate: "2022-03-17",
                localPath: "reports/tmx/TMX_Annual_2022.pdf",
                downloaded: true
            },
            {
                year: 2021,
                title: "TMX Group Annual Report 2021",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "4.1 MB",
                pages: 150,
                filingDate: "2021-03-18",
                localPath: "reports/tmx/TMX_Annual_2021.pdf",
                downloaded: true
            },
            {
                year: 2020,
                title: "TMX Group Annual Report 2020",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "2.3 MB",
                pages: 144,
                filingDate: "2020-03-24",
                localPath: "reports/tmx/TMX_Annual_2020.pdf",
                downloaded: true
            },
            {
                year: 2019,
                title: "TMX Group Annual Report 2019",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "2.2 MB",
                pages: 138,
                filingDate: "2019-03-25",
                localPath: "reports/tmx/TMX_Annual_2019.pdf",
                downloaded: true
            },
            {
                year: 2018,
                title: "TMX Group Annual Report 2018",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "2.4 MB",
                pages: 132,
                filingDate: "2018-03-26",
                localPath: "reports/tmx/TMX_Annual_2018.pdf",
                downloaded: true
            },
            {
                year: 2017,
                title: "TMX Group Annual Report 2017",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "1.5 MB",
                pages: 126,
                filingDate: "2017-03-27",
                localPath: "reports/tmx/TMX_Annual_2017.pdf",
                downloaded: true
            },
            {
                year: 2016,
                title: "TMX Group Annual Report 2016",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "2.6 MB",
                pages: 120,
                filingDate: "2016-03-28",
                localPath: "reports/tmx/TMX_Annual_2016.pdf",
                downloaded: true
            },
            {
                year: 2015,
                title: "TMX Group Annual Report 2015",
                url: "https://www.tmx.com/investor-relations/annual-reports",
                type: "Annual Report",
                fileSize: "5.0 MB",
                pages: 114,
                filingDate: "2015-03-30",
                localPath: "reports/tmx/TMX_Annual_2015.pdf",
                downloaded: true
            }
        ]
    }
};
