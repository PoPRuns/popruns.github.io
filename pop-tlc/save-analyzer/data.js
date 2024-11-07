const initialData = [
    {
        tab: "Base - 100%",
        data: [
            {
                title: "Main Quests",
                percentage: 30,
                completedPercent: 0,
                description: "Each quest from this list provides 3.75% game completion.",
                data: {
                    "d46f01520560b6446a4c366171e5e6d2": {
                        displayName: "Lost in Mount Qaf",
                        isUnlocked: false
                    },
                    "cbc6e45ab294c3b409021fa2ef3067fd": {
                        displayName: "The Abducted Prince",
                        isUnlocked: false
                    },
                    "89a9bdf53da19a744b22fad494884202": {
                        displayName: "The Tiger and the Rat",
                        isUnlocked: false
                    },
                    "e499d16e671ee1b42b170dc0f71b6c8e": {
                        displayName: "The Path to the Sand Prison",
                        isUnlocked: false
                    },
                    "59d515cfe12ef084d8df7ab2c38cce21": {
                        displayName: "The Darkest of Souls",
                        isUnlocked: false
                    },
                    "0e3ee840951882f488ac11cf427a468b": {
                        displayName: "The Celestial Guardians",
                        isUnlocked: false
                    },
                    "959814af55fa48b4b962f7cff039f076": {
                        displayName: "Father and Son",
                        isUnlocked: false
                    },
                    "93980f6721474124e99ede45f49a9e1c": {
                        displayName: "The Crossroads of Time",
                        isUnlocked: false
                    }
                }
            },
            {
                title: "Side Quests",
                percentage: 20,
                completedPercent: 0,
                description: "Each quest from this list provides 2.22% game completion.",
                data: {
                    "658f412ae13e19f4b936561ddf4ea003": {
                        displayName: "The Deserter",
                        isUnlocked: false
                    },
                    "1e0e7db0fe7e193439bb4fc2ad3e467d": {
                        displayName: "Ancient Power Unearthed",
                        isUnlocked: false
                    },
                    "cb201fdd23e57014c8b3a5cf67f51689": {
                        displayName: "Treasure of the Seven Seas",
                        isUnlocked: false
                    },
                    "2724b2ce3a2da4d4f88a046c1d73061b": {
                        displayName: "The Impossible Climb",
                        isUnlocked: false
                    },
                    "bbc662da8c3f10c48b3e790a7f883314": {
                        displayName: "The Moon Gatherer",
                        isUnlocked: false
                    },
                    "fee85a9ac8042834990ccbb8b408a123": {
                        displayName: "The Architect",
                        isUnlocked: false
                    },
                    "38c51e9d3fe29004a9b1be232f7c1e55": {
                        displayName: "Motherly Love",
                        isUnlocked: false
                    },
                    "76cc870c18c33c74e861dc0cb0de6131": {
                        displayName: "The Lost Warriors",
                        isUnlocked: false
                    },
                    "25ab3221851d1bb4a806a442a2a6a100": {
                        displayName: "Prophecy of Mount Qaf",
                        isUnlocked: false
                    },
                }
            },
            {
                title: "Location Discovery",
                percentage: 5,
                completedPercent: 0,
                description: "Each location in this list provides 0.33% game completion.",
                data: {
                    "Level_-1353158043": {
                        displayName: "Battlefield of Persia",
                        isUnlocked: false,
                    },
                    "Level_1598868991": {
                        displayName: "Thomyris Palace",
                        isUnlocked: false,
                    },
                    "Level_769724912": {
                        displayName: "Old Royal Road",
                        isUnlocked: false,
                    },
                    "Level_-580331642": {
                        displayName: "Lower City",
                        isUnlocked: false,
                    },
                    "Level_1954453104": {
                        displayName: "Hyrcanian Forest",
                        isUnlocked: false,
                    },
                    "Level_813925511": {
                        displayName: "Sacred Archives",
                        isUnlocked: false,
                    },
                    "Level_-532284725": {
                        displayName: "Upper City",
                        isUnlocked: false,
                    },
                    "Level_1019326825": {
                        displayName: "The Depths",
                        isUnlocked: false,
                    },
                    "Level_-645999537": {
                        displayName: "Sunken Harbor",
                        isUnlocked: false,
                    },
                    "Level_-1020397914": {
                        displayName: "Soma Tree",
                        isUnlocked: false,
                    },
                    "Level_-805417366": {
                        displayName: "Pit of Eternal Sands",
                        isUnlocked: false,
                    },
                    "Level_2051251085": {
                        displayName: "Raging Sea",
                        isUnlocked: false,
                    },
                    "Level_76905722": {
                        displayName: "Tower of Silence",
                        isUnlocked: false,
                    },
                    "Level_1040379892": {
                        displayName: "Hidden Village",
                        isUnlocked: false,
                    },
                    "Level_165900900": {
                        displayName: "Crossroad of Times",
                        isUnlocked: false,
                    },
                }
            },
            {
                title: "Abilities",
                percentage: 5,
                completedPercent: 0,
                description: "Each ability from this list provides 0.5% game completion.",
                data: {
                    MiniMap: {
                        displayName: "Eye of the Wanderer",
                        isUnlocked: false,
                        description: "Map: Given by Fariba"
                    },
                    BowAim: {
                        displayName: "Bow of Menolias",
                        isUnlocked: false,
                        description: "Found in Hyrcanian Forest"
                    },
                    ChakramAim: {
                        displayName: "Chakram of Menolias",
                        isUnlocked: false,
                        description: "Find Menolias in the Forest"
                    },
                    AirDash: {
                        displayName: "Rush of the Simurgh",
                        isUnlocked: false,
                        description: "Dash: Defeat Jahandar"
                    },
                    Teleport: {
                        displayName: "Shadow of the Simurgh",
                        isUnlocked: false,
                        description: "Found in the Depths"
                    },
                    Clairvoyance: {
                        displayName: "Clairvoyance",
                        isUnlocked: false,
                        description: "Found in Sacred Archives"
                    },
                    Warp: {
                        displayName: "Dimensional Claw",
                        isUnlocked: false,
                        description: "Found in Soma Tree"
                    },
                    DoubleJump: {
                        displayName: "Gravity Wings",
                        isUnlocked: false,
                        description: "Double Jump: Defeat Azhdaha"
                    },
                    ChakramTeleport: {
                        displayName: "Chakram Shadow of the Simurgh",
                        isUnlocked: false,
                        description: "Defeat Menolias"
                    },
                    ScarfAim: {
                        displayName: "Fabric of Time",
                        isUnlocked: false,
                        description: "Grapple: Defeat Varham"
                    }
                }
            },
            {
                title: "Athra Surges",
                percentage: 5,
                completedPercent: 0,
                description: "Each Athra Surge from this list provides 0.5% game completion.",
                data: {
                    FocusAbilityPiercingAttack: {
                        displayName: "Verethragna's Smite",
                        isUnlocked: false,
                        description: "Obtained from story progression"
                    },
                    FocusAbilityAntiAir: {
                        displayName: "Shahbaz' Spirit",
                        isUnlocked: false,
                        description: "Alternate Sargon fight in Sacred Archives"
                    },
                    FocusAbilityWindSlashAttack: {
                        displayName: "Wind of Sistan",
                        isUnlocked: false,
                        description: "Found in the Depths"
                    },
                    FocusAbilitySuperChargeAttack: {
                        displayName: "Vayu's Wave",
                        isUnlocked: false,
                        description: "Complete the first 9 Artaban's challenges"
                    },
                    FocusAbilityHeal: {
                        displayName: "Bahman's Breath",
                        isUnlocked: false,
                        description: "First Wak-Wak tree in Hyrcanian Forest"
                    },
                    FocusAbilitySuperShotLaserAim: {
                        displayName: "Arash's Ray",
                        isUnlocked: false,
                        description: "Alternate Sargon fight in Depths"
                    },
                    FocusAbilityGroundSlam: {
                        displayName: "Hadhayans' Might",
                        isUnlocked: false,
                        description: "Alternate Sargon fight in Soma Tree"
                    },
                    FocusAbilitySuperWarrior: {
                        displayName: "Soul of Gilgamesh",
                        isUnlocked: false,
                        description: "Alternate Sargon fight in Pit of Eternal Sands"
                    },
                    FocusAbilityMaelstrom: {
                        displayName: "Bahamut's Rage",
                        isUnlocked: false,
                        description: "Orod fight in Raging Sea"
                    },
                    FocusAbilityFullCounterStance: {
                        displayName: "Rashnu's Judgment",
                        isUnlocked: false,
                        description: "Menolias fight in Upper City"
                    }
                }
            },
            {
                title: "Amulets",
                percentage: 5,
                completedPercent: 0,
                description: "Each amulet as well as each amulet upgrade gives 0.051% game completion.",
                data: {
                    ExtendedHits: {
                        displayName: "Blade Dancer",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Obtained from story progression"
                    },
                    DodgeMaster: {
                        displayName: "Elusive Water",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Soma Tree"
                    },
                    VoidStone: {
                        displayName: "Void Blade",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Upper City"
                    },
                    Finisher: {
                        displayName: "Verethrangna's Wrath",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Sunken Harbor"
                    },
                    CounterAttackStone: {
                        displayName: "Turning Wind",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Soma Tree, talk to the wolf after defeating Kiana"
                    },
                    DaredevilStone: {
                        displayName: "Indomitable Spirit",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "The Depths, complete the “Motherly Love” quest"
                    },
                    Dauntless: {
                        displayName: "Arslân's Glory",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, start the “Prophecy of Mount Qaf” quest"
                    },
                    BraveStone: {
                        displayName: "Will of Rostam",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Sacred Archives"
                    },
                    ExplosiveStone: {
                        displayName: "Agony Amulet",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Defeat the Giant Crab in the Depths"
                    },
                    EvilEyeStone: {
                        displayName: "Evil-Eye Amulet",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 1,
                        description: "The Depths, the Scrapper's Shop"
                    },
                    BowMultiShot: {
                        displayName: "White Peacock",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Sunken Harbor"
                    },
                    BowFireArrow: {
                        displayName: "Blazing Kestrel",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Tower of Silence"
                    },
                    HunterStone: {
                        displayName: "Zurvan's Voice",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, Architect puzzle chest"
                    },
                    HawkStone: {
                        displayName: "Arash's Arrowhead",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, Kaheva's Forge"
                    },
                    ChakramVortex: {
                        displayName: "Chakram Tempest",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, Kaheva's Forge"
                    },
                    LifeStone: {
                        displayName: "Blessing",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, The Mage"
                    },
                    Prayer: {
                        displayName: "Wolf-Bride",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Hyrcanian Forest, defeat Erlik"
                    },
                    PhoenixStone: {
                        displayName: "Dragon King",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Sacred Archives, start the “Moon Gatherer” quest"
                    },
                    Monk: {
                        displayName: "Starving Heart",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 1,
                        description: "The Depths, the Scrapper's Shop"
                    },
                    SafetyStone: {
                        displayName: "Hardiness",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, The Mage"
                    },
                    SteelStone: {
                        displayName: "Mount Damavand",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, Kaheva's Forge"
                    },
                    ShieldOfMithra: {
                        displayName: "Shield of Mithra",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, complete the “Ancient Power Unearthed” quest"
                    },
                    Knight: {
                        displayName: "Gleaming Lion",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Lower City"
                    },
                    Tower: {
                        displayName: "Rukhsana's Gift",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Lower City"
                    },
                    TeleportShockWave: {
                        displayName: "Shockwave",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "The Depths, Architect puzzle chest"
                    },
                    TeleportRay: {
                        displayName: "Divine Spear",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in The Depths"
                    },
                    DarkEye: {
                        displayName: "Eye of Destiny",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 1,
                        description: "The Depths, the Scrapper's Shop"
                    },
                    WealthStone: {
                        displayName: "Ard's Fortune",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Sunken Harbor, Architect puzzle chest"
                    },
                    MagnetStone: {
                        displayName: "Ecbatana Seal",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 1,
                        description: "Lower City, Kaheva's Forge"
                    },
                    CelestialStone: {
                        displayName: "Four Royal Stars",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Upper City"
                    },
                    Treasure: {
                        displayName: "King Jamshid",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 1,
                        description: "Lower City, The Mage"
                    },
                    Focus: {
                        displayName: "Ayyar Amulet",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in The Depths"
                    },
                    Poison: {
                        displayName: "Horned Viper",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, The Mage"
                    },
                    Flame: {
                        displayName: "Holy Fire",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Lower City, progress in the “Prophecy of Mount Qaf” quest"
                    },
                    Thunder: {
                        displayName: "Thunder Charm",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Sunken Harbor"
                    },
                    Ice: {
                        displayName: "Frost Charm",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 3,
                        description: "Chest in Lower City"
                    }
                }
            },
            {
                title: "Amulet Holders",
                percentage: 5,
                completedPercent: 0,
                description: "Each amulet holder from this list provides 0.56% game completion.",
                data: {
                    "S-194185274_O2102073558": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Purchased from the Mage's Shop"
                    },
                    "S-953692090_O-822170603": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Chest in the room on way back from Hyrcanian forest"
                    },
                    "Prophecy_SeedOfKnowledge__15": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Collect 15 sand jars for the “Prophecy of Mount Qaf” quest"
                    },
                    "S-1998352001_O1274025047": {
                        displayName: "Sacred Archives",
                        isUnlocked: false,
                        description: "Chest in bell platforming challenge room"
                    },
                    "S360638867_O1139401100": {
                        displayName: "Sacred Archives",
                        isUnlocked: false,
                        description: "Architect puzzle chest"
                    },
                    "S1076086488_O2038047517": {
                        displayName: "Soma Tree",
                        isUnlocked: false,
                        description: "Chest after the Clairvoyance platfroming challenge"
                    },
                    "S-1887863129_O1694143513": {
                        displayName: "Sunken Harbor",
                        isUnlocked: false,
                        description: "Chest on the way to Soma Tree"
                    },
                    "S-56286082_O-382126177": {
                        displayName: "Pit of Eternal Sands",
                        isUnlocked: false,
                        description: "Chest in the statue heads fight room"
                    },
                    "S-1935183277_O-598913130": {
                        displayName: "Upper City",
                        isUnlocked: false,
                        description: "Chest near the Clockwork teleporter"
                    },
                }
            },
            {
                title: "Equipment Upgrades",
                percentage: 5,
                completedPercent: 0,
                description: "Each item from this list provides 0.83% game completion.",
                data: {
                    GearUpgrade_SwordPlus4: {
                        displayName: "Qays and Layla",
                        isUnlocked: false,
                        description: "Upgrade the swords to +4 at Kaheva's forge"
                    },
                    GearUpgrade_BowPlus4: {
                        displayName: "Bow of Menolias",
                        isUnlocked: false,
                        description: "Upgrade the bow to +4 at Kaheva's forge"
                    },
                    GearUpgrade_QuiverPlus4: {
                        displayName: "Menolias' Quiver",
                        isUnlocked: false,
                        description: "Upgrade the quiver to +4 at Kaheva's forge"
                    },
                    GearUpgrade_PotionCount_PackShop3: {
                        displayName: "Additional Potions (Mage)",
                        isUnlocked: false,
                        description: "Buy all the additional potions from the shopkeeper"
                    },
                    GearUpgrade_PotionHealingEffect_PackShop3: {
                        displayName: "Potion Efficiency",
                        isUnlocked: false,
                        description: "Fully Upgrade the potion efficiency at the shopkeeper"
                    },
                    GearUpgrade_PotionCount_PackChest: {
                        displayName: "Additional Potion (Moon Gatherer)",
                        isUnlocked: false,
                        description: "Complete the “Moon Gatherer” side quest"
                    },
                }
            },
            {
                title: "Soma Flowers",
                percentage: 5,
                completedPercent: 0,
                description: "Each full flower provides 0.42% game completion.",
                data: {
                    "S-194185274_O2102073558": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Purchased from the Mage's Shop",
                        quantity: 1
                    },
                    "BossLoot_672a554f605e0d24a99038a79f6bf022_-1799469351_HaomaFragment": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Defeat Undead Prisoner",
                        quantity: 1
                    },
                    "S-1411069268_O527506480": {
                        displayName: "Hyrcanian Forest",
                        isUnlocked: false,
                        description: "Architect puzzle chest",
                        quantity: 1
                    },
                    "BossLoot_658f412ae13e19f4b936561ddf4ea003_NA_HaomaFragment": {
                        displayName: "Hyrcanian Forest",
                        isUnlocked: false,
                        description: "Complete “The Deserter” quest",
                        quantity: 1
                    },
                    "BossLoot_0825ad3b49199eb4b9f0ff96288ee25a_-1670059309_HaomaFragment": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Defeat Jahandar",
                        quantity: 4
                    },
                    "S1302394515_O1801590133": {
                        displayName: "Sacred Archives",
                        isUnlocked: false,
                        description: "First Architect puzzle chest",
                        quantity: 1
                    },
                    "S-604939277_O-648583802": {
                        displayName: "Sacred Archives",
                        isUnlocked: false,
                        description: "Extra 3-clone puzzle after Clairvoyance",
                        quantity: 1
                    },
                    "BossLoot_77c296470a128304eb495be401db0e07_1346924320_HaomaFragment": {
                        displayName: "Soma Tree",
                        isUnlocked: false,
                        description: "Defeat the Forest Queen",
                        quantity: 4
                    },
                    "IE_S536862130_O62468996": {
                        displayName: "Soma Tree",
                        isUnlocked: false,
                        description: "Platforming challenge near Tower of Silence entrance",
                        quantity: 1
                    },
                    "S-12128144_O703793398": {
                        displayName: "Pit of Eternal Sands",
                        isUnlocked: false,
                        description: "Azhdaha's Room",
                        quantity: 4
                    },
                    "S-1020297140_O-2071479013": {
                        displayName: "Pit of Eternal Sands",
                        isUnlocked: false,
                        description: "Architect puzzle chest",
                        quantity: 1
                    },
                    "S381352219_O529537387": {
                        displayName: "Sunken Harbor",
                        isUnlocked: false,
                        description: "Double Jump platfroming challenge",
                        quantity: 1
                    },
                    "IE_S1993429450_O450851052": {
                        displayName: "Raging Sea",
                        isUnlocked: false,
                        description: "Orod constellation room",
                        quantity: 1
                    },
                    "IE_S1769582135_O-283694129": {
                        displayName: "Upper City",
                        isUnlocked: false,
                        description: "Menolias constellation room",
                        quantity: 1
                    },
                    "S-1325587473_O1645648227": {
                        displayName: "Upper City",
                        isUnlocked: false,
                        description: "Hanging Gardens Chakram TP platforming challenge",
                        quantity: 1
                    },
                    "IE_S-560423787_O1302367190": {
                        displayName: "Tower of Silence",
                        isUnlocked: false,
                        description: "Fabric of Time platforming challenge",
                        quantity: 1
                    },
                    "S1134066981_O1634833069": {
                        displayName: "Tower of Silence",
                        isUnlocked: false,
                        description: "Architect puzzle chest",
                        quantity: 1
                    },
                    "BossLoot_6aa394c9873259945963bcaf3b27f759_559427664_HaomaFragment": {
                        displayName: "Tower of Silence",
                        isUnlocked: false,
                        description: "Defeat King Darius",
                        quantity: 4
                    },
                    "IE_S2044469478_O1854770765": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Secret Room with Lion Enemies",
                        quantity: 1
                    },
                    "BossLoot_76cc870c18c33c74e861dc0cb0de6131_-1294364008_HaomaFragment": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Defeat Ardashir",
                        quantity: 1
                    },
                    "Prophecy__Fresco_03_HaomaFragment__5": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Collect 5 sand jars for the “Prophecy of Mount Qaf” quest",
                        quantity: 1
                    },
                    "Prophecy__Fresco_06_HaomaFragment__20": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Collect 20 sand jars for the “Prophecy of Mount Qaf” quest",
                        quantity: 1
                    },
                    "Prophecy__Fresco_01_FullHaoma__30": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Complete the “Prophecy of Mount Qaf” quest",
                        quantity: 4
                    },
                    "IE_S-1750593928_O409179470": {
                        displayName: "The Depths",
                        isUnlocked: false,
                        description: "Left to the place where Sargon falls down",
                        quantity: 1
                    },
                    "IE_S1054661874_O1800860489": {
                        displayName: "Pit of Eternal Sands",
                        isUnlocked: false,
                        description: "Platforming challenge in top left section",
                        quantity: 1
                    },
                    "S-16704644_O-195683491": {
                        displayName: "Raging Sea",
                        isUnlocked: false,
                        description: "Room after dropping from lighthouse",
                        quantity: 1
                    },
                    "EnemyLoot_-2123075181_-1398043515_HaomaFragment": {
                        displayName: "Blue Guy in Prison",
                        isUnlocked: false,
                        description: "Blue enemy in the bottom of the three locked doors",
                        quantity: 1
                    },
                    "EnemyLoot_-1708251953_1207742047_HaomaFragment": {
                        displayName: "Sunken Harbor Mimic Chest",
                        isUnlocked: false,
                        description: "Mimic Chest on the way to Soma Tree",
                        quantity: 1
                    },
                    "EnemyLoot_1991959379_-36863915_HaomaFragment": {
                        displayName: "Upper City Mimic Chest",
                        isUnlocked: false,
                        description: "Mimic Chest on the connection from Lower City",
                        quantity: 1
                    },
                    "S-2050029741_O-2079706095": {
                        displayName: "Upper City",
                        isUnlocked: false,
                        description: "Architect reward room",
                        quantity: 4
                    },
                }
            },
            {
                title: "Memory Shards",
                percentage: 5,
                completedPercent: 0,
                description: "Each item from this list provides 0.83% game completion.",
                data: {
                    "Special_VisionAbility": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Meet Fariba for the first time"
                    },
                    "S1636739140_O1831099548": {
                        displayName: "Sunken Harbor",
                        isUnlocked: false,
                        description: "Chest in the room when entering from Hyrcanian Forest"
                    },
                    "S138031762_O1621380553": {
                        displayName: "The Depths",
                        isUnlocked: false,
                        description: "Chest after the Shadow platforming puzzle"
                    },
                    "S-2145347505_O-786588926": {
                        displayName: "Lower City",
                        isUnlocked: false,
                        description: "Chest on the way to Prison"
                    },
                    "S-1055261614_O853402842": {
                        displayName: "Soma Tree",
                        isUnlocked: false,
                        description: "Chest in the room after obtaining Dimensional Claw"
                    },
                    "S-2016686573_O-1276959578": {
                        displayName: "Upper City",
                        isUnlocked: false,
                        description: "Chest in the tall room before the Chakram puzzle"
                    },
                }
            },
            {
                title: "Skins",
                percentage: 5,
                completedPercent: 0,
                description: "Each skin that is unlocked directly in the game world provides 1% game completion.",
                data: {
                    DefaultChroma3: {
                        displayName: "Radiant",
                        isUnlocked: false,
                        description: "Lower City, Chest near the first Wak Wak Tree"
                    },
                    DefaultChroma2: {
                        displayName: "Coral",
                        isUnlocked: false,
                        description: "Sunken Harbor, Chest in the long room with spike traps"
                    },
                    DefaultChroma4: {
                        displayName: "Rosy",
                        isUnlocked: false,
                        description: "Hyrcanian Forest, Chest in the rightmost location"
                    },
                    DefaultChroma5: {
                        displayName: "Lilac",
                        isUnlocked: false,
                        description: "Lower City, Trap room near the elevator"
                    },
                    DefaultChroma1: {
                        displayName: "Crimson",
                        isUnlocked: false,
                        description: "Old Royal Road, Chest in the tower like structure"
                    }
                }
            },
            {
                title: "Lore Items",
                percentage: 5,
                completedPercent: 0,
                description: "Each item from this list provides 0.09% game completion.",
                data: {
                    "LoreItem_01_FirstClayTablet": {
                        "displayName": "Clay Tablet",
                        "isUnlocked": false,
                        "description": "Upper City"
                    },
                    "LoreItem_39_SecondClayTablet": {
                        "displayName": "Clay Cylinder",
                        "isUnlocked": false,
                        "description": "Pit of Eternal Sands"
                    },
                    "LoreItem_05_PrisonerCarvedStatue": {
                        "displayName": "Crudely Carved Statue",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_06_StatuetteOfVayu": {
                        "displayName": "Statuette of God Vayu",
                        "isUnlocked": false,
                        "description": "Tower of Silence"
                    },
                    "LoreItem_07_GildedBracelet": {
                        "displayName": "Gilded Bracelet",
                        "isUnlocked": false,
                        "description": "Upper City"
                    },
                    "LoreItem_09_ChildToy": {
                        "displayName": "Child's Toy",
                        "isUnlocked": false,
                        "description": "The Depths"
                    },
                    "LoreItem_10_TarnishedCoin": {
                        "displayName": "Tarnished Coin",
                        "isUnlocked": false,
                        "description": "Sunken Harbor"
                    },
                    "LoreItem_11_Diadem": {
                        "displayName": "Tiara",
                        "isUnlocked": false,
                        "description": "The Depths"
                    },
                    "LoreItem_12_StatuetteOfQueenAtossa": {
                        "displayName": "The Commoner and The King",
                        "isUnlocked": false,
                        "description": "Tower of Silence"
                    },
                    "LoreItem_13_PersianTale": {
                        "displayName": "Persian Children's Playtime Verse",
                        "isUnlocked": false,
                        "description": "The Depths"
                    },
                    "LoreItem_14_ProclamationTreaty": {
                        "displayName": "Proclamation Treaty",
                        "isUnlocked": false,
                        "description": "Sunken Harbor"
                    },
                    "LoreItem_15_SacredObject": {
                        "displayName": "Sacred Object",
                        "isUnlocked": false,
                        "description": "Tower of Silence"
                    },
                    "LoreItem_17_ArtisanToolCarpetWeavers": {
                        "displayName": "Artisan Tools - Carpet Weavers",
                        "isUnlocked": false,
                        "description": "Lower City"
                    },
                    "LoreItem_18_ArchitecturalDrawings": {
                        "displayName": "Architectural Drawings",
                        "isUnlocked": false,
                        "description": "Upper City"
                    },
                    "LoreItem_19_RustedHook": {
                        "displayName": "Rusted Hook",
                        "isUnlocked": false,
                        "description": "Sunken Harbor"
                    },
                    "LoreItem_21_Mirror": {
                        "displayName": "Mirror",
                        "isUnlocked": false,
                        "description": "The Depths"
                    },
                    "LoreItem_24_ErlikTusk": {
                        "displayName": "Tusk of Erlik",
                        "isUnlocked": false,
                        "description": "Hyrcanian Forest"
                    },
                    "LoreItem_25_AzdhahaTooth": {
                        "displayName": "Enormous Tooth of Azhdaha",
                        "isUnlocked": false,
                        "description": "Pit of Eternal Sands"
                    },
                    "LoreItem_26_PrisonerChains": {
                        "displayName": "Broken Chains",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_28_AstronomicalMeschanism": {
                        "displayName": "Astronomical Mechanism",
                        "isUnlocked": false,
                        "description": "Upper City"
                    },
                    "LoreItem_29_GeometricalFormulaCreator": {
                        "displayName": "Mathematical Formula Calculator",
                        "isUnlocked": false,
                        "description": "Upper City"
                    },
                    "LoreItem_30_RoyalDecree": {
                        "displayName": "Official Scroll: Royal Decree",
                        "isUnlocked": false,
                        "description": "Upper City"
                    },
                    "LoreItem_32_TheCombOfAPrincess": {
                        "displayName": "The Comb of a Princess",
                        "isUnlocked": false,
                        "description": "Raging Sea"
                    },
                    "LoreItem_34_MemoryFragment": {
                        "displayName": "Memory Fragment - Aura of Loss",
                        "isUnlocked": false,
                        "description": "Tower of Silence"
                    },
                    "LoreItem_35_CursedObject": {
                        "displayName": "Cursed Object",
                        "isUnlocked": false,
                        "description": "Soma Tree"
                    },
                    "LoreItem_36_ObjectFoundinAzhdahaLair": {
                        "displayName": "Object Found in Azhdaha's Lair",
                        "isUnlocked": false,
                        "description": "Pit of Eternal Sands"
                    },
                    "LoreItem_37_DroppedLocket": {
                        "displayName": "Dropped Locket",
                        "isUnlocked": false,
                        "description": "The Depths"
                    },
                    "LoreItem_38_NoteBeneathBatteredTalisman": {
                        "displayName": "Note Pinned to a Battered Talisman",
                        "isUnlocked": false,
                        "description": "Hidden Village"
                    },
                    "LoreItem_04_ArchiveScroll": {
                        "displayName": "Message Written with Trembling Hand",
                        "isUnlocked": false,
                        "description": "Old Royal Road"
                    },
                    "LoreItem_40_FoundOnRadjen": {
                        "displayName": "The Lion and The Viper",
                        "isUnlocked": false,
                        "description": "Lower City"
                    },
                    "LoreItem_42_Placeholder_01": {
                        "displayName": "Note Pinned to a Rock Shaped Like an Eye",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_43_Placeholder_02": {
                        "displayName": "Ardashir's Mission Orders",
                        "isUnlocked": false,
                        "description": "Lower City"
                    },
                    "LoreItem_44_ScrollBlessedByTheSymorgh": {
                        "displayName": "Scroll - Blessed by the Simurgh",
                        "isUnlocked": false,
                        "description": "Hidden Village"
                    },
                    "LoreItem_45_NurseryRhymeOnAToy": {
                        "displayName": "Nursery Rhyme on a Toy",
                        "isUnlocked": false,
                        "description": "The Depths"
                    },
                    "LoreItem_46_LastDayAtWork": {
                        "displayName": "LAST DAY AT WORK",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_47_Missive_01": {
                        "displayName": "MISSIVE 1",
                        "isUnlocked": false,
                        "description": "Lower City"
                    },
                    "LoreItem_48_Missive_02": {
                        "displayName": "MISSIVE 2",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_49_Missive_03": {
                        "displayName": "MISSIVE 3",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_50_Missive_04": {
                        "displayName": "MISSIVE 4",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_51_LetterfromtheKingDariustoCaptainIrisKaloxilos": {
                        "displayName": "Letter from the King Darius to Captain Iris Kaloxilos",
                        "isUnlocked": false,
                        "description": "Raging Sea"
                    },
                    "LoreItem_52_PiratesSeaShanty": {
                        "displayName": "Pirate Sea Shanty",
                        "isUnlocked": false,
                        "description": "Sunken Harbor"
                    },
                    "LoreItem_53_TheCrowningofaDivineKing": {
                        "displayName": "The Crowning of a Divine King",
                        "isUnlocked": false,
                        "description": "Soma Tree"
                    },
                    "LoreItem_54_TheEmbraceofAthra": {
                        "displayName": "The Embrace of Athra",
                        "isUnlocked": false,
                        "description": "Hyrcanian Forest"
                    },
                    "LoreItem_55_TheFallofTheHyrcanianTribe": {
                        "displayName": "THE FALL OF THE HYRCANIAN TRIBE",
                        "isUnlocked": false,
                        "description": "Soma Tree"
                    },
                    "LoreItem_56_TheFrozenTomb": {
                        "displayName": "The Frozen Tomb",
                        "isUnlocked": false,
                        "description": "Tower of Silence"
                    },
                    "LoreItem_57_TheHunterAndTheManEater": {
                        "displayName": "The Hunter and the Man-Eater",
                        "isUnlocked": false,
                        "description": "Lower City"
                    },
                    "LoreItem_58_TheLegendofTheSnakeTheBirdandTheSands": {
                        "displayName": "The Legend of the Snake, The Bird, and The Sands",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_59_01BotanyLogsOfCyrusAfshin": {
                        "displayName": "Botany Logs of Cyrus LOG 1",
                        "isUnlocked": false,
                        "description": "Soma Tree"
                    },
                    "LoreItem_61_03BotanyLogsOfCyrusAfshin": {
                        "displayName": "Botany Logs of Cyrus LOG 2",
                        "isUnlocked": false,
                        "description": "Hyrcanian Forest"
                    },
                    "LoreItem_62_TheThirdSon": {
                        "displayName": "The Third Son",
                        "isUnlocked": false,
                        "description": "Upper City"
                    },
                    "LoreItem_64_01AlchemistDiary": {
                        "displayName": "Alchemist Diary Entry 1",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_66_03AlchemistDiary": {
                        "displayName": "Alchemist Diary Entry 2",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_67_04AlchemistDiary": {
                        "displayName": "Alchemist Diary Entry 3",
                        "isUnlocked": false,
                        "description": "Sacred Archives"
                    },
                    "LoreItem_70_TheArchitectAndTheKing": {
                        "displayName": "The Architect and the King",
                        "isUnlocked": false,
                        "description": "Upper City"
                    },
                    "LoreItem_71_ThePathOfTheHero": {
                        "displayName": "The Path of the Hero",
                        "isUnlocked": false,
                        "description": "Lower City"
                    },
                    "LoreItem_75_LegendFromThePit": {
                        "displayName": "Legend from the Pit",
                        "isUnlocked": false,
                        "description": "Pit of Eternal Sands"
                    },
                    "LoreItem_76_MastersInstructions": {
                        "displayName": "Instructions from our Master",
                        "isUnlocked": false,
                        "description": "Upper City"
                    }
                }
            },
        ]
    },
    {
        // TODO: Check the order
        tab: "Divine Trials - 4%",
        data: [
            {
                title: "Trials",
                percentage: 3.5,
                completedPercent: 0,
                description: "Each trial from this list provides 0.16% game completion.",
                data: {
                    "45febb446db6a8541a9737678377d8e6": {
                        displayName: "Hound - Tick, Tick... Death",
                        isUnlocked: false
                    },
                    "64facce1d562cb54bad531a144de264d": {
                        displayName: "Hound - Rolling Thunder",
                        isUnlocked: false
                    },
                    "593f2912cc92b6c42ac63787a297c464": {
                        displayName: "Hound - Sand in the Hourglass",
                        isUnlocked: false
                    },
                    "25f30d144a9fce140912d75c5d890d72": {
                        displayName: "Hound - Time is Currency",
                        isUnlocked: false
                    },
                    "edc7c52b2d88f7e4eb83c6ed90d31e81": {
                        displayName: "Hound - Charging the Defense",
                        isUnlocked: false
                    },
                    "3a1f24bb198bd7b4a804d82442a445f3": {
                        displayName: "Hound - Hadhayosh EX",
                        isUnlocked: false
                    },
                    "5ddd2359f0cf27b488cefc34384e3984": {
                        displayName: "Peacock - Saved by the Bell",
                        isUnlocked: false
                    },
                    "71f98cd335a4e104191c9213b5c736e7": {
                        displayName: "Peacock - Down in the Dumps",
                        isUnlocked: false
                    },
                    "142f18265b0424e449d47d058fe0224f": {
                        displayName: "Peacock - Path of the Chakram",
                        isUnlocked: false
                    },
                    "6ba8c4bb1daa494489c3559a9ed3261c": {
                        displayName: "Peacock - Sharp as a Trap",
                        isUnlocked: false
                    },
                    "9427bfefa072ee545b53e7f1ae4892c5": {
                        displayName: "Peacock - Preference for Parrying",
                        isUnlocked: false
                    },
                    "bbe8ef320eb8e274aae9437ee178797a": {
                        displayName: "Peacock - Jahandar EX",
                        isUnlocked: false
                    },
                    "8a911b56a3d4c274d81fb0df9ed4f64c": {
                        displayName: "Stallion - Let it Grow!",
                        isUnlocked: false
                    },
                    "34bddf40389eeaa469261bbd4054a340": {
                        displayName: "Stallion - Persian Mind Tricks",
                        isUnlocked: false
                    },
                    "0544b0a431b55d14584514f707075d6e": {
                        displayName: "Stallion - Above and Beyond",
                        isUnlocked: false
                    },
                    "14644f6f36beb0f46820fe1d468b3ded": {
                        displayName: "Stallion - No Hit, No Mercy",
                        isUnlocked: false
                    },
                    "25821e78130395e47babcdfcac3c5fb5": {
                        displayName: "Stallion - Kiana and Chamrosh EX",
                        isUnlocked: false
                    },
                    "81e63c1360194b643a928b66afd7a172": {
                        displayName: "Auroch - Free Solo",
                        isUnlocked: false
                    },
                    "907f57daa7fde98438b33f7be09bd73a": {
                        displayName: "Auroch - A Battery of Tests",
                        isUnlocked: false
                    },
                    "bcccbf905d39cb6458e1f7eb3f3b40e0": {
                        displayName: "Auroch - Feet off the Floor",
                        isUnlocked: false
                    },
                    "d591411474d6cee40ade0290a37fe496": {
                        displayName: "Auroch - 1 vs. the World",
                        isUnlocked: false
                    },
                    "5e9ad73dc989fa34b86d79bcefd56728": {
                        displayName: "Auroch - Menolias EX",
                        isUnlocked: false
                    }
                }
            },
            {
                title: "Quest",
                percentage: 0.5,
                completedPercent: 0,
                description: "Completing all four memorials finishes the quest and gives an extra 0.5%",
                data: {
                    "0fa4c742207211f43be1e5347fa94656": {
                        displayName: "Divine Trials (Side Quest)",
                        isUnlocked: false,
                        description: ""
                    }
                }
            },
        ]
    },
    {
        tab: "Mask of Darkness - 9%",
        data: [
            {
                title: "Side Quests",
                percentage: 2,
                completedPercent: 0,
                description: "Each quest from this list provides 1% game completion.",
                data: {
                    "932bddfd89d65ad46b08040afa81c8fa": {
                        displayName: "A Snake in the Grass",
                        isUnlocked: false,
                        description: ""
                    },
                    "b097ba356a302b5499878f8806b5e8e3": {
                        displayName: "Dark Nights of the Soul",
                        isUnlocked: false,
                        description: ""
                    }
                }
            },
            {
                title: "Amulets",
                percentage: 1.5,
                completedPercent: 0,
                description: "Each quest from this list provides 0.5% game completion.",
                data: {
                    "FastFallMine": {
                        displayName: "Seal of Fate",
                        isUnlocked: false
                    },
                    "RevengeCounter": {
                        displayName: "Vengeance Reservoir",
                        isUnlocked: false
                    },
                    "ChakramLifeSteal": {
                        displayName: "Vampiric Chakram",
                        isUnlocked: false
                    }
                }
            },
            {
                // TODO: Check the order
                title: "Additional Potions",
                percentage: 1.5,
                completedPercent: 0,
                description: "Each potion from this list provides 0.5% game completion.",
                data: {
                    "DLC_Radjen_PotionUpgradeCount_02": {
                        displayName: "East Path (Village)",
                        isUnlocked: false
                    },
                    "DLC_Radjen_PotionUpgradeCount_03": {
                        displayName: "West Path (Caravan)",
                        isUnlocked: false
                    },
                    "DLC_Radjen_PotionUpgradeCount_01": {
                        displayName: "Final Path",
                        isUnlocked: false
                    }
                }
            },
            {
                title: "Soma Flowers",
                percentage: 2,
                completedPercent: 0,
                description: "Each flower from this list provides 0.5% game completion.",
                data: {
                    "DLC_Radjen_FullHaoma_03_UvishkaEX": {
                        displayName: "Defeat Undead Uvishka",
                        isUnlocked: false
                    },
                    "DLC_Radjen_FullHaoma_01_Memory_East_Village": {
                        displayName: "Finish East Path (Village)",
                        isUnlocked: false
                    },
                    "DLC_Radjen_FullHaoma_02_Memory_West_Caravan": {
                        displayName: "Finish West Path (Caravan)",
                        isUnlocked: false
                    },
                    "DLC_Radjen_FullHaoma_04_UndeadBlackBelt": {
                        displayName: "Defeat Undead Black Belt",
                        isUnlocked: false
                    }
                }
            },
            {
                // TODO: Give proper names
                title: "Memory Fragments",
                percentage: 1.5,
                completedPercent: 0,
                description: "Each fragment from this list provides 0.15% game completion.",
                data: {
                    "DLC_Radjen_MemoryFragment_01": {
                        displayName: "Memory Fragment 1",
                        isUnlocked: false
                    },
                    "DLC_Radjen_MemoryFragment_02": {
                        displayName: "Memory Fragment 2",
                        isUnlocked: false
                    },
                    "DLC_Radjen_MemoryFragment_03": {
                        displayName: "Memory Fragment 3",
                        isUnlocked: false
                    },
                    "DLC_Radjen_MemoryFragment_04": {
                        displayName: "Memory Fragment 4",
                        isUnlocked: false
                    },
                    "DLC_Radjen_MemoryFragment_05": {
                        displayName: "Memory Fragment 5",
                        isUnlocked: false
                    },
                    "DLC_Radjen_MemoryFragment_06": {
                        displayName: "Memory Fragment 6",
                        isUnlocked: false
                    },
                    "DLC_Radjen_MemoryFragment_07": {
                        displayName: "Memory Fragment 7",
                        isUnlocked: false
                    },
                    "DLC_Radjen_MemoryFragment_08": {
                        displayName: "Memory Fragment 8",
                        isUnlocked: false
                    },
                    "DLC_Radjen_MemoryFragment_09": {
                        displayName: "Memory Fragment 9",
                        isUnlocked: false
                    },
                    "DLC_Radjen_MemoryFragment_10": {
                        displayName: "Memory Fragment 10",
                        isUnlocked: false
                    },
                }
            },
            {
                title: "Artaban",
                percentage: 0.5,
                completedPercent: 0,
                description: "Defeating Artaban gives a book and 0.5% as the reward.",
                data: {
                    "DLC_Artaban_Fight_Book": {
                        displayName: "Artaban, Master-at-Arms",
                        isUnlocked: false
                    }
                }
            },
        ]
    },
    {
        tab: "Essentials %",
        data: [
            {
                title: "Bosses",
                completedPercent: 0,
                description: "Bosses don't directly give % but collectibes/quests that give % are locked behind them.",
                data: {
                    "672a554f605e0d24a99038a79f6bf022": {
                        displayName: "Undead Prisoner",
                        isUnlocked: false,
                        description: ""
                    },
                    "d87b135e362111041816a59a4608ab82": {
                        displayName: "Erlik",
                        isUnlocked: false,
                        description: ""
                    },
                    "0825ad3b49199eb4b9f0ff96288ee25a": {
                        displayName: "Jahandar, Guardian of the Citadel",
                        isUnlocked: false,
                        description: ""
                    },
                    "7fcd5e5402572724794e699c89afb937": {
                        displayName: "Varham, The White Lion I",
                        isUnlocked: false,
                        description: ""
                    },
                    "68b35279ef2043649becb3058b09c266": {
                        displayName: "Alternate Sargon (Depths)",
                        isUnlocked: false,
                        description: ""
                    },
                    "77c296470a128304eb495be401db0e07": {
                        displayName: "Kiana, The Forest Queen",
                        isUnlocked: false,
                        description: ""
                    },
                    "2f7b3b1eabb9e2848833d323d65ee9b1": {
                        displayName: "Azhdaha, Enemy of Humans and Gods",
                        isUnlocked: false,
                        description: ""
                    },
                    "4f0d63e91ea41a64fa695efd43c87c13": {
                        displayName: "Orod, The Storm Master",
                        isUnlocked: false,
                        description: ""
                    },
                    "32f00e8d5446fe84c8be74a05a30e886": {
                        displayName: "Menolias, The Arrow of Destiny",
                        isUnlocked: false,
                        description: ""
                    },
                    "d620636f7bb3ec64f80de45cea914b2d": {
                        displayName: "Varham, The White Lion II",
                        isUnlocked: false,
                        description: ""
                    },
                    "6aa394c9873259945963bcaf3b27f759": {
                        displayName: "Darius, King of Kings",
                        isUnlocked: false,
                        description: ""
                    },
                    "616da21fedf61a9428688fe20227c943": {
                        displayName: "Vahram, Time and Space",
                        isUnlocked: false,
                        description: ""
                    },
                    "a0b9a3faa5f45594a9977b5dbb9effce": {
                        displayName: "Alternate Sargon (Sacred Archives)",
                        isUnlocked: false,
                        description: ""
                    },
                    "230fcb42a840fab4ca30bbc460f7abe9": {
                        displayName: "Alternate Sargon (Soma Tree)",
                        isUnlocked: false,
                        description: ""
                    },
                    "d4892e1adb4ad6e459b619dd09dec24c": {
                        displayName: "Alternate Sargon (Pit of Eternal Sands)",
                        isUnlocked: false,
                        description: ""
                    },
                    "ec21473458b4b154db5703596f63b01e": {
                        displayName: "Undead Erlik",
                        isUnlocked: false,
                        description: ""
                    },
                    "3e15791ee4cb4ba4aaca27949b5efe7b": {
                        displayName: "Giant Crab",
                        isUnlocked: false,
                        description: ""
                    },
                    "6fd719fd24ad6de47bc239da093262fe": {
                        displayName: "Jailer",
                        isUnlocked: false,
                        description: ""
                    },
                    "76cc870c18c33c74e861dc0cb0de6131": {
                        displayName: "Ardashir, General of Persia",
                        isUnlocked: false,
                        description: ""
                    },
                    "932bddfd89d65ad46b08040afa81c8fa": {
                        displayName: "Undead Uvishka",
                        isUnlocked: false,
                        description: ""
                    },
                    "23995256ec0140043a2601b1e6848a0a": {
                        displayName: "Undead Black Belt",
                        isUnlocked: false,
                        description: ""
                    },
                    "cbff5e0a9614d364b8b4d7f6880542a4": {
                        displayName: "Radjen, Predator of the Shadows",
                        isUnlocked: false,
                        description: ""
                    },
                    "ce2722c87a1e904458ab73529cbced30": {
                        displayName: "Artaban, Master-at-Arms",
                        isUnlocked: false,
                        description: ""
                    }
                }
            },
        ]
    },
    {
        tab: "No %",
        data: [
            {
                title: "Main Quests",
                completedPercent: 0,
                description: "These main story quests don't count for percentage.",
                data: {
                    "e36c64cd5a982ce4b8571f8190c1ad43": {
                        displayName: "Persia Under Attack",
                        isUnlocked: false
                    },
                    "5c788318b1a856943aadce9af84d8000": {
                        displayName: "Return to the Past",
                        isUnlocked: false
                    }
                }
            },
            {
                title: "Amulets",
                completedPercent: 0,
                description: "Amulets unlocked from the Divine Trials don't give %.",
                data: {
                    FireStormCharge: {
                        displayName: "Flaming Whirlwind",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 1,
                        description: "Divine Trials - Complete the Peacock memorial"
                    },
                    SuperArrow: {
                        displayName: "Point of Honor",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 1,
                        description: "Divine Trials - Complete the Stallion memorial"
                    },
                    RefillArrow: {
                        displayName: "Arash's Quiver",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 1,
                        description: "Divine Trials - Complete the Hound memorial"
                    },
                    FrozenShield: {
                        displayName: "Frozen Truth",
                        isUnlocked: false,
                        level: 0,
                        maxLevel: 1,
                        description: "Divine Trials - Complete the Arouch memorial"
                    }
                }
            },
            {
                title: "Skins",
                completedPercent: 0,
                description: "These skins don't count for %.",
                data: {
                    Default: {
                        displayName: "Default",
                        isUnlocked: false,
                        description: "Default skin after recieving the Royal Sash"
                    },
                    SargonSuperSaiyan: {
                        displayName: "Exalted",
                        isUnlocked: false,
                        description: "Unlocked on finishing the main story"
                    },
                    SargonVagabond: {
                        displayName: "Young Sargon",
                        isUnlocked: false,
                        description: "Unlocked from Ubisoft Connect rewards"
                    },
                    Silver: {
                        displayName: "Swift Sargon",
                        isUnlocked: false,
                        description: "Unlocked on finishing speedrun mode under 10 hours"
                    },
                    SandOfTimeChroma1: {
                        displayName: "Holo Chroma",
                        isUnlocked: false,
                        description: "Unlocked on finishing permadeath mode"
                    },
                    Bronze: {
                        displayName: "Gold",
                        isUnlocked: false,
                        description: "Unlocked on finishing permadeath mode on Immortal difficulty"
                    },
                    POP2008: {
                        displayName: "Wanderer",
                        isUnlocked: false,
                        description: "Unlocked on finishing the Boss Rush challenge"
                    },
                    SargonNaked: {
                        displayName: "Rasha-Bare",
                        isUnlocked: false,
                        description: "Unlocked on finishing the Boss Rush on No-Hit difficulty"
                    },
                    SargonNakedChroma01: {
                        displayName: "Homa",
                        isUnlocked: false,
                        description: "Divine Trials - Unlocked on finishing the Hound Memorial"
                    },
                    SargonNakedChroma04: {
                        displayName: "Flowers",
                        isUnlocked: false,
                        description: "Divine Trials - Unlocked on finishing the Auroch Memorial"
                    },
                    SargonNakedChroma02: {
                        displayName: "Lion",
                        isUnlocked: false,
                        description: "Divine Trials - Unlocked on finishing the Peacock Memorial"
                    },
                    SargonNakedChroma03: {
                        displayName: "Cobra",
                        isUnlocked: false,
                        description: "Divine Trials - Unlocked on finishing the Stallion Memorial"
                    },
                    SargonRadjen: {
                        displayName: "Shadows",
                        isUnlocked: false,
                        description: "Unlocked on finishing the Mask of Darkness DLC"
                    }
                }
            },
        ]
    }
];

export default initialData;