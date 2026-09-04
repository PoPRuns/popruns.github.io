import { tasArchiveData } from "./data.js";

// Global Filter State
const state = {
    game: "all",
    platform: "all",
    status: "all",
    search: "",
};

// DOM References
let recordsBodyEl;
let visibleCountEl;
let noResultsEl;
let searchInputEl;
let searchClearBtnEl;
let platformSelectEl;
let resetFiltersBtnEl;

function initDom() {
    recordsBodyEl = document.getElementById("records-body");
    visibleCountEl = document.getElementById("visible-count");
    noResultsEl = document.getElementById("no-results");
    searchInputEl = document.getElementById("search-input");
    searchClearBtnEl = document.getElementById("search-clear-btn");
    platformSelectEl = document.getElementById("platform-select");
    resetFiltersBtnEl = document.getElementById("reset-filters-btn");
}

function renderBonusRuns() {
    const gridEl = document.getElementById("bonus-grid");
    if (!gridEl) return;

    gridEl.innerHTML = "";
    tasArchiveData.bonusRuns.forEach((bonus) => {
        const card = document.createElement("div");
        card.className = "bonus-card";

        let linksHtml = "";
        bonus.links.forEach((l) => {
            linksHtml += `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="bonus-link-btn"><i class="fa fa-external-link"></i> ${l.label}</a>`;
        });

        let authorHtml = "";
        if (bonus.author) {
            authorHtml = `
                <div class="bonus-card-author">
                    <i class="fa fa-user"></i> <span class="author-name">${bonus.author}</span>
                </div>
            `;
        }

        card.innerHTML = `
            <div>
                <h3 class="bonus-card-title">${bonus.title}</h3>
                ${authorHtml}
                <p class="bonus-card-desc">${bonus.description}</p>
            </div>
            <div class="bonus-card-links">
                ${linksHtml}
            </div>
        `;
        gridEl.appendChild(card);
    });
}

function extractYouTubeId(url) {
    if (!url) return null;
    const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?.*v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/i);
    return m ? m[1] : null;
}

function createYouTubeEmbed(videoUrl) {
    const vidId = extractYouTubeId(videoUrl);
    if (!vidId) {
        return `<div class="media-empty-msg"><i class="fa fa-info-circle"></i> Video player unavailable.</div>`;
    }
    return `
        <div class="youtube-embed">
            <div class="youtube-video">
                <iframe src="https://www.youtube.com/embed/${vidId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="youtube-link">
                <a href="${videoUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i> Watch on YouTube</a>
            </div>
        </div>
    `;
}

function getNotesUrlType(url) {
    if (!url) return "default";
    if (url.includes("toolassisted.run")) return "tar";
    if (url.includes("tasvideos.org")) return "tasv";
    return "default";
}

function makeRow(record) {
    const tr = document.createElement("tr");
    tr.className = "record-row";
    if (record.isFastest) {
        tr.classList.add("is-record");
    }
    tr.setAttribute("tabindex", "0");
    tr.setAttribute("aria-expanded", "false");
    tr.setAttribute("data-id", record.id);

    // Game Cell
    const gameTd = document.createElement("td");
    gameTd.className = "cell-game";

    let yearHtml = "";
    if (record.year) {
        yearHtml = `<span class="game-year">${record.year}</span>`;
    }

    let regionBadgeHtml = "";
    if (record.region) {
        regionBadgeHtml = `<span class="badge-region">${record.region}</span>`;
    }

    gameTd.innerHTML = `
        <div class="game-cell-wrap">
            <div class="game-title-row">
                <span class="game-title">${record.game}</span>
                ${yearHtml}
            </div>
            <div class="game-badges-row">
                <span class="badge-platform">${record.platform}</span>
                ${regionBadgeHtml}
            </div>
        </div>
    `;
    tr.appendChild(gameTd);

    // Category Cell
    const catTd = document.createElement("td");
    catTd.innerHTML = `<span class="category-name">${record.category}</span>`;
    tr.appendChild(catTd);

    // TASer(s) Cell
    const tasersTd = document.createElement("td");
    const authors = (record.tasers || "").split(/[,&]+/).map((t) => t.trim()).filter(Boolean);
    const tasersHtml = authors.map((a) => `<div class="taser-name">${a}</div>`).join("");
    tasersTd.innerHTML = `<div class="tasers-list">${tasersHtml}</div>`;
    tr.appendChild(tasersTd);

    // Date Cell
    const dateTd = document.createElement("td");
    dateTd.className = "date-cell";
    dateTd.textContent = record.date;
    tr.appendChild(dateTd);

    // Time & Status Cell
    const timeStatusTd = document.createElement("td");
    timeStatusTd.className = "cell-time-status";

    let timeHtml = "";
    if (record.tasTime) {
        timeHtml += `
            <div class="time-item">
                <span class="time-label">TAS:</span>
                <span class="time-val">${record.tasTime}</span>
            </div>
        `;
    }
    if (record.rtaIgt) {
        timeHtml += `
            <div class="time-item">
                <span class="time-label">RTA/IGT:</span>
                <span class="time-val">${record.rtaIgt}</span>
            </div>
        `;
    }
    if (!record.tasTime && !record.rtaIgt) {
        timeHtml += `
            <div class="time-item">
                <span class="time-label">Time:</span>
                <span class="time-val">&mdash;</span>
            </div>
        `;
    }

    const statusBadge = record.isFastest
        ? '<span class="badge-record" title="Fastest in category"><i class="fa fa-trophy"></i> Record</span>'
        : '<span class="badge-obsolete">Obsolete</span>';

    timeStatusTd.innerHTML = `
        <div class="time-status-wrap">
            <div class="time-lines">
                ${timeHtml}
            </div>
            <div class="status-line">
                ${statusBadge}
            </div>
        </div>
    `;
    tr.appendChild(timeStatusTd);

    // Links & Actions Cell
    const actionTd = document.createElement("td");
    const actionsWrap = document.createElement("div");
    actionsWrap.className = "action-links";

    if (record.notesUrl) {
        const urlType = getNotesUrlType(record.notesUrl);
        const notesA = document.createElement("a");
        notesA.href = record.notesUrl;
        notesA.target = "_blank";
        notesA.rel = "noopener noreferrer";
        notesA.className = `icon-btn icon-btn-notes icon-btn-notes-${urlType}`;
        notesA.title = "Author Notes";
        notesA.innerHTML = '<i class="fa fa-file-lines"></i><i class="fa fa-arrow-up-right-from-square ext-indicator"></i>';
        notesA.addEventListener("click", (e) => e.stopPropagation());
        actionsWrap.appendChild(notesA);
    }

    if (record.videoUrl) {
        const ytA = document.createElement("a");
        ytA.href = record.videoUrl;
        ytA.target = "_blank";
        ytA.rel = "noopener noreferrer";
        ytA.className = "icon-btn";
        ytA.title = "Watch on YouTube";
        ytA.innerHTML = '<i class="fa-brands fa-youtube"></i>';
        ytA.addEventListener("click", (e) => e.stopPropagation());
        actionsWrap.appendChild(ytA);
    }

    if (record.commentaryUrl) {
        const commA = document.createElement("a");
        commA.href = record.commentaryUrl;
        commA.target = "_blank";
        commA.rel = "noopener noreferrer";
        commA.className = "icon-btn";
        commA.title = "Audio Commentary Track";
        commA.innerHTML = '<i class="fa fa-microphone"></i>';
        commA.addEventListener("click", (e) => e.stopPropagation());
        actionsWrap.appendChild(commA);
    }

    const chevron = document.createElement("span");
    chevron.className = "expand-chevron";
    chevron.innerHTML = '<i class="fa fa-chevron-down"></i>';
    actionsWrap.appendChild(chevron);

    actionTd.appendChild(actionsWrap);
    tr.appendChild(actionTd);

    return tr;
}

function makeNotesRow(record) {
    const notesTr = document.createElement("tr");
    notesTr.className = "notes-row";
    notesTr.hidden = true;

    const td = document.createElement("td");
    td.setAttribute("colspan", "6");

    const contentWrap = document.createElement("div");
    contentWrap.className = "notes-content-wrap";

    // Author Notes Banner
    if (record.notesUrl) {
        const notesBanner = document.createElement("div");
        notesBanner.className = "notes-banner";

        const urlType = getNotesUrlType(record.notesUrl);
        const bannerButtonHtml = `
            <a href="${record.notesUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-notes-${urlType}">
                <i class="fa fa-external-link"></i> Author Notes &rarr;
            </a>
        `;

        notesBanner.innerHTML = `
            <div class="notes-banner-info">
                <i class="fa fa-book-open notes-banner-icon"></i>
                <div class="notes-banner-text">
                    <h4>Author Notes &amp; Documentation</h4>
                    <p>Read detailed submission notes, routing strategies, glitch explanations, and frame breakdown directly on the submission page.</p>
                </div>
            </div>
            <div class="notes-banner-buttons">
                ${bannerButtonHtml}
            </div>
        `;
        contentWrap.appendChild(notesBanner);
    }

    // Media grid
    const mediaGrid = document.createElement("div");
    mediaGrid.className = "run-media-grid";

    // Video Card
    const videoCard = document.createElement("div");
    videoCard.className = "media-card";
    videoCard.innerHTML = `
        <div class="media-card-title"><i class="fa-brands fa-youtube"></i> Video Encode</div>
        ${createYouTubeEmbed(record.videoUrl)}
    `;
    mediaGrid.appendChild(videoCard);

    // Commentary or Metadata Card
    const commCard = document.createElement("div");
    commCard.className = "media-card";
    if (record.commentaryUrl) {
        commCard.innerHTML = `
            <div class="media-card-title"><i class="fa fa-microphone"></i> Commentary Track</div>
            ${createYouTubeEmbed(record.commentaryUrl)}
        `;
    } else {
        commCard.innerHTML = `
            <div class="media-card-title"><i class="fa fa-info-circle"></i> Run Details</div>
            <div class="notes-meta-card">
                <div class="meta-field">
                    <span class="meta-field-label">Game</span>
                    <span class="meta-field-val">${record.game} ${record.year ? `(${record.year})` : ""}</span>
                </div>
                <div class="meta-field">
                    <span class="meta-field-label">Platform</span>
                    <span class="meta-field-val">${record.platform} ${record.region ? `[${record.region}]` : ""}</span>
                </div>
                <div class="meta-field">
                    <span class="meta-field-label">Category</span>
                    <span class="meta-field-val">${record.category}</span>
                </div>
                <div class="meta-field">
                    <span class="meta-field-label">Author(s)</span>
                    <span class="meta-field-val">${record.tasers}</span>
                </div>
                <div class="meta-field">
                    <span class="meta-field-label">TAS Time</span>
                    <span class="meta-field-val">${record.tasTime || "N/A"}</span>
                </div>
                <div class="meta-field">
                    <span class="meta-field-label">RTA / IGT</span>
                    <span class="meta-field-val">${record.rtaIgt || "N/A"}</span>
                </div>
                <div class="meta-field">
                    <span class="meta-field-label">Date</span>
                    <span class="meta-field-val">${record.date}</span>
                </div>
            </div>
        `;
    }
    mediaGrid.appendChild(commCard);

    contentWrap.appendChild(mediaGrid);
    td.appendChild(contentWrap);
    notesTr.appendChild(td);

    return {
        row: notesTr,
    };
}

function filterRuns() {
    const query = state.search.trim().toLowerCase();

    return tasArchiveData.runs.filter((run) => {
        // Game filter
        if (state.game !== "all" && run.gameSlug !== state.game) {
            return false;
        }

        // Platform filter
        if (state.platform !== "all") {
            const p = run.platform.toLowerCase();
            const rawP = (run.platformRaw || "").toLowerCase();
            const targetP = state.platform.toLowerCase();
            if (p !== targetP && rawP !== targetP) {
                return false;
            }
        }

        // Status filter
        if (state.status === "fastest" && !run.isFastest) {
            return false;
        }
        if (state.status === "obsolete" && run.isFastest) {
            return false;
        }

        // Search filter
        if (query) {
            const searchTarget = `${run.game} ${run.year || ""} ${run.region || ""} ${run.platform} ${run.category} ${run.tasers} ${run.date} ${run.tasTime || ""} ${run.rtaIgt || ""}`.toLowerCase();
            if (!searchTarget.includes(query)) {
                return false;
            }
        }

        return true;
    });
}

function renderTable() {
    if (!recordsBodyEl) return;

    const filtered = filterRuns();
    recordsBodyEl.innerHTML = "";

    visibleCountEl.textContent = `Showing ${filtered.length} of ${tasArchiveData.runs.length} runs`;

    const isFiltered = state.game !== "all" || state.platform !== "all" || state.status !== "all" || state.search !== "";
    if (resetFiltersBtnEl) {
        resetFiltersBtnEl.style.display = isFiltered ? "inline-flex" : "none";
    }

    if (filtered.length === 0) {
        noResultsEl.style.display = "block";
        return;
    }

    noResultsEl.style.display = "none";

    filtered.forEach((record) => {
        const row = makeRow(record);
        const notesHandle = makeNotesRow(record);
        const notesRow = notesHandle.row;

        const toggleNotes = (e) => {
            if (e.target.closest("a") || e.target.closest("button")) return;
            const isExpanded = row.getAttribute("aria-expanded") === "true";
            const nextExpanded = !isExpanded;

            row.setAttribute("aria-expanded", nextExpanded);
            notesRow.hidden = !nextExpanded;
            row.classList.toggle("is-expanded", nextExpanded);
        };

        row.addEventListener("click", toggleNotes);
        row.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleNotes(e);
            }
        });

        recordsBodyEl.appendChild(row);
        recordsBodyEl.appendChild(notesRow);
    });
}

export function resetAllFilters() {
    state.game = "all";
    state.platform = "all";
    state.status = "all";
    state.search = "";

    if (searchInputEl) searchInputEl.value = "";
    if (searchClearBtnEl) searchClearBtnEl.style.display = "none";
    if (platformSelectEl) platformSelectEl.value = "all";

    document.querySelectorAll('#game-filters .filter-pill').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-value') === 'all');
    });

    document.querySelectorAll('#status-filters .filter-pill').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-value') === 'all');
    });

    renderTable();
}

window.resetAllFilters = resetAllFilters;

function setupEventListeners() {
    // Game filters
    document.querySelectorAll("#game-filters .filter-pill").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#game-filters .filter-pill").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            state.game = btn.getAttribute("data-value");
            renderTable();
        });
    });

    // Status filters
    document.querySelectorAll("#status-filters .filter-pill").forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#status-filters .filter-pill").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            state.status = btn.getAttribute("data-value");
            renderTable();
        });
    });

    // Platform filter
    if (platformSelectEl) {
        platformSelectEl.addEventListener("change", (e) => {
            state.platform = e.target.value;
            renderTable();
        });
    }

    // Search filter
    if (searchInputEl) {
        searchInputEl.addEventListener("input", (e) => {
            state.search = e.target.value;
            searchClearBtnEl.style.display = state.search ? "block" : "none";
            renderTable();
        });
    }

    // Clear search
    if (searchClearBtnEl) {
        searchClearBtnEl.addEventListener("click", () => {
            searchInputEl.value = "";
            state.search = "";
            searchClearBtnEl.style.display = "none";
            renderTable();
        });
    }

    // Reset filters
    if (resetFiltersBtnEl) {
        resetFiltersBtnEl.addEventListener("click", resetAllFilters);
    }
}

function init() {
    initDom();
    renderBonusRuns();
    setupEventListeners();
    renderTable();
}

document.addEventListener("DOMContentLoaded", init);
