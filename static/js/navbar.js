/**
 * PoPRuns Shared Navbar Component
 * Single-file reusable navbar for all pages across the repository.
 */
(function () {
    const NAVBAR_STYLE_ID = 'popruns-navbar-styles';

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
                gap: 1.5rem !important;
                flex-wrap: wrap !important;
            }

            .header-nav .nav-brand, popruns-navbar .nav-brand {
                display: inline-flex !important;
                align-items: center !important;
                gap: 1.2rem !important;
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

        const logoImg = document.createElement('img');
        logoImg.src = `${staticDir}images/popruns_logo.png`;
        logoImg.alt = 'PoPRuns Logo';
        brandLink.appendChild(logoImg);

        if (tagline) {
            const taglineSpan = document.createElement('span');
            taglineSpan.className = 'nav-tagline';
            taglineSpan.textContent = tagline;
            brandLink.appendChild(taglineSpan);
        }
        navStart.appendChild(brandLink);

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

            if (isLeftSlot) {
                // If it's a wrapper container with child elements, unwrap children into navLeftActions
                if (child.tagName === 'DIV' || child.tagName === 'SPAN' || child.tagName === 'NAV') {
                    Array.from(child.childNodes).forEach(innerChild => {
                        if (innerChild.nodeType === Node.TEXT_NODE && !innerChild.textContent.trim()) return;
                        navLeftActions.appendChild(innerChild);
                    });
                } else {
                    navLeftActions.appendChild(child);
                }
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
                    navLeftActions.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        }

        element.appendChild(navActions);
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

        const customNavs = document.querySelectorAll('popruns-navbar');
        customNavs.forEach(navEl => {
            renderNavbar(navEl, siteRoot, staticDir);
        });
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
