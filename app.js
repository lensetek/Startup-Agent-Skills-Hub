// 22 Specialized Agent Skills Database
const SKILLS_DATA = [
    {
        id: "startup-workflow-orchestrator",
        name: "startup-workflow-orchestrator",
        role: "Startup Workflow Orchestrator",
        icon: "fa-diagram-project",
        category: "product",
        responsibility: "Selects the right specialist agents, sequences handoffs, and enforces security gates across the startup delivery workflow.",
        boundaries: "No final implementation code, no override of PM/CEO/QA decisions, and no release approval when security gates fail."
    },
    {
        id: "ceo-strategy-planner",
        name: "ceo-strategy-planner",
        role: "CEO Strategy Planner",
        icon: "fa-chess-king",
        category: "product",
        responsibility: "Defines core vision, high-level business goals, target market positioning, and strategic roadmaps.",
        boundaries: "No implementation code, system architecture, detailed sprint tickets, or functional PRDs."
    },
    {
        id: "designer-uiux-specialist",
        name: "designer-uiux-specialist",
        role: "Designer UI/UX Specialist",
        icon: "fa-compass-drafting",
        category: "product",
        responsibility: "Maps visual architecture, user journeys, UI wireframe blueprints, styling guides, and layout usability.",
        boundaries: "No final production code (HTML, CSS, JS), database/backend administration, or PM changes without consulting."
    },
    {
        id: "developer-backend-engineer",
        name: "developer-backend-engineer",
        role: "Developer Backend Engineer",
        icon: "fa-server",
        category: "development",
        responsibility: "Designs database structures, builds API routes, handles auth, payments, proxy endpoints, env vars.",
        boundaries: "No credentials exposed on client side, no UI components/styling/CSS, no PM scope decisions."
    },
    {
        id: "developer-database-specialist",
        name: "developer-database-specialist",
        role: "Developer Database Specialist",
        icon: "fa-database",
        category: "development",
        responsibility: "Designs database models, optimizes queries, migration plans, Firestore security rules / Postgres RLS.",
        boundaries: "No exposed admin credentials/keys in frontend, no frontend styling/UI, no full backend route building."
    },
    {
        id: "developer-frontend-engineer",
        name: "developer-frontend-engineer",
        role: "Developer Frontend Engineer",
        icon: "fa-laptop-code",
        category: "development",
        responsibility: "Translates mockups and states into responsive HTML/CSS/JS components.",
        boundaries: "No outbound API keys/secrets on client, no database schema design or PM scoping adjustments."
    },
    {
        id: "developer-fullstack-engineer",
        name: "developer-fullstack-engineer",
        role: "Developer Fullstack Engineer",
        icon: "fa-layer-group",
        category: "development",
        responsibility: "Connects frontend layouts with secure backend server API routers and environment variables.",
        boundaries: "No frontend credential leakage, no product scope altering without consulting the PM."
    },
    {
        id: "developer-mobile-engineer",
        name: "developer-mobile-engineer",
        role: "Developer Mobile Engineer",
        icon: "fa-mobile-screen-button",
        category: "development",
        responsibility: "Builds client iOS/Android applications (React Native, Flutter, etc.), notches, device sizes.",
        boundaries: "No hardcoded secrets in mobile binaries (use backend), no server databases or APIs."
    },
    {
        id: "developer-qa-reviewer",
        name: "developer-qa-reviewer",
        role: "Developer QA Reviewer",
        icon: "fa-clipboard-check",
        category: "development",
        responsibility: "Evaluates code against Acceptance Criteria, scans for credential leaks, runs testing, issues verdicts.",
        boundaries: "No implementation code, no requirement modifications, strict gatekeeping for security/testing."
    },
    {
        id: "developer-scrum-master",
        name: "developer-scrum-master",
        role: "Developer Scrum Master",
        icon: "fa-network-wired",
        category: "development",
        responsibility: "Manages sprint backlog, creates developer tickets, establishes DoR/DoD, resolves blockers.",
        boundaries: "No code/configs, no pull request reviews, no scope alterations without PM confirmation."
    },
    {
        id: "devops-git-guard",
        name: "devops-git-guard",
        role: "DevOps Git Guard",
        icon: "fa-shield-halved",
        category: "finance",
        responsibility: "Pre-push gatekeeper: audits staged code for secret leaks, checks `.gitignore`, updates `README.md`.",
        boundaries: "No source code, database design, or product requirement changes."
    },
    {
        id: "market-analyst",
        name: "market-analyst",
        role: "Market Analyst",
        icon: "fa-magnifying-glass-chart",
        category: "product",
        responsibility: "Evaluates market trends, competitors (strengths, weaknesses, pricing), pain points, and gaps.",
        boundaries: "No final strategy (CEO), PRDs/MVP scope (PM), or engineering/coding."
    },
    {
        id: "marketing-content-planner",
        name: "marketing-content-planner",
        role: "Marketing Content Planner",
        icon: "fa-calendar-days",
        category: "marketing",
        responsibility: "Designs 30-day content strategies/calendars, selects channels, launch campaigns, creative briefs.",
        boundaries: "No final copy (Copywriter), no code/DBs, no product scope changes."
    },
    {
        id: "marketing-copywriter",
        name: "marketing-copywriter",
        role: "Marketing Copywriter",
        icon: "fa-pen-nib",
        category: "marketing",
        responsibility: "Writes SEO-friendly landing page copy, email templates, social media launch posts.",
        boundaries: "No feature specs/scoping, code writing, or financial planning."
    },
    {
        id: "prd-generator",
        name: "prd-generator",
        role: "PRD Generator",
        icon: "fa-file-invoice",
        category: "product",
        responsibility: "Converts PM's MVP scope and user flows into a structured, developer-ready Markdown PRD.",
        boundaries: "No scoping decisions, code generation, or business modeling."
    },
    {
        id: "product-manager",
        name: "product-manager",
        role: "Product Manager",
        icon: "fa-list-check",
        category: "product",
        responsibility: "Bridges CEO vision and engineering constraints; defines MVP scope, prioritizes features (MoSCoW).",
        boundaries: "No code/architecture, no PRD drafting (scoping/flows only), no roadmapping (CEO), no scrum timelines."
    },
    {
        id: "startup-finance-planner",
        name: "startup-finance-planner",
        role: "Startup Finance Planner",
        icon: "fa-calculator",
        category: "finance",
        responsibility: "Projects unit economics, hosting/API pricing structures, break-even targets, financial viability.",
        boundaries: "No feature/MVP scope definition, no coding/configuration."
    },
    {
        id: "devops-update-manager",
        name: "devops-update-manager",
        role: "DevOps Update Manager",
        icon: "fa-rotate",
        category: "finance",
        responsibility: "Checks for agent updates via Git by default, with a guarded ZIP fallback for users without Git.",
        boundaries: "No product scoping, no source code logic development, no security configuration alterations."
    },
    {
        id: "devops-infrastructure-engineer",
        name: "devops-infrastructure-engineer",
        role: "DevOps Infrastructure Engineer",
        icon: "fa-server",
        category: "finance",
        responsibility: "Manages cloud hosting configuration templates, CI/CD pipelines, Docker environments, backup systems, and uptime/monitoring services.",
        boundaries: "No database schema optimization, no application feature code implementation, no product scoping decisions."
    },
    {
        id: "ops-customer-success",
        name: "ops-customer-success",
        role: "Ops Customer Success",
        icon: "fa-headset",
        category: "marketing",
        responsibility: "Drafts help center FAQs and user guides, designs support workflows, compiles feedback reports, and maps retention strategies.",
        boundaries: "No product features scoping or MVP roadmap changes, no code/database bug fixing, no pricing definition."
    },
    {
        id: "ops-legal-compliance",
        name: "ops-legal-compliance",
        role: "Ops Legal & Compliance",
        icon: "fa-scale-balanced",
        category: "finance",
        responsibility: "Drafts Terms of Service, Privacy Policies (GDPR/PDPA compliant), data handling rules, compliance checklists, and standard contracts.",
        boundaries: "No formal legal counsel representation in litigation, no source code development, no financial planning."
    },
    {
        id: "ops-growth-analytics",
        name: "ops-growth-analytics",
        role: "Ops Growth & Analytics",
        icon: "fa-chart-line",
        category: "product",
        responsibility: "Designs event-tracking plans, monitors business metrics (CAC, LTV, churn), maps funnels, organizes A/B tests, and designs growth loops.",
        boundaries: "No final corporate strategy decisions, no analytical tracking code implementation, no raw campaign copywriting."
    }
];

let selectedCategory = "all";
// Theme Manager
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    
    // Default to light theme if no setting is saved (savedTheme is not 'dark')
    const isDark = savedTheme === 'dark';
    
    if (isDark) {
        document.documentElement.classList.add('dark');
        updateThemeToggleIcon(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeToggleIcon(false);
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    if (isCurrentlyDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateThemeToggleIcon(false);
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateThemeToggleIcon(true);
    }
}

function updateThemeToggleIcon(isDark) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        if (isDark) {
            icon.className = 'fa-solid fa-sun text-amber-500';
        } else {
            icon.className = 'fa-solid fa-moon text-themeTextSecondary';
        }
    }
}

// Mobile Menu Manager
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const btnIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;

    if (!mobileMenuBtn || !mobileMenu) return;

    function toggleMobileMenu() {
        const isClosed = mobileMenu.classList.contains('translate-x-full');
        
        if (isClosed) {
            // Open menu
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            btnIcon.className = 'fa-solid fa-xmark text-lg text-themeText'; // Change to close icon
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            // Close menu
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
            btnIcon.className = 'fa-solid fa-bars'; // Change back to hamburger
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('translate-x-full')) {
                toggleMobileMenu();
            }
        });
    });
}

// DOMContentLoaded Initialization
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMobileMenu();
    renderSkillsGrid(SKILLS_DATA);
    createToastElement();
});

// Render Skills Grid Function
function renderSkillsGrid(skills) {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = "";

    skills.forEach(skill => {
        const card = document.createElement("div");
        card.className = `skill-card bg-themeCard border border-themeBorderCard rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm group hover:border-accentBlue/30`;
        
        // Category Gradient Border overlay
        let categoryGlow = "bg-accentBlue/20";
        let badgeColor = "bg-accentBlue/10 text-accentBlue border-accentBlue/20";
        let categoryText = "Product & Strategy";
        
        if (skill.category === "development") {
            categoryGlow = "bg-accentPurple/20";
            badgeColor = "bg-accentPurple/10 text-accentPurple border-accentPurple/20";
            categoryText = "Development";
        } else if (skill.category === "marketing") {
            categoryGlow = "bg-accentPink/20";
            badgeColor = "bg-accentPink/10 text-accentPink border-accentPink/20";
            categoryText = "Marketing & Copy";
        } else if (skill.category === "finance") {
            categoryGlow = "bg-accentGreen/20";
            badgeColor = "bg-accentGreen/10 text-accentGreen border-accentGreen/20";
            categoryText = "Ops & Finance";
        }

        card.innerHTML = `
            <div class="absolute -top-10 -right-10 w-20 h-20 ${categoryGlow} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-xl bg-themeTerminal border border-themeBorderCard flex items-center justify-center text-xl text-themeTextSecondary group-hover:text-themeText group-hover:border-themeBorder transition-all duration-300">
                    <i class="fa-solid ${skill.icon}"></i>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badgeColor}">${categoryText}</span>
            </div>
            
            <h4 class="font-outfit font-extrabold text-lg text-themeText mb-3 group-hover:text-accentBlue transition-colors duration-300">${skill.role}</h4>
            <div class="text-[11px] font-mono text-themeTextMuted mb-4">${skill.name}</div>
            
            <div class="space-y-3.5 text-xs">
                <div>
                    <span class="text-themeTextSecondary font-bold block mb-1 text-[11px] uppercase tracking-wider">Responsibility:</span>
                    <p class="text-themeTextSecondary leading-relaxed">${skill.responsibility}</p>
                </div>
                
                <div class="pt-3 border-t border-themeBorderCard/60">
                    <span class="text-red-600 dark:text-red-400 font-bold block mb-1 text-[11px] uppercase tracking-wider"><i class="fa-solid fa-ban mr-1.5"></i>Boundaries:</span>
                    <p class="text-themeTextSecondary leading-relaxed">${skill.boundaries}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Interactive workflow switcher
function switchWorkflow(flowIndex) {
    // Hide all contents
    document.querySelectorAll(".workflow-content").forEach(el => {
        el.classList.add("hidden");
        el.classList.remove("block");
    });
    
    // Show chosen flow
    const selectedFlow = document.getElementById(`flow-content-${flowIndex}`);
    if (selectedFlow) {
        selectedFlow.classList.remove("hidden");
        selectedFlow.classList.add("block");
    }

    // Toggle Tab Button Active states
    document.querySelectorAll(".workflow-tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    
    const activeBtn = document.getElementById(`flowBtn-${flowIndex}`);
    if (activeBtn) {
        activeBtn.classList.add("active");
    }
}

// Search and tag-based filtering logic
function filterSkills() {
    const query = document.getElementById("skillSearch").value.toLowerCase();
    
    const filtered = SKILLS_DATA.filter(skill => {
        const matchesQuery = skill.role.toLowerCase().includes(query) || 
                             skill.name.toLowerCase().includes(query) || 
                             skill.responsibility.toLowerCase().includes(query) ||
                             skill.boundaries.toLowerCase().includes(query);
                             
        const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
        
        return matchesQuery && matchesCategory;
    });

    renderSkillsGrid(filtered);

    const noResults = document.getElementById("noResults");
    if (filtered.length === 0) {
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
    }
}

// Category filter button click trigger
function setCategoryFilter(category) {
    selectedCategory = category;
    
    // Update active visual tags
    document.querySelectorAll(".tag-filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    
    const activeBtn = document.getElementById(`tag-${category}`);
    if (activeBtn) {
        activeBtn.classList.add("active");
    }

    filterSkills();
}

// Copy to Clipboard implementation with visual feedback
function copyCommand(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        // Show clipboard feedback icon in button
        const originalHTML = buttonElement.innerHTML;
        buttonElement.innerHTML = `<i class="fa-solid fa-check text-accentGreen"></i>`;
        
        // Dynamic Toast trigger
        showToast(`Copied to clipboard: "${text}"`);
        
        setTimeout(() => {
            buttonElement.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}

// Toast Notification Engine
function createToastElement() {
    const toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast-alert";
    document.body.appendChild(toast);
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (toast) {
        toast.innerHTML = `<i class="fa-solid fa-circle-check text-accentGreen mr-2"></i> ${message}`;
        toast.classList.add("show");
        
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }
}

// Installation Tab Switcher
function switchInstallTab(tabType) {
    const npxTab = document.getElementById('installTab-npx');
    const gitTab = document.getElementById('installTab-git');
    const npxPanel = document.getElementById('installPanel-npx');
    const gitPanel = document.getElementById('installPanel-git');

    if (tabType === 'npx') {
        npxTab.className = "px-4 py-2 text-xs font-bold font-mono tracking-wider border-b-2 border-accentBlue text-accentBlue transition-all duration-200";
        gitTab.className = "px-4 py-2 text-xs font-bold font-mono tracking-wider border-b-2 border-transparent text-themeTextMuted hover:text-themeText transition-all duration-200";
        npxPanel.classList.remove('hidden');
        gitPanel.classList.add('hidden');
    } else {
        gitTab.className = "px-4 py-2 text-xs font-bold font-mono tracking-wider border-b-2 border-accentBlue text-accentBlue transition-all duration-200";
        npxTab.className = "px-4 py-2 text-xs font-bold font-mono tracking-wider border-b-2 border-transparent text-themeTextMuted hover:text-themeText transition-all duration-200";
        gitPanel.classList.remove('hidden');
        npxPanel.classList.add('hidden');
    }
}

// Update NPX command input display text
function updateInstallCommand(command, buttonEl) {
    const codeDisplay = document.getElementById('npxCommandDisplay');
    if (codeDisplay) {
        codeDisplay.textContent = command;
        
        // Update copy button onclick action
        const copyBtn = codeDisplay.nextElementSibling;
        if (copyBtn) {
            copyBtn.setAttribute('onclick', `copyCommand('${command}', this)`);
        }
    }

    // Toggle button selection styling
    const buttons = buttonEl.parentNode.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.classList.remove('border-accentBlue/60', 'text-accentBlue');
        btn.classList.add('border-themeBorderCard', 'text-themeText');
    });
    buttonEl.classList.remove('border-themeBorderCard', 'text-themeText');
    buttonEl.classList.add('border-accentBlue/60', 'text-accentBlue');
}
