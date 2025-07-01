// HKEX Leadership Interactive Script
// Handles filtering, searching, and display functionality

let currentData = [];
let currentSection = 'board';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    setupEventListeners();
    setupModalEventListeners();
    showSection('board');
});

function loadData() {
    if (typeof hkexLeadershipData === 'undefined') {
        console.error('hkexLeadershipData is not defined');
        setTimeout(loadData, 500); // Retry after 500ms
        return;
    }

    currentData = hkexLeadershipData.boardMembers || [];
    renderLeadership();
    updateStats();
}

function setupEventListeners() {
    const roleFilter = document.getElementById('roleFilter');
    const committeeFilter = document.getElementById('committeeFilter');
    const searchFilter = document.getElementById('searchFilter');

    if (roleFilter) roleFilter.addEventListener('change', applyFilters);
    if (committeeFilter) committeeFilter.addEventListener('change', applyFilters);
    if (searchFilter) searchFilter.addEventListener('input', applyFilters);
}

function showSection(section) {
    // Update active tab
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

    // Find and activate the correct tab button
    const activeButton = document.querySelector(`[onclick="showSection('${section}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Show/hide sections
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    
    currentSection = section;
    
    // Load appropriate data
    if (section === 'board') {
        currentData = hkexLeadershipData.boardMembers;
        renderLeadership();
    } else if (section === 'management') {
        currentData = hkexLeadershipData.managementCommittee;
        renderLeadership();
    }
}

function applyFilters() {
    const roleFilter = document.getElementById('roleFilter').value;
    const committeeFilter = document.getElementById('committeeFilter').value;
    const searchFilter = document.getElementById('searchFilter').value.toLowerCase();
    
    let filteredData = currentSection === 'board' ? 
        hkexLeadershipData.boardMembers : 
        hkexLeadershipData.managementCommittee;
    
    // Apply role filter
    if (roleFilter) {
        filteredData = filteredData.filter(person => person.role === roleFilter);
    }
    
    // Apply committee filter
    if (committeeFilter) {
        filteredData = filteredData.filter(person => 
            person.committees && person.committees.some(committee => 
                committee.toLowerCase().includes(committeeFilter)
            )
        );
    }
    
    // Apply search filter
    if (searchFilter) {
        filteredData = filteredData.filter(person =>
            person.name.toLowerCase().includes(searchFilter) ||
            person.title.toLowerCase().includes(searchFilter) ||
            (person.chineseName && person.chineseName.includes(searchFilter)) ||
            (person.background && person.background.toLowerCase().includes(searchFilter))
        );
    }
    
    currentData = filteredData;
    renderLeadership();
}

function renderLeadership() {
    console.log('=== renderLeadership called ===');
    console.log('currentSection:', currentSection);
    console.log('currentData length:', currentData ? currentData.length : 'undefined');

    const gridId = currentSection === 'board' ? 'boardGrid' : 'managementGrid';
    const grid = document.getElementById(gridId);

    console.log('gridId:', gridId);
    console.log('grid element:', grid);

    if (!grid) {
        console.error('Grid not found:', gridId);
        return;
    }

    grid.innerHTML = '';

    if (!currentData || currentData.length === 0) {
        console.log('No data available, showing message');
        grid.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No data available</p>';
        return;
    }

    console.log('Rendering', currentData.length, 'cards');
    currentData.forEach((person, index) => {
        console.log(`Creating card ${index + 1} for:`, person.name);
        const card = createPersonCard(person);
        grid.appendChild(card);
    });

    console.log('renderLeadership complete');
}

function createPersonCard(person) {
    const card = document.createElement('div');
    card.className = 'person-card';

    // Avatar display
    const avatarHtml = person.avatar;

    const committeesHtml = person.committees ?
        person.committees.map(committee =>
            `<span class="committee-tag">${committee}</span>`
        ).join('') : '';

    // Education and work experience will be shown in popup only

    const achievementsHtml = person.achievements ?
        person.achievements.map(achievement =>
            `<div class="detail-item"><i class="fas fa-trophy"></i> ${achievement}</div>`
        ).join('') : '';

    const linkedinHtml = person.linkedin ?
        `<div class="detail-item">
            <i class="fab fa-linkedin"></i>
            <a href="${person.linkedin}" target="_blank" style="color: #667eea;">LinkedIn Profile</a>
        </div>` : '';

    card.innerHTML = `
        <div class="person-header">
            <div class="person-avatar">${avatarHtml}</div>
            <div class="person-info">
                <h3>${person.name} ${person.honors ? `<span style="font-size: 0.8em; color: #888;">${person.honors}</span>` : ''}</h3>
                ${person.chineseName ? `<div style="font-size: 0.9em; color: #666; margin-bottom: 4px;">${person.chineseName}</div>` : ''}
                <div class="person-title">${person.title}</div>
            </div>
        </div>

        <div class="person-details">
            ${person.joinedDate ? `<div class="detail-item"><i class="fas fa-calendar-plus"></i> Joined: ${person.joinedDate}</div>` : ''}
            ${person.ceoSince ? `<div class="detail-item"><i class="fas fa-crown"></i> CEO Since: ${person.ceoSince}</div>` : ''}
            ${person.cooSince ? `<div class="detail-item"><i class="fas fa-crown"></i> COO Since: ${person.cooSince}</div>` : ''}
            ${person.cfoSince ? `<div class="detail-item"><i class="fas fa-crown"></i> CFO Since: ${person.cfoSince}</div>` : ''}
            ${person.termOfOffice ? `<div class="detail-item"><i class="fas fa-clock"></i> Term: ${person.termOfOffice}</div>` : ''}
            ${person.department ? `<div class="detail-item"><i class="fas fa-building"></i> Department: ${person.department}</div>` : ''}
            ${person.type ? `<div class="detail-item"><i class="fas fa-user-tag"></i> ${person.type}</div>` : ''}

            <div class="detail-item">
                <i class="fas fa-info-circle"></i>
                <span>${person.background}</span>
            </div>

            ${person.committees ? `
                <div class="committees">
                    <div style="margin-bottom: 8px; font-weight: 600; color: #667eea;">
                        <i class="fas fa-users"></i> Committees:
                    </div>
                    ${committeesHtml}
                </div>
            ` : ''}

            <div class="view-details-btn">
                <button onclick="showPersonDetails('${person.id}')" class="details-button">
                    <i class="fas fa-eye"></i> View Full Details
                </button>
            </div>
        </div>
    `;

    // Add click event to the entire card
    card.addEventListener('click', () => showPersonDetails(person.id));

    return card;
}

function updateStats() {
    if (!hkexLeadershipData || !hkexLeadershipData.boardMembers || !hkexLeadershipData.managementCommittee) {
        console.error('Missing data for stats update');
        return;
    }

    const boardMembers = hkexLeadershipData.boardMembers.length;
    const managementMembers = hkexLeadershipData.managementCommittee.length;
    const independentDirectors = hkexLeadershipData.boardMembers.filter(member =>
        member.role === 'independent'
    ).length;

    const totalBoardEl = document.getElementById('totalBoard');
    const totalManagementEl = document.getElementById('totalManagement');
    const independentDirectorsEl = document.getElementById('independentDirectors');

    if (totalBoardEl) totalBoardEl.textContent = boardMembers;
    if (totalManagementEl) totalManagementEl.textContent = managementMembers;
    if (independentDirectorsEl) independentDirectorsEl.textContent = independentDirectors;

    console.log('Stats updated:', { boardMembers, managementMembers, independentDirectors });
}

// Search functionality
function searchLeadership(query) {
    const searchTerm = query.toLowerCase();
    const allPeople = [...hkexLeadershipData.boardMembers, ...hkexLeadershipData.managementCommittee];
    
    return allPeople.filter(person =>
        person.name.toLowerCase().includes(searchTerm) ||
        person.title.toLowerCase().includes(searchTerm) ||
        (person.chineseName && person.chineseName.includes(searchTerm)) ||
        (person.background && person.background.toLowerCase().includes(searchTerm)) ||
        (person.committees && person.committees.some(committee =>
            committee.toLowerCase().includes(searchTerm)
        ))
    );
}

// Modal functionality
function setupModalEventListeners() {
    const modal = document.getElementById('personModal');
    const closeBtn = document.querySelector('.modal-close');

    // Close modal when clicking the X
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

function showPersonDetails(personId) {
    const allPeople = [...hkexLeadershipData.boardMembers, ...hkexLeadershipData.managementCommittee];
    const person = allPeople.find(p => p.id === personId);

    if (!person) return;

    // Populate modal header
    document.getElementById('modalName').textContent = person.name + (person.honors ? ` ${person.honors}` : '');
    document.getElementById('modalChineseName').textContent = person.chineseName || '';
    document.getElementById('modalTitle').textContent = person.title;

    // Set avatar or photo
    const modalAvatar = document.getElementById('modalAvatar');
    if (person.photoUrl) {
        modalAvatar.innerHTML = `<img src="${person.photoUrl}" alt="${person.name}" class="portrait-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                <div style="display: none; width: 100px; height: 100px; border-radius: 50%; background: rgba(255,255,255,0.2); align-items: center; justify-content: center; font-size: 2rem; font-weight: bold; color: white;">${person.avatar}</div>`;
    } else {
        modalAvatar.innerHTML = person.avatar;
    }

    // Populate modal body
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = generateModalContent(person);

    // Show modal
    document.getElementById('personModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function generateModalContent(person) {
    let content = '';

    // Basic Information
    content += `<div class="modal-section">
        <h3><i class="fas fa-info-circle"></i> Basic Information</h3>
        <ul class="modal-list">`;

    if (person.age) content += `<li><i class="fas fa-calendar"></i> Age: ${person.age}</li>`;
    if (person.birthDate) content += `<li><i class="fas fa-birthday-cake"></i> Birth Date: ${person.birthDate}</li>`;
    if (person.birthPlace) content += `<li><i class="fas fa-map-marker-alt"></i> Birth Place: ${person.birthPlace}</li>`;
    if (person.joinedDate) content += `<li><i class="fas fa-calendar-plus"></i> Joined HKEX: ${person.joinedDate}</li>`;
    if (person.ceoSince) content += `<li><i class="fas fa-crown"></i> CEO Since: ${person.ceoSince}</li>`;
    if (person.cooSince) content += `<li><i class="fas fa-crown"></i> COO Since: ${person.cooSince}</li>`;
    if (person.cfoSince) content += `<li><i class="fas fa-crown"></i> CFO Since: ${person.cfoSince}</li>`;
    if (person.termOfOffice) content += `<li><i class="fas fa-clock"></i> Term of Office: ${person.termOfOffice}</li>`;
    if (person.department) content += `<li><i class="fas fa-building"></i> Department: ${person.department}</li>`;

    content += `</ul></div>`;

    // Education
    if (person.education && person.education.length > 0) {
        content += `<div class="modal-section">
            <h3><i class="fas fa-graduation-cap"></i> Education</h3>
            <ul class="modal-list">`;
        person.education.forEach(edu => {
            content += `<li><i class="fas fa-university"></i> ${edu}</li>`;
        });
        content += `</ul></div>`;
    }

    // Professional Qualifications
    if (person.professionalQualifications && person.professionalQualifications.length > 0) {
        content += `<div class="modal-section">
            <h3><i class="fas fa-certificate"></i> Professional Qualifications</h3>
            <ul class="modal-list">`;
        person.professionalQualifications.forEach(qual => {
            content += `<li><i class="fas fa-award"></i> ${qual}</li>`;
        });
        content += `</ul></div>`;
    }

    // Work Experience
    if (person.workExperience && person.workExperience.length > 0) {
        content += `<div class="modal-section">
            <h3><i class="fas fa-briefcase"></i> Work Experience</h3>
            <ul class="modal-list">`;
        person.workExperience.forEach(exp => {
            content += `<li><i class="fas fa-arrow-right"></i> ${exp}</li>`;
        });
        content += `</ul></div>`;
    }

    // Current Positions
    if (person.currentPositions && person.currentPositions.length > 0) {
        content += `<div class="modal-section">
            <h3><i class="fas fa-user-tie"></i> Current Positions</h3>
            <ul class="modal-list">`;
        person.currentPositions.forEach(pos => {
            content += `<li><i class="fas fa-briefcase"></i> ${pos}</li>`;
        });
        content += `</ul></div>`;
    }

    // Achievements
    if (person.achievements && person.achievements.length > 0) {
        content += `<div class="modal-section">
            <h3><i class="fas fa-trophy"></i> Achievements</h3>
            <ul class="modal-list">`;
        person.achievements.forEach(achievement => {
            content += `<li><i class="fas fa-star"></i> ${achievement}</li>`;
        });
        content += `</ul></div>`;
    }

    // Committees
    if (person.committees && person.committees.length > 0) {
        content += `<div class="modal-section">
            <h3><i class="fas fa-users"></i> Committee Memberships</h3>
            <ul class="modal-list">`;
        person.committees.forEach(committee => {
            content += `<li><i class="fas fa-handshake"></i> ${committee}</li>`;
        });
        content += `</ul></div>`;
    }

    // Background
    if (person.background) {
        content += `<div class="modal-section">
            <h3><i class="fas fa-info-circle"></i> Background</h3>
            <p style="line-height: 1.6; color: #666;">${person.background}</p>
        </div>`;
    }

    // LinkedIn
    if (person.linkedin) {
        content += `<div class="modal-section">
            <h3><i class="fab fa-linkedin"></i> Professional Links</h3>
            <p><a href="${person.linkedin}" target="_blank" style="color: #667eea; text-decoration: none;">
                <i class="fab fa-linkedin"></i> LinkedIn Profile
            </a></p>
        </div>`;
    }

    return content;
}

function closeModal() {
    document.getElementById('personModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

// Export functions for external use
window.hkexLeadership = {
    showSection,
    searchLeadership,
    applyFilters,
    showPersonDetails,
    closeModal,
    data: hkexLeadershipData
};
