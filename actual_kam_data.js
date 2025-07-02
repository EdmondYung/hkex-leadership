// Actual KAM data from your tidied Excel file
const ACTUAL_KAM_DATA = [
  {
    "id": 1,
    "company": "Deutsche Börse AG",
    "year": 2017,
    "auditor": "KPMG",
    "kamTitle": "Impairment of the Goodwill",
    "description": "At 31 December 2017, goodwill amounted to EUR 2,770.9 million (previous year: EUR 2,721.1 million), representing 2 per cent of the assets of the Group. Goodwill is subjected to an impairment test at least annually and on an ad hoc basis if necessary. The impairment test involves comparing the carrying amount with the recoverable amount of the cash-generating unit (CGU). The determination of the recoverable amount is based on the value in use or fair value less costs of disposal. The results of these valuations are highly dependent on assumptions about future cash inflows and defined parameters, making them subject to significant judgment. Any impairment could have a material impact on the financial statements.",
    "auditResponse": "The auditors reviewed the assumptions and methodologies used in the impairment testing process, including the valuation models and inputs. They also evaluated the appropriateness of the discount rates and growth rates used in the calculations. Additionally, the auditors performed sensitivity analyses to assess the reasonableness of the assumptions and the potential impact of changes in these assumptions on the impairment test results.",
    "fileName": "Pages from DBG-annual-report-2017.pdf"
  },
  {
    "id": 2,
    "company": "Deutsche Börse AG",
    "year": 2017,
    "auditor": "KPMG",
    "kamTitle": "Valuation of Other Intangible Assets",
    "description": "The other intangible assets amounted to EUR 911.2 million (previous year: EUR 859.9 million) at 31 December 2017, representing 0.7% of the Group's assets. These assets are subject to annual impairment tests, and their valuation is highly dependent on assumptions about future cash inflows and defined parameters.",
    "auditResponse": "The auditors assessed the valuation models and the appropriateness of significant assumptions, including the discount rates, by comparing them with market and industry-specific reference values. They also verified the calculation methods and compared expected cash flows with the approved budget plan. Sensitivity analyses were performed to determine the impact of potential changes in assumptions.",
    "fileName": "Pages from DBG-annual-report-2017.pdf"
  },
  {
    "id": 3,
    "company": "Deutsche Börse AG",
    "year": 2017,
    "auditor": "KPMG",
    "kamTitle": "Valuation of Provisions for Tax Risks",
    "description": "The provisions for tax risks amounted to EUR 339.4 million at 31 December 2017. The application of local and international tax regulations and tax relief is complex and associated with risks. The calculation of tax provisions requires the company to exercise judgment in the assessment of tax issues and to make estimates concerning tax risks. The result of these assessments is dependent to a large extent on assumptions concerning the future interpretation of tax situations in the course of tax audits and also on decisions of the tax authorities and courts on similar tax situations.",
    "auditResponse": "With the support of our employees specialising in local and international tax law, we appraised the tax calculation, including the risk assessment, of Deutsche Börse AG. Where available, we have also acknowledged the assessment of external experts engaged by the company. We held meetings with the management as well as staff from the tax department in order to gain an understanding of the existing tax risks. We have assessed the competence and the objectivity of external experts and evaluated the documents they have produced. Furthermore, we evaluated the correspondence with the competent tax authorities and assessed the assumptions used to determine the tax provisions on the basis of our knowledge and experience of the current application of the relevant legal regulations by the authorities and the courts.",
    "fileName": "Pages from DBG-annual-report-2017.pdf"
  },
  {
    "id": 4,
    "company": "Deutsche Börse AG",
    "year": 2018,
    "auditor": "KPMG",
    "kamTitle": "Impairment of Other Intangible Assets",
    "description": "The other intangible assets amounted to EUR 952.7 million (previous year: EUR 911.2 million) at 31 December 2018, representing 0.6% of the Group's assets. These assets are subject to an annual impairment test, which is highly dependent on assumptions about future cash inflows and defined parameters. The impairment test is critical due to its potential material impact on the financial statements.",
    "auditResponse": "The audit team, supported by valuation experts, assessed the valuation models and the appropriateness of significant assumptions. They compared the assumptions with market and industry-specific reference values, verified the calculation methods for discount rates, and compared expected cash flows with the approved budget. The team also discussed the assumptions with management, compared them with peer group companies, evaluated analyst reports, and performed sensitivity analyses to determine the need for impairment.",
    "fileName": "Pages from DBG-annual-report-2018.pdf"
  },
  {
    "id": 5,
    "company": "Deutsche Börse AG",
    "year": 2018,
    "auditor": "KPMG",
    "kamTitle": "Impairment of the goodwill",
    "description": "At 31 December 2018, goodwill amounted to EUR 2,865.6 million (previous year: EUR 2,770.9 million). Goodwill is subjected to an impairment test by the company at least once a year and also on an ad hoc basis, if appropriate. The carrying amount is compared with the recoverable amount of the cash-generating unit (CGU). Deutsche Börse AG determines the recoverable amounts of the cash-generating units either on the basis of the value in use or on the basis of the fair value less costs of disposal. If the carrying amount is higher than the recoverable amount, there is a need for impairment. The result of these valuations is highly dependent on assumptions concerning the future cash inflows based on the corporate planning as well as the defined parameters. As a result, the valuations are subject to discretion. Any need for impairment that may result can have material impacts on the statement of the assets, liabilities and financial performance of Deutsche Börse AG.",
    "auditResponse": "The audit team focused on the assumptions and methodologies used in the impairment testing of goodwill, including the valuation models and the forecasted cash flows. They performed sensitivity analyses to assess the reasonableness of the assumptions and the impact of potential changes in these assumptions on the impairment assessment. The audit also involved discussions with management and external valuation experts to understand the rationale behind the assumptions and the valuation process.",
    "fileName": "Pages from DBG-annual-report-2018.pdf"
  },
  {
    "id": 6,
    "company": "Deutsche Börse AG",
    "year": 2018,
    "auditor": "KPMG",
    "kamTitle": "Valuation of Provisions for Tax Risks",
    "description": "The company operates in various jurisdictions with different legal systems, leading to complex applications of local and international tax regulations and tax relief. This complexity introduces significant risks, requiring the company to make judgments and estimates regarding tax risks. The provisions for tax risks amounted to EUR 334.8 million as of 31 December 2018. The assessment of these provisions is highly dependent on assumptions about future tax interpretations and decisions by tax authorities and courts.",
    "auditResponse": "The audit confirmed that the company's calculation methods are appropriate and consistent with relevant valuation principles. The underlying assumptions about valuation-relevant parameters were calculated in a balanced manner and are within acceptable ranges. The company occasionally commissions external experts to assess tax matters, which helps in making informed judgments and estimates.",
    "fileName": "Pages from DBG-annual-report-2018.pdf"
  },
  {
    "id": 7,
    "company": "Deutsche Börse AG",
    "year": 2019,
    "auditor": "KPMG",
    "kamTitle": "Impairment of Goodwill",
    "description": "At 31 December 2019, goodwill amounted to EUR 3,470.5 million (previous year: EUR 2,865.6 million), representing 2.5% of the Group's assets. The company performs an impairment test annually and on an ad hoc basis if necessary, comparing the carrying amount with the recoverable amount of the cash-generating unit (CGU). The valuation is highly dependent on assumptions about future cash inflows and defined parameters, which can significantly impact the financial statements.",
    "auditResponse": "With the support of valuation experts, the auditors assessed the valuation models and the appropriateness of significant assumptions. They compared the discount rates with market and industry-specific reference values, verified the calculation methods, and compared expected cash flows with the current budget plan. They discussed assumptions with management, compared them with peer group companies, evaluated analyst reports, and assessed the reliability of past forecasts. Sensitivity analyses were conducted to determine the impact of potential changes in assumptions.",
    "fileName": "Pages from DBG-annual-report-2019.pdf"
  },
  {
    "id": 8,
    "company": "Deutsche Börse AG",
    "year": 2019,
    "auditor": "KPMG",
    "kamTitle": "Impairment of Other Intangible Assets",
    "description": "At 31 December 2019, other intangible assets amounted to EUR 1,040.9 million (previous year: EUR 952.7 million), representing 0.8% of the Group’s assets. These assets are subject to an annual impairment test, which is highly dependent on assumptions about future cash inflows and defined parameters. The correct determination of any need for impairment is crucial for the financial statements.",
    "auditResponse": "With the support of valuation experts, the auditors assessed the valuation models and the appropriateness of significant assumptions. They compared the assumptions with market and industry-specific reference values, verified the calculation method for discount rates, and compared expected cash flows with the current budget plan. They also discussed the assumptions with management, compared them with peer group companies, evaluated analyst reports, and performed sensitivity analyses to determine the potential need for impairment.",
    "fileName": "Pages from DBG-annual-report-2019.pdf"
  },
  {
    "id": 9,
    "company": "Deutsche Börse AG",
    "year": 2019,
    "auditor": "KPMG",
    "kamTitle": "Valuation of Provisions for Tax Risks",
    "description": "The Group operates in a variety of jurisdictions with different legal systems. The provisions for tax risks amounted to €265.9 million at 31 December 2019. The application of local and international tax regulations and tax relief is complex and associated with risks. The calculation of tax provisions requires the company to exercise judgment in the assessment of tax issues and to make estimates concerning tax risks. The result of these assessments is dependent to a large extent on assumptions concerning the future interpretation of tax situations in the course of tax audits, and also on decisions of the tax authorities and courts on similar tax situations, and is therefore subject to discretion. Any additional tax expenses can have a material impact on the statement of assets, liabilities, and financial performance of the Group.",
    "auditResponse": "With the support of our employees specialising in local and international tax law, we appraised the tax calculation, including the risk assessment, of Deutsche Börse AG. Where available, we have also acknowledged the assessment of external experts engaged by the company. We held meetings with the management as well as staff from the tax department in order to gain an understanding of the existing tax risks. We have assessed the competence and the objectivity of external experts and evaluated the documents they have produced. Furthermore, we evaluated the correspondence with the competent tax authorities and assessed the assumptions used to determine the tax provisions on the basis of our knowledge and experience of the current application of the relevant legal regulations by the authorities and the courts.",
    "fileName": "Pages from DBG-annual-report-2019.pdf"
  },
  {
    "id": 10,
    "company": "Deutsche Börse AG",
    "year": 2020,
    "auditor": "KPMG",
    "kamTitle": "Impairment of Other Intangible Assets",
    "description": "At 31 December 2020, other intangible assets amounted to EUR 1,255 million (previous year: EUR 1,041 million), representing 0.8% of the Group’s assets. These assets are subject to an annual impairment test, which is highly dependent on assumptions about future cash inflows and defined parameters. The correct determination of any need for impairment is crucial for the financial statements.",
    "auditResponse": "With the support of valuation experts, the auditors assessed the valuation models and the appropriateness of significant assumptions. They compared the assumptions with market and industry-specific reference values, verified the calculation method for discount rates, and compared expected cash flows with the current budget plan. They also discussed the assumptions with management, compared them with peer group companies, evaluated analyst reports, and performed sensitivity analyses to determine the potential need for impairment.",
    "fileName": "Pages from DBG-annual-report-2020.pdf"
  },
  {
    "id": 11,
    "company": "Deutsche Börse AG",
    "year": 2020,
    "auditor": "KPMG",
    "kamTitle": "Impairment Testing of Goodwill",
    "description": "At 31 December 2020, goodwill amounted to EUR 3,958 million (previous year: EUR 3,471 million), representing 2.6 per cent of the Group's assets at 31 December 2019. The company performs an impairment test on goodwill at least annually and on an ad hoc basis if necessary. The impairment test involves comparing the carrying amount with the recoverable amount of the cash-generating unit (CGU), which is determined based on the value in use or fair value less costs of disposal. The results of these valuations are highly dependent on assumptions about future cash inflows and defined parameters, making them subject to discretion and potentially having a material impact on the financial statements.",
    "auditResponse": "With the support of valuation experts, we assessed the valuation models and the appropriateness of significant assumptions related to valuation parameters. We compared the assumptions used in determining the discount rates with market and industry-specific reference values and verified the calculation method. We compared the expected cash inflows and outflows with the current budget plan approved by management. We discussed the assumptions with management, compared them with peer group companies, evaluated analyst reports, and appraised the reliability of past forecasts. We performed sensitivity analyses to determine the potential need for impairment under realistic changes in assumptions.",
    "fileName": "Pages from DBG-annual-report-2020.pdf"
  },
  {
    "id": 12,
    "company": "Deutsche Börse AG",
    "year": 2021,
    "auditor": "PwC",
    "kamTitle": "Assessment of Certain Legal Risks",
    "description": "The companies of the Deutsche Börse Group are exposed to certain legal risks, including legal disputes involving Clearstream Banking S.A. with the Iranian Central Bank, an action by the insolvency administrator for the assets of AirBerlin PLC i.I., and an investigation relating to securities transactions by market participants beyond the dividend date (cum/ex transactions). The determination of whether a provision should be recognized to cover these risks is highly uncertain.",
    "auditResponse": "As part of our audit, we examined the underlying documents to the above-mentioned legal disputes and proceedings, analyzed the legal assessment of Deutsche Börse Group, and assessed the executive directors' estimates with the assistance of our own specialists. We held regular meetings with the Company’s legal department to receive updates on current developments and understand the reasons for the corresponding estimates of the outcomes of the proceedings. We obtained external legal confirmations and assessed legal opinions prepared by external attorneys as of the balance sheet date.",
    "fileName": "Pages from DBG-annual-report-2021.pdf"
  },
  {
    "id": 13,
    "company": "Deutsche Börse AG",
    "year": 2022,
    "auditor": "PwC",
    "kamTitle": "Assessment of Certain Legal Risks",
    "description": "The company is exposed to significant legal risks, including litigation by Clearstream Banking S.A. against the Central Bank of Iran for USD 4.9 billion, a claim by the insolvency administrator of Air Berlin PLC i.I. against Clearstream Banking AG for € 498 million, and an investigation into cum ex transactions. The assessment of whether and in what amount to recognize provisions for these risks is highly uncertain.",
    "auditResponse": "As part of our audit, we reviewed the underlying documents, considered the legal disputes and proceedings, and followed the company's legal assessments. We assessed the legal representatives' assessments with the help of our own specialists, held regular discussions with the legal departments, and obtained external legal confirmations and legal opinions from external lawyers. We concluded that the assessments and their presentation in the consolidated financial statements are sufficiently substantiated and documented.",
    "fileName": "Pages from DBG-annual-report-2022.pdf"
  },
  {
    "id": 14,
    "company": "Deutsche Börse AG",
    "year": 2022,
    "auditor": "PwC",
    "kamTitle": "Recoverability of goodwill and other intangible assets",
    "description": "The company's consolidated financial statements include significant amounts of goodwill and other intangible assets, totaling €7,856.3 million (93% of consolidated equity). These assets are tested annually or on an ad hoc basis for impairment. The impairment test involves comparing the carrying amount of cash-generating units (CGUs) with their recoverable amount, which is typically determined based on fair value less costs to sell, using discounted cash flow models. The valuation is highly dependent on assumptions about future cash flows, discount rates, growth rates, and other factors, making it subject to considerable uncertainty.",
    "auditResponse": "As part of the audit, the methodology for the impairment test was traced. A risk-oriented approach was taken, involving valuation specialists to compare the future cash flows used in the calculation with the Group’s approved medium-term plan. This included analyzing key planning assumptions, comparing plans with analysts’ estimates, and conducting plan-actual and plan-plan analyses. The audit also assessed the consideration of corporate function costs, the appropriateness of growth assumptions after the forecast period, and the weighted average cost of capital. Sensitivity analyses were replicated and performed for CGUs with low excess coverage. The audit concluded that the carrying amounts of the CGUs are covered by the discounted future cash flows, and the valuation methods, parameters, and assumptions are in line with expectations.",
    "fileName": "Pages from DBG-annual-report-2022.pdf"
  },
  {
    "id": 15,
    "company": "Deutsche Börse AG",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Accounting for the acquisition of SimCorp A/S",
    "description": "Deutsche Börse Aktiengesellschaft acquired the majority of shares in the software service provider SimCorp A/S, Copenhagen, Denmark, through a public takeover bid effective from 29 September 2023. Following further share purchases and the implementation of a squeeze-out under stock corporation law, the company held 100% of the shares in SimCorp as at the balance sheet date. The acquisition was recognised as a business combination in accordance with IFRS 3 using the acquisition method. The purchase price allocation had not yet been finalised as at the reporting date, as it was not yet possible to conclusively determine the tax items and intangible assets in particular.",
    "auditResponse": "We analysed the adjustment of the groups of cash-generating units at whose level goodwill is monitored, which was carried out as part of the SimCorp acquisition. We assessed the disclosures required by IFRS 3. Overall, we were able to satisfy ourselves that the accounting treatment of the business combination was appropriate, that the estimates and assumptions made by the executive directors were reasonable and adequately substantiated, and that the relevant disclosures in the notes were made in accordance with IFRS 3.",
    "fileName": "Pages from DBG-annual-report-2023.pdf"
  },
  {
    "id": 16,
    "company": "Deutsche Börse AG",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Assessment of certain legal risks",
    "description": "The company is exposed to certain legal risks, including legal disputes of Clearstream Banking S.A. in connection with the Central Bank of Iran, claims for restitution and damages against the Central Bank of Iran in the amount of USD 4.9 billion (plus interest), and claims by other groups of plaintiffs, including a claim by the insolvency administrator of Air Berlin PLC i.L. against Clearstream Banking AG for payment of around €498 million and an investigation relating to securities transactions by market participants over the dividend record date (cum-ex transactions).",
    "auditResponse": "As part of our audit, we inspected the underlying documents relating to the above-mentioned legal disputes and proceedings and analysed the legal assessments of Deutsche Börse Group. We held regular discussions with the legal departments of the companies to understand current developments and the reasons that led to the corresponding assessments of the outcome of the proceedings. We also obtained external lawyers' confirmations and analysed legal opinions from external lawyers.",
    "fileName": "Pages from DBG-annual-report-2023.pdf"
  },
  {
    "id": 17,
    "company": "Deutsche Börse AG",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Recoverability of goodwill and other intangible assets",
    "description": "Goodwill and other intangible assets with definite and indefinite useful lives totalling € 11,248.6 million (116.4 % of Group equity) are reported under the balance sheet item 'Intangible assets'. The other intangible assets relate particularly to stock exchange licences, brand names, and customer relationships. Goodwill and other intangible assets with an indefinite useful life are tested for impairment annually or on an ad hoc basis, while other intangible assets with a definite useful life are tested for impairment on an ad hoc basis.",
    "auditResponse": "As part of our audit, we first analysed the methodology used to perform the impairment test. In a risk-oriented selection, with the involvement of our valuation specialists, we compared the future cash flows used in the calculation with the Group’s approved medium-term planning and additional planning documents for the respective (groups of) cash-generating units. We assessed the appropriateness of these plans, particularly by analysing the key planning assumptions, comparing the plans with analyst estimates, and performing plan-actual and plan-plan analyses. We also assessed the appropriate consideration of the costs of Group functions, the appropriateness of the growth assumptions after the forecast period, and the assumed weighted average cost of capital. We reviewed the sensitivity analyses prepared by the company to account for forecast uncertainties. The result of this valuation is highly dependent on the estimates of the executive directors with regard to future cash flows, the discount rate used, the growth rate, and other assumptions, and is therefore subject to considerable uncertainty.",
    "fileName": "Pages from DBG-annual-report-2023.pdf"
  },
  {
    "id": 18,
    "company": "Deutsche Börse AG",
    "year": 2024,
    "auditor": "PwC",
    "kamTitle": "Assessment of Legal Risks",
    "description": "The company is exposed to certain legal risks, including legal proceedings by Clearstream Banking S.A. and the insolvency administrator of Air Berlin PLC. These risks are complex and subject to significant uncertainties, potentially impacting the net assets, financial position, and results of operations of the Group.",
    "auditResponse": "We inspected the underlying documents relating to the legal disputes, verified the legal assessments of Deutsche Börse Aktiengesellschaft, and held regular discussions with the legal departments. We obtained external legal confirmations and assessed legal opinions from external lawyers.",
    "fileName": "Pages from DBG-annual-report-2024.pdf"
  },
  {
    "id": 19,
    "company": "Deutsche Börse AG",
    "year": 2024,
    "auditor": "PwC",
    "kamTitle": "Recoverability of goodwill and other intangible assets",
    "description": "In the company’s consolidated financial statements, goodwill and other intangible assets with a definite and indefinite useful life totaling €11,323.9 million (105.1% of consolidated equity) are reported under the 'Intangible assets' item. The other intangible assets relate in particular to stock exchange licenses, brand names, and customer relationships. Goodwill and other intangible assets with indefinite useful lives are tested for impairment by the company once a year or as circumstances require, while other intangible assets with definite useful lives are tested for impairment as circumstances require in order to determine any possible need for impairment.",
    "auditResponse": "As part of our audit, we first verified the methodical approach for conducting the impairment test. In a risk-oriented selection, we involved our valuation specialists and, after comparing the future cash flows used in the calculation with the approved medium-term planning of the group, we assessed the reasonableness of the assumptions used in the impairment test.",
    "fileName": "Pages from DBG-annual-report-2024.pdf"
  },
  {
    "id": 20,
    "company": "Euronext N.V.",
    "year": 2015,
    "auditor": "PwC",
    "kamTitle": "Fair Value Measurement of Equity Investments",
    "description": "Euronext owns a direct interest of 3.26% and an indirect interest of 1.49% in Euroclear plc valued at €97 million, and a 2.31% interest in LCH.Clearnet Group Limited plc valued at €18 million. These interests are classified as available-for-sale financial assets with remeasurement to fair value through Other Comprehensive Income. The determination of the fair value involves significant judgment as the shares are not traded on an active market.",
    "auditResponse": "We assessed management’s valuation and challenged the key assumptions involving our valuation specialists. We independently developed expectations for the key assumptions driving management’s analysis, particularly on long-term growth rates, cost of equity, sample of peers used, and discount percentage used for lack of marketability. We concluded management’s valuation to be acceptable.",
    "fileName": "Pages from EURONEXT_Annual_2015.pdf"
  },
  {
    "id": 21,
    "company": "Euronext N.V.",
    "year": 2015,
    "auditor": "PwC",
    "kamTitle": "New Systems Implementation",
    "description": "As of 1 January 2015, the company implemented a new IT system for market data activities, followed by the implementation of a new ERP system serving as the key financial application as of 1 August 2015. At the same time, the company revisited the related parts of its internal control framework. Segregation of duties (SoD) were not fully implemented by year-end, and management put in place compensating controls to remediate the related risks.",
    "auditResponse": "We obtained an understanding of IT general controls to design appropriate audit procedures. We tested the relevant IT general controls and the data migration. We expanded our audit procedures to specifically address the risks relating to the SoD issues by testing these compensating controls and performing additional substantive testing.",
    "fileName": "Pages from EURONEXT_Annual_2015.pdf"
  },
  {
    "id": 22,
    "company": "Euronext N.V.",
    "year": 2015,
    "auditor": "PwC",
    "kamTitle": "Restructuring Provision",
    "description": "A provision of €22 million has been recognized as of 31 December 2015 in relation to two French restructuring plans. Both plans are voluntary and were agreed by the Company with the relevant labor unions in November 2015 and January 2016. The restructuring provisions are material to the financial statements and require significant management judgment.",
    "auditResponse": "Our audit procedures included challenging and testing the assumptions made by management concerning their calculation of the restructuring provision. We tested the assumptions based on supporting documentation such as approved restructuring plans, communication to the Works Council and personnel, and benchmarks observed in other French companies. We reconciled the data used by management in their calculation of the restructuring provision to payroll data that were tested by us as part of our audit procedures. We were assisted by our HR and legal experts. We concur with management’s position as set out in the financial statements.",
    "fileName": "Pages from EURONEXT_Annual_2015.pdf"
  },
  {
    "id": 23,
    "company": "Euronext N.V.",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Completeness and accuracy of revenue",
    "description": "Revenue of €496 million consists of Listing, Trading, Market data, Post trade, and Market Solutions and other revenue, generally characterized by high volumes of transactions and relatively low value per transaction. The invoicing and recognition of revenue is highly dependent on automated systems and processes.",
    "auditResponse": "We obtained an understanding of IT general controls and automated controls, tested these controls, specifically addressed segregation of duties and potential conflicts, requested external confirmations to substantiate the revenue recognized, performed tests of details on selected revenue transactions, and gained an understanding of the process around testing of customer self-reporting.",
    "fileName": "Pages from EURONEXT_Annual_2016.pdf"
  },
  {
    "id": 24,
    "company": "Euronext N.V.",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Implications of the move of the UK technology operations from Belfast to Porto",
    "description": "Euronext is in the process of moving its UK technology operations from Belfast to Porto. During 2016, charges of €2.2 million have been recorded in the income statement and a provision of €1.2 million has been recognized as at 31 December 2016 in relation to the Belfast restructuring plan.",
    "auditResponse": "We challenged the assumptions concerning the identification and calculation of restructuring charges, potential impairment of assets, and tax implications. We tested the assumptions through supporting documentation such as approved restructuring plans, communication to personnel, and reconciling with payroll data.",
    "fileName": "Pages from EURONEXT_Annual_2016.pdf"
  },
  {
    "id": 25,
    "company": "Euronext N.V.",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Valuation of available-for-sale financial assets",
    "description": "As of 31 December 2016, Euronext owns both a direct and an indirect interest in Euroclear Plc and LCH.Clearnet Group Limited Plc. The determination of the fair value involves significant management judgment and assumptions as the shares are not traded on an active market.",
    "auditResponse": "We assessed management’s valuation, challenged the key assumptions, independently developed expectations for the key assumptions, compared the outcome of our independently developed expectations with management’s key assumptions, and concluded management’s valuation to be acceptable.",
    "fileName": "Pages from EURONEXT_Annual_2016.pdf"
  },
  {
    "id": 26,
    "company": "Euronext N.V.",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for the acquisition of businesses",
    "description": "During 2017 Euronext acquired majority interests in a number of companies. Total considerations were EUR 176 million, of which EUR 19 million is deferred or contingent. The acquisitions have been included in the consolidated financial position and results of Euronext from the moment control was obtained. Based on the purchase price allocations performed, with the help of external valuators, separately identifiable intangible assets of € 67 million and goodwill of € 122 million have been recognized. Accounting for business combinations involves a number of judgments concerning, among others, the identification of intangible assets, the choice of valuation techniques and the allocation to cash generating units. The use of different techniques and assumptions could produce significantly different estimates. Given the relative size of the amounts involved and the inherent complexity, we consider the accounting for acquisition of businesses as a key audit matter.",
    "auditResponse": "We gained an understanding of the material business acquisitions and assessed whether the correct accounting treatment has been applied. Furthermore, we tested the considerations paid and the identification and valuation of the identifiable tangible and intangible assets acquired, as well as the liabilities and non-controlling interests resulting from the acquired majority stakes. We have tested whether the accounting treatment is in line with IFRS 3. We have engaged our valuation specialists to evaluate the methodology and assumptions applied by Euronext in the valuation of the separately identifiable intangible assets, in particular the brand name, customer relations, and software platforms. We evaluated whether the assumptions used for the purpose of valuing acquired intangible assets were consistent with what a market participant would use, challenged the key assumptions (for example discount rate and longevity of acquired client relationships) against available market data and tested key data inputs to source records. We also performed sensitivity analysis to determine the impact of changes in the key assumptions, both individually and in aggregate. We have evaluated the completeness and appropriateness of the disclosure related to business combinations, included in note 5 within the financial statements, to assess compliance with the disclosure requirements, as included in EU-IFRS.",
    "fileName": "Pages from EURONEXT_Annual_2017.pdf"
  },
  {
    "id": 27,
    "company": "Euronext N.V.",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and continuity of the information technology and systems",
    "description": "A proper IT infrastructure ensures the reliability and continuity of Euronext’s business processes and financial reporting. Euronext continuously invests in improving its IT environment and systems to meet new regulatory requirements under MIFID2 and to develop a new core trading platform. The role of external reports and the increased granularity of financial and non-financial data are important to stakeholders and supervisors, requiring high-quality data and an adequate IT environment.",
    "auditResponse": "We tested the IT general controls at Euronext related to logical access and change management and application controls embedded in the automated data processing systems. We also assessed the reliability and continuity of the IT environment and the possible impact of changes during the year resulting from internal transformation activities. We concluded that the reliability and continuity of the automated data processing systems are reasonable.",
    "fileName": "Pages from EURONEXT_Annual_2017.pdf"
  },
  {
    "id": 28,
    "company": "Euronext N.V.",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Valuation of available for sale financial assets",
    "description": "Euronext holds a direct and indirect minority interest in Euroclear Plc. This interest is classified as available for sale with re-measurement to fair value through the other comprehensive income component of equity. Euroclear is a non-listed company, and Euronext applies internal models to measure the fair value of its interests. During 2017, the company enhanced its valuation model framework with techniques driven by return on equity and expected dividend growth rates, regression approaches, and trading multiples as control methods. Following a share swap transaction, Euronext derecognized its minority interest in LCH Group Ltd. and recognized an interest in LCH SA, which is now classified as an investment in an associate.",
    "auditResponse": "Our audit procedures included assessing the methodology and appropriateness of the valuation models against generally accepted market practice and inputs used to value the available for sale financial assets. We used our valuation specialists to independently assess the valuations performed and evaluated the completeness and appropriateness of the disclosures related to available-for-sale financial assets and investments in associates.",
    "fileName": "Pages from EURONEXT_Annual_2017.pdf"
  },
  {
    "id": 29,
    "company": "Euronext N.V.",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for the Acquisition of Businesses",
    "description": "During 2018, Euronext acquired all shares of the Irish Stock Exchange plc and major stakes in Commcise Ltd and InsiderLog AB. Total considerations were EUR 215 million, of which EUR 4 million is a contingent earn-out payment. The acquisitions have been included in the consolidated financial position and results of Euronext from the moment control was obtained. Based on the purchase price allocations performed, with the support of valuation experts, separately identifiable intangible assets of € 26 million and goodwill of € 165 million have been recognized. Accounting for business combinations involves a number of judgments concerning the identification of intangible assets, the choice of valuation techniques and underlying assumptions, as well as the allocation to cash generating units. The use of different techniques and assumptions could produce significantly different estimates.",
    "auditResponse": "We gained an understanding of the material business acquisitions and made an assessment of the process that management has undertaken to determine the allocation of the purchase price, including but not limited to understanding the scope of work, assessing the qualifications and competence of the valuation experts, and evaluating whether the correct accounting treatment has been applied in line with IFRS 3. We tested the considerations paid and the identification and valuation of the identifiable tangible and intangible assets acquired, as well as the liabilities and non-controlling interests resulting from the acquired majority stakes. We have audited the fair value measurements prepared by management and their valuation experts, including assessing the key valuation assumptions used and engaging our valuation specialists to evaluate the methodology and assumptions applied by Euronext in the valuation of separately identifiable intangible assets, in particular the customer relations. Furthermore, we benchmarked key data inputs used in the valuation model such as longevity of acquired customer relationships and reviewed the reasonableness of the amortization period applied. Finally, we have evaluated the appropriateness of the disclosure related to business combinations, included in notes 5 and 20 to the financial statements, to assess compliance with the disclosure requirements, as included in EU-IFRS.",
    "fileName": "Pages from EURONEXT_Annual_2018.pdf"
  },
  {
    "id": 30,
    "company": "Euronext N.V.",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Fair Value Measurement of Financial Investments",
    "description": "Euronext holds a direct and an indirect minority interest in Euroclear plc. This interest is classified as a financial asset at fair value through other comprehensive income. As Euroclear is a non-listed company, Euronext applies an internally developed model to estimate the fair value, which since early 2017 is based on valuation techniques that are driven by return on equity and dividend growth rates of comparable regulated entities and regression approaches and trading multiples as control methods. In 2018 the valuation method was amended to a weighted approach, that takes into account the outcome of the internal model and recent market observable transfers of Euroclear shares, less a discount for illiquidity. As a result, Euronext revalued its interest by EUR 45 million, increasing the fair value to EUR 188 million per 31 December 2018. The determination of the fair value of the interest in this company involves significant management judgment and assumptions as the shares are not traded on an active market and certain unobservable inputs are used. The use of different valuation techniques and assumptions could produce significantly different estimates of fair value.",
    "auditResponse": "Our audit procedures comprised, among others, an assessment of the methodology and the appropriateness of the valuation model against generally accepted market practice and inputs used to value the investments. Further, we used our valuation specialists to independently assess the valuation performed. As part of these audit procedures, we assessed the accuracy of key inputs used in the valuation such as the market observable transfers, the return on equity, and expected dividend growth rates. Finally, we evaluated the completeness and appropriateness of the disclosure related to financial assets at fair value through other comprehensive income as included in note 19 to the financial statements, to assess compliance with the disclosure requirements, as included in EU-IFRS.",
    "fileName": "Pages from EURONEXT_Annual_2018.pdf"
  },
  {
    "id": 31,
    "company": "Euronext N.V.",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Implementation of IFRS 15 Revenue Recognition",
    "description": "On 1 January 2018, a new accounting standard for revenue recognition (IFRS 15) became effective. It requires the recognition of fees for initial and ongoing listing services over time, whereas previously those fees were recognized at a point in time. Euronext applied the modified retrospective approach under IFRS 15 and adjusted opening equity by EUR 50 million (net of tax) and included a transitional disclosure on the first-time adoption as part of note 3 'Changes in accounting policies and disclosures' to the annual financial statements. As permitted under the transition provisions, the 2017 comparative information has not been restated to comply with IFRS 15. The new standard requires judgment and the implementation resulted in a significant impact on the opening equity as at 1 January 2018.",
    "auditResponse": "As IFRS 15 was adopted at the start of the year, we performed audit procedures on the opening balances to gain assurance on the transition from the previous standard. This included evaluating the accounting interpretations for compliance with IFRS 15 and testing the adjustments and disclosures made with regard to the implementation. An impact assessment was executed by Euronext to determine the impact of the new standard on each of the distinctive revenue streams and the related amortization periods. We assessed the result of these procedures to ensure the adequacy of the first-time adoption of IFRS 15. We also performed substantive procedures over data and calculations in which we specifically validated the appropriateness of the applied amortization periods for listing revenues. Finally, we assessed the accuracy of the IFRS 15 transitional disclosures in note 3 'Changes in accounting policies and disclosures' and whether these are in compliance with the requirements of EU-IFRS.",
    "fileName": "Pages from EURONEXT_Annual_2018.pdf"
  },
  {
    "id": 32,
    "company": "Euronext N.V.",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and Continuity of the Information Technology and Systems and IT Transformation",
    "description": "A proper IT infrastructure ensures the reliability and continuity of Euronext’s business processes and financial reporting. Euronext continuously makes investments to further improve its IT environment and IT systems. As described in the other information under the section operational risk, Euronext upgraded its core trading platform with a new enhanced, multi-market system OPTIQ. In April and June 2018, the OPTIQ trading engine went live for fixed income and cash markets. The role of external reports and the increased granularity of financial and non-financial data are important to stakeholders and supervisors, and require high-quality data and an adequate IT environment. For our 2018 audit, the implementation of OPTIQ is important as this core system captures transactions and ultimately feeds the financial reporting systems.",
    "auditResponse": "We tested the IT general controls at Euronext related to logical access and change management and application controls embedded in the automated data processing systems, where we relied upon for financial reporting. In some areas, we performed additional procedures on access management for the related systems. We also assessed the reliability and continuity of the IT environment and the possible impact of changes during the year resulting from the internal transformation activities. In addition, our audit procedures consisted of assessing the developments in the IT infrastructure and analyzing the impact on the IT organization. Specifically for the implementation of OPTIQ, we analyzed and reviewed the project governance. Furthermore, we tested the design and operating effectiveness of the new business and IT controls related to the completeness and integrity of the feed of data flows into the fee calculation system and reviewed the post-migration analyses of incidents. We assessed the reliability and continuity of automated data processing only to the extent necessary within the scope of the audit of the financial statements.",
    "fileName": "Pages from EURONEXT_Annual_2018.pdf"
  },
  {
    "id": 33,
    "company": "Euronext N.V.",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for the Acquisition of Oslo Børs VPS",
    "description": "In 2019, Euronext acquired all shares of Oslo Børs VPS for €693 million. The acquisition involved significant judgments in identifying intangible assets and allocating the purchase price, leading to the recognition of €252 million in intangible assets and €503 million in goodwill. The complexity and size of these amounts make this a key audit matter.",
    "auditResponse": "The audit team gained an understanding of the acquisition process, assessed the qualifications of external valuation experts, and tested the identification and valuation of tangible and intangible assets. They also evaluated the fair value measurements and assumptions used, and benchmarked key data inputs. The audit concluded that the identification and measurement of goodwill and identifiable assets were reasonable, and the disclosures were in accordance with EU-IFRS.",
    "fileName": "Pages from EURONEXT_Annual_2019.pdf"
  },
  {
    "id": 34,
    "company": "Euronext N.V.",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext holds a minority interest in Euroclear S.A./N.V., classified as a financial asset at fair value through other comprehensive income. The fair value is estimated using an internally developed model based on a weighted approach involving return on equity, dividend growth rate, and cost of capital. In 2019, the fair value increased by €9 million to €197 million. The use of different valuation techniques and assumptions could significantly affect the fair value estimate.",
    "auditResponse": "The audit team assessed the methodology and appropriateness of the valuation model, tested key inputs, and used their own valuation specialists to independently evaluate the valuation. The audit concluded that the valuation techniques and key inputs were reasonable, and the disclosures were in line with EU-IFRS.",
    "fileName": "Pages from EURONEXT_Annual_2019.pdf"
  },
  {
    "id": 35,
    "company": "Euronext N.V.",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and Continuity of the IT Environment",
    "description": "Euronext's activities and financial reporting are highly dependent on the reliability and continuity of its IT environment. Effective general IT controls are crucial for ensuring the integrity and continuity of IT systems and the operating effectiveness of automated controls. The IT environment is constantly changing due to process improvement and digitization, posing a risk to the operation of generic IT controls.",
    "auditResponse": "With the help of IT audit specialists, the audit team assessed the reliability and continuity of the IT environment, performed walkthrough procedures on IT processes, and tested the operating effectiveness of general IT controls. Additional substantive procedures were performed on access management, and the impact of changes during the year was assessed. The audit concluded that the IT controls were adequate and operating effectively.",
    "fileName": "Pages from EURONEXT_Annual_2019.pdf"
  },
  {
    "id": 36,
    "company": "Euronext N.V.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Acquired Businesses",
    "description": "During 2020, Euronext acquired all shares of VP Securities AS and a 60% interest in Nord Pool AS. The acquisitions have been included in the consolidated financial position and results of Euronext from the moment control was obtained. Accounting for business combinations involves a number of judgments, such as the identification of intangible assets, the choice of valuation techniques and underlying assumptions, as well as the allocation to cash-generating units.",
    "auditResponse": "We gained an understanding of the material business acquisitions and made an assessment of the process that management has undertaken to determine the allocation of the purchase price. We tested the considerations paid and the identification and valuation of the identifiable tangible and intangible assets acquired, particularly the customer relations and software. We audited the fair value measurements prepared by management and their valuation experts, including assessing the key valuation assumptions used and engaging our valuation specialists to evaluate the methodology and assumptions applied by Euronext.",
    "fileName": "Pages from EURONEXT_Annual_2020.pdf"
  },
  {
    "id": 37,
    "company": "Euronext N.V.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext holds a direct interest in Euroclear S.A. and an indirect minority interest in Euroclear S.A. through Sicovam Holding S.A. This investment is classified as a financial asset at fair value through other comprehensive income. Since 2018, a weighted approach is applied which is based on the return on equity, expected dividend growth rate (non-observable parameters) and cost of capital of comparable regulated entities and market observable transactions less a discount for illiquidity. In 2020, Euronext revalued its interest by EUR 7 million, increasing the fair value to EUR 204 million.",
    "auditResponse": "Our audit procedures comprised, among others, an evaluation of the methodology and the appropriateness of the valuation model for consistency and an assessment against generally accepted market practice and inputs used to value the investments. We used our valuation specialists to independently evaluate the valuation performed. As part of these audit procedures, we tested the reasonability of key inputs used in the valuation such as the market observable transfers, and the non-observable parameters, the return on equity and expected dividend growth rates.",
    "fileName": "Pages from EURONEXT_Annual_2020.pdf"
  },
  {
    "id": 38,
    "company": "Euronext N.V.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability, Availability and Continuity of the IT Environment",
    "description": "The activities and financial reporting of Euronext N.V. are highly dependent on the reliability and continuity of the IT environment. Effective general IT controls with respect to change management, logical access, infrastructure and operations, secure to a large extent the integrity and continuity of the IT systems as well as the operating effectiveness of the automated controls. The IT environment and the IT organization of Euronext N.V. are constantly changing in the context of process improvement, digitization, and occasional incident repair and remediation.",
    "auditResponse": "With the assistance of our IT audit specialists, we assessed the reliability, availability, and continuity of the IT environment to the extent necessary for the scope of our audit of the financial statements. We evaluated the design and implementation of the IT processes and tested the operating effectiveness of the general IT controls. In some areas, we performed additional substantive procedures on access management, cybersecurity, security event monitoring, and segregation of duties for the related systems. We also assessed the possible impact of changes during the year resulting from the internal transformation activities and remedial measures on the operating effectiveness of general IT controls and the automated controls.",
    "fileName": "Pages from EURONEXT_Annual_2020.pdf"
  },
  {
    "id": 39,
    "company": "Euronext N.V.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "The Impact of the COVID-19 Pandemic",
    "description": "The developments around the COVID-19 pandemic have a profound impact on society and the economy, affecting the operational and financial performance of organizations and the assessment of the ability to continue as a going concern. The situation continues to evolve, giving rise to inherent uncertainty.",
    "auditResponse": "We designed and performed specific audit procedures responsive to the potential impact. For internal controls testing, we inspected the monitoring conducted by the control functions of Euronext and, through data analyses, performed incremental procedures especially on outgoing payments. We evaluated the disclosures in the universal registration document and the financial statements related to the impact of the COVID-19 pandemic.",
    "fileName": "Pages from EURONEXT_Annual_2020.pdf"
  },
  {
    "id": 40,
    "company": "Euronext N.V.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Acquired Businesses",
    "description": "During 2021, Euronext N.V. acquired all shares of London Stock Exchange Group Holdings Italia S.p.A. (Borsa Italiana Group). Considerations paid amounted to EUR 4,447 million. The acquisition has been included in the consolidated financial position and results of Euronext N.V. from 29 April 2021, the moment control was obtained. Based on the purchase price allocations performed by management, with the support of external valuation experts, separately identifiable intangible assets of €1,844 million and goodwill of €2,815 million have been recognized. Accounting for business combinations involves a number of judgments, such as the identification of intangible assets, the choice of valuation techniques and underlying assumptions, as well as the allocation to cash generating units. The use of different techniques and assumptions could produce significantly different estimates.",
    "auditResponse": "We gained an understanding of the business acquisition and made an assessment of the process that management has undertaken to determine the allocation of the purchase price, including understanding the scope of work, assessing the qualifications and competence of the external valuation experts and evaluating whether the correct accounting treatment has been applied in accordance with IFRS 3 'Business Combinations'. We tested the consideration paid and the related financing obtained through the incremental bond and share issues. Also, we evaluated the identification and valuation of the identifiable tangible and intangible assets acquired, in particular the customer relations, software, and brand names. We have audited the fair value measurements prepared by management and their valuation experts, including assessing the key valuation assumptions used and engaged our own valuation specialists to evaluate the methodology and assumptions applied by Euronext N.V. Furthermore, we benchmarked key data inputs used in the valuation model such as the EBIT margin, longevity of acquired customer relationships, and reviewed the reasonableness of the amortization period applied. Finally, we have evaluated the appropriateness of the disclosures related to business combinations. In particular, we evaluated the disclosures on provisional amounts for the items for which the accounting may be adjusted retrospectively.",
    "fileName": "Pages from EURONEXT_Annual_2021.pdf"
  },
  {
    "id": 41,
    "company": "Euronext N.V.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Clearing Assets, Liabilities and Revenues",
    "description": "As part of the acquisitions in Italy, Euronext N.V. has become owner of the central counter party clearing activities of Cassa di Compensazione e Garanzia S.p.A. (CC&G), based in Rome. These activities result in short-term assets and liabilities of in total €137.7 billion at 31 December 2021, which comprise clearing member receivables and payables, as well as debt instruments and repurchase agreements. Most of these balances are accounted for at amortized costs, while the investments of participants' liquidity are measured at fair value through other comprehensive income. Certain of the clearing assets and liabilities are presented on a net basis on the balance sheet where the EU-IFRS netting criteria are met. All non-commission income and expense is presented as net treasury income on the face of the income statement and disclosed on a gross basis in note 8.2 of the financial statements. CC&G has partially invested the members' liquidity in sovereign debt securities. The related liquidity, interest rate, and credit risks have been disclosed in note 37 of the financial statements. Given the magnitude of the amounts involved, the specific accounting rules on measurement, and the distinctive risks related to the clearing activities, as well as the first-time disclosure of these items in the 2021 financial statements, we consider this as a key audit matter.",
    "auditResponse": "Our audit procedures included, amongst others, evaluating the appropriateness of Euronext N.V.'s accounting policies regarding the clearing activities in accordance with IFRS 9 'Financial Instruments' and the offsetting requirements in IAS 32. Also, we gained an understanding of the clearing transactions of CC&G and evaluated the design and tested operating effectiveness of internal controls across the processes relevant to the recording of clearing assets, liabilities, and revenues. Furthermore, we reviewed the participant collateral procedures, the risk management processes, and the model governance in place, and we performed substantive procedures to test data accuracy and completeness, key reconciliations, and the application of bilateral counterparty. Finally, we evaluated the completeness and accuracy of the disclosures relating to the clearing activities to evaluate compliance with disclosure requirements included in EU-IFRS, as well as industry practices. In particular, we evaluated that these disclosures adequately convey the risks related to the clearing assets and liabilities.",
    "fileName": "Pages from EURONEXT_Annual_2021.pdf"
  },
  {
    "id": 42,
    "company": "Euronext N.V.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext N.V. holds a direct and an indirect minority interest in Euroclear S.A. This investment is classified as a financial asset at fair value through other comprehensive income. Since 2018, a weighted approach is applied which is based on the return on equity, expected dividend growth rate (non-observable parameters), and cost of capital of comparable regulated entities and market observable transactions less a discount for illiquidity. In 2021, Euronext N.V. revalued its interest by €3 million, increasing the fair value to €207 million. The determination of the fair value of the interest in Euroclear involves significant management judgment and assumptions as certain unobservable inputs are used. The use of different valuation techniques and assumptions could produce significantly different estimates of fair value. Given the inherent subjectivity, we determined this a key matter for our audit.",
    "auditResponse": "Our audit procedures comprised, amongst others, evaluating the appropriateness of Euronext N.V.'s accounting policies related to the fair valuation of an interest in a non-listed company according to IFRS 9 'Financial Instruments' and IFRS 13 'Fair Value Measurement'. They included an evaluation of the methodology and the appropriateness of the valuation model for consistency and an assessment against generally accepted market practice and inputs used to value the investments. Further, we used our valuation specialists to independently evaluate the valuation performed. As part of these audit procedures, we tested the reasonability of key inputs used in the valuation such as the market observable transfers, and the non-observable parameters, the return on equity, and expected dividend growth rates. Finally, we evaluated the adequacy of the disclosures related to financial assets at fair value through other comprehensive income. In particular, we evaluated that disclosures adequately convey the degree of estimation uncertainty and the range of possible outcomes.",
    "fileName": "Pages from EURONEXT_Annual_2021.pdf"
  },
  {
    "id": 43,
    "company": "Euronext N.V.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and Continuity of the IT Environment",
    "description": "The activities and financial reporting of Euronext N.V. are highly dependent on the reliability and continuity of the IT environment. Effective general IT controls with respect to change management, logical access, infrastructure, and operations support the integrity and continuity of the IT systems as well as the operating effectiveness of the automated controls. As described in the risk management section 2 in the universal registration document, the IT environment and the IT organization of Euronext N.V. are constantly changing in the context of transformational projects, process improvements, and occasional incident repair and remediation. During these changes, there is a risk that the general IT control measures may not always operate as intended and, as a result, internal controls are ineffective. Therefore, we identified the reliability and continuity of the IT environment insofar in scope of our audit of the financial statements to be a key audit matter.",
    "auditResponse": "IT audit specialists are an integral part of the engagement team and assess the reliability and continuity of the IT environment to the extent necessary for the scope of our audit of the financial statements. In this context, we evaluated the design of the IT processes and tested the operating effectiveness of general IT controls, as well as application controls over data processing, data feeds, and interfaces where relevant for the financial reporting. In certain areas, we performed additional procedures on access management, cybersecurity, security event monitoring, and segregation of duties for the related systems. We also assessed the possible impact of changes in IT during the year resulting from internal transformation activities and remedial measures on the operating effectiveness of general IT controls and the automated controls. Where applicable, we tested internal controls related to cloud computing and third-party service providers. Our testing of the general IT controls and the other tests performed provided sufficient evidence to enable us to rely on the adequate and continued operation of the IT systems relevant for our audit of the financial statements.",
    "fileName": "Pages from EURONEXT_Annual_2021.pdf"
  },
  {
    "id": 44,
    "company": "Euronext N.V.",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Impairment of Goodwill and Other Purchased Intangible Assets",
    "description": "Euronext accounts for a significant amount of goodwill and customer relationships on its consolidated balance sheet. As of 31 December 2022, goodwill amounts to €4 billion and other intangible assets have a value of €2.2 billion, mostly consisting of acquired customer relationships. Management is required to perform annually an impairment test of goodwill. Where indicators of impairment of other intangible assets are identified, a detailed impairment test is performed. These impairment tests involve judgement in applying assumptions in the valuation models, including cash flow projections, revenue growth, discount rates, amortization periods for intangible assets, and customer retention rates.",
    "auditResponse": "Our audit procedures included evaluating the appropriateness of Euronext’s accounting policies related to the impairment testing in accordance with IAS 36, 'Impairment of assets'. We obtained an understanding of the impairment process, evaluated the design of internal controls in respect of impairment testing, and adopted a substantive audit approach. We performed substantive procedures, including the reconciliation of the data used in the impairment calculations and disclosures to source systems. With involvement of our own specialists, we evaluated the model used by Euronext and tested key inputs such as the discount rates and growth rates assigned to each of the cash generating units. We compared these key inputs to a range of economic and industry forecasts, assessed the accuracy of forecasts included in the model, and performed sensitivity analysis on the key assumptions. Finally, we evaluated the adequacy of the relevant disclosures made in the Financial Statements.",
    "fileName": "Pages from EURONEXT_Annual_2022.pdf"
  },
  {
    "id": 45,
    "company": "Euronext N.V.",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext holds a direct and an indirect minority interest in Euroclear S.A. This investment is classified as a financial asset at fair value through other comprehensive income. As Euroclear is a non-listed company, Euronext developed an internal model to estimate the fair value, which is based on the return on equity, expected dividend growth rate, and cost of capital of comparable regulated entities and market observable transactions less a discount for illiquidity. In 2022, Euronext revalued its total interest by €42 million, increasing the fair value to €249 million. The determination of the fair value of the interest in Euroclear involves significant management judgment and assumptions as certain unobservable inputs are used.",
    "auditResponse": "Our audit procedures included evaluating the appropriateness of Euronext’s accounting policies related to the fair valuation of an interest in a non-listed company according to IFRS 9, 'Financial Instruments' and IFRS 13, 'Fair value measurement'. We evaluated the methodology and the appropriateness of the valuation model for consistency and assessed it against generally accepted market practice and inputs used to value the investments. We obtained an understanding of the valuation process, evaluated the design and implementation of internal controls, and adopted a substantive audit approach. We used our valuation specialists to independently evaluate the valuation performed. As part of these audit procedures, we tested the reasonableness of key inputs used in the valuation, such as the market observable transfers and the non-observable parameters, the return on equity, and expected dividend growth rates. Finally, we evaluated the adequacy of the disclosures related to financial assets at fair value through other comprehensive income, particularly whether disclosures adequately convey the degree of estimation uncertainty and the range of possible outcomes.",
    "fileName": "Pages from EURONEXT_Annual_2022.pdf"
  },
  {
    "id": 46,
    "company": "Euronext N.V.",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Recognition of Internally Developed Software",
    "description": "The capitalization of expenses for internally developed software involves judgement in assessing the capitalization against the recognition criteria set out in IAS 38, 'Intangible assets'. Euronext’s accounting policy for capitalizing software development costs is disclosed in section 3, under H). (ii) 'Internally generated intangible assets'. The risk exists that expenses related to internally developed software are capitalized inappropriately.",
    "auditResponse": "We evaluated Euronext’s accounting policies related to the recognition of internally developed software in accordance with IAS 38, and whether assumptions and the criteria applied for capitalization are appropriate and have been applied consistently. We obtained an understanding of the recognition process, evaluated the design and implementation of internal controls, and adopted a substantive audit approach. We performed procedures in respect of the capitalized software development costs, including the reconciliation of the data used in the calculations and disclosures to source systems. For a sample of additions, we agreed amounts recognized to supporting documentation to confirm that the costs were incurred and the internally developed software meets the definition of an intangible asset and the recognition criteria of IAS 38. For all intangible assets, we tested the appropriateness of the amortization period based on historic trends of economic lives and management’s best estimate of future performance. Finally, we evaluated the adequacy of the relevant disclosures made in the Financial Statements.",
    "fileName": "Pages from EURONEXT_Annual_2022.pdf"
  },
  {
    "id": 47,
    "company": "Euronext N.V.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Impairment of goodwill and other purchased intangible assets",
    "description": "Euronext accounts for a significant amount of goodwill and customer relationships on its consolidated balance sheet. As of 31 December 2023, goodwill amounts to €4 billion and other purchased intangible assets have a value of €2 billion, mostly consisting of acquired customer relations with a finite useful life. Management performs an annual impairment test of goodwill and a detailed impairment test for other purchased intangible assets when indicators of impairment are identified. These impairment tests involve judgement in applying assumptions in the valuation models, including cash flow projections, revenue growth, discount rates, amortization periods for intangible assets, and customer retention rates.",
    "auditResponse": "Our audit procedures included evaluating the appropriateness of Euronext's accounting policies related to the impairment testing in accordance with IAS 36 'Impairment of assets'. We obtained an understanding of the impairment process, evaluated the design of internal controls, and adopted a substantive audit approach. We performed substantive procedures, including reconciling the data used in the impairment calculations to source systems. With the involvement of our specialists, we evaluated the model used by Euronext and tested key inputs such as discount rates and growth rates. We performed sensitivity analysis on key assumptions and evaluated the adequacy of the relevant disclosures.",
    "fileName": "Pages from EURONEXT_Annual_2023.pdf"
  },
  {
    "id": 48,
    "company": "Euronext N.V.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of financial assets at fair value through other comprehensive income",
    "description": "Euronext holds a direct and indirect minority interest in Euroclear S.A., which is classified as a financial asset at fair value through other comprehensive income. Euroclear is a non-listed company, and Euronext developed an internal model to estimate the fair value. In 2023, Euronext revalued its total interest by €12 million, increasing the fair value to €261 million. The determination of the fair value involves significant management judgment and assumptions, particularly for unobservable inputs.",
    "auditResponse": "Our audit procedures included evaluating the appropriateness of Euronext's accounting policies related to the fair valuation of an interest in a non-listed company according to IFRS 9 'Financial Instruments' and IFRS 13 'Fair Value Measurement'. We evaluated the methodology and the appropriateness of the valuation model, assessed the key inputs used in the valuation, and used our specialists to independently evaluate the valuation. We tested the reasonableness of key inputs and evaluated the adequacy of the disclosures related to financial assets at fair value through other comprehensive income.",
    "fileName": "Pages from EURONEXT_Annual_2023.pdf"
  },
  {
    "id": 49,
    "company": "Euronext N.V.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Recognition of internally developed software",
    "description": "The capitalization of expenses for internally developed software involves judgement in assessing the capitalization against the recognition criteria set out in IAS 38 'Intangible assets'. As of 31 December 2023, internally developed software capitalization amounts to €167 million. This includes investments related to the ongoing implementation of the trading platform Optiq at Borsa Italiana and the expansion of clearing activities to all Euronext markets. The recognition of internally developed software as an intangible asset is a key audit matter due to the judgement involved and the audit effort required.",
    "auditResponse": "We evaluated Euronext's accounting policies related to the recognition of internally developed software in accordance with IAS 38. We obtained an understanding of the recognition process, evaluated the design and implementation of internal controls, and adopted a substantive audit approach. We performed procedures in respect of the capitalized software development costs, including reconciling the data used in the calculations to source systems. For a sample of additions, we agreed amounts recognized to supporting documentation to confirm that the costs were incurred and met the recognition criteria of IAS 38. We tested the appropriateness of the amortization period and evaluated the adequacy of the relevant disclosures.",
    "fileName": "Pages from EURONEXT_Annual_2023.pdf"
  },
  {
    "id": 50,
    "company": "Euronext N.V.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Reliability and continuity of the IT environment",
    "description": "Euronext's activities and financial reporting are highly dependent on the reliability and continuity of the IT environment. Effective general IT controls support the integrity and continuity of electronic data processing and the operating effectiveness of automated controls. There is a risk that general IT control measures may not always operate as intended, leading to ineffective internal controls.",
    "auditResponse": "IT audit specialists assessed the reliability and continuity of the IT environment. We evaluated the design of IT processes, tested the operating effectiveness of general IT controls, and performed procedures on access management, cyber security, security event monitoring, and segregation of duties. We also assessed the impact of changes in IT during the year and tested internal controls related to cloud computing and third-party service providers where applicable.",
    "fileName": "Pages from EURONEXT_Annual_2023.pdf"
  },
  {
    "id": 51,
    "company": "Euronext N.V.",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Identity access management and change management",
    "description": "Euronext is highly dependent on its IT environment for the continuity of its operations. Inappropriate access or changes to an application or supporting infrastructure could compromise the continuity of Euronext's operations and the reliability of financial data.",
    "auditResponse": "Our audit approach relies to a large extent on automated controls. We tested the design, implementation, and, where appropriate, operating effectiveness of the general IT controls (GITC) and IT application controls (ITAC) related to identity access management and change management. Our tests provided sufficient evidence to rely on the adequate and continued operation of the IT systems for the purposes of our audit of the financial statements.",
    "fileName": "Pages from EURONEXT_Annual_2024.pdf"
  },
  {
    "id": 52,
    "company": "Euronext N.V.",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Measurement of Financial Assets at Fair Value Through Other Comprehensive Income",
    "description": "Euronext directly and indirectly owns Euroclear S.A., a non-listed company. Euronext uses an internal valuation model to estimate the fair value of this investment, which is recorded through other comprehensive income. The valuation model includes judgments and estimates such as the weighted approach and expected dividend growth rate, requiring significant auditor's attention.",
    "auditResponse": "The audit team performed substantive audit procedures, including assessing the reasonableness of input parameters in the model, involving a KPMG valuation specialist to evaluate the valuation methodologies and assumptions, calculating an independent expectation of the fair value, and assessing the adequacy of the Company's disclosure in note 20. Based on these procedures, the measurement of Euroclear was found to be reasonable and adequately disclosed.",
    "fileName": "Pages from EURONEXT_Annual_2024.pdf"
  },
  {
    "id": 53,
    "company": "Euronext N.V.",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Risk of impairment of goodwill and other purchased intangible assets",
    "description": "Euronext recognised a significant amount of goodwill and customer relations. The amounts recognised, the assumptions and sensitivities used to assess the recoverable amount are disclosed in note 18 of the consolidated financial statements. A potential risk of impairment exists, to the extent future developments negatively deviate from the assumptions applied during the acquisition of the group entities.",
    "auditResponse": "The auditors inspected relevant documents to understand management's assessment of the potential impact of climate-related risks and opportunities on the company's annual report and financial statements. They read minutes of the meetings of the Managing Board and Supervisory Board, and evaluated climate-related fraud risk factors and pressures for management to meet the climate targets. Based on the procedures performed, they found that climate-related risks have no material impact on the current financial statements under the requirements of IFRS-EU and no material impact on their key audit matters.",
    "fileName": "Pages from EURONEXT_Annual_2024.pdf"
  },
  {
    "id": 54,
    "company": "HKEX",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2016, the Group has goodwill of $13,167 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively “LME Group”) in 2012. The goodwill was allocated to groups of Cash Generating Units (“CGUs”) within the “Commodities” operating segment ($10,310 million) and “Clearing” operating segment ($2,857 million). A new CGU (‘China commodities CGU’) was included in the assessment this year. Significant judgement was involved in the key assumptions underlying the future cash flow projections, including expected trade volume and pricing within the CGUs in each of the operating segments. Other assumptions involved are the discount rates applied and growth rates applied to the period beyond the 5th year (‘terminal growth rate’).",
    "auditResponse": "Our audit procedures included testing management’s key controls on goodwill impairment assessment, assessing the methodology used to estimate the value in use of the respective groups of CGUs, evaluating the reasonableness of the WACCs and growth rates, comparing management’s assumptions to independent market data, industry forecasts, and historical average daily volume growth, evaluating the reasonableness of management’s key assumptions of the underlying cash flow projections, performing sensitivity analyses, and reviewing the appropriateness of disclosures. No material exceptions were noted.",
    "fileName": "Pages from HKEX_Annual_2016.pdf"
  },
  {
    "id": 55,
    "company": "HKEX",
    "year": 2016,
    "auditor": "PwC",
    "kamTitle": "Valuation, existence, accuracy and presentation of certain financial assets and liabilities",
    "description": "The majority of the Group’s financial assets and financial liabilities are classified as level 2. As at 31 December 2016, the Group’s financial assets and liabilities classified as level 2 include debt securities ($301 million), collective investment schemes ($2,886 million), and base metals derivatives contracts cleared through LME Clear ($61,618 million for both assets and liabilities). Our audit focus was on the valuation and existence of debt securities and collective investment schemes, and the accuracy and presentation of net derivative balances of base metals derivatives contracts.\\n\\nWe focused on the base metals derivatives contracts classified as level 2 financial assets and liabilities due to the magnitude of these balances, large volume of data generated by the clearing system, and the complexity of the netting process. All open derivative positions must be netted off and the balance presented net in the statement of financial position when, and only when an entity: • currently has a legally enforceable right to net off the recognised amounts; and • intends either to settle on a net basis, or to realise the asset and settle the liability simultaneously.",
    "auditResponse": "Our audit procedures included focusing on the valuation and existence of debt securities and collective investment schemes due to the size of these balances and the judgement involved in selecting the appropriate pricing sources. We also focused on the accuracy and presentation of net derivative balances of base metals derivatives contracts. Specific procedures included assessing the valuation and existence of debt securities and collective investment schemes, and ensuring the accuracy and presentation of net derivative balances.\\n\\nOur work included testing performed over management’s key controls over the valuation and existence of debt securities and collective investment schemes and the netting process of the derivative balances: Controls over the valuation and existence of debt securities and collective investment schemes 1. IT general controls over and interface between the treasury investment system and the financial reporting system; 2. Verification process on valuation of financial assets from independent sources; and 3. Reconciliation process of financial assets positions with the custodian records and the relevant fund administrators’ records. Controls over the netting process of the derivative balances 1. IT general controls over the clearing system which generates data used in the netting procedure; and 2. Automated controls for trade matching and clearing systems which support the registration and novation process of matched trades.",
    "fileName": "Pages from HKEX_Annual_2016.pdf"
  },
  {
    "id": 56,
    "company": "HKEX",
    "year": 2017,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2017, the Group has goodwill of HK$13,277 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively “LME Group”) in 2012. Goodwill was allocated to groups of Cash Generating Units (CGUs) within the “Commodities” segment, HK$10,396 million, and the “Clearing” segment, HK$2,881 million and is monitored by management at the operating segment level. Management has performed an impairment assessment over the goodwill allocated to the Commodities and Clearing segments at the MD & A operating segment level by calculating the 'value-in-use' for groups of CGUs within each operating segment using a discounted cash flow model.",
    "auditResponse": "Our audit procedures included testing management’s controls over the goodwill impairment assessment, assessing the discounted cash flow model used by management, evaluating the reasonableness of management’s key assumptions, performing independent sensitivity analyses, and reviewing the appropriateness of the goodwill impairment assessment disclosure. Based on the above audit procedures, no material exceptions to management’s assessment were noted.",
    "fileName": "Pages from HKEX_Annual_2017.pdf"
  },
  {
    "id": 57,
    "company": "HKEX",
    "year": 2017,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over financial accounting and reporting",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing and settlement fees generated from the transactions processed are the key drivers of the Group’s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "1. Assessed the IT control environment, examined the IT governance framework and tested the IT general controls of the key IT systems that support the revenue recognition and financial reporting processes. 2. Tested the identified automated application controls, including testing of system logical access, system automated calculations and validations, testing of system generated information, system interfaces and reconciliations. 3. Placed certain reliance on the work of the HKEX’s internal audit function over the testing of automated calculations and system interfaces, after evaluating the objectivity and competence of the internal audit function.",
    "fileName": "Pages from HKEX_Annual_2017.pdf"
  },
  {
    "id": 58,
    "company": "HKEX",
    "year": 2018,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As of 31 December 2018, the Group has goodwill of HK$13,298 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively “LME Group”) in 2012. Goodwill was allocated to groups of Cash Generating Units (“CGUs”) within the “Commodities” segment, HK$10,412 million, and the “Clearing” segment, HK$2,886 million, and is monitored by management at the operating segment level. Management has performed an impairment assessment over the goodwill allocated to the Commodities and Clearing segments at the operating segment level by calculating the “value-in-use” for groups of CGUs within each operating segment using discounted cash flow models.",
    "auditResponse": "Our audit procedures included assessing the discounted cash flow model used by management to estimate the value-in-use of the respective groups of CGUs, assessing the reasonableness of the WACCs used and the terminal growth rates applied, comparing the resulting value-in-use of each group of CGUs to their respective book values, evaluating the reasonableness of management’s key assumptions used in the underlying cash flow projections, performing sensitivity analyses on these key assumptions, and reviewing the appropriateness of the goodwill impairment assessment disclosure.",
    "fileName": "Pages from HKEX_Annual_2018.pdf"
  },
  {
    "id": 59,
    "company": "HKEX",
    "year": 2018,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over financial accounting and reporting",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing and settlement fees generated from the transactions processed are the key drivers of the Group’s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures over the relevant IT systems and related controls included assessing the IT control environment, examining the IT governance framework, testing the IT general controls of the key IT systems that support the revenue recognition and financial reporting processes, testing the identified automated application controls, placing reliance on the work of HKEX’s internal audit function, and independently performing audit procedures to evaluate the results of the internal audit function’s work. We also focused on the system development for the cash equity trading platform, performing assessments on the overall project implementation and governance controls, program development authorization, system testing, and data migration and conversion.",
    "fileName": "Pages from HKEX_Annual_2018.pdf"
  },
  {
    "id": 60,
    "company": "HKEX",
    "year": 2019,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2019, the Group has goodwill of HK$13,233 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively “LME Group”) in 2012. Goodwill was allocated to groups of Cash Generating Units (“CGUs”) within the “Commodities” segment, HK$10,361 million, and the “Post Trade” segment, HK$2,872 million. Management has performed an impairment assessment over the goodwill allocated to the Commodities and Post Trade segments at the operating segment level.",
    "auditResponse": "Our audit procedures included testing management’s key controls over the goodwill impairment assessment, assessing the discounted cash flow model used by management, evaluating the reasonableness of management’s key assumptions, obtaining and evaluating management’s sensitivity analyses, and reviewing the appropriateness of the goodwill impairment assessment disclosure.",
    "fileName": "Pages from HKEX_Annual_2019.pdf"
  },
  {
    "id": 61,
    "company": "HKEX",
    "year": 2019,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over financial accounting and reporting",
    "description": "The Group operates securities and derivatives trading, clearing, and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing, and settlement fees generated from the transactions processed are the key drivers of the Group’s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures over the relevant IT systems and related controls included assessing the IT control environment, examining the IT governance framework, testing IT general controls, testing identified automated application controls, placing reliance on the work of the internal audit function, and independently performing audit procedures to evaluate the results of the work of the internal audit function.",
    "fileName": "Pages from HKEX_Annual_2019.pdf"
  },
  {
    "id": 62,
    "company": "HKEX",
    "year": 2020,
    "auditor": "PwC",
    "kamTitle": "Goodwill Impairment Assessment",
    "description": "As at 31 December 2020, the Group has goodwill of HK$13,168 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively “LME Group”) in 2012. Goodwill was allocated to groups of Cash Generating Units (“CGUs”) within the “Commodities” segment, HK$10,310 million, and the “Post Trade” segment, HK$2,858 million and is monitored by management at the operating segment level. Management has performed an impairment assessment over the goodwill allocated to the Commodities and Post Trade segments at the operating segment level by calculating the 'value-in-use' for groups of CGUs within each operating segment using discounted cash flow models. These models use future cash flow projections (revenue, expenses and capital expenditure) for each group of CGUs over a five-year period, with a terminal growth rate applied to the period beyond the fifth year. The cash flows are discounted to net present value using the weighted average cost of capital ('WACC').",
    "auditResponse": "Our audit procedures included: 1) Assessing the discounted cash flow model used by management to estimate the value-in-use of the respective groups of CGUs within the Commodities and Post Trade segments; 2) Comparing the resulting value-in-use of each group of CGUs to their respective book values; 3) Assessing the reasonableness of the WACCs used and the terminal growth rates applied to the period beyond the fifth year by reviewing management’s assumptions underlying the cash flow projections; 4) Evaluating the reasonableness of management’s key assumptions used in the underlying cash flow projections for the five-year period; 5) Obtaining and evaluating management’s sensitivity analyses to assess the impact of reasonably possible changes to the key assumptions; 6) Performing our own independent sensitivity analyses on these key assumptions; 7) Reviewing the appropriateness of the goodwill impairment assessment disclosure.",
    "fileName": "Pages from HKEX_Annual_2020.pdf"
  },
  {
    "id": 63,
    "company": "HKEX",
    "year": 2020,
    "auditor": "PwC",
    "kamTitle": "IT Systems and Controls over Financial Accounting and Reporting",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing and settlement fees generated from the transactions processed are the key drivers of the Group’s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures included: 1) Assessing the IT control environment, examining the IT governance framework, and testing the IT general controls of the key IT systems that support the revenue recognition and financial reporting processes; 2) Testing the identified automated application controls critical to the revenue recognition and financial reporting processes; 3) Placing certain reliance on the work of HKEX’s internal audit function over the testing of automated calculations and system interfaces, after evaluating the objectivity and competence of the internal audit function; 4) Independently performing audit procedures to evaluate the results of the work of the internal audit function.",
    "fileName": "Pages from HKEX_Annual_2020.pdf"
  },
  {
    "id": 64,
    "company": "HKEX",
    "year": 2021,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2021, the Group has goodwill of HK$13,241 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively “LME Group”) in 2012. Goodwill was allocated to groups of Cash Generating Units (“CGUs”) within the “Commodities” segment, HK$10,368 million, and the “Post Trade” segment, HK$2,873 million and is monitored by management at the operating segment level. Management has performed an impairment assessment over the goodwill allocated to the Commodities and Post Trade segments at the operating segment level by calculating the 'value-in-use' for groups of CGUs within each operating segment using discounted cash flow models. These models use future cash flow projections (revenue, expenses and capital expenditure) for each group of CGUs over a five-year period, with a terminal growth rate applied to the period beyond the fifth year. The cash flows are discounted to net present value using the weighted average cost of capital ('WACC').",
    "auditResponse": "Our audit procedures included: 1) Assessing the discounted cash flow model used by management to estimate the value-in-use of the respective groups of CGUs within the Commodities and Post Trade segments; 2) Assessing the reasonableness of the WACCs used and the terminal growth rates applied to the period beyond the fifth year by reviewing management’s assumptions underlying the cash flow projections; 3) Evaluating the reasonableness of management’s key assumptions used in the underlying cash flow projections for the five-year period by comparing historical budgets and achievements and the reasons for any deviations; 4) Obtaining and evaluating management’s sensitivity analyses to assess the impact of reasonably possible changes to the key assumptions (cash flow projections, WACCs and growth rates); 5) Reviewing the appropriateness of the goodwill impairment assessment disclosure.",
    "fileName": "Pages from HKEX_Annual_2021.pdf"
  },
  {
    "id": 65,
    "company": "HKEX",
    "year": 2021,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over financial accounting and reporting",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of daily transactions and market data. The trading, clearing and settlement fees generated from the transactions processed are the key drivers of the Group’s revenue. The revenue recognition of these fees relies heavily on the Information Technology (IT) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures included: 1) Assessing the IT control environment, examining the IT governance framework, and testing the IT general controls of the key IT systems that support the revenue recognition and financial reporting processes; 2) Testing the identified automated application controls, which are critical to the revenue recognition and financial reporting processes; 3) Placing certain reliance on the work of HKEX’s internal audit function over the testing of automated calculations and system interfaces, after evaluating the objectivity and competence of the internal audit function and determining the nature and extent of work that can be relied on; 4) Independently performing audit procedures to evaluate the results of the work of the internal audit function.",
    "fileName": "Pages from HKEX_Annual_2021.pdf"
  },
  {
    "id": 66,
    "company": "HKEX",
    "year": 2022,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2022, the Group has goodwill of HK$13,367 million arising from various acquisitions. Goodwill of HK$13,256 million arising from the acquisition of LME Holdings Limited and its subsidiaries (collectively the “LME Group”) in 2012 was allocated to Cash Generating Units (“CGUs”) for the “Commodities” segment (HK$10,379 million), and the “Post Trade” segment (HK$2,877 million) respectively. Goodwill with an indefinite useful life is subject to impairment assessments annually and when there is an indication for impairment.",
    "auditResponse": "Our procedures to evaluate the Group’s goodwill impairment assessments included: 1) Understanding of the Group’s internal controls and management’s process for goodwill impairment assessment and assessing the inherent risk of material misstatement. 2) Assessing the appropriateness of the discounted cash flow models used. 3) Assessing the reasonableness of projected revenue and operating expenditure assumptions used to produce future cash flows. 4) Assessing the reasonableness of significant assumptions including the terminal growth rates and the discount rates used in estimating value-in-use. 5) Performing independent sensitivity analysis on the significant assumptions, being the terminal growth rates and the discount rates to which the models are most sensitive, and evaluating the impact that reasonable possible changes could have on management’s goodwill impairment assessment.",
    "fileName": "Pages from HKEX_Annual_2022.pdf"
  },
  {
    "id": 67,
    "company": "HKEX",
    "year": 2022,
    "auditor": "PwC",
    "kamTitle": "IT systems and controls over revenue and financial accounting and reporting processes",
    "description": "The Group operates securities and derivatives trading, clearing and settlement systems, which process significant volumes of transactions and market data. Trading, clearing and settlement fee revenue generated from these transactions comprise the majority of the Group’s revenue of HK$16,934 million. The completeness and accuracy of the fee revenue recognised relies heavily on the Information Technology (“IT”) systems processing those transactions and data.",
    "auditResponse": "Our audit procedures over the key systems and related controls included: 1) Assessing the control environment, including the management over the data capture and processing of reporting fee revenue. 2) Testing relevant automated application controls over the capture, processing and reporting of transactions. 3) Evaluating the design and operating effectiveness of automated application controls and underlying IT general controls. Based on our audit procedures, there were no matters identified that would impact our reliance on the relevant controls put in place by management on the key systems for the purpose of our audit.",
    "fileName": "Pages from HKEX_Annual_2022.pdf"
  },
  {
    "id": 68,
    "company": "HKEX",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2023, the Group has goodwill of HK$13,371 million arising from various acquisitions. Goodwill of HK$13,262 million arises from the acquisition of LME Holdings Limited and its subsidiaries (collectively referred to as the 'LME Group'). This goodwill is attributable to the Cash Generating Unit (CGU) for the 'Commodities' segment. The nature of this key audit matter involves understanding management’s process for performing the goodwill impairment assessment, assessing the inherent risk of material misstatement, and considering the degree of estimation uncertainty and other inherent risk factors such as complexity, subjectivity, changes, and susceptibility to management bias.",
    "auditResponse": "Our procedures to evaluate the Group’s goodwill impairment assessment included: 1) Understanding management’s process for performing the goodwill impairment assessment and assessing the inherent risk of material misstatement. 2) Assessing the appropriateness of the discounted cash flow model used. 3) Assessing the reasonableness of projected revenue and operating expenditure assumptions used to estimate the future cash flows of the CGU for the next five years. 4) Assessing the reliability of management’s projections by comparing budgets against actual results achieved in prior years. 5) Assessing the reasonableness of other significant assumptions, including the terminal growth rate and the discount rate. 6) Independently performing sensitivity analysis on the significant assumptions and evaluating the impact that reasonably possible changes could have on management’s goodwill impairment assessment. Based on the impairment assessment, management concluded that there is no impairment in respect of the goodwill allocated to the Commodities segment. We found the significant assumptions management adopted to be supportable.",
    "fileName": "Pages from HKEX_Annual_2023.pdf"
  },
  {
    "id": 69,
    "company": "HKEX",
    "year": 2023,
    "auditor": "PwC",
    "kamTitle": "Control environment supporting key information technology systems",
    "description": "The Group operates securities and derivatives trading, which involves significant end-to-end processes of key systems that capture volumes of transactions and market data. These systems generate fee revenue and clearing and settlement fees, which account for the majority of the Group’s revenue. The completeness and accuracy of the fee revenue recognized rely heavily on the IT systems and the underlying IT general controls.",
    "auditResponse": "We assessed the control environment, including the IT governance framework and IT general controls over the key systems. We tested the design and operating effectiveness of automated application controls and underlying IT general controls. We also tested relevant key automated application controls over the capture, processing, and reporting of transactions. Based on our procedures, we concluded that the control environment supporting the relevant IT systems can be relied on for the purpose of our audit of revenue.",
    "fileName": "Pages from HKEX_Annual_2023.pdf"
  },
  {
    "id": 70,
    "company": "HKEX",
    "year": 2024,
    "auditor": "PwC",
    "kamTitle": "Goodwill impairment assessment",
    "description": "As at 31 December 2024, the Group has goodwill of HK$13,297 million arising from various acquisitions. Goodwill of HK$13,192 million arises from the acquisition of LME Holdings Limited and its subsidiaries (collectively referred to as the 'LME Group'). This goodwill is attributable to the Cash Generating Unit (CGU) for the 'Commodities' segment. The nature of this key audit matter involves understanding management’s process for performing the goodwill impairment assessment, assessing the inherent risk of material misstatement, and considering the degree of estimation uncertainty and other inherent risk factors such as complexity, subjectivity, changes, and susceptibility to management bias.",
    "auditResponse": "Our procedures to evaluate the Group’s goodwill impairment assessment included: 1) Understanding management’s process for performing the goodwill impairment assessment and assessing the inherent risk of material misstatement. 2) Assessing the appropriateness of the discounted cash flow model used. 3) Assessing the reasonableness of projected revenue and operating expenditure assumptions used to estimate the future cash flows of the CGU for the next five years. 4) Assessing the reliability of management’s projections by comparing budgets against actual results achieved in prior years. 5) Assessing the reasonableness of other significant assumptions, including the terminal growth rate and the discount rate used in estimating value-in-use. 6) Independently performing sensitivity analysis on significant assumptions and evaluating the impact that reasonably possible changes could have on management’s goodwill impairment assessment. Based on the impairment assessment, management concluded that there is no impairment in respect of the goodwill allocated to the Commodities segment.",
    "fileName": "Pages from HKEX_Annual_2024.pdf"
  },
  {
    "id": 71,
    "company": "HKEX",
    "year": 2024,
    "auditor": "PwC",
    "kamTitle": "Control environment supporting key information technology systems",
    "description": "The Group operates securities and derivatives trading, which involves significant end-to-end processes of key systems that capture volumes of transactions and market data. These systems generate fee revenue and clearing and settlement fees, which account for the majority of the Group’s revenue. The completeness and accuracy of the fee revenue recognized rely heavily on the information technology (IT) systems and the underlying IT general controls.",
    "auditResponse": "We assessed the control environment, including the IT governance framework, cybersecurity, and IT incident management. We tested the design and operating effectiveness of automated application controls and IT general controls over access to programs and data, program changes, computer operations, and program development. We also tested controls over system logical access, system automated calculations, system-generated information, and system interfaces. Based on our procedures, we concluded that the control environment supporting the relevant IT systems can be relied upon for the purpose of our audit of revenue.",
    "fileName": "Pages from HKEX_Annual_2024.pdf"
  },
  {
    "id": 72,
    "company": "ICE",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Acquisition",
    "description": "During 2019, the Company completed its acquisition of Simplifile, LC (“Simplifile”) for net consideration of $338 million. This transaction was accounted for as a business combination. Auditing the Company's accounting for its acquisition of Simplifile was complex due to the significant estimation in the Company’s determination of fair value of the customer relationship identified intangible asset of $104 million.",
    "auditResponse": "We tested the Company's controls over its accounting for acquisitions, including controls over the estimation process supporting the recognition and measurement of the customer relationship intangible asset. We performed audit procedures that included evaluating the valuation methodology and significant assumptions used by the Company's valuation specialist, and involving our valuation specialists to assist with our evaluation of the methodology and assumptions.",
    "fileName": "Pages from ICE_Annual_2019.pdf"
  },
  {
    "id": 73,
    "company": "ICE",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "The Company operates in the United States and multiple international tax jurisdictions and is subject to tax treaty arrangements and transfer pricing guidelines for intercompany transactions. For the year-ended December 31, 2019, the Company recognized consolidated income tax expense of $521 million, and as of December 31, 2019, the Company accrued liabilities of $103 million for unrecognized tax benefits. Auditing the Company's accounting for consolidated income tax expense was complex because it involves application and interpretation of complex tax laws, many of which were significantly modified as part of the Tax Cuts and Jobs Act.",
    "auditResponse": "We tested the Company’s controls that address the risks of material misstatement relating to the Company’s consolidated income tax expense. We performed audit procedures that included recalculating consolidated income tax expense, involving our tax professionals to evaluate the application of tax law, and assessing the assumptions used by the Company to develop its tax positions and related unrecognized tax benefit amounts by jurisdiction.",
    "fileName": "Pages from ICE_Annual_2019.pdf"
  },
  {
    "id": 74,
    "company": "ICE",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Acquisition of Ellie Mae",
    "description": "During 2020, the Company completed its acquisition of Ellie Mae, Inc. (Ellie Mae) for aggregate consideration of $11.4 billion. This transaction was accounted for as a business combination. Auditing the Company's accounting for its acquisition of Ellie Mae was complex due to the significant estimation in the Company’s determination of fair value of identified intangible assets of $4.5 billion, which principally consisted of customer relationships, backlog, trademark/tradenames and developed technology.",
    "auditResponse": "We tested the Company's controls that address the risk of material misstatement relating to the Company's accounting for the acquisition. We tested controls over the estimation process supporting the recognition and measurement of the identified intangibles, including testing controls over management’s review of assumptions used in its respective valuation models. We performed audit procedures that included evaluating the valuation methodology and significant assumptions used by the Company's valuation specialist, and evaluating the completeness and accuracy of the underlying data supporting the estimated fair value. We involved our valuation specialists to assist with our evaluation of the methodology used by the Company and significant assumptions included in the fair value estimate.",
    "fileName": "Pages from ICE_Annual_2020.pdf"
  },
  {
    "id": 75,
    "company": "ICE",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "The Company operates in the United States and multiple international tax jurisdictions and is therefore subject to various tax treaty arrangements and where applicable, transfer pricing guidelines for intercompany transactions. For the year-ended December 31, 2020, the Company recognized consolidated income tax expense of $658 million, and as of December 31, 2020, the Company accrued liabilities of $188 million for unrecognized tax benefits. Auditing the Company's accounting for consolidated income tax expense was complex because management’s calculation of consolidated income tax expense involves application and interpretation of complex tax laws.",
    "auditResponse": "We tested the Company’s controls that address the risks of material misstatement relating to the Company’s consolidated income tax expense. We tested controls over management’s calculation of the federal, state and foreign components of income tax expense including management’s controls over the identification and ongoing review of its unrecognized tax benefits. We performed audit procedures that included recalculating consolidated income tax expense and agreeing the data used in the calculations to the Company’s underlying books and records. We involved our tax professionals to evaluate the application of tax law to management’s calculation methodologies and tax positions. We also evaluated assumptions the Company used to develop its tax positions and related unrecognized tax benefit amounts by jurisdiction.",
    "fileName": "Pages from ICE_Annual_2020.pdf"
  },
  {
    "id": 76,
    "company": "ICE",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "As discussed in Note 13 to the consolidated financial statements, the Company operates in the United States and multiple international tax jurisdictions and is therefore subject to various tax treaty arrangements and, where applicable, transfer pricing guidelines for intercompany transactions. Consolidated income tax expense, including the liability for unrecognized tax benefits, is an estimate based on management’s understanding and interpretation of current enacted tax laws and tax rates of each tax jurisdiction. For the year-ended December 31, 2021, the Company recognized consolidated income tax expense of $1.629 billion, and as of December 31, 2021, the Company accrued liabilities of $229 million for unrecognized tax benefits.",
    "auditResponse": "We tested the Company’s controls that address the risks of material misstatement relating to the Company’s consolidated income tax expense. For example, we tested controls over management’s calculation of the federal, state and foreign components of income tax expense including management’s controls over the identification and ongoing review of its unrecognized tax benefits. To test consolidated income tax expense, we performed audit procedures that included, among others, recalculation of consolidated income tax expense and agreeing the data used in the calculations to the Company’s underlying books and records. We involved our tax professionals to evaluate the application of tax law to management’s calculation methodologies and tax positions. We also evaluated assumptions the Company used to develop its tax positions and related unrecognized tax benefit amounts by jurisdiction. For example, we compared the estimated liabilities for unrecognized tax benefits to similar positions in prior periods and assessed management’s consideration of current tax controversy and litigation and trends in similar positions challenged by tax authorities. We also evaluated the adequacy of the Company’s disclosures included in Note 13 in relation to these tax matters.",
    "fileName": "Pages from ICE_Annual_2021.pdf"
  },
  {
    "id": 77,
    "company": "ICE",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "As discussed in Note 13 to the consolidated financial statements, the Company operates in the United States and multiple international tax jurisdictions and is therefore subject to various tax treaty arrangements and, where applicable, transfer pricing guidelines for intercompany transactions. Consolidated income tax expense, including the liability for unrecognized tax benefits, is an estimate based on management’s understanding and interpretation of current enacted tax laws and tax rates of each tax jurisdiction. For the year ended December 31, 2022, the Company recognized consolidated income tax expense of $310 million, and as of December 31, 2022, the Company accrued liabilities of $247 million for unrecognized tax benefits.",
    "auditResponse": "We tested the Company’s controls that address the risks of material misstatement relating to the Company’s consolidated income tax expense. For example, we tested controls over management’s calculation of the federal, state, and foreign components of income tax expense, including management’s controls over the identification and ongoing review of its unrecognized tax benefits. To test consolidated income tax expense, we performed audit procedures that included, among others, recalculation of consolidated income tax expense and agreeing the data used in the calculations to the Company’s underlying books and records. We involved our tax professionals to evaluate the application of tax law to management’s calculation methodologies and tax positions. We also evaluated assumptions the Company used to develop its tax positions and related unrecognized tax benefit amounts by jurisdiction. For example, we compared the estimated liabilities for unrecognized tax benefits to similar positions in prior periods and assessed management’s consideration of current tax controversy and litigation and trends in similar positions challenged by tax authorities. We also evaluated the adequacy of the Company’s disclosures included in Note 13 in relation to these tax matters.",
    "fileName": "Pages from ICE_Annual_2022.pdf"
  },
  {
    "id": 78,
    "company": "ICE",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Business Combinations",
    "description": "During 2023, the Company completed its acquisition of Black Knight, Inc. (Black Knight) for aggregate consideration of $11.8 billion. This transaction was accounted for as a business combination. Auditing the Company's accounting for its acquisition of Black Knight was complex due to the significant estimation in the Company’s determination of fair value of identified intangible assets of $4.9 billion, which principally consisted of customer relationships, trademark/tradenames, developed technology, data and databases and in-process research and development.",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of the Company's controls that address the risk of material misstatement relating to the Company's accounting for the acquisition, including the estimated fair value of identified intangible assets. We performed audit procedures that included, among others, evaluating the valuation methodology and significant assumptions used by the Company's valuation specialist, and evaluating the completeness and accuracy of the underlying data supporting the estimated fair value. We involved our valuation specialists to assist with our assessment of the appropriateness of the valuation methodology applied by the Company and significant assumptions included in the fair value estimate, including testing the revenue and margin growth rates that form the basis of the forecasted results and the discount rate. We compared these significant assumptions to current industry, market and economic trends, assumptions used to value similar assets in other acquisitions, historical results of the acquired business, and the Company’s budgets and forecasts. We performed sensitivity analysis over those assumptions. We also evaluated the adequacy of the Company’s disclosures included in Note 3 in relation to these acquisition matters.",
    "fileName": "Pages from ICE_Annual_2023.pdf"
  },
  {
    "id": 79,
    "company": "ICE",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "The Company operates globally and files income tax returns in the U.S. and in various state, local and foreign jurisdictions. Uncertainty in a tax position may arise because tax laws and rulings are subject to interpretation in each jurisdiction. The Company uses significant judgment to determine whether, based on the technical merits, a tax position is more likely than not to be sustained and to measure the amount of tax benefit that qualifies for recognition. As of December 31, 2023, the total amount of unrecognized tax benefits was $268 million, of which $228 million, if recognized, would impact the Company's effective tax rate. Auditing management's analysis of the Company's uncertain tax positions and the related unrecognized tax benefits was challenging as the analysis involved significant judgment due to the complex interpretations and application of tax laws and rulings.",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of the controls related to management's accounting for uncertain tax positions. We tested controls relating to the completeness of management’s identification of uncertain tax positions and the application of the recognition and measurement principles, including management's review of the inputs and calculations of unrecognized tax benefits. Our audit procedures included, among others, testing management's assessment of which uncertain tax positions are more likely than not to be sustained and the measurement of the amount of tax benefit that is more likely than not to be realized. To test management's assessment, we evaluated management's analysis by jurisdiction, including any communications with taxing authorities, tax controversy and litigation trends, and the technical merits of the uncertain tax positions. We involved our tax professionals with specialized skill and knowledge to evaluate the recognition of the uncertain tax positions and the measurement of the unrecognized tax benefit based on the relevant tax laws, rulings and guidance issued by taxing authorities, as well as their experience with the taxing authorities. We also evaluated the adequacy of the Company’s disclosures included in Note 13 in relation to these tax matters.",
    "fileName": "Pages from ICE_Annual_2023.pdf"
  },
  {
    "id": 80,
    "company": "ICE",
    "year": 2024,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for Income Taxes",
    "description": "The Company operates globally and files income tax returns in the U.S. and in various state, local, and foreign jurisdictions. Uncertainty in a tax position may arise because tax laws and rulings are subject to interpretation in each jurisdiction. The Company uses significant judgment to determine whether, based on the technical merits, a tax position is more likely than not to be sustained and to measure the amount of tax benefit that qualifies for recognition. As of December 31, 2024, the total amount of unrecognized tax benefits was $274 million, of which $228 million, if recognized, would impact the Company's effective tax rate.",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of the controls related to management's accounting for uncertain tax positions. We tested controls relating to the completeness of management’s identification of uncertain tax positions and the application of the recognition and measurement principles, including management's review of the inputs and calculations of unrecognized tax benefits. Our audit procedures included testing management's assessment of which uncertain tax positions are more likely than not to be sustained and the measurement of the amount of tax benefit that is more likely than not to be realized. We performed procedures that included evaluating management's analysis by jurisdiction, including any communications with taxing authorities, tax controversy and litigation trends, and the technical merits of the uncertain tax positions. We involved our tax professionals with specialized skills and knowledge to evaluate the recognition of the uncertain tax positions and the measurement of the unrecognized tax benefit based on the relevant tax laws, rulings, and guidance issued by taxing authorities, as well as their experience with the taxing authorities. We also evaluated the adequacy of the Company’s disclosures included in Note 13 in relation to these tax matters.",
    "fileName": "Pages from ICE_Annual_2024.pdf"
  },
  {
    "id": 81,
    "company": "LSEG",
    "year": 2015,
    "auditor": "Ernst & Young",
    "kamTitle": "Goodwill and Purchased Intangible Assets Impairment",
    "description": "The Group holds significant intangible assets, including goodwill, customer relationships, brands, software licenses, and intellectual property. The balance of goodwill was £3.5 billion, compared to £4.3 billion in the prior period. Management performs an annual impairment assessment for goodwill and purchased intangible assets to identify indicators of impairment. The impairment assessment involves significant management judgment in applying valuation models and assumptions.",
    "auditResponse": "We examined the cash flow forecasts supporting management’s goodwill impairment assessment and tested compliance with IAS 36 'Impairment of Assets'. We assessed the reasonableness of forecasts and underlying assumptions, tested discount rates and long-term growth rates, and performed sensitivity analysis on key inputs. We engaged EY valuation experts to support our analysis. No additional factors leading to the need for a full impairment assessment were identified.",
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
    "description": "The divestment of the Russell Investment Management (Russell IM) business, which occurred in H1 2016, poses a risk that the divestment was accounted for or disclosed inappropriately. The loss on discontinued operations was £69.6 million, compared to a £47.7 million profit in the prior year. The divestment included the sale of Russell IM’s assets and liabilities amounting to £1.2 billion and £0.5 billion, respectively, as of 31 May 2016.",
    "auditResponse": "We confirmed our understanding of the divestment process and assessed the design and effectiveness of key controls. We evaluated management’s assessment of the closing date for accounting purposes and concluded that it is in accordance with IFRS as adopted by the EU. We inspected the final signed sale and purchase agreement and agreed the purchase consideration of US$860 million to the agreement and the cash proceeds to the bank statements. We audited the deferred consideration element of the purchase price amounting to US$150 million, which is being deferred over the next four years. We engaged EY valuation specialists to assess the appropriateness of the discount rate and performed a corroborative assessment. We audited management’s calculation of the loss on disposal after taxation and tested the related costs of disposal. We also tested the adjustments to the purchase consideration and the recycling of foreign exchange translation reserve. We involved tax specialists in auditing the tax arising on the divestment and assessed the ongoing arrangements between Russell IM and the Group.",
    "fileName": "Pages from LSEG_Annual_2016.pdf"
  },
  {
    "id": 84,
    "company": "LSEG",
    "year": 2016,
    "auditor": "Ernst & Young",
    "kamTitle": "Implementation of Oracle Finance System",
    "description": "The implementation of a new Oracle finance system poses a risk that exceptions in IT general controls could lead to errors in data integrity, accounting, or financial reporting. This is a new risk this year.",
    "auditResponse": "We confirmed our understanding of the implementation of the Oracle finance system and assessed the following areas of the migration project: governance, data conversion, migration procedures, system interfaces, and access review. We performed audit procedures over the migrated data in the new system to the data in the previous general ledgers, including reconciliations and substantive testing. We inspected the chart of accounts and validated the mapping from the legacy ledgers to Oracle and from Oracle to the Group consolidation tool. We performed audit procedures in all full scope components that implemented the Oracle system in 2016. We concluded that there were no material errors in the financial statements as a result of the implementation of the Oracle finance system.",
    "fileName": "Pages from LSEG_Annual_2016.pdf"
  },
  {
    "id": 85,
    "company": "LSEG",
    "year": 2016,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue in secondary capital markets trading, fees or revenue shares for clearing arrangements, and information services revenue accruals",
    "description": "The risk of fraud in revenue recognition exists due to the complexity of revenue structures and the potential for management to manipulate results. This includes secondary capital markets trading, fee or revenue sharing in clearing arrangements, and information services revenue accruals.",
    "auditResponse": "We confirmed our understanding of the processes and performed testing of the operating effectiveness of key controls. We performed analytical procedures, journal entry testing, and cut-off testing. We increased our standard sample size for transactional testing and used analytical tools to identify outliers for focused follow-up testing. No material issues were identified from the execution of our audit procedures.",
    "fileName": "Pages from LSEG_Annual_2016.pdf"
  },
  {
    "id": 86,
    "company": "LSEG",
    "year": 2016,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that goodwill and purchased intangible assets may be impaired",
    "description": "The Group holds significant intangible assets on its balance sheet, including goodwill, customer relationships, brands, software licenses, and intellectual property. The risk of impairment is assessed annually, and the impairment assessment involves significant management judgment in the application of valuation models and assumptions.",
    "auditResponse": "We confirmed our understanding of the impairment assessment process and assessed the reasonableness of cash flow forecasts and underlying assumptions. We tested the WACC discount rates and LTGRs, and performed sensitivity analysis on key inputs. No material issues were identified from the execution of our audit procedures.",
    "fileName": "Pages from LSEG_Annual_2016.pdf"
  },
  {
    "id": 87,
    "company": "LSEG",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue in secondary capital markets trading, revenue share for clearing arrangements, and information services revenue accruals",
    "description": "The risk of fraud in revenue recognition is heightened due to multiple pricing structures based on product types, customer activity, and volumes. Revenue sharing in clearing arrangements and information services revenue accruals can require estimation based on prior billings or preliminary usage. Compensation tied to the performance of the entity may create an incentive for management to manipulate results.",
    "auditResponse": "We confirmed our understanding of the secondary capital markets trading, revenue share clearing arrangements, and information services revenue accruals processes. We tested the operating effectiveness of key controls in these processes. We adopted a substantive audit approach and performed testing on a sample basis to gain assurance that selected contracts were accounted for in accordance with the policy. We performed overall analytical procedures and journal entry testing to identify and test the risk of misstatement arising from management override of controls. We increased our standard sample size for transactional testing by at least 1.5 times and performed cut-off testing to ensure revenue was recognized in the correct period.",
    "fileName": "Pages from LSEG_Annual_2017.pdf"
  },
  {
    "id": 88,
    "company": "LSEG",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that goodwill and purchased intangible assets may be impaired",
    "description": "The Group holds significant intangible assets on its balance sheet, including goodwill, customer relationships, brands, software licenses, and intellectual property. The balance of goodwill and purchased intangible assets was £4.2 billion, compared to £3.9 billion in the prior year. For 7 material cash-generating units (CGUs), we examined the cash flow forecasts which support management’s impairment assessment. We concluded that the WACC discount rates, LTGR, customer retention rates, and cash flow forecasts used by management in the impairment assessment are within a reasonable range.",
    "auditResponse": "We confirmed our understanding of the impairment assessment process and evaluated the design effectiveness of key controls. We tested compliance with the requirements of IAS 36 'Impairment of Assets'. We assessed the reasonableness of the forecasts and the evidence supporting the underlying assumptions. We tested the WACC discount rates and LTGR assigned to each of the CGUs. We performed sensitivity analysis on the cash flow forecasts and key inputs to the impairment model. We also performed recalculation of the amortisation of purchased intangible assets and assessed the appropriateness of the remaining amortisation period.",
    "fileName": "Pages from LSEG_Annual_2017.pdf"
  },
  {
    "id": 89,
    "company": "LSEG",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the acquisition of businesses was accounted for incorrectly",
    "description": "The Group undertook 2 significant acquisitions in the current year: Mergent Inc. and The Yield Book and Citi Fixed Income Indices. The risk involves the appropriate accounting for these acquisitions, including the significant judgement involved in the determination of goodwill and purchased intangible assets.",
    "auditResponse": "We confirmed our understanding of the business acquisition process and assessed the design effectiveness of key controls. We inspected the final signed sale and purchase agreements and agreed the purchase consideration to the SAPA and cash payments to the bank statements. We tested the book values of acquired assets and liabilities assumed, performing substantive audit procedures on material balances as at the acquisition date. We assessed the appropriateness of the amounts recognised in respect of goodwill and purchased intangible assets, benchmarking to similar market participants. We also assessed the impact of changes in the US tax law on the valuation of amounts recognised as goodwill and purchased intangible assets.",
    "fileName": "Pages from LSEG_Annual_2017.pdf"
  },
  {
    "id": 90,
    "company": "LSEG",
    "year": 2017,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the implementation of the Oracle finance system could lead to errors in data integrity, accounting or financial reporting",
    "description": "The general ledger for LCH Group (excluding LCH S.A.) and LSEG US Holdco Inc. was migrated to Oracle in January 2017 and May 2017, respectively. The risk involves potential errors in data integrity, accounting, or financial reporting due to the implementation of the new system.",
    "auditResponse": "We confirmed our understanding of the implementation of the Oracle finance system, including the relevant processes pre and post Oracle implementation. We assessed various areas of the migration project, including governance, data conversion, migration procedures, system interfaces, and access reviews. We performed audit procedures over the migrated data in the new system to the data in the previous general ledgers, including reconciliations and substantive testing. We concluded that there were no material errors in the financial statements as a result of the Oracle finance system implementation.",
    "fileName": "Pages from LSEG_Annual_2017.pdf"
  },
  {
    "id": 91,
    "company": "LSEG",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Application of IFRS 15 to primary capital markets admission fees",
    "description": "The Group implemented IFRS 15 'Revenue from contracts with customers' on 1 January 2018, which required a change in the accounting policy for revenue recognition related to primary capital markets admission fees. This change involved recognizing revenue over the listing period rather than on the date of listing.",
    "auditResponse": "We assessed the revised accounting policy for compliance with IFRS 15 and the IFRIC decision. We tested the model used to calculate the period over which revenue is deferred and subsequently amortized, including various inputs such as the average life of a customer admitted to the exchange, historical revenue data, and associated impact on deferred tax. We also reviewed the disclosures within the Annual Report and Accounts for compliance with IFRS 15.",
    "fileName": "Pages from LSEG_Annual_2018.pdf"
  },
  {
    "id": 92,
    "company": "LSEG",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue in secondary capital markets trading, revenue share for clearing arrangements, and information services revenue accruals",
    "description": "There is a risk of fraud in the recognition of revenue from secondary capital markets trading, revenue share for clearing arrangements, and information services revenue accruals. This involves significant judgment by management in determining the timing and amount of revenue recognition.",
    "auditResponse": "We performed detailed testing of revenue transactions, including reviewing supporting documentation and performing cut-off tests. We assessed the appropriateness of revenue recognition policies and the application of IFRS 15. We also performed analytical procedures and compared revenue trends to industry benchmarks. We tested the controls over revenue recognition and assessed the risk of management override of controls.",
    "fileName": "Pages from LSEG_Annual_2018.pdf"
  },
  {
    "id": 93,
    "company": "LSEG",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that expenses related to internally developed software are capitalised inappropriately, or that internally developed software is impaired",
    "description": "There is a risk that expenses related to internally developed software are capitalized inappropriately, or that internally developed software is impaired. This involves significant judgment by management in determining the capitalization and impairment of such software.",
    "auditResponse": "We reviewed the policies and procedures for capitalizing and impairing internally developed software, and tested the application of these policies. We assessed the reasonableness of the assumptions used in the impairment tests and compared them to historical data and market expectations. We also performed recalculations of the amortization of internally developed software and assessed the appropriateness of the remaining amortization period.",
    "fileName": "Pages from LSEG_Annual_2018.pdf"
  },
  {
    "id": 94,
    "company": "LSEG",
    "year": 2018,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that goodwill and purchased intangible assets may be impaired",
    "description": "The Group holds significant intangible assets on its balance sheet, including goodwill, customer relationships, brands, software licenses, and intellectual property. The risk of impairment of these assets is significant due to the size of the balances and the involvement of significant judgment by management in determining the valuation of the intangible assets.",
    "auditResponse": "We confirmed our understanding of the impairment assessment process and assessed the design effectiveness of key controls. For material cash generating units (CGUs), we examined the cash flow forecasts which support management’s impairment assessment and tested compliance with the requirements of IAS 36 'Impairment of Assets'. We assessed the reasonableness of those forecasts and the evidence supporting the underlying assumptions. We tested the weighted-average cost of capital (WACC) discount rates and long-term growth rates (LTGR) assigned to each of the CGUs, and performed sensitivity analysis on the cash flow forecasts and other key inputs to the impairment model. We also performed recalculations of the amortisation of purchased intangible assets and assessed the appropriateness of the remaining amortisation period.",
    "fileName": "Pages from LSEG_Annual_2018.pdf"
  },
  {
    "id": 95,
    "company": "LSEG",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of expenses related to internally developed software being capitalised inappropriately, or that internally developed software is impaired",
    "description": "The capitalisation of expenses to internally developed software involves management’s judgement, when making their assessment of capitalisation against criteria set out in IFRS as adopted by the EU. The Group is required to review capitalised software assets for impairment whenever events or changes in circumstances indicate that their carrying amounts may not be recoverable, and at least annually, review whether there is any change in their expected useful lives.",
    "auditResponse": "We confirmed our understanding of the capitalisation and impairment assessment processes and assessed the design and operating effectiveness of key controls. We concluded that the controls were designed, implemented and operating effectively, and therefore took a controls-reliance approach. For a sample of additions, we have agreed amounts capitalised to underlying documentation, including, as appropriate, timesheets, invoices and other evidence to confirm that the costs were incurred, and meet the capitalisation criteria of IAS 38 'Intangible Assets'. Where indicators of impairment had been identified and a full impairment assessment had been prepared, we concluded that the WACC discount rates, LTGR, and cash flow forecasts used by management in the impairment assessment are within a reasonable range. We did not identify any material indicators of impairment for internally developed software which had not already been impaired.",
    "fileName": "Pages from LSEG_Annual_2019.pdf"
  },
  {
    "id": 96,
    "company": "LSEG",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk of fraud in recognition of revenue in secondary capital markets trading, revenue share for clearing arrangements, and information services revenue",
    "description": "The risk of fraud in recognition of revenue in secondary capital markets trading, revenue share for clearing arrangements, and information services revenue accruals within the FTSE Russell business. This includes the complexity of revenue recognition for secondary capital markets revenue, which involves multiple pricing structures based on product types, customer activity, and volumes, leading to a heightened risk that revenue may not be recognised appropriately, either as a result of fraud or error.",
    "auditResponse": "We confirmed our understanding of the secondary capital markets trading, revenue share clearing arrangements, and FTSE Russell revenue accruals processes, and evaluated the design effectiveness of key controls. We performed cut-off testing to ensure revenue was recognised in the correct period. In one full scope component, we concluded that the controls were designed, implemented, and operating effectively, and therefore took a controls-based approach. In other in-scope components, we adopted a substantive audit approach. We increased our standard sample size for transactional testing, agreed a random selection of transactions back to supporting audit evidence, recalculated fees, and used analytical tools to identify outliers in large volumes of transactional data for focused follow-up testing.",
    "fileName": "Pages from LSEG_Annual_2019.pdf"
  },
  {
    "id": 97,
    "company": "LSEG",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that goodwill and purchased intangible\\nassets may be impaired",
    "description": "The Group holds significant intangible assets on its balance sheet, including goodwill, customer relationships, brands, software licenses, and intellectual property. The valuation of these intangible assets is a key audit matter due to the size of the goodwill and purchased intangible assets as at 31 December 2019 and the involvement of significant judgment by management in determining the valuation of the intangible assets.",
    "auditResponse": "We performed the following procedures: \\n- Examined the cash flow forecasts which support management’s impairment assessment and tested compliance with the requirements of IAS 36 'Impairment of Assets'.\\n- Tested the reasonableness of those forecasts and the evidence supporting the underlying assumptions by comparing to Board-approved budgets, considering prior periods’ budget accuracy, comparing expected growth rates to relevant market expectations, and considering recent market developments.\\n- Challenged management’s assessment as to whether indicators of impairment exist as at the balance sheet date, by reference to factors that would lead to a revision of the amortisation periods applied for purchased intangible assets.\\n- Tested the WACC discount rates and LTGR assigned to each of the CGUs, with reference to our understanding of the business, comparisons to other similar companies, and broader market considerations.\\n- Obtained the sensitivity analysis prepared by management on the cash flow forecasts and other key inputs to the impairment model.\\n- Assessed the appropriateness of the remaining amortisation period by comparing management’s forecasts against historic data.\\n- Performed journal entry testing to identify and test the risk of misstatement arising from management override of controls.\\n- Performed full scope audit procedures over this risk area in nine components, covering 100% of the risk amount.",
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
    "auditResponse": "We confirmed our understanding of the processes and controls relevant to revenue recognition, evaluated the design effectiveness of key controls, and performed cut-off testing. We adopted a substantive audit approach, increased our standard sample size for transaction testing, and performed analytical procedures and journal entry testing to identify and test the risk of misstatement arising from management override of controls.",
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
    "auditResponse": "We confirmed our understanding of the process relating to the Borsa Italiana Group disposal, inspected and reviewed the documents pertaining to the completion of the sale transaction, and performed audit procedures on the gain on disposal calculation. We assessed the reasonableness of other accounting entries made for the disposal and performed procedures to assess the completeness and accuracy of any potential continuing obligations on the Group after the disposal date.",
    "fileName": "Pages from LSEG_Annual_2021.pdf"
  },
  {
    "id": 104,
    "company": "LSEG",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the impairment of goodwill and purchased intangible assets is inaccurate or incomplete",
    "description": "There is a risk that the carrying values of goodwill and purchased intangible assets are inaccurate or incomplete, and the related disclosures are not compliant with IAS 36 'Impairment of Assets' and IAS 38 'Intangible Assets'.",
    "auditResponse": "We confirmed our understanding of the impairment assessment process, assessed the design effectiveness of key controls, and adopted a substantive audit approach. We examined cash flow forecasts, tested the accuracy of forecasts, evaluated the reasonableness of cash flow forecasts, and performed sensitivity analysis on key assumptions. We also assessed the adequacy of the relevant disclosures made in the financial statements.",
    "fileName": "Pages from LSEG_Annual_2021.pdf"
  },
  {
    "id": 105,
    "company": "LSEG",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Risk that the Refinitiv acquisition is accounted for and disclosed incorrectly",
    "description": "There is a significant risk of inappropriate accounting for the acquisition in accordance with IFRS 3 'Business Combinations', including alignment to LSEG accounting policies, and the related disclosures due to significant judgments required in the determination of the fair value of consideration transferred, the fair value of net assets acquired, non-controlling interest, and resulting goodwill.",
    "auditResponse": "We confirmed our understanding of the business combination accounting process, held discussions with management, and reviewed management’s assessment of Refinitiv’s accounting policies. We verified the completeness and accuracy of the carrying value of acquired net assets and performed an audit of significant balance sheet accounts. We involved EY valuation specialists to assess the appropriateness of valuation methodologies and evaluated the reasonableness of fair value determinations.",
    "fileName": "Pages from LSEG_Annual_2021.pdf"
  },
  {
    "id": 106,
    "company": "LSEG",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for acquisitions",
    "description": "During 2022, the Group completed the acquisitions of Global Data Consortium, Inc. (GDC), MayStreet, Inc. (MayStreet), TORA Holdings, Inc. (TORA) and Quantile Group Limited (Quantile). There is a complexity in auditing the accounting for these acquisitions as there are significant judgements and assumptions required in the determination of the fair value of net assets acquired and the resulting goodwill.",
    "auditResponse": "Control assessment: We confirmed our understanding of the business combinations accounting process including process and controls relevant to the acquisitions. Technical accounting: We reviewed management’s business combinations accounting papers and management’s assessment of the acquirees’ accounting policies. Net assets acquired and resulting goodwill: We verified the completeness and accuracy of the carrying value of acquired net assets. This included tests of detail and analytical review procedures over significant balance sheet accounts at the acquisition date. We also assessed the reasonableness of the fair values of identifiable assets and liabilities assumed, and resulting goodwill at each acquisition date with our valuation specialists. We involved our Tax specialists to evaluate the appropriateness of deferred taxes related to the assets acquired and liabilities assumed and to assess the appropriateness of the tax rate used in relation to each acquisition. Disclosure: We assessed the adequacy of the disclosures made in the financial statements.",
    "fileName": "Pages from LSEG_Annual_2022.pdf"
  },
  {
    "id": 107,
    "company": "LSEG",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Capitalisation and impairment of internally developed software",
    "description": "The Group reported capitalised internally developed software of £2,653 million (2021: £2,318 million) and an impairment charge of £11 million (2021: £13 million). Auditing the capitalisation of expenses to internally developed software is complex as it involves management judgement when making the assessment of capitalisation against criteria set out in IAS 38 'Intangible Assets'.",
    "auditResponse": "Control assessment: We confirmed our understanding of both the capitalisation and impairment assessment processes and assessed the design and operating effectiveness of key controls. Additions testing: For a sample of additions, we have agreed amounts capitalised to supporting documentation to verify whether the costs were incurred and meet the capitalisation criteria of IAS 38 'Intangible Assets'. Impairment assessment: To assess the completeness of indicators of impairment identified by management, we selected a sample of assets, including those not yet brought into use or projects put on hold, and tested and challenged management’s assessment of indicators of impairment. Where an impairment has been recognised, we tested the key assumptions used within the assessment, such as the discount rates, LTGR, and cash flow forecasts with involvement of our valuation specialists as needed. We also assessed the sensitivity analysis performed by management and performed independent additional sensitivity analysis on the impairment model inputs to understand the impact that reasonably possible changes in key assumptions would have on the overall carrying value of the internally developed software. Disclosure: We assessed the adequacy of the disclosures made in the financial statements, including discount rates, LTGRs, cash flow forecasts, and amortisation periods for internally developed software.",
    "fileName": "Pages from LSEG_Annual_2022.pdf"
  },
  {
    "id": 108,
    "company": "LSEG",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Impairment of goodwill and purchased intangible assets",
    "description": "The Group reported goodwill of £19,829 million (2021: £17,486 million) and net purchased intangible assets of £12,584 million (2021: £11,920 million). The complexity in auditing goodwill and purchased intangible assets relates to the use of judgement in the impairment assessment. Both goodwill and purchased intangible assets are sensitive to a number of judgements and estimates, particularly cash flow forecasts, long-term growth rates (LTGR), discount rates, amortisation periods for purchased intangible assets, customer retention rates, and royalty rates.",
    "auditResponse": "Control assessment: We confirmed our understanding of the impairment assessment process and assessed the design effectiveness of key controls. Carrying value of goodwill: For material cash generating units (CGUs), we examined the cash flow forecasts and tested compliance with the requirements of IAS 36 'Impairment of Assets'. We tested the clerical accuracy of these forecasts and compared them to the three-year business plans approved by the Board. We evaluated the reasonableness of the cash flow forecasts using our understanding of the CGU and analysing the budgeted growth rates, historical growth rates, and other relevant market expectations and developments including changes in inflation and increasing interest rates. We compared prior periods’ cash flow forecasts to actual results to assess management’s forecasting accuracy. We tested the discount rates used by each of the CGUs, as well as the LTGRs, with involvement of our valuation specialists. We evaluated these model inputs within each impairment model, by comparing them to a range of economic and industry forecasts and market data where appropriate, as well as to other similar companies. We also performed sensitivity analysis on the key assumptions to understand the impact that reasonably possible changes would have on the overall carrying value of the goodwill and purchased intangible assets. Purchased intangible assets: We evaluated management’s assessment of impairment indicators by considering internal and external factors specific to each class of assets and our understanding of the business. This included performing back-testing of customer retention rates within specific business lines and the current returns made on intellectual property. We also assessed the appropriateness of the remaining amortisation period of purchased intangible assets by considering management’s business plan and comparing management’s forecasts against historic data. Disclosure: We assessed the adequacy of the relevant disclosures made in the financial statements, including the completeness of the sensitivity disclosure.",
    "fileName": "Pages from LSEG_Annual_2022.pdf"
  },
  {
    "id": 109,
    "company": "LSEG",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Revenue recognition",
    "description": "The Group reported £7,454 million of revenue from external customers, which consisted of £5,259 million in Data & Analytics, £1,459 million in Post Trade, and £736 million in Capital Markets. Auditing revenue recorded is complex due to the complexity of the IT systems used in the initiation, processing, and recording of transactions and the manual nature of certain revenue streams.",
    "auditResponse": "Control assessment: We confirmed our understanding of the processes and controls relevant to the material revenue streams of the Group. We also evaluated the design effectiveness and tested operating effectiveness of key controls including IT systems and related IT controls for certain revenue streams. Overall procedures: We evaluated the appropriateness of the revenue recognition policy in accordance with IFRS 15 'Revenue from Contracts with Customers'. Additionally, we benchmarked the accounting policies with industry peers to ensure they are in line with industry standards. We performed cut-off testing to verify that revenue was recognised in the correct period. We performed analytical procedures and journal entry testing to identify and test the risk of misstatement arising from management override of controls. For subscription revenue in Data & Analytics, we performed a review of contract terms against the requirements of IFRS 15 and verified the invoices raised and cash collected as applicable. For FTSE Russell revenue accruals, we selected a sample of revenue accruals and obtained appropriate supporting evidence such as tying the basis for the accrued amounts to third party sources or prior period billings. We also agreed to invoices raised post year-end and cash collected where applicable. For revenue based on AUM, we independently reperformed the revenue calculation and tested a sample using AUM amounts from supporting customer agreements, independent third-party sources, where available, or customer declarations.",
    "fileName": "Pages from LSEG_Annual_2022.pdf"
  },
  {
    "id": 110,
    "company": "LSEG",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Accounting for acquisitions",
    "description": "During 2023, the Group completed the acquisition of AcadiaSoft, Inc., with net assets acquired of £229 million and goodwill recognised of £341 million. The risk has reduced this year given the lower volume of businesses acquired and value of the acquisition compared to the prior year.",
    "auditResponse": "Control assessment: Confirmed understanding of business combinations accounting process and discussed governance structures with management. Technical accounting: Reviewed management’s business combinations accounting papers and assessed differences in accounting policies. Net assets acquired and resulting goodwill: Verified completeness and accuracy of carrying value, assessed reasonableness of fair values, and involved valuation and tax specialists. Disclosure: Assessed adequacy of disclosures.",
    "fileName": "Pages from LSEG_Annual_2023.pdf"
  },
  {
    "id": 111,
    "company": "LSEG",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Capitalisation and subsequent impairment of internally developed software",
    "description": "The Group reported capitalised internally developed software of £2,717 million (2022: £2,653 million) and an impairment charge of £10 million (2022: £11 million). The complexity in auditing the capitalisation of software costs involves management judgement in determining whether costs can be capitalised and assessing recoverability.",
    "auditResponse": "Control assessment: Confirmed understanding of capitalisation and impairment assessment processes and assessed design and operating effectiveness of key controls. Additions testing: Agreed amounts capitalised to supporting documentation. Impairment assessment: Tested and challenged management’s assessment of indicators of impairment, tested key assumptions, and performed sensitivity analysis. Disclosure: Assessed adequacy of disclosures.",
    "fileName": "Pages from LSEG_Annual_2023.pdf"
  },
  {
    "id": 112,
    "company": "LSEG",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Measurement of acquired intangible assets, including goodwill",
    "description": "The Group reported goodwill of £19,246 million (2022: £19,829 million) and net purchased intangible assets of £11,158 million (2022: £12,584 million). The complexity in auditing goodwill and purchased intangible assets relates to the use of judgement in impairment assessments and re-evaluating amortisation methods and useful lives.",
    "auditResponse": "Control assessment: Confirmed understanding of impairment assessment process and assessed design effectiveness of key controls. Carrying value of goodwill: Examined cash flow forecasts, tested compliance with IAS 36, evaluated reasonableness of forecasts, and performed sensitivity analysis. Purchased intangible assets: Assessed ability to identify separate recoverable amounts, evaluated appropriateness of amortisation method and useful life, and performed sensitivity analysis.",
    "fileName": "Pages from LSEG_Annual_2023.pdf"
  },
  {
    "id": 113,
    "company": "LSEG",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Revenue recognition",
    "description": "The Group reported £8,061 million (2022: £7,454 million) of revenue from external customers, which consisted of £5,637 million (2022: £5,259 million) in Data & Analytics, £1,546 million (2022: £1,459 million) in Capital Markets and £878 million (2022: £736 million) in Post Trade. The complexity in auditing revenue relates to the judgements applied in the amount and timing of subscription revenue recognition based on non-standard terms in customer agreements and the year-end revenue accruals for FTSE Russell asset-based revenues.",
    "auditResponse": "Control assessment: Confirmed understanding of processes and controls relevant to material revenue streams. Evaluated design effectiveness and tested operating effectiveness of key controls. Overall procedures: Evaluated revenue recognition policy in accordance with IFRS 15. Performed cut-off testing, analytical procedures, and journal entry testing. Performed trend analysis over revenue streams. Subscription revenue in Data & Analytics: Reviewed contract terms, tested invoices, and used digital tools to detect discrepancies. FTSE Russell revenue accruals: Selected a sample of revenue accruals, obtained supporting evidence, and performed substantive analytical procedures.",
    "fileName": "Pages from LSEG_Annual_2023.pdf"
  },
  {
    "id": 114,
    "company": "LSEG",
    "year": 2024,
    "auditor": "Deloitte",
    "kamTitle": "Capitalisation and subsequent impairment assessment of internally-developed intangible assets",
    "description": "The Group reported £2,517 million of internally-developed intangible assets, net of amortisation and impairment, at 31 December 2024 (31 December 2023: £2,717 million), as outlined in note 9. The capitalisation of certain expenditure on internally-developed assets is subjective and management judgement is required to assess whether expenditure should be capitalised in accordance with IAS 38, Intangible Assets. The Group’s criteria for capitalisation are outlined in note 9. Additionally, internally-developed intangible assets are assessed for indicators of impairment annually in accordance with IAS 36. Judgement is required by the Group in identifying whether events or changes in circumstances indicate that the carrying amounts may not be recoverable, and, where impairment indicators are identified, the estimation of the appropriate recoverable amount. Following a detailed review of internally-developed intangible assets in the period, impairments of £216 million (31 December 2023: £10 million) were recognised by the Group where recoverable amounts were deemed to be lower than the carrying value. Further detail is provided in the CFO Review on page 43, the Audit Committee Report on page 115 and note 9.",
    "auditResponse": "Our audit procedures in respect of capitalisation and impairment of these assets, to address the risk of errors and fraud, included the following:— Obtained an understanding of relevant controls over the capitalisation of expenses, as well as the relevant controls over the impairment assessment for internally-developed intangible assets;— For a sample of additions, we mapped to the relevant project and assessed whether the costs had been appropriately capitalised, in accordance with IAS 38, through review of supporting documentation including business cases and, where relevant, direct inquiry and challenge of the software developers;— For a sample of assets including those under development, where impairments were not identified by management, we challenged management’s assessment of impairment indicators with reference to the criteria in IAS 36; and— Where impairments were recognised by management, we reviewed and challenged management’s approach in determining the impairment charges, and the period to which they related, with the assistance of our valuation specialists where appropriate.",
    "fileName": "Pages from LSEG_Annual_2024.pdf"
  },
  {
    "id": 115,
    "company": "LSEG",
    "year": 2024,
    "auditor": "Deloitte",
    "kamTitle": "Revenue recognition",
    "description": "The Group recognised revenue from external customers of £8,579 million for the year ended 31 December 2024 (31 December 2023: £8,061 million). Of this, £918 million relates to FTSE Russell (31 December 2023: £844 million) and £4,374 million relates to Data & Analytics (31 December 2023: £4,301 million). Judgement is required to estimate the asset-based revenue accrual in FTSE Russell (FTSE AUM) for the fourth quarter based on prior billings and other assumptions.",
    "auditResponse": "We performed the following procedures over revenue:— We obtained an understanding of relevant controls over the Group’s material revenue streams. However, as a result of the IT control deficiencies set out in Section 7.2, we were not able to rely on controls over revenue and in response to these deficiencies we altered the nature and extent of our procedures accordingly; and— We evaluated the appropriateness of the revenue recognition policy in accordance with IFRS 15, Revenue from Contracts with Customers. Specifically, for the year-end FTSE AUM revenue accrual:— For a sample of transactions, we challenged management’s approach to estimating the accrual:— We independently sought third party information and, where available, used this to challenge management’s estimate; and— We obtained invoices issued after the year-end, cash receipts, and AUM declarations to evaluate the appropriateness of the accrual. For subscription revenue, using a data driven audit approach, we:— Obtained the underlying revenue data from relevant systems within the subscription revenue data flow and, where possible, used data analytics to reconcile subscription revenue to invoices and cash records;— For any amounts where we were unable to reconcile to invoices and/or cash using data analytics, we manually traced a sample of transactions back to order forms, contracts, evidence of LSEG fulfilling the performance obligation, billing documents and bank statements; and— We tested underlying input data by tracing a sample to underlying source documentation (e.g. order forms).",
    "fileName": "Pages from LSEG_Annual_2024.pdf"
  },
  {
    "id": 116,
    "company": "LSEG",
    "year": 2024,
    "auditor": "Deloitte",
    "kamTitle": "Valuation of intangible assets arising from business combinations, including goodwill",
    "description": "At 31 December 2024, and as outlined in note 9, the Group reported £19,668 million of goodwill (31 December 2023: £19,246 million) and £10,785 million of assets arising from business combinations, such as customer relationships, brands and databases and content (purchased intangible assets) (31 December 2023: £11,184 million), net of amortisation. Goodwill is assessed for impairment at least annually, irrespective of whether or not indicators of impairment exist. The Group performs its annual impairment assessment at 30 September. Impairment assessments are performed by comparing the carrying amount of each cash generating unit (CGU), or group of CGUs, to its recoverable amount, using the higher of value in use (VIU) or fair value less costs to dispose (FVLCD). In performing the annual impairment test, a number of estimates are required, the most significant of which are:— Short-term revenue forecasts and related cash flows;— Selection of appropriate discount rates; and— Long-term growth rates. The CGUs most sensitive to changes in assumptions are Risk Intelligence, FTSE Russell, Data & Analytics and Tradeweb, where a reasonably possible change in these assumptions could result in an impairment. Our key audit matter was therefore focused on the assumptions used for these CGUs. Note 9 and the Audit Committee report on page 115 outline that the useful economic life of purchased intangible assets requires estimation by the Group of the period over which an asset will continue to generate value. The most significant purchased intangible assets arose on the acquisition of Refinitiv, in particular the customer relationships recognised. Due to the value of this asset and the length of the useful economic life, any change in the useful economic life could have a significant impact on the annual amortisation charge. This requires consideration of a number of factors, which include customer attrition rates. Our key audit matter therefore focused on management’s estimates in relation to this asset.",
    "auditResponse": "We performed the following procedures over the goodwill impairment test:— Obtained an understanding of relevant controls over the identification of impairment indicators for goodwill and purchased intangible assets, and the annual impairment test for goodwill;— Challenged management’s goodwill impairment methodology for compliance with IAS 36, Impairment of assets (IAS 36), and tested that the impairment test was performed in line with the documented methodology;— Performed an independent recalculation of management’s goodwill model to test the accuracy of the model;— Challenged management’s goodwill impairment test as at 30 September 2024, including:— Reviewing the budgets by:— comparing future revenue growth forecasts against historic performance; and— inspecting divisional budget packs and determining whether key judgements are in line with our understanding of the business and third party data.— Alongside valuation specialists, compared the discount rate and long-term growth rate (LTGR) used by management to our own independently determined range;— Challenged management’s roll forward assessment of the goodwill impairment test at 31 December 2024, including an independent assessment of any potential impairment triggers between 30 September and the year-end; and— Evaluated management’s disclosures in note 9 for compliance with IAS 36. We performed the following procedures over the useful economic life of Refinitiv customer relationships:— Obtained the customer list received as part of the acquisition to evaluate the initial value of the asset;— Tested the completeness and accuracy of the Refinitiv customer list as at 31 December 2024, utilising the transaction list for the year, by tracing a sample of customers to transactions in the period and a sample of transactions to the customer list;— Compared the original customer list to that at 31 December 2024 and recalculated the customer attrition rate used by management in their assessment; and— Assessed whether, based on customer attrition rates, a straight-line method of amortisation remained appropriate.",
    "fileName": "Pages from LSEG_Annual_2024.pdf"
  },
  {
    "id": 117,
    "company": "Nasdaq Inc.",
    "year": 2019,
    "auditor": "Ernst & Young",
    "kamTitle": "Market Technology Revenue Recognition",
    "description": "As described in Notes 3 and 9 to the consolidated financial statements, the Company enters into long-term market technology contracts with customers to develop customized technology solutions, license the right to use software, and provide support and other services which results in these contracts containing multiple performance obligations. The Company recorded market technology deferred revenue of $66 million as of December 31, 2019 and recognized $338 million in revenue for the year ended December 31, 2019. The Company allocates the contract transaction price to each performance obligation using their best estimate of the standalone selling price of each distinct good or service in the respective market technology contract. In instances where standalone selling price is not directly observable, such as when a product or service is not sold separately, the Company determines the standalone selling price predominantly through an expected cost plus a margin approach. The Company recognizes revenue over time using costs incurred to date relative to total estimated costs at completion to measure progress toward satisfying the performance obligation.",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of controls over the Company's processes with respect to estimates that impact the timing and measurement of revenue recognition. For example, we tested controls over the allocation of contract transaction price to performance obligations, including management’s review of the estimated margin used when applying the cost plus an estimated margin to determine the standalone selling price. We also evaluated the design and tested the operating effectiveness of controls over the completeness and accuracy of the data utilized to measure the estimate and recognize the revenue in the appropriate period. We performed substantive audit procedures that included, among other things, evaluating the significant assumptions and the accuracy and completeness of the underlying data used in management’s calculation. Specifically, we inspected certain customer contracts, including contract modifications, and tested management’s determination of the standalone selling price and its allocation to performance obligations in accordance with the cost plus a margin approach, including comparing the margin assumptions to actual margins earned on completed contracts. We also tested the accuracy of the revenue recognized in the current period by inspecting reports relating to the hours recorded on a project. We evaluated the adequacy of the Company’s disclosures in notes 3 and 9 to the consolidated financial statements related to market technology revenue recognition.",
    "fileName": "Pages from NASDAQ_Annual_2019.pdf"
  },
  {
    "id": 118,
    "company": "Nasdaq Inc.",
    "year": 2020,
    "auditor": "Ernst & Young",
    "kamTitle": "Market Technology Revenue Recognition",
    "description": "The Company enters into long-term market technology contracts with customers to develop customized technology solutions, license the right to use software, and provide support and other services. These contracts contain multiple performance obligations. The Company recorded market technology deferred revenue of $53 million as of December 31, 2020 and recognized $357 million in revenue for the year then ended. The Company allocates the contract transaction price to each performance obligation using their best estimate of the standalone selling price of each distinct good or service in the respective market technology contract. In instances where standalone selling price is not directly observable, the Company determines the standalone selling price predominantly through an expected cost plus a margin approach. The Company recognizes revenue over time using costs incurred to date relative to total estimated costs at completion to measure progress toward satisfying the performance obligation.",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of controls over the Company's processes with respect to estimates that impact the timing and measurement of revenue recognition. We tested controls over the allocation of contract transaction price to performance obligations, including management’s review of the estimated margin used when applying the cost plus an estimated margin to determine the standalone selling price. We also evaluated the design and tested the operating effectiveness of controls over the completeness and accuracy of the data utilized to measure the estimate and recognize the revenue in the appropriate period. We performed substantive audit procedures that included evaluating the significant assumptions and the accuracy and completeness of the underlying data used in management’s calculation. Specifically, we inspected certain customer contracts, including contract modifications, and tested management’s determination of the standalone selling price and its allocation to performance obligations in accordance with the cost plus a margin approach, including comparing the margin assumptions to actual margins earned on completed contracts. We also tested the accuracy of the revenue recognized in the current period by inspecting reports relating to the hours recorded on a project. We evaluated the adequacy of the Company’s disclosures in Notes 2, 3 and 8 to the consolidated financial statements related to market technology revenue recognition.",
    "fileName": "Pages from NASDAQ_Annual_2020.pdf"
  },
  {
    "id": 119,
    "company": "Nasdaq Inc.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Acquisition of Verafin",
    "description": "The company completed the acquisition of Verafin for an aggregate purchase price of $2.75 billion, resulting in $1.88 billion of goodwill and $815 million of intangible assets, including customer relationships and developed technology.",
    "auditResponse": "We tested controls over the estimation process supporting the recognition and measurement of goodwill and intangible assets. We evaluated the company's use of valuation methodologies, significant assumptions, and the completeness and accuracy of underlying data. We involved valuation specialists to assist with the evaluation of methodologies and assumptions, and performed sensitivity analyses over the selected discount rate and royalty rate.",
    "fileName": "Pages from NASDAQ_Annual_2021.pdf"
  },
  {
    "id": 120,
    "company": "Nasdaq Inc.",
    "year": 2021,
    "auditor": "Ernst & Young",
    "kamTitle": "Market Technology Revenue Recognition",
    "description": "The Company enters into long-term contracts with customers to develop customized technology solutions, license the right to use software, and provide support and other services which results in the allocation of contract transaction price to performance obligations, including management’s review of these contracts containing multiple performance obligations. The Company uses cost plus an estimated margin to determine the estimated margin used when applying the cost plus an estimated margin method.\\n\\nThe company recognized $463 million in revenue for the year ended December 31, 2021, of which $216 million relates to marketplace infrastructure technology. The company uses a cost plus margin approach to determine the standalone selling price for performance obligations where the price is not directly observable.",
    "auditResponse": "We obtained an understanding, evaluated the design and tested the operating effectiveness of controls over the Company's processes with respect to estimates that impact the timing and measurement of revenue recognition. This included testing controls over the allocation of contract transaction price to performance obligations, including management’s review of contracts containing multiple performance obligations.\\n\\nWe evaluated the design and operating effectiveness of controls over the completeness and accuracy of the data used to measure the estimate and recognize revenue. We performed substantive audit procedures, including evaluating significant assumptions and the accuracy and completeness of underlying data, inspecting customer contracts, and testing management’s determination of standalone selling prices.",
    "fileName": "Pages from NASDAQ_Annual_2021.pdf"
  },
  {
    "id": 121,
    "company": "Nasdaq Inc.",
    "year": 2022,
    "auditor": "Ernst & Young",
    "kamTitle": "Market Technology Revenue Recognition",
    "description": "The audit focused on the Company's processes regarding estimates that impact the timing and measurement of revenue recognition, particularly for market technology contracts. These contracts involve providing customized technology solutions, licensing software, and offering support and other services, resulting in multiple performance obligations.",
    "auditResponse": "The auditors tested controls over the allocation of contract transaction price to performance obligations, evaluated the design and operating effectiveness of controls, and performed substantive audit procedures. This included evaluating significant assumptions, the accuracy and completeness of underlying data, and inspecting new customer agreements and change requests. They also tested the accuracy of revenue recognized by inspecting project hours and evaluated the adequacy of disclosures in the financial statements.",
    "fileName": "Pages from NASDAQ_Annual_2022.pdf"
  },
  {
    "id": 122,
    "company": "Nasdaq Inc.",
    "year": 2023,
    "auditor": "Ernst & Young",
    "kamTitle": "Acquisition of Adenza",
    "description": "During 2023, the Company completed its acquisition of Adenza, which was accounted for as a business combination for a total purchase consideration of $5,750 million in cash (subject to customary post-closing adjustments) and the issuance of 85,608,414 shares of Nasdaq common stock at a price of $48.71 per share. The transaction resulted in the recognition of $5,933 million of goodwill and $5,050 million of intangible assets, including customer relationships of $3,740 million, technology of $950 million, and trade names of $360 million.",
    "auditResponse": "The audit team obtained an understanding, evaluated the design, and tested the operating effectiveness of controls over the Company’s processes with respect to estimates that impact the accounting for the Adenza acquisition. This included testing controls over the estimation process supporting the recognition and measurement of the identified intangible assets, evaluating the Company’s use of valuation methodologies, significant assumptions utilized by the Company, and the completeness and accuracy of the underlying data. The team also involved valuation specialists to assist in evaluating the methodology and assumptions used by the Company. Sensitivity analyses were performed over significant assumptions, and these assumptions were compared to current industry, market, and economic trends, as well as the historical results of the acquired business and the Company’s budgets and forecasts.",
    "fileName": "Pages from NASDAQ_Annual_2023.pdf"
  },
  {
    "id": 123,
    "company": "Nasdaq Inc.",
    "year": 2024,
    "auditor": "Ernst & Young",
    "kamTitle": "Calypso and AxiomSL on-premises license revenue recognition",
    "description": "As described in Note 2 to the consolidated financial statements, the Company recognizes revenue from Calypso and AxiomSL on-premises licenses, which involves significant judgment due to the complexity of the arrangements and the timing of revenue recognition. The critical audit matter involved evaluating the appropriateness of the Company’s revenue recognition policies and the sufficiency of the evidence supporting the timing of revenue recognition.",
    "auditResponse": "Our audit procedures included, among others, testing the design and operating effectiveness of controls over revenue recognition, including controls over the determination of the transaction price and the allocation of the transaction price to performance obligations. We also performed detailed testing of the revenue transactions, including reviewing customer contracts, assessing the timing of revenue recognition, and comparing the recorded revenue to the terms of the contracts.",
    "fileName": "Pages from NASDAQ_Annual_2024.pdf"
  },
  {
    "id": 124,
    "company": "TMX Group",
    "year": 2020,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $1,653.7 million and $2,323.1 million respectively as of December 31, 2020. The Entity performs impairment testing for goodwill and indefinite life intangible assets on an annual basis or more frequently when there is an indication of impairment. An impairment is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount. The recoverable amount of an asset is the greater of its value-in-use and its fair value less costs of disposal. In determining the estimated recoverable amounts using a discounted cash flow model, the Entity’s assumptions include future cash flows, long-term growth rates and pre-tax discount rates.",
    "auditResponse": "We evaluated the appropriateness of future cash flows by comparing the Entity’s prior year expected future cash flows to the actual results to assess the Entity’s budgeting process and assessing future cash flows by comparing them to historical performance and against key new initiatives in the Board-approved plan. We assessed the long-term growth rates by comparing them to available market information and historical performance. We involved valuation professionals with specialized skills and knowledge, who assisted in evaluating the appropriateness of the pre-tax discount rates by comparing the Entity’s Weighted Average Cost of Capital (WACC) against publicly available market data and assessing the CGU-specific risk adjustments applied by the Entity to the WACC by considering the historic, current, and future financial performance of each CGU.",
    "fileName": "Pages from TMX_Annual_2020.pdf"
  },
  {
    "id": 125,
    "company": "TMX Group",
    "year": 2021,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $1,695.8 million and $2,322.4 million respectively as of December 31, 2021. The Entity performs impairment testing for goodwill and indefinite life intangible assets on an annual basis or more frequently when there is an indication of impairment. An impairment is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount. The recoverable amount of an asset is the greater of its value-in-use and its fair value less costs of disposal. In determining the estimated recoverable amounts using a discounted cash flow model, the Entity’s assumptions include future cash flows, long-term growth rates and pre-tax discount rates.",
    "auditResponse": "The primary procedures we performed to address this key audit matter included the following: \\n\\nWe evaluated the appropriateness of the future revenues of the acquired business, future\\nrevenues attributable to acquired customer relationships, and customer attrition rates by\\nconsidering past performance of the acquired businesses.\\nWe involved valuation professionals with specialized skills, knowledge and experience,\\nwho assisted in assessing the appropriateness of the discount rates by assessing\\nagainst comparable entities and industry data.",
    "fileName": "Pages from TMX_Annual_2021.pdf"
  },
  {
    "id": 126,
    "company": "TMX Group",
    "year": 2021,
    "auditor": "KPMG",
    "kamTitle": "Measurement of the BOX Purchase Consideration and Customer Relationships Acquired in the AST Canada and BOX Business Combinations",
    "description": "The Entity completed the AST Canada acquisition on August 12, 2021, and the BOX acquisition on January 3, 2022. The provisional amounts estimated for the customer relationships acquired in these business combinations are $79.0 million and $305.9 million, respectively. The fair value of these customer relationships and the purchase consideration for BOX were estimated using the income approach, which involves significant subjectivity and estimation uncertainty.",
    "auditResponse": "The audit team evaluated the appropriateness of the future revenues, customer attrition rates, and discount rates by considering past performance and involving valuation professionals with specialized skills. These professionals assisted in assessing the discount rates by comparing them to market data and industry benchmarks.",
    "fileName": "Pages from TMX_Annual_2021.pdf"
  },
  {
    "id": 127,
    "company": "TMX Group",
    "year": 2022,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $1,768.7 million and $2,328.5 million respectively as of December 31, 2022. The Entity performs impairment testing for goodwill and indefinite life intangible assets at least annually even when there is no indication of impairment. An impairment loss is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount. The recoverable amount of an asset is the greater of its value-in-use and its fair value less costs of disposal. In determining the estimated recoverable amounts using a discounted cash flow model, the Entity’s significant assumptions include future cash flows, long-term growth rates and pre-tax discount rates.",
    "auditResponse": "The primary procedures we performed to address this key audit matter included evaluating the significant assumptions used by the Entity in its impairment testing, assessing the appropriateness of the valuation models, and performing sensitivity analyses to understand the impact of changes in key assumptions on the estimated recoverable amounts.",
    "fileName": "Pages from TMX_Annual_2022.pdf"
  },
  {
    "id": 128,
    "company": "TMX Group",
    "year": 2022,
    "auditor": "KPMG",
    "kamTitle": "Measurement of the BOX purchase consideration and the customer relationships acquired in the BOX business combination",
    "description": "The Entity obtained control of BOX Holdings Group LLC (BOX) on January 3, 2022, and accounted for it as a business combination. The Entity remeasured its previously held ownership interest at $207.6 million, which comprises the purchase consideration. The identified acquired intangible assets include customer relationships, valued at $306.1 million. The fair value of these assets was estimated using the income approach, involving significant subjectivity and estimation uncertainty.",
    "auditResponse": "The primary procedures performed included evaluating the appropriateness of future revenues, customer attrition rates, and discount rates by considering past performance and involving valuation professionals with specialized skills to assess the discount rates against comparable entities and industry data.",
    "fileName": "Pages from TMX_Annual_2022.pdf"
  },
  {
    "id": 129,
    "company": "TMX Group",
    "year": 2023,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $1,776.8 million and $2,329.4 million respectively as of December 31, 2023. The Entity performs impairment testing for goodwill and indefinite life intangible assets at least annually even when there is no indication of impairment. An impairment loss is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount which is the higher of the asset’s fair value less costs of disposal and its value-in-use. In determining the estimated recoverable amounts using a discounted cash flow model, the Entity’s significant assumptions include future cash flows, long-term growth rates, and pre-tax discount rates.",
    "auditResponse": "The primary procedures we performed to address this key audit matter included the following: \\n- Evaluating the appropriateness of future cash flows by comparing the Entity’s prior year expected future cash flows to the actual results to assess the Entity’s budgeting process.\\n- Assessing future cash flows by comparing them to historical performance and against key new initiatives in the Board-approved plan.\\n- Assessing the long-term growth rates by comparing them to available market information and historical performance.\\n- Involving valuation professionals with specialized skills and knowledge, who assisted in evaluating the appropriateness of the pre-tax discount rates by comparing the Entity’s Weighted Average Cost of Capital (WACC) against publicly available market data and assessing the CGU-specific risk adjustments applied by the Entity to the WACC by considering the historic, current, and future financial performance of each CGU.",
    "fileName": "Pages from TMX_Annual_2023.pdf"
  },
  {
    "id": 130,
    "company": "TMX Group",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the impairment analysis for goodwill and indefinite life intangible assets",
    "description": "The Entity has recorded goodwill and indefinite life intangible assets of $2,637.7 million and $2,425.4 million respectively as of December 31, 2024. The Entity performs impairment testing for goodwill and indefinite life intangible assets at least annually even when there is no indication of impairment. An impairment loss is recognized if the carrying amount of an asset, or its cash generating unit (CGU), exceeds its estimated recoverable amount which is the higher of the asset’s fair value less costs of disposal and its value-in-use. In determining the estimated recoverable amounts using a discounted cash flow model, the Entity’s significant assumptions are future cash flows, long-term growth rates, and pre-tax discount rates.",
    "auditResponse": "We evaluated the appropriateness of future cash flows by comparing the Entity’s prior year expected future cash flows to the actual results to assess the Entity’s budgeting process. We assessed future cash flows by comparing them to historical performance and against key new initiatives in the Board-approved plan. We assessed the long-term growth rates by comparing them to available market information and historical performance. We involved valuation professionals with specialized skills and knowledge, who assisted in evaluating the appropriateness of the pre-tax discount rates by comparing the Entity’s Weighted Average Cost of Capital (WACC) against publicly available market data and assessing the CGU-specific risk adjustments applied by the Entity to the WACC by considering the historic, current, and future financial performance of each CGU.",
    "fileName": "Pages from TMX_Annual_2024.pdf"
  },
  {
    "id": 131,
    "company": "TMX Group",
    "year": 2024,
    "auditor": "KPMG",
    "kamTitle": "Evaluation of the measurement of certain customer relationships, technology, and trade name acquired in the VettaFi business combination",
    "description": "On January 2, 2024, the Entity completed the acquisition of the remaining 77.7% common units in VettaFi Holdings LLC and all its subsidiaries (collectively “VettaFi”) and VettaFi became a consolidated wholly-owned subsidiary of the Entity. The Entity’s identified acquired intangible assets include customer relationships, technology, and trade name for which the amounts estimated by the Entity are $599.7 million, $188.1 million, and $81.6 million respectively. The Entity estimated the fair value of customer relationships, technology, and trade name acquired based on the income approach. This valuation involves significant subjectivity and estimation uncertainty, and certain significant assumptions in respect of future revenues (including those attributable to the acquired customer relationships, trade name, or technology), customer attrition rates, discount rates, and royalty rate.",
    "auditResponse": "We evaluated the appropriateness of the future revenues (including those attributable to acquired customer relationships, trade name, or technology) and customer attrition rates by considering past performance of the acquired business and against new initiatives in the Entity’s long-term strategic plan. We involved valuation professionals with specialized skills, knowledge, and experience, who assisted in assessing the appropriateness of the discount rates and royalty rate by assessing against comparable entities and industry data.",
    "fileName": "Pages from TMX_Annual_2024.pdf"
  },
  {
    "id": 132,
    "company": "Japan Exchange Group (JPX)",
    "year": 2020,
    "auditor": "Deloitte Touche Tohmatsu LLC",
    "kamTitle": "Evaluation of IT Controls Related to Revenue Recognition",
    "description": "As described in Note 20 \"Operating Revenue\" of the consolidated financial statements, the transaction-related revenue for the current fiscal year was 53,171 million yen, and the liquidation-related revenue was 31,088 million yen. The Group's revenue is generated through automated systems, and the accuracy of revenue recognition depends on the effectiveness of IT controls. The IT systems process a large volume of transactions daily, and any system failures or control weaknesses could result in material misstatements in revenue recognition. The complexity of the IT environment and the high volume of automated transactions make this a key audit matter requiring specialized attention and testing procedures.",
    "auditResponse": "The audit firm, in collaboration with IT specialists, understood the data flow, processing procedures, and automated internal controls within the IT system from the initiation of transactions to the recording of revenue. We evaluated the design and operating effectiveness of key IT controls, including system access controls, change management controls, and automated application controls. We performed detailed testing of the IT control environment, including testing of user access management, segregation of duties, and system interfaces. Additionally, we conducted substantive testing of revenue transactions and performed analytical procedures to validate the accuracy and completeness of revenue recognition.",
    "fileName": "JPX KAM_ja2en.xlsx"
  },
  {
    "id": 133,
    "company": "Japan Exchange Group (JPX)",
    "year": 2020,
    "auditor": "Deloitte Touche Tohmatsu LLC",
    "kamTitle": "Evaluation of Software and Software Prepaid Expenses",
    "description": "As disclosed in Note to the Consolidated Financial Statements \"13. Goodwill and Intangible Assets,\" at the end of the current consolidated fiscal year, software was recorded at 27,116 million yen, and software provisional accounts were recorded at 4,847 million yen. The Group continuously invests in technology infrastructure and software development to maintain its competitive position in the financial markets. The valuation of software assets and the appropriate timing of capitalization versus expensing of software development costs require significant judgment. The assessment of software impairment and the determination of useful lives for software assets are critical areas that could materially impact the financial statements.",
    "auditResponse": "The audit firm, in collaboration with IT specialists, evaluated the effectiveness of internal controls related to the assessment of software and software provisional accounts, and primarily implemented substantive procedures. We examined the Group's software capitalization policies and tested compliance with accounting standards. We reviewed the business rationale for major software investments and assessed the recoverability of capitalized software costs. Our procedures included testing the accuracy of software asset records, evaluating the appropriateness of useful life estimates, and performing impairment testing where indicators of impairment were identified.",
    "fileName": "JPX KAM_ja2en.xlsx"
  },
  {
    "id": 134,
    "company": "Japan Exchange Group (JPX)",
    "year": 2021,
    "auditor": "Deloitte Touche Tohmatsu LLC",
    "kamTitle": "Evaluation of Related Company Shares and Capital Contributions",
    "description": "The company is a pure holding company, and the total amount of associated company shares and capital contributions (hereinafter referred to as \"associated company shares, etc.\") recorded on the balance sheet at the end of the current fiscal year was 434,762 million yen. As a holding company, JPX's primary assets consist of investments in its operating subsidiaries, including Tokyo Stock Exchange, Osaka Exchange, and other related entities. The valuation of these investments requires assessment of the underlying performance and prospects of each subsidiary. Any impairment in the value of these investments could have a material impact on JPX's financial position and results of operations.",
    "auditResponse": "The audit firm evaluated the effectiveness of the internal control related to the valuation of shares and other interests in associated companies and examined the reasonableness of the company's valuation of shares and other interests in associated companies. We reviewed the financial performance of key subsidiaries and assessed whether there were any indicators of impairment. Our procedures included analyzing the business plans and forecasts of major subsidiaries, evaluating the appropriateness of valuation methodologies used, and testing the mathematical accuracy of impairment calculations where applicable.",
    "fileName": "JPX KAM_ja2en.xlsx"
  },
  {
    "id": 135,
    "company": "Japan Exchange Group (JPX)",
    "year": 2022,
    "auditor": "Deloitte Touche Tohmatsu LLC",
    "kamTitle": "Evaluation of Related Company Shares and Capital Contributions",
    "description": "The company is a pure holding company, and the total amount of associated company shares and capital contributions (hereinafter referred to as \"associated company shares, etc.\") recorded on the balance sheet at the end of the current fiscal year was 434,762 million yen. The valuation of investments in subsidiaries remains a critical area due to the significant carrying amounts and the potential impact of market conditions and regulatory changes on the underlying businesses. The assessment requires consideration of both quantitative factors such as financial performance and qualitative factors such as strategic positioning and market outlook.",
    "auditResponse": "The audit firm evaluated the effectiveness of the internal control related to the valuation of shares and other equity interests in associated companies and examined the reasonableness of the company's valuation of shares and other equity interests in associated companies. We performed detailed reviews of subsidiary performance, including analysis of key performance indicators and comparison with budget and prior year results. Our audit procedures included evaluation of management's impairment assessment process, testing of key assumptions used in valuation models, and consideration of external market factors that could impact subsidiary valuations.",
    "fileName": "JPX KAM_ja2en.xlsx"
  },
  {
    "id": 136,
    "company": "Japan Exchange Group (JPX)",
    "year": 2023,
    "auditor": "Deloitte Touche Tohmatsu LLC",
    "kamTitle": "Evaluation of Related Company Shares and Capital Contributions",
    "description": "The company is a pure holding company, and the total amount of associated company shares and contributions to associated companies (hereinafter referred to as \"associated company shares, etc.\") recorded in the balance sheet at the end of the current fiscal year was 434,762 million yen. The investment portfolio represents the core value of JPX as a holding company, with significant exposure to the performance of Japan's financial markets infrastructure. The ongoing evaluation of these investments requires careful consideration of market dynamics, regulatory developments, and the competitive landscape affecting each subsidiary's operations and future prospects.",
    "auditResponse": "The audit firm evaluated the effectiveness of the internal control related to the valuation of shares and other interests in associated companies and examined the reasonableness of the company's valuation of shares and other interests in associated companies. We conducted comprehensive reviews of each major subsidiary's financial performance and strategic position. Our audit approach included testing management's impairment assessment procedures, evaluating the appropriateness of discount rates and growth assumptions used in valuation models, and assessing the impact of market conditions and regulatory changes on subsidiary valuations.",
    "fileName": "JPX KAM_ja2en.xlsx"
  },
  {
    "id": 137,
    "company": "Japan Exchange Group (JPX)",
    "year": 2024,
    "auditor": "Deloitte Touche Tohmatsu LLC",
    "kamTitle": "Evaluation of Related Company Shares and Capital Contributions",
    "description": "The company is a pure holding company, and the total amount of associated company shares and capital contributions (hereinafter referred to as \"associated company shares, etc.\") recorded in the balance sheet at the end of the current fiscal year was 434,762 million yen. As Japan's premier financial markets infrastructure provider, JPX's subsidiary investments represent critical national financial infrastructure. The valuation assessment must consider evolving market structures, technological innovations, regulatory reforms, and competitive pressures that could affect the long-term value and strategic positioning of these investments.",
    "auditResponse": "The audit firm evaluated the effectiveness of the internal control related to the valuation of shares and other interests in associated companies and examined the reasonableness of the company's valuation of shares and other interests in associated companies. We performed extensive testing of management's valuation processes, including review of business plans, assessment of key value drivers, and evaluation of impairment indicators. Our procedures included analysis of market trends affecting the financial services industry, review of regulatory developments impacting exchange operations, and assessment of competitive positioning of JPX's subsidiaries in the evolving financial markets landscape.",
    "fileName": "JPX KAM_ja2en.xlsx"
  }
];
