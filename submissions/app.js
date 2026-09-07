/**
 * PoPRuns Marathon Submission System - Client Application Logic
 */

// Application State
let supabaseClient = null, currentUser = null, currentProfile = null, currentEvent = null;
let userSubmissions = [], allSubmissions = [], allAdminSubmissions = [];
let selectedAvailabilitySlots = new Set(), savedAvailabilitySlots = new Set(), savedAvailabilityNotes = "";

// Timezone & Availability State
const THIRTY_MIN_MS = 30 * 60 * 1000;
let detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
let selectedTimezone = detectedTimezone;
let isDragging = false, dragMode = null, dragStartSlotKey = null, dragInitialSelection = null;
const slotElementsMap = new Map();

// Shorthands & Escaping
const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);
const escapeHTML = (s) => (s ? String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "");

// Global Listeners
document.addEventListener("DOMContentLoaded", async () => {
    initSupabase();
    initUI();
    populateDynamicOptions();
    await loadActiveEvent();
    populateGameDropdown();
    setupTimezone();
});

window.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        dragMode = dragStartSlotKey = dragInitialSelection = null;
        updateAvailabilityDirtyState();
    }
});

// Supabase & Auth
function initSupabase() {
    const isConfigured = typeof CONFIG !== "undefined" && CONFIG.SUPABASE_URL && !CONFIG.SUPABASE_URL.includes("your-project-ref") &&
                         CONFIG.SUPABASE_ANON_KEY && !CONFIG.SUPABASE_ANON_KEY.includes("your-anon-public-key");

    if (!isConfigured) {
        if ($("config-banner")) $("config-banner").classList.add("active");
        console.warn("Supabase credentials not configured in submissions/config.js");
        return;
    }

    try {
        if (window.supabase?.createClient) {
            supabaseClient = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
        } else {
            console.error("Supabase SDK library not loaded from CDN.");
            return;
        }

        supabaseClient.auth.onAuthStateChange(async (event, session) => {
            if (event === "SIGNED_IN" || event === "INITIAL_SESSION") {
                if (session?.user && (!currentUser || currentUser.id !== session.user.id)) {
                    currentUser = session.user;
                    await loadUserProfile();
                    await loadMySubmissions();
                    await loadUserAvailability();
                }
            } else if (event === "SIGNED_OUT") {
                currentUser = currentProfile = null;
                userSubmissions = [];
                selectedAvailabilitySlots.clear();
                updateAuthUI();
            }
        });

        supabaseClient.auth.getSession().then(({ data: { session } }) => {
            if (session?.user && !currentUser) {
                currentUser = session.user;
                loadUserProfile();
                loadMySubmissions();
                loadUserAvailability();
            } else if (!session?.user) {
                updateAuthUI();
            }
        });
    } catch (err) {
        console.error("Failed to initialize Supabase:", err);
    }
}

function initUI() {
    const urlParams = new URLSearchParams(window.location.search);
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const errorDesc = urlParams.get("error_description") || hashParams.get("error_description");
    if (errorDesc) {
        showToast("Auth Error: " + decodeURIComponent(errorDesc.replace(/\+/g, " ")), "error");
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    const hash = window.location.hash.replace("#", "");
    if (["submit", "my-runs", "availability", "all-runs", "admin"].includes(hash)) switchTab(hash);
}

async function loginWithDiscord() {
    if (!supabaseClient) return showToast("Supabase is not configured yet in submissions/config.js", "error");
    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "discord", options: { scopes: "identify", redirectTo: window.location.origin + window.location.pathname }
    });
    if (error) showToast("Login failed: " + error.message, "error");
}

async function loginWithTwitch() {
    if (!supabaseClient) return showToast("Supabase is not configured yet in submissions/config.js", "error");
    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "twitch", options: { redirectTo: window.location.origin + window.location.pathname }
    });
    if (error) showToast("Login failed: " + error.message, "error");
}

async function logout() {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
    currentUser = currentProfile = null;
    userSubmissions = [];
    selectedAvailabilitySlots.clear();
    updateAuthUI();
    showToast("Successfully logged out.", "success");
}

function handleAuthFailure(error) {
    if (!error) return false;
    if (error.status === 401 || error.status === 403 || error.code === "401" || error.code === "403" ||
        error.message?.includes("JWT") || error.message?.includes("token is expired") || error.message?.includes("invalid claim")) {
        console.warn("Auth error returned, resetting session:", error);
        logout();
        return true;
    }
    return false;
}

async function loadUserProfile() {
    if (!supabaseClient || !currentUser) return;
    try {
        const { data, error } = await supabaseClient.from("profiles").select("*").eq("id", currentUser.id).single();
        if (error && (error.code === "PGRST116" || handleAuthFailure(error))) { await logout(); return; }

        currentProfile = data || {
            id: currentUser.id,
            display_name: currentUser.user_metadata?.full_name || currentUser.user_metadata?.user_name || "Runner",
            avatar_url: currentUser.user_metadata?.avatar_url || "",
            is_admin: false
        };

        const meta = currentUser.user_metadata || {}, identities = currentUser.identities || [], provider = currentUser.app_metadata?.provider || "";
        const detectedDiscord = identities.find(i => i.provider === "discord")?.identity_data?.full_name ||
            (provider === "discord" || meta.avatar_url?.includes("discord") ? (meta.full_name || meta.name?.split("#")[0]) : null);
        const detectedTwitch = identities.find(i => i.provider === "twitch")?.identity_data?.slug ||
            (provider === "twitch" || meta.avatar_url?.includes("jtvnw.net") ? (meta.slug || meta.name || meta.full_name) : null);

        if ((detectedDiscord && !currentProfile.discord_username) || (detectedTwitch && !currentProfile.twitch_username)) {
            const sync = {};
            if (detectedDiscord && !currentProfile.discord_username) sync.discord_username = currentProfile.discord_username = detectedDiscord;
            if (detectedTwitch && !currentProfile.twitch_username) sync.twitch_username = currentProfile.twitch_username = detectedTwitch;
            supabaseClient.from("profiles").update(sync).eq("id", currentUser.id).then(() => {});
        }

        updateAuthUI();
        updateSubmissionsOpenState();
    } catch (err) {
        console.error("Error loading profile:", err);
    }
}

function updateAuthUI() {
    const isAuth = Boolean(currentUser && currentProfile);
    if ($("auth-section")) $("auth-section").style.display = isAuth ? "none" : "flex";
    if ($("user-profile")) $("user-profile").style.display = isAuth ? "flex" : "none";
    if ($("tab-admin-btn")) $("tab-admin-btn").style.display = isAuth && currentProfile.is_admin ? "flex" : "none";
    if ($("submit-login-prompt")) $("submit-login-prompt").style.display = isAuth ? "none" : "block";
    if ($("submission-form")) $("submission-form").style.display = isAuth ? "block" : "none";

    if (isAuth) {
        if ($("user-display-name")) $("user-display-name").textContent = currentProfile.display_name;
        if ($("user-avatar")) $("user-avatar").src = currentProfile.avatar_url || "../static/images/popruns_logo.png";
        if ($("user-admin-badge")) $("user-admin-badge").style.display = currentProfile.is_admin ? "inline-block" : "none";
    }
}

// Active Event & Hero Meta
async function loadActiveEvent() {
    currentEvent = {
        id: 1, slug: CONFIG.DEFAULT_EVENT_SLUG, title: "Prince of Persia Marathon 2026", description: "Also known as PoPRuns 11",
        submissions_open: true, start_date: "2026-10-16T12:00:00Z", end_date: "2026-10-18T23:59:59Z",
        discord_url: "https://discord.gg/0uN0p5UvU3lXmFkW", twitch_url: "https://twitch.tv/PoPRuns", youtube_url: "https://youtube.com/@PoPRuns"
    };

    if (supabaseClient) {
        try {
            const { data } = await supabaseClient.from("events").select("*").eq("slug", CONFIG.DEFAULT_EVENT_SLUG).single();
            if (data) currentEvent = data;
        } catch (err) {
            console.error("Error fetching active event:", err);
        }
    }

    renderHeroMeta();
    updateSubmissionsOpenState();
    loadAllSubmissions();
}

function updateSubmissionsOpenState() {
    if (!currentEvent) return;
    const isOpen = currentEvent.submissions_open, isAdmin = Boolean(currentProfile?.is_admin);
    const submitForm = $("submission-form"), submitBtn = $("btn-submit-run"), submitTabCard = document.querySelector("#tab-submit .content-card");
    let existingSubmitNotice = $("submissions-closed-notice");

    if (!isOpen) {
        if (!existingSubmitNotice && submitTabCard && submitForm) {
            existingSubmitNotice = document.createElement("div");
            existingSubmitNotice.id = "submissions-closed-notice";
            existingSubmitNotice.style.cssText = "background: rgba(231, 76, 60, 0.15); border: 1px solid rgba(231, 76, 60, 0.4); color: #e74c3c; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; font-size: 0.95rem;";
            existingSubmitNotice.innerHTML = '<i class="fa fa-lock" style="font-size: 1.4rem;"></i> <div><strong>Submissions are Closed:</strong> Submissions for this marathon are currently closed. New run submissions are no longer accepted.</div>';
            submitTabCard.insertBefore(existingSubmitNotice, submitForm);
        }
        if (submitForm) submitForm.querySelectorAll("input, select, textarea, button[type='submit']").forEach(el => el.disabled = true);
        if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '<i class="fa fa-lock"></i> Submissions Closed'; }
    } else {
        if (existingSubmitNotice) existingSubmitNotice.remove();
        if (submitForm) submitForm.querySelectorAll("input, select, textarea, button[type='submit']").forEach(el => el.disabled = false);
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<i class="fa fa-check-circle"></i> Submit Run'; }
    }

    const availContainer = document.querySelector(".availability-container");
    let existingAvailNotice = $("availability-closed-notice");
    const availNotes = $("avail-notes");
    const presetButtons = document.querySelectorAll("#tab-availability .btn-secondary:not([onclick*='resetToDetectedTimezone'])");

    if (!isOpen && !isAdmin) {
        if (!existingAvailNotice && availContainer) {
            existingAvailNotice = document.createElement("div");
            existingAvailNotice.id = "availability-closed-notice";
            existingAvailNotice.style.cssText = "background: rgba(231, 76, 60, 0.15); border: 1px solid rgba(231, 76, 60, 0.4); color: #e74c3c; padding: 0.85rem 1rem; border-radius: 6px; font-size: 0.9rem; display: flex; align-items: center; gap: 0.6rem;";
            existingAvailNotice.innerHTML = '<i class="fa fa-lock"></i> <div><strong>Availability Locked:</strong> Submissions are closed. Availability is in read-only mode and cannot be modified.</div>';
            availContainer.insertBefore(existingAvailNotice, availContainer.firstChild);
        }
        if (availNotes) availNotes.disabled = true;
        presetButtons.forEach(btn => btn.disabled = true);
        document.querySelectorAll(".btn-save-availability, .btn-reset-availability").forEach(btn => btn.disabled = true);
    } else {
        if (existingAvailNotice) existingAvailNotice.remove();
        if (availNotes) availNotes.disabled = false;
        presetButtons.forEach(btn => btn.disabled = false);
    }

    renderMySubmissions();
    buildAvailabilityCalendar();
}

function renderHeroMeta() {
    if (!currentEvent) return;
    if ($("hero-title")) $("hero-title").textContent = currentEvent.title || "Prince of Persia Marathon";
    if ($("hero-desc")) $("hero-desc").textContent = currentEvent.description || "";

    const socialEl = $("hero-social-links");
    if (socialEl) {
        const links = [
            { url: currentEvent.discord_url, cls: "discord", icon: "discord", title: "PoPRuns Discord Server" },
            { url: currentEvent.youtube_url, cls: "youtube", icon: "youtube", title: "PoPRuns YouTube Channel" },
            { url: currentEvent.twitch_url, cls: "twitch", icon: "twitch", title: "PoPRuns Twitch Channel" }
        ].filter(l => Boolean(l.url));
        socialEl.innerHTML = links.map(l => `<a href="${escapeHTML(l.url)}" target="_blank" rel="noopener" class="hero-social-icon-btn ${l.cls}" title="${l.title}"><i class="fa-brands fa-${l.icon}"></i></a>`).join("");
        socialEl.style.display = links.length ? "inline-flex" : "none";
    }

    const metaStatus = $("meta-status");
    if (metaStatus) {
        metaStatus.className = `meta-pill ${currentEvent.submissions_open ? "open" : "closed"}`;
        metaStatus.innerHTML = `<i class="fa fa-door-${currentEvent.submissions_open ? "open" : "closed"}"></i> Submissions ${currentEvent.submissions_open ? "Open" : "Closed"}`;
    }

    const startDate = new Date(currentEvent.start_date), endDate = new Date(currentEvent.end_date);
    const opts = { month: "short", day: "numeric", year: "numeric" };
    if ($("meta-dates")) $("meta-dates").innerHTML = `<i class="fa fa-calendar-alt"></i> ${startDate.toLocaleDateString(undefined, opts)} - ${endDate.toLocaleDateString(undefined, opts)}`;
    if ($("meta-countdown")) $("meta-countdown").innerHTML = `<i class="fa fa-clock"></i> Starts in ${Math.max(0, Math.ceil((startDate - new Date()) / (1000 * 60 * 60 * 24)))} days`;
}

// Game Selection UI
function populateGameDropdown() {
    const grid = $("mainline-games-grid");
    if (grid && CONFIG.MAINLINE_GAMES) {
        grid.innerHTML = CONFIG.MAINLINE_GAMES.map(game => `
            <div class="game-card" data-game-id="${game.id}" onclick="selectMainlineGame('${game.id}')" title="${escapeHTML(game.name)}">
                <div class="game-card-bg" style="background-image: url('${game.bg}');"></div>
                <div class="game-card-overlay" style="background-image: url('${game.logo}');"></div>
                <div class="game-card-title">${escapeHTML(game.shortTitle || game.name)}</div>
                <div class="game-card-check"><i class="fa fa-check"></i></div>
            </div>
        `).join("");
    }

    if ($("run-spinoff-select") && CONFIG.SPINOFF_GAMES) {
        $("run-spinoff-select").innerHTML = '<option value="">--</option>' +
            CONFIG.SPINOFF_GAMES.map(g => `<option value="${escapeHTML(g.name)}">${escapeHTML(g.name)}</option>`).join("");
    }

    if ($("edit-run-game") && CONFIG.MAINLINE_GAMES && CONFIG.SPINOFF_GAMES) {
        $("edit-run-game").innerHTML = '<option value="" disabled selected>Select a Prince of Persia game...</option>' +
            '<optgroup label="Mainline Games">' + CONFIG.MAINLINE_GAMES.map(g => `<option value="${escapeHTML(g.name)}">${escapeHTML(g.name)}</option>`).join("") + '</optgroup>' +
            '<optgroup label="Spin-offs & Custom">' + CONFIG.SPINOFF_GAMES.map(g => `<option value="${escapeHTML(g.name)}">${escapeHTML(g.name)}</option>`).join("") + '</optgroup>';
    }
}

function selectMainlineGame(gameId) {
    const game = CONFIG.MAINLINE_GAMES?.find(g => g.id === gameId);
    if (!game) return;
    if ($("run-spinoff-select")) $("run-spinoff-select").value = "";
    if ($("run-game")) $("run-game").value = game.name;
    $$(".game-card").forEach(c => c.classList.toggle("selected", c.dataset.gameId === gameId));
    if ($("selected-game-badge")) $("selected-game-badge").innerHTML = '<i class="fa fa-check"></i> Game Selected';
    if ($("selected-game-banner") && $("selected-game-display-title")) {
        $("selected-game-display-title").textContent = game.name;
        $("selected-game-banner").style.display = "block";
    }
    if ($("run-category")) $("run-category").value = "";
    handleGameChange();
}

function handleSpinoffChange(gameName) {
    $$(".game-card").forEach(c => c.classList.remove("selected"));
    if ($("run-game")) $("run-game").value = gameName || "";
    if ($("selected-game-badge")) $("selected-game-badge").innerHTML = gameName ? '<i class="fa fa-check"></i> Game Selected' : '<i class="fa fa-hand-point-down"></i> Please pick a game below';
    if ($("selected-game-banner")) {
        $("selected-game-banner").style.display = gameName ? "block" : "none";
        if ($("selected-game-display-title")) $("selected-game-display-title").textContent = gameName || "";
    }
    if ($("run-category")) $("run-category").value = "";
    handleGameChange();
}

function clearSelectedGame() {
    if ($("run-game")) $("run-game").value = "";
    $$(".game-card").forEach(c => c.classList.remove("selected"));
    if ($("run-spinoff-select")) $("run-spinoff-select").value = "";
    if ($("selected-game-badge")) $("selected-game-badge").innerHTML = '<i class="fa fa-hand-point-down"></i> Please pick a game below';
    if ($("selected-game-banner")) $("selected-game-banner").style.display = "none";
    if ($("run-category")) $("run-category").value = "";
    handleGameChange();
}

function applyCategoryChip(cat) {
    const input = $("run-category");
    if (!input) return;
    input.value = cat;
    input.focus();
    if ($("category-chips-wrap")) $("category-chips-wrap").style.display = "none";
    if ($("toggle-presets-btn")) {
        $("toggle-presets-btn").style.display = "inline-flex";
        $("toggle-presets-btn").innerHTML = '<i class="fa fa-lightbulb"></i> Show presets';
    }
}

function handleCategoryInput() {
    const input = $("run-category"), chipsWrap = $("category-chips-wrap"), toggleBtn = $("toggle-presets-btn"), chipsContainer = $("category-chips");
    if (!input || !chipsWrap || !toggleBtn || !chipsContainer || !chipsContainer.children.length) return;
    const hasText = input.value.trim().length > 0;
    chipsWrap.style.display = hasText ? "none" : "flex";
    toggleBtn.style.display = hasText ? "inline-flex" : "none";
    if (hasText) toggleBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Show presets';
}

function toggleCategoryPresets() {
    const chipsWrap = $("category-chips-wrap"), toggleBtn = $("toggle-presets-btn");
    if (!chipsWrap || !toggleBtn) return;
    const isHidden = chipsWrap.style.display === "none";
    chipsWrap.style.display = isHidden ? "flex" : "none";
    toggleBtn.innerHTML = isHidden ? '<i class="fa fa-chevron-up"></i> Hide presets' : '<i class="fa fa-lightbulb"></i> Show presets';
}

function getGameDefinition(name) {
    return CONFIG.GAMES?.find(g => g.name === name || (g.platformGameNames && Object.values(g.platformGameNames).includes(name)));
}

function getResolvedGameName(gameDef, platform) {
    return (gameDef?.platformGameNames && platform && gameDef.platformGameNames[platform]) || gameDef?.name || "";
}

function handlePlatformChange() {
    const platformSelect = $("run-platform"), customWrap = $("custom-platform-wrap"), customInput = $("run-platform-custom");
    const hiddenGameInput = $("run-game"), bannerTitle = $("selected-game-display-title");
    if (!platformSelect || !customWrap) return;

    const isOther = platformSelect.value === "Other";
    customWrap.style.display = isOther ? "block" : "none";
    if (customInput) { customInput.required = isOther; if (isOther) customInput.focus(); }

    if (hiddenGameInput?.value) {
        const gameDef = getGameDefinition(hiddenGameInput.value);
        if (gameDef) {
            const resolvedName = getResolvedGameName(gameDef, platformSelect.value);
            hiddenGameInput.value = resolvedName;
            if (bannerTitle) {
                bannerTitle.innerHTML = resolvedName !== gameDef.name
                    ? `${escapeHTML(resolvedName)} <span class="platform-alias-note" style="font-size: 0.8rem; font-weight: normal; color: var(--gold); margin-left: 0.5rem;"><i class="fa fa-info-circle"></i> ${escapeHTML(platformSelect.value)} title</span>`
                    : escapeHTML(resolvedName);
            }
        }
    }
}

function handleGameChange() {
    const gameName = $("run-game")?.value || "";
    const isCustom = gameName.startsWith("Other");
    if ($("custom-game-group")) $("custom-game-group").style.display = isCustom ? "block" : "none";
    if ($("run-game-custom")) $("run-game-custom").required = isCustom;

    const matched = getGameDefinition(gameName);
    const platformSelect = $("run-platform"), chipsWrap = $("category-chips-wrap"), chipsContainer = $("category-chips"), toggleBtn = $("toggle-presets-btn");

    if (matched) {
        if (chipsWrap && chipsContainer) {
            if (matched.categories?.length) {
                chipsContainer.innerHTML = matched.categories.map(cat => `
                    <button type="button" class="category-chip" onclick="applyCategoryChip('${escapeHTML(cat).replace(/'/g, "\\'")}')" title="Use preset '${escapeHTML(cat)}'">${escapeHTML(cat)}</button>
                `).join("");
                const isCatEmpty = !$("run-category")?.value.trim().length;
                chipsWrap.style.display = isCatEmpty ? "flex" : "none";
                if (toggleBtn) { toggleBtn.style.display = isCatEmpty ? "none" : "inline-flex"; toggleBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Show presets'; }
            } else {
                chipsContainer.innerHTML = "";
                chipsWrap.style.display = "none";
                if (toggleBtn) toggleBtn.style.display = "none";
            }
        }
        if (platformSelect) {
            platformSelect.disabled = false;
            platformSelect.innerHTML = (matched.platforms || []).filter(p => p !== "Other").map(p => `<option value="${escapeHTML(p)}">${escapeHTML(p)}</option>`).join("") + '<option value="Other">Other (Specify...)</option>';
            if (matched.platforms?.length && matched.platforms[0] !== "Other") platformSelect.value = matched.platforms[0];
            handlePlatformChange();
        }
    } else {
        if (platformSelect) { platformSelect.disabled = true; platformSelect.innerHTML = '<option value="" disabled selected>Select a game first...</option>'; }
        if ($("custom-platform-wrap")) $("custom-platform-wrap").style.display = "none";
        if (chipsWrap) chipsWrap.style.display = "none";
        if (toggleBtn) toggleBtn.style.display = "none";
    }
}

// Run Format & Ratio Helpers
function formatRunType(type) {
    const matched = CONFIG.RUN_FORMATS?.find(rf => rf.value.toLowerCase() === String(type || "").toLowerCase());
    return matched?.shortLabel || matched?.label || (type ? type.toUpperCase() : "Solo");
}

function isMultiRunnerType(type) {
    const matched = CONFIG.RUN_FORMATS?.find(rf => rf.value.toLowerCase() === String(type || "").toLowerCase());
    return Boolean(matched?.multiRunner);
}

function updateCoRunnersVisibility(selectId, groupId) {
    if ($(selectId) && $(groupId)) $(groupId).style.display = isMultiRunnerType($(selectId).value) ? "block" : "none";
}

function handleRunTypeChange() { updateCoRunnersVisibility("run-type", "co-runners-group"); }
function handleEditRunTypeChange() { updateCoRunnersVisibility("edit-run-type", "edit-co-runners-group"); }

function formatRatioString(w, h) {
    const sw = String(w || "").trim(), sh = String(h || "").trim();
    if (!sw || !sh) return "16:9";
    return `${sw}${parseInt(sw, 10) > 50 || parseInt(sh, 10) > 50 ? "x" : ":"}${sh}`;
}

function parseRatioString(ratioStr) {
    const p = String(ratioStr || "16:9").split(/[:x×/]/);
    return { width: p[0]?.trim() || "16", height: p[1]?.trim() || "9" };
}

function canModifySubmissions() { return Boolean(currentEvent?.submissions_open || currentProfile?.is_admin); }

function checkSubmissionsEditable(action = "modify") {
    if (!canModifySubmissions()) {
        showToast(`Submissions are closed. Cannot ${action} submissions.`, "error");
        return false;
    }
    return true;
}

async function refreshAllSubmissionsViews() {
    await loadMySubmissions();
    await loadAllSubmissions();
    if (currentProfile?.is_admin) await loadAdminSubmissions();
}

function getRunnerDisplayInfo(profile) {
    const name = profile?.display_name || "Runner";
    const avatar = profile?.avatar_url || "../static/images/popruns_logo.png";
    const discord = profile?.discord_username ? `Discord: @${profile.discord_username}` : "";
    const twitch = profile?.twitch_username ? `Twitch: ${profile.twitch_username}` : "";
    return { name, avatar, discord, twitch, tooltip: [name, discord, twitch].filter(Boolean).join(" | ") };
}

function populateDynamicOptions() {
    if (typeof CONFIG === "undefined") return;

    if (CONFIG.RUN_FORMATS) {
        const opts = CONFIG.RUN_FORMATS.map(rf => `<option value="${escapeHTML(rf.value)}">${escapeHTML(rf.label)}</option>`).join("");
        [$("run-type"), $("edit-run-type")].forEach(sel => { if (sel) { const v = sel.value; sel.innerHTML = opts; if (v) sel.value = v; } });
    }

    if (CONFIG.RATIO_PRESETS) {
        [{ id: "ratio-presets-container", pfx: "run" }, { id: "edit-ratio-presets-container", pfx: "edit-run" }].forEach(({ id, pfx }) => {
            if ($(id)) $(id).innerHTML = CONFIG.RATIO_PRESETS.map(r => `<button type="button" class="ratio-chip" onclick="setRatioPreset('${r.width}', '${r.height}', '${pfx}')">${escapeHTML(r.label)}</button>`).join("");
        });
    }

    if (CONFIG.STATUS_OPTIONS) {
        const statusOpts = CONFIG.STATUS_OPTIONS.map(s => `<option value="${escapeHTML(s.value)}">${escapeHTML(s.label)}</option>`).join("");
        [$("all-runs-filter-status"), $("admin-filter-status")].forEach(sel => { if (sel) { const v = sel.value || "all"; sel.innerHTML = statusOpts; sel.value = v; } });
    }
}

function setRatioPreset(w, h, pfx = "run") {
    if ($(`${pfx}-ratio-width`)) $(`${pfx}-ratio-width`).value = w;
    if ($(`${pfx}-ratio-height`)) $(`${pfx}-ratio-height`).value = h;
}

// Submissions - Form Processing
function getRunFormData(prefix = "run") {
    let game = $(`${prefix}-game`)?.value.trim() || "";
    if (game.startsWith("Other") && $(`${prefix}-game-custom`)) game = $(`${prefix}-game-custom`).value.trim() || game;
    if (!game) { showToast("Please select a game from the grid or spin-offs list.", "error"); return null; }

    const category = $(`${prefix}-category`)?.value.trim() || "";
    if (!category) { showToast("Please enter a category name.", "error"); return null; }

    let platform = $(`${prefix}-platform`)?.value || "";
    if (platform === "Other" && $(`${prefix}-platform-custom`)) platform = $(`${prefix}-platform-custom`).value.trim() || "Other";
    if (!platform) { showToast("Please select a platform.", "error"); return null; }

    const ratio = formatRatioString($(`${prefix}-ratio-width`)?.value, $(`${prefix}-ratio-height`)?.value);
    const estSec = parseTimeToSeconds($(`${prefix}-estimate`)?.value.trim());
    if (!estSec || estSec <= 0) { showToast("Please enter a valid estimate in HH:MM:SS format (e.g. 01:25:00)", "error"); return null; }

    const runType = $(`${prefix}-type`)?.value || "solo";
    const coRunners = isMultiRunnerType(runType) ? ($(`${prefix}-co-runners`)?.value.trim() || "") : "";
    const videoUrl = $(`${prefix}-video`)?.value.trim() || "";
    if (!videoUrl) { showToast("Please provide a valid video proof link.", "error"); return null; }
    const notes = $(`${prefix}-notes`)?.value.trim() || "";

    return { game, category, platform, ratio, estimate_seconds: estSec, run_type: runType, co_runners: coRunners, video_url: videoUrl, notes };
}

async function handleRunSubmit(e) {
    e.preventDefault();
    if (!supabaseClient || !currentUser) return showToast("Please log in to submit a run.", "error");
    if (!checkSubmissionsEditable("submit")) return;

    const data = getRunFormData("run");
    if (!data) return;

    const btn = $("btn-submit-run");
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting...'; }

    try {
        const { error } = await supabaseClient.from("submissions").insert([{ ...data, event_id: currentEvent.id, user_id: currentUser.id, status: "submitted" }]);
        if (error) throw error;
        showToast("Run submitted successfully!", "success");
        if ($("submission-form")) $("submission-form").reset();
        clearSelectedGame();
        handleRunTypeChange();
        await refreshAllSubmissionsViews();
        switchTab("my-runs");
    } catch (err) {
        showToast("Failed to submit run: " + err.message, "error");
    } finally {
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa fa-check-circle"></i> Submit Run'; }
    }
}

async function loadMySubmissions() {
    if (!supabaseClient || !currentUser || !currentEvent) return;
    try {
        const { data, error } = await supabaseClient.from("submissions").select("*").eq("event_id", currentEvent.id).eq("user_id", currentUser.id).order("created_at", { ascending: false });
        if (error && handleAuthFailure(error)) return;
        if (error) throw error;
        userSubmissions = data || [];
        renderMySubmissions();
    } catch (err) {
        console.error("Error loading submissions:", err);
    }
}

function renderMySubmissions() {
    const listEl = $("my-submissions-list"), countBadge = $("my-runs-count");
    if (!listEl) return;
    if (countBadge) { countBadge.textContent = userSubmissions.length; countBadge.style.display = userSubmissions.length ? "inline-block" : "none"; }

    if (!userSubmissions.length) {
        listEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fa fa-inbox"></i></div>
                <p>You haven't submitted any runs yet.</p>
                ${currentEvent?.submissions_open ? '<button class="btn btn-primary btn-sm" onclick="switchTab(\'submit\')" style="margin-top: 1rem;">Submit a Run</button>' : ''}
            </div>`;
        return;
    }

    const isLocked = !canModifySubmissions();
    listEl.innerHTML = userSubmissions.map(run => `
        <div class="submission-card">
            <div class="submission-header">
                <div>
                    <div class="submission-game">${escapeHTML(run.game)}</div>
                    <div class="submission-category">${escapeHTML(run.category)} &bull; ${escapeHTML(run.platform)}</div>
                </div>
                <div><span class="badge badge-${run.status}">${run.status}</span></div>
            </div>
            <div class="submission-details">
                <span><i class="fa fa-tv"></i> Ratio: <strong>${escapeHTML(run.ratio || "16:9")}</strong></span>
                <span><i class="fa fa-stopwatch"></i> Estimate: <strong>${formatSecondsToTime(run.estimate_seconds)}</strong></span>
                <span><i class="fa fa-gamepad"></i> Format: <strong>${escapeHTML(formatRunType(run.run_type))}</strong></span>
                ${run.co_runners ? `<span><i class="fa fa-users"></i> Co-runners: <strong>${escapeHTML(run.co_runners)}</strong></span>` : ""}
                <span><i class="fa fa-video"></i> <a href="${escapeHTML(run.video_url)}" target="_blank" style="color: var(--accent-blue);">Video Proof <i class="fa fa-external-link-alt"></i></a></span>
            </div>
            ${run.notes ? `<div class="submission-notes"><i class="fa fa-sticky-note"></i> ${escapeHTML(run.notes)}</div>` : ""}
            <div class="submission-actions">
                ${isLocked
                    ? '<span style="color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; gap: 0.4rem;"><i class="fa fa-lock"></i> Locked for review (submissions closed)</span>'
                    : `<button class="btn btn-secondary btn-sm" onclick="openEditSubmissionModal(${run.id})"><i class="fa fa-edit"></i> Edit</button>
                       <button class="btn btn-danger btn-sm" onclick="deleteSubmission(${run.id})"><i class="fa fa-trash"></i> Delete</button>`
                }
            </div>
        </div>
    `).join("");
}

function openEditSubmissionModal(runId) {
    if (!checkSubmissionsEditable("edit")) return;
    const run = userSubmissions.find(r => r.id === runId) || allAdminSubmissions.find(r => r.id === runId);
    if (!run) return;

    if ($("edit-run-id")) $("edit-run-id").value = run.id;
    if ($("edit-run-game")) $("edit-run-game").value = run.game;
    if ($("edit-run-category")) $("edit-run-category").value = run.category;
    if ($("edit-run-platform")) $("edit-run-platform").value = run.platform;

    const { width, height } = parseRatioString(run.ratio);
    if ($("edit-run-ratio-width")) $("edit-run-ratio-width").value = width;
    if ($("edit-run-ratio-height")) $("edit-run-ratio-height").value = height;
    if ($("edit-run-estimate")) $("edit-run-estimate").value = formatSecondsToTime(run.estimate_seconds);

    if ($("edit-run-type")) { $("edit-run-type").value = run.run_type || "solo"; handleEditRunTypeChange(); }
    if ($("edit-co-runners-group")) $("edit-co-runners-group").style.display = isMultiRunnerType(run.run_type) ? "block" : "none";
    if ($("edit-run-co-runners")) $("edit-run-co-runners").value = run.co_runners || "";
    if ($("edit-run-video")) $("edit-run-video").value = run.video_url || "";
    if ($("edit-run-notes")) $("edit-run-notes").value = run.notes || "";

    openModal("edit-submission-modal");
}

async function handleRunUpdate(e) {
    e.preventDefault();
    if (!supabaseClient || !checkSubmissionsEditable("modify")) return;

    const id = parseInt($("edit-run-id")?.value, 10);
    const data = getRunFormData("edit-run");
    if (!data) return;

    try {
        const { error } = await supabaseClient.from("submissions").update({ ...data, updated_at: new Date().toISOString() }).eq("id", id);
        if (error) throw error;
        showToast("Run updated successfully!", "success");
        closeModal("edit-submission-modal");
        await refreshAllSubmissionsViews();
    } catch (err) {
        showToast("Failed to update run: " + err.message, "error");
    }
}

async function deleteSubmission(runId) {
    if (!checkSubmissionsEditable("delete") || !confirm("Are you sure you want to delete this submission?") || !supabaseClient) return;
    try {
        const { error } = await supabaseClient.from("submissions").delete().eq("id", runId);
        if (error) throw error;
        showToast("Submission deleted.", "success");
        await refreshAllSubmissionsViews();
    } catch (err) {
        showToast("Failed to delete: " + err.message, "error");
    }
}

// Availability Calendar & Grid
function tzSlotToUtcDate(dayKey, timeStr, timeZone) {
    const [y, m, d] = dayKey.split("-").map(Number);
    const [hr, min] = timeStr.split(":").map(Number);
    const utcDate = new Date(Date.UTC(y, m - 1, d, hr, min, 0));
    const invDate = new Date(utcDate.toLocaleString("en-US", { timeZone: "UTC" }));
    const targetDate = new Date(utcDate.toLocaleString("en-US", { timeZone }));
    return new Date(utcDate.getTime() + (invDate.getTime() - targetDate.getTime()));
}

function utcDateToTzSlot(utcDate, timeZone) {
    const fDate = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" });
    const fTime = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hour12: false });
    return `${fDate.format(utcDate)}T${fTime.format(utcDate)}`;
}

function getTimezoneOffsetMinutes(timeZone) {
    try {
        const now = new Date();
        const invDate = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
        const targetDate = new Date(now.toLocaleString("en-US", { timeZone }));
        return Math.round((targetDate.getTime() - invDate.getTime()) / (60 * 1000));
    } catch (e) { return 0; }
}

function formatTimezoneOffset(offsetMinutes) {
    const sign = offsetMinutes >= 0 ? "+" : "-";
    const abs = Math.abs(offsetMinutes);
    return `UTC${sign}${String(Math.floor(abs / 60)).padStart(2, "0")}:${String(abs % 60).padStart(2, "0")}`;
}

function setupTimezone() {
    const tzSelect = $("tz-select");
    if (!tzSelect) return;

    let timezones = [];
    if (typeof Intl.supportedValuesOf === "function") {
        try { timezones = Intl.supportedValuesOf("timeZone"); } catch (e) {}
    }
    if (!timezones?.length) {
        timezones = ["UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "Europe/London", "Europe/Paris", "Europe/Berlin", "Asia/Kolkata", "Asia/Tokyo", "Australia/Sydney"];
    }
    if (!timezones.includes(detectedTimezone)) timezones.push(detectedTimezone);
    if (!timezones.includes("UTC")) timezones.push("UTC");
    timezones = Array.from(new Set(timezones));

    const tzObjects = timezones.map(tz => {
        const offset = getTimezoneOffsetMinutes(tz);
        return { tz, offset, label: `(${formatTimezoneOffset(offset)}) ${tz.replace(/_/g, " ")}` };
    }).sort((a, b) => a.offset - b.offset || a.label.localeCompare(b.label));

    tzSelect.innerHTML = tzObjects.map(item => `<option value="${item.tz}" ${item.tz === selectedTimezone ? "selected" : ""}>${item.label}</option>`).join("");
}

function handleTimezoneChange(e) {
    const newTz = e.target.value;
    if (newTz === selectedTimezone) return;

    const translate = (set) => {
        const res = new Set();
        set.forEach(k => {
            const [d, t] = k.split("T");
            res.add(utcDateToTzSlot(tzSlotToUtcDate(d, t, selectedTimezone), newTz));
        });
        return res;
    };

    selectedAvailabilitySlots = translate(selectedAvailabilitySlots);
    savedAvailabilitySlots = translate(savedAvailabilitySlots);
    selectedTimezone = newTz;
    buildAvailabilityCalendar();
    showToast(`Timezone set to ${selectedTimezone}`, "info");
}

function resetToDetectedTimezone() {
    if (selectedTimezone === detectedTimezone) return;
    if ($("tz-select")) $("tz-select").value = detectedTimezone;
    handleTimezoneChange({ target: { value: detectedTimezone } });
}

function updateAvailabilityDirtyState() {
    const currentNotes = $("avail-notes")?.value.trim() || "";
    let isDirty = currentNotes !== savedAvailabilityNotes || selectedAvailabilitySlots.size !== savedAvailabilitySlots.size;
    if (!isDirty) {
        for (const slot of selectedAvailabilitySlots) {
            if (!savedAvailabilitySlots.has(slot)) { isDirty = true; break; }
        }
    }

    $$(".btn-save-availability").forEach(btn => {
        btn.disabled = !isDirty;
        btn.classList.toggle("btn-disabled", !isDirty);
        btn.title = isDirty ? "Save your availability" : "No unsaved changes";
    });

    $$(".btn-reset-availability").forEach(btn => {
        btn.disabled = !isDirty;
        btn.classList.toggle("btn-disabled", !isDirty);
        btn.title = isDirty ? "Reset to saved state" : "No unsaved changes";
    });
}

function buildAvailabilityCalendar() {
    if (!currentEvent) return;
    const listEl = $("availability-days-list");
    if (!listEl) return;
    listEl.innerHTML = "";
    slotElementsMap.clear();

    const isLocked = !currentEvent.submissions_open && (!currentProfile || !currentProfile.is_admin);
    const startUtc = new Date(currentEvent.start_date), endUtc = new Date(currentEvent.end_date);
    const startUtcMs = startUtc.getTime(), endUtcMs = endUtc.getTime();

    const [startDayY, startDayM, startDayD] = utcDateToTzSlot(startUtc, selectedTimezone).split("T")[0].split("-").map(Number);
    const [endDayY, endDayM, endDayD] = utcDateToTzSlot(endUtc, selectedTimezone).split("T")[0].split("-").map(Number);

    let currentDate = new Date(Date.UTC(startDayY, startDayM - 1, startDayD));
    const endBoundary = new Date(Date.UTC(endDayY, endDayM - 1, endDayD));

    while (currentDate <= endBoundary) {
        const dayKey = currentDate.toISOString().slice(0, 10);
        const [y, m, d] = dayKey.split("-").map(Number);

        const validSlots = [];
        for (let h = 0; h < 24; h++) {
            for (let min of [0, 30]) {
                const hourStr = `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
                const endH = min === 30 ? (h === 23 ? 0 : h + 1) : h;
                const endHourStr = `${String(endH).padStart(2, "0")}:${min === 30 ? "00" : "30"}`;
                const slotKey = `${dayKey}T${hourStr}`;
                const slotStartMs = tzSlotToUtcDate(dayKey, hourStr, selectedTimezone).getTime();

                if (slotStartMs >= startUtcMs && slotStartMs < endUtcMs) {
                    validSlots.push({ slotKey, hourStr, endHourStr });
                }
            }
        }

        if (validSlots.length > 0) {
            const dayTitle = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "short", day: "numeric" }).format(new Date(y, m - 1, d));
            const dayCard = document.createElement("div");
            dayCard.className = "avail-day-card";
            dayCard.style.marginBottom = "1rem";
            dayCard.innerHTML = `
                <div class="avail-day-title">
                    <span>${dayTitle}</span>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="toggleWholeDay('${dayKey}')" ${isLocked ? 'disabled title="Availability locked"' : ''}>Toggle Day</button>
                </div>
                <div class="hours-grid" id="hours-${dayKey}"></div>
            `;
            listEl.appendChild(dayCard);

            const hoursContainer = dayCard.querySelector(`#hours-${dayKey}`);
            validSlots.forEach(({ slotKey, hourStr, endHourStr }) => {
                const slotBtn = document.createElement("div");
                slotBtn.className = "hour-slot" + (selectedAvailabilitySlots.has(slotKey) ? " selected" : "") + (isLocked ? " locked" : "");
                slotBtn.textContent = hourStr;
                slotBtn.title = `Slot start: ${hourStr} (Window: ${hourStr} - ${endHourStr})${isLocked ? ' [Read-only]' : ''}`;
                slotBtn.dataset.slot = slotKey;

                if (!isLocked) {
                    slotBtn.onmousedown = (e) => { e.preventDefault(); startDrag(slotBtn, slotKey); };
                    slotBtn.onmouseenter = () => onDragOver(slotBtn, slotKey);
                }

                slotElementsMap.set(slotKey, slotBtn);
                hoursContainer.appendChild(slotBtn);
            });
        }
        currentDate.setUTCDate(currentDate.getUTCDate() + 1);
    }
    updateAvailabilityDirtyState();
}

function startDrag(el, slotKey) {
    if (!currentEvent?.submissions_open && (!currentProfile || !currentProfile.is_admin)) return;
    isDragging = true;
    dragStartSlotKey = slotKey;
    dragInitialSelection = new Set(selectedAvailabilitySlots);

    if (selectedAvailabilitySlots.has(slotKey)) {
        dragMode = "deselect";
        selectedAvailabilitySlots.delete(slotKey);
        el.classList.remove("selected");
    } else {
        dragMode = "select";
        selectedAvailabilitySlots.add(slotKey);
        el.classList.add("selected");
    }
    updateAvailabilityDirtyState();
}

function onDragOver(el, slotKey) {
    if (!isDragging || !dragStartSlotKey) return;
    const tStart = tzSlotToUtcDate(dragStartSlotKey.split("T")[0], dragStartSlotKey.split("T")[1], selectedTimezone).getTime();
    const tCurrent = tzSlotToUtcDate(slotKey.split("T")[0], slotKey.split("T")[1], selectedTimezone).getTime();
    const minT = Math.min(tStart, tCurrent), maxT = Math.max(tStart, tCurrent);

    const rangeSlots = new Set();
    for (let t = minT; t <= maxT; t += THIRTY_MIN_MS) {
        const sKey = utcDateToTzSlot(new Date(t), selectedTimezone);
        if (slotElementsMap.has(sKey)) rangeSlots.add(sKey);
    }

    const newSelection = new Set(dragInitialSelection);
    if (dragMode === "select") rangeSlots.forEach(s => newSelection.add(s));
    else if (dragMode === "deselect") rangeSlots.forEach(s => newSelection.delete(s));

    selectedAvailabilitySlots = newSelection;
    slotElementsMap.forEach((btn, key) => btn.classList.toggle("selected", selectedAvailabilitySlots.has(key)));
}

function toggleSlot(el, slotKey) {
    if (!currentEvent?.submissions_open && (!currentProfile || !currentProfile.is_admin)) return;
    startDrag(el, slotKey);
    isDragging = false;
    dragMode = dragStartSlotKey = dragInitialSelection = null;
}

function toggleWholeDay(dayKey) {
    if (!currentEvent?.submissions_open && (!currentProfile || !currentProfile.is_admin)) return;
    const container = $(`hours-${dayKey}`);
    if (!container) return;

    const slots = container.querySelectorAll(".hour-slot");
    const allSelected = Array.from(slots).every(s => s.classList.contains("selected"));

    slots.forEach(slot => {
        const slotKey = slot.dataset.slot;
        if (allSelected) { selectedAvailabilitySlots.delete(slotKey); slot.classList.remove("selected"); }
        else { selectedAvailabilitySlots.add(slotKey); slot.classList.add("selected"); }
    });
    updateAvailabilityDirtyState();
}

function setAvailabilityPreset(type) {
    if (!currentEvent?.submissions_open && (!currentProfile || !currentProfile.is_admin)) return;
    const allSlots = $$(".hour-slot");

    if (type === "clear") {
        selectedAvailabilitySlots.clear();
        allSlots.forEach(s => s.classList.remove("selected"));
        showToast("Cleared all availability slots.", "info");
    } else if (type === "all") {
        allSlots.forEach(s => { selectedAvailabilitySlots.add(s.dataset.slot); s.classList.add("selected"); });
        showToast("Selected all slots.", "success");
    } else if (type === "evenings") {
        allSlots.forEach(s => {
            const h = parseInt(s.dataset.slot.split("T")[1].split(":")[0], 10);
            if (h >= 18 && h <= 23) { selectedAvailabilitySlots.add(s.dataset.slot); s.classList.add("selected"); }
        });
        showToast("Selected evening hours (18:00 - 24:00).", "success");
    }
    updateAvailabilityDirtyState();
}

function resetAvailability() {
    if (!currentEvent?.submissions_open && (!currentProfile || !currentProfile.is_admin)) return;
    selectedAvailabilitySlots = new Set(savedAvailabilitySlots);
    if ($("avail-notes")) $("avail-notes").value = savedAvailabilityNotes;
    $$(".hour-slot").forEach(s => s.classList.toggle("selected", selectedAvailabilitySlots.has(s.dataset.slot)));
    updateAvailabilityDirtyState();
    showToast("Reset availability to saved state.", "info");
}

async function saveAvailability() {
    if (!supabaseClient || !currentUser || !currentEvent) return showToast("Please log in to save your availability.", "error");
    if (!currentEvent.submissions_open && (!currentProfile || !currentProfile.is_admin)) {
        return showToast("Availability editing is locked because submissions are closed.", "error");
    }

    const notes = $("avail-notes")?.value.trim() || "";
    const startTimestamps = Array.from(selectedAvailabilitySlots)
        .map(slotKey => {
            const [d, t] = slotKey.split("T");
            return tzSlotToUtcDate(d, t, selectedTimezone).getTime();
        })
        .sort((a, b) => a - b);

    const intervals = [];
    if (startTimestamps.length > 0) {
        let blockStart = startTimestamps[0], blockEnd = blockStart + THIRTY_MIN_MS;
        for (let i = 1; i < startTimestamps.length; i++) {
            const t = startTimestamps[i];
            if (t === blockEnd) {
                blockEnd = t + THIRTY_MIN_MS;
            } else {
                intervals.push({ event_id: currentEvent.id, user_id: currentUser.id, start_time: new Date(blockStart).toISOString(), end_time: new Date(blockEnd).toISOString(), notes });
                blockStart = t;
                blockEnd = t + THIRTY_MIN_MS;
            }
        }
        intervals.push({ event_id: currentEvent.id, user_id: currentUser.id, start_time: new Date(blockStart).toISOString(), end_time: new Date(blockEnd).toISOString(), notes });
    }

    try {
        $$(".btn-save-availability").forEach(b => { b.disabled = true; b.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Saving...'; });
        await supabaseClient.from("availabilities").delete().eq("event_id", currentEvent.id).eq("user_id", currentUser.id);
        if (intervals.length > 0) {
            const { error } = await supabaseClient.from("availabilities").insert(intervals);
            if (error) throw error;
        }

        savedAvailabilitySlots = new Set(selectedAvailabilitySlots);
        savedAvailabilityNotes = notes;
        updateAvailabilityDirtyState();
        showToast(`Availability saved (${intervals.length} continuous ${intervals.length === 1 ? 'block' : 'blocks'}).`, "success");
    } catch (err) {
        console.error("Availability save error:", err);
        showToast("Failed to save availability: " + err.message, "error");
    } finally {
        $$(".btn-save-availability").forEach(b => b.innerHTML = '<i class="fa fa-save"></i> Save Availability');
        updateAvailabilityDirtyState();
    }
}

async function loadUserAvailability(force = false) {
    if (!supabaseClient || !currentUser || !currentEvent) return;
    if (!force && selectedAvailabilitySlots.size > 0) {
        let isDirty = selectedAvailabilitySlots.size !== savedAvailabilitySlots.size;
        if (!isDirty) {
            for (const s of selectedAvailabilitySlots) {
                if (!savedAvailabilitySlots.has(s)) { isDirty = true; break; }
            }
        }
        if (isDirty) return;
    }

    try {
        const { data, error } = await supabaseClient.from("availabilities").select("*").eq("event_id", currentEvent.id).eq("user_id", currentUser.id);
        if (error && handleAuthFailure(error)) return;
        if (error) throw error;

        selectedAvailabilitySlots.clear();
        let loadedNotes = "";

        if (data && data.length > 0) {
            data.forEach(item => {
                const startMs = new Date(item.start_time).getTime(), endMs = new Date(item.end_time).getTime();
                for (let t = startMs; t < endMs; t += THIRTY_MIN_MS) {
                    selectedAvailabilitySlots.add(utcDateToTzSlot(new Date(t), selectedTimezone));
                }
            });
            if (data[0].notes) {
                loadedNotes = data[0].notes;
                if ($("avail-notes")) $("avail-notes").value = loadedNotes;
            }
        }

        savedAvailabilitySlots = new Set(selectedAvailabilitySlots);
        savedAvailabilityNotes = loadedNotes;
        buildAvailabilityCalendar();
    } catch (err) {
        console.error("Error loading availability:", err);
    }
}

// All Submissions Tab
async function loadAllSubmissions() {
    const listEl = $("all-submissions-list");
    if (!supabaseClient || !currentEvent) return;

    try {
        const { data, error } = await supabaseClient
            .from("submissions")
            .select("id, game, category, platform, ratio, estimate_seconds, run_type, co_runners, notes, status, created_at, profiles:user_id (display_name, discord_username, twitch_username, avatar_url)")
            .eq("event_id", currentEvent.id)
            .order("created_at", { ascending: false });

        if (error) throw error;
        allSubmissions = data || [];
        populateAllSubmissionsGameFilter();
        renderAllSubmissions();
    } catch (err) {
        console.error("Error loading all submissions:", err);
        if (listEl) listEl.innerHTML = `<div class="empty-state"><p>Failed to load submissions: ${escapeHTML(err.message)}</p></div>`;
    }
}

function populateAllSubmissionsGameFilter() {
    const gameSelect = $("all-runs-filter-game");
    if (!gameSelect) return;
    const currentVal = gameSelect.value;
    const games = Array.from(new Set(allSubmissions.map(r => r.game).filter(Boolean))).sort();
    gameSelect.innerHTML = '<option value="all">All Games</option>' + games.map(g => `<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join("");
    if (games.includes(currentVal)) gameSelect.value = currentVal;
}

function filterAllSubmissions() {
    renderAllSubmissions();
}

function openRunNote(runId) {
    const run = allSubmissions.find(r => r.id === runId) || allAdminSubmissions.find(r => r.id === runId);
    if (!run) return;
    const { name: runner } = getRunnerDisplayInfo(run.profiles);
    if ($("note-modal-subtitle")) $("note-modal-subtitle").textContent = `${runner} • ${run.game} (${run.category})`;
    if ($("note-modal-content")) $("note-modal-content").textContent = run.notes || "No notes provided.";
    openModal("note-modal");
}

function renderAllSubmissions() {
    const listEl = $("all-submissions-list"), countBadge = $("all-runs-count"), statsEl = $("all-submissions-stats");
    if (!listEl) return;

    const search = $("all-runs-search")?.value.toLowerCase().trim() || "";
    const gameFilter = $("all-runs-filter-game")?.value || "all";
    const statusFilter = $("all-runs-filter-status")?.value || "all";

    const filtered = allSubmissions.filter(run => {
        const runnerName = (run.profiles?.display_name || "Runner").toLowerCase();
        const discordTag = (run.profiles?.discord_username || "").toLowerCase();
        const matchesSearch = !search || runnerName.includes(search) || discordTag.includes(search) ||
            (run.game || "").toLowerCase().includes(search) || (run.category || "").toLowerCase().includes(search) ||
            (run.platform || "").toLowerCase().includes(search) || (run.co_runners || "").toLowerCase().includes(search);
        const matchesGame = gameFilter === "all" || run.game === gameFilter;
        const matchesStatus = statusFilter === "all" || run.status === statusFilter;
        return matchesSearch && matchesGame && matchesStatus;
    });

    if (countBadge) {
        countBadge.textContent = allSubmissions.length;
        countBadge.style.display = allSubmissions.length > 0 ? "inline-block" : "none";
    }

    if (statsEl) {
        const uniqueRunners = new Set(allSubmissions.map(r => r.profiles?.display_name).filter(Boolean)).size;
        const acceptedCount = allSubmissions.filter(r => r.status === "accepted").length;
        statsEl.innerHTML = `
            <span><i class="fa fa-layer-group"></i> Total: <strong>${allSubmissions.length}</strong></span>
            <span>&bull;</span>
            <span><i class="fa fa-users"></i> Runners: <strong>${uniqueRunners}</strong></span>
            ${acceptedCount > 0 ? `<span>&bull;</span><span><i class="fa fa-check-circle" style="color: #2ecc71;"></i> Accepted: <strong>${acceptedCount}</strong></span>` : ""}
            ${filtered.length !== allSubmissions.length ? `<span>&bull;</span><span style="color: var(--accent-blue);"><i class="fa fa-filter"></i> Matching Filters: <strong>${filtered.length}</strong></span>` : ""}
        `;
    }

    if (!filtered.length) {
        listEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fa fa-inbox"></i></div>
                <p>${allSubmissions.length === 0 ? "No runs have been submitted yet." : "No submissions match your search/filter criteria."}</p>
            </div>`;
        return;
    }

    listEl.innerHTML = `
        <div class="all-submissions-table-wrap">
            <table class="all-submissions-table">
                <thead>
                    <tr>
                        <th>Runner</th><th>Game</th><th>Category</th><th>Platform</th><th>Ratio</th><th>Estimate</th><th>Format</th><th class="col-status">Status</th><th style="text-align: center;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    ${filtered.map(run => {
                        const { name: runner, avatar, tooltip: runnerTooltip } = getRunnerDisplayInfo(run.profiles);
                        const hasNotes = Boolean(run.notes && run.notes.trim().length > 0);
                        return `
                            <tr>
                                <td>
                                    <div class="runner-cell" title="${escapeHTML(runnerTooltip)}">
                                        <img src="${escapeHTML(avatar)}" alt="${escapeHTML(runner)}" class="runner-avatar" onerror="this.src='../static/images/popruns_logo.png'">
                                        <span>${escapeHTML(runner)}</span>
                                    </div>
                                </td>
                                <td style="font-weight: 600; color: var(--gold);">${escapeHTML(run.game)}</td>
                                <td style="color: var(--text-main);">${escapeHTML(run.category)}</td>
                                <td><span style="color: var(--text-muted);">${escapeHTML(run.platform)}</span></td>
                                <td><span style="font-family: monospace; font-size: 0.84rem; color: var(--gold-bright);">${escapeHTML(run.ratio || "16:9")}</span></td>
                                <td style="font-family: monospace; font-size: 0.9rem; white-space: nowrap;">${formatSecondsToTime(run.estimate_seconds)}</td>
                                <td style="white-space: nowrap;">
                                    <span style="font-size: 0.85rem; font-weight: 600;">${escapeHTML(formatRunType(run.run_type))}</span>
                                    ${run.co_runners ? `<div style="font-size: 0.78rem; color: var(--text-muted);"><i class="fa fa-users"></i> ${escapeHTML(run.co_runners)}</div>` : ""}
                                </td>
                                <td class="col-status"><span class="badge badge-${run.status}">${run.status}</span></td>
                                <td style="text-align: center;">
                                    ${hasNotes 
                                        ? `<button type="button" class="notes-tooltip-icon" onclick="openRunNote(${run.id})" title="Click to view notes"><i class="fa fa-comment-dots"></i></button>`
                                        : '<span style="color: rgba(255,255,255,0.2);">&mdash;</span>'
                                    }
                                </td>
                            </tr>
                        `;
                    }).join("")}
                </tbody>
            </table>
        </div>
    `;
}

// Organizer / Admin Dashboard
async function loadAdminSubmissions() {
    if (!supabaseClient || !currentProfile?.is_admin || !currentEvent) return;
    try {
        const { data, error } = await supabaseClient
            .from("submissions")
            .select("*, profiles:user_id (display_name, discord_username, twitch_username, avatar_url)")
            .eq("event_id", currentEvent.id)
            .order("created_at", { ascending: false });

        if (error) throw error;
        allAdminSubmissions = data || [];
        updateAdminStats();
        filterAdminSubmissions();
    } catch (err) {
        console.error("Admin submissions load error:", err);
    }
}

function updateAdminStats() {
    const counts = { total: allAdminSubmissions.length, accepted: 0, backup: 0, rejected: 0 };
    allAdminSubmissions.forEach(s => { if (counts[s.status] !== undefined) counts[s.status]++; });
    if ($("stat-total")) $("stat-total").textContent = counts.total;
    if ($("stat-accepted")) $("stat-accepted").textContent = counts.accepted;
    if ($("stat-backup")) $("stat-backup").textContent = counts.backup;
    if ($("stat-rejected")) $("stat-rejected").textContent = counts.rejected;
}

function filterAdminSubmissions() {
    const q = $("admin-search")?.value.toLowerCase().trim() || "";
    const status = $("admin-filter-status")?.value || "all";

    const filtered = allAdminSubmissions.filter(run => {
        const matchQuery = !q || run.game.toLowerCase().includes(q) || run.category.toLowerCase().includes(q) || (run.profiles?.display_name || "").toLowerCase().includes(q);
        const matchStatus = status === "all" || run.status === status;
        return matchQuery && matchStatus;
    });

    renderAdminSubmissions(filtered);
}

function renderAdminSubmissions(runs) {
    const listEl = $("admin-submissions-list");
    if (!listEl) return;
    if (!runs.length) { listEl.innerHTML = '<div class="empty-state">No matching submissions found.</div>'; return; }

    listEl.innerHTML = runs.map(run => {
        const { name: runner, discord: runnerDiscord } = getRunnerDisplayInfo(run.profiles);
        return `
            <div class="submission-card">
                <div class="submission-header">
                    <div>
                        <div class="submission-game">${escapeHTML(run.game)}</div>
                        <div class="submission-category">${escapeHTML(run.category)} &bull; ${escapeHTML(run.platform)}</div>
                    </div>
                    <span class="badge badge-${run.status}">${run.status}</span>
                </div>
                <div class="submission-details">
                    <span><i class="fa fa-user"></i> Runner: <strong>${escapeHTML(runner)}</strong> (${escapeHTML(runnerDiscord || "No Discord")})</span>
                    <span><i class="fa fa-tv"></i> Ratio: <strong>${escapeHTML(run.ratio || "16:9")}</strong></span>
                    <span><i class="fa fa-stopwatch"></i> Estimate: <strong>${formatSecondsToTime(run.estimate_seconds)}</strong></span>
                    <span><i class="fa fa-gamepad"></i> Type: <strong>${escapeHTML(formatRunType(run.run_type))}</strong></span>
                    ${run.co_runners ? `<span><i class="fa fa-users"></i> Co-runners: <strong>${escapeHTML(run.co_runners)}</strong></span>` : ""}
                    <span><i class="fa fa-video"></i> <a href="${escapeHTML(run.video_url)}" target="_blank" style="color: var(--accent-blue);">Video Proof <i class="fa fa-external-link-alt"></i></a></span>
                </div>
                ${run.notes ? `<div class="submission-notes"><i class="fa fa-sticky-note"></i> <strong>Runner Notes:</strong> ${escapeHTML(run.notes)}</div>` : ""}
                <div class="submission-actions">
                    <button class="btn btn-success btn-sm" onclick="setRunStatus(${run.id}, 'accepted')"><i class="fa fa-check"></i> Accept</button>
                    <button class="btn btn-secondary btn-sm" style="color: #c39bd3;" onclick="setRunStatus(${run.id}, 'backup')"><i class="fa fa-shield-alt"></i> Backup</button>
                    <button class="btn btn-danger btn-sm" onclick="setRunStatus(${run.id}, 'rejected')"><i class="fa fa-times"></i> Reject</button>
                    <button class="btn btn-secondary btn-sm" onclick="setRunStatus(${run.id}, 'submitted')"><i class="fa fa-undo"></i> Reset</button>
                </div>
            </div>
        `;
    }).join("");
}

async function setRunStatus(runId, newStatus) {
    if (!supabaseClient) return;
    try {
        const { error } = await supabaseClient.from("submissions").update({ status: newStatus, updated_at: new Date().toISOString() }).eq("id", runId);
        if (error) throw error;
        showToast(`Status updated to ${newStatus.toUpperCase()}`, "success");
        await loadAdminSubmissions();
        await loadAllSubmissions();
    } catch (err) {
        showToast("Failed to update status: " + err.message, "error");
    }
}

// Exports
function downloadFile(filename, text, mimeType) {
    const blob = new Blob([text], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Exported ${filename}`, "success");
}

function exportHoraro() {
    const accepted = allAdminSubmissions.filter(r => r.status === "accepted");
    if (!accepted.length) return showToast("No accepted runs to export.", "info");

    const horaroData = {
        ticker: currentEvent?.title || "PoPRuns Marathon",
        columns: ["Game", "Category", "Platform", "Runner", "Estimate"],
        items: accepted.map(r => ({
            length: formatSecondsToHoraro(r.estimate_seconds),
            data: [r.game, r.category, r.platform, r.profiles?.display_name || "Runner", formatSecondsToTime(r.estimate_seconds)]
        }))
    };
    downloadFile("horaro-schedule.json", JSON.stringify(horaroData, null, 2), "application/json");
}

function exportCSV() {
    if (!allAdminSubmissions.length) return showToast("No submissions to export.", "info");

    const headers = ["ID", "Game", "Category", "Platform", "Estimate", "Runner", "Discord", "Status", "Video URL", "Type", "Notes"];
    const rows = allAdminSubmissions.map(r => [
        r.id, `"${(r.game || "").replace(/"/g, '""')}"`, `"${(r.category || "").replace(/"/g, '""')}"`, `"${(r.platform || "").replace(/"/g, '""')}"`,
        formatSecondsToTime(r.estimate_seconds), `"${(r.profiles?.display_name || "").replace(/"/g, '""')}"`, `"${(r.profiles?.discord_username || "").replace(/"/g, '""')}"`,
        r.status, `"${(r.video_url || "").replace(/"/g, '""')}"`, r.run_type, `"${(r.notes || "").replace(/"/g, '""')}"`
    ]);

    downloadFile("popruns-submissions.csv", [headers.join(","), ...rows.map(e => e.join(","))].join("\n"), "text/csv");
}

function exportJSON() {
    downloadFile("popruns-submissions.json", JSON.stringify(allAdminSubmissions, null, 2), "application/json");
}

// Profile Modal
function openProfileModal() {
    if (!currentProfile) return;
    if ($("profile-display-name")) $("profile-display-name").value = currentProfile.display_name || "";
    if ($("profile-pronouns")) $("profile-pronouns").value = currentProfile.pronouns || "";

    const accountsEl = $("profile-connected-accounts");
    if (accountsEl) {
        let html = "";
        if (currentProfile.discord_username) {
            html += `<span class="badge" style="background: rgba(88, 101, 242, 0.2); color: #7289da; border: 1px solid rgba(88, 101, 242, 0.4); font-size: 0.85rem; padding: 0.25rem 0.6rem;"><i class="fa-brands fa-discord"></i> @${escapeHTML(currentProfile.discord_username)}</span> `;
        }
        if (currentProfile.twitch_username) {
            html += `<span class="badge" style="background: rgba(145, 71, 255, 0.2); color: #a970ff; border: 1px solid rgba(145, 71, 255, 0.4); font-size: 0.85rem; padding: 0.25rem 0.6rem;"><i class="fa-brands fa-twitch"></i> ${escapeHTML(currentProfile.twitch_username)}</span>`;
        }
        accountsEl.innerHTML = html || '<span style="color: var(--text-muted); font-size: 0.85rem; font-style: italic;">No OAuth username stored yet (log out and log in to sync).</span>';
    }
    openModal("profile-modal");
}

async function handleProfileUpdate(e) {
    e.preventDefault();
    if (!supabaseClient || !currentUser) return;

    const displayName = $("profile-display-name")?.value.trim() || "";
    const pronouns = $("profile-pronouns")?.value.trim() || "";

    try {
        const { error } = await supabaseClient.from("profiles").update({ display_name: displayName, pronouns, updated_at: new Date().toISOString() }).eq("id", currentUser.id);
        if (error) throw error;
        currentProfile.display_name = displayName;
        currentProfile.pronouns = pronouns;
        updateAuthUI();
        closeModal("profile-modal");
        showToast("Profile updated successfully!", "success");
    } catch (err) {
        showToast("Failed to update profile: " + err.message, "error");
    }
}

// UI Navigation, Modals & Toast
function switchTab(tabId) {
    $$(".tab-button, .tab-btn").forEach(b => {
        const matches = Boolean(b.getAttribute("onclick")?.includes(`'${tabId}'`));
        b.classList.toggle("active", matches);
        b.classList.toggle("tab-button-selected", matches);
    });
    $$(".tab-pane").forEach(p => p.classList.toggle("active", p.id === `tab-${tabId}`));
    window.location.hash = tabId;

    if (tabId === "admin") loadAdminSubmissions();
    else if (tabId === "all-runs") loadAllSubmissions();
    else if (tabId === "my-runs") loadMySubmissions();
}

function openModal(id) { const m = $(id); if (m) m.classList.add("open"); }
function closeModal(id) { const m = $(id); if (m) m.classList.remove("open"); }

function showToast(message, type = "info") {
    const container = $("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "check-circle" : (type === "error" ? "exclamation-triangle" : "info-circle");
    toast.innerHTML = `<i class="fa fa-${icon}"></i> <span>${escapeHTML(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = "0"; setTimeout(() => toast.remove(), 300); }, 4000);
}

// Time & Duration Formatting Utilities
function parseTimeToSeconds(timeStr) {
    if (!timeStr) return 0;
    const parts = timeStr.split(":").map(Number);
    if (parts.some(isNaN)) return 0;
    return parts.length === 3 ? parts[0] * 3600 + parts[1] * 60 + parts[2] : (parts.length === 2 ? parts[0] * 60 + parts[1] : (parts.length === 1 ? parts[0] * 60 : 0));
}

function formatSecondsToTime(sec) {
    if (!sec) return "00:00:00";
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function formatSecondsToHoraro(sec) {
    return `PT${Math.floor(sec / 3600)}H${Math.floor((sec % 3600) / 60)}M${sec % 60}S`;
}

