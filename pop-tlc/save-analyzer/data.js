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
        title: "Amulet Holders",
        percentage: 5,
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
            "TODO-3_lol": {
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
        title: "Memory Shards",
        percentage: 5,
        description: "Each item from this list provides 0.83% game completion.",
        data: {
            "Special_VisionAbility_TODO": {
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
    {
        title: "Lore Items",
        percentage: 5,
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
];

export default initialData;