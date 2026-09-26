/**
 * PoPRuns Shared Navbar Component
 * Single-file reusable navbar for all pages across the repository.
 */
(function () {
    const NAVBAR_STYLE_ID = 'popruns-navbar-styles';

    const MARATHON_REGISTRY = [
        { year: 2026, status: 'current', label: '2026', title: 'PoPRuns 11: "Ported to PC" (2026)', available: true },
        { year: 2025, status: 'archive', label: '2025', title: 'PoPRuns 10: "The End" (2025)', available: true },
        { year: 2024, status: 'archive', label: '2024', title: 'PoPRuns 9: "Not a Setup but a Placebo" (2024)', available: true },
        { year: 2023, status: 'archive', label: '2023', title: 'PoPRuns 8: "Neutral Edition" (2023)', available: true },
        { year: 2022, status: 'archive', label: '2022', title: 'PoPRuns 7: "PonPRus" (2022)', available: true },
        { year: 2021, status: 'archive', label: '2021', title: 'PoPRuns 6: "Faster Than the Remaster" (2021)', available: true },
        { year: 2020, status: 'archive', label: '2020', title: 'PoPRuns 5: "What’s This Pop You’re All Taking About?" (2020)', available: true },
        { year: 2019, status: 'archive', label: '2019', title: 'PoPRuns 4: "Cheers, mate!" (2019)', available: true },
        { year: 2018, status: 'archive', label: '2018', title: 'PoPRuns 3: "The Year of Segmented" (2018)', available: true },
        { year: 2017, status: 'archive', label: '2017', title: 'PoPRuns 2: "Is this Sub Uyama?" (2017)', available: true },
        { year: 2016, status: 'archive', label: '2016', title: 'PoPRuns (2016)', available: true }
    ];

    function escapeHTML(s) {
        return s ? String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
    }

    function getActiveMarathonYear() {
        try {
            const path = window.location.pathname;
            const match = path.match(/\/marathons\/(\d{4})\/?/i);
            if (match) {
                return parseInt(match[1], 10);
            }
        } catch (e) {}
        return null;
    }

    function buildMarathonsDropdown(siteRoot) {
        const activeYear = getActiveMarathonYear();
        const toggleText = activeYear ? String(activeYear) : 'Marathons';
        const isToggleActive = Boolean(activeYear);

        const container = document.createElement('div');
        container.className = 'nav-dropdown';
        container.setAttribute('slot', 'left');

        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = `nav-link nav-dropdown-toggle${isToggleActive ? ' active' : ''}`;
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('title', activeYear ? `Marathon ${activeYear}` : 'Select Marathon Year');
        toggleBtn.innerHTML = `
            <i class="fa fa-calendar-alt"></i>
            <span class="nav-link-text">${escapeHTML(toggleText)}</span>
            <i class="fa fa-chevron-down nav-chevron"></i>
        `;
        container.appendChild(toggleBtn);

        const menu = document.createElement('div');
        menu.className = 'nav-dropdown-menu';

        const header = document.createElement('div');
        header.className = 'nav-dropdown-header';
        header.textContent = 'PoP Marathons';
        menu.appendChild(header);

        // Current
        const currentList = MARATHON_REGISTRY.filter(m => m.status === 'current');
        currentList.forEach(item => {
            if (item.available) {
                const a = document.createElement('a');
                a.href = `${siteRoot}marathons/${item.year}/`;
                a.className = `nav-dropdown-item${activeYear === item.year ? ' active' : ''}`;
                a.setAttribute('title', item.title);
                a.innerHTML = `
                    <span class="year-label"><i class="fa fa-circle-play" style="color: #2ecc71;"></i> ${escapeHTML(item.year)}</span>
                    <span class="year-badge">Current</span>
                `;
                menu.appendChild(a);
            }
        });

        const divider = document.createElement('div');
        divider.className = 'nav-dropdown-divider';
        menu.appendChild(divider);

        const subheader = document.createElement('div');
        subheader.className = 'nav-dropdown-subheader';
        subheader.textContent = 'Archives (2016 - 2025)';
        menu.appendChild(subheader);

        // Archives
        const archiveList = MARATHON_REGISTRY.filter(m => m.status === 'archive');
        archiveList.forEach(item => {
            if (item.available) {
                const a = document.createElement('a');
                a.href = `${siteRoot}marathons/${item.year}/`;
                a.className = `nav-dropdown-item${activeYear === item.year ? ' active' : ''}`;
                a.setAttribute('title', item.title);
                a.innerHTML = `
                    <span class="year-label">${escapeHTML(item.year)}</span>
                    <span class="year-status">Archive</span>
                `;
                menu.appendChild(a);
            } else {
                const span = document.createElement('span');
                span.className = 'nav-dropdown-item disabled';
                span.setAttribute('title', 'Archive coming soon');
                span.innerHTML = `
                    <span class="year-label">${escapeHTML(item.year)}</span>
                    <span class="year-status">Archive</span>
                `;
                menu.appendChild(span);
            }
        });

        container.appendChild(menu);
        return container;
    }

    function getPaths() {
        const scriptUrl = (document.currentScript && document.currentScript.src) || (function () {
            const scripts = document.getElementsByTagName('script');
            for (let i = scripts.length - 1; i >= 0; i--) {
                if (scripts[i].src && scripts[i].src.indexOf('navbar.js') !== -1) {
                    return scripts[i].src;
                }
            }
            return '';
        })();

        let siteRoot = '/';
        let staticDir = '/static/';

        if (scriptUrl) {
            const idx = scriptUrl.indexOf('/static/js/navbar.js');
            if (idx !== -1) {
                siteRoot = scriptUrl.substring(0, idx + 1);
                staticDir = siteRoot + 'static/';
            }
        }

        return { siteRoot, staticDir };
    }

    function injectStyles(staticDir) {
        if (document.getElementById(NAVBAR_STYLE_ID)) return;

        const style = document.createElement('style');
        style.id = NAVBAR_STYLE_ID;
        style.textContent = `
            @font-face {
                font-family: 'PortLligat Sans';
                font-style: normal;
                font-weight: normal;
                src: local('PortLligat Sans'), url('${staticDir}fonts/PortLligatSans-Regular.woff') format('woff');
            }

            @font-face {
                font-family: 'Trajan Pro Regular';
                font-style: normal;
                font-weight: normal;
                src: local('Trajan Pro Regular'), url('${staticDir}fonts/TrajanPro-Regular.woff') format('woff');
            }

            .header-nav, popruns-navbar {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                background: rgba(3, 10, 16, 0.95) !important;
                border-bottom: 1px solid rgba(211, 156, 10, 0.3) !important;
                backdrop-filter: blur(10px) !important;
                -webkit-backdrop-filter: blur(10px) !important;
                position: sticky !important;
                top: 0 !important;
                z-index: 1000 !important;
                width: 100% !important;
                box-sizing: border-box !important;
                padding: 0.8rem 2rem !important;
                margin: 0 !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            }

            .header-nav.nav-static, popruns-navbar[sticky="false"] {
                position: relative !important;
            }

            .header-nav .nav-start, popruns-navbar .nav-start {
                display: flex !important;
                align-items: center !important;
                gap: 1.2rem !important;
                flex-wrap: wrap !important;
            }

            .header-nav .nav-brand, popruns-navbar .nav-brand {
                display: inline-flex !important;
                align-items: center !important;
                text-decoration: none !important;
                flex-shrink: 0 !important;
            }

            .header-nav .nav-brand img, popruns-navbar .nav-brand img {
                height: 38px !important;
                width: auto !important;
                object-fit: contain !important;
                display: block !important;
            }

            .header-nav .nav-tagline, popruns-navbar .nav-tagline {
                font-family: 'Trajan Pro Regular', serif !important;
                color: #ffdcaa !important;
                font-size: 1.1rem !important;
                letter-spacing: 1px !important;
                white-space: nowrap !important;
                cursor: default !important;
            }

            .header-nav .nav-left-actions, popruns-navbar .nav-left-actions {
                display: flex !important;
                align-items: center !important;
                gap: 0.6rem !important;
                flex-wrap: wrap !important;
            }

            .header-nav .nav-actions, popruns-navbar .nav-actions {
                display: flex !important;
                align-items: center !important;
                gap: 0.75rem !important;
                list-style: none !important;
                margin: 0 !important;
                padding: 0 !important;
                flex-wrap: wrap !important;
                justify-content: flex-end !important;
            }

            .header-nav .nav-link, popruns-navbar .nav-link {
                color: #ffdcaa !important;
                text-decoration: none !important;
                font-size: 0.95rem !important;
                font-family: 'PortLligat Sans', sans-serif !important;
                padding: 0.4rem 0.75rem !important;
                border-radius: 4px !important;
                transition: all 0.2s ease !important;
                display: inline-flex !important;
                align-items: center !important;
                gap: 0.45rem !important;
                white-space: nowrap !important;
                cursor: pointer !important;
                background: transparent;
                border: none;
                border-bottom: 2px solid transparent !important;
                box-sizing: border-box !important;
            }

            .header-nav .nav-link:hover, popruns-navbar .nav-link:hover {
                color: #fff !important;
                background: rgba(211, 156, 10, 0.18) !important;
                text-shadow: 0 0 8px rgba(252, 208, 120, 0.5) !important;
            }

            .header-nav .nav-link.active, popruns-navbar .nav-link.active {
                color: #fcd078 !important;
                background: rgba(211, 156, 10, 0.25) !important;
                border-bottom: 2px solid #d39c0a !important;
                font-weight: 600 !important;
                text-shadow: 0 0 10px rgba(252, 208, 120, 0.5) !important;
            }

            .header-nav .nav-link-highlight, popruns-navbar .nav-link-highlight {
                background: linear-gradient(135deg, #d39c0a 0%, #b88204 100%) !important;
                color: #050b10 !important;
                font-weight: bold !important;
                box-shadow: 0 0 10px rgba(211, 156, 10, 0.4) !important;
                border-bottom: none !important;
            }

            .header-nav .nav-link-highlight:hover, popruns-navbar .nav-link-highlight:hover {
                color: #000 !important;
                background: linear-gradient(135deg, #fcd078 0%, #d39c0a 100%) !important;
                box-shadow: 0 0 14px rgba(252, 208, 120, 0.6) !important;
            }

            .header-nav .nav-link i, popruns-navbar .nav-link i {
                display: inline-block !important;
                font-size: 0.95rem !important;
                width: 15px !important;
                text-align: center !important;
                vertical-align: middle !important;
                flex-shrink: 0 !important;
            }

            .header-nav .nav-icon, popruns-navbar .nav-icon {
                display: inline-block !important;
                width: 15px !important;
                height: 15px !important;
                fill: currentColor !important;
                vertical-align: middle !important;
                flex-shrink: 0 !important;
            }

            /* Nav Dropdowns */
            .header-nav .nav-dropdown, popruns-navbar .nav-dropdown {
                position: relative !important;
                display: inline-flex !important;
                align-items: center !important;
            }

            .header-nav .nav-dropdown::after, popruns-navbar .nav-dropdown::after {
                content: '' !important;
                position: absolute !important;
                top: 100% !important;
                left: -20px !important;
                right: -20px !important;
                height: 14px !important;
                background: transparent !important;
                z-index: 1040 !important;
                pointer-events: none !important;
            }

            .header-nav .nav-dropdown.open::after, popruns-navbar .nav-dropdown.open::after,
            .header-nav .nav-dropdown:hover::after, popruns-navbar .nav-dropdown:hover::after {
                pointer-events: auto !important;
            }

            .header-nav .nav-dropdown-toggle, popruns-navbar .nav-dropdown-toggle {
                background: transparent !important;
                border: none !important;
                cursor: pointer !important;
            }

            .header-nav .nav-chevron, popruns-navbar .nav-chevron {
                font-size: 0.7rem !important;
                margin-left: 0.2rem !important;
                transition: transform 0.2s ease !important;
            }

            .header-nav .nav-dropdown.open .nav-chevron, popruns-navbar .nav-dropdown.open .nav-chevron {
                transform: rotate(180deg) !important;
            }

            .header-nav .nav-dropdown-menu, popruns-navbar .nav-dropdown-menu {
                position: absolute !important;
                top: calc(100% + 2px) !important;
                left: 0 !important;
                min-width: 190px !important;
                background: rgba(6, 16, 24, 0.98) !important;
                border: 1px solid rgba(211, 156, 10, 0.35) !important;
                border-radius: 8px !important;
                padding: 0.4rem 0 !important;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(211, 156, 10, 0.15) !important;
                backdrop-filter: blur(12px) !important;
                -webkit-backdrop-filter: blur(12px) !important;
                z-index: 1050 !important;
                max-height: 440px !important;
                overflow-y: auto !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                transform: translateY(-4px) !important;
                transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease !important;
            }

            .header-nav .nav-dropdown-menu::-webkit-scrollbar, popruns-navbar .nav-dropdown-menu::-webkit-scrollbar {
                width: 6px !important;
            }
            .header-nav .nav-dropdown-menu::-webkit-scrollbar-track, popruns-navbar .nav-dropdown-menu::-webkit-scrollbar-track {
                background: rgba(3, 10, 16, 0.6) !important;
            }
            .header-nav .nav-dropdown-menu::-webkit-scrollbar-thumb, popruns-navbar .nav-dropdown-menu::-webkit-scrollbar-thumb {
                background: rgba(211, 156, 10, 0.4) !important;
                border-radius: 3px !important;
            }
            .header-nav .nav-dropdown-menu::-webkit-scrollbar-thumb:hover, popruns-navbar .nav-dropdown-menu::-webkit-scrollbar-thumb:hover {
                background: rgba(211, 156, 10, 0.7) !important;
            }

            .header-nav .nav-actions .nav-dropdown-menu, popruns-navbar .nav-actions .nav-dropdown-menu {
                left: auto !important;
                right: 0 !important;
            }

            .header-nav .nav-dropdown.open .nav-dropdown-menu, popruns-navbar .nav-dropdown.open .nav-dropdown-menu,
            .header-nav .nav-dropdown:hover .nav-dropdown-menu, popruns-navbar .nav-dropdown:hover .nav-dropdown-menu {
                opacity: 1 !important;
                visibility: visible !important;
                pointer-events: auto !important;
                transform: translateY(0) !important;
            }

            .header-nav .nav-dropdown-header, popruns-navbar .nav-dropdown-header {
                font-family: 'Trajan Pro Regular', serif !important;
                color: #ffdcaa !important;
                font-size: 0.74rem !important;
                letter-spacing: 1px !important;
                padding: 0.4rem 0.85rem 0.2rem !important;
                text-transform: uppercase !important;
                opacity: 0.75 !important;
            }

            .header-nav .nav-dropdown-subheader, popruns-navbar .nav-dropdown-subheader {
                font-family: 'Istok Web', sans-serif !important;
                color: #95a8b6 !important;
                font-size: 0.7rem !important;
                padding: 0.3rem 0.85rem 0.15rem !important;
                text-transform: uppercase !important;
                letter-spacing: 0.5px !important;
            }

            .header-nav .nav-dropdown-divider, popruns-navbar .nav-dropdown-divider {
                height: 1px !important;
                background: rgba(211, 156, 10, 0.2) !important;
                margin: 0.35rem 0 !important;
            }

            .header-nav .nav-dropdown-item, popruns-navbar .nav-dropdown-item {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                padding: 0.45rem 0.85rem !important;
                color: #f0f4f8 !important;
                text-decoration: none !important;
                font-family: 'Istok Web', sans-serif !important;
                font-size: 0.86rem !important;
                transition: all 0.15s ease !important;
                cursor: pointer !important;
                box-sizing: border-box !important;
            }

            .header-nav a.nav-dropdown-item:hover, popruns-navbar a.nav-dropdown-item:hover {
                background: rgba(211, 156, 10, 0.2) !important;
                color: #ffdcaa !important;
                padding-left: 1.05rem !important;
            }

            .header-nav a.nav-dropdown-item.active, popruns-navbar a.nav-dropdown-item.active {
                background: rgba(211, 156, 10, 0.15) !important;
                color: #fcd078 !important;
                font-weight: 700 !important;
                border-left: 3px solid #d39c0a !important;
            }

            .header-nav .nav-dropdown-item.disabled, popruns-navbar .nav-dropdown-item.disabled {
                color: #5d7182 !important;
                cursor: not-allowed !important;
                opacity: 0.65 !important;
                background: transparent !important;
            }

            .header-nav .year-badge, popruns-navbar .year-badge {
                background: rgba(46, 204, 113, 0.2) !important;
                color: #2ecc71 !important;
                border: 1px solid rgba(46, 204, 113, 0.4) !important;
                border-radius: 4px !important;
                font-size: 0.68rem !important;
                padding: 0.1rem 0.35rem !important;
                font-weight: 700 !important;
            }

            .header-nav .year-status, popruns-navbar .year-status {
                color: #5d7182 !important;
                font-size: 0.68rem !important;
                font-style: italic !important;
            }

            @media (max-width: 768px) {
                .header-nav, popruns-navbar {
                    padding: 0.5rem 0.85rem !important;
                    gap: 0.5rem !important;
                }

                .header-nav .nav-start, popruns-navbar .nav-start {
                    gap: 0.6rem !important;
                }

                .header-nav .nav-tagline, popruns-navbar .nav-tagline {
                    display: none !important;
                }

                .header-nav .nav-left-actions, popruns-navbar .nav-left-actions {
                    gap: 0.35rem !important;
                }

                .header-nav .nav-actions, popruns-navbar .nav-actions {
                    gap: 0.45rem !important;
                }

                .header-nav .nav-link, popruns-navbar .nav-link {
                    padding: 0.35rem 0.5rem !important;
                    font-size: 0.85rem !important;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function renderNavbar(element, siteRoot, staticDir) {
        if (element.dataset.poprunsRendered === 'true') return;

        const tagline = element.getAttribute('tagline') || element.getAttribute('title') || '';
        const showHomeLink = element.getAttribute('home-link') !== 'false';
        const defaultTabsAlign = element.getAttribute('tabs-align') || element.getAttribute('align-tabs') || '';

        // Extract existing children to place them properly
        const childNodes = Array.from(element.childNodes);

        element.innerHTML = '';
        element.classList.add('header-nav');
        element.dataset.poprunsRendered = 'true';

        // 1. Nav Start (Brand + Left-aligned tabs)
        const navStart = document.createElement('div');
        navStart.className = 'nav-start';

        const brandLink = document.createElement('a');
        brandLink.href = siteRoot;
        brandLink.className = 'nav-brand';
        brandLink.title = 'PoPRuns';
        brandLink.setAttribute('aria-label', 'PoPRuns Home');

        const logoImg = document.createElement('img');
        logoImg.src = `${staticDir}images/popruns_logo.png`;
        logoImg.alt = 'PoPRuns Logo';
        brandLink.appendChild(logoImg);
        navStart.appendChild(brandLink);

        if (tagline) {
            const taglineSpan = document.createElement('span');
            taglineSpan.className = 'nav-tagline';
            taglineSpan.textContent = tagline;
            navStart.appendChild(taglineSpan);
        }

        const navLeftActions = document.createElement('div');
        navLeftActions.className = 'nav-left-actions';
        navStart.appendChild(navLeftActions);
        element.appendChild(navStart);

        // 2. Nav Actions section (Right side)
        const navActions = document.createElement('div');
        navActions.className = 'nav-actions';

        if (showHomeLink) {
            const homeLink = document.createElement('a');
            homeLink.href = siteRoot;
            homeLink.className = 'nav-link';
            homeLink.title = 'Return to PoPRuns Home';
            homeLink.innerHTML = `
                <i class="fa fa-arrow-left"></i>
                <span class="nav-link-text">PoPRuns Home</span>
            `;
            navActions.appendChild(homeLink);
        }

        // Process child elements
        childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE && !child.textContent.trim()) {
                return;
            }

            const isLeftSlot = child.getAttribute && (
                child.getAttribute('slot') === 'left' ||
                child.classList.contains('nav-left') ||
                child.classList.contains('nav-tabs') ||
                child.getAttribute('data-align') === 'left'
            );

            const isMarathonDropdown = child.classList && (
                child.classList.contains('nav-dropdown') ||
                child.classList.contains('marathons-dropdown') ||
                child.hasAttribute('data-marathons-dropdown')
            );

            if (isLeftSlot) {
                if (isMarathonDropdown) {
                    navLeftActions.appendChild(buildMarathonsDropdown(siteRoot));
                } else if (child.tagName === 'DIV' || child.tagName === 'SPAN' || child.tagName === 'NAV') {
                    // If it's a wrapper container with child elements, unwrap children into navLeftActions
                    Array.from(child.childNodes).forEach(innerChild => {
                        if (innerChild.nodeType === Node.TEXT_NODE && !innerChild.textContent.trim()) return;
                        if (innerChild.classList && (innerChild.classList.contains('nav-dropdown') || innerChild.classList.contains('marathons-dropdown'))) {
                            navLeftActions.appendChild(buildMarathonsDropdown(siteRoot));
                        } else {
                            navLeftActions.appendChild(innerChild);
                        }
                    });
                } else {
                    navLeftActions.appendChild(child);
                }
            } else if (isMarathonDropdown) {
                navActions.appendChild(buildMarathonsDropdown(siteRoot));
            } else if (defaultTabsAlign === 'left' && child.classList && (child.classList.contains('nav-link') || child.classList.contains('nav-tab'))) {
                navLeftActions.appendChild(child);
            } else {
                navActions.appendChild(child);
            }
        });

        // If no left actions exist, remove the empty container to keep DOM clean
        if (!navLeftActions.hasChildNodes()) {
            navLeftActions.remove();
        } else {
            // Add automatic click listener to left tab links to manage the active state
            navLeftActions.addEventListener('click', (e) => {
                const link = e.target.closest('.nav-link');
                if (link && navLeftActions.contains(link)) {
                    if (link.classList.contains('nav-dropdown-toggle')) return;
                    navLeftActions.querySelectorAll('.nav-link:not(.nav-dropdown-toggle)').forEach(el => el.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        }

        element.appendChild(navActions);
        setupDropdowns(element);
    }

    function setupDropdowns(root = document) {
        const dropdowns = root.querySelectorAll ? root.querySelectorAll('.nav-dropdown') : [];
        dropdowns.forEach(dropdown => {
            if (dropdown.dataset.dropdownReady === 'true') return;
            dropdown.dataset.dropdownReady = 'true';

            let closeTimer = null;
            const toggle = dropdown.querySelector('.nav-dropdown-toggle');

            const openMenu = () => {
                if (closeTimer) {
                    clearTimeout(closeTimer);
                    closeTimer = null;
                }
                document.querySelectorAll('.nav-dropdown.open').forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('open');
                        const otherToggle = d.querySelector('.nav-dropdown-toggle');
                        if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
                    }
                });
                dropdown.classList.add('open');
                if (toggle) toggle.setAttribute('aria-expanded', 'true');
            };

            const closeMenu = (immediate = false) => {
                if (closeTimer) {
                    clearTimeout(closeTimer);
                    closeTimer = null;
                }
                if (immediate) {
                    dropdown.classList.remove('open');
                    if (toggle) toggle.setAttribute('aria-expanded', 'false');
                } else {
                    closeTimer = setTimeout(() => {
                        dropdown.classList.remove('open');
                        if (toggle) toggle.setAttribute('aria-expanded', 'false');
                        closeTimer = null;
                    }, 280);
                }
            };

            dropdown.addEventListener('mouseenter', () => openMenu());
            dropdown.addEventListener('mouseleave', () => closeMenu(false));

            dropdown.addEventListener('focusin', () => openMenu());
            dropdown.addEventListener('focusout', (e) => {
                if (!dropdown.contains(e.relatedTarget)) {
                    closeMenu(true);
                }
            });

            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (dropdown.classList.contains('open')) {
                        closeMenu(true);
                    } else {
                        openMenu();
                    }
                });
            }

            dropdown.querySelectorAll('.nav-dropdown-item').forEach(item => {
                item.addEventListener('click', () => {
                    closeMenu(true);
                });
            });
        });
    }

    let globalListenersAttached = false;
    function attachGlobalListeners() {
        if (globalListenersAttached) return;
        globalListenersAttached = true;

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-dropdown')) {
                document.querySelectorAll('.nav-dropdown.open').forEach(d => {
                    d.classList.remove('open');
                    const toggle = d.querySelector('.nav-dropdown-toggle');
                    if (toggle) toggle.setAttribute('aria-expanded', 'false');
                });
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.nav-dropdown.open').forEach(d => {
                    d.classList.remove('open');
                    const toggle = d.querySelector('.nav-dropdown-toggle');
                    if (toggle) toggle.setAttribute('aria-expanded', 'false');
                });
            }
        });
    }

    // Global helper to switch active tab by data-tab or text
    window.setPoprunsActiveTab = function (tabId) {
        document.querySelectorAll('popruns-navbar, .header-nav').forEach(nav => {
            const tabs = nav.querySelectorAll('.nav-link[data-tab], .nav-left-actions .nav-link');
            tabs.forEach(tab => {
                const match = (tab.getAttribute('data-tab') === tabId) ||
                              (tab.textContent.trim().toLowerCase() === tabId.toLowerCase());
                if (match) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        });
    };

    function injectFontAwesome() {
        if (document.querySelector('link[href*="font-awesome"]')) return;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }

    function initNavbar() {
        const { siteRoot, staticDir } = getPaths();
        injectStyles(staticDir);
        injectFontAwesome();
        attachGlobalListeners();

        const customNavs = document.querySelectorAll('popruns-navbar');
        customNavs.forEach(navEl => {
            renderNavbar(navEl, siteRoot, staticDir);
        });
        setupDropdowns(document);
    }

    // Define Web Component if supported
    if (typeof customElements !== 'undefined' && !customElements.get('popruns-navbar')) {
        class PoprunsNavbar extends HTMLElement {
            connectedCallback() {
                const { siteRoot, staticDir } = getPaths();
                injectStyles(staticDir);
                injectFontAwesome();
                setTimeout(() => {
                    renderNavbar(this, siteRoot, staticDir);
                }, 0);
            }
        }
        customElements.define('popruns-navbar', PoprunsNavbar);
    }

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbar);
    } else {
        initNavbar();
    }
})();
