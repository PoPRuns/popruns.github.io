/**
 * PoPRuns Shared Footer Component
 * Single-file reusable footer for all pages across the repository.
 */
(function () {
    const FOOTER_STYLE_ID = 'popruns-footer-styles';

    function getPaths() {
        const scriptUrl = (document.currentScript && document.currentScript.src) || (function () {
            const scripts = document.getElementsByTagName('script');
            for (let i = scripts.length - 1; i >= 0; i--) {
                if (scripts[i].src && scripts[i].src.indexOf('footer.js') !== -1) {
                    return scripts[i].src;
                }
            }
            return '';
        })();

        let siteRoot = '/';
        let staticDir = '/static/';

        if (scriptUrl) {
            const idx = scriptUrl.indexOf('/static/js/footer.js');
            if (idx !== -1) {
                siteRoot = scriptUrl.substring(0, idx + 1);
                staticDir = siteRoot + 'static/';
            }
        }

        return { siteRoot, staticDir };
    }

    function injectStyles(staticDir) {
        if (document.getElementById(FOOTER_STYLE_ID)) return;

        const style = document.createElement('style');
        style.id = FOOTER_STYLE_ID;
        style.textContent = `
            @font-face {
                font-family: 'PortLligat Sans';
                font-style: normal;
                font-weight: normal;
                src: local('PortLligat Sans'), url('${staticDir}fonts/PortLligatSans-Regular.woff') format('woff');
            }

            .site-footer, popruns-footer {
                display: block !important;
                background: rgba(3, 10, 16, 0.95) !important;
                border-top: 1px solid rgba(211, 156, 10, 0.3) !important;
                padding: 24px 0 32px !important;
                margin-top: auto !important;
                width: 100% !important;
                box-sizing: border-box !important;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
                color: #f0f4f8 !important;
                position: relative !important;
                z-index: 100 !important;
                clear: both !important;
                text-align: center !important;
                box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5) !important;
            }

            .site-footer .footer-content, popruns-footer .footer-content {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                text-align: center !important;
                gap: 12px !important;
                max-width: 1200px !important;
                margin: 0 auto !important;
                padding: 0 20px !important;
                box-sizing: border-box !important;
            }

            .site-footer .footer-brand, popruns-footer .footer-brand {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                gap: 6px !important;
            }

            .site-footer .footer-brand img, popruns-footer .footer-brand img {
                height: 32px !important;
                width: auto !important;
                display: block !important;
            }

            .site-footer .footer-brand p, popruns-footer .footer-brand p {
                color: #95a8b6 !important;
                font-size: 13px !important;
                margin: 0 !important;
                line-height: 1.4 !important;
            }

            .site-footer .footer-links, popruns-footer .footer-links {
                display: flex !important;
                flex-wrap: wrap !important;
                justify-content: center !important;
                gap: 18px !important;
                font-family: 'PortLligat Sans', sans-serif !important;
                font-size: 13px !important;
                margin: 0 !important;
                padding: 0 !important;
                list-style: none !important;
            }

            .site-footer .footer-links a, popruns-footer .footer-links a {
                color: #ffdcaa !important;
                text-decoration: none !important;
                display: inline-flex !important;
                align-items: center !important;
                gap: 6px !important;
                transition: color 0.2s ease, text-shadow 0.2s ease !important;
            }

            .site-footer .footer-links a:hover, popruns-footer .footer-links a:hover {
                color: #fcd078 !important;
                text-shadow: 0 0 8px rgba(252, 208, 120, 0.5) !important;
                text-decoration: none !important;
            }

            .site-footer .footer-links a i, popruns-footer .footer-links a i {
                display: inline-block !important;
                width: 16px !important;
                text-align: center !important;
                color: #d39c0a !important;
                transition: color 0.2s ease !important;
            }

            .site-footer .footer-links a:hover i, popruns-footer .footer-links a:hover i {
                color: #fcd078 !important;
            }
        `;
        document.head.appendChild(style);
    }

    function injectFontAwesome() {
        if (document.querySelector('link[href*="font-awesome"]')) return;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }

    function generateFooterHTML(siteRoot, staticDir) {
        return `
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="${siteRoot}">
                        <img src="${staticDir}images/popruns_logo.png" alt="PoPRuns Logo" height="32">
                    </a>
                    <p>PoPRuns &mdash; Home of Prince of Persia speedruns, challenge runs, and tool-assisted exploration.</p>
                </div>

                <div class="footer-links">
                    <a href="${siteRoot}">
                        <i class="fa fa-home"></i>
                        PoPRuns Home
                    </a>
                    <a href="${siteRoot}submissions/">
                        <i class="fa fa-flag-checkered"></i>
                        Marathon Submissions
                    </a>
                    <a href="${siteRoot}tool-assisted-runs/">
                        <i class="fa fa-bolt"></i>
                        Tool-Assisted Runs
                    </a>
                </div>
            </div>
        `;
    }

    function initFooter() {
        const { siteRoot, staticDir } = getPaths();
        injectStyles(staticDir);
        injectFontAwesome();

        // 1. If <popruns-footer> custom elements exist, populate them
        const customFooters = document.querySelectorAll('popruns-footer');
        if (customFooters.length > 0) {
            customFooters.forEach(el => {
                if (!el.hasChildNodes()) {
                    el.innerHTML = generateFooterHTML(siteRoot, staticDir);
                }
            });
            return;
        }

        // 2. If <footer class="site-footer"> already exists, populate it
        const existingFooters = document.querySelectorAll('footer.site-footer');
        if (existingFooters.length > 0) {
            existingFooters.forEach(el => {
                el.innerHTML = generateFooterHTML(siteRoot, staticDir);
            });
            return;
        }

        // 3. Otherwise, append a <footer class="site-footer"> to document.body
        const footer = document.createElement('footer');
        footer.className = 'site-footer';
        footer.innerHTML = generateFooterHTML(siteRoot, staticDir);
        document.body.appendChild(footer);
    }

    // Define Web Component if supported
    if (typeof customElements !== 'undefined' && !customElements.get('popruns-footer')) {
        class PoprunsFooter extends HTMLElement {
            connectedCallback() {
                const { siteRoot, staticDir } = getPaths();
                injectStyles(staticDir);
                if (!this.hasChildNodes()) {
                    this.innerHTML = generateFooterHTML(siteRoot, staticDir);
                }
            }
        }
        customElements.define('popruns-footer', PoprunsFooter);
    }

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }
})();
