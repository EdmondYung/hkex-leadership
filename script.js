// Global variables
let auditorChart, auditMattersChart;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeNavigation();
    initializeModal();
    initializeMermaid();
    initializeResizeHandler();
    initializeAnnualReports();
    initializeAuditorAnalysis();
});

// Initialize resize handler
function initializeResizeHandler() {
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resizeAllCharts();
        }, 250);
    });
}

// Navigation functionality
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Initialize charts
function initializeCharts() {
    createAuditorChart();
    createAuditMattersChart();
}

// Calculate 2024 auditor distribution from annual reports data
function calculate2024AuditorDistribution() {
    const auditorCounts = {};
    let totalExchanges = 0;

    // Check if annualReportsData is available
    if (typeof annualReportsData === 'undefined') {
        // Fallback to estimated 2024 data if annual reports data is not available
        return {
            labels: ['Ernst & Young', 'PwC', 'KPMG', 'Deloitte'],
            data: [57.1, 28.6, 14.3, 0.0] // Estimated 2024 distribution
        };
    }

    // Count auditors for exchanges that have 2024 reports
    Object.keys(annualReportsData).forEach(exchangeKey => {
        const exchange = annualReportsData[exchangeKey];

        // Check if this exchange has a 2024 report
        const has2024Report = exchange.reports && exchange.reports.some(report => report.year === 2024);

        if (has2024Report && exchange.auditor) {
            // Normalize auditor names
            let auditorName = exchange.auditor
                .replace(/LLP|LLC|Ltd|Limited/g, '')
                .replace(/Ernst & Young.*/, 'Ernst & Young')
                .replace(/PricewaterhouseCoopers.*|PwC.*/, 'PwC')
                .replace(/KPMG.*/, 'KPMG')
                .replace(/Deloitte.*/, 'Deloitte')
                .trim();

            auditorCounts[auditorName] = (auditorCounts[auditorName] || 0) + 1;
            totalExchanges++;
        }
    });

    // Convert counts to percentages
    const labels = Object.keys(auditorCounts);
    const data = labels.map(auditor =>
        Math.round((auditorCounts[auditor] / totalExchanges) * 100 * 10) / 10
    );

    return { labels, data };
}

// Update 2024 market concentration metrics
function update2024MarketMetrics(distribution) {
    const { labels, data } = distribution;

    // Find the leading auditor and their share
    const maxIndex = data.indexOf(Math.max(...data));
    const leadingAuditor = labels[maxIndex];
    const leadingShare = data[maxIndex];

    // Calculate Big Four total share
    const bigFourAuditors = ['Ernst & Young', 'PwC', 'KPMG', 'Deloitte'];
    const bigFourShare = labels.reduce((total, auditor, index) => {
        return bigFourAuditors.some(bigFour => auditor.includes(bigFour)) ?
               total + data[index] : total;
    }, 0);

    // Calculate total exchanges with 2024 reports
    let totalExchanges = 0;
    if (typeof annualReportsData !== 'undefined') {
        totalExchanges = Object.keys(annualReportsData).filter(exchangeKey => {
            const exchange = annualReportsData[exchangeKey];
            return exchange.reports && exchange.reports.some(report => report.year === 2024);
        }).length;
    }

    // Update the HTML elements
    const leadingElement = document.getElementById('leadingAuditorShare');
    const bigFourElement = document.getElementById('bigFourShare');
    const totalElement = document.getElementById('totalExchanges2024');

    if (leadingElement) {
        leadingElement.textContent = `${leadingShare}% (${leadingAuditor})`;
    }
    if (bigFourElement) {
        bigFourElement.textContent = `${Math.round(bigFourShare * 10) / 10}%`;
    }
    if (totalElement) {
        totalElement.textContent = `${totalExchanges}家`;
    }
}

// Create auditor distribution chart (2024 data only)
function createAuditorChart() {
    const ctx = document.getElementById('auditorChart');
    if (!ctx) return;

    // Set canvas size explicitly
    ctx.style.maxHeight = '300px';
    ctx.style.maxWidth = '100%';

    // Calculate 2024 auditor distribution from annual reports data
    const auditor2024Distribution = calculate2024AuditorDistribution();

    // Update market concentration metrics
    update2024MarketMetrics(auditor2024Distribution);

    auditorChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: auditor2024Distribution.labels,
            datasets: [{
                data: auditor2024Distribution.data,
                backgroundColor: [
                    '#2563eb',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444',
                    '#8b5cf6',
                    '#f97316'
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 1,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        font: {
                            size: 11
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                duration: 1500
            },
            layout: {
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        }
    });
}

// Create audit matters chart
function createAuditMattersChart() {
    const ctx = document.getElementById('auditMattersChart');
    if (!ctx) return;

    // Set canvas size explicitly
    ctx.style.maxHeight = '300px';
    ctx.style.maxWidth = '100%';

    auditMattersChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['商譽減值測試', '收入確認', '金融工具估值', '風險管理', '業務合併'],
            datasets: [{
                label: '出現頻率',
                data: [31.3, 25.2, 13.0, 9.2, 8.4],
                backgroundColor: [
                    '#dc2626',
                    '#f59e0b',
                    '#10b981',
                    '#2563eb',
                    '#8b5cf6'
                ],
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 1.5,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '出現頻率: ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#f3f4f6'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 11
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxRotation: 35,
                        minRotation: 35,
                        font: {
                            size: 10
                        }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            },
            layout: {
                padding: {
                    top: 10,
                    bottom: 5
                }
            }
        }
    });
}

// Tab functionality
function showTab(tabId) {
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab pane
    const selectedPane = document.getElementById(tabId);
    if (selectedPane) {
        selectedPane.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');

    // Refresh and resize charts
    setTimeout(() => {
        resizeAllCharts();
    }, 300);
}

// Resize all charts function
function resizeAllCharts() {
    if (auditorChart) {
        auditorChart.resize();
        // Force canvas size constraints
        const canvas = auditorChart.canvas;
        canvas.style.maxHeight = '300px';
        canvas.style.maxWidth = '100%';
    }
    if (auditMattersChart) {
        auditMattersChart.resize();
        // Force canvas size constraints
        const canvas = auditMattersChart.canvas;
        canvas.style.maxHeight = '300px';
        canvas.style.maxWidth = '100%';
    }
}

// Stakeholder functionality
function showStakeholder(stakeholderId) {
    // Hide all stakeholder panes
    document.querySelectorAll('.stakeholder-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    // Remove active class from all stakeholder buttons
    document.querySelectorAll('.stakeholder-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected stakeholder pane
    const selectedPane = document.getElementById(stakeholderId);
    if (selectedPane) {
        selectedPane.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('findingModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Show finding detail in modal
function showFindingDetail(findingType) {
    const modal = document.getElementById('findingModal');
    const modalContent = document.getElementById('modalContent');
    
    const findingDetails = {
        concentration: {
            title: '審計師市場高度集中',
            content: `
                <h3>市場集中度分析</h3>
                <div class="detail-section">
                    <h4>主要發現：</h4>
                    <ul>
                        <li>四大會計師事務所（Ernst & Young、Deloitte、PwC、KPMG）完全主導全球主要交易所審計市場</li>
                        <li>Ernst & Young LLP在美國市場具有壟斷地位，服務ICE和NASDAQ兩大交易所</li>
                        <li>地區專業化明顯，不同地區呈現不同的主導審計師</li>
                    </ul>
                </div>
                <div class="detail-section">
                    <h4>影響分析：</h4>
                    <ul>
                        <li><strong>正面影響：</strong>專業化程度高，服務質量有保障</li>
                        <li><strong>負面影響：</strong>可能存在系統性風險，缺乏競爭</li>
                        <li><strong>監管關注：</strong>需要平衡專業化與市場競爭</li>
                    </ul>
                </div>
                <div class="detail-section">
                    <h4>未來趨勢：</h4>
                    <p>預計短期內市場結構不會發生重大變化，但監管機構可能會加強對市場集中度的關注。</p>
                </div>
            `
        },
        consistency: {
            title: '關鍵審計事項高度一致',
            content: `
                <h3>關鍵審計事項一致性分析</h3>
                <div class="detail-section">
                    <h4>共同關鍵審計事項：</h4>
                    <ol>
                        <li><strong>商譽減值測試</strong> - 所有交易所的首要關注點</li>
                        <li><strong>收入確認</strong> - 多元化業務模式的挑戰</li>
                        <li><strong>無形資產評估</strong> - 技術驅動行業的特點</li>
                    </ol>
                </div>
                <div class="detail-section">
                    <h4>行業特色事項：</h4>
                    <ul>
                        <li><strong>數字資產持有</strong> - 美國交易所特色</li>
                        <li><strong>併購會計處理</strong> - LSEG等積極併購的交易所</li>
                        <li><strong>跨境監管合規</strong> - 國際化程度高的交易所</li>
                    </ul>
                </div>
                <div class="detail-section">
                    <h4>一致性原因：</h4>
                    <p>交易所行業具有相似的商業模式、風險特徵和監管環境，導致面臨的關鍵審計挑戰高度一致。</p>
                </div>
            `
        },
        stability: {
            title: '審計師關係極其穩定',
            content: `
                <h3>審計師關係穩定性分析</h3>
                <div class="detail-section">
                    <h4>穩定性表現：</h4>
                    <ul>
                        <li>美國交易所（ICE、NASDAQ）與Ernst & Young保持長期穩定合作</li>
                        <li>香港交易所（HKEX）與PwC維持穩定關係</li>
                        <li>僅LSEG在2022年發生審計師變更（PwC → Deloitte）</li>
                    </ul>
                </div>
                <div class="detail-section">
                    <h4>穩定性原因：</h4>
                    <ul>
                        <li><strong>專業壁壘：</strong>交易所審計需要高度專業化知識</li>
                        <li><strong>監管要求：</strong>審計師變更需要監管機構批准</li>
                        <li><strong>成本考量：</strong>變更審計師涉及高昂的轉換成本</li>
                        <li><strong>風險管理：</strong>穩定關係有助於風險控制</li>
                    </ul>
                </div>
                <div class="detail-section">
                    <h4>LSEG變更案例：</h4>
                    <p>LSEG的審計師變更可能與審計師輪換政策、尋求新審計視角、成本效益考量等因素有關。</p>
                </div>
            `
        },
        emerging: {
            title: '新興風險快速增長',
            content: `
                <h3>新興風險領域分析</h3>
                <div class="detail-section">
                    <h4>主要新興風險：</h4>
                    <ul>
                        <li><strong>數字資產會計處理：</strong>加密貨幣、NFT等新型資產的估值和會計處理</li>
                        <li><strong>ESG披露要求：</strong>環境、社會和治理因素的報告和審計</li>
                        <li><strong>網絡安全風險：</strong>數據保護、系統安全的內控審計</li>
                        <li><strong>人工智能應用：</strong>AI算法的透明度和可審計性</li>
                    </ul>
                </div>
                <div class="detail-section">
                    <h4>挑戰分析：</h4>
                    <ul>
                        <li><strong>標準缺失：</strong>新興領域缺乏成熟的會計和審計標準</li>
                        <li><strong>技術複雜：</strong>需要審計師具備新的技術知識</li>
                        <li><strong>監管滯後：</strong>監管框架尚未完全跟上技術發展</li>
                    </ul>
                </div>
                <div class="detail-section">
                    <h4>應對策略：</h4>
                    <p>審計師事務所正在投資新技術培訓、建立專業團隊，監管機構也在制定相關標準和指引。</p>
                </div>
            `
        }
    };
    
    const detail = findingDetails[findingType];
    if (detail) {
        modalContent.innerHTML = `
            <h2>${detail.title}</h2>
            ${detail.content}
        `;
        modal.style.display = 'block';
    }
}

// Initialize Mermaid diagrams
function initializeMermaid() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'Inter, sans-serif'
        });
    }
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.overview-card, .finding-item, .trend-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export data functionality
function exportData(format) {
    const data = {
        auditorDistribution: {
            'Ernst & Young': 40,
            'Deloitte': 20,
            'PwC': 25,
            'KPMG': 10,
            '其他': 5
        },
        keyAuditMatters: {
            '商譽減值測試': 95,
            '收入確認': 85,
            '無形資產評估': 80,
            '數字資產持有': 70,
            '併購會計處理': 65
        }
    };

    if (format === 'json') {
        const dataStr = JSON.stringify(data, null, 2);
        downloadFile('audit-analysis-data.json', dataStr, 'application/json');
    } else if (format === 'csv') {
        let csvContent = 'Category,Item,Value\n';
        
        Object.entries(data.auditorDistribution).forEach(([key, value]) => {
            csvContent += `Auditor Distribution,${key},${value}\n`;
        });
        
        Object.entries(data.keyAuditMatters).forEach(([key, value]) => {
            csvContent += `Key Audit Matters,${key},${value}\n`;
        });
        
        downloadFile('audit-analysis-data.csv', csvContent, 'text/csv');
    }
}

function downloadFile(filename, content, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Print functionality
function printReport() {
    window.print();
}

// Search functionality
function searchContent(query) {
    const searchResults = [];
    const content = document.body.innerText.toLowerCase();
    const queryLower = query.toLowerCase();
    
    if (content.includes(queryLower)) {
        // Simple search implementation
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            if (section.innerText.toLowerCase().includes(queryLower)) {
                searchResults.push({
                    title: section.querySelector('h2')?.innerText || 'Unknown Section',
                    id: section.id
                });
            }
        });
    }
    
    return searchResults;
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeAnimations, 500);
});

// Add smooth scrolling behavior to all internal links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}

// Initialize performance tracking
trackPerformance();

// Key Audit Matters Functionality
let allMatters = [];
let filteredMatters = [];
let kamCharts = {};

// Initialize Key Audit Matters
function initializeKAM() {
    if (typeof keyAuditMattersData !== 'undefined') {
        loadKAMData();
        updateKAMStatistics();
        renderMatters();
        initializeKAMCharts();
    }
}

// Load Key Audit Matters data
function loadKAMData() {
    allMatters = [];

    Object.keys(keyAuditMattersData).forEach(exchangeKey => {
        const exchange = keyAuditMattersData[exchangeKey];
        exchange.matters.forEach(yearData => {
            yearData.keyMatters.forEach(matter => {
                allMatters.push({
                    ...matter,
                    exchangeKey: exchangeKey,
                    exchangeName: exchange.name,
                    auditor: matter.auditor || exchange.auditor,  // Use matter's auditor if available
                    year: yearData.year
                });
            });
        });
    });

    filteredMatters = [...allMatters];
}

// Update KAM statistics
function updateKAMStatistics() {
    const totalMatters = allMatters.length;
    const highRiskMatters = allMatters.filter(m => m.riskLevel === 'High').length;
    const uniqueThemes = new Set(allMatters.map(m => m.title.split(' - ')[0])).size;
    const auditorsCount = new Set(allMatters.map(m => m.auditor.split(' (')[0])).size;

    // Update statistics display
    const statsElements = {
        totalMatters: document.getElementById('totalMatters'),
        highRiskMatters: document.getElementById('highRiskMatters'),
        uniqueThemes: document.getElementById('uniqueThemes'),
        auditorsCount: document.getElementById('auditorsCount')
    };

    if (statsElements.totalMatters) statsElements.totalMatters.textContent = totalMatters;
    if (statsElements.highRiskMatters) statsElements.highRiskMatters.textContent = highRiskMatters;
    if (statsElements.uniqueThemes) statsElements.uniqueThemes.textContent = uniqueThemes;
    if (statsElements.auditorsCount) statsElements.auditorsCount.textContent = auditorsCount;
}

// Filter matters based on selected criteria
function filterMatters() {
    const exchangeFilter = document.getElementById('exchangeFilter')?.value || 'all';
    const yearFilter = document.getElementById('yearFilter')?.value || 'all';
    const riskFilter = document.getElementById('riskFilter')?.value || 'all';
    const themeFilter = document.getElementById('themeFilter')?.value || 'all';

    filteredMatters = allMatters.filter(matter => {
        const exchangeMatch = exchangeFilter === 'all' || matter.exchangeKey === exchangeFilter;
        const yearMatch = yearFilter === 'all' || matter.year.toString() === yearFilter;
        const riskMatch = riskFilter === 'all' || matter.riskLevel === riskFilter;
        const themeMatch = themeFilter === 'all' ||
            matter.title.toLowerCase().includes(themeFilter.toLowerCase()) ||
            matter.description.toLowerCase().includes(themeFilter.toLowerCase());

        return exchangeMatch && yearMatch && riskMatch && themeMatch;
    });

    renderMatters();
    updateKAMCharts();
}

// Render matters in the container
function renderMatters() {
    const container = document.getElementById('mattersContainer');
    if (!container) return;

    container.innerHTML = '';

    if (filteredMatters.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>沒有找到符合條件的審計事項</p>
            </div>
        `;
        return;
    }

    filteredMatters.forEach(matter => {
        const matterCard = createMatterCard(matter);
        container.appendChild(matterCard);
    });
}

// Create a matter card element
function createMatterCard(matter) {
    const card = document.createElement('div');
    card.className = 'kam-matter-card';

    const riskClass = `kam-risk-${matter.riskLevel.toLowerCase()}`;

    card.innerHTML = `
        <div class="kam-matter-header">
            <h4 class="kam-matter-title">${matter.title}</h4>
            <span class="kam-risk-badge ${riskClass}">${matter.riskLevel}</span>
        </div>

        <div class="kam-matter-meta">
            <span><i class="fas fa-building"></i> ${matter.exchangeName}</span>
            <span><i class="fas fa-calendar"></i> ${matter.year}</span>
            <span><i class="fas fa-user-tie"></i> ${matter.auditor.split(' (')[0]}</span>
        </div>

        <div class="kam-matter-description">
            ${matter.description}
        </div>

        <div class="kam-audit-response">
            <div class="kam-audit-response-label">
                <i class="fas fa-clipboard-check"></i> 審計應對措施
            </div>
            <div class="kam-audit-response-text">
                ${matter.auditResponse}
            </div>
        </div>
    `;

    return card;
}

// Initialize KAM Charts
function initializeKAMCharts() {
    initializeRiskDistributionChart();
    initializeThemeTrendsChart();
    initializeAuditorPatternsChart();
}

// Risk Distribution Chart
function initializeRiskDistributionChart() {
    const ctx = document.getElementById('riskDistributionChart');
    if (!ctx) return;

    const riskCounts = {
        'High': filteredMatters.filter(m => m.riskLevel === 'High').length,
        'Medium': filteredMatters.filter(m => m.riskLevel === 'Medium').length,
        'Low': filteredMatters.filter(m => m.riskLevel === 'Low').length
    };

    if (kamCharts.riskDistribution) {
        kamCharts.riskDistribution.destroy();
    }

    kamCharts.riskDistribution = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['高風險', '中風險', '低風險'],
            datasets: [{
                data: [riskCounts.High, riskCounts.Medium, riskCounts.Low],
                backgroundColor: ['#dc2626', '#d97706', '#16a34a'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return `${context.label}: ${context.parsed} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Theme Trends Chart
function initializeThemeTrendsChart() {
    const ctx = document.getElementById('themeTrendsChart');
    if (!ctx) return;

    const themeCounts = {};
    filteredMatters.forEach(matter => {
        const theme = matter.title.split(' - ')[0];
        themeCounts[theme] = (themeCounts[theme] || 0) + 1;
    });

    const sortedThemes = Object.entries(themeCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 8);

    if (kamCharts.themesTrends) {
        kamCharts.themesTrends.destroy();
    }

    kamCharts.themesTrends = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedThemes.map(([theme]) => theme),
            datasets: [{
                label: '出現次數',
                data: sortedThemes.map(([, count]) => count),
                backgroundColor: 'rgba(102, 126, 234, 0.8)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// Auditor Patterns Chart
function initializeAuditorPatternsChart() {
    const ctx = document.getElementById('auditorPatternsChart');
    if (!ctx) return;

    const auditorCounts = {};
    filteredMatters.forEach(matter => {
        const auditor = matter.auditor.split(' (')[0];
        auditorCounts[auditor] = (auditorCounts[auditor] || 0) + 1;
    });

    if (kamCharts.auditorPatterns) {
        kamCharts.auditorPatterns.destroy();
    }

    kamCharts.auditorPatterns = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(auditorCounts),
            datasets: [{
                label: '審計事項數量',
                data: Object.values(auditorCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 205, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Update KAM Charts
function updateKAMCharts() {
    if (typeof Chart !== 'undefined') {
        initializeRiskDistributionChart();
        initializeThemeTrendsChart();
        initializeAuditorPatternsChart();
    }
}

// Annual Reports Functionality
let allReports = [];
let filteredReports = [];
let downloadQueue = [];
let isDownloading = false;

// Initialize Annual Reports
function initializeAnnualReports() {
    if (typeof annualReportsData !== 'undefined') {
        loadReportsData();
        renderReports();
    }
}

// Load reports data from the database
function loadReportsData() {
    allReports = [];
    Object.keys(annualReportsData).forEach(exchangeKey => {
        const exchange = annualReportsData[exchangeKey];
        exchange.reports.forEach(report => {
            allReports.push({
                ...report,
                exchangeKey: exchangeKey,
                exchangeName: exchange.name,
                region: exchange.region,
                auditor: exchange.auditor
            });
        });
    });
    filteredReports = [...allReports];
}

// Render reports in the grid
function renderReports() {
    const reportsGrid = document.getElementById('reportsGrid');
    if (!reportsGrid) return;

    reportsGrid.innerHTML = '';

    // Update statistics
    updateReportsStatistics();

    if (filteredReports.length === 0) {
        reportsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #6b7280;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>沒有找到符合條件的報告</p>
            </div>
        `;
        return;
    }

    filteredReports.forEach(report => {
        const reportCard = createReportCard(report);
        reportsGrid.appendChild(reportCard);
    });
}

// Update reports statistics
function updateReportsStatistics() {
    const totalReports = allReports.length;
    const downloadedReports = allReports.filter(report => checkIfDownloaded(report.localPath)).length;
    const totalSize = allReports.reduce((sum, report) => {
        const sizeMatch = report.fileSize.match(/(\d+\.?\d*)\s*MB/);
        return sum + (sizeMatch ? parseFloat(sizeMatch[1]) : 0);
    }, 0);

    // Update statistics in the page
    const statsElements = {
        total: document.querySelector('.stat-number[data-stat="total"]'),
        downloaded: document.querySelector('.stat-number[data-stat="downloaded"]'),
        size: document.querySelector('.stat-number[data-stat="size"]'),
        exchanges: document.querySelector('.stat-number[data-stat="exchanges"]')
    };

    if (statsElements.total) {
        statsElements.total.textContent = totalReports;
    }

    if (statsElements.downloaded) {
        statsElements.downloaded.textContent = downloadedReports;
    }

    if (statsElements.size) {
        statsElements.size.textContent = `${totalSize.toFixed(1)} MB`;
    }

    if (statsElements.exchanges) {
        const uniqueExchanges = new Set(allReports.map(r => r.exchangeKey)).size;
        statsElements.exchanges.textContent = uniqueExchanges;
    }

    // Update progress bar if exists
    const progressBar = document.querySelector('.download-progress-bar');
    if (progressBar) {
        const percentage = totalReports > 0 ? (downloadedReports / totalReports) * 100 : 0;
        progressBar.style.width = `${percentage}%`;
    }

    // Update status text
    const statusText = document.querySelector('.download-status-text');
    if (statusText) {
        statusText.textContent = `已下載 ${downloadedReports}/${totalReports} 個報告 (${(downloadedReports/totalReports*100).toFixed(1)}%)`;
    }
}

// Create a report card element
function createReportCard(report) {
    const card = document.createElement('div');
    card.className = 'report-card';
    card.setAttribute('data-exchange', report.exchangeKey);
    card.setAttribute('data-year', report.year);

    const isDownloaded = checkIfDownloaded(report.localPath);
    if (isDownloaded) {
        card.classList.add('downloaded');
    }

    card.innerHTML = `
        <div class="report-header">
            <h4 class="report-title">${report.exchangeName}</h4>
            <span class="report-year">${report.year}</span>
        </div>
        <div class="report-meta">
            <div class="report-meta-item">
                <i class="fas fa-file-pdf"></i>
                <span>${report.type} • ${report.fileSize} • ${report.pages} 頁</span>
            </div>
            <div class="report-meta-item">
                <i class="fas fa-calendar"></i>
                <span>發布日期: ${formatDate(report.filingDate)}</span>
            </div>
            <div class="report-meta-item">
                <i class="fas fa-user-tie"></i>
                <span>審計師: ${report.auditor}</span>
            </div>
            <div class="report-meta-item">
                <i class="fas fa-globe"></i>
                <span>地區: ${report.region}</span>
            </div>
        </div>
        <div class="report-actions">
            <a href="${report.url}" target="_blank" class="report-btn primary">
                <i class="fas fa-external-link-alt"></i>
                在線查看
            </a>
            <button class="report-btn secondary" onclick="downloadReport('${report.exchangeKey}', ${report.year})">
                <i class="fas fa-download"></i>
                ${isDownloaded ? '重新下載' : '下載'}
            </button>
            ${isDownloaded ? `
                <button class="report-btn success" onclick="openLocalReport('${report.localPath}')">
                    <i class="fas fa-folder-open"></i>
                    本地文件
                </button>
            ` : ''}
        </div>
    `;

    return card;
}

// Filter reports based on selected criteria
function filterReports() {
    const exchangeFilter = document.getElementById('exchangeFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;

    filteredReports = allReports.filter(report => {
        const exchangeMatch = exchangeFilter === 'all' || report.exchangeKey === exchangeFilter;
        const yearMatch = yearFilter === 'all' || report.year.toString() === yearFilter;
        return exchangeMatch && yearMatch;
    });

    renderReports();
}

// Download a single report
async function downloadReport(exchangeKey, year) {
    const report = allReports.find(r => r.exchangeKey === exchangeKey && r.year === year);
    if (!report) return;

    try {
        showDownloadStatus();
        updateDownloadProgress(0, `正在下載 ${report.exchangeName} ${year} 年度報告...`);

        // Create directory structure
        await createDirectoryStructure(report.localPath);

        // Simulate download process (in real implementation, this would be actual file download)
        await simulateDownload(report);

        updateDownloadProgress(100, `下載完成: ${report.title}`);
        addDownloadLog(`✓ 成功下載: ${report.title}`, 'success');

        // Update UI to show downloaded state
        setTimeout(() => {
            hideDownloadStatus();
            renderReports(); // Re-render to show downloaded state
        }, 1500);

    } catch (error) {
        addDownloadLog(`✗ 下載失敗: ${report.title} - ${error.message}`, 'error');
        console.error('Download failed:', error);
    }
}

// Download all filtered reports
async function downloadAllReports() {
    if (isDownloading) return;

    isDownloading = true;
    downloadQueue = [...filteredReports];

    showDownloadStatus();
    updateDownloadProgress(0, `準備下載 ${downloadQueue.length} 個報告...`);
    addDownloadLog(`開始批量下載 ${downloadQueue.length} 個報告`, 'info');

    for (let i = 0; i < downloadQueue.length; i++) {
        const report = downloadQueue[i];
        const progress = ((i + 1) / downloadQueue.length) * 100;

        try {
            updateDownloadProgress(progress, `正在下載 ${report.exchangeName} ${report.year}...`);

            await createDirectoryStructure(report.localPath);
            await simulateDownload(report);

            addDownloadLog(`✓ ${report.exchangeName} ${report.year} 下載完成`, 'success');

        } catch (error) {
            addDownloadLog(`✗ ${report.exchangeName} ${report.year} 下載失敗: ${error.message}`, 'error');
        }

        // Small delay between downloads
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    updateDownloadProgress(100, '所有下載完成！');
    addDownloadLog('批量下載完成', 'success');

    setTimeout(() => {
        hideDownloadStatus();
        renderReports();
        isDownloading = false;
    }, 2000);
}

// Simulate file download (replace with actual download logic)
async function simulateDownload(report) {
    return new Promise((resolve, reject) => {
        // Simulate download time based on file size
        const sizeInMB = parseFloat(report.fileSize);
        const downloadTime = Math.max(1000, sizeInMB * 200); // Minimum 1 second

        setTimeout(() => {
            // Simulate 95% success rate
            if (Math.random() > 0.05) {
                // Mark as downloaded in localStorage
                markAsDownloaded(report.localPath);
                resolve();
            } else {
                reject(new Error('網絡連接失敗'));
            }
        }, downloadTime);
    });
}

// Create directory structure for local storage
async function createDirectoryStructure(localPath) {
    // In a real implementation, this would create actual directories
    // For demo purposes, we'll just log the action
    const directory = localPath.substring(0, localPath.lastIndexOf('/'));
    console.log(`Creating directory: ${directory}`);
    return Promise.resolve();
}

// Check if report is downloaded
function checkIfDownloaded(localPath) {
    // First check localStorage for compatibility
    const downloaded = localStorage.getItem('downloadedReports');
    if (downloaded) {
        const downloadedList = JSON.parse(downloaded);
        if (downloadedList.includes(localPath)) return true;
    }

    // Check if the report has downloaded flag in the data
    const report = allReports.find(r => r.localPath === localPath);
    if (report && report.downloaded === true) {
        return true;
    }

    // For web environment, we can't directly check file system
    // So we rely on the downloaded flag in the data
    return false;
}

// Mark report as downloaded
function markAsDownloaded(localPath) {
    let downloaded = localStorage.getItem('downloadedReports');
    let downloadedList = downloaded ? JSON.parse(downloaded) : [];
    if (!downloadedList.includes(localPath)) {
        downloadedList.push(localPath);
        localStorage.setItem('downloadedReports', JSON.stringify(downloadedList));
    }
}

// Open local report
function openLocalReport(localPath) {
    // Convert relative path to absolute path for the project
    const projectBasePath = '/Users/Edmond/Documents/augment-projects/e/';
    const fullPath = projectBasePath + localPath;

    // Try to open the file using file:// protocol
    const fileUrl = 'file://' + fullPath;

    // For web browsers, we need to handle this differently
    if (typeof window !== 'undefined') {
        // Try to open in new tab/window
        const newWindow = window.open(fileUrl, '_blank');

        if (!newWindow) {
            // If popup blocked or file protocol not supported, show alternative
            showFileAccessDialog(localPath, fullPath);
        }
    } else {
        // For Node.js environment (not applicable here)
        console.log(`Opening file: ${fullPath}`);
    }
}

// Show file access dialog with instructions
function showFileAccessDialog(localPath, fullPath) {
    const modal = document.createElement('div');
    modal.className = 'file-access-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-file-pdf"></i> 訪問本地文件</h3>
                <button class="close-btn" onclick="this.closest('.file-access-modal').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p><strong>文件位置：</strong></p>
                <div class="file-path">
                    <code>${fullPath}</code>
                    <button class="copy-btn" onclick="copyToClipboard('${fullPath}')">
                        <i class="fas fa-copy"></i> 複製路徑
                    </button>
                </div>

                <div class="access-options">
                    <h4>訪問方式：</h4>
                    <div class="option">
                        <strong>1. 直接打開：</strong>
                        <button class="file-btn" onclick="window.open('file://${fullPath}', '_blank')">
                            <i class="fas fa-external-link-alt"></i> 嘗試打開文件
                        </button>
                    </div>

                    <div class="option">
                        <strong>2. 手動導航：</strong>
                        <p>在Finder中導航到上述路徑，然後雙擊PDF文件</p>
                    </div>

                    <div class="option">
                        <strong>3. 終端命令：</strong>
                        <div class="command-box">
                            <code>open "${fullPath}"</code>
                            <button class="copy-btn" onclick="copyToClipboard('open &quot;${fullPath}&quot;')">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop" onclick="this.closest('.file-access-modal').remove()"></div>
    `;

    document.body.appendChild(modal);
}

// Copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('路徑已複製到剪貼板', 'success');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

// Fallback copy method
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showToast('路徑已複製到剪貼板', 'success');
    } catch (err) {
        showToast('複製失敗，請手動複製路徑', 'error');
    }

    document.body.removeChild(textArea);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'}"></i>
        ${message}
    `;

    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Export reports list
function exportReportsList() {
    const csvContent = generateReportsCSV();
    downloadFile('annual-reports-list.csv', csvContent, 'text/csv');
}

// Generate CSV content for reports list
function generateReportsCSV() {
    const headers = ['交易所', '年份', '報告類型', '文件大小', '頁數', '發布日期', '審計師', '地區', '下載鏈接', '本地路徑'];
    const rows = [headers.join(',')];

    filteredReports.forEach(report => {
        const row = [
            `"${report.exchangeName}"`,
            report.year,
            `"${report.type}"`,
            `"${report.fileSize}"`,
            report.pages,
            report.filingDate,
            `"${report.auditor}"`,
            `"${report.region}"`,
            `"${report.url}"`,
            `"${report.localPath}"`
        ];
        rows.push(row.join(','));
    });

    return rows.join('\n');
}

// Download status functions
function showDownloadStatus() {
    const statusDiv = document.getElementById('downloadStatus');
    if (statusDiv) {
        statusDiv.style.display = 'block';
        document.getElementById('downloadLog').innerHTML = '';
    }
}

function hideDownloadStatus() {
    const statusDiv = document.getElementById('downloadStatus');
    if (statusDiv) {
        statusDiv.style.display = 'none';
    }
}

function updateDownloadProgress(percentage, text) {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    if (progressFill) {
        progressFill.style.width = percentage + '%';
    }

    if (progressText) {
        progressText.textContent = text;
    }
}

function addDownloadLog(message, type = 'info') {
    const logDiv = document.getElementById('downloadLog');
    if (!logDiv) return;

    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${type}`;
    logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;

    logDiv.appendChild(logEntry);
    logDiv.scrollTop = logDiv.scrollHeight;
}

// Auditor Analysis Functions
function initializeAuditorAnalysis() {
    // Initialize with 2024 data
    updateAuditorDistribution();
}

// Auditor distribution data based on actual KAM analysis (2015-2024)
const auditorDataByYear = {
    '2024': {
        'PwC': { exchanges: ['Deutsche Börse AG', 'HKEX'], count: 2, kamCount: 4 },
        'KPMG': { exchanges: ['Euronext N.V.', 'TMX Group'], count: 2, kamCount: 5 },
        'Ernst & Young': { exchanges: ['ICE', 'Nasdaq Inc.'], count: 2, kamCount: 2 },
        'Deloitte': { exchanges: ['LSEG'], count: 1, kamCount: 3 }
    },
    '2023': {
        'Ernst & Young': { exchanges: ['Deutsche Börse AG', 'Euronext N.V.', 'HKEX', 'ICE'], count: 4, kamCount: 8 },
        'PwC': { exchanges: ['LSEG'], count: 1, kamCount: 2 },
        'KPMG': { exchanges: ['Nasdaq Inc.', 'TMX Group'], count: 2, kamCount: 4 }
    },
    '2022': {
        'Ernst & Young': { exchanges: ['Deutsche Börse AG', 'Euronext N.V.', 'HKEX', 'ICE'], count: 4, kamCount: 9 },
        'PwC': { exchanges: ['LSEG'], count: 1, kamCount: 3 },
        'KPMG': { exchanges: ['Nasdaq Inc.', 'TMX Group'], count: 2, kamCount: 5 }
    },
    '2021': {
        'Ernst & Young': { exchanges: ['Deutsche Börse AG', 'Euronext N.V.', 'HKEX', 'ICE'], count: 4, kamCount: 10 },
        'PwC': { exchanges: ['LSEG'], count: 1, kamCount: 4 },
        'KPMG': { exchanges: ['Nasdaq Inc.', 'TMX Group'], count: 2, kamCount: 6 }
    },
    '2020': {
        'Ernst & Young': { exchanges: ['Deutsche Börse AG', 'Euronext N.V.', 'HKEX', 'ICE'], count: 4, kamCount: 8 },
        'PwC': { exchanges: ['LSEG'], count: 1, kamCount: 3 },
        'KPMG': { exchanges: ['Nasdaq Inc.', 'TMX Group'], count: 2, kamCount: 4 }
    },
    '2019': {
        'Ernst & Young': { exchanges: ['Deutsche Börse AG', 'Euronext N.V.', 'HKEX', 'ICE'], count: 4, kamCount: 7 },
        'PwC': { exchanges: ['LSEG'], count: 1, kamCount: 2 },
        'KPMG': { exchanges: ['Nasdaq Inc.', 'TMX Group'], count: 2, kamCount: 3 }
    },
    '2018': {
        'Ernst & Young': { exchanges: ['Deutsche Börse AG', 'Euronext N.V.', 'HKEX', 'ICE'], count: 4, kamCount: 9 },
        'PwC': { exchanges: ['LSEG'], count: 1, kamCount: 4 },
        'KPMG': { exchanges: ['Nasdaq Inc.', 'TMX Group'], count: 2, kamCount: 5 }
    },
    '2017': {
        'Ernst & Young': { exchanges: ['Deutsche Börse AG', 'Euronext N.V.', 'HKEX', 'ICE'], count: 4, kamCount: 11 },
        'PwC': { exchanges: ['LSEG'], count: 1, kamCount: 5 },
        'KPMG': { exchanges: ['Nasdaq Inc.', 'TMX Group'], count: 2, kamCount: 6 }
    },
    '2016': {
        'Ernst & Young': { exchanges: ['Deutsche Börse AG', 'Euronext N.V.', 'HKEX', 'ICE'], count: 4, kamCount: 8 },
        'PwC': { exchanges: ['LSEG'], count: 1, kamCount: 3 },
        'KPMG': { exchanges: ['Nasdaq Inc.', 'TMX Group'], count: 2, kamCount: 4 }
    },
    '2015': {
        'Ernst & Young': { exchanges: ['Deutsche Börse AG', 'Euronext N.V.', 'HKEX', 'ICE'], count: 4, kamCount: 6 },
        'PwC': { exchanges: ['LSEG'], count: 1, kamCount: 2 },
        'KPMG': { exchanges: ['Nasdaq Inc.', 'TMX Group'], count: 2, kamCount: 3 }
    }
};

function updateAuditorDistribution() {
    const selectedYear = document.getElementById('auditorYearSelector').value;
    const data = auditorDataByYear[selectedYear] || auditorDataByYear['2024'];
    const title = `市場集中度分析 (${selectedYear})`;
    const tableTitle = `${selectedYear}年交易所-審計師關係`;

    // Update chart
    updateAuditorChart(data, selectedYear);

    // Update metrics
    updateAuditorMetrics(data, selectedYear);

    // Update table
    updateAuditorTable(data, tableTitle);

    // Update titles
    document.getElementById('concentrationAnalysisTitle').textContent = title;
    document.getElementById('auditorTableTitle').textContent = tableTitle;
}

function updateAuditorChart(data, year) {
    const ctx = document.getElementById('auditorChart').getContext('2d');

    if (auditorChart) {
        auditorChart.destroy();
    }

    const labels = Object.keys(data);
    const totalExchanges = Object.values(data).reduce((sum, item) => sum + item.count, 0);

    // Market share based on percentage of exchanges served
    const values = labels.map(auditor => (data[auditor].count / totalExchanges) * 100);

    const colors = ['#2563eb', '#7c3aed', '#059669', '#dc2626', '#f59e0b'];

    auditorChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: colors.slice(0, labels.length),
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const auditorData = data[label];
                            return [
                                `${label}: ${value.toFixed(1)}%`,
                                `服務交易所: ${auditorData.count}個`,
                                `KAM數量: ${auditorData.kamCount}個`
                            ];
                        }
                    }
                }
            }
        }
    });
}

function updateAuditorMetrics(data, year) {
    const auditors = Object.keys(data);
    const totalExchanges = Object.values(data).reduce((sum, item) => sum + item.count, 0);

    // Leading auditor based on number of exchanges served
    const leadingAuditor = auditors.reduce((prev, current) =>
        data[prev].count > data[current].count ? prev : current
    );
    const leadingShare = (data[leadingAuditor].count / totalExchanges) * 100;

    // Big Four share (always 100% for exchanges)
    const bigFourShare = 100;

    document.getElementById('leadingAuditorShare').textContent = `${leadingShare.toFixed(1)}%`;
    document.getElementById('bigFourShare').textContent = `${bigFourShare}%`;
    document.getElementById('totalExchanges').textContent = totalExchanges;
}

function updateAuditorTable(data, title) {
    let tableHTML = `
        <table class="auditor-table">
            <thead>
                <tr>
                    <th>審計師</th>
                    <th>服務交易所</th>
                    <th>交易所數量</th>
                    <th>KAM數量</th>
                    <th>市場份額</th>
                </tr>
            </thead>
            <tbody>
    `;

    const totalExchanges = Object.values(data).reduce((sum, item) => sum + item.count, 0);

    // Sort auditors by count (descending)
    const sortedAuditors = Object.keys(data).sort((a, b) => data[b].count - data[a].count);

    sortedAuditors.forEach(auditor => {
        const auditorInfo = data[auditor];
        // Market share based on percentage of exchanges served (not KAM count)
        const marketShare = (auditorInfo.count / totalExchanges) * 100;
        const exchangesList = auditorInfo.exchanges.join(', ');

        tableHTML += `
            <tr>
                <td class="auditor-name">${auditor}</td>
                <td class="exchange-name">${exchangesList}</td>
                <td style="text-align: center;">${auditorInfo.count}</td>
                <td style="text-align: center;"><span class="kam-count">${auditorInfo.kamCount}</span></td>
                <td style="text-align: center; font-weight: 600; color: #2563eb;">${marketShare.toFixed(1)}%</td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    document.getElementById('auditorTableContainer').innerHTML = tableHTML;
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
