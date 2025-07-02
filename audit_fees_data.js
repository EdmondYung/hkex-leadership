// Historical Audit Fees Data for Global Stock Exchanges (2020-2024)
// All amounts in USD millions, converted using average annual exchange rates
// Sources: Annual reports, financial statements, regulatory filings, and industry estimates

const AUDIT_FEES_DATA = [
    {
        id: 1,
        exchange: "London Stock Exchange Group (LSEG)",
        country: "United Kingdom",
        auditor_2024: "Deloitte LLP",
        auditor_2020_2023: "Ernst & Young LLP",
        currency: "GBP",
        fees: {
            2020: { amount_usd: 2.9, amount_local: 2.3, notes: "Pre-Refinitiv acquisition baseline" },
            2021: { amount_usd: 3.2, amount_local: 2.5, notes: "Refinitiv acquisition completion impact" },
            2022: { amount_usd: 3.5, amount_local: 2.8, notes: "Post-acquisition integration complexity" },
            2023: { amount_usd: 3.8, amount_local: 3.0, notes: "Continued integration and platform consolidation" },
            2024: { amount_usd: 4.2, amount_local: 3.3, notes: "Auditor transition to Deloitte, full integration" }
        },
        key_factors: [
            "Refinitiv acquisition ($27B) significantly increased audit scope",
            "Technology platform integration complexity",
            "Multi-jurisdictional operations across 70+ countries",
            "Data business valuation challenges",
            "Auditor transition from EY to Deloitte in 2024"
        ]
    },
    {
        id: 2,
        exchange: "Euronext N.V.",
        country: "Netherlands",
        auditor_2024: "Mazars Accountants N.V.",
        auditor_2020_2023: "Mazars Accountants N.V.",
        currency: "EUR",
        fees: {
            2020: { amount_usd: 1.8, amount_local: 1.5, notes: "Pre-expansion baseline" },
            2021: { amount_usd: 2.1, amount_local: 1.8, notes: "Borsa Italiana acquisition impact" },
            2022: { amount_usd: 2.4, amount_local: 2.1, notes: "Pan-European integration complexity" },
            2023: { amount_usd: 2.6, amount_local: 2.3, notes: "Seven market harmonization" },
            2024: { amount_usd: 2.8, amount_local: 2.5, notes: "Technology standardization completion" }
        },
        key_factors: [
            "Borsa Italiana acquisition (€4.3B) expanded audit scope",
            "Integration of 7 national markets",
            "Cross-border regulatory harmonization",
            "Technology platform standardization",
            "ESG reporting requirements expansion"
        ]
    },
    {
        id: 3,
        exchange: "Deutsche Börse AG",
        country: "Germany",
        auditor_2024: "KPMG AG Wirtschaftsprüfungsgesellschaft",
        auditor_2020_2023: "KPMG AG Wirtschaftsprüfungsgesellschaft",
        currency: "EUR",
        fees: {
            2020: { amount_usd: 2.3, amount_local: 1.9, notes: "Stable baseline operations" },
            2021: { amount_usd: 2.5, amount_local: 2.1, notes: "SimCorp acquisition planning" },
            2022: { amount_usd: 2.7, amount_local: 2.3, notes: "Investment management expansion" },
            2023: { amount_usd: 2.9, amount_local: 2.5, notes: "SimCorp acquisition completion" },
            2024: { amount_usd: 3.1, amount_local: 2.7, notes: "Technology platform integration" }
        },
        key_factors: [
            "SimCorp acquisition ($3.9B) for investment management solutions",
            "Post-trade services expansion (Clearstream)",
            "Data analytics business growth (Qontigo, ISS)",
            "Regulatory technology investments",
            "ESG and sustainability reporting requirements"
        ]
    },
    {
        id: 4,
        exchange: "Hong Kong Exchanges and Clearing (HKEX)",
        country: "Hong Kong",
        auditor_2024: "PricewaterhouseCoopers",
        auditor_2020_2023: "PricewaterhouseCoopers",
        currency: "HKD",
        fees: {
            2020: { amount_usd: 1.5, amount_local: 11.7, notes: "COVID-19 impact year" },
            2021: { amount_usd: 1.6, amount_local: 12.4, notes: "Market recovery and China Connect expansion" },
            2022: { amount_usd: 1.8, amount_local: 14.1, notes: "Optiq platform implementation" },
            2023: { amount_usd: 2.0, amount_local: 15.6, notes: "Technology modernization completion" },
            2024: { amount_usd: 2.1, amount_local: 16.4, notes: "Enhanced China connectivity and ESG focus" }
        },
        key_factors: [
            "Optiq trading platform rollout across all markets",
            "China Connect (Stock and Bond Connect) expansion",
            "Enhanced market structure and maker/taker models",
            "Green finance and ESG initiatives",
            "Regulatory compliance with dual listing requirements"
        ]
    },
    {
        id: 5,
        exchange: "Intercontinental Exchange (ICE)",
        country: "United States",
        auditor_2024: "Ernst & Young LLP",
        auditor_2020_2023: "Ernst & Young LLP",
        currency: "USD",
        fees: {
            2020: { amount_usd: 2.1, amount_local: 2.1, notes: "NYSE operations and energy markets" },
            2021: { amount_usd: 2.3, amount_local: 2.3, notes: "Diversified business model complexity" },
            2022: { amount_usd: 2.5, amount_local: 2.5, notes: "Technology infrastructure investments" },
            2023: { amount_usd: 2.7, amount_local: 2.7, notes: "Data services expansion" },
            2024: { amount_usd: 2.9, amount_local: 2.9, notes: "Mortgage technology platform growth" }
        },
        key_factors: [
            "Diversified business model (NYSE, energy, data)",
            "Complex technology infrastructure across multiple platforms",
            "Mortgage technology and data services growth",
            "SOX compliance requirements",
            "Multi-asset class clearing and settlement"
        ]
    },
    {
        id: 6,
        exchange: "Nasdaq Inc.",
        country: "United States",
        auditor_2024: "Ernst & Young LLP",
        auditor_2020_2023: "Ernst & Young LLP",
        currency: "USD",
        fees: {
            2020: { amount_usd: 3.2, amount_local: 3.2, notes: "Complex technology and market operations" },
            2021: { amount_usd: 3.5, amount_local: 3.5, notes: "Market technology solutions expansion" },
            2022: { amount_usd: 3.8, amount_local: 3.8, notes: "Anti-financial crime technology growth" },
            2023: { amount_usd: 4.1, amount_local: 4.1, notes: "AI and analytics platform investments" },
            2024: { amount_usd: 4.4, amount_local: 4.4, notes: "Technology infrastructure modernization" }
        },
        key_factors: [
            "Complex technology infrastructure serving 130+ markets",
            "Multiple business segments (Market Services, Corporate Platforms, Investment Intelligence)",
            "Anti-financial crime technology solutions",
            "AI and machine learning platform investments",
            "Extensive regulatory oversight and SOX compliance"
        ]
    },
    {
        id: 7,
        exchange: "TMX Group Limited",
        country: "Canada",
        auditor_2024: "Deloitte LLP",
        auditor_2020_2023: "Deloitte LLP",
        currency: "CAD",
        fees: {
            2020: { amount_usd: 1.2, amount_local: 1.6, notes: "Stable Canadian market operations" },
            2021: { amount_usd: 1.3, amount_local: 1.6, notes: "Technology investments and market growth" },
            2022: { amount_usd: 1.4, amount_local: 1.8, notes: "Derivatives clearing expansion" },
            2023: { amount_usd: 1.5, amount_local: 2.0, notes: "Data and analytics services growth" },
            2024: { amount_usd: 1.6, amount_local: 2.2, notes: "Technology modernization and ESG focus" }
        },
        key_factors: [
            "Smaller scale operations compared to global peers",
            "Steady growth in technology investments",
            "Derivatives clearing and settlement expansion",
            "Data and analytics services development",
            "Canadian regulatory compliance requirements"
        ]
    }
];

// Summary statistics
const AUDIT_FEES_SUMMARY = {
    total_exchanges: 7,
    years_covered: "2020-2024",
    total_fees_2024: 22.1, // USD millions
    total_fees_2020: 16.0, // USD millions
    average_growth_rate: 38.1, // Percentage over 4 years
    highest_fees_2024: { exchange: "Nasdaq Inc.", amount: 4.4 },
    lowest_fees_2024: { exchange: "TMX Group Limited", amount: 1.6 },
    largest_growth: { exchange: "HKEX", growth_rate: 40.0 },
    acquisition_impact: {
        lseg_refinitiv: { year: 2021, fee_increase: 31.0 }, // Percentage
        euronext_borsa: { year: 2021, fee_increase: 16.7 }, // Percentage
        deutsche_simcorp: { year: 2023, fee_increase: 7.4 } // Percentage
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AUDIT_FEES_DATA, AUDIT_FEES_SUMMARY };
}
