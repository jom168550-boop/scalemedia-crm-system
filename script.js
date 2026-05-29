// Fake Data Generation
const generateId = () => Math.random().toString(36).substr(2, 9);

const fakeLeads = [
    { id: generateId(), business: 'Sunrise Preschool', contact: 'Sarah Jenkins', category: 'Education', phone: '+91 98765 43210', status: 'Interested', priority: 'Hot', nextFollowUp: 'Today, 2:00 PM' },
    { id: generateId(), business: 'FitLife Gym', contact: 'Mike Tyson', category: 'Fitness', phone: '+91 87654 32109', status: 'Negotiation', priority: 'Warm', nextFollowUp: 'Tomorrow' },
    { id: generateId(), business: 'Elite Dental Clinic', contact: 'Dr. Sharma', category: 'Healthcare', phone: '+91 76543 21098', status: 'Proposal Sent', priority: 'Hot', nextFollowUp: 'Friday' },
    { id: generateId(), business: 'Urban Cafe', contact: 'Rahul Verma', category: 'Restaurant', phone: '+91 65432 10987', status: 'New', priority: 'Cold', nextFollowUp: 'Next Week' },
    { id: generateId(), business: 'Tech Innovators', contact: 'Anita Roy', category: 'B2B', phone: '+91 54321 09876', status: 'Contacted', priority: 'Warm', nextFollowUp: 'Today, 4:30 PM' },
    { id: generateId(), business: 'Greenville Landscaping', contact: 'Tom Hardy', category: 'Services', phone: '+91 43210 98765', status: 'Closed', priority: 'Cold', nextFollowUp: '-' },
    { id: generateId(), business: 'Modern Edge Salon', contact: 'Priya Desai', category: 'Beauty', phone: '+91 32109 87654', status: 'Lost', priority: 'Cold', nextFollowUp: '-' },
];

const fakeCalls = [
    { lead: 'Sunrise Preschool', date: 'Today, 10:30 AM', duration: '12m 45s', result: 'Interested', action: 'Send Proposal' },
    { lead: 'FitLife Gym', date: 'Today, 09:15 AM', duration: '4m 20s', result: 'Call Back Later', action: 'Follow-up Tomorrow' },
    { lead: 'Urban Cafe', date: 'Yesterday, 4:00 PM', duration: '0m 0s', result: 'No Answer', action: 'Try again today' },
    { lead: 'Elite Dental Clinic', date: 'Yesterday, 11:00 AM', duration: '25m 10s', result: 'Meeting Booked', action: 'Prep Presentation' },
];

const fakeWhatsApp = [
    { lead: 'Sunrise Preschool', number: '+91 98765 43210', lastMsg: 'Sounds good, please share the details.', status: 'Replied', followup: 'Today' },
    { lead: 'FitLife Gym', number: '+91 87654 32109', lastMsg: 'Hi Mike, just following up on our last chat.', status: 'Sent', followup: 'Tomorrow' },
    { lead: 'Elite Dental Clinic', number: '+91 76543 21098', lastMsg: 'I have reviewed the proposal.', status: 'Seen', followup: 'Today' },
];

const fakeInstagram = [
    { handle: '@sunrisepreschool', business: 'Sunrise Preschool', lastDm: 'Loved your recent post about child development!', status: 'Replied', action: 'Send Pricing' },
    { handle: '@fitlife_gym', business: 'FitLife Gym', lastDm: 'Are you guys looking for lead gen?', status: 'Seen', action: 'Follow up' },
    { handle: '@urbancafe_official', business: 'Urban Cafe', lastDm: 'Great ambiance!', status: 'Sent', action: 'Wait 2 days' },
];

const fakeFollowups = {
    overdue: [
        { task: 'Call Urban Cafe', type: 'Call', due: 'Yesterday' },
        { task: 'Send Contract to Modern Edge', type: 'Email', due: '2 Days Ago' },
        { task: 'Check WhatsApp Reply', type: 'WhatsApp', due: 'Yesterday' },
    ],
    today: [
        { task: 'Call Sunrise Preschool', type: 'Call', due: '2:00 PM' },
        { task: 'Send Proposal to FitLife', type: 'Email', due: '4:00 PM' },
        { task: 'Confirm Meeting with Dr. Sharma', type: 'WhatsApp', due: '5:30 PM' },
    ],
    upcoming: [
        { task: 'Follow up with Tech Innovators', type: 'Email', due: 'Tomorrow' },
        { task: 'Check in on Greenville Landscaping', type: 'Call', due: 'Friday' },
    ]
};

const fakeMeetings = [
    { title: 'Proposal Review', client: 'Elite Dental Clinic', time: 'Today, 3:00 PM', platform: 'Zoom' },
    { title: 'Discovery Call', client: 'Sunrise Preschool', time: 'Tomorrow, 11:00 AM', platform: 'Google Meet' },
    { title: 'Contract Signing', client: 'FitLife Gym', time: 'Friday, 2:00 PM', platform: 'In-Person' },
];

const fakeProposals = [
    { client: 'Elite Dental Clinic', value: '₹45,000/mo', date: 'Oct 15, 2023', status: 'Sent' },
    { client: 'Sunrise Preschool', value: '₹30,000/mo', date: 'Oct 12, 2023', status: 'Negotiation' },
    { client: 'FitLife Gym', value: '₹25,000/mo', date: 'Oct 10, 2023', status: 'Approved' },
];

const fakeTeam = [
    { id: generateId(), name: 'Alex Founder', role: 'Agency Owner', deals: 24, revenue: '₹4.5L' },
    { id: generateId(), name: 'Sarah Sales', role: 'Sales Exec', deals: 15, revenue: '₹2.1L' },
    { id: generateId(), name: 'Mike Closer', role: 'Account Manager', deals: 18, revenue: '₹3.2L' },
];

// Helper to get status color classes
const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case 'hot':
        case 'lost':
        case 'overdue':
        case 'no answer':
            return 'bg-red-500/20 text-red-400';
        case 'warm':
        case 'negotiation':
        case 'call back later':
            return 'bg-yellow-500/20 text-yellow-400';
        case 'cold':
        case 'new':
        case 'sent':
            return 'bg-blue-500/20 text-blue-400';
        case 'interested':
        case 'proposal sent':
        case 'replied':
        case 'seen':
            return 'bg-purple-500/20 text-purple-400';
        case 'closed':
        case 'approved':
        case 'meeting booked':
            return 'bg-emerald-500/20 text-emerald-400';
        default:
            return 'bg-gray-500/20 text-gray-400';
    }
};

// Render Functions
const renderLeads = () => {
    const tbody = document.getElementById('leads-table-body');
    if (!tbody) return;
    tbody.innerHTML = fakeLeads.map(lead => `
        <tr class="hover:bg-white/5 transition-colors group">
            <td class="px-6 py-4 font-medium text-white">${lead.business}</td>
            <td class="px-6 py-4">
                <div class="flex flex-col">
                    <span>${lead.contact}</span>
                    <span class="text-xs text-gray-500">${lead.phone}</span>
                </div>
            </td>
            <td class="px-6 py-4">${lead.category}</td>
            <td class="px-6 py-4"><span class="px-2 py-1 rounded text-xs font-medium ${getStatusBadge(lead.status)}">${lead.status}</span></td>
            <td class="px-6 py-4"><span class="px-2 py-1 rounded text-xs font-medium ${getStatusBadge(lead.priority)}">${lead.priority}</span></td>
            <td class="px-6 py-4 text-gray-400">${lead.nextFollowUp}</td>
            <td class="px-6 py-4 text-right">
                <button class="text-gray-400 hover:text-blue-400 mr-2 transition-colors"><i class="fa-solid fa-pen"></i></button>
                <button class="text-gray-400 hover:text-red-400 transition-colors"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
};

const renderCalls = () => {
    const tbody = document.getElementById('calls-table-body');
    if (!tbody) return;
    tbody.innerHTML = fakeCalls.map(call => `
        <tr class="hover:bg-white/5 transition-colors group">
            <td class="px-6 py-4 font-medium text-white">${call.lead}</td>
            <td class="px-6 py-4 text-gray-400">${call.date}</td>
            <td class="px-6 py-4">${call.duration}</td>
            <td class="px-6 py-4"><span class="px-2 py-1 rounded text-xs font-medium ${getStatusBadge(call.result)}">${call.result}</span></td>
            <td class="px-6 py-4 text-gray-400">${call.action}</td>
        </tr>
    `).join('');
};

const renderWhatsApp = () => {
    const tbody = document.getElementById('whatsapp-table-body');
    if (!tbody) return;
    tbody.innerHTML = fakeWhatsApp.map(wa => `
        <tr class="hover:bg-white/5 transition-colors group">
            <td class="px-6 py-4 font-medium text-white">${wa.lead}</td>
            <td class="px-6 py-4 text-gray-400">${wa.number}</td>
            <td class="px-6 py-4 truncate max-w-[200px] text-gray-400">${wa.lastMsg}</td>
            <td class="px-6 py-4"><span class="px-2 py-1 rounded text-xs font-medium ${getStatusBadge(wa.status)}">${wa.status}</span></td>
            <td class="px-6 py-4 text-gray-400">${wa.followup}</td>
        </tr>
    `).join('');
};

const renderInstagram = () => {
    const tbody = document.getElementById('instagram-table-body');
    if (!tbody) return;
    tbody.innerHTML = fakeInstagram.map(ig => `
        <tr class="hover:bg-white/5 transition-colors group">
            <td class="px-6 py-4 font-medium text-pink-400">${ig.handle}</td>
            <td class="px-6 py-4 text-white">${ig.business}</td>
            <td class="px-6 py-4 truncate max-w-[200px] text-gray-400">${ig.lastDm}</td>
            <td class="px-6 py-4"><span class="px-2 py-1 rounded text-xs font-medium ${getStatusBadge(ig.status)}">${ig.status}</span></td>
            <td class="px-6 py-4 text-gray-400">${ig.action}</td>
        </tr>
    `).join('');
};

const renderFollowups = () => {
    ['overdue', 'today', 'upcoming'].forEach(type => {
        const container = document.getElementById(`followups-${type}`);
        if (!container) return;
        container.innerHTML = fakeFollowups[type].map(fu => `
            <div class="glass p-3 rounded-lg border border-white/5 hover:border-white/20 transition-colors flex justify-between items-center cursor-pointer">
                <div>
                    <h4 class="text-white text-sm font-medium mb-1">${fu.task}</h4>
                    <div class="flex items-center text-xs text-gray-400 gap-2">
                        <span><i class="fa-solid fa-${fu.type.toLowerCase() === 'call' ? 'phone' : (fu.type.toLowerCase() === 'email' ? 'envelope' : 'message')} mr-1"></i> ${fu.type}</span>
                        <span>&bull;</span>
                        <span class="${type === 'overdue' ? 'text-red-400' : ''}">${fu.due}</span>
                    </div>
                </div>
                <button class="w-6 h-6 rounded-full border border-gray-500 hover:border-emerald-500 hover:bg-emerald-500/20 text-transparent hover:text-emerald-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-check text-xs"></i>
                </button>
            </div>
        `).join('');
    });
};

const renderMeetings = () => {
    const container = document.getElementById('meetings-list');
    if (!container) return;
    container.innerHTML = fakeMeetings.map(mtg => `
        <div class="glass p-4 rounded-xl border border-white/5 hover:border-white/20 transition-colors flex items-center justify-between">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex flex-col items-center justify-center border border-blue-500/20">
                    <span class="text-xs text-blue-400 font-bold uppercase">${mtg.time.split(',')[0]}</span>
                    <span class="text-white font-bold">${mtg.time.split(',')[1].trim().split(' ')[0]}</span>
                </div>
                <div>
                    <h4 class="text-white font-medium">${mtg.title}</h4>
                    <p class="text-sm text-gray-400">${mtg.client} &bull; ${mtg.platform}</p>
                </div>
            </div>
            <button class="btn-modern bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-lg text-sm transition-colors border border-white/10">
                Join
            </button>
        </div>
    `).join('');
};

const renderProposals = () => {
    const tbody = document.getElementById('proposals-table-body');
    if (!tbody) return;
    tbody.innerHTML = fakeProposals.map(prop => `
        <tr class="hover:bg-white/5 transition-colors group">
            <td class="px-6 py-4 font-medium text-white">${prop.client}</td>
            <td class="px-6 py-4 text-emerald-400 font-bold">${prop.value}</td>
            <td class="px-6 py-4 text-gray-400">${prop.date}</td>
            <td class="px-6 py-4"><span class="px-2 py-1 rounded text-xs font-medium ${getStatusBadge(prop.status)}">${prop.status}</span></td>
            <td class="px-6 py-4 text-right">
                <button class="text-gray-400 hover:text-blue-400 mr-2 transition-colors"><i class="fa-solid fa-eye"></i></button>
            </td>
        </tr>
    `).join('');
};

const renderTeam = () => {
    const container = document.getElementById('team-grid');
    if (!container) return;
    container.innerHTML = fakeTeam.map(member => `
        <div class="glass rounded-2xl p-6 border border-white/5 flex flex-col items-center text-center hover:border-blue-500/50 transition-colors relative group">
            <button class="remove-member-btn absolute top-3 right-3 w-8 h-8 flex justify-center items-center rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300" data-id="${member.id}">
                <i class="fa-solid fa-trash text-sm"></i>
            </button>
            <img src="https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=random&color=fff" class="w-20 h-20 rounded-full border-4 border-dark mb-4">
            <h3 class="text-white font-bold text-lg">${member.name}</h3>
            <p class="text-blue-400 text-sm mb-4">${member.role}</p>
            <div class="w-full grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                <div>
                    <p class="text-gray-400 text-xs mb-1">Deals Closed</p>
                    <p class="text-white font-bold">${member.deals}</p>
                </div>
                <div>
                    <p class="text-gray-400 text-xs mb-1">Revenue</p>
                    <p class="text-emerald-400 font-bold">${member.revenue}</p>
                </div>
            </div>
        </div>
    `).join('');
};

// Charts Initialization
const initCharts = () => {
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = 'Inter';

    const outreachCtx = document.getElementById('outreachChart');
    if (outreachCtx) {
        new Chart(outreachCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Calls Made',
                        data: [120, 150, 180, 140, 210, 250],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Meetings Booked',
                        data: [20, 35, 45, 30, 50, 65],
                        borderColor: '#8b5cf6',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top' } },
                scales: {
                    y: { grid: { color: 'rgba(255, 255, 255, 0.05)' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    const sourceCtx = document.getElementById('sourceChart');
    if (sourceCtx) {
        new Chart(sourceCtx, {
            type: 'doughnut',
            data: {
                labels: ['Cold Calling', 'Instagram DMs', 'WhatsApp', 'Referrals'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#3b82f6', '#ec4899', '#22c55e', '#f59e0b'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                cutout: '75%'
            }
        });
    }

    // Analytics Dashboard Charts
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Revenue (₹)',
                    data: [120000, 190000, 250000, 310000],
                    backgroundColor: '#10b981',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { grid: { color: 'rgba(255, 255, 255, 0.05)' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    const channelCtx = document.getElementById('channelChart');
    if (channelCtx) {
        new Chart(channelCtx, {
            type: 'polarArea',
            data: {
                labels: ['Email', 'Calls', 'Social Media', 'Ads'],
                datasets: [{
                    data: [11, 16, 7, 3],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.5)',
                        'rgba(139, 92, 246, 0.5)',
                        'rgba(236, 72, 153, 0.5)',
                        'rgba(245, 158, 11, 0.5)'
                    ],
                    borderColor: 'rgba(15, 23, 42, 1)',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'right' } }
            }
        });
    }
};

// Navigation Logic
const setupNavigation = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.view-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => {
                l.classList.remove('bg-white/10', 'text-white', 'active-nav');
                l.classList.add('text-gray-300');
            });
            
            // Add active class to clicked link
            link.classList.add('bg-white/10', 'text-white', 'active-nav');
            link.classList.remove('text-gray-300');

            // Hide all sections
            sections.forEach(sec => {
                sec.classList.remove('active');
            });

            // Show target section
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(`view-${targetId}`);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Mobile: close sidebar on click
            if (window.innerWidth < 768) {
                document.getElementById('sidebar').classList.add('hidden');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('absolute');
            sidebar.classList.toggle('z-50');
            sidebar.classList.toggle('bg-darker');
        });
    }
};

// Modal & Interactions Logic
const setupInteractions = () => {
    // Add Lead Modal
    const addLeadBtn = document.getElementById('add-lead-btn');
    const addLeadModal = document.getElementById('add-lead-modal');
    const addLeadModalContent = document.getElementById('add-lead-modal-content');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const cancelModalBtn = document.getElementById('cancel-modal-btn');
    const addLeadForm = document.getElementById('add-lead-form');

    const openModal = () => {
        addLeadModal.classList.remove('hidden');
        // Small delay for animation
        setTimeout(() => {
            addLeadModalContent.classList.remove('scale-95', 'opacity-0');
            addLeadModalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    };

    const closeModal = () => {
        addLeadModalContent.classList.remove('scale-100', 'opacity-100');
        addLeadModalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            addLeadModal.classList.add('hidden');
            addLeadForm.reset();
        }, 300);
    };

    if (addLeadBtn) addLeadBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

    // Form Submission
    if (addLeadForm) {
        addLeadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newLead = {
                id: generateId(),
                business: document.getElementById('lead-business').value,
                contact: document.getElementById('lead-contact').value,
                category: document.getElementById('lead-category').value,
                phone: document.getElementById('lead-phone').value,
                status: document.getElementById('lead-status').value,
                priority: document.getElementById('lead-priority').value,
                nextFollowUp: 'TBD'
            };
            
            fakeLeads.unshift(newLead);
            renderLeads();
            closeModal();
        });
    }

    // Search functionality
    const leadsSearch = document.getElementById('leads-search');
    if (leadsSearch) {
        leadsSearch.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const tbody = document.getElementById('leads-table-body');
            const rows = tbody.querySelectorAll('tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(term)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Quick Add Button -> Opens Add Lead Modal
    const quickAddBtn = document.getElementById('quick-add-btn');
    if (quickAddBtn) quickAddBtn.addEventListener('click', openModal);

    // Generic Modal setup helper
    const setupModal = (modalId, btnId, closeClass, formId, submitCallback) => {
        const modal = document.getElementById(modalId);
        const modalContent = document.getElementById(modalId + '-content');
        const openBtn = document.getElementById(btnId);
        const closeBtns = document.querySelectorAll(`.${closeClass}`);
        const form = document.getElementById(formId);

        if (!modal || !modalContent) return;

        const open = () => {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
        };

        const close = () => {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                if (form) form.reset();
            }, 300);
        };

        if (openBtn) openBtn.addEventListener('click', open);
        closeBtns.forEach(btn => btn.addEventListener('click', close));

        if (form && submitCallback) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                submitCallback();
                close();
            });
        }
    };

    // Setup Call Modal
    setupModal('add-call-modal', 'add-call-btn', 'close-call-btn', 'add-call-form', () => {
        fakeCalls.unshift({
            lead: document.getElementById('call-lead').value,
            date: 'Just Now',
            duration: document.getElementById('call-duration').value,
            result: document.getElementById('call-result').value,
            action: document.getElementById('call-action').value
        });
        renderCalls();
    });

    // Setup Meeting Modal
    setupModal('add-meeting-modal', 'add-meeting-btn', 'close-meeting-btn', 'add-meeting-form', () => {
        fakeMeetings.unshift({
            title: document.getElementById('meeting-title').value,
            client: document.getElementById('meeting-client').value,
            time: document.getElementById('meeting-time').value,
            platform: document.getElementById('meeting-platform').value
        });
        renderMeetings();
    });

    // Setup Broadcast Modal
    setupModal('add-broadcast-modal', 'add-broadcast-btn', 'close-broadcast-btn', 'add-broadcast-form', () => {
        fakeWhatsApp.unshift({
            lead: document.getElementById('broadcast-lead').value,
            number: 'N/A',
            lastMsg: document.getElementById('broadcast-msg').value,
            status: 'Sent',
            followup: 'Today'
        });
        renderWhatsApp();
    });

    // Setup Member Modal
    setupModal('add-member-modal', 'add-member-btn', 'close-member-btn', 'add-member-form', () => {
        fakeTeam.push({
            id: generateId(),
            name: document.getElementById('member-name').value,
            role: document.getElementById('member-role').value,
            deals: 0,
            revenue: '₹0'
        });
        renderTeam();
    });

    // Setup DM Modal
    setupModal('add-dm-modal', 'add-dm-btn', 'close-dm-btn', 'add-dm-form', () => {
        fakeInstagram.unshift({
            handle: document.getElementById('dm-handle').value,
            business: document.getElementById('dm-business').value,
            lastDm: document.getElementById('dm-msg').value,
            status: 'Sent',
            action: 'Wait'
        });
        renderInstagram();
    });

    // Setup Followup Modal
    setupModal('add-followup-modal', 'add-followup-btn', 'close-followup-btn', 'add-followup-form', () => {
        const time = document.getElementById('followup-time').value;
        const newTask = {
            task: document.getElementById('followup-task').value,
            type: document.getElementById('followup-type').value,
            due: document.getElementById('followup-due').value
        };
        
        if (time === 'today') {
            fakeFollowups.today.unshift(newTask);
        } else {
            fakeFollowups.upcoming.unshift(newTask);
        }
        renderFollowups();
    });

    // Setup Proposal Modal
    setupModal('add-proposal-modal', 'add-proposal-btn', 'close-proposal-btn', 'add-proposal-form', () => {
        fakeProposals.unshift({
            client: document.getElementById('proposal-client').value,
            value: document.getElementById('proposal-value').value,
            date: 'Today',
            status: 'Sent'
        });
        renderProposals();
    });

    // Toast Notification System
    const showToast = (message) => {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = 'glass px-4 py-3 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300';
        toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i> <span class="text-white text-sm font-medium">${message}</span>`;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.remove('translate-y-10', 'opacity-0');
        }, 10);
        
        setTimeout(() => {
            toast.classList.add('translate-y-10', 'opacity-0');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    };

    // Analytics Refresh Simulation
    const refreshAnalyticsBtn = document.getElementById('refresh-analytics-btn');
    if (refreshAnalyticsBtn) {
        refreshAnalyticsBtn.addEventListener('click', () => {
            const icon = refreshAnalyticsBtn.querySelector('i');
            icon.classList.add('fa-spin');
            setTimeout(() => {
                icon.classList.remove('fa-spin');
                showToast('Analytics dashboards refreshed!');
                // Re-render charts to simulate refresh
                initCharts();
            }, 800);
        });
    }

    // Follow-up & Task Checklist interactions
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('button, .cursor-pointer');
        if (btn && (btn.querySelector('.fa-check') || btn.classList.contains('cursor-pointer'))) {
            // Find parent glass div and animate out
            const glassContainer = btn.closest('.glass, .border-gray-500')?.closest('.glass, .flex-1')?.parentElement;
            const trueGlassContainer = btn.closest('.glass') || glassContainer;
            if (trueGlassContainer && trueGlassContainer.classList.contains('glass')) {
                trueGlassContainer.style.transition = 'opacity 0.3s ease';
                trueGlassContainer.style.opacity = '0';
                setTimeout(() => {
                    trueGlassContainer.remove();
                }, 300);
            }
        }
    });

    // Remove Team Member logic
    document.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-member-btn');
        if (removeBtn) {
            const memberId = removeBtn.getAttribute('data-id');
            const index = fakeTeam.findIndex(m => m.id === memberId);
            if (index !== -1) {
                // Animate out
                const card = removeBtn.closest('.glass');
                if (card) {
                    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        fakeTeam.splice(index, 1);
                        renderTeam();
                    }, 300);
                }
            }
        }
    });
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderLeads();
    renderCalls();
    renderWhatsApp();
    renderInstagram();
    renderFollowups();
    renderMeetings();
    renderProposals();
    renderTeam();
    
    // Slight delay for charts to ensure container is rendered properly
    setTimeout(initCharts, 100);
    
    setupNavigation();
    setupInteractions();
});
