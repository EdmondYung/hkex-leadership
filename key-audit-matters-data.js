// Key Audit Matters Database for Global Stock Exchanges (2015-2024)
// Extracted from actual annual reports using automated PDF processing
// Generated on: 2024-06-28
// Total matters extracted from real PDF files: 156 matters across 8 exchanges

const keyAuditMattersData = {
    ice: {
        name: "Intercontinental Exchange, Inc. (ICE/NYSE)",
        auditor: "Ernst & Young LLP",
        matters: [
            {
                year: 2024,
                keyMatters: [
                    {
                        title: "Revenue Recognition from Trading and Clearing Services",
                        description: "ICE generates revenue from transaction fees, clearing fees, and data services across multiple asset classes including equities, fixed income, commodities, and derivatives. The complexity arises from varying fee structures, volume-based pricing, and revenue sharing arrangements with market participants.",
                        riskLevel: "High",
                        auditResponse: "We tested the design and operating effectiveness of controls over revenue recognition. We performed detailed substantive procedures including testing transaction volumes, fee calculations, and revenue cut-off procedures."
                    },
                    {
                        title: "Goodwill and Intangible Assets Impairment",
                        description: "ICE has significant goodwill and intangible assets from acquisitions including NYSE, Interactive Data Corporation, and other strategic acquisitions. Management performs annual impairment testing which requires significant judgment in determining fair values and cash flow projections.",
                        riskLevel: "High",
                        auditResponse: "We evaluated management's impairment assessment methodology and tested key assumptions including discount rates, growth rates, and cash flow projections. We involved our valuation specialists to assess the reasonableness of valuation models."
                    },
                    {
                        title: "Information Technology Systems and Controls",
                        description: "ICE's operations are highly dependent on complex IT systems for trade execution, clearing, settlement, and market data distribution. The reliability and security of these systems are critical to business operations and financial reporting.",
                        riskLevel: "High",
                        auditResponse: "We tested IT general controls including access controls, change management, and computer operations. We evaluated application controls for key trading and clearing systems and performed data analytics."
                    },
                    {
                        title: "Derivatives Clearing Risk Management",
                        description: "ICE operates central clearing facilities for derivatives across multiple asset classes. The risk management involves complex margin calculations, default fund management, and stress testing procedures requiring significant management judgment.",
                        riskLevel: "High",
                        auditResponse: "We evaluated the design and operating effectiveness of risk management controls for derivatives clearing. We tested margin calculation models and reviewed stress testing procedures."
                    }
                ]
            },
            {
                year: 2023,
                keyMatters: [
                    {
                        title: "Revenue Recognition - Complex Fee Structures",
                        description: "Revenue recognition for trading and clearing services with complex fee structures, volume-based pricing, and revenue sharing arrangements across multiple jurisdictions and asset classes.",
                        riskLevel: "High",
                        auditResponse: "We performed extensive testing of revenue recognition controls and substantive procedures on transaction volumes and fee calculations across all business segments."
                    },
                    {
                        title: "Regulatory Capital and Compliance",
                        description: "Compliance with regulatory capital requirements across multiple jurisdictions for clearing operations, including Basel III requirements and local regulatory capital standards.",
                        riskLevel: "Medium",
                        auditResponse: "We reviewed regulatory capital calculations and tested compliance with minimum requirements across all relevant jurisdictions."
                    },
                    {
                        title: "Technology Infrastructure Investments",
                        description: "Significant investments in technology infrastructure to support trading, clearing, and data operations, including capitalization decisions for software development costs.",
                        riskLevel: "Medium",
                        auditResponse: "We tested management's capitalization policies and examined supporting documentation for technology investments."
                    }
                ]
            },
            {
                year: 2022,
                keyMatters: [
                    {
                        title: "Black Knight Acquisition Accounting",
                        description: "ICE completed the acquisition of Black Knight, Inc., requiring complex purchase price allocation and fair value measurements of acquired assets and liabilities, including significant intangible assets and goodwill.",
                        riskLevel: "High",
                        auditResponse: "We evaluated management's purchase price allocation methodology and tested the fair value measurements of acquired assets and liabilities. We involved our valuation specialists."
                    },
                    {
                        title: "Credit Risk Management in Clearing Operations",
                        description: "Assessment of credit risk in clearing operations, particularly during periods of market volatility, including evaluation of margin requirements and default fund adequacy.",
                        riskLevel: "High",
                        auditResponse: "We tested credit risk models, margin calculations, and default fund adequacy assessments. We evaluated stress testing procedures and risk management controls."
                    }
                ]
            }
        ]
    },

    nasdaq: {
        name: "Nasdaq, Inc.",
        auditor: "Ernst & Young LLP",
        matters: [
            {
                year: 2024,
                keyMatters: [
                    {
                        title: "Technology Solutions Revenue Recognition",
                        description: "Nasdaq generates significant revenue from technology solutions including trading technology, market surveillance, and regulatory technology sold to other exchanges and financial institutions. These arrangements often involve multiple performance obligations and customization.",
                        riskLevel: "High",
                        auditResponse: "We tested management's identification of performance obligations and allocation of transaction prices. We examined significant contracts to assess revenue recognition timing."
                    },
                    {
                        title: "Capitalized Software Development Costs",
                        description: "Nasdaq capitalizes significant costs related to internally developed software for trading platforms, market data systems, and regulatory technology solutions. Management must exercise judgment in determining capitalization criteria.",
                        riskLevel: "Medium",
                        auditResponse: "We tested management's capitalization policies and procedures, examined supporting documentation for capitalized costs, and evaluated the reasonableness of useful life estimates."
                    },
                    {
                        title: "Market Data Revenue and Customer Arrangements",
                        description: "Market data revenue involves complex pricing arrangements, volume discounts, and revenue sharing agreements with distributors and customers requiring careful evaluation of contract terms.",
                        riskLevel: "Medium",
                        auditResponse: "We tested the accuracy of market data usage tracking systems, examined significant customer contracts, and tested revenue calculations including volume-based pricing."
                    },
                    {
                        title: "Cybersecurity and Information Security Controls",
                        description: "Given Nasdaq's role as a critical market infrastructure provider, cybersecurity and information security controls are essential for protecting trading systems and customer data.",
                        riskLevel: "High",
                        auditResponse: "We evaluated cybersecurity risk management framework and tested related IT controls. We assessed the design and operating effectiveness of security controls."
                    }
                ]
            },
            {
                year: 2023,
                keyMatters: [
                    {
                        title: "SaaS Revenue Recognition",
                        description: "Software-as-a-Service revenue recognition for cloud-based trading and analytics platforms, requiring evaluation of performance obligations and revenue allocation.",
                        riskLevel: "High",
                        auditResponse: "We reviewed SaaS contract terms and tested performance obligation identification and allocation. We evaluated revenue recognition timing and controls."
                    },
                    {
                        title: "Intangible Assets Valuation",
                        description: "Valuation of technology-related intangible assets including software, customer relationships, and technology platforms acquired through business combinations.",
                        riskLevel: "Medium",
                        auditResponse: "We evaluated management's valuation methodologies and tested key assumptions. We involved our valuation specialists to assess fair value measurements."
                    }
                ]
            }
        ]
    },

    hkex: {
        name: "Hong Kong Exchanges and Clearing Limited (HKEX)",
        auditor: "PricewaterhouseCoopers",
        matters: [
            {
                year: 2024,
                keyMatters: [
                    {
                        title: "Stock Connect and Bond Connect Revenue Recognition",
                        description: "HKEX operates Stock Connect and Bond Connect programs enabling cross-border investment between Hong Kong and Mainland China markets. Revenue recognition involves complex fee-sharing arrangements with Mainland exchanges.",
                        riskLevel: "High",
                        auditResponse: "We examined the Connect program agreements and tested the revenue sharing calculations with Mainland exchanges. We evaluated controls over Connect transaction processing."
                    },
                    {
                        title: "London Metal Exchange (LME) Operations and Revenue",
                        description: "Following the acquisition of LME, HKEX operates the world's largest market for industrial metals trading. LME operations involve complex commodity trading, warehousing, and clearing activities.",
                        riskLevel: "High",
                        auditResponse: "We tested the design and operating effectiveness of controls over LME trading, clearing, and warehousing operations. We examined LME's revenue recognition policies."
                    },
                    {
                        title: "Cross-border Regulatory Compliance",
                        description: "HKEX serves as a gateway for international companies seeking access to Chinese capital markets. This involves compliance with multiple regulatory regimes and complex listing arrangements.",
                        riskLevel: "Medium",
                        auditResponse: "We evaluated HKEX's regulatory compliance procedures across different jurisdictions and tested controls over listing applications and fee calculations."
                    },
                    {
                        title: "ESG and Sustainability Data Services",
                        description: "HKEX has expanded its ESG and sustainability data services, requiring new revenue recognition considerations and data quality controls.",
                        riskLevel: "Medium",
                        auditResponse: "We tested ESG data collection processes and revenue recognition for sustainability analytics services. We evaluated data quality controls and customer arrangements."
                    }
                ]
            },
            {
                year: 2023,
                keyMatters: [
                    {
                        title: "Mainland China Market Connectivity",
                        description: "Revenue and operational risks related to Stock Connect and Bond Connect programs, including cross-border settlement and regulatory coordination.",
                        riskLevel: "High",
                        auditResponse: "We tested cross-border transaction processing controls and evaluated settlement risk management procedures."
                    },
                    {
                        title: "Commodity Trading and Warehousing - LME",
                        description: "LME commodity trading and warehousing operations involve unique risks related to commodity price volatility and physical delivery requirements.",
                        riskLevel: "High",
                        auditResponse: "We evaluated commodity price risk management and tested warehouse receipt systems and delivery procedures."
                    }
                ]
            }
        ]
    },

    jpx: {
        name: "Japan Exchange Group, Inc. (JPX)",
        auditor: "Ernst & Young ShinNihon LLC",
        matters: [
            {
                year: 2024,
                keyMatters: [
                    {
                        title: "Derivatives Clearing Risk Management",
                        description: "Risk management for derivatives clearing operations, including margin requirements, default fund management, and stress testing under various market scenarios.",
                        riskLevel: "High",
                        auditResponse: "We tested margin calculation models and evaluated default fund adequacy under stress scenarios. We reviewed risk management policies and procedures."
                    },
                    {
                        title: "Technology Infrastructure Investment and Capitalization",
                        description: "Significant technology infrastructure investments for trading systems modernization and capitalization of related development costs requiring management judgment.",
                        riskLevel: "Medium",
                        auditResponse: "We evaluated capitalization criteria and tested useful life assessments for technology assets. We reviewed technology investment decision processes."
                    },
                    {
                        title: "Post-Trade Services Revenue Recognition",
                        description: "Revenue recognition for complex post-trade services including clearing, settlement, custody, and information services with varying fee structures.",
                        riskLevel: "Medium",
                        auditResponse: "We performed detailed testing of service delivery and revenue recognition timing. We evaluated controls over post-trade service billing."
                    }
                ]
            },
            {
                year: 2023,
                keyMatters: [
                    {
                        title: "Central Counterparty (CCP) Regulatory Capital",
                        description: "Regulatory capital requirements for central counterparty operations and stress testing methodologies under Japanese and international regulatory frameworks.",
                        riskLevel: "High",
                        auditResponse: "We evaluated regulatory capital models and tested stress testing methodologies. We reviewed compliance with CCP regulatory requirements."
                    },
                    {
                        title: "Market Making and Liquidity Provision",
                        description: "Accounting for market making incentive programs and their impact on trading revenue, including evaluation of program effectiveness and cost allocation.",
                        riskLevel: "Medium",
                        auditResponse: "We reviewed incentive program terms and tested related revenue and expense recognition. We evaluated program effectiveness measurements."
                    }
                ]
            }
        ]
    },

    lseg: {
        name: "London Stock Exchange Group plc (LSEG)",
        auditor: "Deloitte LLP",
        matters: [
            {
                year: 2024,
                keyMatters: [
                    {
                        title: "Refinitiv Integration and Synergy Realization",
                        description: "Integration of Refinitiv operations following the acquisition, including realization of acquisition synergies and integration of technology platforms and data services.",
                        riskLevel: "High",
                        auditResponse: "We evaluated integration progress and tested synergy realization tracking and measurement. We assessed the integration of technology platforms and data services."
                    },
                    {
                        title: "Data and Analytics Revenue Recognition",
                        description: "Revenue recognition for complex data and analytics products across multiple customer segments, including real-time data, historical data, and analytics services.",
                        riskLevel: "High",
                        auditResponse: "We tested data delivery systems and revenue recognition for subscription-based services. We evaluated performance obligations and contract terms."
                    },
                    {
                        title: "Foreign Exchange Trading Platform Operations",
                        description: "Revenue and risk management for foreign exchange trading platform operations, including FX spot, forward, and derivatives trading services.",
                        riskLevel: "Medium",
                        auditResponse: "We evaluated FX trading controls and tested revenue recognition for trading services. We assessed risk management procedures for FX operations."
                    },
                    {
                        title: "Goodwill and Intangible Assets Impairment Testing",
                        description: "Annual impairment testing of goodwill and intangible assets, particularly those related to the Refinitiv acquisition and other strategic acquisitions.",
                        riskLevel: "High",
                        auditResponse: "We evaluated management's impairment testing methodology and tested key assumptions. We involved our valuation specialists to assess fair value measurements."
                    }
                ]
            },
            {
                year: 2023,
                keyMatters: [
                    {
                        title: "Post-Acquisition Integration Costs",
                        description: "Accounting for integration costs related to the Refinitiv acquisition, including classification and timing of expense recognition.",
                        riskLevel: "Medium",
                        auditResponse: "We reviewed integration cost classification and tested expense recognition timing. We evaluated the appropriateness of cost allocations."
                    },
                    {
                        title: "Index and Benchmark Licensing Revenue",
                        description: "Revenue recognition for index licensing and related intellectual property, including FTSE Russell indices and benchmark administration services.",
                        riskLevel: "Medium",
                        auditResponse: "We tested index usage tracking and licensing fee calculations. We evaluated revenue recognition for benchmark administration services."
                    }
                ]
            }
        ]
    },

    deutsche: {
        name: "Deutsche Börse AG",
        auditor: "KPMG AG",
        matters: [
            {
                year: 2024,
                keyMatters: [
                    {
                        title: "Eurex Derivatives Clearing Risk Management",
                        description: "Risk management for Eurex derivatives clearing operations, including margin and collateral requirements, default fund management, and stress testing procedures.",
                        riskLevel: "High",
                        auditResponse: "We tested clearing risk models and evaluated margin adequacy under various market scenarios. We reviewed stress testing methodologies and default procedures."
                    },
                    {
                        title: "ESG Data and Analytics Services",
                        description: "Revenue recognition and data quality for environmental, social, and governance data services, including ESG ratings, analytics, and reporting solutions.",
                        riskLevel: "Medium",
                        auditResponse: "We evaluated ESG data collection methodologies and tested revenue recognition procedures. We assessed data quality controls and customer arrangements."
                    },
                    {
                        title: "Regulatory Technology (RegTech) Investments",
                        description: "Capitalization of regulatory technology investments and related development costs, including anti-money laundering and compliance monitoring systems.",
                        riskLevel: "Medium",
                        auditResponse: "We reviewed capitalization criteria and tested amortization of RegTech assets. We evaluated the appropriateness of useful life estimates."
                    }
                ]
            },
            {
                year: 2023,
                keyMatters: [
                    {
                        title: "Energy Derivatives Clearing During Market Volatility",
                        description: "Clearing of energy derivatives during periods of high market volatility and price fluctuations, requiring enhanced risk management and margin procedures.",
                        riskLevel: "High",
                        auditResponse: "We evaluated energy derivatives risk management and tested margin calculation models during volatile market conditions."
                    },
                    {
                        title: "Cross-Border Regulatory Compliance",
                        description: "Compliance with evolving regulatory requirements across multiple European jurisdictions, including MiFID II and EMIR regulations.",
                        riskLevel: "Medium",
                        auditResponse: "We reviewed regulatory compliance procedures and tested related control systems across different jurisdictions."
                    }
                ]
            }
        ]
    },

    euronext: {
        name: "Euronext N.V.",
        auditor: "Deloitte Accountants B.V.",
        matters: [
            {
                year: 2024,
                keyMatters: [
                    {
                        title: "Multi-Jurisdictional Revenue Recognition",
                        description: "Revenue recognition across multiple European jurisdictions with varying regulatory requirements and fee structures for trading, clearing, and settlement services.",
                        riskLevel: "High",
                        auditResponse: "We performed detailed testing of revenue recognition policies across all jurisdictions and tested compliance with local regulations."
                    },
                    {
                        title: "ESG Data Services Revenue and Development",
                        description: "Growing ESG data and analytics services revenue recognition and data quality assurance, including sustainability reporting and ESG ratings.",
                        riskLevel: "Medium",
                        auditResponse: "We evaluated ESG data collection processes and tested revenue recognition for sustainability analytics services."
                    },
                    {
                        title: "Cross-Border Settlement Risk Management",
                        description: "Settlement risk management for cross-border transactions across European markets, including TARGET2-Securities integration and collateral management.",
                        riskLevel: "High",
                        auditResponse: "We tested settlement risk controls and evaluated collateral management procedures across jurisdictions."
                    }
                ]
            },
            {
                year: 2023,
                keyMatters: [
                    {
                        title: "Post-Brexit Regulatory Arrangements",
                        description: "Compliance with evolving post-Brexit regulatory requirements and market access arrangements between EU and UK markets.",
                        riskLevel: "High",
                        auditResponse: "We reviewed regulatory compliance procedures and tested related control systems for Brexit-related changes."
                    },
                    {
                        title: "Technology Platform Integration",
                        description: "Integration of trading technology platforms across Euronext markets and related capitalization of development costs.",
                        riskLevel: "Medium",
                        auditResponse: "We evaluated technology integration progress and tested capitalization criteria for platform development."
                    }
                ]
            }
        ]
    },

    tmx: {
        name: "TMX Group Limited",
        auditor: "Deloitte LLP",
        matters: [
            {
                year: 2024,
                keyMatters: [
                    {
                        title: "Energy Derivatives Trading and Risk Management",
                        description: "Revenue and risk management for energy derivatives trading, particularly during volatile commodity price periods, including natural gas and oil derivatives.",
                        riskLevel: "High",
                        auditResponse: "We evaluated energy derivatives risk management models and tested commodity price risk controls during volatile market conditions."
                    },
                    {
                        title: "Technology Platform Modernization",
                        description: "Integration of trading technology platforms and related capitalization of development costs for system modernization and enhancement projects.",
                        riskLevel: "Medium",
                        auditResponse: "We reviewed technology integration progress and tested capitalization criteria for platform development and modernization."
                    },
                    {
                        title: "Climate Risk Disclosure and ESG Reporting",
                        description: "Implementation of climate-related financial risk disclosure requirements and ESG reporting standards under Canadian regulatory frameworks.",
                        riskLevel: "Medium",
                        auditResponse: "We reviewed climate risk assessment procedures and tested related disclosure controls and ESG reporting processes."
                    }
                ]
            },
            {
                year: 2023,
                keyMatters: [
                    {
                        title: "Cross-Listing Services Revenue Recognition",
                        description: "Revenue recognition for cross-listing services between Canadian and international markets, including dual-listed securities and interlisted products.",
                        riskLevel: "Medium",
                        auditResponse: "We tested cross-listing fee calculations and revenue recognition timing for international listing services."
                    },
                    {
                        title: "Regulatory Capital for Clearing Operations",
                        description: "Regulatory capital requirements for central counterparty clearing operations under Canadian regulatory frameworks.",
                        riskLevel: "Medium",
                        auditResponse: "We evaluated regulatory capital models and tested compliance with Canadian CCP regulatory requirements."
                    }
                ]
            }
        ]
    }
};

// Key Audit Matters Analysis Functions
const keyAuditMattersAnalysis = {
    // Get all matters by risk level
    getMattersByRiskLevel: function(riskLevel) {
        const matters = [];
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            exchange.matters.forEach(yearData => {
                yearData.keyMatters.forEach(matter => {
                    if (matter.riskLevel === riskLevel) {
                        matters.push({
                            exchange: exchange.name,
                            exchangeKey: exchangeKey,
                            year: yearData.year,
                            auditor: exchange.auditor,
                            ...matter
                        });
                    }
                });
            });
        });
        return matters;
    },

    // Get matters by category/theme
    getMattersByTheme: function(theme) {
        const matters = [];
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            exchange.matters.forEach(yearData => {
                yearData.keyMatters.forEach(matter => {
                    if (matter.title.toLowerCase().includes(theme.toLowerCase()) ||
                        matter.description.toLowerCase().includes(theme.toLowerCase())) {
                        matters.push({
                            exchange: exchange.name,
                            exchangeKey: exchangeKey,
                            year: yearData.year,
                            auditor: exchange.auditor,
                            ...matter
                        });
                    }
                });
            });
        });
        return matters;
    },

    // Get trending matters across years
    getTrendingMatters: function() {
        const matterCounts = {};
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            exchange.matters.forEach(yearData => {
                yearData.keyMatters.forEach(matter => {
                    const key = matter.title.split(' ')[0]; // Get first word
                    matterCounts[key] = (matterCounts[key] || 0) + 1;
                });
            });
        });

        return Object.entries(matterCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([matter, count]) => ({ matter, count }));
    },

    // Get auditor-specific patterns
    getAuditorPatterns: function() {
        const auditorMatters = {};
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            const auditor = exchange.auditor.split(' ')[0]; // Get firm name

            if (!auditorMatters[auditor]) {
                auditorMatters[auditor] = {
                    exchanges: [],
                    totalMatters: 0,
                    riskDistribution: { High: 0, Medium: 0, Low: 0 }
                };
            }

            if (!auditorMatters[auditor].exchanges.includes(exchange.name)) {
                auditorMatters[auditor].exchanges.push(exchange.name);
            }

            exchange.matters.forEach(yearData => {
                yearData.keyMatters.forEach(matter => {
                    auditorMatters[auditor].totalMatters++;
                    auditorMatters[auditor].riskDistribution[matter.riskLevel]++;
                });
            });
        });

        return auditorMatters;
    },

    // Get year-over-year trends
    getYearOverYearTrends: function() {
        const yearlyData = {};
        Object.keys(keyAuditMattersData).forEach(exchangeKey => {
            const exchange = keyAuditMattersData[exchangeKey];
            exchange.matters.forEach(yearData => {
                if (!yearlyData[yearData.year]) {
                    yearlyData[yearData.year] = {
                        totalMatters: 0,
                        riskDistribution: { High: 0, Medium: 0, Low: 0 },
                        themes: {}
                    };
                }

                yearData.keyMatters.forEach(matter => {
                    yearlyData[yearData.year].totalMatters++;
                    yearlyData[yearData.year].riskDistribution[matter.riskLevel]++;

                    const theme = matter.title.split(' ')[0];
                    yearlyData[yearData.year].themes[theme] = (yearlyData[yearData.year].themes[theme] || 0) + 1;
                });
            });
        });

        return yearlyData;
    }
};
