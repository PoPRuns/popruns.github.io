/**
 * PoPRuns Marathons - Shared Static Schedule Application & Web Component
 * Standalone, lightweight module with zero external backend dependencies.
 * Automatically loads ./schedule.json relative to the active marathon year.
 */

(function () {
    let scheduleData = null;
    let selectedTimezone = "UTC";
    let detectedTimezone = "UTC";
    let scheduleTimeFormat = "24h";
    let appInitialized = false;

    const $ = (id) => document.getElementById(id);
    const $$ = (sel) => document.querySelectorAll(sel);
    const escapeHTML = (s) => (s ? String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "");

    function getPaths() {
        const scriptUrl = (document.currentScript && document.currentScript.src) || (function () {
            const scripts = document.getElementsByTagName('script');
            for (let i = scripts.length - 1; i >= 0; i--) {
                if (scripts[i].src && scripts[i].src.indexOf('marathon.js') !== -1) {
                    return scripts[i].src;
                }
            }
            return '';
        })();

        let siteRoot = '../../';
        let staticDir = '../../static/';

        if (scriptUrl) {
            const idx = scriptUrl.indexOf('/marathons/marathon.js');
            if (idx !== -1) {
                siteRoot = scriptUrl.substring(0, idx + 1);
                staticDir = siteRoot + 'static/';
            }
        }

        return { siteRoot, staticDir };
    }

    function getTimezoneOffsetMinutes(timeZone) {
        try {
            const now = new Date();
            const invDate = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
            const targetDate = new Date(now.toLocaleString("en-US", { timeZone }));
            return Math.round((targetDate.getTime() - invDate.getTime()) / (60 * 1000));
        } catch (e) {
            return 0;
        }
    }

    function formatTimezoneOffset(offsetMinutes) {
        const sign = offsetMinutes >= 0 ? "+" : "-";
        const abs = Math.abs(offsetMinutes);
        return `UTC${sign}${String(Math.floor(abs / 60)).padStart(2, "0")}:${String(abs % 60).padStart(2, "0")}`;
    }

    function renderMarathonTemplate(container, siteRoot, staticDir) {
        if (!container || container.dataset.poprunsMarathonRendered === "true") return;
        container.dataset.poprunsMarathonRendered = "true";

        container.innerHTML = `
            <!-- Top Navigation -->
            <popruns-navbar tagline="Marathons">
                <div class="nav-dropdown" slot="left"></div>

                <a href="${siteRoot}tool-assisted-runs/" class="nav-link" title="Tool-Assisted Runs">
                    <i class="fa fa-bolt"></i>
                    <span class="nav-link-text">Tool-Assisted Runs</span>
                </a>
            </popruns-navbar>

            <main class="container">
                <!-- Marathon Hero Section -->
                <header id="marathon-hero" class="marathon-hero">
                    <div class="hero-header-row">
                        <div class="hero-header-main">
                            <h1 class="hero-title" id="event-title">Prince of Persia Marathon</h1>
                            <div class="hero-meta">
                                <span class="meta-pill" id="meta-dates"><i class="fa fa-calendar-alt"></i> Loading dates...</span>
                                <span class="meta-pill" id="meta-countdown"><i class="fa fa-clock"></i> Loading countdown...</span>
                                <div class="hero-social-pills">
                                    <a href="https://discord.com/invite/0Ss0agDWPoiSvr3E" target="_blank" rel="noopener noreferrer" class="social-pill discord" title="PoPRuns Discord Server">
                                        <i class="fa-brands fa-discord"></i> Discord
                                    </a>
                                    <a href="https://youtube.com/@PoPRuns" target="_blank" rel="noopener noreferrer" class="social-pill youtube" title="PoPRuns YouTube Channel">
                                        <i class="fa-brands fa-youtube"></i> YouTube
                                    </a>
                                    <a href="https://twitch.tv/PoPRuns" target="_blank" rel="noopener noreferrer" class="social-pill twitch" title="PoPRuns Twitch Channel">
                                        <i class="fa-brands fa-twitch"></i> Twitch
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="hero-cta-slot" class="hero-cta-slot"></div>
                    </div>
                </header>

                <!-- Tab Navigation -->
                <div id="tab-buttons-container">
                    <button class="tab-button tab-button-selected active" onclick="switchTab('schedule')">
                        <span><i class="fa fa-calendar-days"></i> Schedule</span>
                    </button>
                </div>

                <!-- Schedule Tab -->
                <section id="tab-schedule" class="tab-pane active">
                    <div class="content-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
                            <h2 class="section-title" style="margin-bottom: 0;">
                                <span><i class="fa fa-calendar-days" style="color: var(--gold-bright);"></i> Broadcast Schedule</span>
                            </h2>
                            <div class="filter-toolbar">
                                <input type="text" id="schedule-search" class="form-input" placeholder="Search runner, game, category..." oninput="filterSchedule()">
                                <select id="schedule-filter-game" class="form-select" onchange="filterSchedule()">
                                    <option value="all">All Games</option>
                                </select>
                                <button class="btn btn-secondary btn-sm" onclick="loadSchedule(true)"><i class="fa fa-sync-alt"></i> Refresh</button>
                            </div>
                        </div>

                        <!-- Timezone Banner -->
                        <div class="tz-banner" style="margin-bottom: 1.25rem;">
                            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
                                <label for="schedule-tz-select" style="font-weight: 700; color: var(--gold-bright); display: flex; align-items: center; gap: 0.4rem;">
                                    <i class="fa fa-globe"></i> Timezone:
                                </label>
                                <select id="schedule-tz-select" class="form-select" style="padding: 0.45rem 2.4rem 0.45rem 0.85rem; font-size: 0.88rem; width: auto; min-width: 280px; max-width: 380px;" onchange="handleScheduleTimezoneChange(event)">
                                </select>
                                <button type="button" class="btn btn-secondary btn-sm" onclick="resetScheduleToDetectedTimezone()" title="Reset to browser auto-detected timezone" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;">
                                    <i class="fa fa-crosshairs"></i> Auto-Detect
                                </button>
                                <div class="time-format-toggle" style="display: flex; gap: 0.25rem; margin-left: 0.5rem;">
                                    <button type="button" id="btn-format-24h" class="btn btn-sm btn-secondary active-time-format" onclick="setScheduleTimeFormat('24h')">24h</button>
                                    <button type="button" id="btn-format-12h" class="btn btn-sm btn-secondary" onclick="setScheduleTimeFormat('12h')">12h</button>
                                </div>
                            </div>
                        </div>

                        <div id="schedule-stats" style="display: flex; gap: 1.25rem; margin-bottom: 1.25rem; font-size: 0.92rem; color: var(--gold-bright); flex-wrap: wrap;"></div>

                        <div id="schedule-container">
                            <div class="empty-state">
                                <div class="empty-state-icon"><i class="fa fa-spinner fa-spin"></i></div>
                                <p>Loading marathon schedule...</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        `;
    }

    function setupHeroMeta() {
        if (!scheduleData) return;

        if (scheduleData.title && $("event-title")) {
            $("event-title").textContent = scheduleData.title;
            document.title = `${scheduleData.title} Schedule - PoPRuns`;
        }

        let startDate = scheduleData.start_date ? new Date(scheduleData.start_date) : null;
        let endDate = scheduleData.end_date ? new Date(scheduleData.end_date) : null;

        if ((!startDate || isNaN(startDate)) && scheduleData.items?.length) {
            const first = scheduleData.items.find(i => i.scheduled_time);
            if (first?.scheduled_time) startDate = new Date(first.scheduled_time);
        }

        if ((!endDate || isNaN(endDate)) && scheduleData.items?.length) {
            const last = [...scheduleData.items].reverse().find(i => i.scheduled_time);
            if (last?.scheduled_time) endDate = new Date(last.scheduled_time);
        }

        if (!startDate || isNaN(startDate)) startDate = new Date("2026-10-24T13:00:00Z");
        if (!endDate || isNaN(endDate)) endDate = new Date("2026-10-25T20:00:00Z");

        const opts = { month: "short", day: "numeric", year: "numeric", timeZone: selectedTimezone };

        if ($("meta-dates")) {
            $("meta-dates").innerHTML = `<i class="fa fa-calendar-alt"></i> ${startDate.toLocaleDateString(undefined, opts)} - ${endDate.toLocaleDateString(undefined, opts)}`;
        }
        if ($("meta-countdown")) {
            const now = new Date();
            if (now < startDate) {
                const diffHours = (startDate - now) / (1000 * 60 * 60);
                if (diffHours < 24) {
                    const h = Math.ceil(diffHours);
                    $("meta-countdown").innerHTML = `<i class="fa fa-clock"></i> Starts in ${h} hour${h === 1 ? "" : "s"}`;
                } else {
                    const diffDays = Math.ceil(diffHours / 24);
                    $("meta-countdown").innerHTML = `<i class="fa fa-clock"></i> Starts in ${diffDays} day${diffDays === 1 ? "" : "s"}`;
                }
            } else if (now >= startDate && now <= endDate) {
                $("meta-countdown").innerHTML = `<i class="fa fa-circle-play" style="color: #2ecc71;"></i> Live Now`;
            } else {
                $("meta-countdown").innerHTML = `<i class="fa fa-flag-checkered"></i> Event Concluded`;
            }
        }

        const ctaSlot = $("hero-cta-slot");
        if (ctaSlot) {
            if (scheduleData.submissions_url) {
                const isExternal = /^https?:\/\//i.test(scheduleData.submissions_url);
                ctaSlot.innerHTML = `
                    <a href="${escapeHTML(scheduleData.submissions_url)}" class="hero-submissions-btn" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} title="Submit a speedrun for this event">
                        <i class="fa fa-paper-plane"></i>
                        <span>Submissions</span>
                    </a>
                `;
                ctaSlot.style.display = "block";
            } else {
                ctaSlot.innerHTML = "";
                ctaSlot.style.display = "none";
            }
        }
    }

    function setupTimezone() {
        try {
            detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
        } catch {
            detectedTimezone = "UTC";
        }

        const saved = localStorage.getItem("popruns_marathon_tz");
        selectedTimezone = saved || detectedTimezone || "UTC";
        scheduleTimeFormat = localStorage.getItem("popruns_marathon_time_format") || "24h";

        populateTimezoneDropdown();
    }

    function populateTimezoneDropdown() {
        const select = $("schedule-tz-select");
        if (!select) return;

        let timezones = [];
        if (typeof Intl.supportedValuesOf === "function") {
            try {
                timezones = Intl.supportedValuesOf("timeZone");
            } catch (e) {}
        }

        if (!timezones?.length) {
            timezones = [
                "UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
                "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Helsinki", "Europe/Moscow",
                "Asia/Dubai", "Asia/Kolkata", "Asia/Bangkok", "Asia/Singapore", "Asia/Tokyo",
                "Australia/Sydney", "Pacific/Auckland", "America/Sao_Paulo"
            ];
        }

        if (!timezones.includes(detectedTimezone)) timezones.push(detectedTimezone);
        if (!timezones.includes("UTC")) timezones.push("UTC");
        timezones = Array.from(new Set(timezones));

        const tzObjects = timezones.map(tz => {
            const offset = getTimezoneOffsetMinutes(tz);
            return {
                tz,
                offset,
                label: `(${formatTimezoneOffset(offset)}) ${tz.replace(/_/g, " ")}`
            };
        }).sort((a, b) => a.offset - b.offset || a.label.localeCompare(b.label));

        select.innerHTML = tzObjects.map(item =>
            `<option value="${item.tz}" ${item.tz === selectedTimezone ? "selected" : ""}>${item.label}</option>`
        ).join("");
    }

    function handleScheduleTimezoneChange(e) {
        selectedTimezone = e.target.value;
        localStorage.setItem("popruns_marathon_tz", selectedTimezone);
        setupHeroMeta();
        renderSchedule();
    }

    function resetScheduleToDetectedTimezone() {
        selectedTimezone = detectedTimezone;
        const select = $("schedule-tz-select");
        if (select) select.value = detectedTimezone;
        localStorage.setItem("popruns_marathon_tz", selectedTimezone);
        setupHeroMeta();
        renderSchedule();
    }

    function setScheduleTimeFormat(fmt) {
        scheduleTimeFormat = fmt;
        localStorage.setItem("popruns_marathon_time_format", fmt);
        if ($("btn-format-24h")) $("btn-format-24h").classList.toggle("active-time-format", fmt === "24h");
        if ($("btn-format-12h")) $("btn-format-12h").classList.toggle("active-time-format", fmt === "12h");
        renderSchedule();
    }

    async function loadSchedule(force = false) {
        const container = $("schedule-container");
        if (!container) return;

        if (!scheduleData || force) {
            try {
                const res = await fetch(`schedule.json${force ? `?t=${Date.now()}` : ""}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                scheduleData = await res.json();
            } catch (err) {
                console.error("Error loading schedule:", err);
            }
        }

        if (scheduleData) {
            setupHeroMeta();
            populateScheduleGameFilter();
            renderSchedule();
        } else {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon"><i class="fa fa-exclamation-triangle"></i></div>
                    <p>Unable to load schedule data. Please check connection and try again.</p>
                    <button class="btn btn-secondary btn-sm" onclick="loadSchedule(true)" style="margin-top: 0.75rem;"><i class="fa fa-sync-alt"></i> Retry</button>
                </div>
            `;
        }
    }

    function populateScheduleGameFilter() {
        const select = $("schedule-filter-game");
        if (!select || !scheduleData?.items) return;
        const currentVal = select.value;
        const games = Array.from(new Set(
            scheduleData.items
                .filter(i => i.type === "run" && i.game)
                .map(i => i.game)
        )).sort();

        select.innerHTML = '<option value="all">All Games</option>' + games.map(g => `<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join("");
        if (games.includes(currentVal)) select.value = currentVal;
    }

    function filterSchedule() {
        renderSchedule();
    }

    function parseTimeToSeconds(timeStr) {
        if (!timeStr) return 0;
        const parts = timeStr.split(":").map(Number);
        if (parts.some(isNaN)) return 0;
        return parts.length === 3 ? parts[0] * 3600 + parts[1] * 60 + parts[2] : (parts.length === 2 ? parts[0] * 60 + parts[1] : (parts.length === 1 ? parts[0] * 60 : 0));
    }

    function renderSchedule() {
        const container = $("schedule-container");
        const statsEl = $("schedule-stats");
        if (!container || !scheduleData?.items) return;

        if ($("btn-format-24h")) $("btn-format-24h").classList.toggle("active-time-format", scheduleTimeFormat === "24h");
        if ($("btn-format-12h")) $("btn-format-12h").classList.toggle("active-time-format", scheduleTimeFormat === "12h");

        const search = $("schedule-search")?.value.toLowerCase().trim() || "";
        const gameFilter = $("schedule-filter-game")?.value || "all";

        const allRuns = scheduleData.items.filter(i => i.type === "run");
        const uniqueRunners = new Set();
        allRuns.forEach(r => (r.players || []).forEach(p => uniqueRunners.add(p)));

        if (statsEl) {
            statsEl.innerHTML = `
                <span><i class="fa fa-gamepad"></i> <strong>${allRuns.length}</strong> Runs</span>
                <span><i class="fa fa-users"></i> <strong>${uniqueRunners.size}</strong> Runners</span>
                <span><i class="fa fa-globe"></i> Timezone: <strong>${escapeHTML(selectedTimezone.replace(/_/g, " "))}</strong></span>
            `;
        }

        const filteredItems = scheduleData.items.filter(item => {
            if (item.type === "break" || item.type === "end") {
                return !search && gameFilter === "all";
            }
            if (gameFilter !== "all" && item.game !== gameFilter) return false;
            if (!search) return true;

            const g = (item.game || "").toLowerCase();
            const cat = (item.category || "").toLowerCase();
            const plat = (item.platform || "").toLowerCase();
            const players = (item.players || []).join(" ").toLowerCase();

            return g.includes(search) || cat.includes(search) || plat.includes(search) || players.includes(search);
        });

        if (!filteredItems.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon"><i class="fa fa-filter"></i></div>
                    <p>No scheduled runs match your filter criteria.</p>
                    <button class="btn btn-secondary btn-sm" onclick="$('schedule-search').value=''; $('schedule-filter-game').value='all'; filterSchedule();" style="margin-top: 0.75rem;">Clear Filters</button>
                </div>
            `;
            return;
        }

        const dayGroups = new Map();
        filteredItems.forEach(item => {
            const itemDate = new Date(item.scheduled_time);
            const dayKey = item.day || 1;
            if (!dayGroups.has(dayKey)) dayGroups.set(dayKey, []);
            dayGroups.get(dayKey).push({ ...item, dateObj: itemDate });
        });

        let tbodyHtml = "";
        let dayIndex = 0;

        dayGroups.forEach((items, dayKey) => {
            const dayTitle = `Day ${dayKey}`;

            // Invisible / spacer row to visually split days
            if (dayIndex > 0) {
                tbodyHtml += `
                    <tr class="schedule-day-separator-row" aria-hidden="true">
                        <td colspan="5"></td>
                    </tr>
                `;
            }
            dayIndex++;

            // Day header merged across all 5 columns with colspan
            tbodyHtml += `
                <tr class="schedule-day-header-row">
                    <td colspan="5" class="schedule-day-header-cell">
                        <div class="schedule-day-title">
                            <i class="fa fa-calendar-day"></i> <span>${escapeHTML(dayTitle)}</span>
                        </div>
                    </td>
                </tr>
            `;

            items.forEach(item => {
                const monthDay = new Intl.DateTimeFormat("en-US", { timeZone: selectedTimezone, month: "short", day: "numeric" }).format(item.dateObj);
                const time24 = new Intl.DateTimeFormat("en-GB", { timeZone: selectedTimezone, hour: "2-digit", minute: "2-digit", hour12: false }).format(item.dateObj);
                const time12 = new Intl.DateTimeFormat("en-US", { timeZone: selectedTimezone, hour: "numeric", minute: "2-digit", hour12: true }).format(item.dateObj);

                const primaryTime = scheduleTimeFormat === "12h" ? `${monthDay}, ${time12}` : `${monthDay}, ${time24}`;
                const secondaryTime = scheduleTimeFormat === "12h" ? time24 : time12;

                if (item.type === "break") {
                    tbodyHtml += `
                        <tr class="schedule-special-row schedule-break-row">
                            <td class="col-schedule-time">
                                <div class="schedule-time-primary">${primaryTime}</div>
                                <div class="schedule-time-secondary">${secondaryTime}</div>
                            </td>
                            <td colspan="4" class="schedule-special-cell break">
                                <div class="schedule-special-inner">
                                    <i class="fa fa-bed"></i>
                                    <span><strong>Intermission / Break</strong> - End of Day ${item.day || dayKey} Broadcast</span>
                                </div>
                            </td>
                        </tr>
                    `;
                    return;
                }

                if (item.type === "end") {
                    tbodyHtml += `
                        <tr class="schedule-special-row schedule-end-row">
                            <td class="col-schedule-time">
                                <div class="schedule-time-primary">${primaryTime}</div>
                                <div class="schedule-time-secondary">${secondaryTime}</div>
                            </td>
                            <td colspan="4" class="schedule-special-cell end">
                                <div class="schedule-special-inner">
                                    <i class="fa fa-flag-checkered"></i>
                                    <span><strong>Marathon Finale</strong> - Wrap-up &amp; Closing Ceremony</span>
                                </div>
                            </td>
                        </tr>
                    `;
                    return;
                }

                const playersHtml = (item.players || []).map(p => `
                    <span class="schedule-runner-pill"><i class="fa fa-user"></i> ${escapeHTML(p)}</span>
                `).join("");

                tbodyHtml += `
                    <tr class="schedule-run-row">
                        <td class="col-schedule-time">
                            <div class="schedule-time-primary">${primaryTime}</div>
                            <div class="schedule-time-secondary">${secondaryTime}</div>
                        </td>
                        <td class="col-game">
                            <span class="schedule-game-title">${escapeHTML(item.game)}</span>
                            <span class="platform-badge">${escapeHTML(item.platform || "—")}</span>
                        </td>
                        <td class="col-category">
                            <span class="schedule-category-text">${escapeHTML(item.category || "Any%")}</span>
                        </td>
                        <td class="col-schedule-runners">
                            <div class="schedule-runners-list">${playersHtml}</div>
                        </td>
                        <td class="col-estimate">
                            <div class="estimate-cell-wrap">
                                <span class="estimate-tag">${escapeHTML(item.estimate || "—")}</span>
                                ${item.setup_time ? `
                                    <div class="setup-buffer-badge" title="Setup time before next run: ${escapeHTML(item.setup_time)}">
                                        <i class="fa fa-wrench"></i> +${escapeHTML(item.setup_time)}
                                    </div>
                                ` : ""}
                            </div>
                        </td>
                    </tr>
                `;
            });
        });

        container.innerHTML = `
            <div class="all-submissions-table-wrap schedule-table-wrap">
                <table class="all-submissions-table schedule-table">
                    <thead>
                        <tr>
                            <th class="col-schedule-time">Time</th>
                            <th class="col-game">Game</th>
                            <th class="col-category">Category</th>
                            <th class="col-schedule-runners">Player(s)</th>
                            <th class="col-estimate">Estimate</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tbodyHtml}
                    </tbody>
                </table>
            </div>
        `;

        // Measure and synchronize sticky header offsets
        requestAnimationFrame(updateScheduleStickyOffsets);
    }

    function updateScheduleStickyOffsets() {
        const nav = document.querySelector(".header-nav");
        if (nav) {
            document.documentElement.style.setProperty("--nav-height", `${nav.offsetHeight}px`);
        }
    }

    // Tab Navigation UI
    function initTabs() {
        const validTabs = ["schedule"];
        const hash = window.location.hash.replace("#", "");
        if (validTabs.includes(hash)) {
            switchTab(hash);
        } else {
            switchTab("schedule");
        }
    }

    function switchTab(tabId) {
        $$(".tab-button").forEach(b => {
            const matches = Boolean(b.getAttribute("onclick")?.includes(`'${tabId}'`));
            b.classList.toggle("active", matches);
            b.classList.toggle("tab-button-selected", matches);
        });

        $$(".tab-pane").forEach(p => {
            p.classList.toggle("active", p.id === `tab-${tabId}`);
        });

        window.location.hash = tabId;
        requestAnimationFrame(updateScheduleStickyOffsets);
    }

    // Schedule application initialization
    async function initScheduleApp() {
        if (appInitialized) return;
        appInitialized = true;

        setupTimezone();
        initTabs();
        window.addEventListener("hashchange", () => {
            const hash = window.location.hash.replace("#", "");
            if (hash) switchTab(hash);
        });
        await loadSchedule();
        updateScheduleStickyOffsets();
        window.addEventListener("resize", updateScheduleStickyOffsets);
    }

    function init() {
        const customMarathon = document.querySelector('popruns-marathon');
        const { siteRoot, staticDir } = getPaths();
        if (customMarathon) {
            renderMarathonTemplate(customMarathon, siteRoot, staticDir);
            initScheduleApp();
        } else if (document.getElementById('schedule-container')) {
            initScheduleApp();
        }
    }

    // Register Web Component if supported
    if (typeof customElements !== 'undefined' && !customElements.get('popruns-marathon')) {
        class PoprunsMarathon extends HTMLElement {
            connectedCallback() {
                const { siteRoot, staticDir } = getPaths();
                renderMarathonTemplate(this, siteRoot, staticDir);
                initScheduleApp();
            }
        }
        customElements.define('popruns-marathon', PoprunsMarathon);
    }

    // Expose handlers to global window for inline onclick/onchange attributes
    window.switchTab = switchTab;
    window.filterSchedule = filterSchedule;
    window.loadSchedule = loadSchedule;
    window.handleScheduleTimezoneChange = handleScheduleTimezoneChange;
    window.resetScheduleToDetectedTimezone = resetScheduleToDetectedTimezone;
    window.setScheduleTimeFormat = setScheduleTimeFormat;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
