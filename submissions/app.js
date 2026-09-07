/**
 * PoPRuns Marathon Submission System - Client Application Logic
 */

// Application State
let supabaseClient = null;
let currentUser = null;
let currentProfile = null;
let currentEvent = null;
let userSubmissions = [];
let allAdminSubmissions = [];
let selectedAvailabilitySlots = new Set();

// Initialization
document.addEventListener("DOMContentLoaded", async () => {
    initSupabase();
    initUI();
    populateDynamicOptions();
    await loadActiveEvent();
    populateGameDropdown();
    setupTimezone();
});

function initSupabase() {
    const isConfigured = typeof CONFIG !== "undefined" &&
                         CONFIG.SUPABASE_URL && 
                         !CONFIG.SUPABASE_URL.includes("your-project-ref") &&
                         CONFIG.SUPABASE_ANON_KEY && 
                         !CONFIG.SUPABASE_ANON_KEY.includes("your-anon-public-key");

    const configBanner = document.getElementById("config-banner");
    if (!isConfigured) {
        if (configBanner) configBanner.classList.add("active");
        console.warn("Supabase credentials not configured in submissions/config.js");
        return;
    }

    try {
        if (window.supabase && typeof window.supabase.createClient === "function") {
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
                currentUser = null;
                currentProfile = null;
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
    if (["submit", "my-runs", "availability", "all-runs", "admin"].includes(hash)) {
        switchTab(hash);
    }
}

// Authentication
async function loginWithDiscord() {
    if (!supabaseClient) {
        showToast("Supabase is not configured yet in submissions/config.js", "error");
        return;
    }
    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "discord",
        options: {
            scopes: "identify",
            redirectTo: window.location.origin + window.location.pathname
        }
    });
    if (error) showToast("Login failed: " + error.message, "error");
}

async function loginWithTwitch() {
    if (!supabaseClient) {
        showToast("Supabase is not configured yet in submissions/config.js", "error");
        return;
    }
    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "twitch",
        options: {
            redirectTo: window.location.origin + window.location.pathname
        }
    });
    if (error) showToast("Login failed: " + error.message, "error");
}

async function logout() {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
    currentUser = null;
    currentProfile = null;
    userSubmissions = [];
    selectedAvailabilitySlots.clear();
    updateAuthUI();
    showToast("Successfully logged out.", "success");
}

function handleAuthFailure(error) {
    if (!error) return false;
    if (
        error.status === 401 ||
        error.status === 403 ||
        error.code === "401" ||
        error.code === "403" ||
        error.message?.includes("JWT") ||
        error.message?.includes("token is expired") ||
        error.message?.includes("invalid claim")
    ) {
        console.warn("API returned auth error, clearing session:", error);
        logout();
        return true;
    }
    return false;
}

async function loadUserProfile() {
    if (!supabaseClient || !currentUser) return;

    try {
        const { data, error } = await supabaseClient
            .from("profiles")
            .select("*")
            .eq("id", currentUser.id)
            .single();

        if (error) {
            // User was deleted on backend (PGRST116 = no rows) or token is invalid
            if (error.code === "PGRST116" || handleAuthFailure(error)) {
                await logout();
                return;
            }
        }

        if (data) {
            currentProfile = data;
        } else {
            currentProfile = {
                id: currentUser.id,
                display_name: currentUser.user_metadata?.full_name || currentUser.user_metadata?.user_name || "Runner",
                avatar_url: currentUser.user_metadata?.avatar_url || "",
                is_admin: false
            };
        }

        // Automatic client-side OAuth username sync fallback if missing in profile
        const meta = currentUser.user_metadata || {};
        const identities = currentUser.identities || [];
        const provider = currentUser.app_metadata?.provider || "";

        let detectedDiscord = null;
        let detectedTwitch = null;

        const discordId = identities.find(i => i.provider === "discord");
        if (discordId?.identity_data) {
            detectedDiscord = discordId.identity_data.full_name || (discordId.identity_data.name ? discordId.identity_data.name.split("#")[0] : null);
        } else if (provider === "discord" || meta.avatar_url?.includes("discord") || (meta.iss && meta.iss.includes("discord.com"))) {
            detectedDiscord = meta.full_name || (meta.name ? meta.name.split("#")[0] : null);
        }

        const twitchId = identities.find(i => i.provider === "twitch");
        if (twitchId?.identity_data) {
            detectedTwitch = twitchId.identity_data.slug || twitchId.identity_data.name || twitchId.identity_data.full_name;
        } else if (provider === "twitch" || meta.avatar_url?.includes("jtvnw.net") || (meta.iss && meta.iss.includes("twitch.tv"))) {
            detectedTwitch = meta.slug || meta.name || meta.full_name;
        }

        if ((detectedDiscord && !currentProfile.discord_username) || (detectedTwitch && !currentProfile.twitch_username)) {
            const syncPayload = {};
            if (detectedDiscord && !currentProfile.discord_username) {
                syncPayload.discord_username = detectedDiscord;
                currentProfile.discord_username = detectedDiscord;
            }
            if (detectedTwitch && !currentProfile.twitch_username) {
                syncPayload.twitch_username = detectedTwitch;
                currentProfile.twitch_username = detectedTwitch;
            }
            supabaseClient.from("profiles").update(syncPayload).eq("id", currentUser.id).then(() => {});
        }

        updateAuthUI();
        updateSubmissionsOpenState();
    } catch (err) {
        console.error("Error loading profile:", err);
    }
}

function updateAuthUI() {
    const authSection = document.getElementById("auth-section");
    const userProfile = document.getElementById("user-profile");
    const submitLoginPrompt = document.getElementById("submit-login-prompt");
    const submissionForm = document.getElementById("submission-form");
    const tabAdminBtn = document.getElementById("tab-admin-btn");

    if (currentUser && currentProfile) {
        authSection.style.display = "none";
        userProfile.style.display = "flex";
        document.getElementById("user-display-name").textContent = currentProfile.display_name;
        document.getElementById("user-avatar").src = currentProfile.avatar_url || "../static/images/popruns_logo.png";
        
        const adminBadge = document.getElementById("user-admin-badge");
        if (currentProfile.is_admin) {
            adminBadge.style.display = "inline-block";
            tabAdminBtn.style.display = "flex";
        } else {
            adminBadge.style.display = "none";
            tabAdminBtn.style.display = "none";
        }

        if (submitLoginPrompt) submitLoginPrompt.style.display = "none";
        if (submissionForm) submissionForm.style.display = "block";
    } else {
        authSection.style.display = "flex";
        userProfile.style.display = "none";
        tabAdminBtn.style.display = "none";
        if (submitLoginPrompt) submitLoginPrompt.style.display = "block";
        if (submissionForm) submissionForm.style.display = "none";
    }
}

// Active Marathon Event
async function loadActiveEvent() {
    currentEvent = {
        id: 1,
        slug: CONFIG.DEFAULT_EVENT_SLUG,
        title: "Prince of Persia Marathon 2026",
        description: "Also known as PoPRuns 11",
        submissions_open: true,
        start_date: "2026-10-16T12:00:00Z",
        end_date: "2026-10-18T23:59:59Z",
        discord_url: "https://discord.gg/0uN0p5UvU3lXmFkW",
        twitch_url: "https://twitch.tv/PoPRuns",
        youtube_url: "https://youtube.com/@PoPRuns"
    };

    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from("events")
                .select("*")
                .eq("slug", CONFIG.DEFAULT_EVENT_SLUG)
                .single();

            if (data) currentEvent = data;
        } catch (err) {
            console.error("Error fetching event from DB:", err);
        }
    }

    renderHeroMeta();
    updateSubmissionsOpenState();
    loadAllSubmissions();
}

function updateSubmissionsOpenState() {
    if (!currentEvent) return;

    const isOpen = currentEvent.submissions_open;
    const isAdmin = Boolean(currentProfile && currentProfile.is_admin);

    const submitForm = document.getElementById("submission-form");
    const submitBtn = document.getElementById("btn-submit-run");
    const submitTabCard = document.querySelector("#tab-submit .content-card");
    let existingSubmitNotice = document.getElementById("submissions-closed-notice");

    if (!isOpen) {
        if (!existingSubmitNotice && submitTabCard && submitForm) {
            existingSubmitNotice = document.createElement("div");
            existingSubmitNotice.id = "submissions-closed-notice";
            existingSubmitNotice.style.cssText = "background: rgba(231, 76, 60, 0.15); border: 1px solid rgba(231, 76, 60, 0.4); color: #e74c3c; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; font-size: 0.95rem;";
            existingSubmitNotice.innerHTML = '<i class="fa fa-lock" style="font-size: 1.4rem;"></i> <div><strong>Submissions are Closed:</strong> Submissions for this marathon are currently closed. New run submissions are no longer accepted.</div>';
            submitTabCard.insertBefore(existingSubmitNotice, submitForm);
        }
        if (submitForm) {
            submitForm.querySelectorAll("input, select, textarea, button[type='submit']").forEach(el => el.disabled = true);
        }
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa fa-lock"></i> Submissions Closed';
        }
    } else {
        if (existingSubmitNotice) existingSubmitNotice.remove();
        if (submitForm) {
            submitForm.querySelectorAll("input, select, textarea, button[type='submit']").forEach(el => el.disabled = false);
        }
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fa fa-check-circle"></i> Submit Run';
        }
    }

    const availContainer = document.querySelector(".availability-container");
    let existingAvailNotice = document.getElementById("availability-closed-notice");
    const availNotes = document.getElementById("avail-notes");
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

    document.getElementById("hero-title").textContent = currentEvent.title || "Prince of Persia Marathon";
    document.getElementById("hero-desc").textContent = currentEvent.description || "";

    const socialEl = document.getElementById("hero-social-links");
    if (socialEl) {
        let html = "";
        if (currentEvent.discord_url) {
            html += `<a href="${escapeHTML(currentEvent.discord_url)}" target="_blank" rel="noopener" class="hero-social-icon-btn discord" title="PoPRuns Discord Server"><i class="fa-brands fa-discord"></i></a>`;
        }
        if (currentEvent.youtube_url) {
            html += `<a href="${escapeHTML(currentEvent.youtube_url)}" target="_blank" rel="noopener" class="hero-social-icon-btn youtube" title="PoPRuns YouTube Channel"><i class="fa-brands fa-youtube"></i></a>`;
        }
        if (currentEvent.twitch_url) {
            html += `<a href="${escapeHTML(currentEvent.twitch_url)}" target="_blank" rel="noopener" class="hero-social-icon-btn twitch" title="PoPRuns Twitch Channel"><i class="fa-brands fa-twitch"></i></a>`;
        }
        socialEl.innerHTML = html;
        socialEl.style.display = html ? "inline-flex" : "none";
    }

    const metaStatus = document.getElementById("meta-status");
    if (currentEvent.submissions_open) {
        metaStatus.className = "meta-pill open";
        metaStatus.innerHTML = '<i class="fa fa-door-open"></i> Submissions Open';
    } else {
        metaStatus.className = "meta-pill closed";
        metaStatus.innerHTML = '<i class="fa fa-door-closed"></i> Submissions Closed';
    }

    const startDate = new Date(currentEvent.start_date);
    const endDate = new Date(currentEvent.end_date);
    const options = { month: "short", day: "numeric", year: "numeric" };
    document.getElementById("meta-dates").innerHTML = 
        `<i class="fa fa-calendar-alt"></i> ${startDate.toLocaleDateString(undefined, options)} - ${endDate.toLocaleDateString(undefined, options)}`;

    document.getElementById("meta-countdown").innerHTML = 
        `<i class="fa fa-clock"></i> Starts in ${Math.max(0, Math.ceil((startDate - new Date()) / (1000 * 60 * 60 * 24)))} days`;
}

// Game Selection UI
function populateGameDropdown() {
    renderGameSelectionUI();
}

function renderGameSelectionUI() {
    const grid = document.getElementById("mainline-games-grid");
    if (grid) {
        grid.innerHTML = CONFIG.MAINLINE_GAMES.map(game => `
            <div class="game-card" data-game-id="${game.id}" onclick="selectMainlineGame('${game.id}')" title="${escapeHTML(game.name)}">
                <div class="game-card-bg" style="background-image: url('${game.bg}');"></div>
                <div class="game-card-overlay" style="background-image: url('${game.logo}');"></div>
                <div class="game-card-title">${escapeHTML(game.shortTitle || game.name)}</div>
                <div class="game-card-check"><i class="fa fa-check"></i></div>
            </div>
        `).join("");
    }

    const spinoffSelect = document.getElementById("run-spinoff-select");
    if (spinoffSelect) {
        spinoffSelect.innerHTML = '<option value="">--</option>' +
            CONFIG.SPINOFF_GAMES.map(g => `<option value="${escapeHTML(g.name)}">${escapeHTML(g.name)}</option>`).join("");
    }

    const editSelect = document.getElementById("edit-run-game");
    if (editSelect) {
        editSelect.innerHTML = '<option value="" disabled selected>Select a Prince of Persia game...</option>' +
            '<optgroup label="Mainline Games">' +
            CONFIG.MAINLINE_GAMES.map(g => `<option value="${escapeHTML(g.name)}">${escapeHTML(g.name)}</option>`).join("") +
            '</optgroup>' +
            '<optgroup label="Spin-offs & Custom">' +
            CONFIG.SPINOFF_GAMES.map(g => `<option value="${escapeHTML(g.name)}">${escapeHTML(g.name)}</option>`).join("") +
            '</optgroup>';
    }
}

function selectMainlineGame(gameId) {
    const game = CONFIG.MAINLINE_GAMES.find(g => g.id === gameId);
    if (!game) return;

    const spinoffSelect = document.getElementById("run-spinoff-select");
    if (spinoffSelect) spinoffSelect.value = "";

    const hiddenInput = document.getElementById("run-game");
    if (hiddenInput) hiddenInput.value = game.name;

    document.querySelectorAll(".game-card").forEach(c => {
        c.classList.toggle("selected", c.dataset.gameId === gameId);
    });

    const badge = document.getElementById("selected-game-badge");
    if (badge) {
        badge.innerHTML = `<i class="fa fa-check"></i> Game Selected`;
    }

    const banner = document.getElementById("selected-game-banner");
    const bannerTitle = document.getElementById("selected-game-display-title");
    if (banner && bannerTitle) {
        bannerTitle.textContent = game.name;
        banner.style.display = "block";
    }

    // Clear category input on game change
    const categoryInput = document.getElementById("run-category");
    if (categoryInput) categoryInput.value = "";

    handleGameChange();
}

function handleSpinoffChange(gameName) {
    document.querySelectorAll(".game-card").forEach(c => c.classList.remove("selected"));

    const hiddenInput = document.getElementById("run-game");
    if (hiddenInput) hiddenInput.value = gameName || "";

    const badge = document.getElementById("selected-game-badge");
    const banner = document.getElementById("selected-game-banner");
    const bannerTitle = document.getElementById("selected-game-display-title");

    if (gameName) {
        if (badge) badge.innerHTML = `<i class="fa fa-check"></i> Game Selected`;
        if (banner && bannerTitle) {
            bannerTitle.textContent = gameName;
            banner.style.display = "block";
        }
    } else {
        if (badge) badge.innerHTML = `<i class="fa fa-hand-point-down"></i> Please pick a game below`;
        if (banner) banner.style.display = "none";
    }

    // Clear category input on game change
    const categoryInput = document.getElementById("run-category");
    if (categoryInput) categoryInput.value = "";

    handleGameChange();
}

function clearSelectedGame() {
    const hiddenInput = document.getElementById("run-game");
    if (hiddenInput) hiddenInput.value = "";

    document.querySelectorAll(".game-card").forEach(c => c.classList.remove("selected"));

    const spinoffSelect = document.getElementById("run-spinoff-select");
    if (spinoffSelect) spinoffSelect.value = "";

    const badge = document.getElementById("selected-game-badge");
    if (badge) badge.innerHTML = `<i class="fa fa-hand-point-down"></i> Please pick a game below`;

    const banner = document.getElementById("selected-game-banner");
    if (banner) banner.style.display = "none";

    const categoryInput = document.getElementById("run-category");
    if (categoryInput) categoryInput.value = "";

    handleGameChange();
}

function applyCategoryChip(categoryText) {
    const input = document.getElementById("run-category");
    if (!input) return;
    input.value = categoryText;
    input.focus();

    // Collapse presets once selected
    const chipsWrap = document.getElementById("category-chips-wrap");
    const toggleBtn = document.getElementById("toggle-presets-btn");
    if (chipsWrap) chipsWrap.style.display = "none";
    if (toggleBtn) {
        toggleBtn.style.display = "inline-flex";
        toggleBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Show presets';
    }
}

function handleCategoryInput() {
    const input = document.getElementById("run-category");
    const chipsWrap = document.getElementById("category-chips-wrap");
    const toggleBtn = document.getElementById("toggle-presets-btn");
    const chipsContainer = document.getElementById("category-chips");

    if (!input || !chipsWrap || !toggleBtn || !chipsContainer) return;

    // Only interact if presets exist for currently selected game
    if (chipsContainer.children.length === 0) {
        chipsWrap.style.display = "none";
        toggleBtn.style.display = "none";
        return;
    }

    if (input.value.trim().length > 0) {
        // Collapse presets when text is entered
        chipsWrap.style.display = "none";
        toggleBtn.style.display = "inline-flex";
        toggleBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Show presets';
    } else {
        // Re-expand presets if input is cleared
        chipsWrap.style.display = "flex";
        toggleBtn.style.display = "none";
    }
}

function toggleCategoryPresets() {
    const chipsWrap = document.getElementById("category-chips-wrap");
    const toggleBtn = document.getElementById("toggle-presets-btn");
    if (!chipsWrap || !toggleBtn) return;

    if (chipsWrap.style.display === "none") {
        chipsWrap.style.display = "flex";
        toggleBtn.innerHTML = '<i class="fa fa-chevron-up"></i> Hide presets';
    } else {
        chipsWrap.style.display = "none";
        toggleBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Show presets';
    }
}

// Platform-Aware Game Resolution Helper
function getGameDefinition(gameName) {
    if (!gameName) return null;
    return CONFIG.GAMES.find(g => 
        g.name === gameName || 
        (g.platformGameNames && Object.values(g.platformGameNames).includes(gameName))
    );
}

function getResolvedGameName(gameDef, platform) {
    if (!gameDef) return "";
    if (gameDef.platformGameNames && platform && gameDef.platformGameNames[platform]) {
        return gameDef.platformGameNames[platform];
    }
    return gameDef.name;
}

function handlePlatformChange() {
    const platformSelect = document.getElementById("run-platform");
    const customWrap = document.getElementById("custom-platform-wrap");
    const customInput = document.getElementById("run-platform-custom");
    const hiddenGameInput = document.getElementById("run-game");
    const bannerTitle = document.getElementById("selected-game-display-title");

    if (!platformSelect || !customWrap) return;

    const selectedPlatform = platformSelect.value;

    if (selectedPlatform === "Other") {
        customWrap.style.display = "block";
        if (customInput) {
            customInput.required = true;
            customInput.focus();
        }
    } else {
        customWrap.style.display = "none";
        if (customInput) {
            customInput.required = false;
        }
    }

    // Dynamic game title adaptation based on platform
    if (hiddenGameInput && hiddenGameInput.value) {
        const gameDef = getGameDefinition(hiddenGameInput.value);
        if (gameDef) {
            const resolvedName = getResolvedGameName(gameDef, selectedPlatform);
            hiddenGameInput.value = resolvedName;
            if (bannerTitle) {
                if (resolvedName !== gameDef.name) {
                    bannerTitle.innerHTML = `${escapeHTML(resolvedName)} <span class="platform-alias-note" style="font-size: 0.8rem; font-weight: normal; color: var(--gold); margin-left: 0.5rem;"><i class="fa fa-info-circle"></i> ${escapeHTML(selectedPlatform)} title</span>`;
                } else {
                    bannerTitle.textContent = resolvedName;
                }
            }
        }
    }
}

function handleGameChange() {
    const gameName = document.getElementById("run-game") ? document.getElementById("run-game").value : "";
    const customGameGroup = document.getElementById("custom-game-group");
    const chipsWrap = document.getElementById("category-chips-wrap");
    const chipsContainer = document.getElementById("category-chips");
    const toggleBtn = document.getElementById("toggle-presets-btn");
    const platformSelect = document.getElementById("run-platform");
    const categoryInput = document.getElementById("run-category");
    const customWrap = document.getElementById("custom-platform-wrap");

    if (gameName.startsWith("Other")) {
        if (customGameGroup) customGameGroup.style.display = "block";
        const customInput = document.getElementById("run-game-custom");
        if (customInput) customInput.required = true;
    } else {
        if (customGameGroup) customGameGroup.style.display = "none";
        const customInput = document.getElementById("run-game-custom");
        if (customInput) customInput.required = false;
    }

    const matchedGame = getGameDefinition(gameName);
    if (matchedGame) {
        if (chipsWrap && chipsContainer) {
            if (matchedGame.categories && matchedGame.categories.length > 0) {
                chipsContainer.innerHTML = matchedGame.categories.map(cat => `
                    <button type="button" class="category-chip" onclick="applyCategoryChip('${escapeHTML(cat).replace(/'/g, "\\'")}')" title="Click to use preset '${escapeHTML(cat)}'">
                        ${escapeHTML(cat)}
                    </button>
                `).join("");

                // If input is empty, show presets; if already filled, collapse and offer show button
                if (!categoryInput || categoryInput.value.trim().length === 0) {
                    chipsWrap.style.display = "flex";
                    if (toggleBtn) toggleBtn.style.display = "none";
                } else {
                    chipsWrap.style.display = "none";
                    if (toggleBtn) {
                        toggleBtn.style.display = "inline-flex";
                        toggleBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Show presets';
                    }
                }
            } else {
                chipsContainer.innerHTML = "";
                chipsWrap.style.display = "none";
                if (toggleBtn) toggleBtn.style.display = "none";
            }
        }

        if (platformSelect) {
            platformSelect.disabled = false;
            platformSelect.innerHTML = "";
            (matchedGame.platforms || []).forEach(plat => {
                if (plat !== "Other") {
                    const opt = document.createElement("option");
                    opt.value = plat;
                    opt.textContent = plat;
                    platformSelect.appendChild(opt);
                }
            });

            // Always add 'Other' option for custom platform input
            const otherOpt = document.createElement("option");
            otherOpt.value = "Other";
            otherOpt.textContent = "Other (Specify...)";
            platformSelect.appendChild(otherOpt);

            // Select first platform by default
            if (matchedGame.platforms && matchedGame.platforms.length > 0 && matchedGame.platforms[0] !== "Other") {
                platformSelect.value = matchedGame.platforms[0];
            }

            handlePlatformChange();
        }
    } else {
        // No game selected: disable platform and reset options
        if (platformSelect) {
            platformSelect.disabled = true;
            platformSelect.innerHTML = '<option value="" disabled selected>Select a game first...</option>';
        }
        if (customWrap) customWrap.style.display = "none";
        if (chipsWrap) chipsWrap.style.display = "none";
        if (toggleBtn) toggleBtn.style.display = "none";
    }
}

// Run Format & Ratio Helpers (DRY)
function formatRunType(type) {
    if (!type) return "Solo";
    const t = String(type).toLowerCase();
    if (typeof CONFIG !== "undefined" && Array.isArray(CONFIG.RUN_FORMATS)) {
        const matched = CONFIG.RUN_FORMATS.find(rf => rf.value.toLowerCase() === t);
        if (matched) return matched.shortLabel || matched.label;
    }
    switch (t) {
        case "solo": return "Solo";
        case "race": return "Race";
        case "btr_lta":
        case "btr":
        case "lta": return "BTR / LTA";
        case "coop": return "Co-op";
        case "showcase": return "Showcase";
        default: return type.toUpperCase();
    }
}

function isMultiRunnerType(type) {
    if (!type) return false;
    const t = String(type).toLowerCase();
    if (typeof CONFIG !== "undefined" && Array.isArray(CONFIG.RUN_FORMATS)) {
        const matched = CONFIG.RUN_FORMATS.find(rf => rf.value.toLowerCase() === t);
        if (matched) return Boolean(matched.multiRunner);
    }
    return t === "race" || t === "coop" || t === "btr_lta" || t === "lta" || t === "btr";
}

function updateCoRunnersVisibility(selectId, groupId) {
    const selectEl = document.getElementById(selectId);
    const groupEl = document.getElementById(groupId);
    if (selectEl && groupEl) {
        groupEl.style.display = isMultiRunnerType(selectEl.value) ? "block" : "none";
    }
}

function handleRunTypeChange() {
    updateCoRunnersVisibility("run-type", "co-runners-group");
}

function handleEditRunTypeChange() {
    updateCoRunnersVisibility("edit-run-type", "edit-co-runners-group");
}

function formatRatioString(width, height) {
    const w = String(width || "").trim();
    const h = String(height || "").trim();
    if (!w || !h) return "16:9";
    const isResolution = parseInt(w, 10) > 50 || parseInt(h, 10) > 50;
    return `${w}${isResolution ? "x" : ":"}${h}`;
}

function parseRatioString(ratioStr) {
    const parts = String(ratioStr || "16:9").split(/[:x×/]/);
    return {
        width: parts[0]?.trim() || "16",
        height: parts[1]?.trim() || "9"
    };
}

function canModifySubmissions() {
    return Boolean(currentEvent?.submissions_open || currentProfile?.is_admin);
}

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
    const tooltip = [name, discord, twitch].filter(Boolean).join(" | ");
    return { name, avatar, discord, twitch, tooltip };
}

function populateDynamicOptions() {
    if (typeof CONFIG === "undefined") return;

    // 1. Run Format Dropdowns
    const runTypeSelects = [
        document.getElementById("run-type"),
        document.getElementById("edit-run-type")
    ];
    if (CONFIG.RUN_FORMATS && Array.isArray(CONFIG.RUN_FORMATS)) {
        runTypeSelects.forEach(sel => {
            if (!sel) return;
            const currentVal = sel.value;
            sel.innerHTML = CONFIG.RUN_FORMATS.map(rf =>
                `<option value="${escapeHTML(rf.value)}">${escapeHTML(rf.label)}</option>`
            ).join("");
            if (currentVal) sel.value = currentVal;
        });
    }

    // 2. Ratio Presets
    const ratioPresetContainers = [
        { containerId: "ratio-presets-container", prefix: "run" },
        { containerId: "edit-ratio-presets-container", prefix: "edit-run" }
    ];
    if (CONFIG.RATIO_PRESETS && Array.isArray(CONFIG.RATIO_PRESETS)) {
        ratioPresetContainers.forEach(({ containerId, prefix }) => {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = CONFIG.RATIO_PRESETS.map(preset =>
                `<button type="button" class="ratio-chip" onclick="setRatioPreset('${preset.width}', '${preset.height}', '${prefix}')">${escapeHTML(preset.label)}</button>`
            ).join("");
        });
    }

    // 3. Status Filter Dropdowns
    const statusSelects = [
        document.getElementById("all-runs-filter-status"),
        document.getElementById("admin-filter-status")
    ];
    if (CONFIG.STATUS_OPTIONS && Array.isArray(CONFIG.STATUS_OPTIONS)) {
        statusSelects.forEach(sel => {
            if (!sel) return;
            const currentVal = sel.value || "all";
            sel.innerHTML = CONFIG.STATUS_OPTIONS.map(st =>
                `<option value="${escapeHTML(st.value)}">${escapeHTML(st.label)}</option>`
            ).join("");
            if (currentVal) sel.value = currentVal;
        });
    }
}

function setRatioPreset(w, h, targetPrefix = "run") {
    const wInput = document.getElementById(`${targetPrefix}-ratio-width`);
    const hInput = document.getElementById(`${targetPrefix}-ratio-height`);
    if (wInput) wInput.value = w;
    if (hInput) hInput.value = h;
}

// Run Submission & Management
async function handleRunSubmit(e) {
    e.preventDefault();
    if (!supabaseClient || !currentUser) {
        showToast("Please log in to submit a run.", "error");
        return;
    }

    if (!checkSubmissionsEditable("submit")) return;

    let game = document.getElementById("run-game") ? document.getElementById("run-game").value.trim() : "";
    if (game.startsWith("Other")) {
        game = document.getElementById("run-game-custom")?.value.trim() || game;
    }

    if (!game) {
        showToast("Please select a game from the grid or spin-offs list.", "error");
        return;
    }

    const category = document.getElementById("run-category").value.trim();
    let platform = document.getElementById("run-platform").value;
    if (platform === "Other") {
        platform = document.getElementById("run-platform-custom")?.value.trim() || "Other";
    }

    const formattedRatio = formatRatioString(
        document.getElementById("run-ratio-width")?.value,
        document.getElementById("run-ratio-height")?.value
    );

    const estimateStr = document.getElementById("run-estimate").value.trim();
    const estimateSeconds = parseTimeToSeconds(estimateStr);
    if (!estimateSeconds || estimateSeconds <= 0) {
        showToast("Please enter a valid estimate in HH:MM:SS format (e.g. 01:25:00)", "error");
        return;
    }

    const runType = document.getElementById("run-type").value;
    const coRunners = isMultiRunnerType(runType) ? (document.getElementById("run-co-runners")?.value.trim() || "") : "";
    const videoUrl = document.getElementById("run-video").value.trim();
    const notes = document.getElementById("run-notes").value.trim();

    const submitBtn = document.getElementById("btn-submit-run");
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting...';

    try {
        const { error } = await supabaseClient
            .from("submissions")
            .insert([{
                event_id: currentEvent.id,
                user_id: currentUser.id,
                game,
                category,
                platform,
                ratio: formattedRatio,
                estimate_seconds: estimateSeconds,
                video_url: videoUrl,
                run_type: runType,
                co_runners: coRunners,
                notes,
                status: "submitted"
            }]);

        if (error) throw error;

        showToast("Run submitted successfully!", "success");
        document.getElementById("submission-form").reset();
        clearSelectedGame();
        handleRunTypeChange();
        await refreshAllSubmissionsViews();
        switchTab("my-runs");

    } catch (err) {
        console.error("Submission error:", err);
        showToast("Failed to submit run: " + err.message, "error");
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa fa-check-circle"></i> Submit Run';
    }
}

async function loadMySubmissions() {
    if (!supabaseClient || !currentUser || !currentEvent) return;

    try {
        const { data, error } = await supabaseClient
            .from("submissions")
            .select("*")
            .eq("event_id", currentEvent.id)
            .eq("user_id", currentUser.id)
            .order("created_at", { ascending: false });

        if (error) {
            if (handleAuthFailure(error)) return;
            throw error;
        }

        userSubmissions = data || [];
        renderMySubmissions();
    } catch (err) {
        console.error("Error loading submissions:", err);
    }
}

function renderMySubmissions() {
    const listEl = document.getElementById("my-submissions-list");
    const countBadge = document.getElementById("my-runs-count");

    if (userSubmissions.length > 0) {
        countBadge.textContent = userSubmissions.length;
        countBadge.style.display = "inline-block";
    } else {
        countBadge.style.display = "none";
    }

    if (userSubmissions.length === 0) {
        listEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fa fa-inbox"></i></div>
                <p>You haven't submitted any runs yet.</p>
                ${currentEvent?.submissions_open ? `<button class="btn btn-primary btn-sm" onclick="switchTab('submit')" style="margin-top: 1rem;">Submit a Run</button>` : ''}
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
                <div>
                    <span class="badge badge-${run.status}">${run.status}</span>
                </div>
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
                    ? `<span style="color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; gap: 0.4rem;"><i class="fa fa-lock"></i> Locked for review (submissions closed)</span>`
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

    document.getElementById("edit-run-id").value = run.id;
    document.getElementById("edit-run-game").value = run.game;
    document.getElementById("edit-run-category").value = run.category;
    document.getElementById("edit-run-platform").value = run.platform;

    const { width, height } = parseRatioString(run.ratio);
    const editW = document.getElementById("edit-run-ratio-width");
    const editH = document.getElementById("edit-run-ratio-height");
    if (editW) editW.value = width;
    if (editH) editH.value = height;

    document.getElementById("edit-run-estimate").value = formatSecondsToTime(run.estimate_seconds);

    const editRunTypeEl = document.getElementById("edit-run-type");
    if (editRunTypeEl) {
        editRunTypeEl.value = run.run_type || "solo";
        handleEditRunTypeChange();
    }
    const editCoRunnersEl = document.getElementById("edit-run-co-runners");
    if (editCoRunnersEl) {
        editCoRunnersEl.value = run.co_runners || "";
    }

    document.getElementById("edit-run-video").value = run.video_url;
    document.getElementById("edit-run-notes").value = run.notes || "";

    openModal("edit-submission-modal");
}

async function handleRunUpdate(e) {
    e.preventDefault();
    if (!supabaseClient) return;

    if (!checkSubmissionsEditable("modify")) return;

    const id = parseInt(document.getElementById("edit-run-id").value, 10);
    const game = document.getElementById("edit-run-game").value.trim();
    const category = document.getElementById("edit-run-category").value.trim();
    const platform = document.getElementById("edit-run-platform").value.trim();

    const editRatio = formatRatioString(
        document.getElementById("edit-run-ratio-width")?.value,
        document.getElementById("edit-run-ratio-height")?.value
    );

    const estimateStr = document.getElementById("edit-run-estimate").value.trim();
    const estimateSeconds = parseTimeToSeconds(estimateStr);
    if (!estimateSeconds || estimateSeconds <= 0) {
        showToast("Please enter a valid estimate in HH:MM:SS format (e.g. 01:25:00)", "error");
        return;
    }

    const runType = document.getElementById("edit-run-type") ? document.getElementById("edit-run-type").value : "solo";
    const coRunners = isMultiRunnerType(runType)
        ? (document.getElementById("edit-run-co-runners") ? document.getElementById("edit-run-co-runners").value.trim() : "")
        : null;
    const videoUrl = document.getElementById("edit-run-video").value.trim();
    const notes = document.getElementById("edit-run-notes").value.trim();

    try {
        const { error } = await supabaseClient
            .from("submissions")
            .update({
                game,
                category,
                platform,
                ratio: editRatio,
                estimate_seconds: estimateSeconds,
                run_type: runType,
                co_runners: coRunners,
                video_url: videoUrl,
                notes,
                updated_at: new Date().toISOString()
            })
            .eq("id", id);

        if (error) throw error;

        showToast("Run updated successfully!", "success");
        closeModal("edit-submission-modal");
        await refreshAllSubmissionsViews();

    } catch (err) {
        showToast("Failed to update run: " + err.message, "error");
    }
}

async function deleteSubmission(runId) {
    if (!checkSubmissionsEditable("delete")) return;

    if (!confirm("Are you sure you want to delete this submission?")) return;
    if (!supabaseClient) return;

    try {
        const { error } = await supabaseClient
            .from("submissions")
            .delete()
            .eq("id", runId);

        if (error) throw error;

        showToast("Submission deleted.", "success");
        await refreshAllSubmissionsViews();
    } catch (err) {
        showToast("Failed to delete: " + err.message, "error");
    }
}

// Availability Calendar & Grid
const THIRTY_MIN_MS = 30 * 60 * 1000;
let detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
let selectedTimezone = detectedTimezone;
let savedAvailabilitySlots = new Set();
let savedAvailabilityNotes = "";
let isDragging = false;
let dragMode = null; // 'select' | 'deselect'
let dragStartSlotKey = null;
let dragInitialSelection = null;
const slotElementsMap = new Map();

// Global mouseup to finish drag selection
window.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        dragMode = null;
        dragStartSlotKey = null;
        dragInitialSelection = null;
        updateAvailabilityDirtyState();
    }
});

function tzSlotToUtcDate(dayKey, timeStr, timeZone) {
    const [y, m, d] = dayKey.split("-").map(Number);
    const [hr, min] = timeStr.split(":").map(Number);
    const utcDate = new Date(Date.UTC(y, m - 1, d, hr, min, 0));

    const invDate = new Date(utcDate.toLocaleString("en-US", { timeZone: "UTC" }));
    const targetDate = new Date(utcDate.toLocaleString("en-US", { timeZone }));
    const diff = invDate.getTime() - targetDate.getTime();

    return new Date(utcDate.getTime() + diff);
}

function utcDateToTzSlot(utcDate, timeZone) {
    const formatterDate = new Intl.DateTimeFormat("en-CA", {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    const formatterTime = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    return `${formatterDate.format(utcDate)}T${formatterTime.format(utcDate)}`;
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
    const hrs = String(Math.floor(abs / 60)).padStart(2, "0");
    const mins = String(abs % 60).padStart(2, "0");
    return `UTC${sign}${hrs}:${mins}`;
}

function setupTimezone() {
    populateTimezoneDropdown();
}

function populateTimezoneDropdown() {
    const tzSelect = document.getElementById("tz-select");
    if (!tzSelect) return;

    let timezones = [];
    if (typeof Intl.supportedValuesOf === "function") {
        try {
            timezones = Intl.supportedValuesOf("timeZone");
        } catch (e) {
            console.warn("Intl.supportedValuesOf failed:", e);
        }
    }

    if (!timezones || timezones.length === 0) {
        timezones = [
            "UTC",
            "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
            "America/Toronto", "America/Vancouver", "America/Sao_Paulo", "America/Argentina/Buenos_Aires",
            "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Rome", "Europe/Madrid", "Europe/Amsterdam", "Europe/Stockholm", "Europe/Moscow",
            "Asia/Kolkata", "Asia/Tokyo", "Asia/Shanghai", "Asia/Hong_Kong", "Asia/Singapore", "Asia/Seoul", "Asia/Dubai", "Asia/Bangkok",
            "Australia/Sydney", "Australia/Melbourne", "Australia/Perth", "Pacific/Auckland", "Pacific/Honolulu"
        ];
    }

    // Ensure detectedTimezone and UTC are included
    if (!timezones.includes(detectedTimezone)) timezones.push(detectedTimezone);
    if (!timezones.includes("UTC")) timezones.push("UTC");

    // Remove duplicates
    timezones = Array.from(new Set(timezones));

    // Map each timezone to an object with calculated UTC offset
    const tzObjects = timezones.map(tz => {
        const offset = getTimezoneOffsetMinutes(tz);
        const offsetStr = formatTimezoneOffset(offset);
        const cleanName = tz.replace(/_/g, " ");
        return {
            tz,
            offset,
            offsetStr,
            cleanName,
            label: `(${offsetStr}) ${cleanName}`
        };
    });

    // Sort by UTC offset ascending, then alphabetically by name
    tzObjects.sort((a, b) => a.offset - b.offset || a.cleanName.localeCompare(b.cleanName));

    tzSelect.innerHTML = "";
    tzObjects.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.tz;
        opt.textContent = item.label;
        if (item.tz === selectedTimezone) opt.selected = true;
        tzSelect.appendChild(opt);
    });
}

function handleTimezoneChange(e) {
    const newTz = e.target.value;
    if (newTz === selectedTimezone) return;

    // Translate selected slots from old timezone to new timezone
    const translatedSelected = new Set();
    selectedAvailabilitySlots.forEach(slotKey => {
        const [dayKey, timeStr] = slotKey.split("T");
        const utcDate = tzSlotToUtcDate(dayKey, timeStr, selectedTimezone);
        translatedSelected.add(utcDateToTzSlot(utcDate, newTz));
    });
    selectedAvailabilitySlots = translatedSelected;

    // Translate saved slots as well
    const translatedSaved = new Set();
    savedAvailabilitySlots.forEach(slotKey => {
        const [dayKey, timeStr] = slotKey.split("T");
        const utcDate = tzSlotToUtcDate(dayKey, timeStr, selectedTimezone);
        translatedSaved.add(utcDateToTzSlot(utcDate, newTz));
    });
    savedAvailabilitySlots = translatedSaved;

    selectedTimezone = newTz;
    buildAvailabilityCalendar();
    showToast(`Timezone set to ${selectedTimezone}`, "info");
}

function resetToDetectedTimezone() {
    if (selectedTimezone === detectedTimezone) return;
    const tzSelect = document.getElementById("tz-select");
    if (tzSelect) tzSelect.value = detectedTimezone;
    handleTimezoneChange({ target: { value: detectedTimezone } });
}

function updateAvailabilityDirtyState() {
    const notesInput = document.getElementById("avail-notes");
    const currentNotes = notesInput ? notesInput.value.trim() : "";

    let isDirty = false;

    if (currentNotes !== savedAvailabilityNotes) {
        isDirty = true;
    } else if (selectedAvailabilitySlots.size !== savedAvailabilitySlots.size) {
        isDirty = true;
    } else {
        for (const slot of selectedAvailabilitySlots) {
            if (!savedAvailabilitySlots.has(slot)) {
                isDirty = true;
                break;
            }
        }
    }

    const saveBtns = document.querySelectorAll(".btn-save-availability");
    const resetBtns = document.querySelectorAll(".btn-reset-availability");

    saveBtns.forEach(btn => {
        btn.disabled = !isDirty;
        if (!isDirty) {
            btn.classList.add("btn-disabled");
            btn.title = "No unsaved changes";
        } else {
            btn.classList.remove("btn-disabled");
            btn.title = "Save your availability";
        }
    });

    resetBtns.forEach(btn => {
        btn.disabled = !isDirty;
        if (!isDirty) {
            btn.classList.add("btn-disabled");
            btn.title = "No unsaved changes";
        } else {
            btn.classList.remove("btn-disabled");
            btn.title = "Reset to saved state";
        }
    });
}

function buildAvailabilityCalendar() {
    if (!currentEvent) return;

    const listEl = document.getElementById("availability-days-list");
    if (!listEl) return;
    listEl.innerHTML = "";
    slotElementsMap.clear();

    const isLocked = !currentEvent.submissions_open && (!currentProfile || !currentProfile.is_admin);

    const startUtc = new Date(currentEvent.start_date);
    const endUtc = new Date(currentEvent.end_date);
    const startUtcMs = startUtc.getTime();
    const endUtcMs = endUtc.getTime();

    const startSlot = utcDateToTzSlot(startUtc, selectedTimezone);
    const endSlot = utcDateToTzSlot(endUtc, selectedTimezone);

    const [startDayY, startDayM, startDayD] = startSlot.split("T")[0].split("-").map(Number);
    const [endDayY, endDayM, endDayD] = endSlot.split("T")[0].split("-").map(Number);

    let currentDate = new Date(Date.UTC(startDayY, startDayM - 1, startDayD));
    const endBoundary = new Date(Date.UTC(endDayY, endDayM - 1, endDayD));

    while (currentDate <= endBoundary) {
        const dayKey = currentDate.toISOString().slice(0, 10);
        const [y, m, d] = dayKey.split("-").map(Number);

        // Collect valid slots for this day within [startUtcMs, endUtcMs)
        const validSlotsForDay = [];
        for (let h = 0; h < 24; h++) {
            for (let min of [0, 30]) {
                const hourStr = `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
                const endH = min === 30 ? (h === 23 ? 0 : h + 1) : h;
                const endM = min === 30 ? "00" : "30";
                const endHourStr = `${String(endH).padStart(2, "0")}:${endM}`;

                const slotKey = `${dayKey}T${hourStr}`;
                const slotUtcDate = tzSlotToUtcDate(dayKey, hourStr, selectedTimezone);
                const slotStartMs = slotUtcDate.getTime();

                // Slot is valid if it starts at or after marathon start, and before marathon end
                if (slotStartMs >= startUtcMs && slotStartMs < endUtcMs) {
                    validSlotsForDay.push({
                        slotKey,
                        hourStr,
                        endHourStr
                    });
                }
            }
        }

        // Only render the day card if there are valid slots within the marathon window
        if (validSlotsForDay.length > 0) {
            const dayTitle = new Intl.DateTimeFormat("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric"
            }).format(new Date(y, m - 1, d));

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

            validSlotsForDay.forEach(({ slotKey, hourStr, endHourStr }) => {
                const slotBtn = document.createElement("div");
                slotBtn.className = "hour-slot" + (selectedAvailabilitySlots.has(slotKey) ? " selected" : "") + (isLocked ? " locked" : "");
                slotBtn.textContent = hourStr;
                slotBtn.title = isLocked
                    ? `Slot start: ${hourStr} (Window: ${hourStr} - ${endHourStr}) [Read-only]`
                    : `Slot start: ${hourStr} (Window: ${hourStr} - ${endHourStr})`;
                slotBtn.dataset.slot = slotKey;

                // Only attach drag/click listeners if unlocked
                if (!isLocked) {
                    slotBtn.onmousedown = (e) => {
                        e.preventDefault();
                        startDrag(slotBtn, slotKey);
                    };
                    slotBtn.onmouseenter = () => {
                        onDragOver(slotBtn, slotKey);
                    };
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

    const minT = Math.min(tStart, tCurrent);
    const maxT = Math.max(tStart, tCurrent);

    // Compute all slot keys in the continuous range [minT, maxT] that exist in the calendar
    const rangeSlots = new Set();
    for (let t = minT; t <= maxT; t += THIRTY_MIN_MS) {
        const sKey = utcDateToTzSlot(new Date(t), selectedTimezone);
        if (slotElementsMap.has(sKey)) {
            rangeSlots.add(sKey);
        }
    }

    // Apply continuous range onto initial selection state
    const newSelection = new Set(dragInitialSelection);
    if (dragMode === "select") {
        for (const s of rangeSlots) {
            newSelection.add(s);
        }
    } else if (dragMode === "deselect") {
        for (const s of rangeSlots) {
            newSelection.delete(s);
        }
    }

    selectedAvailabilitySlots = newSelection;

    // Update DOM classes for all rendered slots in the calendar
    slotElementsMap.forEach((btn, key) => {
        btn.classList.toggle("selected", selectedAvailabilitySlots.has(key));
    });
}

function toggleSlot(el, slotKey) {
    if (!currentEvent?.submissions_open && (!currentProfile || !currentProfile.is_admin)) return;

    startDrag(el, slotKey);
    isDragging = false;
    dragMode = null;
    dragStartSlotKey = null;
    dragInitialSelection = null;
}

function toggleWholeDay(dayKey) {
    if (!currentEvent?.submissions_open && (!currentProfile || !currentProfile.is_admin)) return;

    const container = document.getElementById(`hours-${dayKey}`);
    if (!container) return;

    const slots = container.querySelectorAll(".hour-slot");
    const allSelected = Array.from(slots).every(s => s.classList.contains("selected"));

    slots.forEach(slot => {
        const slotKey = slot.dataset.slot;
        if (allSelected) {
            selectedAvailabilitySlots.delete(slotKey);
            slot.classList.remove("selected");
        } else {
            selectedAvailabilitySlots.add(slotKey);
            slot.classList.add("selected");
        }
    });

    updateAvailabilityDirtyState();
}

function setAvailabilityPreset(type) {
    if (!currentEvent?.submissions_open && (!currentProfile || !currentProfile.is_admin)) return;

    const allSlots = document.querySelectorAll(".hour-slot");

    if (type === "clear") {
        selectedAvailabilitySlots.clear();
        allSlots.forEach(s => s.classList.remove("selected"));
        showToast("Cleared all availability slots.", "info");
    } else if (type === "all") {
        allSlots.forEach(s => {
            selectedAvailabilitySlots.add(s.dataset.slot);
            s.classList.add("selected");
        });
        showToast("Selected all slots.", "success");
    } else if (type === "evenings") {
        allSlots.forEach(s => {
            const timePart = s.dataset.slot.split("T")[1];
            const hour = parseInt(timePart.split(":")[0]);
            if (hour >= 18 && hour <= 23) {
                selectedAvailabilitySlots.add(s.dataset.slot);
                s.classList.add("selected");
            }
        });
        showToast("Selected evening hours (18:00 - 24:00).", "success");
    }

    updateAvailabilityDirtyState();
}

function resetAvailability() {
    if (!currentEvent?.submissions_open && (!currentProfile || !currentProfile.is_admin)) return;

    selectedAvailabilitySlots = new Set(savedAvailabilitySlots);
    const notesInput = document.getElementById("avail-notes");
    if (notesInput) notesInput.value = savedAvailabilityNotes;

    document.querySelectorAll(".hour-slot").forEach(slot => {
        slot.classList.toggle("selected", selectedAvailabilitySlots.has(slot.dataset.slot));
    });

    updateAvailabilityDirtyState();
    showToast("Reset availability to saved state.", "info");
}

async function saveAvailability() {
    if (!supabaseClient || !currentUser || !currentEvent) {
        showToast("Please log in to save your availability.", "error");
        return;
    }

    if (!currentEvent.submissions_open && (!currentProfile || !currentProfile.is_admin)) {
        showToast("Availability editing is locked because submissions are closed.", "error");
        return;
    }

    const notes = document.getElementById("avail-notes") ? document.getElementById("avail-notes").value.trim() : "";

    const startTimestamps = Array.from(selectedAvailabilitySlots)
        .map(slotKey => {
            const [dayKey, timeStr] = slotKey.split("T");
            return tzSlotToUtcDate(dayKey, timeStr, selectedTimezone).getTime();
        })
        .sort((a, b) => a - b);

    const intervals = [];
    if (startTimestamps.length > 0) {
        let blockStart = startTimestamps[0];
        let blockEnd = blockStart + THIRTY_MIN_MS;

        for (let i = 1; i < startTimestamps.length; i++) {
            const t = startTimestamps[i];
            if (t === blockEnd) {
                blockEnd = t + THIRTY_MIN_MS;
            } else {
                intervals.push({
                    event_id: currentEvent.id,
                    user_id: currentUser.id,
                    start_time: new Date(blockStart).toISOString(),
                    end_time: new Date(blockEnd).toISOString(),
                    notes
                });
                blockStart = t;
                blockEnd = t + THIRTY_MIN_MS;
            }
        }
        intervals.push({
            event_id: currentEvent.id,
            user_id: currentUser.id,
            start_time: new Date(blockStart).toISOString(),
            end_time: new Date(blockEnd).toISOString(),
            notes
        });
    }

    try {
        const saveBtns = document.querySelectorAll(".btn-save-availability");
        saveBtns.forEach(b => {
            b.disabled = true;
            b.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Saving...';
        });

        await supabaseClient
            .from("availabilities")
            .delete()
            .eq("event_id", currentEvent.id)
            .eq("user_id", currentUser.id);

        if (intervals.length > 0) {
            const { error } = await supabaseClient
                .from("availabilities")
                .insert(intervals);

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
        const saveBtns = document.querySelectorAll(".btn-save-availability");
        saveBtns.forEach(b => {
            b.innerHTML = '<i class="fa fa-save"></i> Save Availability';
        });
        updateAvailabilityDirtyState();
    }
}

async function loadUserAvailability(force = false) {
    if (!supabaseClient || !currentUser || !currentEvent) return;

    if (!force && selectedAvailabilitySlots.size > 0) {
        let isDirty = selectedAvailabilitySlots.size !== savedAvailabilitySlots.size;
        if (!isDirty) {
            for (const s of selectedAvailabilitySlots) {
                if (!savedAvailabilitySlots.has(s)) {
                    isDirty = true;
                    break;
                }
            }
        }
        if (isDirty) return;
    }

    try {
        const { data, error } = await supabaseClient
            .from("availabilities")
            .select("*")
            .eq("event_id", currentEvent.id)
            .eq("user_id", currentUser.id);

        if (error) {
            if (handleAuthFailure(error)) return;
            throw error;
        }

        selectedAvailabilitySlots.clear();
        let loadedNotes = "";

        if (data && data.length > 0) {
            data.forEach(item => {
                const startMs = new Date(item.start_time).getTime();
                const endMs = new Date(item.end_time).getTime();

                for (let t = startMs; t < endMs; t += THIRTY_MIN_MS) {
                    const slotKey = utcDateToTzSlot(new Date(t), selectedTimezone);
                    selectedAvailabilitySlots.add(slotKey);
                }
            });

            if (data[0].notes) {
                loadedNotes = data[0].notes;
                if (document.getElementById("avail-notes")) {
                    document.getElementById("avail-notes").value = loadedNotes;
                }
            }
        }

        savedAvailabilitySlots = new Set(selectedAvailabilitySlots);
        savedAvailabilityNotes = loadedNotes;

        buildAvailabilityCalendar();
    } catch (err) {
        console.error("Error loading availability:", err);
    }
}

// All Marathon Submissions
let allSubmissions = [];

async function loadAllSubmissions() {
    const listEl = document.getElementById("all-submissions-list");
    if (!supabaseClient || !currentEvent) return;

    try {
        const { data, error } = await supabaseClient
            .from("submissions")
            .select(`
                id, game, category, platform, ratio, estimate_seconds, run_type, co_runners, notes, status, created_at,
                profiles:user_id (display_name, discord_username, twitch_username, avatar_url)
            `)
            .eq("event_id", currentEvent.id)
            .order("created_at", { ascending: false });

        if (error) throw error;

        allSubmissions = data || [];
        populateAllSubmissionsGameFilter();
        renderAllSubmissions();

    } catch (err) {
        console.error("Error loading all submissions:", err);
        if (listEl) {
            listEl.innerHTML = `<div class="empty-state"><p>Failed to load submissions: ${escapeHTML(err.message)}</p></div>`;
        }
    }
}

function populateAllSubmissionsGameFilter() {
    const gameSelect = document.getElementById("all-runs-filter-game");
    if (!gameSelect) return;

    const currentVal = gameSelect.value;
    const games = Array.from(new Set(allSubmissions.map(r => r.game).filter(Boolean))).sort();

    gameSelect.innerHTML = '<option value="all">All Games</option>';
    games.forEach(g => {
        const opt = document.createElement("option");
        opt.value = g;
        opt.textContent = g;
        if (g === currentVal) opt.selected = true;
        gameSelect.appendChild(opt);
    });
}

function filterAllSubmissions() {
    renderAllSubmissions();
}

function openRunNote(runId) {
    const run = (allSubmissions || []).find(r => r.id === runId) || (allAdminSubmissions || []).find(r => r.id === runId);
    if (!run) return;

    const { name: runner } = getRunnerDisplayInfo(run.profiles);
    const subtitleEl = document.getElementById("note-modal-subtitle");
    const contentEl = document.getElementById("note-modal-content");

    if (subtitleEl) {
        subtitleEl.textContent = `${runner} • ${run.game} (${run.category})`;
    }
    if (contentEl) {
        contentEl.textContent = run.notes || "No notes provided.";
    }

    openModal("note-modal");
}

function renderAllSubmissions() {
    const listEl = document.getElementById("all-submissions-list");
    const countBadge = document.getElementById("all-runs-count");
    const statsEl = document.getElementById("all-submissions-stats");
    if (!listEl) return;

    const search = document.getElementById("all-runs-search") ? document.getElementById("all-runs-search").value.toLowerCase().trim() : "";
    const gameFilter = document.getElementById("all-runs-filter-game") ? document.getElementById("all-runs-filter-game").value : "all";
    const statusFilter = document.getElementById("all-runs-filter-status") ? document.getElementById("all-runs-filter-status").value : "all";

    const filtered = allSubmissions.filter(run => {
        const runnerName = (run.profiles?.display_name || "Runner").toLowerCase();
        const discordTag = (run.profiles?.discord_username || "").toLowerCase();
        const game = (run.game || "").toLowerCase();
        const category = (run.category || "").toLowerCase();
        const platform = (run.platform || "").toLowerCase();
        const coRunners = (run.co_runners || "").toLowerCase();

        const matchesSearch = !search || 
            runnerName.includes(search) || 
            discordTag.includes(search) || 
            game.includes(search) || 
            category.includes(search) || 
            platform.includes(search) || 
            coRunners.includes(search);

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

    if (filtered.length === 0) {
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
                        <th>Runner</th>
                        <th>Game</th>
                        <th>Category</th>
                        <th>Platform</th>
                        <th>Ratio</th>
                        <th>Estimate</th>
                        <th>Format</th>
                        <th class="col-status">Status</th>
                        <th style="text-align: center;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    ${filtered.map(run => {
                        const { name: runner, avatar, tooltip: runnerTooltip } = getRunnerDisplayInfo(run.profiles);
                        const hasNotes = run.notes && run.notes.trim().length > 0;

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
                                        ? `<button type="button" class="notes-tooltip-icon" onclick="openRunNote(${run.id})" title="Click to view notes">
                                            <i class="fa fa-comment-dots"></i>
                                           </button>` 
                                        : `<span style="color: rgba(255,255,255,0.2);">&mdash;</span>`
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
            .select(`
                *,
                profiles:user_id (display_name, discord_username, twitch_username, avatar_url)
            `)
            .eq("event_id", currentEvent.id)
            .order("created_at", { ascending: false });

        if (error) throw error;

        allAdminSubmissions = data || [];
        updateAdminStats();
        renderAdminSubmissions(allAdminSubmissions);
    } catch (err) {
        console.error("Admin submissions load error:", err);
    }
}

function updateAdminStats() {
    document.getElementById("stat-total").textContent = allAdminSubmissions.length;
    document.getElementById("stat-accepted").textContent = allAdminSubmissions.filter(s => s.status === "accepted").length;
    document.getElementById("stat-backup").textContent = allAdminSubmissions.filter(s => s.status === "backup").length;
    document.getElementById("stat-rejected").textContent = allAdminSubmissions.filter(s => s.status === "rejected").length;
}

function filterAdminSubmissions() {
    const q = document.getElementById("admin-search").value.toLowerCase();
    const status = document.getElementById("admin-filter-status").value;

    const filtered = allAdminSubmissions.filter(run => {
        const matchQuery = run.game.toLowerCase().includes(q) || 
                           run.category.toLowerCase().includes(q) || 
                           (run.profiles?.display_name || "").toLowerCase().includes(q);
        const matchStatus = status === "all" || run.status === status;
        return matchQuery && matchStatus;
    });

    renderAdminSubmissions(filtered);
}

function renderAdminSubmissions(runs) {
    const listEl = document.getElementById("admin-submissions-list");

    if (runs.length === 0) {
        listEl.innerHTML = `<div class="empty-state">No matching submissions found.</div>`;
        return;
    }

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
        const { error } = await supabaseClient
            .from("submissions")
            .update({ status: newStatus, updated_at: new Date().toISOString() })
            .eq("id", runId);

        if (error) throw error;

        showToast(`Status updated to ${newStatus.toUpperCase()}`, "success");
        await loadAdminSubmissions();
        await loadAcceptedRuns();
    } catch (err) {
        showToast("Failed to update status: " + err.message, "error");
    }
}

// Export Functions (Horaro, CSV, JSON)
function exportHoraro() {
    const accepted = allAdminSubmissions.filter(r => r.status === "accepted");
    if (accepted.length === 0) {
        showToast("No accepted runs to export.", "info");
        return;
    }

    const horaroData = {
        ticker: currentEvent.title,
        columns: ["Game", "Category", "Platform", "Runner", "Estimate"],
        items: accepted.map(r => ({
            length: formatSecondsToHoraro(r.estimate_seconds),
            data: [
                r.game,
                r.category,
                r.platform,
                r.profiles?.display_name || "Runner",
                formatSecondsToTime(r.estimate_seconds)
            ]
        }))
    };

    downloadFile("horaro-schedule.json", JSON.stringify(horaroData, null, 2), "application/json");
}

function exportCSV() {
    if (allAdminSubmissions.length === 0) {
        showToast("No submissions to export.", "info");
        return;
    }

    const headers = ["ID", "Game", "Category", "Platform", "Estimate", "Runner", "Discord", "Status", "Video URL", "Type", "Notes"];
    const rows = allAdminSubmissions.map(r => [
        r.id,
        `"${(r.game || "").replace(/"/g, '""')}"`,
        `"${(r.category || "").replace(/"/g, '""')}"`,
        `"${(r.platform || "").replace(/"/g, '""')}"`,
        formatSecondsToTime(r.estimate_seconds),
        `"${(r.profiles?.display_name || "").replace(/"/g, '""')}"`,
        `"${(r.profiles?.discord_username || "").replace(/"/g, '""')}"`,
        r.status,
        `"${(r.video_url || "").replace(/"/g, '""')}"`,
        r.run_type,
        `"${(r.notes || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    downloadFile("popruns-submissions.csv", csvContent, "text/csv");
}

function exportJSON() {
    downloadFile("popruns-submissions.json", JSON.stringify(allAdminSubmissions, null, 2), "application/json");
}

function downloadFile(filename, text, mimeType) {
    const blob = new Blob([text], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Exported ${filename}`, "success");
}

// Profile Modal
function openProfileModal() {
    if (!currentProfile) return;
    document.getElementById("profile-display-name").value = currentProfile.display_name || "";
    document.getElementById("profile-pronouns").value = currentProfile.pronouns || "";

    const accountsEl = document.getElementById("profile-connected-accounts");
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

    const displayName = document.getElementById("profile-display-name").value.trim();
    const pronouns = document.getElementById("profile-pronouns").value.trim();

    try {
        const { error } = await supabaseClient
            .from("profiles")
            .update({
                display_name: displayName,
                pronouns: pronouns,
                updated_at: new Date().toISOString()
            })
            .eq("id", currentUser.id);

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
    document.querySelectorAll(".tab-button, .tab-btn").forEach(b => {
        b.classList.remove("active");
        b.classList.remove("tab-button-selected");
    });
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

    const activeBtn = document.querySelector(`button[onclick="switchTab('${tabId}')"]`);
    const activePane = document.getElementById(`tab-${tabId}`);

    if (activeBtn) {
        activeBtn.classList.add("active");
        activeBtn.classList.add("tab-button-selected");
    }
    if (activePane) activePane.classList.add("active");

    window.location.hash = tabId;

    if (tabId === "admin") {
        loadAdminSubmissions();
    } else if (tabId === "all-runs") {
        loadAllSubmissions();
    } else if (tabId === "my-runs") {
        loadMySubmissions();
    }
}

function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add("open");
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove("open");
}

function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = "info-circle";
    if (type === "success") icon = "check-circle";
    if (type === "error") icon = "exclamation-triangle";

    toast.innerHTML = `<i class="fa fa-${icon}"></i> <span>${escapeHTML(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Utility Formatters
function parseTimeToSeconds(timeStr) {
    if (!timeStr) return 0;
    const parts = timeStr.split(":").map(Number);
    if (parts.some(isNaN)) return 0;

    if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
        return parts[0] * 60 + parts[1];
    } else if (parts.length === 1) {
        return parts[0] * 60;
    }
    return 0;
}

function formatSecondsToTime(totalSeconds) {
    if (!totalSeconds) return "00:00:00";
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function formatSecondsToHoraro(totalSeconds) {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `PT${hrs}H${mins}M${secs}S`;
}

function escapeHTML(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Explicit window bindings for global HTML handlers
window.loginWithDiscord = loginWithDiscord;
window.loginWithTwitch = loginWithTwitch;
window.logout = logout;
window.switchTab = switchTab;
window.openProfileModal = openProfileModal;
window.selectMainlineGame = selectMainlineGame;
window.handleSpinoffChange = handleSpinoffChange;
window.clearSelectedGame = clearSelectedGame;
window.renderGameSelectionUI = renderGameSelectionUI;
window.applyCategoryChip = applyCategoryChip;
window.handleCategoryInput = handleCategoryInput;
window.toggleCategoryPresets = toggleCategoryPresets;
window.handlePlatformChange = handlePlatformChange;
window.handleGameChange = handleGameChange;
window.handleRunTypeChange = handleRunTypeChange;
window.handleEditRunTypeChange = handleEditRunTypeChange;
window.formatRunType = formatRunType;
window.setRatioPreset = setRatioPreset;
window.populateDynamicOptions = populateDynamicOptions;
window.handleRunSubmit = handleRunSubmit;
window.loadMySubmissions = loadMySubmissions;
window.openEditSubmissionModal = openEditSubmissionModal;
window.handleRunUpdate = handleRunUpdate;
window.deleteSubmission = deleteSubmission;
window.setAvailabilityPreset = setAvailabilityPreset;
window.toggleWholeDay = toggleWholeDay;
window.saveAvailability = saveAvailability;
window.resetAvailability = resetAvailability;
window.handleTimezoneChange = handleTimezoneChange;
window.resetToDetectedTimezone = resetToDetectedTimezone;
window.updateAvailabilityDirtyState = updateAvailabilityDirtyState;
window.loadAllSubmissions = loadAllSubmissions;
window.filterAllSubmissions = filterAllSubmissions;
window.openRunNote = openRunNote;
window.loadAdminSubmissions = loadAdminSubmissions;
window.filterAdminSubmissions = filterAdminSubmissions;
window.setRunStatus = setRunStatus;
window.exportHoraro = exportHoraro;
window.exportCSV = exportCSV;
window.exportJSON = exportJSON;
window.openModal = openModal;
window.closeModal = closeModal;
