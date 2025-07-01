// Actual KAM data from your tidied Excel file
const ACTUAL_KAM_DATA = [
  {
    "id": 1,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2017,
    "auditor": "KPMG",
    "kamTitle": "Impairment of the Goodwill",
    "description": "At 31 December 2017, goodwill amounted to EUR 2,770.9 million (previous year: EUR 2,721.1 million), representing 2 per cent of the assets of the Group. Goodwill is subjected to an impairment test at least annually and on an ad hoc basis if necessary. The impairment test involves comparing the carrying amount with the recoverable amount of the cash-generating unit (CGU). The determination of the recoverable amount is based on the value in use or fair value less costs of disposal. The results of t...",
    "auditResponse": "The auditors reviewed the assumptions and methodologies used in the impairment testing process, including the valuation models and inputs. They also evaluated the appropriateness of the discount rates and growth rates used in the calculations. Additionally, the auditors performed sensitivity analyse...",
    "fileName": "Pages from DBG-annual-report-2017.pdf"
  },
  {
    "id": 2,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2017,
    "auditor": "KPMG",
    "kamTitle": "Valuation of Other Intangible Assets",
    "description": "The other intangible assets amounted to EUR 911.2 million (previous year: EUR 859.9 million) at 31 December 2017, representing 0.7% of the Group's assets. These assets are subject to annual impairment tests, and their valuation is highly dependent on assumptions about future cash inflows and defined parameters.",
    "auditResponse": "The auditors assessed the valuation models and the appropriateness of significant assumptions, including the discount rates, by comparing them with market and industry-specific reference values. They also verified the calculation methods and compared expected cash flows with the approved budget plan...",
    "fileName": "Pages from DBG-annual-report-2017.pdf"
  },
  {
    "id": 3,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2017,
    "auditor": "KPMG",
    "kamTitle": "Valuation of Provisions for Tax Risks",
    "description": "The provisions for tax risks amounted to EUR 339.4 million at 31 December 2017. The application of local and international tax regulations and tax relief is complex and associated with risks. The calculation of tax provisions requires the company to exercise judgment in the assessment of tax issues and to make estimates concerning tax risks. The result of these assessments is dependent to a large extent on assumptions concerning the future interpretation of tax situations in the course of tax au...",
    "auditResponse": "With the support of our employees specialising in local and international tax law, we appraised the tax calculation, including the risk assessment, of Deutsche B\u00f6rse AG. Where available, we have also acknowledged the assessment of external experts engaged by the company. We held meetings with the ma...",
    "fileName": "Pages from DBG-annual-report-2017.pdf"
  },
  {
    "id": 4,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2018,
    "auditor": "KPMG",
    "kamTitle": "Impairment of Other Intangible Assets",
    "description": "The other intangible assets amounted to EUR 952.7 million (previous year: EUR 911.2 million) at 31 December 2018, representing 0.6% of the Group's assets. These assets are subject to an annual impairment test, which is highly dependent on assumptions about future cash inflows and defined parameters. The impairment test is critical due to its potential material impact on the financial statements.",
    "auditResponse": "The audit team, supported by valuation experts, assessed the valuation models and the appropriateness of significant assumptions. They compared the assumptions with market and industry-specific reference values, verified the calculation methods for discount rates, and compared expected cash flows wi...",
    "fileName": "Pages from DBG-annual-report-2018.pdf"
  },
  {
    "id": 5,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2018,
    "auditor": "KPMG",
    "kamTitle": "Impairment of the goodwill",
    "description": "At 31 December 2018, goodwill amounted to EUR 2,865.6 million (previous year: EUR 2,770.9 million). Goodwill is subjected to an impairment test by the company at least once a year and also on an ad hoc basis, if appropriate. The carrying amount is compared with the recoverable amount of the cash-generating unit (CGU). Deutsche B\u00f6rse AG determines the recoverable amounts of the cash-generating units either on the basis of the value in use or on the basis of the fair value less costs of disposal. ...",
    "auditResponse": "The audit team focused on the assumptions and methodologies used in the impairment testing of goodwill, including the valuation models and the forecasted cash flows. They performed sensitivity analyses to assess the reasonableness of the assumptions and the impact of potential changes in these assum...",
    "fileName": "Pages from DBG-annual-report-2018.pdf"
  },
  {
    "id": 6,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2018,
    "auditor": "KPMG",
    "kamTitle": "Valuation of Provisions for Tax Risks",
    "description": "The company operates in various jurisdictions with different legal systems, leading to complex applications of local and international tax regulations and tax relief. This complexity introduces significant risks, requiring the company to make judgments and estimates regarding tax risks. The provisions for tax risks amounted to EUR 334.8 million as of 31 December 2018. The assessment of these provisions is highly dependent on assumptions about future tax interpretations and decisions by tax autho...",
    "auditResponse": "The audit confirmed that the company's calculation methods are appropriate and consistent with relevant valuation principles. The underlying assumptions about valuation-relevant parameters were calculated in a balanced manner and are within acceptable ranges. The company occasionally commissions ext...",
    "fileName": "Pages from DBG-annual-report-2018.pdf"
  },
  {
    "id": 7,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2019,
    "auditor": "KPMG",
    "kamTitle": "Impairment of Goodwill",
    "description": "At 31 December 2019, goodwill amounted to EUR 3,470.5 million (previous year: EUR 2,865.6 million), representing 2.5% of the Group's assets. The company performs an impairment test annually and on an ad hoc basis if necessary, comparing the carrying amount with the recoverable amount of the cash-generating unit (CGU). The valuation is highly dependent on assumptions about future cash inflows and defined parameters, which can significantly impact the financial statements.",
    "auditResponse": "With the support of valuation experts, the auditors assessed the valuation models and the appropriateness of significant assumptions. They compared the discount rates with market and industry-specific reference values, verified the calculation methods, and compared expected cash flows with the curre...",
    "fileName": "Pages from DBG-annual-report-2019.pdf"
  },
  {
    "id": 8,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2019,
    "auditor": "KPMG",
    "kamTitle": "Impairment of Other Intangible Assets",
    "description": "At 31 December 2019, other intangible assets amounted to EUR 1,040.9 million (previous year: EUR 952.7 million), representing 0.8% of the Group\u2019s assets. These assets are subject to an annual impairment test, which is highly dependent on assumptions about future cash inflows and defined parameters. The correct determination of any need for impairment is crucial for the financial statements.",
    "auditResponse": "With the support of valuation experts, the auditors assessed the valuation models and the appropriateness of significant assumptions. They compared the assumptions with market and industry-specific reference values, verified the calculation method for discount rates, and compared expected cash flows...",
    "fileName": "Pages from DBG-annual-report-2019.pdf"
  },
  {
    "id": 9,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2019,
    "auditor": "KPMG",
    "kamTitle": "Valuation of Provisions for Tax Risks",
    "description": "The Group operates in a variety of jurisdictions with different legal systems. The provisions for tax risks amounted to \u20ac265.9 million at 31 December 2019. The application of local and international tax regulations and tax relief is complex and associated with risks. The calculation of tax provisions requires the company to exercise judgment in the assessment of tax issues and to make estimates concerning tax risks. The result of these assessments is dependent to a large extent on assumptions co...",
    "auditResponse": "With the support of our employees specialising in local and international tax law, we appraised the tax calculation, including the risk assessment, of Deutsche B\u00f6rse AG. Where available, we have also acknowledged the assessment of external experts engaged by the company. We held meetings with the ma...",
    "fileName": "Pages from DBG-annual-report-2019.pdf"
  },
  {
    "id": 10,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2020,
    "auditor": "KPMG",
    "kamTitle": "Impairment of Other Intangible Assets",
    "description": "At 31 December 2020, other intangible assets amounted to EUR 1,255 million (previous year: EUR 1,041 million), representing 0.8% of the Group\u2019s assets. These assets are subject to an annual impairment test, which is highly dependent on assumptions about future cash inflows and defined parameters. The correct determination of any need for impairment is crucial for the financial statements.",
    "auditResponse": "With the support of valuation experts, the auditors assessed the valuation models and the appropriateness of significant assumptions. They compared the assumptions with market and industry-specific reference values, verified the calculation method for discount rates, and compared expected cash flows...",
    "fileName": "Pages from DBG-annual-report-2020.pdf"
  },
  {
    "id": 11,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2020,
    "auditor": "KPMG",
    "kamTitle": "Impairment Testing of Goodwill",
    "description": "At 31 December 2020, goodwill amounted to EUR 3,958 million (previous year: EUR 3,471 million), representing 2.6 per cent of the Group's assets at 31 December 2019. The company performs an impairment test on goodwill at least annually and on an ad hoc basis if necessary. The impairment test involves comparing the carrying amount with the recoverable amount of the cash-generating unit (CGU), which is determined based on the value in use or fair value less costs of disposal. The results of these v...",
    "auditResponse": "With the support of valuation experts, we assessed the valuation models and the appropriateness of significant assumptions related to valuation parameters. We compared the assumptions used in determining the discount rates with market and industry-specific reference values and verified the calculati...",
    "fileName": "Pages from DBG-annual-report-2020.pdf"
  },
  {
    "id": 12,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2021,
    "auditor": "PwC",
    "kamTitle": "Assessment of Certain Legal Risks",
    "description": "The companies of the Deutsche B\u00f6rse Group are exposed to certain legal risks, including legal disputes involving Clearstream Banking S.A. with the Iranian Central Bank, an action by the insolvency administrator for the assets of AirBerlin PLC i.I., and an investigation relating to securities transactions by market participants beyond the dividend date (cum/ex transactions). The determination of whether a provision should be recognized to cover these risks is highly uncertain.",
    "auditResponse": "As part of our audit, we examined the underlying documents to the above-mentioned legal disputes and proceedings, analyzed the legal assessment of Deutsche B\u00f6rse Group, and assessed the executive directors' estimates with the assistance of our own specialists. We held regular meetings with the Compa...",
    "fileName": "Pages from DBG-annual-report-2021.pdf"
  },
  {
    "id": 13,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2022,
    "auditor": "PwC",
    "kamTitle": "Assessment of Certain Legal Risks",
    "description": "The company is exposed to significant legal risks, including litigation by Clearstream Banking S.A. against the Central Bank of Iran for USD 4.9 billion, a claim by the insolvency administrator of Air Berlin PLC i.I. against Clearstream Banking AG for \u20ac 498 million, and an investigation into cum ex transactions. The assessment of whether and in what amount to recognize provisions for these risks is highly uncertain.",
    "auditResponse": "As part of our audit, we reviewed the underlying documents, considered the legal disputes and proceedings, and followed the company's legal assessments. We assessed the legal representatives' assessments with the help of our own specialists, held regular discussions with the legal departments, and o...",
    "fileName": "Pages from DBG-annual-report-2022.pdf"
  },
  {
    "id": 14,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2022,
    "auditor": "PwC",
    "kamTitle": "Recoverability of goodwill and other intangible assets",
    "description": "The company's consolidated financial statements include significant amounts of goodwill and other intangible assets, totaling \u20ac7,856.3 million (93% of consolidated equity). These assets are tested annually or on an ad hoc basis for impairment. The impairment test involves comparing the carrying amount of cash-generating units (CGUs) with their recoverable amount, which is typically determined based on fair value less costs to sell, using discounted cash flow models. The valuation is highly depen...",
    "auditResponse": "As part of the audit, the methodology for the impairment test was traced. A risk-oriented approach was taken, involving valuation specialists to compare the future cash flows used in the calculation with the Group\u2019s approved medium-term plan. This included analyzing key planning assumptions, compari...",
    "fileName": "Pages from DBG-annual-report-2022.pdf"
  },
  {
    "id": 15,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Accounting for the acquisition of SimCorp A/S",
    "description": "Deutsche B\u00f6rse Aktiengesellschaft acquired the majority of shares in the software service provider SimCorp A/S, Copenhagen, Denmark, through a public takeover bid effective from 29 September 2023. Following further share purchases and the implementation of a squeeze-out under stock corporation law, the company held 100% of the shares in SimCorp as at the balance sheet date. The acquisition was recognised as a business combination in accordance with IFRS 3 using the acquisition method. The purcha...",
    "auditResponse": "We analysed the adjustment of the groups of cash-generating units at whose level goodwill is monitored, which was carried out as part of the SimCorp acquisition. We assessed the disclosures required by IFRS 3. Overall, we were able to satisfy ourselves that the accounting treatment of the business c...",
    "fileName": "Pages from DBG-annual-report-2023.pdf"
  },
  {
    "id": 16,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Assessment of certain legal risks",
    "description": "The company is exposed to certain legal risks, including legal disputes of Clearstream Banking S.A. in connection with the Central Bank of Iran, claims for restitution and damages against the Central Bank of Iran in the amount of USD 4.9 billion (plus interest), and claims by other groups of plaintiffs, including a claim by the insolvency administrator of Air Berlin PLC i.L. against Clearstream Banking AG for payment of around \u20ac498 million and an investigation relating to securities transactions...",
    "auditResponse": "As part of our audit, we inspected the underlying documents relating to the above-mentioned legal disputes and proceedings and analysed the legal assessments of Deutsche B\u00f6rse Group. We held regular discussions with the legal departments of the companies to understand current developments and the re...",
    "fileName": "Pages from DBG-annual-report-2023.pdf"
  },
  {
    "id": 17,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Recoverability of goodwill and other intangible assets",
    "description": "Goodwill and other intangible assets with definite and indefinite useful lives totalling \u20ac 11,248.6 million (116.4 % of Group equity) are reported under the balance sheet item 'Intangible assets'. The other intangible assets relate particularly to stock exchange licences, brand names, and customer relationships. Goodwill and other intangible assets with an indefinite useful life are tested for impairment annually or on an ad hoc basis, while other intangible assets with a definite useful life ar...",
    "auditResponse": "As part of our audit, we first analysed the methodology used to perform the impairment test. In a risk-oriented selection, with the involvement of our valuation specialists, we compared the future cash flows used in the calculation with the Group\u2019s approved medium-term planning and additional planni...",
    "fileName": "Pages from DBG-annual-report-2023.pdf"
  },
  {
    "id": 18,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2024,
    "auditor": "PwC",
    "kamTitle": "Assessment of Legal Risks",
    "description": "The company is exposed to certain legal risks, including legal proceedings by Clearstream Banking S.A. and the insolvency administrator of Air Berlin PLC. These risks are complex and subject to significant uncertainties, potentially impacting the net assets, financial position, and results of operations of the Group.",
    "auditResponse": "We inspected the underlying documents relating to the legal disputes, verified the legal assessments of Deutsche B\u00f6rse Aktiengesellschaft, and held regular discussions with the legal departments. We obtained external legal confirmations and assessed legal opinions from external lawyers.",
    "fileName": "Pages from DBG-annual-report-2024.pdf"
  },
  {
    "id": 19,
    "company": "Deutsche B\u00f6rse AG",
    "year": 2024,
    "auditor": "PwC",
    "kamTitle": "Recoverability of goodwill and other intangible assets",
    "description": "In the company\u2019s consolidated financial statements, goodwill and other intangible assets with a definite and indefinite useful life totaling \u20ac11,323.9 million (105.1% of consolidated equity) are reported under the 'Intangible assets' item. The other intangible assets relate in particular to stock exchange licenses, brand names, and customer relationships. Goodwill and other intangible assets with indefinite useful lives are tested for impairment by the company once a year or as circumstances req...",
    "auditResponse": "As part of our audit, we first verified the methodical approach for conducting the impairment test. In a risk-oriented selection, we involved our valuation specialists and, after comparing the future cash flows used in the calculation with the approved medium-term planning of the group, we assessed ...",
    "fileName": "Pages from DBG-annual-report-2024.pdf"
  },
  {
    "id": 20,
    "company": "Euronext N.V.",
    "year": 2015,
    "auditor": "PwC",
    "kamTitle": "Fair Value Measurement of Equity Investments",
    "description": "Euronext owns a direct interest of 3.26% and an indirect interest of 1.49% in Euroclear plc valued at \u20ac97 million, and a 2.31% interest in LCH.Clearnet Group Limited plc valued at \u20ac18 million. These interests are classified as available-for-sale financial assets with remeasurement to fair value through Other Comprehensive Income. The determination of the fair value involves significant judgment as the shares are not traded on an active market.",
    "auditResponse": "We assessed management\u2019s valuation and challenged the key assumptions involving our valuation specialists. We independently developed expectations for the key assumptions driving management\u2019s analysis, particularly on long-term growth rates, cost of equity, sample of peers used, and discount percent...",
    "fileName": "Pages from EURONEXT_Annual_2015.pdf"
  },
  {
    "id": 21,
    "company": "Euronext N.V.",
    "year": 2015,
    "auditor": "PwC",
    "kamTitle": "New Systems Implementation",
    "description": "As of 1 January 2015, the company implemented a new IT system for market data activities, followed by the implementation of a new ERP system serving as the key financial application as of 1 August 2015. At the same time, the company revisited the related parts of its internal control framework. Segregation of duties (SoD) were not fully implemented by year-end, and management put in place compensating controls to remediate the related risks.",
    "auditResponse": "We obtained an understanding of IT general controls to design appropriate audit procedures. We tested the relevant IT general controls and the data migration. We expanded our audit procedures to specifically address the risks relating to the SoD issues by testing these compensating controls and perf...",
    "fileName": "Pages from EURONEXT_Annual_2015.pdf"
  },
  {
    "id": 22,
    "company": "Euronext N.V.",
    "year": 2015,
    "auditor": "PwC",
    "kamTitle": "Restructuring Provision",
    "description": "A provision of \u20ac22 million has been recognized as of 31 December 2015 in relation to two French restructuring plans. Both plans are voluntary and were agreed by the Company with the relevant labor unions in November 2015 and January 2016. The restructuring provisions are material to the financial statements and require significant management judgment.",
    "auditResponse": "Our audit procedures included challenging and testing the assumptions made by management concerning their calculation of the restructuring provision. We tested the assumptions based on supporting documentation such as approved restructuring plans, communication to the Works Council and personnel, an...",
    "fileName": "Pages from EURONEXT_Annual_2015.pdf"
  },
  {
    "id": 23,
    "company": "Euronext N.V.",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Completeness and accuracy of revenue",
    "description": "Revenue of \u20ac496 million consists of Listing, Trading, Market data, Post trade, and Market Solutions and other revenue, generally characterized by high volumes of transactions and relatively low value per transaction. The invoicing and recognition of revenue is highly dependent on automated systems and processes.",
    "auditResponse": "We obtained an understanding of IT general controls and automated controls, tested these controls, specifically addressed segregation of duties and potential conflicts, requested external confirmations to substantiate the revenue recognized, performed tests of details on selected revenue transaction...",
    "fileName": "Pages from EURONEXT_Annual_2016.pdf"
  },
  {
    "id": 24,
    "company": "Euronext N.V.",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Implications of the move of the UK technology operations from Belfast to Porto",
    "description": "Euronext is in the process of moving its UK technology operations from Belfast to Porto. During 2016, charges of \u20ac2.2 million have been recorded in the income statement and a provision of \u20ac1.2 million has been recognized as at 31 December 2016 in relation to the Belfast restructuring plan.",
    "auditResponse": "We challenged the assumptions concerning the identification and calculation of restructuring charges, potential impairment of assets, and tax implications. We tested the assumptions through supporting documentation such as approved restructuring plans, communication to personnel, and reconciling wit...",
    "fileName": "Pages from EURONEXT_Annual_2016.pdf"
  },
  {
    "id": 25,
    "company": "Euronext N.V.",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Valuation of available-for-sale financial assets",
    "description": "As of 31 December 2016, Euronext owns both a direct and an indirect interest in Euroclear Plc and LCH.Clearnet Group Limited Plc. The determination of the fair value involves significant management judgment and assumptions as the shares are not traded on an active market.",
    "auditResponse": "We assessed management\u2019s valuation, challenged the key assumptions, independently developed expectations for the key assumptions, compared the outcome of our independently developed expectations with management\u2019s key assumptions, and concluded management\u2019s valuation to be acceptable.",
    "fileName": "Pages from EURONEXT_Annual_2016.pdf"
  },
  {
    "id": 26,
    "company": "Euronext N.V.",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for the acquisition of businesses",
    "description": "During 2017 Euronext acquired majority interests in a number of companies. Total considerations were EUR 176 million, of which EUR 19 million is deferred or contingent. The acquisitions have been included in the consolidated financial position and results of Euronext from the moment control was obtained. Based on the purchase price allocations performed, with the help of external valuators, separately identifiable intangible assets of \u20ac 67 million and goodwill of \u20ac 122 million have been recogniz...",
    "auditResponse": "We gained an understanding of the material business acquisitions and assessed whether the correct accounting treatment has been applied. Furthermore, we tested the considerations paid and the identification and valuation of the identifiable tangible and intangible assets acquired, as well as the lia...",
    "fileName": "Pages from EURONEXT_Annual_2017.pdf"
  },
  {
    "id": 27,
    "company": "Euronext N.V.",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and continuity of the information technology and systems",
    "description": "A proper IT infrastructure ensures the reliability and continuity of Euronext\u2019s business processes and financial reporting. Euronext continuously invests in improving its IT environment and systems to meet new regulatory requirements under MIFID2 and to develop a new core trading platform. The role of external reports and the increased granularity of financial and non-financial data are important to stakeholders and supervisors, requiring high-quality data and an adequate IT environment.",
    "auditResponse": "We tested the IT general controls at Euronext related to logical access and change management and application controls embedded in the automated data processing systems. We also assessed the reliability and continuity of the IT environment and the possible impact of changes during the year resulting...",
    "fileName": "Pages from EURONEXT_Annual_2017.pdf"
  },
  {
    "id": 28,
    "company": "Euronext N.V.",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Valuation of available for sale financial assets",
    "description": "Euronext holds a direct and indirect minority interest in Euroclear Plc. This interest is classified as available for sale with re-measurement to fair value through the other comprehensive income component of equity. Euroclear is a non-listed company, and Euronext applies internal models to measure the fair value of its interests. During 2017, the company enhanced its valuation model framework with techniques driven by return on equity and expected dividend growth rates, regression approaches, a...",
    "auditResponse": "Our audit procedures included assessing the methodology and appropriateness of the valuation models against generally accepted market practice and inputs used to value the available for sale financial assets. We used our valuation specialists to independently assess the valuations performed and eval...",
    "fileName": "Pages from EURONEXT_Annual_2017.pdf"
  },
  {
    "id": 29,
    "company": "Euronext N.V.",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for the Acquisition of Businesses",
    "description": "During 2018, Euronext acquired all shares of the Irish Stock Exchange plc and major stakes in Commcise Ltd and InsiderLog AB. Total considerations were EUR 215 million, of which EUR 4 million is a contingent earn-out payment. The acquisitions have been included in the consolidated financial position and results of Euronext from the moment control was obtained. Based on the purchase price allocations performed, with the support of valuation experts, separately identifiable intangible assets of \u20ac ...",
    "auditResponse": "We gained an understanding of the material business acquisitions and made an assessment of the process that management has undertaken to determine the allocation of the purchase price, including but not limited to understanding the scope of work, assessing the qualifications and competence of the va...",
    "fileName": "Pages from EURONEXT_Annual_2018.pdf"
  },
  {
    "id": 30,
    "company": "Euronext N.V.",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Fair Value Measurement of Financial Investments",
    "description": "Euronext holds a direct and an indirect minority interest in Euroclear plc. This interest is classified as a financial asset at fair value through other comprehensive income. As Euroclear is a non-listed company, Euronext applies an internally developed model to estimate the fair value, which since early 2017 is based on valuation techniques that are driven by return on equity and dividend growth rates of comparable regulated entities and regression approaches and trading multiples as control me...",
    "auditResponse": "Our audit procedures comprised, among others, an assessment of the methodology and the appropriateness of the valuation model against generally accepted market practice and inputs used to value the investments. Further, we used our valuation specialists to independently assess the valuation performe...",
    "fileName": "Pages from EURONEXT_Annual_2018.pdf"
  },
  {
    "id": 31,
    "company": "Euronext N.V.",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Implementation of IFRS 15 Revenue Recognition",
    "description": "On 1 January 2018, a new accounting standard for revenue recognition (IFRS 15) became effective. It requires the recognition of fees for initial and ongoing listing services over time, whereas previously those fees were recognized at a point in time. Euronext applied the modified retrospective approach under IFRS 15 and adjusted opening equity by EUR 50 million (net of tax) and included a transitional disclosure on the first-time adoption as part of note 3 'Changes in accounting policies and dis...",
    "auditResponse": "As IFRS 15 was adopted at the start of the year, we performed audit procedures on the opening balances to gain assurance on the transition from the previous standard. This included evaluating the accounting interpretations for compliance with IFRS 15 and testing the adjustments and disclosures made ...",
    "fileName": "Pages from EURONEXT_Annual_2018.pdf"
  },
  {
    "id": 32,
    "company": "Euronext N.V.",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and Continuity of the Information Technology and Systems and IT Transformation",
    "description": "A proper IT infrastructure ensures the reliability and continuity of Euronext\u2019s business processes and financial reporting. Euronext continuously makes investments to further improve its IT environment and IT systems. As described in the other information under the section operational risk, Euronext upgraded its core trading platform with a new enhanced, multi-market system OPTIQ. In April and June 2018, the OPTIQ trading engine went live for fixed income and cash markets. The role of external r...",
    "auditResponse": "We tested the IT general controls at Euronext related to logical access and change management and application controls embedded in the automated data processing systems, where we relied upon for financial reporting. In some areas, we performed additional procedures on access management for the relat...",
    "fileName": "Pages from EURONEXT_Annual_2018.pdf"
  },
  {
    "id": 33,
    "company": "Euronext N.V.",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for the Acquisition of Oslo B\u00f8rs VPS",
    "description": "In 2019, Euronext acquired all shares of Oslo B\u00f8rs VPS for \u20ac693 million. The acquisition involved significant judgments in identifying intangible assets and allocating the purchase price, leading to the recognition of \u20ac252 million in intangible assets and \u20ac503 million in goodwill. The complexity and size of these amounts make this a key audit matter.",
    "auditResponse": "The audit team gained an understanding of the acquisition process, assessed the qualifications of external valuation experts, and tested the identification and valuation of tangible and intangible assets. They also evaluated the fair value measurements and assumptions used, and benchmarked key data ...",
    "fileName": "Pages from EURONEXT_Annual_2019.pdf"
  },
  {
    "id": 34,
    "company": "Euronext N.V.",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext holds a minority interest in Euroclear S.A./N.V., classified as a financial asset at fair value through other comprehensive income. The fair value is estimated using an internally developed model based on a weighted approach involving return on equity, dividend growth rate, and cost of capital. In 2019, the fair value increased by \u20ac9 million to \u20ac197 million. The use of different valuation techniques and assumptions could significantly affect the fair value estimate.",
    "auditResponse": "The audit team assessed the methodology and appropriateness of the valuation model, tested key inputs, and used their own valuation specialists to independently evaluate the valuation. The audit concluded that the valuation techniques and key inputs were reasonable, and the disclosures were in line ...",
    "fileName": "Pages from EURONEXT_Annual_2019.pdf"
  },
  {
    "id": 35,
    "company": "Euronext N.V.",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and Continuity of the IT Environment",
    "description": "Euronext's activities and financial reporting are highly dependent on the reliability and continuity of its IT environment. Effective general IT controls are crucial for ensuring the integrity and continuity of IT systems and the operating effectiveness of automated controls. The IT environment is constantly changing due to process improvement and digitization, posing a risk to the operation of generic IT controls.",
    "auditResponse": "With the help of IT audit specialists, the audit team assessed the reliability and continuity of the IT environment, performed walkthrough procedures on IT processes, and tested the operating effectiveness of general IT controls. Additional substantive procedures were performed on access management,...",
    "fileName": "Pages from EURONEXT_Annual_2019.pdf"
  },
  {
    "id": 36,
    "company": "Euronext N.V.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Acquired Businesses",
    "description": "During 2020, Euronext acquired all shares of VP Securities AS and a 60% interest in Nord Pool AS. The acquisitions have been included in the consolidated financial position and results of Euronext from the moment control was obtained. Accounting for business combinations involves a number of judgments, such as the identification of intangible assets, the choice of valuation techniques and underlying assumptions, as well as the allocation to cash-generating units.",
    "auditResponse": "We gained an understanding of the material business acquisitions and made an assessment of the process that management has undertaken to determine the allocation of the purchase price. We tested the considerations paid and the identification and valuation of the identifiable tangible and intangible ...",
    "fileName": "Pages from EURONEXT_Annual_2020.pdf"
  },
  {
    "id": 37,
    "company": "Euronext N.V.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext holds a direct interest in Euroclear S.A. and an indirect minority interest in Euroclear S.A. through Sicovam Holding S.A. This investment is classified as a financial asset at fair value through other comprehensive income. Since 2018, a weighted approach is applied which is based on the return on equity, expected dividend growth rate (non-observable parameters) and cost of capital of comparable regulated entities and market observable transactions less a discount for illiquidity. In 20...",
    "auditResponse": "Our audit procedures comprised, among others, an evaluation of the methodology and the appropriateness of the valuation model for consistency and an assessment against generally accepted market practice and inputs used to value the investments. We used our valuation specialists to independently eval...",
    "fileName": "Pages from EURONEXT_Annual_2020.pdf"
  },
  {
    "id": 38,
    "company": "Euronext N.V.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability, Availability and Continuity of the IT Environment",
    "description": "The activities and financial reporting of Euronext N.V. are highly dependent on the reliability and continuity of the IT environment. Effective general IT controls with respect to change management, logical access, infrastructure and operations, secure to a large extent the integrity and continuity of the IT systems as well as the operating effectiveness of the automated controls. The IT environment and the IT organization of Euronext N.V. are constantly changing in the context of process improv...",
    "auditResponse": "With the assistance of our IT audit specialists, we assessed the reliability, availability, and continuity of the IT environment to the extent necessary for the scope of our audit of the financial statements. We evaluated the design and implementation of the IT processes and tested the operating eff...",
    "fileName": "Pages from EURONEXT_Annual_2020.pdf"
  },
  {
    "id": 39,
    "company": "Euronext N.V.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "The Impact of the COVID-19 Pandemic",
    "description": "The developments around the COVID-19 pandemic have a profound impact on society and the economy, affecting the operational and financial performance of organizations and the assessment of the ability to continue as a going concern. The situation continues to evolve, giving rise to inherent uncertainty.",
    "auditResponse": "We designed and performed specific audit procedures responsive to the potential impact. For internal controls testing, we inspected the monitoring conducted by the control functions of Euronext and, through data analyses, performed incremental procedures especially on outgoing payments. We evaluated...",
    "fileName": "Pages from EURONEXT_Annual_2020.pdf"
  },
  {
    "id": 40,
    "company": "Euronext N.V.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Acquired Businesses",
    "description": "During 2021, Euronext N.V. acquired all shares of London Stock Exchange Group Holdings Italia S.p.A. (Borsa Italiana Group). Considerations paid amounted to EUR 4,447 million. The acquisition has been included in the consolidated financial position and results of Euronext N.V. from 29 April 2021, the moment control was obtained. Based on the purchase price allocations performed by management, with the support of external valuation experts, separately identifiable intangible assets of \u20ac1,844 mill...",
    "auditResponse": "We gained an understanding of the business acquisition and made an assessment of the process that management has undertaken to determine the allocation of the purchase price, including understanding the scope of work, assessing the qualifications and competence of the external valuation experts and ...",
    "fileName": "Pages from EURONEXT_Annual_2021.pdf"
  },
  {
    "id": 41,
    "company": "Euronext N.V.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Clearing Assets, Liabilities and Revenues",
    "description": "As part of the acquisitions in Italy, Euronext N.V. has become owner of the central counter party clearing activities of Cassa di Compensazione e Garanzia S.p.A. (CC&G), based in Rome. These activities result in short-term assets and liabilities of in total \u20ac137.7 billion at 31 December 2021, which comprise clearing member receivables and payables, as well as debt instruments and repurchase agreements. Most of these balances are accounted for at amortized costs, while the investments of particip...",
    "auditResponse": "Our audit procedures included, amongst others, evaluating the appropriateness of Euronext N.V.'s accounting policies regarding the clearing activities in accordance with IFRS 9 'Financial Instruments' and the offsetting requirements in IAS 32. Also, we gained an understanding of the clearing transac...",
    "fileName": "Pages from EURONEXT_Annual_2021.pdf"
  },
  {
    "id": 42,
    "company": "Euronext N.V.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext N.V. holds a direct and an indirect minority interest in Euroclear S.A. This investment is classified as a financial asset at fair value through other comprehensive income. Since 2018, a weighted approach is applied which is based on the return on equity, expected dividend growth rate (non-observable parameters), and cost of capital of comparable regulated entities and market observable transactions less a discount for illiquidity. In 2021, Euronext N.V. revalued its interest by \u20ac3 mill...",
    "auditResponse": "Our audit procedures comprised, amongst others, evaluating the appropriateness of Euronext N.V.'s accounting policies related to the fair valuation of an interest in a non-listed company according to IFRS 9 'Financial Instruments' and IFRS 13 'Fair Value Measurement'. They included an evaluation of ...",
    "fileName": "Pages from EURONEXT_Annual_2021.pdf"
  },
  {
    "id": 43,
    "company": "Euronext N.V.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and Continuity of the IT Environment",
    "description": "The activities and financial reporting of Euronext N.V. are highly dependent on the reliability and continuity of the IT environment. Effective general IT controls with respect to change management, logical access, infrastructure, and operations support the integrity and continuity of the IT systems as well as the operating effectiveness of the automated controls. As described in the risk management section 2 in the universal registration document, the IT environment and the IT organization of E...",
    "auditResponse": "IT audit specialists are an integral part of the engagement team and assess the reliability and continuity of the IT environment to the extent necessary for the scope of our audit of the financial statements. In this context, we evaluated the design of the IT processes and tested the operating effec...",
    "fileName": "Pages from EURONEXT_Annual_2021.pdf"
  },
  {
    "id": 44,
    "company": "Euronext N.V.",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Impairment of Goodwill and Other Purchased Intangible Assets",
    "description": "Euronext accounts for a significant amount of goodwill and customer relationships on its consolidated balance sheet. As of 31 December 2022, goodwill amounts to \u20ac4 billion and other intangible assets have a value of \u20ac2.2 billion, mostly consisting of acquired customer relationships. Management is required to perform annually an impairment test of goodwill. Where indicators of impairment of other intangible assets are identified, a detailed impairment test is performed. These impairment tests inv...",
    "auditResponse": "Our audit procedures included evaluating the appropriateness of Euronext\u2019s accounting policies related to the impairment testing in accordance with IAS 36, 'Impairment of assets'. We obtained an understanding of the impairment process, evaluated the design of internal controls in respect of impairme...",
    "fileName": "Pages from EURONEXT_Annual_2022.pdf"
  },
  {
    "id": 45,
    "company": "Euronext N.V.",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext holds a direct and an indirect minority interest in Euroclear S.A. This investment is classified as a financial asset at fair value through other comprehensive income. As Euroclear is a non-listed company, Euronext developed an internal model to estimate the fair value, which is based on the return on equity, expected dividend growth rate, and cost of capital of comparable regulated entities and market observable transactions less a discount for illiquidity. In 2022, Euronext revalued i...",
    "auditResponse": "Our audit procedures included evaluating the appropriateness of Euronext\u2019s accounting policies related to the fair valuation of an interest in a non-listed company according to IFRS 9, 'Financial Instruments' and IFRS 13, 'Fair value measurement'. We evaluated the methodology and the appropriateness...",
    "fileName": "Pages from EURONEXT_Annual_2022.pdf"
  },
  {
    "id": 46,
    "company": "Euronext N.V.",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Recognition of Internally Developed Software",
    "description": "The capitalization of expenses for internally developed software involves judgement in assessing the capitalization against the recognition criteria set out in IAS 38, 'Intangible assets'. Euronext\u2019s accounting policy for capitalizing software development costs is disclosed in section 3, under H). (ii) 'Internally generated intangible assets'. The risk exists that expenses related to internally developed software are capitalized inappropriately.",
    "auditResponse": "We evaluated Euronext\u2019s accounting policies related to the recognition of internally developed software in accordance with IAS 38, and whether assumptions and the criteria applied for capitalization are appropriate and have been applied consistently. We obtained an understanding of the recognition p...",
    "fileName": "Pages from EURONEXT_Annual_2022.pdf"
  },
  {
    "id": 47,
    "company": "Euronext N.V.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Impairment of goodwill and other purchased intangible assets",
    "description": "Euronext accounts for a significant amount of goodwill and customer relationships on its consolidated balance sheet. As of 31 December 2023, goodwill amounts to \u20ac4 billion and other purchased intangible assets have a value of \u20ac2 billion, mostly consisting of acquired customer relations with a finite useful life. Management performs an annual impairment test of goodwill and a detailed impairment test for other purchased intangible assets when indicators of impairment are identified. These impairm...",
    "auditResponse": "Our audit procedures included evaluating the appropriateness of Euronext's accounting policies related to the impairment testing in accordance with IAS 36 'Impairment of assets'. We obtained an understanding of the impairment process, evaluated the design of internal controls, and adopted a substant...",
    "fileName": "Pages from EURONEXT_Annual_2023.pdf"
  },
  {
    "id": 48,
    "company": "Euronext N.V.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of financial assets at fair value through other comprehensive income",
    "description": "Euronext holds a direct and indirect minority interest in Euroclear S.A., which is classified as a financial asset at fair value through other comprehensive income. Euroclear is a non-listed company, and Euronext developed an internal model to estimate the fair value. In 2023, Euronext revalued its total interest by \u20ac12 million, increasing the fair value to \u20ac261 million. The determination of the fair value involves significant management judgment and assumptions, particularly for unobservable in...",
    "auditResponse": "Our audit procedures included evaluating the appropriateness of Euronext's accounting policies related to the fair valuation of an interest in a non-listed company according to IFRS 9 'Financial Instruments' and IFRS 13 'Fair Value Measurement'. We evaluated the methodology and the appropriateness o...",
    "fileName": "Pages from EURONEXT_Annual_2023.pdf"
  },
  {
    "id": 49,
    "company": "Euronext N.V.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Recognition of internally developed software",
    "description": "The capitalization of expenses for internally developed software involves judgement in assessing the capitalization against the recognition criteria set out in IAS 38 'Intangible assets'. As of 31 December 2023, internally developed software capitalization amounts to \u20ac167 million. This includes investments related to the ongoing implementation of the trading platform Optiq at Borsa Italiana and the expansion of clearing activities to all Euronext markets. The recognition of internally developed ...",
    "auditResponse": "We evaluated Euronext's accounting policies related to the recognition of internally developed software in accordance with IAS 38. We obtained an understanding of the recognition process, evaluated the design and implementation of internal controls, and adopted a substantive audit approach. We perfo...",
    "fileName": "Pages from EURONEXT_Annual_2023.pdf"
  },
  {
    "id": 50,
    "company": "Euronext N.V.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and continuity of the IT environment",
    "description": "Euronext's activities and financial reporting are highly dependent on the reliability and continuity of the IT environment. Effective general IT controls support the integrity and continuity of electronic data processing and the operating effectiveness of automated controls. There is a risk that general IT control measures may not always operate as intended, leading to ineffective internal controls.",
    "auditResponse": "IT audit specialists assessed the reliability and continuity of the IT environment. We evaluated the design of IT processes, tested the operating effectiveness of general IT controls, and performed procedures on access management, cyber security, security event monitoring, and segregation of duties....",
    "fileName": "Pages from EURONEXT_Annual_2023.pdf"
  },
  {
    "id": 51,
    "company": "Euronext N.V.",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Identity access management and change management",
    "description": "Euronext is highly dependent on its IT environment for the continuity of its operations. Inappropriate access or changes to an application or supporting infrastructure could compromise the continuity of Euronext's operations and the reliability of financial data.",
    "auditResponse": "Our audit approach relies to a large extent on automated controls. We tested the design, implementation, and, where appropriate, operating effectiveness of the general IT controls (GITC) and IT application controls (ITAC) related to identity access management and change management. Our tests provide...",
    "fileName": "Pages from EURONEXT_Annual_2024.pdf"
  },
  {
    "id": 52,
    "company": "Euronext N.V.",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext directly and indirectly owns Euroclear S.A., a non-listed company. Euronext uses an internal valuation model to estimate the fair value of this investment, which is recorded through other comprehensive income. The valuation model includes judgments and estimates such as the weighted approach and expected dividend growth rate, requiring significant auditor's attention.",
    "auditResponse": "The audit team performed substantive audit procedures, including assessing the reasonableness of input parameters in the model, involving a KPMG valuation specialist to evaluate the valuation methodologies and assumptions, calculating an independent expectation of the fair value, and assessing the a...",
    "fileName": "Pages from EURONEXT_Annual_2024.pdf"
  },
  {
    "id": 53,
    "company": "Euronext N.V.",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Risk of impairment of goodwill and other purchased intangible assets",
    "description": "Euronext recognised a significant amount of goodwill and customer relations. The amounts recognised, the assumptions and sensitivities used to assess the recoverable amount are disclosed in note 18 of the consolidated financial statements. A potential risk of impairment exists, to the extent future developments negatively deviate from the assumptions applied during the acquisition of the group entities.",
    "auditResponse": "The auditors inspected relevant documents to understand management's assessment of the potential impact of climate-related risks and opportunities on the company's annual report and financial statements. They read minutes of the meetings of the Managing Board and Supervisory Board, and evaluated cli...",
    "fileName": "Pages from EURONEXT_Annual_2024.pdf"
  },
  {
    "id": 54,
    "company": "HKEX",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2016, the Group has goodwill of $13,167 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively \u201cLME Group\u201d) in 2012. The goodwill was allocated to groups of Cash Generating Units (\u201cCGUs\u201d) within the \u201cCommodities\u201d operating segment ($10,310 million) and \u201cClearing\u201d operating segment ($2,857 million). A new CGU (\u2018China commodities CGU\u2019) was included in the assessment this year. Significant judgement was involved in the key assumptions under...",
    "auditResponse": "Our audit procedures included testing management\u2019s key controls on goodwill impairment assessment, assessing the methodology used to estimate the value in use of the respective groups of CGUs, evaluating the reasonableness of the WACCs and growth rates, comparing management\u2019s assumptions to independ...",
    "fileName": "Pages from HKEX_Annual_2016.pdf"
  },
  {
    "id": 55,
    "company": "HKEX",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Valuation, existence, accuracy and presentation of certain financial assets and liabilities",
    "description": "The majority of the Group\u2019s financial assets and financial liabilities are classified as level 2. As at 31 December 2016, the Group\u2019s financial assets and liabilities classified as level 2 include debt securities ($301 million), collective investment schemes ($2,886 million), and base metals derivatives contracts cleared through LME Clear ($61,618 million for both assets and liabilities). Our audit focus was on the valuation and existence of debt securities and collective investment schemes, and...",
    "auditResponse": "Our audit procedures included focusing on the valuation and existence of debt securities and collective investment schemes due to the size of these balances and the judgement involved in selecting the appropriate pricing sources. We also focused on the accuracy and presentation of net derivative bal...",
    "fileName": "Pages from HKEX_Annual_2016.pdf"
  },
  {
    "id": 56,
    "company": "HKEX",
    "year": 2017,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2017, the Group has goodwill of HK$13,277 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively \u201cLME Group\u201d) in 2012. Goodwill was allocated to groups of Cash Generating Units (CGUs) within the \u201cCommodities\u201d segment, HK$10,396 million, and the \u201cClearing\u201d segment, HK$2,881 million and is monitored by management at the operating segment level. Management has performed an impairment assessment over the goodwill allocated to the Commodities...",
    "auditResponse": "Our audit procedures included testing management\u2019s controls over the goodwill impairment assessment, assessing the discounted cash flow model used by management, evaluating the reasonableness of management\u2019s key assumptions, performing independent sensitivity analyses, and reviewing the appropriaten...",
    "fileName": "Pages from HKEX_Annual_2017.pdf"
  },
  {
    "id": 57,
    "company": "HKEX",
    "year": 2017,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over financial accounting and reporting",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing and settlement fees generated from the transactions processed are the key drivers of the Group\u2019s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "1. Assessed the IT control environment, examined the IT governance framework and tested the IT general controls of the key IT systems that support the revenue recognition and financial reporting processes. 2. Tested the identified automated application controls, including testing of system logical a...",
    "fileName": "Pages from HKEX_Annual_2017.pdf"
  },
  {
    "id": 58,
    "company": "HKEX",
    "year": 2018,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As of 31 December 2018, the Group has goodwill of HK$13,298 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively \u201cLME Group\u201d) in 2012. Goodwill was allocated to groups of Cash Generating Units (\u201cCGUs\u201d) within the \u201cCommodities\u201d segment, HK$10,412 million, and the \u201cClearing\u201d segment, HK$2,886 million, and is monitored by management at the operating segment level. Management has performed an impairment assessment over the goodwill allocated to the Commodit...",
    "auditResponse": "Our audit procedures included assessing the discounted cash flow model used by management to estimate the value-in-use of the respective groups of CGUs, assessing the reasonableness of the WACCs used and the terminal growth rates applied, comparing the resulting value-in-use of each group of CGUs to...",
    "fileName": "Pages from HKEX_Annual_2018.pdf"
  },
  {
    "id": 59,
    "company": "HKEX",
    "year": 2018,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over financial accounting and reporting",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing and settlement fees generated from the transactions processed are the key drivers of the Group\u2019s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures over the relevant IT systems and related controls included assessing the IT control environment, examining the IT governance framework, testing the IT general controls of the key IT systems that support the revenue recognition and financial reporting processes, testing the ident...",
    "fileName": "Pages from HKEX_Annual_2018.pdf"
  },
  {
    "id": 60,
    "company": "HKEX",
    "year": 2019,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2019, the Group has goodwill of HK$13,233 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively \u201cLME Group\u201d) in 2012. Goodwill was allocated to groups of Cash Generating Units (\u201cCGUs\u201d) within the \u201cCommodities\u201d segment, HK$10,361 million, and the \u201cPost Trade\u201d segment, HK$2,872 million. Management has performed an impairment assessment over the goodwill allocated to the Commodities and Post Trade segments at the operating segment level.",
    "auditResponse": "Our audit procedures included testing management\u2019s key controls over the goodwill impairment assessment, assessing the discounted cash flow model used by management, evaluating the reasonableness of management\u2019s key assumptions, obtaining and evaluating management\u2019s sensitivity analyses, and reviewi...",
    "fileName": "Pages from HKEX_Annual_2019.pdf"
  },
  {
    "id": 61,
    "company": "HKEX",
    "year": 2019,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over financial accounting and reporting",
    "description": "The Group operates securities and derivatives trading, clearing, and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing, and settlement fees generated from the transactions processed are the key drivers of the Group\u2019s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures over the relevant IT systems and related controls included assessing the IT control environment, examining the IT governance framework, testing IT general controls, testing identified automated application controls, placing reliance on the work of the internal audit function, an...",
    "fileName": "Pages from HKEX_Annual_2019.pdf"
  },
  {
    "id": 62,
    "company": "HKEX",
    "year": 2020,
    "auditor": "PwC",
    "kamTitle": "Goodwill Impairment Assessment",
    "description": "As at 31 December 2020, the Group has goodwill of HK$13,168 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively \u201cLME Group\u201d) in 2012. Goodwill was allocated to groups of Cash Generating Units (\u201cCGUs\u201d) within the \u201cCommodities\u201d segment, HK$10,310 million, and the \u201cPost Trade\u201d segment, HK$2,858 million and is monitored by management at the operating segment level. Management has performed an impairment assessment over the goodwill allocated to the Commodi...",
    "auditResponse": "Our audit procedures included: 1) Assessing the discounted cash flow model used by management to estimate the value-in-use of the respective groups of CGUs within the Commodities and Post Trade segments; 2) Comparing the resulting value-in-use of each group of CGUs to their respective book values; 3...",
    "fileName": "Pages from HKEX_Annual_2020.pdf"
  },
  {
    "id": 63,
    "company": "HKEX",
    "year": 2020,
    "auditor": "PwC",
    "kamTitle": "IT Systems and Controls over Financial Accounting and Reporting",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing and settlement fees generated from the transactions processed are the key drivers of the Group\u2019s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures included: 1) Assessing the IT control environment, examining the IT governance framework, and testing the IT general controls of the key IT systems that support the revenue recognition and financial reporting processes; 2) Testing the identified automated application controls cr...",
    "fileName": "Pages from HKEX_Annual_2020.pdf"
  },
  {
    "id": 64,
    "company": "HKEX",
    "year": 2021,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2021, the Group has goodwill of HK$13,241 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively \u201cLME Group\u201d) in 2012. Goodwill was allocated to groups of Cash Generating Units (\u201cCGUs\u201d) within the \u201cCommodities\u201d segment, HK$10,368 million, and the \u201cPost Trade\u201d segment, HK$2,873 million and is monitored by management at the operating segment level. Management has performed an impairment assessment over the goodwill allocated to the Commodi...",
    "auditResponse": "Our audit procedures included: 1) Assessing the discounted cash flow model used by management to estimate the value-in-use of the respective groups of CGUs within the Commodities and Post Trade segments; 2) Assessing the reasonableness of the WACCs used and the terminal growth rates applied to the p...",
    "fileName": "Pages from HKEX_Annual_2021.pdf"
  },
  {
    "id": 65,
    "company": "HKEX",
    "year": 2021,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over financial accounting and reporting",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing and settlement fees generated from the transactions processed are the key drivers of the Group\u2019s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures included: 1) Assessing the IT control environment, examining the IT governance framework, and testing the IT general controls of the key IT systems that support the revenue recognition and financial reporting processes; 2) Testing the identified automated application controls, w...",
    "fileName": "Pages from HKEX_Annual_2021.pdf"
  },
  {
    "id": 66,
    "company": "HKEX",
    "year": 2022,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2022, the Group has goodwill of HK$13,367 million arising from various acquisitions. Goodwill of HK$13,256 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively the \u201cLME Group\u201d) in 2012 was allocated to Cash Generating Units (\u201cCGUs\u201d) for the \u201cCommodities\u201d segment (HK$10,379 million), and the \u201cPost Trade\u201d segment (HK$2,877 million) respectively. Goodwill with an indefinite useful life is subject to impairment assessments annually and whe...",
    "auditResponse": "Our procedures to evaluate the Group\u2019s goodwill impairment assessments included: 1) Understanding of the Group\u2019s internal controls and management\u2019s process for goodwill impairment assessment and assessing the inherent risk of material misstatement. 2) Assessing the appropriateness of the discounted ...",
    "fileName": "Pages from HKEX_Annual_2022.pdf"
  },
  {
    "id": 67,
    "company": "HKEX",
    "year": 2022,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over revenue and financial accounting and reporting processes",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of transactions and market data. Trading, clearing and settlement fee revenue generated from these transactions comprise the majority of the Group\u2019s revenue of HK$16,934 million. The completeness and accuracy of the fee revenue recognised relies heavily on the Information Technology (\u201cIT\u201d) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures over the key systems and related controls included: 1) Assessing the control environment, including the management over the data capture and processing of reporting fee revenue. 2) Testing relevant automated application controls over the capture, processing and reporting of tran...",
    "fileName": "Pages from HKEX_Annual_2022.pdf"
  },
  {
    "id": 68,
    "company": "HKEX",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2023, the Group has goodwill of HK$13,371 million arising from various acquisitions. Goodwill of HK$13,262 million arises from the acquisition of LME Holdings Limited and its subsidiaries (collectively referred to as the 'LME Group'). This goodwill is attributable to the Cash Generating Unit (CGU) for the 'Commodities' segment. The nature of this key audit matter involves understanding management\u2019s process for performing the goodwill impairment assessment, assessing the inheren...",
    "auditResponse": "Our procedures to evaluate the Group\u2019s goodwill impairment assessment included: 1) Understanding management\u2019s process for performing the goodwill impairment assessment and assessing the inherent risk of material misstatement. 2) Assessing the appropriateness of the discounted cash flow model used. 3...",
    "fileName": "Pages from HKEX_Annual_2023.pdf"
  },
  {
    "id": 69,
    "company": "HKEX",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Control environment supporting key information technology systems",
    "description": "The Group operates securities and derivatives trading, which involves significant end-to-end processes of key systems that capture volumes of transactions and market data. These systems generate fee revenue and clearing and settlement fees, which account for the majority of the Group\u2019s revenue. The completeness and accuracy of the fee revenue recognized rely heavily on the IT systems and the underlying IT general controls.",
    "auditResponse": "We assessed the control environment, including the IT governance framework and IT general controls over the key systems. We tested the design and operating effectiveness of automated application controls and underlying IT general controls. We also tested relevant key automated application controls o...",
    "fileName": "Pages from HKEX_Annual_2023.pdf"
  },
  {
    "id": 70,
    "company": "HKEX",
    "year": 2024,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2024, the Group has goodwill of HK$13,297 million arising from various acquisitions. Goodwill of HK$13,192 million arises from the acquisition of LME Holdings Limited and its subsidiaries (collectively referred to as the 'LME Group'). This goodwill is attributable to the Cash Generating Unit (CGU) for the 'Commodities' segment. The nature of this key audit matter involves understanding management\u2019s process for performing the goodwill impairment assessment, assessing the inheren...",
    "auditResponse": "Our procedures to evaluate the Group\u2019s goodwill impairment assessment included: 1) Understanding management\u2019s process for performing the goodwill impairment assessment and assessing the inherent risk of material misstatement. 2) Assessing the appropriateness of the discounted cash flow model used. 3...",
    "fileName": "Pages from HKEX_Annual_2024.pdf"
  },
  {
    "id": 71,
    "company": "HKEX",
    "year": 2024,
    "auditor": "PwC",
    "kamTitle": "Control environment supporting key information technology systems",
    "description": "The Group operates securities and derivatives trading, which involves significant end-to-end processes of key systems that capture volumes of transactions and market data. These systems generate fee revenue and clearing and settlement fees, which account for the majority of the Group\u2019s revenue. The completeness and accuracy of the fee revenue recognized rely heavily on the information technology (IT) systems and the underlying IT general controls.",
    "auditResponse": "We assessed the control environment, including the IT governance framework, cybersecurity, and IT incident management. We tested the design and operating effectiveness of automated application controls and IT general controls over access to programs and data, program changes, computer operations, an...",
    "fileName": "Pages from HKEX_Annual_2024.pdf"
  },
  {
    "id": 72,
    "company": "ICE",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Acquisition",
    "description": "During 2019, the Company completed its acquisition of Simplifile, LC (\u201cSimplifile\u201d) for net consideration of $338 million. This transaction was accounted for as a business combination. Auditing the Company's accounting for its acquisition of Simplifile was complex due to the significant estimation in the Company\u2019s determination of fair value of the customer relationship identified intangible asset of $104 million.",
    "auditResponse": "We tested the Company's controls over its accounting for acquisitions, including controls over the estimation process supporting the recognition and measurement of the customer relationship intangible asset. We performed audit procedures that included evaluating the valuation methodology and signifi...",
    "fileName": "Pages from ICE_Annual_2019.pdf"
  },
  {
    "id": 73,
    "company": "ICE",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "The Company operates in the United States and multiple international tax jurisdictions and is subject to tax treaty arrangements and transfer pricing guidelines for intercompany transactions. For the year-ended December 31, 2019, the Company recognized consolidated income tax expense of $521 million, and as of December 31, 2019, the Company accrued liabilities of $103 million for unrecognized tax benefits. Auditing the Company's accounting for consolidated income tax expense was complex because ...",
    "auditResponse": "We tested the Company\u2019s controls that address the risks of material misstatement relating to the Company\u2019s consolidated income tax expense. We performed audit procedures that included recalculating consolidated income tax expense, involving our tax professionals to evaluate the application of tax la...",
    "fileName": "Pages from ICE_Annual_2019.pdf"
  },
  {
    "id": 74,
    "company": "ICE",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Acquisition of Ellie Mae",
    "description": "During 2020, the Company completed its acquisition of Ellie Mae, Inc. (Ellie Mae) for aggregate consideration of $11.4 billion. This transaction was accounted for as a business combination. Auditing the Company's accounting for its acquisition of Ellie Mae was complex due to the significant estimation in the Company\u2019s determination of fair value of identified intangible assets of $4.5 billion, which principally consisted of customer relationships, backlog, trademark/tradenames and developed tech...",
    "auditResponse": "We tested the Company's controls that address the risk of material misstatement relating to the Company's accounting for the acquisition. We tested controls over the estimation process supporting the recognition and measurement of the identified intangibles, including testing controls over managemen...",
    "fileName": "Pages from ICE_Annual_2020.pdf"
  },
  {
    "id": 75,
    "company": "ICE",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "The Company operates in the United States and multiple international tax jurisdictions and is therefore subject to various tax treaty arrangements and where applicable, transfer pricing guidelines for intercompany transactions. For the year-ended December 31, 2020, the Company recognized consolidated income tax expense of $658 million, and as of December 31, 2020, the Company accrued liabilities of $188 million for unrecognized tax benefits. Auditing the Company's accounting for consolidated inc...",
    "auditResponse": "We tested the Company\u2019s controls that address the risks of material misstatement relating to the Company\u2019s consolidated income tax expense. We tested controls over management\u2019s calculation of the federal, state and foreign components of income tax expense including management\u2019s controls over the ide...",
    "fileName": "Pages from ICE_Annual_2020.pdf"
  },
  {
    "id": 76,
    "company": "ICE",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "As discussed in Note 13 to the consolidated financial statements, the Company operates in the United States and multiple international tax jurisdictions and is therefore subject to various tax treaty arrangements and, where applicable, transfer pricing guidelines for intercompany transactions. Consolidated income tax expense, including the liability for unrecognized tax benefits, is an estimate based on management\u2019s understanding and interpretation of current enacted tax laws and tax rates of ea...",
    "auditResponse": "We tested the Company\u2019s controls that address the risks of material misstatement relating to the Company\u2019s consolidated income tax expense. For example, we tested controls over management\u2019s calculation of the federal, state and foreign components of income tax expense including management\u2019s controls...",
    "fileName": "Pages from ICE_Annual_2021.pdf"
  },
  {
    "id": 77,
    "company": "ICE",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "As discussed in Note 13 to the consolidated financial statements, the Company operates in the United States and multiple international tax jurisdictions and is therefore subject to various tax treaty arrangements and, where applicable, transfer pricing guidelines for intercompany transactions. Consolidated income tax expense, including the liability for unrecognized tax benefits, is an estimate based on management\u2019s understanding and interpretation of current enacted tax laws and tax rates of ea...",
    "auditResponse": "We tested the Company\u2019s controls that address the risks of material misstatement relating to the Company\u2019s consolidated income tax expense. For example, we tested controls over management\u2019s calculation of the federal, state, and foreign components of income tax expense, including management\u2019s contro...",
    "fileName": "Pages from ICE_Annual_2022.pdf"
  },
  {
    "id": 78,
    "company": "ICE",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Business Combinations",
    "description": "During 2023, the Company completed its acquisition of Black Knight, Inc. (Black Knight) for aggregate consideration of $11.8 billion. This transaction was accounted for as a business combination. Auditing the Company's accounting for its acquisition of Black Knight was complex due to the significant estimation in the Company\u2019s determination of fair value of identified intangible assets of $4.9 billion, which principally consisted of customer relationships, trademark/tradenames, developed technol...",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of the Company's controls that address the risk of material misstatement relating to the Company's accounting for the acquisition, including the estimated fair value of identified intangible assets. We performe...",
    "fileName": "Pages from ICE_Annual_2023.pdf"
  },
  {
    "id": 79,
    "company": "ICE",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "The Company operates globally and files income tax returns in the U.S. and in various state, local and foreign jurisdictions. Uncertainty in a tax position may arise because tax laws and rulings are subject to interpretation in each jurisdiction. The Company uses significant judgment to determine whether, based on the technical merits, a tax position is more likely than not to be sustained and to measure the amount of tax benefit that qualifies for recognition. As of December 31, 2023, the total...",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of the controls related to management's accounting for uncertain tax positions. We tested controls relating to the completeness of management\u2019s identification of uncertain tax positions and the application of t...",
    "fileName": "Pages from ICE_Annual_2023.pdf"
  },
  {
    "id": 80,
    "company": "ICE",
    "year": 2024,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "The Company operates globally and files income tax returns in the U.S. and in various state, local, and foreign jurisdictions. Uncertainty in a tax position may arise because tax laws and rulings are subject to interpretation in each jurisdiction. The Company uses significant judgment to determine whether, based on the technical merits, a tax position is more likely than not to be sustained and to measure the amount of tax benefit that qualifies for recognition. As of December 31, 2024, the tota...",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of the controls related to management's accounting for uncertain tax positions. We tested controls relating to the completeness of management\u2019s identification of uncertain tax positions and the application of t...",
    "fileName": "Pages from ICE_Annual_2024.pdf"
  },
  {
    "id": 81,
    "company": "LSEG",
    "year": 2015,
    "auditor": "Ernst & Young",
    "kamTitle": "Goodwill and Purchased Intangible Assets Impairment",
    "description": "The Group holds significant intangible assets, including goodwill, customer relationships, brands, software licenses, and intellectual property. The balance of goodwill was \u00a33.5 billion, compared to \u00a34.3 billion in the prior period. Management performs an annual impairment assessment for goodwill and purchased intangible assets to identify indicators of impairment. The impairment assessment involves significant management judgment in applying valuation models and assumptions.",
    "auditResponse": "We examined the cash flow forecasts supporting management\u2019s goodwill impairment assessment and tested compliance with IAS 36 'Impairment of Assets'. We assessed the reasonableness of forecasts and underlying assumptions, tested discount rates and long-term growth rates, and performed sensitivity ana...",
    "fileName": "Pages from LSEG_Annual_2015.pdf"
  },
  {
    "id": 82,
    "company": "LSEG",
    "year": 2015,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue",
    "description": "The risk of fraud in the recognition of revenue, particularly in secondary capital markets trading, new or updated post-trade clearing arrangements, and information services audit revenue accruals.",
    "auditResponse": "The audit team focused on areas such as secondary capital markets trading, new or updated post-trade clearing arrangements, and information services audit revenue accruals. They evaluated the controls over revenue recognition and performed substantive testing of transactions and balances.",
    "fileName": "Pages from LSEG_Annual_2015.pdf"
  },
  {
    "id": 83,
    "company": "LSEG",
    "year": 2016,
    "auditor": "Ernst & Young",
    "kamTitle": "Divestment of Russell Investment Management Business",
    "description": "The divestment of the Russell Investment Management (Russell IM) business, which occurred in H1 2016, poses a risk that the divestment was accounted for or disclosed inappropriately. The loss on discontinued operations was \u00a369.6 million, compared to a \u00a347.7 million profit in the prior year. The divestment included the sale of Russell IM\u2019s assets and liabilities amounting to \u00a31.2 billion and \u00a30.5 billion, respectively, as of 31 May 2016.",
    "auditResponse": "We confirmed our understanding of the divestment process and assessed the design and effectiveness of key controls. We evaluated management\u2019s assessment of the closing date for accounting purposes and concluded that it is in accordance with IFRS as adopted by the EU. We inspected the final signed sa...",
    "fileName": "Pages from LSEG_Annual_2016.pdf"
  },
  {
    "id": 84,
    "company": "LSEG",
    "year": 2016,
    "auditor": "Ernst & Young",
    "kamTitle": "Implementation of Oracle Finance System",
    "description": "The implementation of a new Oracle finance system poses a risk that exceptions in IT general controls could lead to errors in data integrity, accounting, or financial reporting. This is a new risk this year.",
    "auditResponse": "We confirmed our understanding of the implementation of the Oracle finance system and assessed the following areas of the migration project: governance, data conversion, migration procedures, system interfaces, and access review. We performed audit procedures over the migrated data in the new system...",
    "fileName": "Pages from LSEG_Annual_2016.pdf"
  },
  {
    "id": 85,
    "company": "LSEG",
    "year": 2016,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue in secondary capital markets trading, fees or revenue shares for clearing arrangements, and information services revenue accruals",
    "description": "The risk of fraud in revenue recognition exists due to the complexity of revenue structures and the potential for management to manipulate results. This includes secondary capital markets trading, fee or revenue sharing in clearing arrangements, and information services revenue accruals.",
    "auditResponse": "We confirmed our understanding of the processes and performed testing of the operating effectiveness of key controls. We performed analytical procedures, journal entry testing, and cut-off testing. We increased our standard sample size for transactional testing and used analytical tools to identify ...",
    "fileName": "Pages from LSEG_Annual_2016.pdf"
  },
  {
    "id": 86,
    "company": "LSEG",
    "year": 2016,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that goodwill and purchased intangible assets may be impaired",
    "description": "The Group holds significant intangible assets on its balance sheet, including goodwill, customer relationships, brands, software licenses, and intellectual property. The risk of impairment is assessed annually, and the impairment assessment involves significant management judgment in the application of valuation models and assumptions.",
    "auditResponse": "We confirmed our understanding of the impairment assessment process and assessed the reasonableness of cash flow forecasts and underlying assumptions. We tested the WACC discount rates and LTGRs, and performed sensitivity analysis on key inputs. No material issues were identified from the execution ...",
    "fileName": "Pages from LSEG_Annual_2016.pdf"
  },
  {
    "id": 87,
    "company": "LSEG",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue in secondary capital markets trading, revenue share for clearing arrangements, and information services revenue accruals",
    "description": "The risk of fraud in revenue recognition is heightened due to multiple pricing structures based on product types, customer activity, and volumes. Revenue sharing in clearing arrangements and information services revenue accruals can require estimation based on prior billings or preliminary usage. Compensation tied to the performance of the entity may create an incentive for management to manipulate results.",
    "auditResponse": "We confirmed our understanding of the secondary capital markets trading, revenue share clearing arrangements, and information services revenue accruals processes. We tested the operating effectiveness of key controls in these processes. We adopted a substantive audit approach and performed testing o...",
    "fileName": "Pages from LSEG_Annual_2017.pdf"
  },
  {
    "id": 88,
    "company": "LSEG",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that goodwill and purchased intangible assets may be impaired",
    "description": "The Group holds significant intangible assets on its balance sheet, including goodwill, customer relationships, brands, software licenses, and intellectual property. The balance of goodwill and purchased intangible assets was \u00a34.2 billion, compared to \u00a33.9 billion in the prior year. For 7 material cash-generating units (CGUs), we examined the cash flow forecasts which support management\u2019s impairment assessment. We concluded that the WACC discount rates, LTGR, customer retention rates, and cash f...",
    "auditResponse": "We confirmed our understanding of the impairment assessment process and evaluated the design effectiveness of key controls. We tested compliance with the requirements of IAS 36 'Impairment of Assets'. We assessed the reasonableness of the forecasts and the evidence supporting the underlying assumpti...",
    "fileName": "Pages from LSEG_Annual_2017.pdf"
  },
  {
    "id": 89,
    "company": "LSEG",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the acquisition of businesses was accounted for incorrectly",
    "description": "The Group undertook 2 significant acquisitions in the current year: Mergent Inc. and The Yield Book and Citi Fixed Income Indices. The risk involves the appropriate accounting for these acquisitions, including the significant judgement involved in the determination of goodwill and purchased intangible assets.",
    "auditResponse": "We confirmed our understanding of the business acquisition process and assessed the design effectiveness of key controls. We inspected the final signed sale and purchase agreements and agreed the purchase consideration to the SAPA and cash payments to the bank statements. We tested the book values o...",
    "fileName": "Pages from LSEG_Annual_2017.pdf"
  },
  {
    "id": 90,
    "company": "LSEG",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the implementation of the Oracle finance system could lead to errors in data integrity, accounting or financial reporting",
    "description": "The general ledger for LCH Group (excluding LCH S.A.) and LSEG US Holdco Inc. was migrated to Oracle in January 2017 and May 2017, respectively. The risk involves potential errors in data integrity, accounting, or financial reporting due to the implementation of the new system.",
    "auditResponse": "We confirmed our understanding of the implementation of the Oracle finance system, including the relevant processes pre and post Oracle implementation. We assessed various areas of the migration project, including governance, data conversion, migration procedures, system interfaces, and access revie...",
    "fileName": "Pages from LSEG_Annual_2017.pdf"
  },
  {
    "id": 91,
    "company": "LSEG",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Application of IFRS 15 to primary capital markets admission fees",
    "description": "The Group implemented IFRS 15 'Revenue from contracts with customers' on 1 January 2018, which required a change in the accounting policy for revenue recognition related to primary capital markets admission fees. This change involved recognizing revenue over the listing period rather than on the date of listing.",
    "auditResponse": "We assessed the revised accounting policy for compliance with IFRS 15 and the IFRIC decision. We tested the model used to calculate the period over which revenue is deferred and subsequently amortized, including various inputs such as the average life of a customer admitted to the exchange, historic...",
    "fileName": "Pages from LSEG_Annual_2018.pdf"
  },
  {
    "id": 92,
    "company": "LSEG",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue in secondary capital markets trading, revenue share for clearing arrangements, and information services revenue accruals",
    "description": "There is a risk of fraud in the recognition of revenue from secondary capital markets trading, revenue share for clearing arrangements, and information services revenue accruals. This involves significant judgment by management in determining the timing and amount of revenue recognition.",
    "auditResponse": "We performed detailed testing of revenue transactions, including reviewing supporting documentation and performing cut-off tests. We assessed the appropriateness of revenue recognition policies and the application of IFRS 15. We also performed analytical procedures and compared revenue trends to ind...",
    "fileName": "Pages from LSEG_Annual_2018.pdf"
  },
  {
    "id": 93,
    "company": "LSEG",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that expenses related to internally developed software are capitalised inappropriately, or that internally developed software is impaired",
    "description": "There is a risk that expenses related to internally developed software are capitalized inappropriately, or that internally developed software is impaired. This involves significant judgment by management in determining the capitalization and impairment of such software.",
    "auditResponse": "We reviewed the policies and procedures for capitalizing and impairing internally developed software, and tested the application of these policies. We assessed the reasonableness of the assumptions used in the impairment tests and compared them to historical data and market expectations. We also per...",
    "fileName": "Pages from LSEG_Annual_2018.pdf"
  },
  {
    "id": 94,
    "company": "LSEG",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that goodwill and purchased intangible assets may be impaired",
    "description": "The Group holds significant intangible assets on its balance sheet, including goodwill, customer relationships, brands, software licenses, and intellectual property. The risk of impairment of these assets is significant due to the size of the balances and the involvement of significant judgment by management in determining the valuation of the intangible assets.",
    "auditResponse": "We confirmed our understanding of the impairment assessment process and assessed the design effectiveness of key controls. For material cash generating units (CGUs), we examined the cash flow forecasts which support management\u2019s impairment assessment and tested compliance with the requirements of IA...",
    "fileName": "Pages from LSEG_Annual_2018.pdf"
  },
  {
    "id": 95,
    "company": "LSEG",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of expenses related to internally developed software being capitalised inappropriately, or that internally developed software is impaired",
    "description": "The capitalisation of expenses to internally developed software involves management\u2019s judgement, when making their assessment of capitalisation against criteria set out in IFRS as adopted by the EU. The Group is required to review capitalised software assets for impairment whenever events or changes in circumstances indicate that their carrying amounts may not be recoverable, and at least annually, review whether there is any change in their expected useful lives.",
    "auditResponse": "We confirmed our understanding of the capitalisation and impairment assessment processes and assessed the design and operating effectiveness of key controls. We concluded that the controls were designed, implemented and operating effectively, and therefore took a controls-reliance approach. For a sa...",
    "fileName": "Pages from LSEG_Annual_2019.pdf"
  },
  {
    "id": 96,
    "company": "LSEG",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue in secondary capital markets trading, revenue share for clearing arrangements, and information services revenue",
    "description": "The risk of fraud in recognition of revenue in secondary capital markets trading, revenue share for clearing arrangements, and information services revenue accruals within the FTSE Russell business. This includes the complexity of revenue recognition for secondary capital markets revenue, which involves multiple pricing structures based on product types, customer activity, and volumes, leading to a heightened risk that revenue may not be recognised appropriately, either as a result of fraud or e...",
    "auditResponse": "We confirmed our understanding of the secondary capital markets trading, revenue share clearing arrangements, and FTSE Russell revenue accruals processes, and evaluated the design effectiveness of key controls. We performed cut-off testing to ensure revenue was recognised in the correct period. In o...",
    "fileName": "Pages from LSEG_Annual_2019.pdf"
  },
  {
    "id": 97,
    "company": "LSEG",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that goodwill and purchased intangible\nassets may be impaired",
    "description": "The Group holds significant intangible assets on its balance sheet, including goodwill, customer relationships, brands, software licenses, and intellectual property. The valuation of these intangible assets is a key audit matter due to the size of the goodwill and purchased intangible assets as at 31 December 2019 and the involvement of significant judgment by management in determining the valuation of the intangible assets.",
    "auditResponse": "We performed the following procedures: \\n- Examined the cash flow forecasts which support management\u2019s impairment assessment and tested compliance with the requirements of IAS 36 'Impairment of Assets'.\\n- Tested the reasonableness of those forecasts and the evidence supporting the underlying assump...",
    "fileName": "Pages from LSEG_Annual_2019.pdf"
  },
  {
    "id": 98,
    "company": "LSEG",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue in secondary capital markets trading and Information Services revenue accruals within the FTSE Russell business",
    "description": "There is a risk of fraud in the recognition of revenue in secondary capital markets trading and Information Services revenue accruals within the FTSE Russell business, which could result in material misstatements.",
    "auditResponse": "We performed detailed testing of revenue recognition processes, including reviewing supporting documentation, performing cut-off tests, and interviewing key personnel. We also used data analytics to identify unusual patterns or trends.",
    "fileName": "Pages from LSEG_Annual_2020.pdf"
  },
  {
    "id": 99,
    "company": "LSEG",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that expenses related to internally developed software are capitalised inappropriately, or that internally developed software is impaired",
    "description": "There is a risk that expenses related to internally developed software are capitalized inappropriately, or that internally developed software is impaired, leading to potential misstatements in the financial statements.",
    "auditResponse": "We reviewed the policies and procedures for capitalizing and impairing internally developed software, tested the application of these policies, and performed substantive testing on the capitalization and impairment decisions.",
    "fileName": "Pages from LSEG_Annual_2020.pdf"
  },
  {
    "id": 100,
    "company": "LSEG",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the impairment of goodwill and purchased intangible assets is inaccurate or incomplete",
    "description": "There is a risk that the impairment of goodwill and purchased intangible assets is inaccurate or incomplete, which could lead to material misstatements in the financial statements.",
    "auditResponse": "We performed detailed reviews of the impairment models, including the assumptions and inputs used, and compared these to historical performance and market data. We also involved specialists to validate the valuation techniques and assumptions.",
    "fileName": "Pages from LSEG_Annual_2020.pdf"
  },
  {
    "id": 101,
    "company": "LSEG",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in the recognition of revenue in secondary capital markets trading fees, FTSE Russell revenue accruals, and Refinitiv subscription revenue",
    "description": "There is a risk of fraud in the recognition of revenue in secondary capital markets trading fees, FTSE Russell revenue accruals, and Refinitiv subscription revenue within the Data & Analytics business. Compensation tied to performance may create an incentive for management to manipulate results.",
    "auditResponse": "We confirmed our understanding of the processes and controls relevant to revenue recognition, evaluated the design effectiveness of key controls, and performed cut-off testing. We adopted a substantive audit approach, increased our standard sample size for transaction testing, and performed analytic...",
    "fileName": "Pages from LSEG_Annual_2021.pdf"
  },
  {
    "id": 102,
    "company": "LSEG",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that expenses related to internally developed software are capitalised inappropriately, or that internally developed software is impaired",
    "description": "There is a risk that expenses related to internally developed software may be capitalized inappropriately or that the software may be impaired, leading to potential misstatement of the financial statements.",
    "auditResponse": "We assessed the capitalization policies and controls, reviewed the documentation supporting the capitalization decisions, and performed impairment testing to ensure the accuracy of the reported amounts.",
    "fileName": "Pages from LSEG_Annual_2021.pdf"
  },
  {
    "id": 103,
    "company": "LSEG",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the disposal of the Borsa Italiana Group is accounted for or disclosed incorrectly",
    "description": "There is a risk of error in the appropriate accounting for the significant transaction involving a gain on disposal of Borsa Italiana Group and the relevant presentation and disclosure as a discontinued operation.",
    "auditResponse": "We confirmed our understanding of the process relating to the Borsa Italiana Group disposal, inspected and reviewed the documents pertaining to the completion of the sale transaction, and performed audit procedures on the gain on disposal calculation. We assessed the reasonableness of other accounti...",
    "fileName": "Pages from LSEG_Annual_2021.pdf"
  },
  {
    "id": 104,
    "company": "LSEG",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the impairment of goodwill and purchased intangible assets is inaccurate or incomplete",
    "description": "There is a risk that the carrying values of goodwill and purchased intangible assets are inaccurate or incomplete, and the related disclosures are not compliant with IAS 36 'Impairment of Assets' and IAS 38 'Intangible Assets'.",
    "auditResponse": "We confirmed our understanding of the impairment assessment process, assessed the design effectiveness of key controls, and adopted a substantive audit approach. We examined cash flow forecasts, tested the accuracy of forecasts, evaluated the reasonableness of cash flow forecasts, and performed sens...",
    "fileName": "Pages from LSEG_Annual_2021.pdf"
  },
  {
    "id": 105,
    "company": "LSEG",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the Refinitiv acquisition is accounted for and disclosed incorrectly",
    "description": "There is a significant risk of inappropriate accounting for the acquisition in accordance with IFRS 3 'Business Combinations', including alignment to LSEG accounting policies, and the related disclosures due to significant judgments required in the determination of the fair value of consideration transferred, the fair value of net assets acquired, non-controlling interest, and resulting goodwill.",
    "auditResponse": "We confirmed our understanding of the business combination accounting process, held discussions with management, and reviewed management\u2019s assessment of Refinitiv\u2019s accounting policies. We verified the completeness and accuracy of the carrying value of acquired net assets and performed an audit of s...",
    "fileName": "Pages from LSEG_Annual_2021.pdf"
  },
  {
    "id": 106,
    "company": "LSEG",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for acquisitions",
    "description": "During 2022, the Group completed the acquisitions of Global Data Consortium, Inc. (GDC), MayStreet, Inc. (MayStreet), TORA Holdings, Inc. (TORA) and Quantile Group Limited (Quantile). There is a complexity in auditing the accounting for these acquisitions as there are significant judgements and assumptions required in the determination of the fair value of net assets acquired and the resulting goodwill.",
    "auditResponse": "Control assessment: We confirmed our understanding of the business combinations accounting process including process and controls relevant to the acquisitions. Technical accounting: We reviewed management\u2019s business combinations accounting papers and management\u2019s assessment of the acquirees\u2019 account...",
    "fileName": "Pages from LSEG_Annual_2022.pdf"
  },
  {
    "id": 107,
    "company": "LSEG",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Capitalisation and impairment of internally developed software",
    "description": "The Group reported capitalised internally developed software of \u00a32,653 million (2021: \u00a32,318 million) and an impairment charge of \u00a311 million (2021: \u00a313 million). Auditing the capitalisation of expenses to internally developed software is complex as it involves management judgement when making the assessment of capitalisation against criteria set out in IAS 38 'Intangible Assets'.",
    "auditResponse": "Control assessment: We confirmed our understanding of both the capitalisation and impairment assessment processes and assessed the design and operating effectiveness of key controls. Additions testing: For a sample of additions, we have agreed amounts capitalised to supporting documentation to verif...",
    "fileName": "Pages from LSEG_Annual_2022.pdf"
  },
  {
    "id": 108,
    "company": "LSEG",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Impairment of goodwill and purchased intangible assets",
    "description": "The Group reported goodwill of \u00a319,829 million (2021: \u00a317,486 million) and net purchased intangible assets of \u00a312,584 million (2021: \u00a311,920 million). The complexity in auditing goodwill and purchased intangible assets relates to the use of judgement in the impairment assessment. Both goodwill and purchased intangible assets are sensitive to a number of judgements and estimates, particularly cash flow forecasts, long-term growth rates (LTGR), discount rates, amortisation periods for purchased in...",
    "auditResponse": "Control assessment: We confirmed our understanding of the impairment assessment process and assessed the design effectiveness of key controls. Carrying value of goodwill: For material cash generating units (CGUs), we examined the cash flow forecasts and tested compliance with the requirements of IAS...",
    "fileName": "Pages from LSEG_Annual_2022.pdf"
  },
  {
    "id": 109,
    "company": "LSEG",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Revenue recognition",
    "description": "The Group reported \u00a37,454 million of revenue from external customers, which consisted of \u00a35,259 million in Data & Analytics, \u00a31,459 million in Post Trade, and \u00a3736 million in Capital Markets. Auditing revenue recorded is complex due to the complexity of the IT systems used in the initiation, processing, and recording of transactions and the manual nature of certain revenue streams.",
    "auditResponse": "Control assessment: We confirmed our understanding of the processes and controls relevant to the material revenue streams of the Group. We also evaluated the design effectiveness and tested operating effectiveness of key controls including IT systems and related IT controls for certain revenue strea...",
    "fileName": "Pages from LSEG_Annual_2022.pdf"
  },
  {
    "id": 110,
    "company": "LSEG",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for acquisitions",
    "description": "During 2023, the Group completed the acquisition of AcadiaSoft, Inc., with net assets acquired of \u00a3229 million and goodwill recognised of \u00a3341 million. The risk has reduced this year given the lower volume of businesses acquired and value of the acquisition compared to the prior year.",
    "auditResponse": "Control assessment: Confirmed understanding of business combinations accounting process and discussed governance structures with management. Technical accounting: Reviewed management\u2019s business combinations accounting papers and assessed differences in accounting policies. Net assets acquired and re...",
    "fileName": "Pages from LSEG_Annual_2023.pdf"
  },
  {
    "id": 111,
    "company": "LSEG",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Capitalisation and subsequent impairment of internally developed software",
    "description": "The Group reported capitalised internally developed software of \u00a32,717 million (2022: \u00a32,653 million) and an impairment charge of \u00a310 million (2022: \u00a311 million). The complexity in auditing the capitalisation of software costs involves management judgement in determining whether costs can be capitalised and assessing recoverability.",
    "auditResponse": "Control assessment: Confirmed understanding of capitalisation and impairment assessment processes and assessed design and operating effectiveness of key controls. Additions testing: Agreed amounts capitalised to supporting documentation. Impairment assessment: Tested and challenged management\u2019s asse...",
    "fileName": "Pages from LSEG_Annual_2023.pdf"
  },
  {
    "id": 112,
    "company": "LSEG",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of acquired intangible assets, including goodwill",
    "description": "The Group reported goodwill of \u00a319,246 million (2022: \u00a319,829 million) and net purchased intangible assets of \u00a311,158 million (2022: \u00a312,584 million). The complexity in auditing goodwill and purchased intangible assets relates to the use of judgement in impairment assessments and re-evaluating amortisation methods and useful lives.",
    "auditResponse": "Control assessment: Confirmed understanding of impairment assessment process and assessed design effectiveness of key controls. Carrying value of goodwill: Examined cash flow forecasts, tested compliance with IAS 36, evaluated reasonableness of forecasts, and performed sensitivity analysis. Purchase...",
    "fileName": "Pages from LSEG_Annual_2023.pdf"
  },
  {
    "id": 113,
    "company": "LSEG",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Revenue recognition",
    "description": "The Group reported \u00a38,061 million (2022: \u00a37,454 million) of revenue from external customers, which consisted of \u00a35,637 million (2022: \u00a35,259 million) in Data & Analytics, \u00a31,546 million (2022: \u00a31,459 million) in Capital Markets and \u00a3878 million (2022: \u00a3736 million) in Post Trade. The complexity in auditing revenue relates to the judgements applied in the amount and timing of subscription revenue recognition based on non-standard terms in customer agreements and the year-end revenue accruals for ...",
    "auditResponse": "Control assessment: Confirmed understanding of processes and controls relevant to material revenue streams. Evaluated design effectiveness and tested operating effectiveness of key controls. Overall procedures: Evaluated revenue recognition policy in accordance with IFRS 15. Performed cut-off testin...",
    "fileName": "Pages from LSEG_Annual_2023.pdf"
  },
  {
    "id": 114,
    "company": "LSEG",
    "year": 2024,
    "auditor": "Deloitte",
    "kamTitle": "Capitalisation and subsequent impairment assessment of internally-developed intangible assets",
    "description": "The Group reported \u00a32,517 million of internally-developed intangible assets, net of amortisation and impairment, at 31 December 2024 (31 December 2023: \u00a32,717 million), as outlined in note 9. The capitalisation of certain expenditure on internally-developed assets is subjective and management judgement is required to assess whether expenditure should be capitalised in accordance with IAS 38, Intangible Assets. The Group\u2019s criteria for capitalisation are outlined in note 9. Additionally, internal...",
    "auditResponse": "Our audit procedures in respect of capitalisation and impairment of these assets, to address the risk of errors and fraud, included the following:\u2014 Obtained an understanding of relevant controls over the capitalisation of expenses, as well as the relevant controls over the impairment assessment for ...",
    "fileName": "Pages from LSEG_Annual_2024.pdf"
  },
  {
    "id": 115,
    "company": "LSEG",
    "year": 2024,
    "auditor": "Deloitte",
    "kamTitle": "Revenue recognition",
    "description": "The Group recognised revenue from external customers of \u00a38,579 million for the year ended 31 December 2024 (31 December 2023: \u00a38,061 million). Of this, \u00a3918 million relates to FTSE Russell (31 December 2023: \u00a3844 million) and \u00a34,374 million relates to Data & Analytics (31 December 2023: \u00a34,301 million). Judgement is required to estimate the asset-based revenue accrual in FTSE Russell (FTSE AUM) for the fourth quarter based on prior billings and other assumptions.",
    "auditResponse": "We performed the following procedures over revenue:\u2014 We obtained an understanding of relevant controls over the Group\u2019s material revenue streams. However, as a result of the IT control deficiencies set out in Section 7.2, we were not able to rely on controls over revenue and in response to these def...",
    "fileName": "Pages from LSEG_Annual_2024.pdf"
  },
  {
    "id": 116,
    "company": "LSEG",
    "year": 2024,
    "auditor": "Deloitte",
    "kamTitle": "Valuation of intangible assets arising from business combinations, including goodwill",
    "description": "At 31 December 2024, and as outlined in note 9, the Group reported \u00a319,668 million of goodwill (31 December 2023: \u00a319,246 million) and \u00a310,785 million of assets arising from business combinations, such as customer relationships, brands and databases and content (purchased intangible assets) (31 December 2023: \u00a311,184 million), net of amortisation. Goodwill is assessed for impairment at least annually, irrespective of whether or not indicators of impairment exist. The Group performs its annual im...",
    "auditResponse": "We performed the following procedures over the goodwill impairment test:\u2014 Obtained an understanding of relevant controls over the identification of impairment indicators for goodwill and purchased intangible assets, and the annual impairment test for goodwill;\u2014 Challenged management\u2019s goodwill impai...",
    "fileName": "Pages from LSEG_Annual_2024.pdf"
  },
  {
    "id": 117,
    "company": "Nasdaq Inc.",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Market Technology Revenue Recognition",
    "description": "As described in Notes 3 and 9 to the consolidated financial statements, the Company enters into long-term market technology contracts with customers to develop customized technology solutions, license the right to use software, and provide support and other services which results in these contracts containing multiple performance obligations. The Company recorded market technology deferred revenue of $66 million as of December 31, 2019 and recognized $338 million in revenue for the year ended De...",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of controls over the Company's processes with respect to estimates that impact the timing and measurement of revenue recognition. For example, we tested controls over the allocation of contract transaction pric...",
    "fileName": "Pages from NASDAQ_Annual_2019.pdf"
  },
  {
    "id": 118,
    "company": "Nasdaq Inc.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Market Technology Revenue Recognition",
    "description": "The Company enters into long-term market technology contracts with customers to develop customized technology solutions, license the right to use software, and provide support and other services. These contracts contain multiple performance obligations. The Company recorded market technology deferred revenue of $53 million as of December 31, 2020 and recognized $357 million in revenue for the year then ended. The Company allocates the contract transaction price to each performance obligation usi...",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of controls over the Company's processes with respect to estimates that impact the timing and measurement of revenue recognition. We tested controls over the allocation of contract transaction price to performa...",
    "fileName": "Pages from NASDAQ_Annual_2020.pdf"
  },
  {
    "id": 119,
    "company": "Nasdaq Inc.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Acquisition of Verafin",
    "description": "The company completed the acquisition of Verafin for an aggregate purchase price of $2.75 billion, resulting in $1.88 billion of goodwill and $815 million of intangible assets, including customer relationships and developed technology.",
    "auditResponse": "We tested controls over the estimation process supporting the recognition and measurement of goodwill and intangible assets. We evaluated the company's use of valuation methodologies, significant assumptions, and the completeness and accuracy of underlying data. We involved valuation specialists to ...",
    "fileName": "Pages from NASDAQ_Annual_2021.pdf"
  },
  {
    "id": 120,
    "company": "Nasdaq Inc.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Market Technology Revenue Recognition",
    "description": "The Company enters into long-term contracts with customers to develop customized technology solutions, license the right to use software, and provide support and other services which results in the allocation of contract transaction price to performance obligations, including management\u2019s review of these contracts containing multiple performance obligations. The Company uses cost plus an estimated margin to determine the estimated margin used when applying the cost plus an estimated margin metho...",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of controls over the Company's processes with respect to estimates that impact the timing and measurement of revenue recognition. This included testing controls over the allocation of contract transaction price...",
    "fileName": "Pages from NASDAQ_Annual_2021.pdf"
  },
  {
    "id": 121,
    "company": "Nasdaq Inc.",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Market Technology Revenue Recognition",
    "description": "The audit focused on the Company's processes regarding estimates that impact the timing and measurement of revenue recognition, particularly for market technology contracts. These contracts involve providing customized technology solutions, licensing software, and offering support and other services, resulting in multiple performance obligations.",
    "auditResponse": "The auditors tested controls over the allocation of contract transaction price to performance obligations, evaluated the design and operating effectiveness of controls, and performed substantive audit procedures. This included evaluating significant assumptions, the accuracy and completeness of unde...",
    "fileName": "Pages from NASDAQ_Annual_2022.pdf"
  },
  {
    "id": 122,
    "company": "Nasdaq Inc.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Acquisition of Adenza",
    "description": "During 2023, the Company completed its acquisition of Adenza, which was accounted for as a business combination for a total purchase consideration of $5,750 million in cash (subject to customary post-closing adjustments) and the issuance of 85,608,414 shares of Nasdaq common stock at a price of $48.71 per share. The transaction resulted in the recognition of $5,933 million of goodwill and $5,050 million of intangible assets, including customer relationships of $3,740 million, technology of $950 ...",
    "auditResponse": "The audit team obtained an understanding, evaluated the design, and tested the operating effectiveness of controls over the Company\u2019s processes with respect to estimates that impact the accounting for the Adenza acquisition. This included testing controls over the estimation process supporting the r...",
    "fileName": "Pages from NASDAQ_Annual_2023.pdf"
  },
  {
    "id": 123,
    "company": "Nasdaq Inc.",
    "year": 2024,
    "auditor": "Ernst & Young",
    "kamTitle": "Calypso and AxiomSL on-premises license revenue recognition",
    "description": "As described in Note 2 to the consolidated financial statements, the Company recognizes revenue from Calypso and AxiomSL on-premises licenses, which involves significant judgment due to the complexity of the arrangements and the timing of revenue recognition. The critical audit matter involved evaluating the appropriateness of the Company\u2019s revenue recognition policies and the sufficiency of the evidence supporting the timing of revenue recognition.",
    "auditResponse": "Our audit procedures included, among others, testing the design and operating effectiveness of controls over revenue recognition, including controls over the determination of the transaction price and the allocation of the transaction price to performance obligations. We also performed detailed test...",
    "fileName": "Pages from NASDAQ_Annual_2024.pdf"
  },
  {
    "id": 124,
    "company": "TMX Group",
    "year": 2020,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $1,653.7 million and $2,323.1 million respectively as of December 31, 2020. The Entity performs impairment testing for goodwill and indefinite life intangible assets on an annual basis or more frequently when there is an indication of impairment. An impairment is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount. The recoverable amount of an asset is ...",
    "auditResponse": "We evaluated the appropriateness of future cash flows by comparing the Entity\u2019s prior year expected future cash flows to the actual results to assess the Entity\u2019s budgeting process and assessing future cash flows by comparing them to historical performance and against key new initiatives in the Boar...",
    "fileName": "Pages from TMX_Annual_2020.pdf"
  },
  {
    "id": 125,
    "company": "TMX Group",
    "year": 2021,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $1,695.8 million and $2,322.4 million respectively as of December 31, 2021. The Entity performs impairment testing for goodwill and indefinite life intangible assets on an annual basis or more frequently when there is an indication of impairment. An impairment is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount. The recoverable amount of an asset is ...",
    "auditResponse": "The primary procedures we performed to address this key audit matter included the following: \n\nWe evaluated the appropriateness of the future revenues of the acquired business, future\nrevenues attributable to acquired customer relationships, and customer attrition rates by\nconsidering past performan...",
    "fileName": "Pages from TMX_Annual_2021.pdf"
  },
  {
    "id": 126,
    "company": "TMX Group",
    "year": 2021,
    "auditor": "KPMG",
    "kamTitle": "Measurement of the BOX Purchase Consideration and Customer Relationships Acquired in the AST Canada and BOX Business Combinations",
    "description": "The Entity completed the AST Canada acquisition on August 12, 2021, and the BOX acquisition on January 3, 2022. The provisional amounts estimated for the customer relationships acquired in these business combinations are $79.0 million and $305.9 million, respectively. The fair value of these customer relationships and the purchase consideration for BOX were estimated using the income approach, which involves significant subjectivity and estimation uncertainty.",
    "auditResponse": "The audit team evaluated the appropriateness of the future revenues, customer attrition rates, and discount rates by considering past performance and involving valuation professionals with specialized skills. These professionals assisted in assessing the discount rates by comparing them to market da...",
    "fileName": "Pages from TMX_Annual_2021.pdf"
  },
  {
    "id": 127,
    "company": "TMX Group",
    "year": 2022,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $1,768.7 million and $2,328.5 million respectively as of December 31, 2022. The Entity performs impairment testing for goodwill and indefinite life intangible assets at least annually even when there is no indication of impairment. An impairment loss is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount. The recoverable amount of an asset is the greate...",
    "auditResponse": "The primary procedures we performed to address this key audit matter included evaluating the significant assumptions used by the Entity in its impairment testing, assessing the appropriateness of the valuation models, and performing sensitivity analyses to understand the impact of changes in key ass...",
    "fileName": "Pages from TMX_Annual_2022.pdf"
  },
  {
    "id": 128,
    "company": "TMX Group",
    "year": 2022,
    "auditor": "KPMG",
    "kamTitle": "Measurement of the BOX purchase consideration and the customer relationships acquired in the BOX business combination",
    "description": "The Entity obtained control of BOX Holdings Group LLC (BOX) on January 3, 2022, and accounted for it as a business combination. The Entity remeasured its previously held ownership interest at $207.6 million, which comprises the purchase consideration. The identified acquired intangible assets include customer relationships, valued at $306.1 million. The fair value of these assets was estimated using the income approach, involving significant subjectivity and estimation uncertainty.",
    "auditResponse": "The primary procedures performed included evaluating the appropriateness of future revenues, customer attrition rates, and discount rates by considering past performance and involving valuation professionals with specialized skills to assess the discount rates against comparable entities and industr...",
    "fileName": "Pages from TMX_Annual_2022.pdf"
  },
  {
    "id": 129,
    "company": "TMX Group",
    "year": 2023,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $1,776.8 million and $2,329.4 million respectively as of December 31, 2023. The Entity performs impairment testing for goodwill and indefinite life intangible assets at least annually even when there is no indication of impairment. An impairment loss is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount which is the higher of the asset\u2019s fair value les...",
    "auditResponse": "The primary procedures we performed to address this key audit matter included the following: \\n- Evaluating the appropriateness of future cash flows by comparing the Entity\u2019s prior year expected future cash flows to the actual results to assess the Entity\u2019s budgeting process.\\n- Assessing future cas...",
    "fileName": "Pages from TMX_Annual_2023.pdf"
  },
  {
    "id": 130,
    "company": "TMX Group",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $2,637.7 million and $2,425.4 million respectively as of December 31, 2024. The Entity performs impairment testing for goodwill and indefinite life intangible assets at least annually even when there is no indication of impairment. An impairment loss is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount which is the higher of the asset\u2019s fair value les...",
    "auditResponse": "We evaluated the appropriateness of future cash flows by comparing the Entity\u2019s prior year expected future cash flows to the actual results to assess the Entity\u2019s budgeting process. We assessed future cash flows by comparing them to historical performance and against key new initiatives in the Board...",
    "fileName": "Pages from TMX_Annual_2024.pdf"
  },
  {
    "id": 131,
    "company": "TMX Group",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the measurement of certain customer relationships, technology, and trade name acquired in the VettaFi business combination",
    "description": "On January 2, 2024, the Entity completed the acquisition of the remaining 77.7% common units in VettaFi Holdings LLC and all its subsidiaries (collectively \u201cVettaFi\u201d) and VettaFi became a consolidated wholly-owned subsidiary of the Entity. The Entity\u2019s identified acquired intangible assets include customer relationships, technology, and trade name for which the amounts estimated by the Entity are $599.7 million, $188.1 million, and $81.6 million respectively. The Entity estimated the fair value ...",
    "auditResponse": "We evaluated the appropriateness of the future revenues (including those attributable to acquired customer relationships, trade name, or technology) and customer attrition rates by considering past performance of the acquired business and against new initiatives in the Entity\u2019s long-term strategic p...",
    "fileName": "Pages from TMX_Annual_2024.pdf"
  }
];

console.log('✅ Loaded', ACTUAL_KAM_DATA.length, 'actual KAM records from embedded data');
