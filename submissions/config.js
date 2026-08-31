/**
 * PoPRuns Marathon Submissions Configuration
 */
const CONFIG = {
    SUPABASE_URL: window.__SUPABASE_URL__ || "https://czvxroylxentxgqqmogk.supabase.co",
    SUPABASE_ANON_KEY: window.__SUPABASE_ANON_KEY__ || "sb_publishable_OkA_87q03LC-HHPtWAoOHA_bSViMkwC",
    DEFAULT_EVENT_SLUG: "popruns-2026",

    // Mainline Prince of Persia Games (Rendered as interactive visual grid)
    MAINLINE_GAMES: [
        {
            id: "pop1",
            name: "Prince of Persia (1989)",
            shortTitle: "PoP 1 (1989)",
            bg: "../static/images/pop1_bg.jpg",
            logo: "../static/images/pop1_logo.svg",
            platforms: ["DOS", "SNES", "NES", "Amiga", "GBC", "Apple II", "Genesis / MD"],
            categories: ["Any% (Standard)", "Any% (No Major Glitches)", "Any% (No Exit Glitch)", "100%", "100% (No Major Glitches)", "All Levels"]
        },
        {
            id: "pop2",
            name: "Prince of Persia 2: The Shadow & The Flame (1993)",
            shortTitle: "PoP 2 (1993)",
            bg: "../static/images/pop2_bg.jpg",
            logo: "../static/images/pop2_logo.png",
            platforms: ["DOS", "SNES"],
            categories: ["Any%"]
        },
        {
            id: "pop3d",
            name: "Prince of Persia 3D (1999)",
            shortTitle: "PoP 3D / Arabian Nights",
            bg: "../static/images/pop_3d_bg.jpg",
            logo: "../static/images/pop_3d.png",
            platforms: ["PC", "Dreamcast"],
            platformGameNames: {
                "Dreamcast": "Prince of Persia: Arabian Nights (2000)"
            },
            categories: ["Any%", "Any% Alt-Tab"]
        },
        {
            id: "sot",
            name: "Prince of Persia: The Sands of Time (2003)",
            shortTitle: "The Sands of Time",
            bg: "../static/images/pop_sot_bg.jpg",
            logo: "../static/images/pop_sot_logo.png",
            platforms: ["PC", "PS2", "GCN", "Xbox"],
            categories: ["Any% (Standard)", "Any% (Zipless)", "Any% (No Major Glitches)", "All Collectibles (Standard)", "All Collectibles (Zipless)", "All Collectibles (NMG)", "100%", "100% (No Major Glitches)"]
        },
        {
            id: "ww",
            name: "Prince of Persia: Warrior Within (2004)",
            shortTitle: "PoP: WW / Revelations",
            bg: "../static/images/pop_ww_bg.jpg",
            logo: "../static/images/pop_ww_logo.png",
            platforms: ["PC", "PS2", "GCN", "Xbox", "PSP", "iOS"],
            platformGameNames: {
                "PSP": "Prince of Persia: Revelations (2005)"
            },
            categories: ["Any% (Standard)", "Any% (Zipless)", "Any% (No Major Glitches)", "True Ending (Standard)", "True Ending (Zipless)", "True Ending (NMG)", "All Collectibles (Zipless)", "All Collectibles (NMG)", "All Artwork (Standard)"]
        },
        {
            id: "t2t",
            name: "Prince of Persia: The Two Thrones (2005)",
            shortTitle: "PoP: T2T / Rival Swords",
            bg: "../static/images/pop_t2t_bg.jpeg",
            logo: "../static/images/pop_t2t_logo.webp",
            platforms: ["PC", "PS2", "GCN", "Xbox", "PSP", "Wii"],
            platformGameNames: {
                "PSP": "Prince of Persia: Rival Swords (2007)",
                "Wii": "Prince of Persia: Rival Swords (2007)"
            },
            categories: ["Any% (Standard)", "Any% (Zipless)", "Any% (No Major Glitches)", "All Collectibles (Standard)", "All Collectibles (Zipless)", "All Collectibles (NMG)", "100%", "100% (No Major Glitches)"]
        },
        {
            id: "pop2008",
            name: "Prince of Persia (2008)",
            shortTitle: "PoP 2008",
            bg: "../static/images/pop_2008_bg.jpg",
            logo: "../static/images/pop_2008.webp",
            platforms: ["PC", "PS3", "X360"],
            categories: ["Any% (Standard)", "Any% (No Major Glitches)", "All Seeds (Standard)", "All Seeds (No Major Glitches)", "Epilogue Any%", "Epilogue All Frescos"]
        },
        {
            id: "tfs",
            name: "Prince of Persia: The Forgotten Sands (2010)",
            shortTitle: "The Forgotten Sands",
            bg: "../static/images/pop_tfs_bg.jpg",
            logo: "../static/images/pop_tfs_logo.png",
            platforms: ["PC", "PS3", "X360"],
            categories: ["Any% (Standard)", "Any% (No Energy Glitches)", "Any% (No Major Glitches)"]
        },
        {
            id: "tlc",
            name: "Prince of Persia: The Lost Crown (2024)",
            shortTitle: "The Lost Crown",
            bg: "../static/images/pop_tlc_bg.webp",
            logo: "../static/images/pop_tlc.webp",
            platforms: ["PC", "PS5", "PS4", "Series X/S", "XOne", "Switch", "Switch 2"],
            categories: ["Any% (Unrestricted)", "Any% (Restricted)", "Mask of Darkness (Unrestricted)", "Mask of Darkness (Restricted)", "All Overworld Bosses", "All Collectibles & Quests"]
        },
        {
            id: "rogue",
            name: "The Rogue Prince of Persia (2025)",
            shortTitle: "The Rogue PoP",
            bg: "../static/images/rogue_pop_bg.png",
            logo: "../static/images/rogue_pop.png",
            platforms: ["PC", "PS5", "Series X/S", "Switch", "Switch 2"],
            categories: ["Any% (Unseeded)", "Any% (Seeded)", "Fresh File (Corrupted)", "Story Journey"]
        }
    ],

    // Spin-offs & Custom Challenges (Rendered separately in a selection list)
    SPINOFF_GAMES: [
        {
            name: "Prince of Persia: The Sands of Time [GBA] (2003)",
            platforms: ["GBA"],
            categories: ["Any% (Standard)", "Any% (No Zombie Glitch)"]
        },
        {
            name: "Battles of Prince of Persia (2005)",
            platforms: ["NDS"],
            categories: ["Any% (Emulator)", "Any% (Console)", "Defeat Army", "Defeat General", "Hold the Flag"]
        },
        {
            name: "Prince of Persia Classic (2007)",
            platforms: ["PS3", "X360", "XOne", "Series X/S"],
            categories: ["Any%"]
        },
        {
            name: "Prince of Persia: The Fallen King (2008)",
            platforms: ["NDS"],
            categories: ["Any% (Emulator)", "Any% (Console)"]
        },
        {
            name: "Prince of Persia: The Forgotten Sands [Wii] (2010)",
            platforms: ["Wii", "PSP", "NDS"],
            categories: ["Any%", "All Powers Early", "Retell Story"]
        },
        {
            name: "Prince of Persia: The Forgotten Sands [PSP] (2010)",
            platforms: ["PSP"],
            categories: ["Any%"]
        },
        {
            name: "Prince of Persia: The Forgotten Sands [NDS] (2010)",
            platforms: ["NDS"],
            categories: ["Any% (Emulator)", "Any% (Console)"]
        },
        {
            name: "Prince of Persia Sands Trilogy",
            platforms: ["PC", "PS2", "GCN", "Xbox"],
            categories: ["Any% (Standard)", "Any% (Zipless)", "Any% (No Major Glitches)", "Completionist (Standard)", "Completionist (Zipless)", "Completionist (NMG)"]
        },
        {
            name: "Prince of Persia Mobile Games",
            platforms: ["J2ME", "Symbian", "Android", "iOS"],
            categories: ["Harem Adventures", "Shadow and the Flame (Remake)", "Sands of Time", "Warrior Within", "The Two Thrones", "Classic", "2008", "The Forgotten Sands"]
        },
        {
            name: "Other / Multi-game / Mod / Fangame...",
            platforms: ["PC", "Other"],
            categories: ["Any%", "Showcase / Exhibition"]
        }
    ],

    get GAMES() {
        return [...this.MAINLINE_GAMES, ...this.SPINOFF_GAMES];
    }
};
