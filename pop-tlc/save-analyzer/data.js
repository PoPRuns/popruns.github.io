const initialData = [
    {
        title: "Main Quests",
        percentage: 30,
        description: "Each quest from this list provides 3.75% game completion.\n* These quests don't count for percentage.",
        data: {
            "e36c64cd5a982ce4b8571f8190c1ad43": {
                displayName: "Persia Under Attack*",
                isUnlocked: false
            },
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
            "5c788318b1a856943aadce9af84d8000": {
                displayName: "Return to the Past*",
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
        description: "Each quest from this list provides 2.22% game completion.\n* Divine Trials doesn't give %.",
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
            "0fa4c742207211f43be1e5347fa94656": {
                displayName: "Divine Trials*",
                isUnlocked: false
            },
        }
    },
    {
        title: "Location Discovery",
        percentage: 5,
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
        description: "Each amulet as well as each amulet upgrade gives 0.051% game completion.\n* Amulets unlocked from the Divine Trials don't give %.",
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
            },
            FireStormCharge: {
                displayName: "Flaming Whirlwind*",
                isUnlocked: false,
                level: 0,
                maxLevel: 1,
                description: "Divine Trials - Complete the Peacock memorial"
            },
            SuperArrow: {
                displayName: "Point of Honor*",
                isUnlocked: false,
                level: 0,
                maxLevel: 1,
                description: "Divine Trials - Complete the Stallion memorial"
            },
            RefillArrow: {
                displayName: "Arash's Quiver*",
                isUnlocked: false,
                level: 0,
                maxLevel: 1,
                description: "Divine Trials - Complete the Hound memorial"
            },
            FrozenShield: {
                displayName: "Frozen Truth*",
                isUnlocked: false,
                level: 0,
                maxLevel: 1,
                description: "Divine Trials - Complete the Arouch memorial"
            }
        }
    },
    {
        title: "Equipment Upgrades",
        percentage: 5,
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
                displayName: "Additional Potions (Magi)",
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
        title: "Skins",
        percentage: 5,
        description: "Each skin that is unlocked directly in the game world provides 1% game completion.\n* These skins don't count for %.",
        data: {
            Default: {
                displayName: "Default*",
                isUnlocked: false,
                description: "Default skin after recieving the Royal Sash"
            },
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
            },
            SargonSuperSaiyan: {
                displayName: "Exalted*",
                isUnlocked: false,
                description: "Unlocked on finishing the main story"
            },
            SargonVagabond: {
                displayName: "Young Sargon*",
                isUnlocked: false,
                description: "Unlocked from Ubisoft Connect rewards"
            },
            Silver: {
                displayName: "Swift Sargon*",
                isUnlocked: false,
                description: "Unlocked on finishing speedrun mode under 10 hours"
            },
            SandOfTimeChroma1: {
                displayName: "Holo Chroma*",
                isUnlocked: false,
                description: "Unlocked on finishing permadeath mode"
            },
            Bronze: {
                displayName: "Gold*",
                isUnlocked: false,
                description: "Unlocked on finishing permadeath mode on Immortal difficulty"
            },
            POP2008: {
                displayName: "Wanderer*",
                isUnlocked: false,
                description: "Unlocked on finishing the Boss Rush challenge"
            },
            SargonNaked: {
                displayName: "Rasha-Bare*",
                isUnlocked: false,
                description: "Unlocked on finishing the Boss Rush on No-Hit difficulty"
            },
            SargonNakedChroma01: {
                displayName: "Homa*",
                isUnlocked: false,
                description: "Divine Trials - Unlocked on finishing the Hound Memorial"
            },
            SargonNakedChroma04: {
                displayName: "Flowers*",
                isUnlocked: false,
                description: "Divine Trials - Unlocked on finishing the Auroch Memorial"
            },
            SargonNakedChroma02: {
                displayName: "Lion*",
                isUnlocked: false,
                description: "Divine Trials - Unlocked on finishing the Peacock Memorial"
            },
            SargonNakedChroma03: {
                displayName: "Cobra*",
                isUnlocked: false,
                description: "Divine Trials - Unlocked on finishing the Stallion Memorial"
            }
        }
    },
];

export default initialData;