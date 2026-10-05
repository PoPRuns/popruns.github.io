// Auto-generated from missions_all.json (full game + Epilogue DLC mission-item dump).
// Each entry is either a mission "item" (sequencer/list/fertile ground/DLC addon)
// or a synthetic "gate" node representing an in-game MissionOperatorAnd/Or boolean
// gate (name "<ownerItem>::opN"). Gates slot into the graph exactly like items:
// they have `requirements` (their inputs) and can appear as another node's
// requirement `source`. This is what makes multi-condition unlock/stay-active
// logic (e.g. "all vines in this region done") explicit instead of a flattened
// single-list of requirements.
//
// Identifiers and Display Names:
//   - `id`: The internal mission item name / ID (e.g. "RC1_Windmill", "ACT1", "Desert::op0").
//   - `name`: Preserved as alias to `id` for backwards compatibility.
//   - `displayName`: Human-readable inferred display name translating internal codes
//     (regions, level chunks, boss fights, abilities, tutorials).
//
// seqMode/seqModeName is read directly from the game's own SeqMode enum:
// 0 = Concurrent, 1 = Serial.
//
// `actions` are the MissionActionSendEvent/NavZone effects fired when the item
// completes (ActivateEvent Action 1 is read as "activate", 0 as "deactivate" --
// this mapping is inferred from convention, not confirmed against engine code).
//
// `completion` describes what actually fires this item's own Completed port,
// per the reverse-engineered engine logic (sub_A91A80 for scene playback,
// sub_A91920/sub_A88190 for the list self-completion trick):
//   - 'scene-termination' (sequencers/FertileGround): completes once every
//     listed scene has fired its TerminationOutput (Concurrent: together,
//     Serial: in order).
//   - 'internal-signal' (lists): has an inverted requirement sourced from one
//     of its own children or owned gates; the FIRST such internal source to
//     fire is what completes it (not an AND of all of them).
//   - 'default-unknown' (lists): no internal inverted source exists to drive
//     this, so completion presumably falls back to a more basic engine
//     default (e.g. "all children Completed") that isn't confirmed anywhere
//     in this dump.
//   - 'gate-combine' (gates): drives its own Completed output once its
//     AND/OR of inputs is satisfied -- see `requirements` on the gate node.
//   - 'not-decoded': DLCMissionAddon / items the dump could not decode.
//
// Separately, note that `requirements` only covers this item's *own* wiring.
// The engine also requires every one of an item's `parents` to be active
// before it can unlock at all -- that containment gate is not represented as
// a `requirements` entry anywhere (it's implicit), so it isn't part of this
// graph's edges and has to be checked via `parents` directly.
const missionNodes = [
  {
    "id": "POP0_ROOT",
    "name": "POP0_ROOT",
    "displayName": "Game Root",
    "kind": "item",
    "hash": "0x6b866308",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [],
    "children": [
      "ACT1",
      "ACT3",
      "ACT2",
      "AcrobaticTutorials"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "ACT3"
      ]
    }
  },
  {
    "id": "ACT1",
    "name": "ACT1",
    "displayName": "Act 1: Temple Corruption",
    "kind": "item",
    "hash": "0x21460002",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "POP0_ROOT"
    ],
    "children": [
      "ACT1_005_WorldCorrupts_003_TempleCollapses",
      "ACT1_002_AdvTutorial_004_GuardFight",
      "ACT1_001_BasicTutorial_007",
      "ACT1_005_WorldCorrupts_002_BrokenCorridorOn",
      "ACT1_005_WorldCorrupts",
      "ACT1_003_TutorialGripFall_004",
      "DE3C_SCE_SE_AhrimanWhispering_OA_006",
      "ACT1_DE2_HideAllSparkles",
      "ACT1_001_BasicTutorial_001",
      "ACT1_001_BasicTutorial_002",
      "ACT1_003_FinalTrial_001_FightIntro",
      "ACT1_001_BasicTutorial_004",
      "ACT1_001_BasicTutorial_005",
      "ACT1_001_BasicTutorial_006",
      "ACT1_002_AdvTutorial_001",
      "ACT1_002_AdvTutorial_002_TreeVista",
      "ACT1_002_AdvTutorial_002_Bridge",
      "ACT1_002_AdvTutorial_003_ElikaChat",
      "ACT1_005_WorldCorrupts_004_CorridorCollapses",
      "ACT1_003_FinalTrial_002_secondGuard",
      "ACT1_003_FinalTrial_003_MK",
      "ACT1_004_Temple_001_ElikaRuns",
      "ACT1_004_Temple_003_InTree",
      "ACT1_005_SCE_FirstMKfight_LDD",
      "ACT1_004_Temple_006_InsideTemple",
      "ACT1_005_WorldCorrupts_001_MK_Arrives",
      "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
      "ACT1_005_Temple_003_2ndGenFight",
      "ACT1_004_RingSwitch",
      "ACT1_003_FirstGuardSpawning"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Act1",
    "requirements": [
      {
        "source": "ACT1_005_WorldCorrupts",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "ACT1_005_WorldCorrupts"
      ]
    }
  },
  {
    "id": "ACT3",
    "name": "ACT3",
    "displayName": "Act 3: Epilogue & Final Battle",
    "kind": "item",
    "hash": "0x21e6414a",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "POP0_ROOT"
    ],
    "children": [
      "ACT3_CIN_AhrimanDefeated",
      "ACT3_SE_CarryElika",
      "ACT3_SE_AhrimanWhisperings_DesertTree4",
      "DE3_A3_SCE_CIN_Vision5",
      "ACT3_SE_AllTheDesertTreesAreDestroyed",
      "ACT3_SE_AhrimanWhisperings_DesertTree2",
      "ACT3_SE_DesertTreeNo4Destroyed",
      "ACT3_SE_DesertTreeNo3Destroyed",
      "ACT3_SE_DesertTreeNo2Destroyed",
      "ACT3_SE_DesertTreeNo1Destroyed",
      "ACT3_SE_KillSacredTree",
      "ACT3_SE_CarryLight",
      "ACT3_CIN_IntoTheSunset",
      "ACT3_FinalMkFight_LDD",
      "ACT3_SE_DesertTreeManager",
      "ACT3_SE_AhrimanWhisperings_DesertTree3",
      "ACT3_SE_OuterTempleDoorsManager",
      "AhrimanFightMechanic",
      "003_AhrimanFinalFight",
      "002_MourningKingFightIntro",
      "001_AhrimanPortal",
      "DE3_A3_KeepElikaDeadLoop",
      "ACT3_SE_ActivateInvisibleWalls",
      "ElikaGoTo",
      "002_MourningKingFightOutro",
      "ACT3_FertileGround1",
      "ACT3_FertileGround2",
      "ACT3_FertileGround3",
      "ACT3_FertileGround4",
      "ACT3_SE_AhrimanWhisperings_180SecondsMark",
      "ACT3_SE_AhrimanWhisperings_DesertTree1",
      "ACT3_SE_FakeCredits",
      "ACT3_SE_FailsafeScenaricControl"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Act3",
    "requirements": [
      {
        "source": "ACT2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "ACT3_CIN_IntoTheSunset",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "ACT3_CIN_IntoTheSunset"
      ]
    }
  },
  {
    "id": "ACT2",
    "name": "ACT2",
    "displayName": "Act 2: The Fertile Grounds",
    "kind": "item",
    "hash": "0x21460003",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "POP0_ROOT"
    ],
    "children": [
      "HighCastle",
      "LavaRift",
      "Observatory",
      "RuinedCity",
      "Desert",
      "X6_FirstTimeHealing",
      "X6_NotFirstTimeHealing",
      "Vision Manager",
      "ACT2_ActivateElikaAbilities",
      "ACT2_OrmazhdPortal",
      "CINE_BlackGate",
      "ACT2_HealedWorldODD",
      "ACT1_006_MapTutorial",
      "ACT2_OrmazhdGlowingDoor"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Act2",
    "requirements": [
      {
        "source": "ACT1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "ACT2_OrmazhdPortal",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "ACT2_OrmazhdPortal"
      ]
    }
  },
  {
    "id": "AcrobaticTutorials",
    "name": "AcrobaticTutorials",
    "displayName": "Acrobatic Tutorials",
    "kind": "item",
    "hash": "0x4daec588",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "POP0_ROOT"
    ],
    "children": [
      "POWERS",
      "VINES",
      "SLIDES",
      "ROOFING",
      "POLE",
      "GRIPS",
      "FERTILEGROUND",
      "COMPASS",
      "BEAM",
      "JCT1_LeapOfFaith",
      "OB6_Gripfall",
      "HC6_Attack",
      "CANYON_TEMPLE",
      "JCT1_Cracks4",
      "JCT1_Cracks5",
      "ALL_NoDestination",
      "RC6_Gripfall2",
      "RC6_Gripfall3",
      "COOP",
      "COLUMN",
      "CRACKS",
      "RC6_Gripfall",
      "DE3_ODD2",
      "AfterHealMap_CollectSparkles",
      "TEM_BuyPower3",
      "ALL_BuyPower_Warp",
      "PUZZLES",
      "JCT3_Cracks3",
      "JCT1_BeamAbove",
      "OB6_BeamAbove",
      "JCT2_Cracks",
      "JCT1_Cracks3",
      "ALL_SpeedKill",
      "ALL_ODD_LEARN",
      "AfterHealMap_SetDestination"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT2",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "ACT1_005_WorldCorrupts_003_TempleCollapses",
    "name": "ACT1_005_WorldCorrupts_003_TempleCollapses",
    "displayName": "Act 1: World Corrupts - Temple Collapses",
    "kind": "item",
    "hash": "0x37e531a9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_005_WorldCorrupts_001_MK_Arrives",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A1_SCE_SE_TempleCollapses",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A1_SCE_SE_TempleCollapses"
      ]
    }
  },
  {
    "id": "ACT1_002_AdvTutorial_004_GuardFight",
    "name": "ACT1_002_AdvTutorial_004_GuardFight",
    "displayName": "Act 1: Advanced Tutorial - Guard Fight",
    "kind": "item",
    "hash": "0x37e505b6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_002_AdvTutorial_002_Bridge",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1C_A1_CIN_006_GuardFight",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1C_A1_CIN_006_GuardFight"
      ]
    }
  },
  {
    "id": "ACT1_001_BasicTutorial_007",
    "name": "ACT1_001_BasicTutorial_007",
    "displayName": "Act 1: Basic Tutorial 7",
    "kind": "item",
    "hash": "0x37e5025d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_001_BasicTutorial_004",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1B_A1_SCE_005_FightTutorial",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1B_A1_SCE_005_FightTutorial"
      ]
    }
  },
  {
    "id": "ACT1_005_WorldCorrupts_002_BrokenCorridorOn",
    "name": "ACT1_005_WorldCorrupts_002_BrokenCorridorOn",
    "displayName": "Act 1: World Corrupts - Broken Corridor On",
    "kind": "item",
    "hash": "0x37e533de",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_005_WorldCorrupts_001_MK_Arrives",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_A1_SCE_SE_BrokenCorridorON",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_A1_SCE_SE_BrokenCorridorON"
      ]
    }
  },
  {
    "id": "ACT1_005_WorldCorrupts",
    "name": "ACT1_005_WorldCorrupts",
    "displayName": "Act 1: World Corrupts",
    "kind": "item",
    "hash": "0x25a9c001",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_005_WorldCorrupts_004_CorridorCollapses",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A1_SCE_CIN_WorldCorrupted",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A1_SCE_CIN_WorldCorrupted"
      ]
    }
  },
  {
    "id": "ACT1_003_TutorialGripFall_004",
    "name": "ACT1_003_TutorialGripFall_004",
    "displayName": "Act 1: Grip Fall Tutorial 4",
    "kind": "item",
    "hash": "0xa5d40369",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_003_FinalTrial_003_MK",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_Gripfall",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_Gripfall"
      ]
    }
  },
  {
    "id": "DE3C_SCE_SE_AhrimanWhispering_OA_006",
    "name": "DE3C_SCE_SE_AhrimanWhispering_OA_006",
    "displayName": "Inner Temple: Ahriman Whispering",
    "kind": "item",
    "hash": "0x5120802c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "ACT1_004_Temple_003_InTree",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_SCE_SE_AhrimanWhispering_OA_006",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_SCE_SE_AhrimanWhispering_OA_006"
      ]
    }
  },
  {
    "id": "ACT1_DE2_HideAllSparkles",
    "name": "ACT1_DE2_HideAllSparkles",
    "displayName": "Act 1: Hide Light Seeds in Desert",
    "kind": "item",
    "hash": "0x9b874005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE2_SCE_ACT1_HideAllSparkles",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE2_SCE_ACT1_HideAllSparkles"
      ]
    }
  },
  {
    "id": "ACT1_001_BasicTutorial_001",
    "name": "ACT1_001_BasicTutorial_001",
    "displayName": "Act 1: Basic Tutorial 1",
    "kind": "item",
    "hash": "0x37e50256",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1A_A1_CIN_002_IntroScene",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1A_A1_CIN_002_IntroScene"
      ]
    }
  },
  {
    "id": "ACT1_001_BasicTutorial_002",
    "name": "ACT1_001_BasicTutorial_002",
    "displayName": "Act 1: Basic Tutorial 2",
    "kind": "item",
    "hash": "0x37e50258",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_001_BasicTutorial_001",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1A_A1_SCE_002_ElikaRuns",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1A_A1_SCE_002_ElikaRuns"
      ]
    }
  },
  {
    "id": "ACT1_003_FinalTrial_001_FightIntro",
    "name": "ACT1_003_FinalTrial_001_FightIntro",
    "displayName": "Act 1: Final Trial - Fight Intro",
    "kind": "item",
    "hash": "0x4c4645a2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1C_A1_SCE_SE_EndCannyon_Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "DE1C_TRG_TUTO_GRIPFALL"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1C_A1_SCE_SE_EndCannyon_Intro"
      ]
    }
  },
  {
    "id": "ACT1_001_BasicTutorial_004",
    "name": "ACT1_001_BasicTutorial_004",
    "displayName": "Act 1: Basic Tutorial 4",
    "kind": "item",
    "hash": "0x37e5025a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_001_BasicTutorial_002",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1A_A1_SCE_002_ElikaWallruns",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1A_A1_SCE_002_ElikaWallruns"
      ]
    }
  },
  {
    "id": "ACT1_001_BasicTutorial_005",
    "name": "ACT1_001_BasicTutorial_005",
    "displayName": "Act 1: Basic Tutorial 5",
    "kind": "item",
    "hash": "0x37e5025b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_001_BasicTutorial_002",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1A_A1_SCE_004_PrinceSpotted",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1A_A1_SCE_004_PrinceSpotted"
      ]
    }
  },
  {
    "id": "ACT1_001_BasicTutorial_006",
    "name": "ACT1_001_BasicTutorial_006",
    "displayName": "Act 1: Basic Tutorial 6",
    "kind": "item",
    "hash": "0x37e5025c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_001_BasicTutorial_004",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1B_A1_SCE_004_GameIntro3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1B_A1_SCE_004_GameIntro3"
      ]
    }
  },
  {
    "id": "ACT1_002_AdvTutorial_001",
    "name": "ACT1_002_AdvTutorial_001",
    "displayName": "Act 1: Advanced Tutorial - 001",
    "kind": "item",
    "hash": "0x37e505b1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1B_A1_CIN_004_EndFightTutorial",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1B_A1_CIN_004_EndFightTutorial"
      ]
    }
  },
  {
    "id": "ACT1_002_AdvTutorial_002_TreeVista",
    "name": "ACT1_002_AdvTutorial_002_TreeVista",
    "displayName": "Act 1: Advanced Tutorial - Tree Vista",
    "kind": "item",
    "hash": "0x37e505b2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1B_A1_SCE_008_TreeVista",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1B_A1_SCE_008_TreeVista"
      ]
    }
  },
  {
    "id": "ACT1_002_AdvTutorial_002_Bridge",
    "name": "ACT1_002_AdvTutorial_002_Bridge",
    "displayName": "Act 1: Advanced Tutorial - Bridge",
    "kind": "item",
    "hash": "0x37e505b3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1B_A1_CIN_005_BridgeBreaks",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1B_A1_CIN_005_BridgeBreaks"
      ]
    }
  },
  {
    "id": "ACT1_002_AdvTutorial_003_ElikaChat",
    "name": "ACT1_002_AdvTutorial_003_ElikaChat",
    "displayName": "Act 1: Advanced Tutorial - Elika Chat",
    "kind": "item",
    "hash": "0x37e505b4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_002_AdvTutorial_002_Bridge",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1C_A1_SCE_010_ElikaChat",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1C_A1_SCE_010_ElikaChat"
      ]
    }
  },
  {
    "id": "ACT1_005_WorldCorrupts_004_CorridorCollapses",
    "name": "ACT1_005_WorldCorrupts_004_CorridorCollapses",
    "displayName": "Act 1: World Corrupts - Corridor Collapses",
    "kind": "item",
    "hash": "0x37e531af",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_005_Temple_003_2ndGenFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_A1_SCE_SE_CorridorCollapses",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_A1_SCE_SE_CorridorCollapses"
      ]
    }
  },
  {
    "id": "ACT1_003_FinalTrial_002_secondGuard",
    "name": "ACT1_003_FinalTrial_002_secondGuard",
    "displayName": "Act 1: Final Trial - second Guard",
    "kind": "item",
    "hash": "0x37e50db9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_003_FinalTrial_001_FightIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1C_A1_SCE_CIN_SecondGuard",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1C_A1_SCE_CIN_SecondGuard"
      ]
    }
  },
  {
    "id": "ACT1_003_FinalTrial_003_MK",
    "name": "ACT1_003_FinalTrial_003_MK",
    "displayName": "Act 1: Final Trial - Mourning King",
    "kind": "item",
    "hash": "0x37e50dba",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_003_FinalTrial_002_secondGuard",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1C_A1_SCE_CIN_MourningKing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "DE1C_TRG_TUTO_GRIPFALL"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1C_A1_SCE_CIN_MourningKing"
      ]
    }
  },
  {
    "id": "ACT1_004_Temple_001_ElikaRuns",
    "name": "ACT1_004_Temple_001_ElikaRuns",
    "displayName": "Act 1: Temple - Elika Runs",
    "kind": "item",
    "hash": "0x37e517c1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE2_A1_SCE_SE_ElikaToTemple",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A1_SCE_CIN_ElikaNeedsHelp",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A1_SCE_SE_LeverDoor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE2_A1_SCE_SE_ElikaToTemple",
        "DE3_A1_SCE_CIN_ElikaNeedsHelp",
        "DE3_A1_SCE_SE_LeverDoor"
      ]
    }
  },
  {
    "id": "ACT1_004_Temple_003_InTree",
    "name": "ACT1_004_Temple_003_InTree",
    "displayName": "Act 1: Temple - In Tree",
    "kind": "item",
    "hash": "0x37e517c4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_004_Temple_001_ElikaRuns",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_SCE_SE_002_OA_TreeShrineCorridor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_SCE_SE_002_OA_TreeShrineCorridor"
      ]
    }
  },
  {
    "id": "ACT1_005_SCE_FirstMKfight_LDD",
    "name": "ACT1_005_SCE_FirstMKfight_LDD",
    "displayName": "Act 1: First Mourning King Fight",
    "kind": "item",
    "hash": "0x6c3fc95d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_005_WorldCorrupts_001_MK_Arrives",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A1_SCE_FirstMKfight_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A1_SCE_FirstMKfight_LDD"
      ]
    }
  },
  {
    "id": "ACT1_004_Temple_006_InsideTemple",
    "name": "ACT1_004_Temple_006_InsideTemple",
    "displayName": "Act 1: Temple - Inside Temple",
    "kind": "item",
    "hash": "0x37e52a6c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_SCE_SE_ArrivingInTreeShrine_OA_004",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_SCE_SE_ArrivingInTreeShrine_OA_004"
      ]
    }
  },
  {
    "id": "ACT1_005_WorldCorrupts_001_MK_Arrives",
    "name": "ACT1_005_WorldCorrupts_001_MK_Arrives",
    "displayName": "Act 1: World Corrupts - Mourning King Arrives",
    "kind": "item",
    "hash": "0x37e52fa5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A1_SCE_CIN_MKArrives",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A1_SCE_CIN_MKArrives"
      ]
    }
  },
  {
    "id": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
    "name": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
    "displayName": "Act 1: World Corrupts - After Mourning King Fight Corruption",
    "kind": "item",
    "hash": "0x37e52fa9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_005_WorldCorrupts_001_MK_Arrives",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A1_SCE_CIN_Corruption",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A1_SCE_CIN_Corruption"
      ]
    }
  },
  {
    "id": "ACT1_005_Temple_003_2ndGenFight",
    "name": "ACT1_005_Temple_003_2ndGenFight",
    "displayName": "Act 1: Temple - 2nd Gen Fight",
    "kind": "item",
    "hash": "0x39504000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_SCE_A1_2ndGenFight",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_SCE_SE_Activate2ndGenFight",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_SCE_A1_2ndGenFight",
        "DE3C_SCE_SE_Activate2ndGenFight"
      ]
    }
  },
  {
    "id": "ACT1_004_RingSwitch",
    "name": "ACT1_004_RingSwitch",
    "displayName": "Act 1: Ring Switch",
    "kind": "item",
    "hash": "0x7f8bc0c7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_A1_SCE_SE_SwitchDoor",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_SCE_SE_007_RingSwitch",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_A1_SCE_SE_SwitchDoor",
        "DE3A_SCE_SE_007_RingSwitch"
      ]
    }
  },
  {
    "id": "ACT1_003_FirstGuardSpawning",
    "name": "ACT1_003_FirstGuardSpawning",
    "displayName": "Act 1: First Guard Spawning",
    "kind": "item",
    "hash": "0xdb8bc000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1_002_AdvTutorial_003_ElikaChat",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "ACT1_003_FinalTrial_001_FightIntro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1C_SCE_FirstGuardSpawn",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1C_SCE_FirstGuardSpawn"
      ]
    }
  },
  {
    "id": "ACT3_CIN_AhrimanDefeated",
    "name": "ACT3_CIN_AhrimanDefeated",
    "displayName": "Act 3: Cutscene: Ahriman Defeated",
    "kind": "item",
    "hash": "0x21e6414d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_FertileGround4",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_A3_SCE_CIN_10_AhrimanDefeated",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_A3_SCE_CIN_10_AhrimanDefeated"
      ]
    }
  },
  {
    "id": "ACT3_SE_CarryElika",
    "name": "ACT3_SE_CarryElika",
    "displayName": "Act 3: Carry Elika",
    "kind": "item",
    "hash": "0x21e6414e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_A3_SCE_SE_CarryElika",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_A3_SCE_SE_CarryElika"
      ]
    }
  },
  {
    "id": "ACT3_SE_AhrimanWhisperings_DesertTree4",
    "name": "ACT3_SE_AhrimanWhisperings_DesertTree4",
    "displayName": "Act 3: Ahriman Whispers (Desert Tree 4)",
    "kind": "item",
    "hash": "0x64f94f1c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_A3_SCE_CIN_Vision5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "ACT3_SCE_SE_AhrimanWhisperings_DesertTree4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "ACT3_SCE_SE_AhrimanWhisperings_DesertTree4"
      ]
    }
  },
  {
    "id": "DE3_A3_SCE_CIN_Vision5",
    "name": "DE3_A3_SCE_CIN_Vision5",
    "displayName": "Act 3: Cutscene - Vision 5",
    "kind": "item",
    "hash": "0x21e64150",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_CarryElika",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A3_SCE_CIN_Vision5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A3_SCE_CIN_Vision5"
      ]
    }
  },
  {
    "id": "ACT3_SE_AllTheDesertTreesAreDestroyed",
    "name": "ACT3_SE_AllTheDesertTreesAreDestroyed",
    "displayName": "Act 3: All The Desert Trees Are Destroyed",
    "kind": "item",
    "hash": "0x22ba4018",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_DesertTreeNo1Destroyed",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "ACT3_SE_DesertTreeNo2Destroyed",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "ACT3_SE_DesertTreeNo3Destroyed",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "ACT3_SE_DesertTreeNo4Destroyed",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A3_SCE_SE_AllDesertTreesAreDestroyed",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A3_SCE_SE_AllDesertTreesAreDestroyed"
      ]
    }
  },
  {
    "id": "ACT3_SE_AhrimanWhisperings_DesertTree2",
    "name": "ACT3_SE_AhrimanWhisperings_DesertTree2",
    "displayName": "Act 3: Ahriman Whispers (Desert Tree 2)",
    "kind": "item",
    "hash": "0x21e6415c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_A3_SCE_CIN_Vision5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "ACT3_SCE_SE_AhrimanWhisperings_DesertTree2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "ACT3_SCE_SE_AhrimanWhisperings_DesertTree2"
      ]
    }
  },
  {
    "id": "ACT3_SE_DesertTreeNo4Destroyed",
    "name": "ACT3_SE_DesertTreeNo4Destroyed",
    "displayName": "Act 3: Desert Tree 4 Destroyed",
    "kind": "item",
    "hash": "0x27522d76",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_AhrimanWhisperings_DesertTree4",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE2_A3_SCE_SE_DesertTree4Destroyed",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE2_A3_SCE_SE_DesertTree4Destroyed"
      ]
    }
  },
  {
    "id": "ACT3_SE_DesertTreeNo3Destroyed",
    "name": "ACT3_SE_DesertTreeNo3Destroyed",
    "displayName": "Act 3: Desert Tree 3 Destroyed",
    "kind": "item",
    "hash": "0x27522d75",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_AhrimanWhisperings_DesertTree3",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE2_A3_SCE_SE_DesertTree3Destroyed",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE2_A3_SCE_SE_DesertTree3Destroyed"
      ]
    }
  },
  {
    "id": "ACT3_SE_DesertTreeNo2Destroyed",
    "name": "ACT3_SE_DesertTreeNo2Destroyed",
    "displayName": "Act 3: Desert Tree 2 Destroyed",
    "kind": "item",
    "hash": "0x27522d74",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_AhrimanWhisperings_DesertTree2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE2_A3_SCE_SE_DesertTree2Destroyed",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE2_A3_SCE_SE_DesertTree2Destroyed"
      ]
    }
  },
  {
    "id": "ACT3_SE_DesertTreeNo1Destroyed",
    "name": "ACT3_SE_DesertTreeNo1Destroyed",
    "displayName": "Act 3: Desert Tree 1 Destroyed",
    "kind": "item",
    "hash": "0x27522d73",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_AhrimanWhisperings_DesertTree1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE2_A3_SCE_SE_DesertTree1Destroyed",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE2_A3_SCE_SE_DesertTree1Destroyed"
      ]
    }
  },
  {
    "id": "ACT3_SE_KillSacredTree",
    "name": "ACT3_SE_KillSacredTree",
    "displayName": "Act 3: Kill Sacred Tree",
    "kind": "item",
    "hash": "0x21e64161",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_AllTheDesertTreesAreDestroyed",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_A3_SCE_SE_KillSacredTree",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_A3_SCE_SE_KillSacredTree"
      ]
    }
  },
  {
    "id": "ACT3_SE_CarryLight",
    "name": "ACT3_SE_CarryLight",
    "displayName": "Act 3: Carry Light",
    "kind": "item",
    "hash": "0x21e64162",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_KillSacredTree",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_A3_SCE_SE_CarryLight",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_A3_SCE_SE_CarryLight"
      ]
    }
  },
  {
    "id": "ACT3_CIN_IntoTheSunset",
    "name": "ACT3_CIN_IntoTheSunset",
    "displayName": "Act 3: Cutscene: Into The Sunset",
    "kind": "item",
    "hash": "0x21e64163",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_CarryLight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A3_SCE_SE_IntoTheSunset",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A3_SCE_SE_IntoTheSunset"
      ]
    }
  },
  {
    "id": "ACT3_FinalMkFight_LDD",
    "name": "ACT3_FinalMkFight_LDD",
    "displayName": "Act 3: Final Mk Fight Logic",
    "kind": "item",
    "hash": "0x770bc4a8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "001_AhrimanPortal",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "002_MourningKingFightOutro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A3_SCE_LastMkFight_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A3_SCE_LastMkFight_LDD"
      ]
    }
  },
  {
    "id": "ACT3_SE_DesertTreeManager",
    "name": "ACT3_SE_DesertTreeManager",
    "displayName": "Act 3: Desert Tree Manager",
    "kind": "item",
    "hash": "0x25844373",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3CDoors_A3_SCE_SE_DesertTreeManager",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3CDoors_A3_SCE_SE_DesertTreeManager"
      ]
    }
  },
  {
    "id": "ACT3_SE_AhrimanWhisperings_DesertTree3",
    "name": "ACT3_SE_AhrimanWhisperings_DesertTree3",
    "displayName": "Act 3: Ahriman Whispers (Desert Tree 3)",
    "kind": "item",
    "hash": "0x64f94f1b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_A3_SCE_CIN_Vision5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "ACT3_SCE_SE_AhrimanWhisperings_DesertTree3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "ACT3_SCE_SE_AhrimanWhisperings_DesertTree3"
      ]
    }
  },
  {
    "id": "ACT3_SE_OuterTempleDoorsManager",
    "name": "ACT3_SE_OuterTempleDoorsManager",
    "displayName": "Act 3: Outer Temple Doors Manager",
    "kind": "item",
    "hash": "0x343007fc",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_SE_AllTheDesertTreesAreDestroyed",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_A3_SCE_SE_OuterTempleDoorsManager",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_A3_SCE_SE_OuterTempleDoorsManager"
      ]
    }
  },
  {
    "id": "AhrimanFightMechanic",
    "name": "AhrimanFightMechanic",
    "displayName": "Ahriman Boss Fight Mechanics",
    "kind": "item",
    "hash": "0x22528009",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "003_AhrimanFinalFight",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "002_MourningKingFightOutro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_GooWave01",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_GooWave02",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_GooWave03",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_GooWave04",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_GooWave05",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_GooWave06",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_GooWave07",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_GooWave08",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_GooWave09",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_CIN_XXX_SaveElika",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_CollapsingGround_001",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_CollapsingGround_002",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_CollapsingGround_003",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_CollapsingGround_004",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_CollapsingGround_005",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_CollapsingGround_006",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_CollapsingGround_007",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_CollapsingGround_008",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_AhrimanSwings01",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_AhrimanSwings02",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_AhrimanSwings03",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_HealFG03",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_SE_SpecialSaveMeStart",
        "terminationOutputIdx": 1
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A2_SCE_SE_GooWave01",
        "DE3C_A2_SCE_SE_GooWave02",
        "DE3C_A2_SCE_SE_GooWave03",
        "DE3C_A2_SCE_SE_GooWave04",
        "DE3C_A2_SCE_SE_GooWave05",
        "DE3C_A2_SCE_SE_GooWave06",
        "DE3C_A2_SCE_SE_GooWave07",
        "DE3C_A2_SCE_SE_GooWave08",
        "DE3C_A2_SCE_SE_GooWave09",
        "DE3C_A2_SCE_CIN_XXX_SaveElika",
        "DE3C_A2_SCE_SE_CollapsingGround_001",
        "DE3C_A2_SCE_SE_CollapsingGround_002",
        "DE3C_A2_SCE_SE_CollapsingGround_003",
        "DE3C_A2_SCE_SE_CollapsingGround_004",
        "DE3C_A2_SCE_SE_CollapsingGround_005",
        "DE3C_A2_SCE_SE_CollapsingGround_006",
        "DE3C_A2_SCE_SE_CollapsingGround_007",
        "DE3C_A2_SCE_SE_CollapsingGround_008",
        "DE3C_A2_SCE_SE_AhrimanSwings01",
        "DE3C_A2_SCE_SE_AhrimanSwings02",
        "DE3C_A2_SCE_SE_AhrimanSwings03",
        "DE3C_A2_SCE_SE_HealFG03",
        "DE3C_A2_SCE_SE_SpecialSaveMeStart"
      ]
    }
  },
  {
    "id": "003_AhrimanFinalFight",
    "name": "003_AhrimanFinalFight",
    "displayName": "Ahriman Final Boss Fight",
    "kind": "item",
    "hash": "0x22528008",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "002_MourningKingFightOutro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A3_SCE_SE_HealLastFG",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A3_SCE_SE_HealLastFG"
      ]
    }
  },
  {
    "id": "002_MourningKingFightIntro",
    "name": "002_MourningKingFightIntro",
    "displayName": "Mourning King Fight Intro",
    "kind": "item",
    "hash": "0x22528007",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "001_AhrimanPortal",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A3_SCE_CIN_MourningKingFightIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A3_SCE_CIN_MourningKingFight",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A3_SCE_CIN_MourningKingFightIntro",
        "DE3C_A3_SCE_CIN_MourningKingFight"
      ]
    }
  },
  {
    "id": "001_AhrimanPortal",
    "name": "001_AhrimanPortal",
    "displayName": "Ahriman Portal",
    "kind": "item",
    "hash": "0xae993cc7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3B_A2_SCE_SE_AhrimanPortal",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3B_A2_SCE_SE_AhrimanPortal"
      ]
    }
  },
  {
    "id": "DE3_A3_KeepElikaDeadLoop",
    "name": "DE3_A3_KeepElikaDeadLoop",
    "displayName": "Act 3: Keep Elika Dead Loop",
    "kind": "item",
    "hash": "0xb7aa8cf5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_A3_SCE_CIN_Vision5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A3_KeepElikaDeadLoop",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A3_KeepElikaDeadLoop"
      ]
    }
  },
  {
    "id": "ACT3_SE_ActivateInvisibleWalls",
    "name": "ACT3_SE_ActivateInvisibleWalls",
    "displayName": "Act 3: Activate Invisible Walls",
    "kind": "item",
    "hash": "0xc9c54b48",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A3_SCE_SE_ActivateInvisibleWalls",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A3_SCE_SE_ActivateInvisibleWalls"
      ]
    }
  },
  {
    "id": "ElikaGoTo",
    "name": "ElikaGoTo",
    "displayName": "Elika Navigation Script",
    "kind": "item",
    "hash": "0xc0c11acb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_FertileGround1",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "002_MourningKingFightIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_SCE_AhrimanRevealed_Elika_Goto",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_SCE_AhrimanRevealed_Elika_Goto"
      ]
    }
  },
  {
    "id": "002_MourningKingFightOutro",
    "name": "002_MourningKingFightOutro",
    "displayName": "Mourning King Fight Outro",
    "kind": "item",
    "hash": "0x308e9221",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "002_MourningKingFightIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A3_SCE_CIN_MourningKingFightOutro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A3_SCE_CIN_MourningKingFightOutro"
      ]
    }
  },
  {
    "id": "ACT3_FertileGround1",
    "name": "ACT3_FertileGround1",
    "displayName": "Act 3: Desert Tree Fertile Ground 1",
    "kind": "item",
    "hash": "0x39b12c7e",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "DE3C_A3_FG1_Intro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "DE3C_A3_FG1_Outro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A3_FG1_Intro",
        "DE3C_A3_FG1_Outro"
      ]
    }
  },
  {
    "id": "ACT3_FertileGround2",
    "name": "ACT3_FertileGround2",
    "displayName": "Act 3: Desert Tree Fertile Ground 2",
    "kind": "item",
    "hash": "0x39b12c7f",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_FertileGround1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "DE3C_A3_FG2_Intro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "DE3C_A3_FG2_Outro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A3_FG2_Intro",
        "DE3C_A3_FG2_Outro"
      ]
    }
  },
  {
    "id": "ACT3_FertileGround3",
    "name": "ACT3_FertileGround3",
    "displayName": "Act 3: Desert Tree Fertile Ground 3",
    "kind": "item",
    "hash": "0x39b12c80",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_FertileGround2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "DE3C_A3_FG3_Intro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "DE3C_A3_FG3_Outro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A3_FG3_Intro",
        "DE3C_A3_FG3_Outro"
      ]
    }
  },
  {
    "id": "ACT3_FertileGround4",
    "name": "ACT3_FertileGround4",
    "displayName": "Act 3: Desert Tree Fertile Ground 4",
    "kind": "item",
    "hash": "0x39b12c81",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_FertileGround3",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "DE3C_A3_FG4_Intro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "DE3C_A3_FG4_Outro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A3_FG4_Intro",
        "DE3C_A3_FG4_Outro"
      ]
    }
  },
  {
    "id": "ACT3_SE_AhrimanWhisperings_180SecondsMark",
    "name": "ACT3_SE_AhrimanWhisperings_180SecondsMark",
    "displayName": "Act 3: Ahriman Whisperings 180 Seconds Mark",
    "kind": "item",
    "hash": "0x64f9400d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_A3_SCE_CIN_Vision5",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "ACT3_SE_AhrimanWhisperings_DesertTree1",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "ACT3_SE_AhrimanWhisperings_DesertTree2",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "ACT3_SE_AhrimanWhisperings_DesertTree3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "ACT3_SE_AhrimanWhisperings_DesertTree4",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A3_SCE_SE_AhrimanWhisperings_180SecondsMark",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A3_SCE_SE_AhrimanWhisperings_180SecondsMark"
      ]
    }
  },
  {
    "id": "ACT3_SE_AhrimanWhisperings_DesertTree1",
    "name": "ACT3_SE_AhrimanWhisperings_DesertTree1",
    "displayName": "Act 3: Ahriman Whispers (Desert Tree 1)",
    "kind": "item",
    "hash": "0x64f94f18",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_A3_SCE_CIN_Vision5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "ACT3_SCE_SE_AhrimanWhisperings_DesertTree1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "ACT3_SCE_SE_AhrimanWhisperings_DesertTree1"
      ]
    }
  },
  {
    "id": "ACT3_SE_FakeCredits",
    "name": "ACT3_SE_FakeCredits",
    "displayName": "Act 3: Fake Credits",
    "kind": "item",
    "hash": "0x0b9c8f85",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT3_FertileGround4",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_Doors_A3_SCE_SE_FakeCredits",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_Doors_A3_SCE_SE_FakeCredits"
      ]
    }
  },
  {
    "id": "ACT3_SE_FailsafeScenaricControl",
    "name": "ACT3_SE_FailsafeScenaricControl",
    "displayName": "Act 3: Failsafe Scenaric Control",
    "kind": "item",
    "hash": "0x2936ad95",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT3"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_A3_SCE_CIN_Vision5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3CDoors_A3_SCE_SE_FailsafeScenaricControl",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3CDoors_A3_SCE_SE_FailsafeScenaricControl"
      ]
    }
  },
  {
    "id": "HighCastle",
    "name": "HighCastle",
    "displayName": "The Palace (Concubine Region)",
    "kind": "item",
    "hash": "0x22528003",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "ACT2"
    ],
    "children": [
      "HC1",
      "HC1_ObjPlatform_FirstTime_Healed",
      "HC2",
      "HC2_ObjPlatform_FirstTime_Healed",
      "HC3_LAIR",
      "HC6",
      "HC6_ObjPlatform_FirstTime_Healed",
      "HC3_LairDone",
      "HC5",
      "HC5_ObjPlatform_FirstTime_Healed",
      "HC4_CentralPeak",
      "HC4_ObjPlatform_FirstTime_Healed",
      "HC4_CIN_ReturnToBlackGate",
      "HC_ArrivingInHC",
      "HC_ReturnInHC",
      "HC4_BG_Unlocked",
      "HC1_ElevatorUnblock_001",
      "HC34_PicDestruction",
      "HC4_DeactivateAfterBlackGateODD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "LavaRift",
    "name": "LavaRift",
    "displayName": "The City (Warrior Region)",
    "kind": "item",
    "hash": "0x22528001",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "ACT2"
    ],
    "children": [
      "LR1",
      "LR1_ObjPlatform_FirstTime_Healed",
      "LR3_LAIR",
      "LR6",
      "LR6_ObjPlatform_FirstTime_Healed",
      "LR4",
      "LR4_ObjPlatform_FirstTimeHealed",
      "LR2",
      "LR2_ObjPlatform_FirstTimeHealed",
      "LR5",
      "LR5_ObjPlatform_FirstTime_Healed",
      "LR_1stArriveInCirculation",
      "LR2_ReInitPuzzle",
      "LR5_BG_Unlocked",
      "CIN_1stArrive_in_Circulation",
      "LR5_DeactivateAfterBlackGateODD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "Observatory",
    "name": "Observatory",
    "displayName": "The Vale (Alchemist Region)",
    "kind": "item",
    "hash": "0x22528002",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "ACT2"
    ],
    "children": [
      "OB1",
      "OB1_ObjPlatform_FirstTime_Healed",
      "OB2",
      "OB2_ObjPlatform_FirstTime_Healed",
      "OB3_LAIR",
      "OB5",
      "OB6",
      "OB5_ObjPlatform_FirstTime_Healed",
      "OB6_ObjPlatform_FirstTime_Healed",
      "OB4",
      "OB4_ObjPlatform_FirstTime_Healed",
      "OB2_CIN_013_ReturningToTheBlackGate",
      "OB_FirstTimeInOB",
      "OB_ReturnInOB",
      "OB2_BG_Unlocked",
      "OB2_DeactivateAfterBlackGateODD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "RuinedCity",
    "name": "RuinedCity",
    "displayName": "The Citadel (Hunter Region)",
    "kind": "item",
    "hash": "0x22528000",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "ACT2"
    ],
    "children": [
      "RC1_ObjPlatform_FirstTime_Healed",
      "RC1_Windmill",
      "RC2_Guardtower",
      "RC2_ObjPlatform_FirstTime_Healed",
      "RC3_LAIR",
      "RC_SE_FirstTimeInCirculation",
      "RC5_Petra",
      "RC6_CityGate",
      "RC1_CIN_008_ReturningToTheBlackGate",
      "RC4_Terrace",
      "RC4_ObjPlatform_FirstTime_Healed",
      "RC1_BG_Unlocked",
      "RC6_PostHeal_Trigger",
      "RC13_CollapsingBridge",
      "RC_CloseBlackGateODD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "Desert",
    "name": "Desert",
    "displayName": "The Desert",
    "kind": "item",
    "hash": "0x85b48004",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "ACT2"
    ],
    "children": [
      "MourningKingFight_2ndPower",
      "MourningKingFight_4thPower",
      "Vision 4",
      "DE2_SCE_CIN_CorruptedIntro_OA_012",
      "DE3C_SCE_CIN_MK1_Encounter_OA_004",
      "DE3C_SCE_CIN_MK3",
      "DE3_SCE_CIN_002_PowerIntro",
      "DE3_SCE_SE_015_FirstTimeReturnToTemple",
      "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
      "PowerTutorial_Dash",
      "PowerTutorial_FlyOnBeam",
      "PowerTutorial_Grapple",
      "PowerTutorial_Rebound",
      "DE3C_MK4thFight_LDD",
      "Vision 2",
      "Vision3",
      "DE3C_MK2ndFight_LDD",
      "VO_SCR_DE_DE3_016",
      "PowerTutorialLDD",
      "PowerTutorialLDD_VariableHolder"
    ],
    "gates": [
      "Desert::op0",
      "Desert::op1",
      "Desert::op2"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "X6_FirstTimeHealing",
    "name": "X6_FirstTimeHealing",
    "displayName": "First Time Healing Any Fertile Ground",
    "kind": "item",
    "hash": "0x534eedd1",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "ACT2"
    ],
    "children": [
      "RC6_CIN_FirstTimeHealing",
      "HC6_CIN_FirstTimeHealing",
      "LR6_CIN_FirstTimeHealing",
      "OB6_CIN_FirstTimeHealing"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_CIN_FirstTimeHealing",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR6_CIN_FirstTimeHealing",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC6_CIN_FirstTimeHealing",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB6_CIN_FirstTimeHealing",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC6_CIN_FirstTimeHealing",
        "LR6_CIN_FirstTimeHealing",
        "RC6_CIN_FirstTimeHealing",
        "OB6_CIN_FirstTimeHealing"
      ]
    }
  },
  {
    "id": "X6_NotFirstTimeHealing",
    "name": "X6_NotFirstTimeHealing",
    "displayName": "Subsequent Healing Any Fertile Ground",
    "kind": "item",
    "hash": "0x534eedd2",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "ACT2"
    ],
    "children": [
      "RC6_CIN_NotFirstTimeHealing",
      "X6_AllBubblesHealed",
      "LR6_CIN_NotFirstTimeHealing",
      "OB6_CIN_NotFirstTimeHealing",
      "HC6_CIN_NotFirstTimeHealing"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "X6_FirstTimeHealing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "X6_AllBubblesHealed",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "X6_AllBubblesHealed"
      ]
    }
  },
  {
    "id": "Vision Manager",
    "name": "Vision Manager",
    "displayName": "Vision Manager",
    "kind": "item",
    "hash": "0x854bc004",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "ACT2"
    ],
    "children": [
      "GLO_Blackgate_OB_SCE_Loader",
      "GLO_Blackgate_LR_SCE_Loader",
      "GLO_Blackgate_HC_SCE_Loader",
      "GLO_Blackgate_RC_SCE_Loader"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "ACT2_ActivateElikaAbilities",
    "name": "ACT2_ActivateElikaAbilities",
    "displayName": "Act 2: Activate Elika Abilities",
    "kind": "item",
    "hash": "0x64c41815",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "ACT2_ActivateAllElikaMoves",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "ACT2_ActivateAllElikaMoves"
      ]
    }
  },
  {
    "id": "ACT2_OrmazhdPortal",
    "name": "ACT2_OrmazhdPortal",
    "displayName": "Act 2: Ormazhd Portal",
    "kind": "item",
    "hash": "0x22528004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_LAIR",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR3_LAIR",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC3_LAIR",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB3_LAIR",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A2_SCE_SE_OrmazhdPortal",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A2_SCE_SE_OrmazhdPortal"
      ]
    }
  },
  {
    "id": "CINE_BlackGate",
    "name": "CINE_BlackGate",
    "displayName": "Cutscene: Black Gate",
    "kind": "item",
    "hash": "0x5de7811f",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "ACT2"
    ],
    "children": [
      "CINE_BlarkGate_001",
      "CINE_BlarkGate_002",
      "CINE_BlarkGate_003",
      "CINE_BlarkGate_004",
      "CINE_BlarkGate_005_AfterFinalLair"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "CINE_BlarkGate_005_AfterFinalLair",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "CINE_BlarkGate_005_AfterFinalLair"
      ]
    }
  },
  {
    "id": "ACT2_HealedWorldODD",
    "name": "ACT2_HealedWorldODD",
    "displayName": "Act 2: Healed World Dialogue",
    "kind": "item",
    "hash": "0x7ddc2dfe",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_SCE_HealedWorldODD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_SCE_HealedWorldODD"
      ]
    }
  },
  {
    "id": "ACT1_006_MapTutorial",
    "name": "ACT1_006_MapTutorial",
    "displayName": "Act 1: Map Tutorial",
    "kind": "item",
    "hash": "0x25a9c002",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A1_SCE_CIN_MapTutorial",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A1_SCE_CIN_MapTutorial"
      ]
    }
  },
  {
    "id": "ACT2_OrmazhdGlowingDoor",
    "name": "ACT2_OrmazhdGlowingDoor",
    "displayName": "Act 2: Ormazhd Glowing Door",
    "kind": "item",
    "hash": "0xa70582db",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ACT2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_ActivateGlowingDoor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_ActivateGlowingDoor"
      ]
    }
  },
  {
    "id": "POWERS",
    "name": "POWERS",
    "displayName": "Power Plates",
    "kind": "item",
    "hash": "0x49ad8022",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "GLO_ODD_AfterFirstPowerUse",
      "TUTODASH_Dash",
      "TUTOREBOUND_Rebound",
      "TUTOFOB_FlyOnBeam",
      "TUTOGRAPPLE_Grapple",
      "TUTOFOB_FlyOnBeam2"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "VINES",
    "name": "VINES",
    "displayName": "Vines Traversal",
    "kind": "item",
    "hash": "0x49ad800b",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "LR6_Vines",
      "LR6_Vines2",
      "RC6_Vines",
      "RC6_Vines2",
      "RC6_Vines3",
      "JCT1_Vines",
      "RC6_Vines4",
      "RC6_Vines5",
      "JCT1_Vines3",
      "JCT1_Vines4and5",
      "JCT2_Vines",
      "JCT2_Vines3"
    ],
    "gates": [
      "VINES::op0",
      "VINES::op1",
      "VINES::op2",
      "VINES::op3"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "VINES::op0",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "VINES::op1",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "VINES::op2",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "VINES::op3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "VINES::op0",
        "VINES::op1",
        "VINES::op2",
        "VINES::op3"
      ]
    }
  },
  {
    "id": "SLIDES",
    "name": "SLIDES",
    "displayName": "Slides",
    "kind": "item",
    "hash": "0x49ad800a",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "HC6_Slide",
      "HC6_Slide2",
      "OB6_Slide",
      "JCT3_Slide"
    ],
    "gates": [
      "SLIDES::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "SLIDES::op0",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB6_Slide",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT3_Slide",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "SLIDES::op0",
        "OB6_Slide",
        "JCT3_Slide"
      ]
    }
  },
  {
    "id": "ROOFING",
    "name": "ROOFING",
    "displayName": "Ceiling Running (Roofing)",
    "kind": "item",
    "hash": "0x49ad8009",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "OB6_Roofing",
      "OB6_RoofingRing",
      "RC6_Roofing",
      "HC6_Roofing",
      "HC6_RoofRing",
      "LR6_Roofing",
      "RC6_RoofingRing"
    ],
    "gates": [
      "ROOFING::op0",
      "ROOFING::op1",
      "ROOFING::op2"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR6_Roofing",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "ROOFING::op0",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "ROOFING::op1",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "ROOFING::op2",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR6_Roofing",
        "ROOFING::op0",
        "ROOFING::op1",
        "ROOFING::op2"
      ]
    }
  },
  {
    "id": "POLE",
    "name": "POLE",
    "displayName": "Poles",
    "kind": "item",
    "hash": "0x49ad8008",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "HC6_Pole",
      "HC6_Pole2",
      "JCT1_Pole"
    ],
    "gates": [
      "POLE::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "POLE::op0",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT1_Pole",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "POLE::op0",
        "JCT1_Pole"
      ]
    }
  },
  {
    "id": "GRIPS",
    "name": "GRIPS",
    "displayName": "Wall Grips & Grip Falls",
    "kind": "item",
    "hash": "0x49ad8007",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "JCT1_VerticalRing",
      "JCT1_HorizontalRing",
      "JCT2_VerticalRing",
      "JCT2_HorizontalRing",
      "JCT3_HorizontalRing",
      "JCT3_VerticalRing"
    ],
    "gates": [
      "GRIPS::op0",
      "GRIPS::op1",
      "GRIPS::op2"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "GRIPS::op2",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "GRIPS::op1",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "GRIPS::op0",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "GRIPS::op2",
        "GRIPS::op1",
        "GRIPS::op0"
      ]
    }
  },
  {
    "id": "FERTILEGROUND",
    "name": "FERTILEGROUND",
    "displayName": "Fertile Grounds",
    "kind": "item",
    "hash": "0x49ad8006",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "OB6_Heal_FirstTime",
      "HC6_Heal_FirstTime",
      "RC6_Heal_FirstTime",
      "LR6_Heal_FirstTime",
      "OB6_Heal_NotFirstTime",
      "HC6_Heal_NotFirstTime",
      "RC6_Heal_NotFirstTime",
      "LR6_Heal_NotFirstTime"
    ],
    "gates": [
      "FERTILEGROUND::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "FERTILEGROUND::op0",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "FERTILEGROUND::op0"
      ]
    }
  },
  {
    "id": "COMPASS",
    "name": "COMPASS",
    "displayName": "Elika's Compass",
    "kind": "item",
    "hash": "0x49ad957d",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "JCT3_Compass3",
      "JCT2_Compass2",
      "JCT1_Compass"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT1_Compass",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT2_Compass2",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT3_Compass3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "JCT1_Compass",
        "JCT2_Compass2",
        "JCT3_Compass3"
      ]
    }
  },
  {
    "id": "BEAM",
    "name": "BEAM",
    "displayName": "Beams",
    "kind": "item",
    "hash": "0x49ad8002",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "JCT1_BeamPer",
      "HC6_BeamPer",
      "OB6_BeamPer"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB6_BeamPer",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC6_BeamPer",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT1_BeamPer",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB6_BeamPer",
        "HC6_BeamPer",
        "JCT1_BeamPer"
      ]
    }
  },
  {
    "id": "JCT1_LeapOfFaith",
    "name": "JCT1_LeapOfFaith",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Leap Of Faith",
    "kind": "item",
    "hash": "0x4e692d3e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_LeapOfFaith_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_LeapOfFaith_SCE_001"
      ]
    }
  },
  {
    "id": "OB6_Gripfall",
    "name": "OB6_Gripfall",
    "displayName": "Cauldron: Grip Fall",
    "kind": "item",
    "hash": "0x38550fbe",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_Gripfall",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_Gripfall"
      ]
    }
  },
  {
    "id": "HC6_Attack",
    "name": "HC6_Attack",
    "displayName": "Cavern: Attack",
    "kind": "item",
    "hash": "0x3922f9d0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tutorial_Attack",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tutorial_Attack"
      ]
    }
  },
  {
    "id": "CANYON_TEMPLE",
    "name": "CANYON_TEMPLE",
    "displayName": "Canyon Temple",
    "kind": "item",
    "hash": "0x49ad8001",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "DE1_Jump2",
      "DE1_WallrunH",
      "DE1_WallrunHJump",
      "DE1_WallrunV",
      "DE1_WallrunVJump",
      "DE1_WallrunHJump2",
      "DE1_Jump",
      "DE1_WallrunH2",
      "DE1_WallrunHJump3",
      "DE1_Gripfall",
      "DE3_Lever",
      "DE3_WallrunV",
      "DE3_Cracks",
      "DE3_Gripfall",
      "DE3_Ringswitch",
      "DE3_CoopJump",
      "DE3_DoubleWallRun",
      "DE3_Cracks2",
      "DE1_CAMERA",
      "DE1_ODD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Act1",
    "requirements": [
      {
        "source": "DE3_CoopJump",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "DE3_CoopJump"
      ]
    }
  },
  {
    "id": "JCT1_Cracks4",
    "name": "JCT1_Cracks4",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Wall Cracks 4",
    "kind": "item",
    "hash": "0x4e693ab9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Cracks4_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Cracks4_SCE_001"
      ]
    }
  },
  {
    "id": "JCT1_Cracks5",
    "name": "JCT1_Cracks5",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Wall Cracks 5",
    "kind": "item",
    "hash": "0x72008467",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Cracks5_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Cracks5_SCE_001"
      ]
    }
  },
  {
    "id": "ALL_NoDestination",
    "name": "ALL_NoDestination",
    "displayName": "Global: No Destination Set",
    "kind": "item",
    "hash": "0x764dcde2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_ODD2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_SCE_TUTO_SetDestination",
        "terminationOutputIdx": 1
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_SCE_TUTO_SetDestination"
      ]
    }
  },
  {
    "id": "RC6_Gripfall2",
    "name": "RC6_Gripfall2",
    "displayName": "King's Gate: Grip Fall 2",
    "kind": "item",
    "hash": "0x38d44007",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Gripfall2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Gripfall2"
      ]
    }
  },
  {
    "id": "RC6_Gripfall3",
    "name": "RC6_Gripfall3",
    "displayName": "King's Gate: Grip Fall 3",
    "kind": "item",
    "hash": "0x38d44008",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Gripfall3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Gripfall3"
      ]
    }
  },
  {
    "id": "COOP",
    "name": "COOP",
    "displayName": "Co-op Acrobatic Actions",
    "kind": "item",
    "hash": "0x49ad8004",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "JCT3_CoopJump",
      "JCT2_CoopJump",
      "JCT1_CoopJump"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT1_CoopJump",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT2_CoopJump",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT3_CoopJump",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "CANYON_TEMPLE",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "JCT1_CoopJump",
        "JCT2_CoopJump",
        "JCT3_CoopJump"
      ]
    }
  },
  {
    "id": "COLUMN",
    "name": "COLUMN",
    "displayName": "Columns",
    "kind": "item",
    "hash": "0x49ad8003",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "OB6_Column2",
      "RC6_Column3",
      "RC6_Column2",
      "OB6_Column",
      "LR6_Column",
      "LR6_Column2",
      "RC6_Column",
      "JCT2_Column",
      "JCT2_Colum2",
      "JCT2_Column3",
      "JCT2_Column4",
      "JCT3_Column",
      "JCT3_Column2",
      "JCT3_Column4",
      "JCT3_Column3"
    ],
    "gates": [
      "COLUMN::op0",
      "COLUMN::op1",
      "COLUMN::op2",
      "COLUMN::op3",
      "COLUMN::op4"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "COLUMN::op0",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "COLUMN::op1",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "COLUMN::op2",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "COLUMN::op3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "COLUMN::op4",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "COLUMN::op0",
        "COLUMN::op1",
        "COLUMN::op2",
        "COLUMN::op3",
        "COLUMN::op4"
      ]
    }
  },
  {
    "id": "CRACKS",
    "name": "CRACKS",
    "displayName": "Wall Cracks",
    "kind": "item",
    "hash": "0x49ad8005",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "JCT1_Cracks",
      "JCT3_CracksAndCracks2"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT3_CracksAndCracks2",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT1_Cracks",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT2_Cracks",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "JCT3_CracksAndCracks2",
        "JCT1_Cracks"
      ]
    }
  },
  {
    "id": "RC6_Gripfall",
    "name": "RC6_Gripfall",
    "displayName": "King's Gate: Grip Fall",
    "kind": "item",
    "hash": "0x57704004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Gripfall",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Gripfall"
      ]
    }
  },
  {
    "id": "DE3_ODD2",
    "name": "DE3_ODD2",
    "displayName": "Temple Grounds: Dialogue 2",
    "kind": "item",
    "hash": "0x674149c3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "CANYON_TEMPLE",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_ODD2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_ODD2"
      ]
    }
  },
  {
    "id": "AfterHealMap_CollectSparkles",
    "name": "AfterHealMap_CollectSparkles",
    "displayName": "Post-Heal Map: Collect Light Seeds",
    "kind": "item",
    "hash": "0xb5204320",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "OB6_CollectSparkles",
      "LR6_CollectSparkles",
      "HC6_CollectSparkles",
      "RC6_CollectSparkles"
    ],
    "gates": [
      "AfterHealMap_CollectSparkles::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "AfterHealMap_CollectSparkles::op0",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "AfterHealMap_CollectSparkles::op0"
      ]
    }
  },
  {
    "id": "TEM_BuyPower3",
    "name": "TEM_BuyPower3",
    "displayName": "Temple: Unlock 3rd Power",
    "kind": "item",
    "hash": "0x6a3dc214",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_BuyPower3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_BuyPower3"
      ]
    }
  },
  {
    "id": "ALL_BuyPower_Warp",
    "name": "ALL_BuyPower_Warp",
    "displayName": "Global: Warp on Power Unlock",
    "kind": "item",
    "hash": "0x6901c118",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "Vision 4",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_SCE_TUTO_BuyPower",
        "terminationOutputIdx": 1
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_SCE_TUTO_BuyPower"
      ]
    }
  },
  {
    "id": "PUZZLES",
    "name": "PUZZLES",
    "displayName": "Puzzles",
    "kind": "item",
    "hash": "0x6cccc034",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "OB4_ODD3",
      "RC_TUT_ODD3",
      "HC_ODD3"
    ],
    "gates": [
      "PUZZLES::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "PUZZLES::op0",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "PUZZLES::op0"
      ]
    }
  },
  {
    "id": "JCT3_Cracks3",
    "name": "JCT3_Cracks3",
    "displayName": "Junction 3 (Palace / City / Desert): Wall Cracks 3",
    "kind": "item",
    "hash": "0x74bfd28d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT2_Cracks",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT1_Cracks3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_Cracks_SCE_002",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_Cracks_SCE_002"
      ]
    }
  },
  {
    "id": "JCT1_BeamAbove",
    "name": "JCT1_BeamAbove",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Beam Above",
    "kind": "item",
    "hash": "0x720083b0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB6_BeamAbove",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_BeamAbove_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_BeamAbove_SCE_001"
      ]
    }
  },
  {
    "id": "OB6_BeamAbove",
    "name": "OB6_BeamAbove",
    "displayName": "Cauldron: Beam Above",
    "kind": "item",
    "hash": "0x500867c7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT1_BeamAbove",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_BeamAbove",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_BeamAbove"
      ]
    }
  },
  {
    "id": "JCT2_Cracks",
    "name": "JCT2_Cracks",
    "displayName": "Junction 2 (Vale / Palace / Desert): Wall Cracks",
    "kind": "item",
    "hash": "0x73448c43",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT1_Cracks3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT3_Cracks3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_Cracks_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_Cracks_SCE_000"
      ]
    }
  },
  {
    "id": "JCT1_Cracks3",
    "name": "JCT1_Cracks3",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Wall Cracks 3",
    "kind": "item",
    "hash": "0x72008096",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT2_Cracks",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "JCT3_Cracks3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Cracks3_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Cracks3_SCE_001"
      ]
    }
  },
  {
    "id": "ALL_SpeedKill",
    "name": "ALL_SpeedKill",
    "displayName": "Global: Speed Kill",
    "kind": "item",
    "hash": "0xb6e008a5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "ACT1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "ACT2",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_SCE_TUTO_SpeedKill",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_SCE_TUTO_SpeedKill"
      ]
    }
  },
  {
    "id": "ALL_ODD_LEARN",
    "name": "ALL_ODD_LEARN",
    "displayName": "Global: Dialogue Tutorial",
    "kind": "item",
    "hash": "0xc7ec802a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_SCE_TUTO_ODD_LEARN",
        "terminationOutputIdx": 1
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_SCE_TUTO_ODD_LEARN"
      ]
    }
  },
  {
    "id": "AfterHealMap_SetDestination",
    "name": "AfterHealMap_SetDestination",
    "displayName": "Post-Heal Map: Set Destination",
    "kind": "item",
    "hash": "0xe6354024",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "AcrobaticTutorials"
    ],
    "children": [
      "OB6_SetDestination",
      "HC6_SetDestination",
      "RC6_SetDestination",
      "LR6_SetDestination"
    ],
    "gates": [
      "AfterHealMap_SetDestination::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TEM_BuyPower3",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "AfterHealMap_SetDestination::op0",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "AfterHealMap_SetDestination::op0"
      ]
    }
  },
  {
    "id": "HC1",
    "name": "HC1",
    "displayName": "Spire of Dreams",
    "kind": "item",
    "hash": "0x1310cacd",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HighCastle"
    ],
    "children": [
      "HC1_001_ElikaCapture",
      "HC1_002_ConcubineAttacks",
      "HC1_003_ConcubineEscapes",
      "HC1_ObjectivePlatform",
      "HC1_FertileGround",
      "HC1_Arrival_on_Platform",
      "HC1_1st_Illusion",
      "HC1_2nd_Illusion",
      "HC1_014_ElevatorPrinceTalk",
      "HC1_Elika_Freed",
      "HC1_Arrival_at_Elevator",
      "HC1_Elevator_Talks",
      "HC1_ReturnInCirculation",
      "HC1_ArrivalInCirculation",
      "HC1_ElevatorUnblock",
      "HC1_BossFight_LDD",
      "HC1_ElikaCaptureCol_Logic",
      "HC1_SE_016_Concubine_Tower_Taunts"
    ],
    "gates": [
      "HC1::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC1_FertileGround"
      ]
    }
  },
  {
    "id": "HC1_ObjPlatform_FirstTime_Healed",
    "name": "HC1_ObjPlatform_FirstTime_Healed",
    "displayName": "Spire of Dreams: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x1310cace",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_XXX_ObjectivePlatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_XXX_ObjectivePlatform_V5"
      ]
    }
  },
  {
    "id": "HC2",
    "name": "HC2",
    "displayName": "Royal Gardens",
    "kind": "item",
    "hash": "0x1cea8000",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HighCastle"
    ],
    "children": [
      "HC2_001_1stPuzzle",
      "HC2_002_2ndPuzzle",
      "HC2_ObjPlatform_PuzzleCompleted",
      "HC2_005_FightSequence",
      "HC2_SE_ArrivingInCirculation",
      "HC2_ObjectivePlatform",
      "HC2_ObjPlatform_PuzzleNotCompleted",
      "HC2_000_PresentationPuzzle",
      "HC2_PuzzleEndSaveState",
      "HC2_FertileGround_001",
      "First Gate Open - Corruption Flowing",
      "First Gate Open - Corruption Not Flowing",
      "HC2_BossFight_LDD",
      "HC2_Puzzle1stSaveState",
      "HC2_LoverFightStatusMonitor",
      "HC2_EndofFight_Lo_Down",
      "HC2_EndofFight_Lo_Up"
    ],
    "gates": [
      "HC2::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_FertileGround_001",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC2_FertileGround_001"
      ]
    }
  },
  {
    "id": "HC2_ObjPlatform_FirstTime_Healed",
    "name": "HC2_ObjPlatform_FirstTime_Healed",
    "displayName": "Royal Gardens: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x1cea8014",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "HC3_LAIR",
    "name": "HC3_LAIR",
    "displayName": "Palace Rooms (Concubine Lair)",
    "kind": "item",
    "hash": "0x2252800d",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HighCastle"
    ],
    "children": [
      "HC3_ClosingDoors",
      "HC3_Fight03_ResumeElikaForSaveMe",
      "HC3_After_Final_Fight",
      "HC3_Fight01_Manager",
      "HC3_Fight01_Counter_01",
      "HC3_Fight01_WatchConcubineHealth",
      "HC3_ClosingDoors2",
      "HC3_After_Healing",
      "HC3_Fight03_CaptureElika",
      "HC3_Fight03_StartFightAfterSaveMe",
      "HC3_Fight02_WatchConcubineHealth",
      "HC3_BossFight01_LDD",
      "HC3_BossFight03_LDD"
    ],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_After_Healing",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC3_After_Healing"
      ]
    }
  },
  {
    "id": "HC6",
    "name": "HC6",
    "displayName": "Cavern",
    "kind": "item",
    "hash": "0x2d70c795",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HighCastle"
    ],
    "children": [
      "HC6_SCE_DestroyedColumnTeleport",
      "HC6_SCE_ObjectivePlatform",
      "HC6_SCE_UnplugElika",
      "HC6_SCE_ThirdIllusionDead",
      "HC6_SCE_FirstIlusionDead",
      "HC6_SCE_ArrivingInCirculation",
      "HC6_SCE_ReturnInCirculation",
      "HC6_SCE_ElikaBarks",
      "HC6_SCE_SecondIllusionDead",
      "HC6_SCE_EndFight",
      "HC6_SCE_FightIntro",
      "HC6_SCE_FightLDD",
      "HC6_SCE_ConcubineOnFightPlatform",
      "HC6_CapturedElika_Colmap",
      "HC6_SCE_FirstConcubineAtmosphere",
      "HC6_SCE_SecondConcubineAtmosphere",
      "HC6_SCE_ThirdConcubineAtmosphere",
      "HC6_SCE_RemoveJumpAbility"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_EndFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC6_SCE_EndFight"
      ]
    }
  },
  {
    "id": "HC6_ObjPlatform_FirstTime_Healed",
    "name": "HC6_ObjPlatform_FirstTime_Healed",
    "displayName": "Cavern: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x2d70c797",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SE_XXX_ObjectivePlatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SE_XXX_ObjectivePlatform_V3"
      ]
    }
  },
  {
    "id": "HC3_LairDone",
    "name": "HC3_LairDone",
    "displayName": "Palace Rooms (Concubine Lair): Lair Done",
    "kind": "item",
    "hash": "0x2db9402e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_LAIR",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "HC5",
    "name": "HC5",
    "displayName": "Royal Spire",
    "kind": "item",
    "hash": "0x46d9408f",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HighCastle"
    ],
    "children": [
      "HC5_ObjectivePlatform",
      "HC5_001_FightIntro",
      "HC5_002_FightEnd",
      "HC5_FertileGround",
      "HC5_003_Arriving_In_Circulation",
      "HC5_003_Arriving_On_Platform",
      "HC5_Leaving_Bubble",
      "HC5_IntroToConcubine",
      "HC5_FinalPlatform",
      "HC5_ReturnInCirculation",
      "HC5_FightLDD",
      "HC5_Fight_ElikaMonitor",
      "HC5_ODD_FailedGrapple"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_Leaving_Bubble",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC5_Leaving_Bubble"
      ]
    }
  },
  {
    "id": "HC5_ObjPlatform_FirstTime_Healed",
    "name": "HC5_ObjPlatform_FirstTime_Healed",
    "displayName": "Royal Spire: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x46d94090",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_SE_XXX_Objectiveplatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_SE_XXX_Objectiveplatform_V5"
      ]
    }
  },
  {
    "id": "HC4_CentralPeak",
    "name": "HC4_CentralPeak",
    "displayName": "Coronation Hall",
    "kind": "item",
    "hash": "0x47040d45",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HighCastle"
    ],
    "children": [
      "HC4_CIN_ConcubineEscapes",
      "HC4_Objective_Platform",
      "HC4_SE_ConcubineReturns",
      "HC4_CIN_ElikaTrapped",
      "HC4_SE_1rstillusion",
      "HC4_SE_IfPlayerDiesWhenElikaTrappedActivate2ndCOL",
      "HC4_SE_4thIllusion",
      "HC4_SE_ActivateFertileGround",
      "HC4_FertileGround",
      "HC4_SE_Elika_Returns",
      "HC4_SE_TrapsReleased",
      "HC4_SE_BossFightLDD",
      "HC4_SE_ExtendedDeathHeightSlides",
      "HC4_SE_RingSwitch1",
      "HC4_SE_RingSwitch2",
      "HC4_SE_KeepElikaTrapped",
      "HC4_SE_2ndillusion",
      "HC4_SE_3rdillusion"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC4_FertileGround"
      ]
    }
  },
  {
    "id": "HC4_ObjPlatform_FirstTime_Healed",
    "name": "HC4_ObjPlatform_FirstTime_Healed",
    "displayName": "Coronation Hall: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x50673f9d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_CentralPeak",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_Objectiveplatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_Objectiveplatform_V5"
      ]
    }
  },
  {
    "id": "HC4_CIN_ReturnToBlackGate",
    "name": "HC4_CIN_ReturnToBlackGate",
    "displayName": "Coronation Hall: Cutscene: Return To Black Gate",
    "kind": "item",
    "hash": "0x56ca9ff2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_LAIR",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_CIN_020_ReturningToBlackGate",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_CIN_020_ReturningToBlackGate"
      ]
    }
  },
  {
    "id": "HC_ArrivingInHC",
    "name": "HC_ArrivingInHC",
    "displayName": "Palace: First Arrival",
    "kind": "item",
    "hash": "0xa27ed61a",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HighCastle"
    ],
    "children": [
      "HC1_ArrivingInHC",
      "HC5_ArrivingInHC",
      "HC6_ArrivingInHC"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_ArrivingInHC",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC5_ArrivingInHC",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC6_ArrivingInHC",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC1_ArrivingInHC",
        "HC5_ArrivingInHC",
        "HC6_ArrivingInHC"
      ]
    }
  },
  {
    "id": "HC_ReturnInHC",
    "name": "HC_ReturnInHC",
    "displayName": "Palace: Return Arrival",
    "kind": "item",
    "hash": "0xa27ed61b",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC_ArrivingInHC",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "HC4_BG_Unlocked",
    "name": "HC4_BG_Unlocked",
    "displayName": "Coronation Hall: Black Gate Unlocked",
    "kind": "item",
    "hash": "0x7b8b9267",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_CentralPeak",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_CIN_019_BG_Unlocked_Not1stLair",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_CIN_019_BG_Unlocked_Not1stLair"
      ]
    }
  },
  {
    "id": "HC1_ElevatorUnblock_001",
    "name": "HC1_ElevatorUnblock_001",
    "displayName": "Spire of Dreams: Elevator Unblock 1",
    "kind": "item",
    "hash": "0x81791ee7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_ElevatorUnblock_001",
        "terminationOutputIdx": 1
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_ElevatorUnblock_001"
      ]
    }
  },
  {
    "id": "HC34_PicDestruction",
    "name": "HC34_PicDestruction",
    "displayName": "Palace Rooms <-> Coronation Hall: Picture Destruction",
    "kind": "item",
    "hash": "0x9e84c21b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC34_SCE_PickDestruction",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC34_SCE_PickDestruction"
      ]
    }
  },
  {
    "id": "HC4_DeactivateAfterBlackGateODD",
    "name": "HC4_DeactivateAfterBlackGateODD",
    "displayName": "Coronation Hall: Deactivate After Black Gate Dialogue",
    "kind": "item",
    "hash": "0xdefccd60",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HighCastle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_ODD_DeactivateFirstBlackGate",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_ODD_DeactivateFirstBlackGate"
      ]
    }
  },
  {
    "id": "LR1",
    "name": "LR1",
    "displayName": "Tower of Ormazd",
    "kind": "item",
    "hash": "0x06c5a281",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LavaRift"
    ],
    "children": [
      "LR1_ObjectivePlatform",
      "LR1_WarriorFight_Sequence",
      "LR1_SE_026_GPBubbleHealing",
      "LR1_TOWER_COLLAPSE",
      "LR1_SE_018_1stBalcony",
      "LR1_FertileGround",
      "LR1_Tower_Collapse_014",
      "LR1_TOWER_COLLAPSE_013"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR1_FertileGround"
      ]
    }
  },
  {
    "id": "LR1_ObjPlatform_FirstTime_Healed",
    "name": "LR1_ObjPlatform_FirstTime_Healed",
    "displayName": "Tower of Ormazd: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x0d41d0e1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LavaRift"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_Objectiveplatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SCE_SE_Objectiveplatform_V5"
      ]
    }
  },
  {
    "id": "LR3_LAIR",
    "name": "LR3_LAIR",
    "displayName": "Warrior's Fortress",
    "kind": "item",
    "hash": "0x2252800b",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LavaRift"
    ],
    "children": [
      "LR3_SCE_WARRIOR_Stage1",
      "LR3_SCE_WARRIOR_Stage2",
      "LR35_CIN_007_AfterEscapingFortress",
      "LR35_StickCollapse_05",
      "LR3_CIN_002_FightPlatform",
      "LR35_StickCollapse_01",
      "LR35_StickCollapse_02",
      "LR35_StickCollapse_03",
      "LR35_StickCollapse_04",
      "LR3_SCE_WARRIOR_Outro",
      "LR3_SCE_Warrior_LDD_001",
      "LR3_SCE_WARRIOR_TAUNT",
      "LR3_CIN_ArriveAtStick"
    ],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR35_CIN_007_AfterEscapingFortress",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR35_CIN_007_AfterEscapingFortress"
      ]
    }
  },
  {
    "id": "LR6",
    "name": "LR6",
    "displayName": "City Gate",
    "kind": "item",
    "hash": "0x155214de",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LavaRift"
    ],
    "children": [
      "LR6_ObjectivePlatform",
      "LR6_SCE_Collapse_03",
      "LR6_SCE_FIGHT",
      "LR6_SCE_WarriorWatches",
      "LR6_FightIntro",
      "LR6_SCE_FightOutro",
      "LR6_SCE_Warrior_LDD",
      "LR6_SCE_Collapse_02",
      "LR6_SCE_Collapse_01"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SCE_FightOutro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR6_SCE_FightOutro"
      ]
    }
  },
  {
    "id": "LR6_ObjPlatform_FirstTime_Healed",
    "name": "LR6_ObjPlatform_FirstTime_Healed",
    "displayName": "City Gate: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x20da4654",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LavaRift"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "LR4",
    "name": "LR4",
    "displayName": "Queen's Tower",
    "kind": "item",
    "hash": "0x3c37807a",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LavaRift"
    ],
    "children": [
      "LR4_ObjectivePlatform",
      "LR4_FertileGround",
      "LR4_Fight",
      "LR4_ExitDoor",
      "LR4_SE_012_EnteringBubble",
      "LR4_SCE_Warrior_LDD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4_ExitDoor",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR4_ExitDoor"
      ]
    }
  },
  {
    "id": "LR4_ObjPlatform_FirstTimeHealed",
    "name": "LR4_ObjPlatform_FirstTimeHealed",
    "displayName": "Queen's Tower: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x3c37807b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LavaRift"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_SCE_SE_Objectiveplatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_SCE_SE_Objectiveplatform_V5"
      ]
    }
  },
  {
    "id": "LR2",
    "name": "LR2",
    "displayName": "Tower of Ahriman",
    "kind": "item",
    "hash": "0x3e11c013",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LavaRift"
    ],
    "children": [
      "LR2_ObjectivePlatform",
      "LR2_ObjPlatform_PuzzleNotCompleted",
      "LR2_Puzzles_Challenges",
      "LR2_002_Fight",
      "LR2_001_ChallengeBeginning",
      "LR2_004_FertileGround",
      "LR2_EndOfFight",
      "LR2_SCE_Warrior_LDD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_004_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR2_004_FertileGround"
      ]
    }
  },
  {
    "id": "LR2_ObjPlatform_FirstTimeHealed",
    "name": "LR2_ObjPlatform_FirstTimeHealed",
    "displayName": "Tower of Ahriman: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x3e11c016",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LavaRift"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "LR5",
    "name": "LR5",
    "displayName": "City of Light",
    "kind": "item",
    "hash": "0x45628003",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LavaRift"
    ],
    "children": [
      "LR5_ObjectivePlatform",
      "LR5_TrapRelease",
      "LR5_Fight",
      "LR5_FightIntro",
      "LR5_FertileGround",
      "LR5_SE_019_WarriorTrapped",
      "LR5_MiddleOfWallRun",
      "LR5_CallElikaWhenHealing",
      "LR5_Warriorlooping"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR5_FertileGround"
      ]
    }
  },
  {
    "id": "LR5_ObjPlatform_FirstTime_Healed",
    "name": "LR5_ObjPlatform_FirstTime_Healed",
    "displayName": "City of Light: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x45628004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LavaRift"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SCE_SE_ObjectivePlatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SCE_SE_ObjectivePlatform_V5"
      ]
    }
  },
  {
    "id": "LR_1stArriveInCirculation",
    "name": "LR_1stArriveInCirculation",
    "displayName": "City: First Arrival in Circulation",
    "kind": "item",
    "hash": "0x5b73c005",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LavaRift"
    ],
    "children": [
      "LR6_SE_002_1stArriveInCirculation",
      "LR1_ODD_003_1stArriveInCirculation"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SE_002_1stArriveInCirculation",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR1_ODD_003_1stArriveInCirculation",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR6_SE_002_1stArriveInCirculation",
        "LR1_ODD_003_1stArriveInCirculation"
      ]
    }
  },
  {
    "id": "LR2_ReInitPuzzle",
    "name": "LR2_ReInitPuzzle",
    "displayName": "Tower of Ahriman: Re Init Puzzle",
    "kind": "item",
    "hash": "0xb28549ef",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LavaRift"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_Puzzles_Challenges",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SCE_ReInitPuzzle",
        "terminationOutputIdx": 1
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_ReInitPuzzle"
      ]
    }
  },
  {
    "id": "LR5_BG_Unlocked",
    "name": "LR5_BG_Unlocked",
    "displayName": "City of Light: Black Gate Unlocked",
    "kind": "item",
    "hash": "0x7b841e52",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LavaRift"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_CIN_012_BG_UnlockedNot1stLair",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_CIN_012_BG_UnlockedNot1stLair"
      ]
    }
  },
  {
    "id": "CIN_1stArrive_in_Circulation",
    "name": "CIN_1stArrive_in_Circulation",
    "displayName": "Cutscene: First Arrival in Circulation",
    "kind": "item",
    "hash": "0xa7876a41",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LavaRift"
    ],
    "children": [
      "LR4_CIN_1stArrive_in_Circulation",
      "LR1_CIN_1stArrive_in_Circulation"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4_CIN_1stArrive_in_Circulation",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR1_CIN_1stArrive_in_Circulation",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR4_CIN_1stArrive_in_Circulation",
        "LR1_CIN_1stArrive_in_Circulation"
      ]
    }
  },
  {
    "id": "LR5_DeactivateAfterBlackGateODD",
    "name": "LR5_DeactivateAfterBlackGateODD",
    "displayName": "City of Light: Deactivate After Black Gate Dialogue",
    "kind": "item",
    "hash": "0xdeeffd31",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LavaRift"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SCE_ODD_DeactivateFirstBlackGate",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SCE_ODD_DeactivateFirstBlackGate"
      ]
    }
  },
  {
    "id": "OB1",
    "name": "OB1",
    "displayName": "Machinery Ground",
    "kind": "item",
    "hash": "0x07c14042",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "Observatory"
    ],
    "children": [
      "OB1_001_BossFight",
      "OB1_CIN_HealingOnPlatforms",
      "OB1_ObjectivePlatform",
      "OB1_003_Poison",
      "OB1_004_PoisonCleansed",
      "OB1_SCE_SE_ArrivingInCirculationFirstTime",
      "OB1_SCE_SE_ReturningInCirculation",
      "OB1_FertileGround",
      "OB1_BossFightLDD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_004_PoisonCleansed",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB1_004_PoisonCleansed"
      ]
    }
  },
  {
    "id": "OB1_ObjPlatform_FirstTime_Healed",
    "name": "OB1_ObjPlatform_FirstTime_Healed",
    "displayName": "Machinery Ground: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x07c1406e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Observatory"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_XXX_Objectiveplatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_SE_XXX_Objectiveplatform_V5"
      ]
    }
  },
  {
    "id": "OB2",
    "name": "OB2",
    "displayName": "Heaven's Stair",
    "kind": "item",
    "hash": "0x16e74067",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "Observatory"
    ],
    "children": [
      "OB2_ObjectivePlatform",
      "OB2_001_GenericFight",
      "OB2_002_ChallengeIntro",
      "OB2_003_GooGasActivation",
      "OB2_005_BossFight",
      "OB2_004_Challenge",
      "OB2_PowerPlateCovers",
      "OB2_SCE_FertileGround_001",
      "OB2_SCE_SE_RingSwitches_Activated",
      "OB2_SCE_ODD_AcrossFightGate",
      "OB2_SCE_ArrivingAtTopOfElevator",
      "OB2_SCE_ODD_ArrivingInCirculation",
      "OB2_FightDoor_Activation",
      "OB2_FightKillMonitor",
      "OB2_BossFight_LDD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_SCE_FertileGround_001",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB2_SCE_FertileGround_001"
      ]
    }
  },
  {
    "id": "OB2_ObjPlatform_FirstTime_Healed",
    "name": "OB2_ObjPlatform_FirstTime_Healed",
    "displayName": "Heaven's Stair: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x16e74068",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Observatory"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "OB3_LAIR",
    "name": "OB3_LAIR",
    "displayName": "Observatory (Alchemist Lair)",
    "kind": "item",
    "hash": "0x2146003e",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "Observatory"
    ],
    "children": [
      "OB3_004_FinalFight",
      "OB3_001_FirstFight",
      "OB3_002_GenericFight_001",
      "OB3_003_GenericFight_002",
      "OB3_FightMechanics",
      "OB3_ResetStage",
      "OB3_FinalFightLDD",
      "OB3_FirstFightLDD"
    ],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB3_004_FinalFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB3_004_FinalFight"
      ]
    }
  },
  {
    "id": "OB5",
    "name": "OB5",
    "displayName": "Reservoir",
    "kind": "item",
    "hash": "0x23ee80a4",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "Observatory"
    ],
    "children": [
      "OB5_FightMechanics",
      "OB5_ObjectivePlatform",
      "OB5_001_BossIntroduction",
      "OB5_002_BossFight",
      "OB5_003_BossEnd",
      "OB5_SE_ArrivingInCirulationFirstTime",
      "OB5_FertileGround",
      "OB5_BossTaunts"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB5_FertileGround"
      ]
    }
  },
  {
    "id": "OB6",
    "name": "OB6",
    "displayName": "Cauldron",
    "kind": "item",
    "hash": "0x23ee80a5",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "Observatory"
    ],
    "children": [
      "OB6_ObjectivePlatform",
      "OB6_001_AlchemistIntroduction",
      "OB6_002_BossFight",
      "OB6_003_FightEnd",
      "OB6_GooRising",
      "OB6_SCE_SE_RoofingTutorial",
      "OB6_SCE_SE_IfPlayerGoesWrongWay",
      "OB6_SCE_004_Circulation_NotFirstTime",
      "OB6_SCE_002_Circulation_FirstTime",
      "OB6_AlchemistDeathCheck",
      "OB6_BossTaunts"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_003_FightEnd",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB6_003_FightEnd"
      ]
    }
  },
  {
    "id": "OB5_ObjPlatform_FirstTime_Healed",
    "name": "OB5_ObjPlatform_FirstTime_Healed",
    "displayName": "Reservoir: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x23ee80a6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Observatory"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_SE_XXX_ObjectivePlatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_SE_XXX_ObjectivePlatform_V5"
      ]
    }
  },
  {
    "id": "OB6_ObjPlatform_FirstTime_Healed",
    "name": "OB6_ObjPlatform_FirstTime_Healed",
    "displayName": "Cauldron: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x23ee80a7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Observatory"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_SE_XXX_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_SE_XXX_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "OB4",
    "name": "OB4",
    "displayName": "Construction Yard",
    "kind": "item",
    "hash": "0x40138a34",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "Observatory"
    ],
    "children": [
      "OB4_ObjectivePlatform",
      "OB4_001_PuzzleIntroduction",
      "OB4_002_Puzzle",
      "OB4_003_BossIntro",
      "OB4_004_BossEnd",
      "OB4_SCE_014_ElikaLeverSpeech",
      "OB4_SCE_SE_ArrivingInCirculation",
      "OB4_FertileGround",
      "OB4_SCE_PivotingPlatformState",
      "OB4_BossTaunts",
      "OB4_DeathCheck"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB4_FertileGround"
      ]
    }
  },
  {
    "id": "OB4_ObjPlatform_FirstTime_Healed",
    "name": "OB4_ObjPlatform_FirstTime_Healed",
    "displayName": "Construction Yard: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x40138a35",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Observatory"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_SE_XXX_Objectiveplatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_SE_XXX_Objectiveplatform_V5"
      ]
    }
  },
  {
    "id": "OB2_CIN_013_ReturningToTheBlackGate",
    "name": "OB2_CIN_013_ReturningToTheBlackGate",
    "displayName": "Heaven's Stair: Cutscene - Return to Black Gate",
    "kind": "item",
    "hash": "0x573800f6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Observatory"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB3_LAIR",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_CIN_013_ReturningToTheBlackGate",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 0,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "OB2_TRIGGER_Checkpoint_012"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "OB2_TRIGGER_Checkpoint_012"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_CIN_013_ReturningToTheBlackGate"
      ]
    }
  },
  {
    "id": "OB_FirstTimeInOB",
    "name": "OB_FirstTimeInOB",
    "displayName": "Vale: First Arrival",
    "kind": "item",
    "hash": "0x9c8a5797",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "Observatory"
    ],
    "children": [
      "OB6_FirstTimeInOB",
      "OB1_FirstTimeInOB",
      "OB5_FirstTimeInOB"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_FirstTimeInOB",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB5_FirstTimeInOB",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB6_FirstTimeInOB",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB1_FirstTimeInOB",
        "OB5_FirstTimeInOB",
        "OB6_FirstTimeInOB"
      ]
    }
  },
  {
    "id": "OB_ReturnInOB",
    "name": "OB_ReturnInOB",
    "displayName": "Vale: Return Arrival",
    "kind": "item",
    "hash": "0x9c8a5798",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "Observatory"
    ],
    "children": [
      "OB1_ReturnInOB",
      "OB5_ReturnInOB"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB_FirstTimeInOB",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB1_ReturnInOB",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB5_ReturnInOB",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB1_ReturnInOB",
        "OB5_ReturnInOB"
      ]
    }
  },
  {
    "id": "OB2_BG_Unlocked",
    "name": "OB2_BG_Unlocked",
    "displayName": "Heaven's Stair: Black Gate Unlocked",
    "kind": "item",
    "hash": "0x7b8b926c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Observatory"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_CIN_012_BG_Unlocked_Not1stLair",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_CIN_012_BG_Unlocked_Not1stLair"
      ]
    }
  },
  {
    "id": "OB2_DeactivateAfterBlackGateODD",
    "name": "OB2_DeactivateAfterBlackGateODD",
    "displayName": "Heaven's Stair: Deactivate After Black Gate Dialogue",
    "kind": "item",
    "hash": "0xdefce1fe",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Observatory"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_DeactivateBlackGateODD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_DeactivateBlackGateODD"
      ]
    }
  },
  {
    "id": "RC1_ObjPlatform_FirstTime_Healed",
    "name": "RC1_ObjPlatform_FirstTime_Healed",
    "displayName": "Windmills: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x175f4011",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RuinedCity"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_Windmill",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_CIN_004_FirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_CIN_004_FirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "RC1_Windmill",
    "name": "RC1_Windmill",
    "displayName": "Windmills",
    "kind": "item",
    "hash": "0x0f2e8000",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RuinedCity"
    ],
    "children": [
      "RC1_IntroToBubble_001",
      "RC1_SCE_SE_XXX_Circulation_Puzzle_Return",
      "RC1_AfterReboundFailed",
      "RC1_Circulation_V1",
      "RC1_FertileGround",
      "RC1_Puzzle1",
      "RC1_SCE_SE_XXX_PUZ1ElikaHints_Return",
      "RC1_Fight01Intro",
      "RC1_EndFight01",
      "RC1_ObjectivePlatform",
      "RC1_Circulation_V2",
      "RC1_IntroPuzzle1",
      "RC1_SCE_SE_CheckFirstRotation",
      "RC1_IntroPuzzle2",
      "RC1_Puzzle2",
      "RC1_SE_ShutdownPuzzle1",
      "RC1_SE_ShutDownPuzzle2"
    ],
    "gates": [
      "RC1_Windmill::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC1_FertileGround"
      ]
    }
  },
  {
    "id": "RC2_Guardtower",
    "name": "RC2_Guardtower",
    "displayName": "Martyr's Tower",
    "kind": "item",
    "hash": "0x19461cee",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RuinedCity"
    ],
    "children": [
      "RC2_SE_Fight01Intro",
      "RC2_CIN_EndOfFight01",
      "RC2_ObjectivePlatform",
      "RC2_SE_PuzzleHBeamsRotation",
      "R2_Circulation_V1",
      "R2_Circulation_V2",
      "RC2_FertileGround",
      "RC2_SE_CloseBlockedArenaDoorCOL",
      "RC2_CIN_FertileGroundDenied",
      "RC2_SE_GameplayWithHunterScreams",
      "RC2_SE_GripFallSequence",
      "RC2_CIN_SpawnHunter",
      "RC2_SCE_SE_EnteringRotatingBeamRoom_OA_020",
      "RC2_SE_UpongLandingAfterTrap",
      "RC2_SCE_ArrivingOnTop",
      "RC2_BossFight_LDD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC2_FertileGround"
      ]
    }
  },
  {
    "id": "RC2_ObjPlatform_FirstTime_Healed",
    "name": "RC2_ObjPlatform_FirstTime_Healed",
    "displayName": "Martyr's Tower: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x1c405e13",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RuinedCity"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_Guardtower",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_CIN_005_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_CIN_005_AfterHealing"
      ]
    }
  },
  {
    "id": "RC3_LAIR",
    "name": "RC3_LAIR",
    "displayName": "Hunter's Lair",
    "kind": "item",
    "hash": "0x2252800c",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RuinedCity"
    ],
    "children": [
      "RC3_CamShake",
      "RC3_SCE_SE_012_EnteringTheLair",
      "RC3_FirstTeleport",
      "RC13_ActivationHoleRocks",
      "RC3_FinalFight",
      "RC3_SecondTeleport",
      "RC3_DeathFinalSequence"
    ],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC13_ActivationHoleRocks",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC13_ActivationHoleRocks"
      ]
    }
  },
  {
    "id": "RC_SE_FirstTimeInCirculation",
    "name": "RC_SE_FirstTimeInCirculation",
    "displayName": "Citadel (Hunter Region): First Arrival in Circulation",
    "kind": "item",
    "hash": "0x5251cc30",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RuinedCity"
    ],
    "children": [
      "RC6_SE_FirstTimeInCirculation",
      "RC2_SE_FirstTimeInCirculation"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_SE_FirstTimeInCirculation",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC2_SE_FirstTimeInCirculation",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC6_SE_FirstTimeInCirculation",
        "RC2_SE_FirstTimeInCirculation"
      ]
    }
  },
  {
    "id": "RC5_Petra",
    "name": "RC5_Petra",
    "displayName": "Sun Temple",
    "kind": "item",
    "hash": "0xcd304001",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RuinedCity"
    ],
    "children": [
      "RC5_Circulation_V1",
      "RC5_Circulation_V2",
      "RC5_SE_EndOfFight02_V1",
      "RC5_CIN_EndFight01_001",
      "RC5_SE_Fight02Intro",
      "RC5_CIN_TrapsRelease",
      "RC5_SE_TremorReleases",
      "RC5_SE_ObjectivePlatform",
      "RC5_CIN_Fight01Intro",
      "RC5_SE_HunterDeathCheck",
      "RC5_SE_FertileGround",
      "RC5_SE_DiedByTrapsComments",
      "RC5_CIN_HunterMovesAway"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_SE_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC5_SE_FertileGround"
      ]
    }
  },
  {
    "id": "RC6_CityGate",
    "name": "RC6_CityGate",
    "displayName": "King's Gate",
    "kind": "item",
    "hash": "0x2633008c",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RuinedCity"
    ],
    "children": [
      "RC6_ReturnInCirculation",
      "RC6_002_ArrivingInCirculation",
      "RC6_SE_HunterEscapes",
      "RC6_004_Fight",
      "RC6_ObjectivePlatform",
      "RC6_SE_BOSS_FIGHT_LDD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_SE_HunterEscapes",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC6_SE_HunterEscapes"
      ]
    }
  },
  {
    "id": "RC1_CIN_008_ReturningToTheBlackGate",
    "name": "RC1_CIN_008_ReturningToTheBlackGate",
    "displayName": "Windmills: Cutscene - Return to Black Gate",
    "kind": "item",
    "hash": "0x55c52545",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RuinedCity"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC3_LAIR",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_CIN_008_ReturningToTheBG",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_CIN_008_ReturningToTheBG"
      ]
    }
  },
  {
    "id": "RC4_Terrace",
    "name": "RC4_Terrace",
    "displayName": "Marshalling Ground",
    "kind": "item",
    "hash": "0x2d6cc2e5",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RuinedCity"
    ],
    "children": [
      "RC4_SE_Objective Platform",
      "RC4_SE_Fight",
      "RC4_SCE_ODD_013_Manager",
      "RC4_SCE_CIN_FightIntro",
      "RC4_SCE_CIN_004",
      "RC4_FertileGround",
      "RC4_SCE_SE_FlyTalk_OA_014_Part2",
      "RC4_HunterDeathCheck",
      "RC4_SCE_SE_FlyTalk_OA_014_Part1"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC4_FertileGround"
      ]
    }
  },
  {
    "id": "RC4_ObjPlatform_FirstTime_Healed",
    "name": "RC4_ObjPlatform_FirstTime_Healed",
    "displayName": "Marshalling Ground: Fertile Ground Platform (First Time Healed)",
    "kind": "item",
    "hash": "0x2df94004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RuinedCity"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_Terrace",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_SE_XXX_Objectiveplatform_V5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_SE_XXX_Objectiveplatform_V5"
      ]
    }
  },
  {
    "id": "RC1_BG_Unlocked",
    "name": "RC1_BG_Unlocked",
    "displayName": "Windmills: Black Gate Unlocked",
    "kind": "item",
    "hash": "0x7b8b9271",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RuinedCity"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_Windmill",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_BlackGateUnlock",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_XXX_BlackGateUnlock"
      ]
    }
  },
  {
    "id": "RC6_PostHeal_Trigger",
    "name": "RC6_PostHeal_Trigger",
    "displayName": "King's Gate: Post Heal Trigger",
    "kind": "item",
    "hash": "0x2e02c00d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RuinedCity"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_CityGate",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_SE_OpenDoorGrill1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_SE_OpenDoorGrill1"
      ]
    }
  },
  {
    "id": "RC13_CollapsingBridge",
    "name": "RC13_CollapsingBridge",
    "displayName": "Windmills <-> Hunter's Lair: Collapsing Bridge",
    "kind": "item",
    "hash": "0x2e939687",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RuinedCity"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC13_SCE_SE_CollapsingBridge",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC13_SCE_SE_CollapsingBridge"
      ]
    }
  },
  {
    "id": "RC_CloseBlackGateODD",
    "name": "RC_CloseBlackGateODD",
    "displayName": "Citadel: Black Gate Closed Dialogue",
    "kind": "item",
    "hash": "0x63f30c53",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RuinedCity"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_CloseBlackGateODD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_CloseBlackGateODD"
      ]
    }
  },
  {
    "id": "MourningKingFight_2ndPower",
    "name": "MourningKingFight_2ndPower",
    "displayName": "Inner Temple: Mourning King Fight (2nd Power)",
    "kind": "item",
    "hash": "0x24c3ce69",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A2_SCE_CIN_005_MK_2ndPower",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A2_SCE_CIN_006_MK_2ndPowerEscape",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A2_SCE_CIN_005_MK_2ndPower",
        "DE3_A2_SCE_CIN_006_MK_2ndPowerEscape"
      ]
    }
  },
  {
    "id": "MourningKingFight_4thPower",
    "name": "MourningKingFight_4thPower",
    "displayName": "Inner Temple: Mourning King Fight (4th Power)",
    "kind": "item",
    "hash": "0x24c3ce6a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "Vision 4",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A2_SCE_CIN_MK_4thPower",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DE3_A2_SCE_CIN_014_MK_4thPowerEscape",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_A2_SCE_CIN_MK_4thPower",
        "DE3_A2_SCE_CIN_014_MK_4thPowerEscape"
      ]
    }
  },
  {
    "id": "Vision 4",
    "name": "Vision 4",
    "displayName": "Vision 4 (Mourning King)",
    "kind": "item",
    "hash": "0x775f4045",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "PowerTutorial_Grapple",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_Rebound",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_Dash",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_FlyOnBeam",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_CIN_004_VisionIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_CIN_004_VisionIntro"
      ]
    }
  },
  {
    "id": "DE2_SCE_CIN_CorruptedIntro_OA_012",
    "name": "DE2_SCE_CIN_CorruptedIntro_OA_012",
    "displayName": "The Desert: Cutscene - Corruption Intro",
    "kind": "item",
    "hash": "0x5289401e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE2_SCE_CIN_012_CorruptedIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE2_SCE_CIN_012_CorruptedIntro"
      ]
    }
  },
  {
    "id": "DE3C_SCE_CIN_MK1_Encounter_OA_004",
    "name": "DE3C_SCE_CIN_MK1_Encounter_OA_004",
    "displayName": "Inner Temple: Cutscene - Mourning King Encounter 1",
    "kind": "item",
    "hash": "0x52894598",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "Desert::op0",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_CIN_004_KingEncounter1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_CIN_004_KingEncounter1"
      ]
    }
  },
  {
    "id": "DE3C_SCE_CIN_MK3",
    "name": "DE3C_SCE_CIN_MK3",
    "displayName": "Inner Temple: Cutscene - Mourning King Encounter 3",
    "kind": "item",
    "hash": "0x5333c03e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "Vision 2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_CIN_013_3MK_Encounter",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_CIN_013_3MK_Encounter"
      ]
    }
  },
  {
    "id": "DE3_SCE_CIN_002_PowerIntro",
    "name": "DE3_SCE_CIN_002_PowerIntro",
    "displayName": "Temple Grounds: Cutscene - Power Intro",
    "kind": "item",
    "hash": "0x51208082",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_SCE_SE_015_FirstTimeReturnToTemple",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_CIN_002_PowerIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_CIN_002_PowerIntro"
      ]
    }
  },
  {
    "id": "DE3_SCE_SE_015_FirstTimeReturnToTemple",
    "name": "DE3_SCE_SE_015_FirstTimeReturnToTemple",
    "displayName": "Temple Grounds: First Time Return to Temple",
    "kind": "item",
    "hash": "0x5120807a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE2_SCE_CIN_CorruptedIntro_OA_012",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_SE_015_FirstTimeReturnToTemple",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_SE_015_FirstTimeReturnToTemple"
      ]
    }
  },
  {
    "id": "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
    "name": "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
    "displayName": "Inner Temple: Power Plate After King Encounter 1",
    "kind": "item",
    "hash": "0x512080a4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3C_SCE_CIN_MK1_Encounter_OA_004",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018"
      ]
    }
  },
  {
    "id": "PowerTutorial_Dash",
    "name": "PowerTutorial_Dash",
    "displayName": "Power Tutorial: Step of Ormazd (Green Plate)",
    "kind": "item",
    "hash": "0x22fd071d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "Tutorial_dash_SCE_BacktoDE3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "Tutorial_dash_SCE_BacktoDE3"
      ]
    }
  },
  {
    "id": "PowerTutorial_FlyOnBeam",
    "name": "PowerTutorial_FlyOnBeam",
    "displayName": "Power Tutorial: Wings of Ormazd (Yellow Plate)",
    "kind": "item",
    "hash": "0x22fd071e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "Tutorial_flybeam_SCE_BacktoDE3_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "Tutorial_flybeam_SCE_BacktoDE3_000"
      ]
    }
  },
  {
    "id": "PowerTutorial_Grapple",
    "name": "PowerTutorial_Grapple",
    "displayName": "Power Tutorial: Hand of Ormazd (Blue Plate)",
    "kind": "item",
    "hash": "0x22fd0720",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "Tutorial_Grapple_SCE_BacktoDE3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "Tutorial_Grapple_SCE_BacktoDE3"
      ]
    }
  },
  {
    "id": "PowerTutorial_Rebound",
    "name": "PowerTutorial_Rebound",
    "displayName": "Power Tutorial: Breath of Ormazd (Red Plate)",
    "kind": "item",
    "hash": "0x22fd071f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "Tutorial_rebound_SCE_BacktoDE3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "Tutorial_rebound_SCE_BacktoDE3"
      ]
    }
  },
  {
    "id": "DE3C_MK4thFight_LDD",
    "name": "DE3C_MK4thFight_LDD",
    "displayName": "Inner Temple: Mourning King 4th Fight",
    "kind": "item",
    "hash": "0x751a41e6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "Vision 4",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "MourningKingFight_4thPower",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_MK4thFight_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A2_SCE_MK4thFight_LDD"
      ]
    }
  },
  {
    "id": "Vision 2",
    "name": "Vision 2",
    "displayName": "Vision 2 (Concubine / Royal Gardens)",
    "kind": "item",
    "hash": "0x775f400f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "Desert::op1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_CIN_002_VisionIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_CIN_002_VisionIntro"
      ]
    }
  },
  {
    "id": "Vision3",
    "name": "Vision3",
    "displayName": "Vision 3 (Warrior / City of Light)",
    "kind": "item",
    "hash": "0x775f4040",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "Desert::op2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_CIN_003_VisionIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_CIN_003_VisionIntro"
      ]
    }
  },
  {
    "id": "DE3C_MK2ndFight_LDD",
    "name": "DE3C_MK2ndFight_LDD",
    "displayName": "Inner Temple: Mourning King 2nd Fight",
    "kind": "item",
    "hash": "0x6cd9c34c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "MourningKingFight_2ndPower",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A2_SCE_MK2ndFight_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A2_SCE_MK2ndFight_LDD"
      ]
    }
  },
  {
    "id": "VO_SCR_DE_DE3_016",
    "name": "VO_SCR_DE_DE3_016",
    "displayName": "Temple Grounds: Voiceover 16",
    "kind": "item",
    "hash": "0x7fbb0022",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE2_SCE_ODD_016",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE2_SCE_ODD_016"
      ]
    }
  },
  {
    "id": "PowerTutorialLDD",
    "name": "PowerTutorialLDD",
    "displayName": "Power Tutorial Script",
    "kind": "item",
    "hash": "0xa655c92a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_PowerTutoLDD_Dash",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "GLO_PowerTutoLDD_Grapple",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "GLO_PowerTutoLDD_Rebound",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "GLO_PowerTutoLDD_FlyOnBeam",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_PowerTutoLDD_Dash",
        "GLO_PowerTutoLDD_Grapple",
        "GLO_PowerTutoLDD_Rebound",
        "GLO_PowerTutoLDD_FlyOnBeam"
      ]
    }
  },
  {
    "id": "PowerTutorialLDD_VariableHolder",
    "name": "PowerTutorialLDD_VariableHolder",
    "displayName": "Power Tutorial Variable Holder",
    "kind": "item",
    "hash": "0xe32e004c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Desert"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_SCE_PowerIntroLDD_VarHolder",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_SCE_PowerIntroLDD_VarHolder"
      ]
    }
  },
  {
    "id": "RC6_CIN_FirstTimeHealing",
    "name": "RC6_CIN_FirstTimeHealing",
    "displayName": "King's Gate: Cutscene: First Time Healing",
    "kind": "item",
    "hash": "0x585cc001",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "X6_FirstTimeHealing"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "RC6_SCE_CIN_006_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "RC6_SCE_CIN_006_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "RC6_SCE_CIN_006_FirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_CIN_006_FirstHealing_HealingIntro",
        "RC6_SCE_CIN_006_FirstHealing_HealingOutro",
        "RC6_SCE_CIN_006_FirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "HC6_CIN_FirstTimeHealing",
    "name": "HC6_CIN_FirstTimeHealing",
    "displayName": "Cavern: Cutscene: First Time Healing",
    "kind": "item",
    "hash": "0x92cd50d2",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "X6_FirstTimeHealing"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "HC6_SCE_CIN_007_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "HC6_SCE_CIN_007_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "HC6_SCE_CIN_007_FirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_CIN_007_FirstHealing_HealingIntro",
        "HC6_SCE_CIN_007_FirstHealing_HealingOutro",
        "HC6_SCE_CIN_007_FirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "LR6_CIN_FirstTimeHealing",
    "name": "LR6_CIN_FirstTimeHealing",
    "displayName": "City Gate: Cutscene: First Time Healing",
    "kind": "item",
    "hash": "0x972c6338",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "X6_FirstTimeHealing"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "LR6_SCE_CIN_008_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "LR6_SCE_CIN_008_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "LR6_SCE_CIN_008_FirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_CIN_008_FirstHealing_HealingIntro",
        "LR6_SCE_CIN_008_FirstHealing_HealingOutro",
        "LR6_SCE_CIN_008_FirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "OB6_CIN_FirstTimeHealing",
    "name": "OB6_CIN_FirstTimeHealing",
    "displayName": "Cauldron: Cutscene: First Time Healing",
    "kind": "item",
    "hash": "0x85a59926",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "X6_FirstTimeHealing"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "OB6_SCE_CIN_008_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "OB6_SCE_CIN_008_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "OB6_SCE_CIN_008_FirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_CIN_008_FirstHealing_HealingIntro",
        "OB6_SCE_CIN_008_FirstHealing_HealingOutro",
        "OB6_SCE_CIN_008_FirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "RC6_CIN_NotFirstTimeHealing",
    "name": "RC6_CIN_NotFirstTimeHealing",
    "displayName": "King's Gate: Cutscene: Not First Time Healing",
    "kind": "item",
    "hash": "0x58900aba",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "X6_NotFirstTimeHealing"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "RC6_SCE_CIN_009_NotFirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "RC6_SCE_CIN_009_NotFirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "RC6_SCE_CIN_009_NotFirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_CIN_009_NotFirstHealing_HealingIntro",
        "RC6_SCE_CIN_009_NotFirstHealing_HealingOutro",
        "RC6_SCE_CIN_009_NotFirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "X6_AllBubblesHealed",
    "name": "X6_AllBubblesHealed",
    "displayName": "All 4 Fertile Grounds Healed",
    "kind": "item",
    "hash": "0x534eedfe",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "X6_NotFirstTimeHealing"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_SCE_CheckAllFirstBubblesHealed",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_SCE_CheckAllFirstBubblesHealed"
      ]
    }
  },
  {
    "id": "LR6_CIN_NotFirstTimeHealing",
    "name": "LR6_CIN_NotFirstTimeHealing",
    "displayName": "City Gate: Cutscene: Not First Time Healing",
    "kind": "item",
    "hash": "0x97c1dd43",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "X6_NotFirstTimeHealing"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "LR6_SCE_CIN_011_NotFirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "LR6_SCE_CIN_011_NotFirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "LR6_SCE_CIN_011_NotFirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_CIN_011_NotFirstHealing_HealingIntro",
        "LR6_SCE_CIN_011_NotFirstHealing_HealingOutro",
        "LR6_SCE_CIN_011_NotFirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "OB6_CIN_NotFirstTimeHealing",
    "name": "OB6_CIN_NotFirstTimeHealing",
    "displayName": "Cauldron: Cutscene: Not First Time Healing",
    "kind": "item",
    "hash": "0x85a5992d",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "X6_NotFirstTimeHealing"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "OB6_SCE_CIN_011_NotFirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "OB6_SCE_CIN_011_NotFirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "OB6_SCE_CIN_011_NotFirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_CIN_011_NotFirstHealing_HealingIntro",
        "OB6_SCE_CIN_011_NotFirstHealing_HealingOutro",
        "OB6_SCE_CIN_011_NotFirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "HC6_CIN_NotFirstTimeHealing",
    "name": "HC6_CIN_NotFirstTimeHealing",
    "displayName": "Cavern: Cutscene: Not First Time Healing",
    "kind": "item",
    "hash": "0x92cd5141",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "X6_NotFirstTimeHealing"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "HC6_SCE_CIN_010_NotFirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "HC6_SCE_CIN_010_NotFirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "HC6_SCE_CIN_010_NotFirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_CIN_010_NotFirstHealing_HealingIntro",
        "HC6_SCE_CIN_010_NotFirstHealing_HealingOutro",
        "HC6_SCE_CIN_010_NotFirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "GLO_Blackgate_OB_SCE_Loader",
    "name": "GLO_Blackgate_OB_SCE_Loader",
    "displayName": "Global: Vale Black Gate Loader",
    "kind": "item",
    "hash": "0x6e6c8ddb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Vision Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_BGMonitor_OB",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_BGMonitor_OB"
      ]
    }
  },
  {
    "id": "GLO_Blackgate_LR_SCE_Loader",
    "name": "GLO_Blackgate_LR_SCE_Loader",
    "displayName": "Global: City Black Gate Loader",
    "kind": "item",
    "hash": "0x6e6c8ddc",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Vision Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_BGMonitor_LR",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_BGMonitor_LR"
      ]
    }
  },
  {
    "id": "GLO_Blackgate_HC_SCE_Loader",
    "name": "GLO_Blackgate_HC_SCE_Loader",
    "displayName": "Global: Palace Black Gate Loader",
    "kind": "item",
    "hash": "0x6e6c8dd6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "Vision Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_BGMonitor_HC",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_BGMonitor_HC"
      ]
    }
  },
  {
    "id": "GLO_Blackgate_RC_SCE_Loader",
    "name": "GLO_Blackgate_RC_SCE_Loader",
    "displayName": "Global: Citadel Black Gate Loader",
    "kind": "item",
    "hash": "0x6e6c8dda",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "Vision Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_BGMonitor_RC",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_BGMonitor_RC"
      ]
    }
  },
  {
    "id": "CINE_BlarkGate_001",
    "name": "CINE_BlarkGate_001",
    "displayName": "Cutscene: Black Gate 1",
    "kind": "item",
    "hash": "0x5de78120",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CINE_BlackGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_BG_CINE_001_BG1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_BG_CINE_001_BG1"
      ]
    }
  },
  {
    "id": "CINE_BlarkGate_002",
    "name": "CINE_BlarkGate_002",
    "displayName": "Cutscene: Black Gate 2",
    "kind": "item",
    "hash": "0x5de78121",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CINE_BlackGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "CINE_BlarkGate_001",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_BG_CINE_002_BG2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_BG_CINE_002_BG2"
      ]
    }
  },
  {
    "id": "CINE_BlarkGate_003",
    "name": "CINE_BlarkGate_003",
    "displayName": "Cutscene: Black Gate 3",
    "kind": "item",
    "hash": "0x5de78122",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CINE_BlackGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "CINE_BlarkGate_002",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_BG_CINE_003_BG3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_BG_CINE_003_BG3"
      ]
    }
  },
  {
    "id": "CINE_BlarkGate_004",
    "name": "CINE_BlarkGate_004",
    "displayName": "Cutscene: Black Gate 4",
    "kind": "item",
    "hash": "0x5de78123",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CINE_BlackGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "CINE_BlarkGate_003",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_BG_CINE_004_BG4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_BG_CINE_004_BG4"
      ]
    }
  },
  {
    "id": "CINE_BlarkGate_005_AfterFinalLair",
    "name": "CINE_BlarkGate_005_AfterFinalLair",
    "displayName": "Cutscene: Black Gate 5 (After Final Lair)",
    "kind": "item",
    "hash": "0x5de78124",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CINE_BlackGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": true,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "CINE_BlarkGate_004",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_BG_CINE_005_AfterFinalLair",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_BG_CINE_005_AfterFinalLair"
      ]
    }
  },
  {
    "id": "GLO_ODD_AfterFirstPowerUse",
    "name": "GLO_ODD_AfterFirstPowerUse",
    "displayName": "Global: Dialogue After First Power Use",
    "kind": "item",
    "hash": "0x63aac1ae",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "POWERS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "GLO_SCE_ODD_AfterFirstPowerUse",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "GLO_SCE_ODD_AfterFirstPowerUse"
      ]
    }
  },
  {
    "id": "TUTODASH_Dash",
    "name": "TUTODASH_Dash",
    "displayName": "Tutorial: Step of Ormazd (Green Plate)",
    "kind": "item",
    "hash": "0x678f4852",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "POWERS"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUTORIAL_DASH_SCE_TUTO_DASH",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUTORIAL_DASH_SCE_TUTO_DASH"
      ]
    }
  },
  {
    "id": "TUTOREBOUND_Rebound",
    "name": "TUTOREBOUND_Rebound",
    "displayName": "Tutorial: Breath of Ormazd (Red Plate)",
    "kind": "item",
    "hash": "0x678f4857",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "POWERS"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUTORIAL_REBOUND_SCE_TUTO_REBOUND",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUTORIAL_REBOUND_SCE_TUTO_REBOUND"
      ]
    }
  },
  {
    "id": "TUTOFOB_FlyOnBeam",
    "name": "TUTOFOB_FlyOnBeam",
    "displayName": "Tutorial: Wings of Ormazd (Yellow Plate)",
    "kind": "item",
    "hash": "0x678f4854",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "POWERS"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUTORIAL_FLYONBEAM_SCE_TUTO_FLYONBEAM",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUTORIAL_FLYONBEAM_SCE_TUTO_FLYONBEAM"
      ]
    }
  },
  {
    "id": "TUTOGRAPPLE_Grapple",
    "name": "TUTOGRAPPLE_Grapple",
    "displayName": "Tutorial: Hand of Ormazd (Blue Plate)",
    "kind": "item",
    "hash": "0x678f4856",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "POWERS"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUTORIAL_GRAPPLE_SCE_TUTO_GRAPPLE",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUTORIAL_GRAPPLE_SCE_TUTO_GRAPPLE"
      ]
    }
  },
  {
    "id": "TUTOFOB_FlyOnBeam2",
    "name": "TUTOFOB_FlyOnBeam2",
    "displayName": "Tutorial: Wings of Ormazd 2 (Yellow Plate)",
    "kind": "item",
    "hash": "0x678f4aa2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "POWERS"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "TUTOFOB_FlyOnBeam",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUTORIAL_FLYONBEAM_SCE_TUTO_FLYONBEAM2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUTORIAL_FLYONBEAM_SCE_TUTO_FLYONBEAM2"
      ]
    }
  },
  {
    "id": "LR6_Vines",
    "name": "LR6_Vines",
    "displayName": "City Gate: Vines",
    "kind": "item",
    "hash": "0x51fe072d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_Vines",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_Vines"
      ]
    }
  },
  {
    "id": "LR6_Vines2",
    "name": "LR6_Vines2",
    "displayName": "City Gate: Vines 2",
    "kind": "item",
    "hash": "0x51fe072e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_Vines2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_Vines2"
      ]
    }
  },
  {
    "id": "RC6_Vines",
    "name": "RC6_Vines",
    "displayName": "King's Gate: Vines",
    "kind": "item",
    "hash": "0x57704005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Vines",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Vines"
      ]
    }
  },
  {
    "id": "RC6_Vines2",
    "name": "RC6_Vines2",
    "displayName": "King's Gate: Vines 2",
    "kind": "item",
    "hash": "0x57704006",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Vines2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Vines2"
      ]
    }
  },
  {
    "id": "RC6_Vines3",
    "name": "RC6_Vines3",
    "displayName": "King's Gate: Vines 3",
    "kind": "item",
    "hash": "0x5d4ac001",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Vines3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Vines3"
      ]
    }
  },
  {
    "id": "JCT1_Vines",
    "name": "JCT1_Vines",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Vines",
    "kind": "item",
    "hash": "0x6e26ffb0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Vines_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Vines_SCE_001"
      ]
    }
  },
  {
    "id": "RC6_Vines4",
    "name": "RC6_Vines4",
    "displayName": "King's Gate: Vines 4",
    "kind": "item",
    "hash": "0x6f258002",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Vines4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Vines4"
      ]
    }
  },
  {
    "id": "RC6_Vines5",
    "name": "RC6_Vines5",
    "displayName": "King's Gate: Vines 5",
    "kind": "item",
    "hash": "0x6f25800d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Vines5",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Vines5"
      ]
    }
  },
  {
    "id": "JCT1_Vines3",
    "name": "JCT1_Vines3",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Vines 3",
    "kind": "item",
    "hash": "0x71914ace",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Vines3_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Vines3_SCE_001"
      ]
    }
  },
  {
    "id": "JCT1_Vines4and5",
    "name": "JCT1_Vines4and5",
    "displayName": "Junction 1: Vines 4 & 5",
    "kind": "item",
    "hash": "0x71914e41",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Vines4and5_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Vines4and5_SCE_001"
      ]
    }
  },
  {
    "id": "JCT2_Vines",
    "name": "JCT2_Vines",
    "displayName": "Junction 2 (Vale / Palace / Desert): Vines",
    "kind": "item",
    "hash": "0x7400ca1c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_Vines_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_Vines_SCE_001"
      ]
    }
  },
  {
    "id": "JCT2_Vines3",
    "name": "JCT2_Vines3",
    "displayName": "Junction 2 (Vale / Palace / Desert): Vines 3",
    "kind": "item",
    "hash": "0x7400cbd6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "VINES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_Vines3_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_Vines3_SCE_001"
      ]
    }
  },
  {
    "id": "HC6_Slide",
    "name": "HC6_Slide",
    "displayName": "Cavern: Slide",
    "kind": "item",
    "hash": "0x4f0cd3f1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "SLIDES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_Slide2",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tuto_Slide",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tuto_Slide"
      ]
    }
  },
  {
    "id": "HC6_Slide2",
    "name": "HC6_Slide2",
    "displayName": "Cavern: Slide 2",
    "kind": "item",
    "hash": "0x50e5c48d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "SLIDES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_Slide",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tuto_Slide2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tuto_Slide2"
      ]
    }
  },
  {
    "id": "OB6_Slide",
    "name": "OB6_Slide",
    "displayName": "Cauldron: Slide",
    "kind": "item",
    "hash": "0x500867cf",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "SLIDES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_Slide",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_Slide"
      ]
    }
  },
  {
    "id": "JCT3_Slide",
    "name": "JCT3_Slide",
    "displayName": "Junction 3 (Palace / City / Desert): Slide",
    "kind": "item",
    "hash": "0x747df120",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "SLIDES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_Slide_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_Slide_SCE_000"
      ]
    }
  },
  {
    "id": "OB6_Roofing",
    "name": "OB6_Roofing",
    "displayName": "Cauldron: Ceiling Run (Roofing)",
    "kind": "item",
    "hash": "0x38550fbb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ROOFING"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_Roofing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_Roofing"
      ]
    }
  },
  {
    "id": "OB6_RoofingRing",
    "name": "OB6_RoofingRing",
    "displayName": "Cauldron: Ceiling Run Ring",
    "kind": "item",
    "hash": "0x38550fbc",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ROOFING"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_RoofingRing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_RoofingRing"
      ]
    }
  },
  {
    "id": "RC6_Roofing",
    "name": "RC6_Roofing",
    "displayName": "King's Gate: Ceiling Run (Roofing)",
    "kind": "item",
    "hash": "0x38d44003",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ROOFING"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Roofing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Roofing"
      ]
    }
  },
  {
    "id": "HC6_Roofing",
    "name": "HC6_Roofing",
    "displayName": "Cavern: Ceiling Run (Roofing)",
    "kind": "item",
    "hash": "0x4b4ce714",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ROOFING"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tuto_Roofing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tuto_Roofing"
      ]
    }
  },
  {
    "id": "HC6_RoofRing",
    "name": "HC6_RoofRing",
    "displayName": "Cavern: Ceiling Run Ring",
    "kind": "item",
    "hash": "0x4b4ce9ad",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ROOFING"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tuto_RoofRing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tuto_RoofRing"
      ]
    }
  },
  {
    "id": "LR6_Roofing",
    "name": "LR6_Roofing",
    "displayName": "City Gate: Ceiling Run (Roofing)",
    "kind": "item",
    "hash": "0x5142d0e6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ROOFING"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_Roofing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_Roofing"
      ]
    }
  },
  {
    "id": "RC6_RoofingRing",
    "name": "RC6_RoofingRing",
    "displayName": "King's Gate: Ceiling Run Ring",
    "kind": "item",
    "hash": "0x57704014",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "ROOFING"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_RoofingRing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_RoofingRing"
      ]
    }
  },
  {
    "id": "HC6_Pole",
    "name": "HC6_Pole",
    "displayName": "Cavern: Pole",
    "kind": "item",
    "hash": "0x4b4cd2a8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "POLE"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_Pole2",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tuto_Pole",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tuto_Pole"
      ]
    }
  },
  {
    "id": "HC6_Pole2",
    "name": "HC6_Pole2",
    "displayName": "Cavern: Pole 2",
    "kind": "item",
    "hash": "0x4b4cd2a9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "POLE"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_Pole",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tuto_Pole2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tuto_Pole2"
      ]
    }
  },
  {
    "id": "JCT1_Pole",
    "name": "JCT1_Pole",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Pole",
    "kind": "item",
    "hash": "0x4e692fa3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "POLE"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Pole_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Pole_SCE_001"
      ]
    }
  },
  {
    "id": "JCT1_VerticalRing",
    "name": "JCT1_VerticalRing",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Vertical Wall Ring",
    "kind": "item",
    "hash": "0x6e26f939",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "GRIPS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_VerticalRing_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_VerticalRing_SCE_001"
      ]
    }
  },
  {
    "id": "JCT1_HorizontalRing",
    "name": "JCT1_HorizontalRing",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Horizontal Wall Ring",
    "kind": "item",
    "hash": "0x6e26fe13",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "GRIPS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_HorizontalRing_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_HorizontalRing_SCE_001"
      ]
    }
  },
  {
    "id": "JCT2_VerticalRing",
    "name": "JCT2_VerticalRing",
    "displayName": "Junction 2 (Vale / Palace / Desert): Vertical Wall Ring",
    "kind": "item",
    "hash": "0x73448821",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "GRIPS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_VerticalRing_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_VerticalRing_SCE_000"
      ]
    }
  },
  {
    "id": "JCT2_HorizontalRing",
    "name": "JCT2_HorizontalRing",
    "displayName": "Junction 2 (Vale / Palace / Desert): Horizontal Wall Ring",
    "kind": "item",
    "hash": "0x73448d3c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "GRIPS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_HorizontalRing_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_HorizontalRing_SCE_001"
      ]
    }
  },
  {
    "id": "JCT3_HorizontalRing",
    "name": "JCT3_HorizontalRing",
    "displayName": "Junction 3 (Palace / City / Desert): Horizontal Wall Ring",
    "kind": "item",
    "hash": "0x747de4a9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "GRIPS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_HorizontalRing_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_HorizontalRing_SCE_000"
      ]
    }
  },
  {
    "id": "JCT3_VerticalRing",
    "name": "JCT3_VerticalRing",
    "displayName": "Junction 3 (Palace / City / Desert): Vertical Wall Ring",
    "kind": "item",
    "hash": "0x747de574",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "GRIPS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_VerticalRing_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_VerticalRing_SCE_000"
      ]
    }
  },
  {
    "id": "OB6_Heal_FirstTime",
    "name": "OB6_Heal_FirstTime",
    "displayName": "Cauldron: Heal First Time",
    "kind": "item",
    "hash": "0x38550fbd",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "FERTILEGROUND"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_003_FightEnd",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_HealUse_FirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_HealUse_FirstTime"
      ]
    }
  },
  {
    "id": "HC6_Heal_FirstTime",
    "name": "HC6_Heal_FirstTime",
    "displayName": "Cavern: Heal First Time",
    "kind": "item",
    "hash": "0x3922f9d2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "FERTILEGROUND"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_EndFight",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tutorial_Heal_FirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tutorial_Heal_FirstTime"
      ]
    }
  },
  {
    "id": "RC6_Heal_FirstTime",
    "name": "RC6_Heal_FirstTime",
    "displayName": "King's Gate: Heal First Time",
    "kind": "item",
    "hash": "0x38d44005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "FERTILEGROUND"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_SE_HunterEscapes",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Heal_FirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Heal_FirstTime"
      ]
    }
  },
  {
    "id": "LR6_Heal_FirstTime",
    "name": "LR6_Heal_FirstTime",
    "displayName": "City Gate: Heal First Time",
    "kind": "item",
    "hash": "0x36b7c103",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "FERTILEGROUND"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SCE_FightOutro",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_Tuto_HealUse_FirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_Tuto_HealUse_FirstTime"
      ]
    }
  },
  {
    "id": "OB6_Heal_NotFirstTime",
    "name": "OB6_Heal_NotFirstTime",
    "displayName": "Cauldron: Heal Not First Time",
    "kind": "item",
    "hash": "0xcf5d2bd8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "FERTILEGROUND"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_003_FightEnd",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "X6_FirstTimeHealing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_HealUse_NotFirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_HealUse_NotFirstTime"
      ]
    }
  },
  {
    "id": "HC6_Heal_NotFirstTime",
    "name": "HC6_Heal_NotFirstTime",
    "displayName": "Cavern: Heal Not First Time",
    "kind": "item",
    "hash": "0xcf5d2bd9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "FERTILEGROUND"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_EndFight",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "X6_FirstTimeHealing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tutorial_Heal_NotFirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tutorial_Heal_NotFirstTime"
      ]
    }
  },
  {
    "id": "RC6_Heal_NotFirstTime",
    "name": "RC6_Heal_NotFirstTime",
    "displayName": "King's Gate: Heal Not First Time",
    "kind": "item",
    "hash": "0xcf5d2bda",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "FERTILEGROUND"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_SE_HunterEscapes",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "X6_FirstTimeHealing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Heal_NotFirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Heal_NotFirstTime"
      ]
    }
  },
  {
    "id": "LR6_Heal_NotFirstTime",
    "name": "LR6_Heal_NotFirstTime",
    "displayName": "City Gate: Heal Not First Time",
    "kind": "item",
    "hash": "0xcf5d2bdb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "FERTILEGROUND"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SCE_FightOutro",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "X6_FirstTimeHealing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR6_Heal_FirstTime",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_Tuto_HealUse_NotFirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_Tuto_HealUse_NotFirstTime"
      ]
    }
  },
  {
    "id": "JCT3_Compass3",
    "name": "JCT3_Compass3",
    "displayName": "Junction 3 (Palace / City / Desert): Compass 3",
    "kind": "item",
    "hash": "0x37b71483",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COMPASS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_Compass_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_Compass_SCE_000"
      ]
    }
  },
  {
    "id": "JCT2_Compass2",
    "name": "JCT2_Compass2",
    "displayName": "Junction 2 (Vale / Palace / Desert): Compass 2",
    "kind": "item",
    "hash": "0x36dcc174",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COMPASS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_Compass_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_Compass_SCE_001"
      ]
    }
  },
  {
    "id": "JCT1_Compass",
    "name": "JCT1_Compass",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Compass",
    "kind": "item",
    "hash": "0x32ca9158",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COMPASS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Compass_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Compass_SCE_001"
      ]
    }
  },
  {
    "id": "JCT1_BeamPer",
    "name": "JCT1_BeamPer",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Perpendicular Beam",
    "kind": "item",
    "hash": "0x7200804f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "BEAM"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Beamper_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Beamper_SCE_001"
      ]
    }
  },
  {
    "id": "HC6_BeamPer",
    "name": "HC6_BeamPer",
    "displayName": "Cavern: Perpendicular Beam",
    "kind": "item",
    "hash": "0x4f0cd386",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "BEAM"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_Tuto_BeamPer",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_Tuto_BeamPer"
      ]
    }
  },
  {
    "id": "OB6_BeamPer",
    "name": "OB6_BeamPer",
    "displayName": "Cauldron: Perpendicular Beam",
    "kind": "item",
    "hash": "0x500867c3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "BEAM"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_BeamPerpendicular",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_BeamPerpendicular"
      ]
    }
  },
  {
    "id": "DE1_Jump2",
    "name": "DE1_Jump2",
    "displayName": "Canyon: Jump 2",
    "kind": "item",
    "hash": "0x49ad8249",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_Jump2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_Jump2"
      ]
    }
  },
  {
    "id": "DE1_WallrunH",
    "name": "DE1_WallrunH",
    "displayName": "Canyon: Horizontal Wall Run",
    "kind": "item",
    "hash": "0x4e4743ac",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_WallRunH",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_WallRunH"
      ]
    }
  },
  {
    "id": "DE1_WallrunHJump",
    "name": "DE1_WallrunHJump",
    "displayName": "Canyon: Horizontal Wall Run Jump",
    "kind": "item",
    "hash": "0x4e4743dd",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_WallrunJumpH",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_WallrunJumpH"
      ]
    }
  },
  {
    "id": "DE1_WallrunV",
    "name": "DE1_WallrunV",
    "displayName": "Canyon: Vertical Wall Run",
    "kind": "item",
    "hash": "0x4e47440e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_WallRunV",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_WallRunV"
      ]
    }
  },
  {
    "id": "DE1_WallrunVJump",
    "name": "DE1_WallrunVJump",
    "displayName": "Canyon: Vertical Wall Run Jump",
    "kind": "item",
    "hash": "0x4ed2c56e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_WallrunJumpV",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_WallrunJumpV"
      ]
    }
  },
  {
    "id": "DE1_WallrunHJump2",
    "name": "DE1_WallrunHJump2",
    "displayName": "Canyon: Horizontal Wall Run Jump 2",
    "kind": "item",
    "hash": "0x4ed2c53d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_WallrunHJump2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_WallrunHJump2"
      ]
    }
  },
  {
    "id": "DE1_Jump",
    "name": "DE1_Jump",
    "displayName": "Canyon: Jump",
    "kind": "item",
    "hash": "0x4daec58b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_Jump",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_Jump"
      ]
    }
  },
  {
    "id": "DE1_WallrunH2",
    "name": "DE1_WallrunH2",
    "displayName": "Canyon: Horizontal Wall Run 2",
    "kind": "item",
    "hash": "0x4cd5003e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_WallRunH2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_WallRunH2"
      ]
    }
  },
  {
    "id": "DE1_WallrunHJump3",
    "name": "DE1_WallrunHJump3",
    "displayName": "Canyon: Horizontal Wall Run Jump 3",
    "kind": "item",
    "hash": "0x5ec915f5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_WallrunHJump3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_WallrunHJump3"
      ]
    }
  },
  {
    "id": "DE1_Gripfall",
    "name": "DE1_Gripfall",
    "displayName": "Canyon: Grip Fall",
    "kind": "item",
    "hash": "0x5ec924f2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_Gripfall",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_Gripfall"
      ]
    }
  },
  {
    "id": "DE3_Lever",
    "name": "DE3_Lever",
    "displayName": "Temple Grounds: Lever",
    "kind": "item",
    "hash": "0x5f6e47c8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_TUTO_Lever",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_TUTO_Lever"
      ]
    }
  },
  {
    "id": "DE3_WallrunV",
    "name": "DE3_WallrunV",
    "displayName": "Temple Grounds: Vertical Wall Run",
    "kind": "item",
    "hash": "0x5f994705",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_TUTO_WallrunV",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_TUTO_WallrunV"
      ]
    }
  },
  {
    "id": "DE3_Cracks",
    "name": "DE3_Cracks",
    "displayName": "Temple Grounds: Wall Cracks",
    "kind": "item",
    "hash": "0x5f994f99",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_TUTO_Cracks",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_TUTO_Cracks"
      ]
    }
  },
  {
    "id": "DE3_Gripfall",
    "name": "DE3_Gripfall",
    "displayName": "Temple Grounds: Grip Fall",
    "kind": "item",
    "hash": "0x60060000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_Lever",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3_SCE_TUTO_Gripfall",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3_SCE_TUTO_Gripfall"
      ]
    }
  },
  {
    "id": "DE3_Ringswitch",
    "name": "DE3_Ringswitch",
    "displayName": "Temple Grounds: Ringswitch",
    "kind": "item",
    "hash": "0x60444593",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_SCE_TUTO_Ringswitch",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_SCE_TUTO_Ringswitch"
      ]
    }
  },
  {
    "id": "DE3_CoopJump",
    "name": "DE3_CoopJump",
    "displayName": "Temple Grounds: Co-op Jump",
    "kind": "item",
    "hash": "0x60445319",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DE3_Cracks2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3A_A1_SCE_TUTO_Coopjump",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3A_A1_SCE_TUTO_Coopjump"
      ]
    }
  },
  {
    "id": "DE3_DoubleWallRun",
    "name": "DE3_DoubleWallRun",
    "displayName": "Temple Grounds: Double Wall Run",
    "kind": "item",
    "hash": "0x6044531e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A1_SCE_TUTO_DoubleWallrun",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A1_SCE_TUTO_DoubleWallrun"
      ]
    }
  },
  {
    "id": "DE3_Cracks2",
    "name": "DE3_Cracks2",
    "displayName": "Temple Grounds: Wall Cracks 2",
    "kind": "item",
    "hash": "0x60445522",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE3C_A1_SCE_TUTO_Cracks2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE3C_A1_SCE_TUTO_Cracks2"
      ]
    }
  },
  {
    "id": "DE1_CAMERA",
    "name": "DE1_CAMERA",
    "displayName": "Canyon: Camera Angle",
    "kind": "item",
    "hash": "0x664a7022",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_CAMERA",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_CAMERA"
      ]
    }
  },
  {
    "id": "DE1_ODD",
    "name": "DE1_ODD",
    "displayName": "Canyon: Dialogue",
    "kind": "item",
    "hash": "0x664a7817",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CANYON_TEMPLE"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DE1_SCE_TUTO_ODD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DE1_SCE_TUTO_ODD"
      ]
    }
  },
  {
    "id": "JCT3_CoopJump",
    "name": "JCT3_CoopJump",
    "displayName": "Junction 3 (Palace / City / Desert): Co-op Jump",
    "kind": "item",
    "hash": "0x4e69243f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COOP"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_CoopJump_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_CoopJump_SCE_000"
      ]
    }
  },
  {
    "id": "JCT2_CoopJump",
    "name": "JCT2_CoopJump",
    "displayName": "Junction 2 (Vale / Palace / Desert): Co-op Jump",
    "kind": "item",
    "hash": "0x4e6923b0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COOP"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_CoopJump_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_CoopJump_SCE_000"
      ]
    }
  },
  {
    "id": "JCT1_CoopJump",
    "name": "JCT1_CoopJump",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Co-op Jump",
    "kind": "item",
    "hash": "0x6efe4eef",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COOP"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_CoopJump_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_CoopJump_SCE_000"
      ]
    }
  },
  {
    "id": "OB6_Column2",
    "name": "OB6_Column2",
    "displayName": "Cauldron: Column 2",
    "kind": "item",
    "hash": "0x38550fb8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_Column2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_Column2"
      ]
    }
  },
  {
    "id": "RC6_Column3",
    "name": "RC6_Column3",
    "displayName": "King's Gate: Column 3",
    "kind": "item",
    "hash": "0x38d44004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Column3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Column3"
      ]
    }
  },
  {
    "id": "RC6_Column2",
    "name": "RC6_Column2",
    "displayName": "King's Gate: Column 2",
    "kind": "item",
    "hash": "0x38d44000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Column2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Column2"
      ]
    }
  },
  {
    "id": "OB6_Column",
    "name": "OB6_Column",
    "displayName": "Cauldron: Column",
    "kind": "item",
    "hash": "0x500867cb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_Tuto_Column",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_Tuto_Column"
      ]
    }
  },
  {
    "id": "LR6_Column",
    "name": "LR6_Column",
    "displayName": "City Gate: Column",
    "kind": "item",
    "hash": "0x51fe0727",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_Column",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_Column"
      ]
    }
  },
  {
    "id": "LR6_Column2",
    "name": "LR6_Column2",
    "displayName": "City Gate: Column 2",
    "kind": "item",
    "hash": "0x51fe0728",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_Column2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_Column2"
      ]
    }
  },
  {
    "id": "RC6_Column",
    "name": "RC6_Column",
    "displayName": "King's Gate: Column",
    "kind": "item",
    "hash": "0x57704011",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_Column",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_Column"
      ]
    }
  },
  {
    "id": "JCT2_Column",
    "name": "JCT2_Column",
    "displayName": "Junction 2 (Vale / Palace / Desert): Column",
    "kind": "item",
    "hash": "0x7400d560",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_Column_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_Column_SCE_001"
      ]
    }
  },
  {
    "id": "JCT2_Colum2",
    "name": "JCT2_Colum2",
    "displayName": "Junction 2 (Vale / Palace / Desert): Colum 2",
    "kind": "item",
    "hash": "0x74548ca3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_Column2_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_Column2_SCE_001"
      ]
    }
  },
  {
    "id": "JCT2_Column3",
    "name": "JCT2_Column3",
    "displayName": "Junction 2 (Vale / Palace / Desert): Column 3",
    "kind": "item",
    "hash": "0x747dc24f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_Column3_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_Column3_SCE_000"
      ]
    }
  },
  {
    "id": "JCT2_Column4",
    "name": "JCT2_Column4",
    "displayName": "Junction 2 (Vale / Palace / Desert): Column 4",
    "kind": "item",
    "hash": "0x747dc329",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT2_Column4_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT2_Column4_SCE_001"
      ]
    }
  },
  {
    "id": "JCT3_Column",
    "name": "JCT3_Column",
    "displayName": "Junction 3 (Palace / City / Desert): Column",
    "kind": "item",
    "hash": "0x747dfd73",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_Column_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_Column_SCE_000"
      ]
    }
  },
  {
    "id": "JCT3_Column2",
    "name": "JCT3_Column2",
    "displayName": "Junction 3 (Palace / City / Desert): Column 2",
    "kind": "item",
    "hash": "0x74bfc3c5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_Column2_SCE_002",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_Column2_SCE_002"
      ]
    }
  },
  {
    "id": "JCT3_Column4",
    "name": "JCT3_Column4",
    "displayName": "Junction 3 (Palace / City / Desert): Column 4",
    "kind": "item",
    "hash": "0x74bfc850",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_Column4_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_Column4_SCE_001"
      ]
    }
  },
  {
    "id": "JCT3_Column3",
    "name": "JCT3_Column3",
    "displayName": "Junction 3 (Palace / City / Desert): Column 3",
    "kind": "item",
    "hash": "0x74bfcca8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "COLUMN"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_Column3_SCE_000",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_Column3_SCE_000"
      ]
    }
  },
  {
    "id": "JCT1_Cracks",
    "name": "JCT1_Cracks",
    "displayName": "Junction 1 (Citadel / Vale / Desert): Wall Cracks",
    "kind": "item",
    "hash": "0x6e26c514",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CRACKS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT1_Cracks_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT1_Cracks_SCE_001"
      ]
    }
  },
  {
    "id": "JCT3_CracksAndCracks2",
    "name": "JCT3_CracksAndCracks2",
    "displayName": "Junction 3: Wall Cracks 1 & 2",
    "kind": "item",
    "hash": "0x747de72c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CRACKS"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "TUT_JCT3_Cracks_SCE_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "TUT_JCT3_Cracks_SCE_001"
      ]
    }
  },
  {
    "id": "OB6_CollectSparkles",
    "name": "OB6_CollectSparkles",
    "displayName": "Cauldron: Collect Light Seeds",
    "kind": "item",
    "hash": "0x678f64df",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AfterHealMap_CollectSparkles"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_TUTO_CollectSparkles",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_TUTO_CollectSparkles"
      ]
    }
  },
  {
    "id": "LR6_CollectSparkles",
    "name": "LR6_CollectSparkles",
    "displayName": "City Gate: Collect Light Seeds",
    "kind": "item",
    "hash": "0xb5204326",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AfterHealMap_CollectSparkles"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_TUTO_CollectSparkles",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_TUTO_CollectSparkles"
      ]
    }
  },
  {
    "id": "HC6_CollectSparkles",
    "name": "HC6_CollectSparkles",
    "displayName": "Cavern: Collect Light Seeds",
    "kind": "item",
    "hash": "0xb5204328",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AfterHealMap_CollectSparkles"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_TUTO_CollectSparkles",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_TUTO_CollectSparkles"
      ]
    }
  },
  {
    "id": "RC6_CollectSparkles",
    "name": "RC6_CollectSparkles",
    "displayName": "King's Gate: Collect Light Seeds",
    "kind": "item",
    "hash": "0xb5204329",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AfterHealMap_CollectSparkles"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_CollectSparkles",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_CollectSparkles"
      ]
    }
  },
  {
    "id": "OB4_ODD3",
    "name": "OB4_ODD3",
    "displayName": "Construction Yard: Dialogue 3",
    "kind": "item",
    "hash": "0x6cccc037",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "PUZZLES"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_Tuto_Puzzle",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_Tuto_Puzzle"
      ]
    }
  },
  {
    "id": "RC_TUT_ODD3",
    "name": "RC_TUT_ODD3",
    "displayName": "Citadel: Tutorial Dialogue 3",
    "kind": "item",
    "hash": "0x766bd37b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "PUZZLES"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_IntroPuzzle1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_TUTO_ODD3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_TUTO_ODD3"
      ]
    }
  },
  {
    "id": "HC_ODD3",
    "name": "HC_ODD3",
    "displayName": "Palace: Dialogue 3",
    "kind": "item",
    "hash": "0x762ad1b7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "PUZZLES"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_000_PresentationPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_TUT_ODD3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_TUT_ODD3"
      ]
    }
  },
  {
    "id": "OB6_SetDestination",
    "name": "OB6_SetDestination",
    "displayName": "Cauldron: Set Destination",
    "kind": "item",
    "hash": "0xe6354028",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AfterHealMap_SetDestination"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_TUTO_SetDestination",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_TUTO_SetDestination"
      ]
    }
  },
  {
    "id": "HC6_SetDestination",
    "name": "HC6_SetDestination",
    "displayName": "Cavern: Set Destination",
    "kind": "item",
    "hash": "0xe6354029",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AfterHealMap_SetDestination"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_TUTO_SetDestination",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_TUTO_SetDestination"
      ]
    }
  },
  {
    "id": "RC6_SetDestination",
    "name": "RC6_SetDestination",
    "displayName": "King's Gate: Set Destination",
    "kind": "item",
    "hash": "0xe635402a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AfterHealMap_SetDestination"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_CityGate",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_TUTO_SetDestination",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_TUTO_SetDestination"
      ]
    }
  },
  {
    "id": "LR6_SetDestination",
    "name": "LR6_SetDestination",
    "displayName": "City Gate: Set Destination",
    "kind": "item",
    "hash": "0xe635402b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "AfterHealMap_SetDestination"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_TUTO_SetDestination",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_TUTO_SetDestination"
      ]
    }
  },
  {
    "id": "HC1_001_ElikaCapture",
    "name": "HC1_001_ElikaCapture",
    "displayName": "Spire of Dreams: Elika Capture",
    "kind": "item",
    "hash": "0x1310cad4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_XXX_ElikaCaptureLogic",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_XXX_ElikaCaptureLogic"
      ]
    }
  },
  {
    "id": "HC1_002_ConcubineAttacks",
    "name": "HC1_002_ConcubineAttacks",
    "displayName": "Spire of Dreams: Concubine Attacks",
    "kind": "item",
    "hash": "0x14e08002",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_Elika_Freed",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_CIN_006_ConcubineAttacks",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_CIN_006_ConcubineAttacks"
      ]
    }
  },
  {
    "id": "HC1_003_ConcubineEscapes",
    "name": "HC1_003_ConcubineEscapes",
    "displayName": "Spire of Dreams: Concubine Escapes",
    "kind": "item",
    "hash": "0x14e08003",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_002_ConcubineAttacks",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_CIN_007_ConcubineEscapes",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "HC1_TRG_Checkpoint_010"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_CIN_007_ConcubineEscapes"
      ]
    }
  },
  {
    "id": "HC1_ObjectivePlatform",
    "name": "HC1_ObjectivePlatform",
    "displayName": "Spire of Dreams: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x2dae98bc",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HC1"
    ],
    "children": [
      "HC1_ObjPlatform_FirstTime_PlateInactive",
      "HC1_ObjPlatform_FirstTime_PlateActive",
      "HC1_ObjPlatform_Return_PlateInactive",
      "HC1_ObjPlatform_Return_PlateActive",
      "HC1_OBJ_Platform_PowerCheck"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_001_ElikaCapture",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC1_ObjPlatform_Return_PlateActive",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC1_ObjPlatform_Return_PlateActive"
      ]
    }
  },
  {
    "id": "HC1_FertileGround",
    "name": "HC1_FertileGround",
    "displayName": "Spire of Dreams: Fertile Ground",
    "kind": "item",
    "hash": "0x85a6a10f",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_003_ConcubineEscapes",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "HC1_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "HC1_SCE_CIN_008_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_FirstHealing_HealingIntro",
        "HC1_SCE_CIN_008_AfterHealing"
      ]
    }
  },
  {
    "id": "HC1_Arrival_on_Platform",
    "name": "HC1_Arrival_on_Platform",
    "displayName": "Spire of Dreams: Arrival on Platform",
    "kind": "item",
    "hash": "0x8b525007",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_013_ArrivalOnPlatform",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_013_ArrivalOnPlatform"
      ]
    }
  },
  {
    "id": "HC1_1st_Illusion",
    "name": "HC1_1st_Illusion",
    "displayName": "Spire of Dreams: First Illusion",
    "kind": "item",
    "hash": "0x8b525008",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_001_ElikaCapture",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_018_FirstIllusion",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_018_FirstIllusion"
      ]
    }
  },
  {
    "id": "HC1_2nd_Illusion",
    "name": "HC1_2nd_Illusion",
    "displayName": "Spire of Dreams: Second Illusion",
    "kind": "item",
    "hash": "0x8b525009",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_001_ElikaCapture",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_019_SecondIllusion",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_019_SecondIllusion"
      ]
    }
  },
  {
    "id": "HC1_014_ElevatorPrinceTalk",
    "name": "HC1_014_ElevatorPrinceTalk",
    "displayName": "Spire of Dreams: Elevator Prince Talk",
    "kind": "item",
    "hash": "0x8c98fad7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_Arrival_on_Platform",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_014_Elevator",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_014_Elevator"
      ]
    }
  },
  {
    "id": "HC1_Elika_Freed",
    "name": "HC1_Elika_Freed",
    "displayName": "Spire of Dreams: Elika Freed",
    "kind": "item",
    "hash": "0xc485e45c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1::op0",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_CIN_004_ThirdIllusion",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "HC1_TRG_Checkpoint_007"
          },
          {
            "op": "deactivate",
            "target": "HC1_TRG_Checkpoint_005"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_CIN_004_ThirdIllusion"
      ]
    }
  },
  {
    "id": "HC1_Arrival_at_Elevator",
    "name": "HC1_Arrival_at_Elevator",
    "displayName": "Spire of Dreams: Arrival at Elevator",
    "kind": "item",
    "hash": "0x8b52500c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_001_ElikaCapture",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_021_Arriving_at_Elevator",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_021_Arriving_at_Elevator"
      ]
    }
  },
  {
    "id": "HC1_Elevator_Talks",
    "name": "HC1_Elevator_Talks",
    "displayName": "Spire of Dreams: Elevator Talks",
    "kind": "item",
    "hash": "0x8b52500d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_Arrival_at_Elevator",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_022_ElevatorTalks",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_022_ElevatorTalks"
      ]
    }
  },
  {
    "id": "HC1_ReturnInCirculation",
    "name": "HC1_ReturnInCirculation",
    "displayName": "Spire of Dreams: Return to Circulation",
    "kind": "item",
    "hash": "0xa3719d78",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_ArrivalInCirculation",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_ODD_005_ReturnInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_ODD_005_ReturnInCirculation"
      ]
    }
  },
  {
    "id": "HC1_ArrivalInCirculation",
    "name": "HC1_ArrivalInCirculation",
    "displayName": "Spire of Dreams: Arrival In Circulation",
    "kind": "item",
    "hash": "0xa3719d77",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_ArrivinginCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_ArrivinginCirculation"
      ]
    }
  },
  {
    "id": "HC1_ElevatorUnblock",
    "name": "HC1_ElevatorUnblock",
    "displayName": "Spire of Dreams: Elevator Unblock",
    "kind": "item",
    "hash": "0x8122b8c2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_Elika_Freed",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC1_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_ElevatorUnblock",
        "terminationOutputIdx": 1
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_ElevatorUnblock"
      ]
    }
  },
  {
    "id": "HC1_BossFight_LDD",
    "name": "HC1_BossFight_LDD",
    "displayName": "Spire of Dreams: Boss Fight Logic",
    "kind": "item",
    "hash": "0x60714eb9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_002_ConcubineAttacks",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC1_003_ConcubineEscapes",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_BossFight_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_BossFight_LDD"
      ]
    }
  },
  {
    "id": "HC1_ElikaCaptureCol_Logic",
    "name": "HC1_ElikaCaptureCol_Logic",
    "displayName": "Spire of Dreams: Elika Capture Col Logic",
    "kind": "item",
    "hash": "0x87ba8047",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_001_ElikaCapture",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC1::op0",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_CapturedElika_Colmap_Logic",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_CapturedElika_Colmap_Logic"
      ]
    }
  },
  {
    "id": "HC1_SE_016_Concubine_Tower_Taunts",
    "name": "HC1_SE_016_Concubine_Tower_Taunts",
    "displayName": "Spire of Dreams: Concubine Tower Taunts",
    "kind": "item",
    "hash": "0xce2095ac",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_002_ConcubineAttacks",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_016_ConcubineTowerTaunts",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_016_ConcubineTowerTaunts"
      ]
    }
  },
  {
    "id": "HC2_001_1stPuzzle",
    "name": "HC2_001_1stPuzzle",
    "displayName": "Royal Gardens: 1st Puzzle",
    "kind": "item",
    "hash": "0x1cea8003",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_000_PresentationPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_XXX_1stPuzzleLogic",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_CIN_004_Sucess",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_XXX_1stPuzzleLogic",
        "HC2_SCE_CIN_004_Sucess"
      ]
    }
  },
  {
    "id": "HC2_002_2ndPuzzle",
    "name": "HC2_002_2ndPuzzle",
    "displayName": "Royal Gardens: 2nd Puzzle",
    "kind": "item",
    "hash": "0x1cea8004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_001_1stPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_XXX_2ndPuzzleLogic",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_CIN_005-1_2ndSolved",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "HC2_TRG_Checkpoint_007"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_XXX_2ndPuzzleLogic",
        "HC2_SCE_CIN_005-1_2ndSolved"
      ]
    }
  },
  {
    "id": "HC2_ObjPlatform_PuzzleCompleted",
    "name": "HC2_ObjPlatform_PuzzleCompleted",
    "displayName": "Royal Gardens: Platform (Puzzle Completed)",
    "kind": "item",
    "hash": "0x33bc400a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_005_FightSequence",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC2_002_2ndPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_XXX_Objectiveplatform_V6",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_XXX_Objectiveplatform_V6"
      ]
    }
  },
  {
    "id": "HC2_005_FightSequence",
    "name": "HC2_005_FightSequence",
    "displayName": "Royal Gardens: Fight Sequence",
    "kind": "item",
    "hash": "0x1cea8006",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_002_2ndPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_CIN_006_ConcubineInteruptsHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_CIN_006_ConcubineInteruptsHealing"
      ]
    }
  },
  {
    "id": "HC2_SE_ArrivingInCirculation",
    "name": "HC2_SE_ArrivingInCirculation",
    "displayName": "Royal Gardens: Arrival in Circulation",
    "kind": "item",
    "hash": "0xc90ebc01",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_ArriveinCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_ArriveinCirculation"
      ]
    }
  },
  {
    "id": "HC2_ObjectivePlatform",
    "name": "HC2_ObjectivePlatform",
    "displayName": "Royal Gardens: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x3386c02e",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HC2"
    ],
    "children": [
      "HC2_ObjPlatform_FirstTime_PlateInactive",
      "HC2_ObjPlatform_FirstTime_PlateActive",
      "HC2_ObjPlatform_Return_PlateInactive",
      "HC2_ObjPlatform_Return_PlateActive",
      "HC2_OBJ_Platform_PowerCheck"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_000_PresentationPuzzle",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC2_ObjPlatform_Return_PlateActive",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC2_ObjPlatform_Return_PlateActive"
      ]
    }
  },
  {
    "id": "HC2_ObjPlatform_PuzzleNotCompleted",
    "name": "HC2_ObjPlatform_PuzzleNotCompleted",
    "displayName": "Royal Gardens: Platform (Puzzle Incomplete)",
    "kind": "item",
    "hash": "0x33bc4008",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_000_PresentationPuzzle",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC2_002_2ndPuzzle",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_XXX_Objectiveplatform_V7",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_XXX_Objectiveplatform_V7"
      ]
    }
  },
  {
    "id": "HC2_000_PresentationPuzzle",
    "name": "HC2_000_PresentationPuzzle",
    "displayName": "Royal Gardens: Presentation Puzzle",
    "kind": "item",
    "hash": "0x33bc4009",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_CIN_003_Arriving_In_Bubble",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_CIN_003_Arriving_In_Bubble"
      ]
    }
  },
  {
    "id": "HC2_PuzzleEndSaveState",
    "name": "HC2_PuzzleEndSaveState",
    "displayName": "Royal Gardens: Puzzle End Save State",
    "kind": "item",
    "hash": "0x97ec8180",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_002_2ndPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_MapState_2nd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_MapState_2nd"
      ]
    }
  },
  {
    "id": "HC2_FertileGround_001",
    "name": "HC2_FertileGround_001",
    "displayName": "Royal Gardens: Fertile Ground 001",
    "kind": "item",
    "hash": "0x865f3ee1",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2::op0",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "HC2_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "HC2_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "HC2_SCE_CIN_008_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_FirstHealing_HealingIntro",
        "HC2_SCE_FirstHealing_HealingOutro",
        "HC2_SCE_CIN_008_AfterHealing"
      ]
    }
  },
  {
    "id": "First Gate Open - Corruption Flowing",
    "name": "First Gate Open - Corruption Flowing",
    "displayName": "First Gate Open (Corruption Flowing)",
    "kind": "item",
    "hash": "0x8a93405e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "First Gate Open - Corruption Not Flowing",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC2_000_PresentationPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_1stGateOpen_CorruptionFlowing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_1stGateOpen_CorruptionFlowing"
      ]
    }
  },
  {
    "id": "First Gate Open - Corruption Not Flowing",
    "name": "First Gate Open - Corruption Not Flowing",
    "displayName": "First Gate Open (Corruption Cleared)",
    "kind": "item",
    "hash": "0x8a93405f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "First Gate Open - Corruption Flowing",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC2_000_PresentationPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_1stGateOpen_CorruptionNotFlowing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_1stGateOpen_CorruptionNotFlowing"
      ]
    }
  },
  {
    "id": "HC2_BossFight_LDD",
    "name": "HC2_BossFight_LDD",
    "displayName": "Royal Gardens: Boss Fight Logic",
    "kind": "item",
    "hash": "0x5ed41e04",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_002_2ndPuzzle",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC2_EndofFight_Lo_Up",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC2_EndofFight_Lo_Down",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_BossFight_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_BossFight_LDD"
      ]
    }
  },
  {
    "id": "HC2_Puzzle1stSaveState",
    "name": "HC2_Puzzle1stSaveState",
    "displayName": "Royal Gardens: Puzzle 1st Save State",
    "kind": "item",
    "hash": "0x81920000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_001_1stPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_MapState_1st",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_MapState_1st"
      ]
    }
  },
  {
    "id": "HC2_LoverFightStatusMonitor",
    "name": "HC2_LoverFightStatusMonitor",
    "displayName": "Royal Gardens: Lover Fight Status Monitor",
    "kind": "item",
    "hash": "0xcc148005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_005_FightSequence",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC2_EndofFight_Lo_Down",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_Fight_ElikaStatusMonitor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_Fight_ElikaStatusMonitor"
      ]
    }
  },
  {
    "id": "HC2_EndofFight_Lo_Down",
    "name": "HC2_EndofFight_Lo_Down",
    "displayName": "Royal Gardens: Endof Fight Lo Down",
    "kind": "item",
    "hash": "0xcc148006",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_005_FightSequence",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC2_LoverFightStatusMonitor",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_CIN_007_ConcubineEscapes_KnockDown",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_CIN_007_ConcubineEscapes_KnockDown"
      ]
    }
  },
  {
    "id": "HC2_EndofFight_Lo_Up",
    "name": "HC2_EndofFight_Lo_Up",
    "displayName": "Royal Gardens: Endof Fight Lo Up",
    "kind": "item",
    "hash": "0xcc148007",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_LoverFightStatusMonitor",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_CIN_007_ConcubineEscapes_Gotup",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_CIN_007_ConcubineEscapes_Gotup"
      ]
    }
  },
  {
    "id": "HC3_ClosingDoors",
    "name": "HC3_ClosingDoors",
    "displayName": "Palace Rooms (Concubine Lair): Closing Doors",
    "kind": "item",
    "hash": "0x2db94022",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_SCE_CIN_001_ARRIVING_ON_1ST_FLOOR",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_SCE_CIN_001_ARRIVING_ON_1ST_FLOOR"
      ]
    }
  },
  {
    "id": "HC3_Fight03_ResumeElikaForSaveMe",
    "name": "HC3_Fight03_ResumeElikaForSaveMe",
    "displayName": "Palace Rooms (Concubine Lair): Fight 03 Resume Elika For Death Storage",
    "kind": "item",
    "hash": "0x3c1f91e9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_Fight03_CaptureElika",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_SCE_Fight03_ResumeElika",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_SCE_Fight03_ResumeElika"
      ]
    }
  },
  {
    "id": "HC3_After_Final_Fight",
    "name": "HC3_After_Final_Fight",
    "displayName": "Palace Rooms (Concubine Lair): After Final Fight",
    "kind": "item",
    "hash": "0x3c1f86f2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_Fight03_CaptureElika",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_CIN_009_SE_AfterFinalFight",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_CIN_009_SE_AfterFinalFight"
      ]
    }
  },
  {
    "id": "HC3_Fight01_Manager",
    "name": "HC3_Fight01_Manager",
    "displayName": "Palace Rooms (Concubine Lair): Fight 01 Manager",
    "kind": "item",
    "hash": "0x2e1bc007",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_ClosingDoors",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_SCE_CIN_002_IllusionElika_Manager",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_SCE_CIN_002_IllusionElika_Manager"
      ]
    }
  },
  {
    "id": "HC3_Fight01_Counter_01",
    "name": "HC3_Fight01_Counter_01",
    "displayName": "Palace Rooms (Concubine Lair): Fight 01 Counter 01",
    "kind": "item",
    "hash": "0x2e1bc2ae",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_ClosingDoors",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_SCE_Fight01_Illusions_Counter",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_SCE_Fight01_Illusions_Counter"
      ]
    }
  },
  {
    "id": "HC3_Fight01_WatchConcubineHealth",
    "name": "HC3_Fight01_WatchConcubineHealth",
    "displayName": "Palace Rooms (Concubine Lair): Fight 01 Watch Concubine Health",
    "kind": "item",
    "hash": "0x2e1bc7b0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_ClosingDoors",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_SCE_CIN_003_Fight01_WatchConcubineHealth",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_SCE_CIN_003_Fight01_WatchConcubineHealth"
      ]
    }
  },
  {
    "id": "HC3_ClosingDoors2",
    "name": "HC3_ClosingDoors2",
    "displayName": "Palace Rooms (Concubine Lair): Closing Doors 2",
    "kind": "item",
    "hash": "0x3569ebfa",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_Fight01_WatchConcubineHealth",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_SCE_CIN_004_ArrivingOnSecondFloor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_SCE_CIN_004_ArrivingOnSecondFloor"
      ]
    }
  },
  {
    "id": "HC3_After_Healing",
    "name": "HC3_After_Healing",
    "displayName": "Palace Rooms (Concubine Lair): After Healing",
    "kind": "item",
    "hash": "0xd405e879",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_Fight03_CaptureElika",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_CIN_010_SE_After_Healing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_CIN_010_SE_After_Healing"
      ]
    }
  },
  {
    "id": "HC3_Fight03_CaptureElika",
    "name": "HC3_Fight03_CaptureElika",
    "displayName": "Palace Rooms (Concubine Lair): Fight 03 Capture Elika",
    "kind": "item",
    "hash": "0x3c1f8042",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_Fight02_WatchConcubineHealth",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_SCE_CIN_007_Fight03_CaptureElika",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_SCE_CIN_007_Fight03_CaptureElika"
      ]
    }
  },
  {
    "id": "HC3_Fight03_StartFightAfterSaveMe",
    "name": "HC3_Fight03_StartFightAfterSaveMe",
    "displayName": "Palace Rooms (Concubine Lair): Fight 03 Start Fight After Death Storage",
    "kind": "item",
    "hash": "0x3c1f9c30",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_Fight03_CaptureElika",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_SCE_CIN_008_Fight03_StartFightAfterSaveMe",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_SCE_CIN_008_Fight03_StartFightAfterSaveMe"
      ]
    }
  },
  {
    "id": "HC3_Fight02_WatchConcubineHealth",
    "name": "HC3_Fight02_WatchConcubineHealth",
    "displayName": "Palace Rooms (Concubine Lair): Fight 02 Watch Concubine Health",
    "kind": "item",
    "hash": "0x3569f034",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_ClosingDoors2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_SCE_Fight02_WatchConcubineHealth",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_SCE_Fight02_WatchConcubineHealth"
      ]
    }
  },
  {
    "id": "HC3_BossFight01_LDD",
    "name": "HC3_BossFight01_LDD",
    "displayName": "Palace Rooms (Concubine Lair): Boss Fight 01 Logic",
    "kind": "item",
    "hash": "0x65bf3083",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_Fight01_Manager",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC3_ClosingDoors2",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_BossFight01_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_BossFight01_LDD"
      ]
    }
  },
  {
    "id": "HC3_BossFight03_LDD",
    "name": "HC3_BossFight03_LDD",
    "displayName": "Palace Rooms (Concubine Lair): Boss Fight 03 Logic",
    "kind": "item",
    "hash": "0x65bf3086",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC3_Fight03_StartFightAfterSaveMe",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC3_BossFight03_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC3_BossFight03_LDD"
      ]
    }
  },
  {
    "id": "HC6_SCE_DestroyedColumnTeleport",
    "name": "HC6_SCE_DestroyedColumnTeleport",
    "displayName": "Cavern: Destroyed Column Teleport",
    "kind": "item",
    "hash": "0x2d70c798",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_CIN_003_TrapActivated",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_CIN_003_TrapActivated"
      ]
    }
  },
  {
    "id": "HC6_SCE_ObjectivePlatform",
    "name": "HC6_SCE_ObjectivePlatform",
    "displayName": "Cavern: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x3c9736fb",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HC6"
    ],
    "children": [
      "HC6_ObjectivePlatform_FirstTime_NotFirstHealing",
      "HC6_ObjectivePlatform_OnReturn"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_ObjectivePlatform_FirstTime_NotFirstHealing",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC6_SCE_DestroyedColumnTeleport",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC6_ObjectivePlatform_FirstTime_NotFirstHealing"
      ]
    }
  },
  {
    "id": "HC6_SCE_UnplugElika",
    "name": "HC6_SCE_UnplugElika",
    "displayName": "Cavern: Unplug Elika",
    "kind": "item",
    "hash": "0x3e0f1791",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_DestroyedColumnTeleport",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SE_XXX_UnplugElika",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SE_XXX_UnplugElika"
      ]
    }
  },
  {
    "id": "HC6_SCE_ThirdIllusionDead",
    "name": "HC6_SCE_ThirdIllusionDead",
    "displayName": "Cavern: Third Illusion Defeated",
    "kind": "item",
    "hash": "0x3e2f4671",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_SecondIllusionDead",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SE_021_ThirdIllusionBroken",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SE_021_ThirdIllusionBroken"
      ]
    }
  },
  {
    "id": "HC6_SCE_FirstIlusionDead",
    "name": "HC6_SCE_FirstIlusionDead",
    "displayName": "Cavern: First Illusion Defeated",
    "kind": "item",
    "hash": "0x92cd4197",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_DestroyedColumnTeleport",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_CIN_004_FirstIllusionBroken",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_CIN_004_FirstIllusionBroken"
      ]
    }
  },
  {
    "id": "HC6_SCE_ArrivingInCirculation",
    "name": "HC6_SCE_ArrivingInCirculation",
    "displayName": "Cavern: Arrival in Circulation",
    "kind": "item",
    "hash": "0x88618ac2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_ODD_003_ArrivingInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_ODD_003_ArrivingInCirculation"
      ]
    }
  },
  {
    "id": "HC6_SCE_ReturnInCirculation",
    "name": "HC6_SCE_ReturnInCirculation",
    "displayName": "Cavern: Return to Circulation",
    "kind": "item",
    "hash": "0x88618ac3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_ArrivingInCirculation",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_ODD_005_ReturnInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_ODD_005_ReturnInCirculation"
      ]
    }
  },
  {
    "id": "HC6_SCE_ElikaBarks",
    "name": "HC6_SCE_ElikaBarks",
    "displayName": "Cavern: Elika Barks",
    "kind": "item",
    "hash": "0x91be49b0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_DestroyedColumnTeleport",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_SCE_ThirdIllusionDead",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SE_015_ElikaBarks",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SE_015_ElikaBarks"
      ]
    }
  },
  {
    "id": "HC6_SCE_SecondIllusionDead",
    "name": "HC6_SCE_SecondIllusionDead",
    "displayName": "Cavern: Second Illusion Defeated",
    "kind": "item",
    "hash": "0x91be559c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_FirstIlusionDead",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SE_020_SecondIllusionDead",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SE_020_SecondIllusionDead"
      ]
    }
  },
  {
    "id": "HC6_SCE_EndFight",
    "name": "HC6_SCE_EndFight",
    "displayName": "Cavern: End Fight",
    "kind": "item",
    "hash": "0x91be574b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_FightIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_CIN_005_EndOfFight",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_CIN_005_EndOfFight"
      ]
    }
  },
  {
    "id": "HC6_SCE_FightIntro",
    "name": "HC6_SCE_FightIntro",
    "displayName": "Cavern: Fight Intro",
    "kind": "item",
    "hash": "0x60448a07",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_ConcubineOnFightPlatform",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SE_022_FightIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SE_022_FightIntro"
      ]
    }
  },
  {
    "id": "HC6_SCE_FightLDD",
    "name": "HC6_SCE_FightLDD",
    "displayName": "Cavern: Fight Logic",
    "kind": "item",
    "hash": "0x5ee7c009",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_EndFight",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC6_SCE_ThirdIllusionDead",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_BossFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_BossFightLDD"
      ]
    }
  },
  {
    "id": "HC6_SCE_ConcubineOnFightPlatform",
    "name": "HC6_SCE_ConcubineOnFightPlatform",
    "displayName": "Cavern: Concubine On Fight Platform",
    "kind": "item",
    "hash": "0x6fd849a5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_ThirdIllusionDead",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SE_022_ConcubineOnFightPlatform",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SE_022_ConcubineOnFightPlatform"
      ]
    }
  },
  {
    "id": "HC6_CapturedElika_Colmap",
    "name": "HC6_CapturedElika_Colmap",
    "displayName": "Cavern: Captured Elika Collision Map",
    "kind": "item",
    "hash": "0x746cc64b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_DestroyedColumnTeleport",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_SCE_ThirdIllusionDead",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_CapturedElika_Colmap",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_CapturedElika_Colmap"
      ]
    }
  },
  {
    "id": "HC6_SCE_FirstConcubineAtmosphere",
    "name": "HC6_SCE_FirstConcubineAtmosphere",
    "displayName": "Cavern: First Concubine Atmosphere",
    "kind": "item",
    "hash": "0xce2c014c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_DestroyedColumnTeleport",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_FirstConcubineAtmosphere",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_FirstConcubineAtmosphere"
      ]
    }
  },
  {
    "id": "HC6_SCE_SecondConcubineAtmosphere",
    "name": "HC6_SCE_SecondConcubineAtmosphere",
    "displayName": "Cavern: Second Concubine Atmosphere",
    "kind": "item",
    "hash": "0xce2c0170",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_FirstIlusionDead",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SecondConcubineAtmosphere",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SecondConcubineAtmosphere"
      ]
    }
  },
  {
    "id": "HC6_SCE_ThirdConcubineAtmosphere",
    "name": "HC6_SCE_ThirdConcubineAtmosphere",
    "displayName": "Cavern: Third Concubine Atmosphere",
    "kind": "item",
    "hash": "0xce2c0193",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_SecondIllusionDead",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_ThirdConcubineAtmosphere",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_ThirdConcubineAtmosphere"
      ]
    }
  },
  {
    "id": "HC6_SCE_RemoveJumpAbility",
    "name": "HC6_SCE_RemoveJumpAbility",
    "displayName": "Cavern: Remove Jump Ability",
    "kind": "item",
    "hash": "0xdb0e9757",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC6_SCE_ThirdIllusionDead",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_RemoveJumpAbility",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_RemoveJumpAbility"
      ]
    }
  },
  {
    "id": "HC5_ObjectivePlatform",
    "name": "HC5_ObjectivePlatform",
    "displayName": "Royal Spire: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x46d94097",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HC5"
    ],
    "children": [
      "HC5_ObjPlatform_FirstTime_PlateInactive",
      "HC5_ObjPlatform_FirstTime_PlateActive",
      "HC5_ObjPlatform_Return_PlateInactive",
      "HC5_ObjPlatform_Return_PlateActive",
      "HC5_OBJ_Platform_PowerCheck"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_ObjPlatform_Return_PlateActive",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC5_ObjPlatform_Return_PlateActive"
      ]
    }
  },
  {
    "id": "HC5_001_FightIntro",
    "name": "HC5_001_FightIntro",
    "displayName": "Royal Spire: Fight Intro",
    "kind": "item",
    "hash": "0x4d8bcef0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_003_Arriving_On_Platform",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_CIN_006_FightIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_CIN_006_FightIntro"
      ]
    }
  },
  {
    "id": "HC5_002_FightEnd",
    "name": "HC5_002_FightEnd",
    "displayName": "Royal Spire: Fight End",
    "kind": "item",
    "hash": "0x4d8bcef4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_001_FightIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_CIN_007_FightEnd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "HC5_TRG_Checkpoint_008"
          },
          {
            "op": "activate",
            "target": "HC5_RLever_01_001"
          },
          {
            "op": "activate",
            "target": "HC5_RLever_01_001"
          },
          {
            "op": "activate",
            "target": "HC5_RLever_01_001"
          },
          {
            "op": "activate",
            "target": "HC5_RLever_01_001"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_CIN_007_FightEnd"
      ]
    }
  },
  {
    "id": "HC5_FertileGround",
    "name": "HC5_FertileGround",
    "displayName": "Royal Spire: Fertile Ground",
    "kind": "item",
    "hash": "0x85a79498",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_002_FightEnd",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "HC5_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "HC5_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "HC5_SCE_CIN_008_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_FirstHealing_HealingIntro",
        "HC5_SCE_FirstHealing_HealingOutro",
        "HC5_SCE_CIN_008_AfterHealing"
      ]
    }
  },
  {
    "id": "HC5_003_Arriving_In_Circulation",
    "name": "HC5_003_Arriving_In_Circulation",
    "displayName": "Royal Spire: Arrival in Circulation",
    "kind": "item",
    "hash": "0x91cb3da6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_SE_002_ArrivinginCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_SE_002_ArrivinginCirculation"
      ]
    }
  },
  {
    "id": "HC5_003_Arriving_On_Platform",
    "name": "HC5_003_Arriving_On_Platform",
    "displayName": "Royal Spire: Arriving On Platform",
    "kind": "item",
    "hash": "0x91cb3daa",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_CIN_003_Arriving_On_Platform",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_CIN_003_Arriving_On_Platform"
      ]
    }
  },
  {
    "id": "HC5_Leaving_Bubble",
    "name": "HC5_Leaving_Bubble",
    "displayName": "Royal Spire: Leaving Fertile Ground Level",
    "kind": "item",
    "hash": "0xa32c0004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_FertileGround",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_ODD_SE_Leaving Bubble",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_ODD_SE_Leaving Bubble"
      ]
    }
  },
  {
    "id": "HC5_IntroToConcubine",
    "name": "HC5_IntroToConcubine",
    "displayName": "Royal Spire: Intro To Concubine",
    "kind": "item",
    "hash": "0x9208f6eb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_001_FightIntro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_SE_015_IntroToConcubine",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_SE_015_IntroToConcubine"
      ]
    }
  },
  {
    "id": "HC5_FinalPlatform",
    "name": "HC5_FinalPlatform",
    "displayName": "Royal Spire: Final Platform",
    "kind": "item",
    "hash": "0x9208f6f2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_003_Arriving_On_Platform",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC5_001_FightIntro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_SE_016_Final_Platform",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_SE_016_Final_Platform"
      ]
    }
  },
  {
    "id": "HC5_ReturnInCirculation",
    "name": "HC5_ReturnInCirculation",
    "displayName": "Royal Spire: Return to Circulation",
    "kind": "item",
    "hash": "0xa27ee938",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_003_Arriving_In_Circulation",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_ODD_004_ReturnInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_ODD_004_ReturnInCirculation"
      ]
    }
  },
  {
    "id": "HC5_FightLDD",
    "name": "HC5_FightLDD",
    "displayName": "Royal Spire: Fight Logic",
    "kind": "item",
    "hash": "0x5f72c004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_003_Arriving_On_Platform",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC5_002_FightEnd",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_BossFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_BossFightLDD"
      ]
    }
  },
  {
    "id": "HC5_Fight_ElikaMonitor",
    "name": "HC5_Fight_ElikaMonitor",
    "displayName": "Royal Spire: Fight Elika Monitor",
    "kind": "item",
    "hash": "0xe257abf7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_001_FightIntro",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC5_002_FightEnd",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_Fight_ElikaMonitor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_Fight_ElikaMonitor"
      ]
    }
  },
  {
    "id": "HC5_ODD_FailedGrapple",
    "name": "HC5_ODD_FailedGrapple",
    "displayName": "Royal Spire: Dialogue: Failed Hand of Ormazd (Blue Plate)",
    "kind": "item",
    "hash": "0xe622989d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_003_Arriving_On_Platform",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC5_FinalPlatform",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_ODD_FailedGrapple",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_ODD_FailedGrapple"
      ]
    }
  },
  {
    "id": "HC4_CIN_ConcubineEscapes",
    "name": "HC4_CIN_ConcubineEscapes",
    "displayName": "Coronation Hall: Cutscene: Concubine Escapes",
    "kind": "item",
    "hash": "0x493ec0fc",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_ConcubineReturns",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_CIN_011_ConcubineEscapes",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_CIN_011_ConcubineEscapes"
      ]
    }
  },
  {
    "id": "HC4_Objective_Platform",
    "name": "HC4_Objective_Platform",
    "displayName": "Coronation Hall: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x493ec0e9",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [
      "HC4_ObjPlatform_FirstTime_PlateInactive",
      "HC4_ObjPlatform_Return_PlateInactive",
      "HC4_ObjPlatform_FirstTime_PlateActive",
      "HC4_ObjPlatform_Return_PlateActive",
      "HC4_OBJ_Platform_PowerCheck"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_ObjPlatform_Return_PlateActive",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC4_SE_1rstillusion",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "HC4_ObjPlatform_Return_PlateActive"
      ]
    }
  },
  {
    "id": "HC4_SE_ConcubineReturns",
    "name": "HC4_SE_ConcubineReturns",
    "displayName": "Coronation Hall: Concubine Returns",
    "kind": "item",
    "hash": "0x493ec0fb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_TrapsReleased",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_CIN_SE_006_ConcubineReturns",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_CIN_SE_006_ConcubineReturns"
      ]
    }
  },
  {
    "id": "HC4_CIN_ElikaTrapped",
    "name": "HC4_CIN_ElikaTrapped",
    "displayName": "Coronation Hall: Cutscene: Elika Trapped",
    "kind": "item",
    "hash": "0x493ec0f3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_ElikaTrapped",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_ElikaTrapped"
      ]
    }
  },
  {
    "id": "HC4_SE_1rstillusion",
    "name": "HC4_SE_1rstillusion",
    "displayName": "Coronation Hall: First Illusion",
    "kind": "item",
    "hash": "0x493ec0f4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_CIN_ElikaTrapped",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_1rstillusion",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_1rstillusion"
      ]
    }
  },
  {
    "id": "HC4_SE_IfPlayerDiesWhenElikaTrappedActivate2ndCOL",
    "name": "HC4_SE_IfPlayerDiesWhenElikaTrappedActivate2ndCOL",
    "displayName": "Coronation Hall: If Player Dies When Elika Trapped Activate 2nd Collision",
    "kind": "item",
    "hash": "0xd89747a8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_CIN_ElikaTrapped",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC4_SE_Elika_Returns",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_IfplayerDiesWhenElikaTrappedActivate2ndCOL",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_IfplayerDiesWhenElikaTrappedActivate2ndCOL"
      ]
    }
  },
  {
    "id": "HC4_SE_4thIllusion",
    "name": "HC4_SE_4thIllusion",
    "displayName": "Coronation Hall: Fourth Illusion",
    "kind": "item",
    "hash": "0x493ec0f6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_3rdillusion",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_4thIllusion",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_4thIllusion"
      ]
    }
  },
  {
    "id": "HC4_SE_ActivateFertileGround",
    "name": "HC4_SE_ActivateFertileGround",
    "displayName": "Coronation Hall: Activate Fertile Ground",
    "kind": "item",
    "hash": "0x5d328b6d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_CIN_ConcubineEscapes",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_ActivateFertileGround",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_ActivateFertileGround"
      ]
    }
  },
  {
    "id": "HC4_FertileGround",
    "name": "HC4_FertileGround",
    "displayName": "Coronation Hall: Fertile Ground",
    "kind": "item",
    "hash": "0x50673f58",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_ActivateFertileGround",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "HC4_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "HC4_SCE_CIN_015_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "HC4_TRG_Checkpoint_009"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_FirstHealing_HealingIntro",
        "HC4_SCE_CIN_015_AfterHealing"
      ]
    }
  },
  {
    "id": "HC4_SE_Elika_Returns",
    "name": "HC4_SE_Elika_Returns",
    "displayName": "Coronation Hall: Elika Returns",
    "kind": "item",
    "hash": "0x5c768005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_CIN_SE_Elika_Returns",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "HC4_TRG_Checkpoint_005"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_CIN_SE_Elika_Returns"
      ]
    }
  },
  {
    "id": "HC4_SE_TrapsReleased",
    "name": "HC4_SE_TrapsReleased",
    "displayName": "Coronation Hall: Traps Released",
    "kind": "item",
    "hash": "0x493ec0fa",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_Elika_Returns",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_TrapsReleased",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_TrapsReleased"
      ]
    }
  },
  {
    "id": "HC4_SE_BossFightLDD",
    "name": "HC4_SE_BossFightLDD",
    "displayName": "Coronation Hall: Boss Fight Logic",
    "kind": "item",
    "hash": "0x67e54031",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_TrapsReleased",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC4_CIN_ConcubineEscapes",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_BossFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_BossFightLDD"
      ]
    }
  },
  {
    "id": "HC4_SE_ExtendedDeathHeightSlides",
    "name": "HC4_SE_ExtendedDeathHeightSlides",
    "displayName": "Coronation Hall: Extended Death Height Slides",
    "kind": "item",
    "hash": "0x892ad88f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_3rdillusion",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_ExtendedDeathHeightForSlides",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_ExtendedDeathHeightForSlides"
      ]
    }
  },
  {
    "id": "HC4_SE_RingSwitch1",
    "name": "HC4_SE_RingSwitch1",
    "displayName": "Coronation Hall: Ring Switch 1",
    "kind": "item",
    "hash": "0x89d7000c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_Elika_Returns",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_RingSwitch1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_RingSwitch1"
      ]
    }
  },
  {
    "id": "HC4_SE_RingSwitch2",
    "name": "HC4_SE_RingSwitch2",
    "displayName": "Coronation Hall: Ring Switch 2",
    "kind": "item",
    "hash": "0x89d70011",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_Elika_Returns",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_RingSwitch2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_RingSwitch2"
      ]
    }
  },
  {
    "id": "HC4_SE_KeepElikaTrapped",
    "name": "HC4_SE_KeepElikaTrapped",
    "displayName": "Coronation Hall: Keep Elika Trapped",
    "kind": "item",
    "hash": "0x8a6698b7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_CIN_ElikaTrapped",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_KeepElikaTrapped",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_KeepElikaTrapped"
      ]
    }
  },
  {
    "id": "HC4_SE_2ndillusion",
    "name": "HC4_SE_2ndillusion",
    "displayName": "Coronation Hall: Second Illusion",
    "kind": "item",
    "hash": "0x8c088000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_1rstillusion",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_2ndillusion",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_2ndillusion"
      ]
    }
  },
  {
    "id": "HC4_SE_3rdillusion",
    "name": "HC4_SE_3rdillusion",
    "displayName": "Coronation Hall: Third Illusion",
    "kind": "item",
    "hash": "0x8c088001",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_CentralPeak"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_SE_2ndillusion",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_3rdillusion",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_3rdillusion"
      ]
    }
  },
  {
    "id": "HC1_ArrivingInHC",
    "name": "HC1_ArrivingInHC",
    "displayName": "Spire of Dreams: Arriving In HC",
    "kind": "item",
    "hash": "0xa27ed621",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC_ArrivingInHC"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_002_ArrivingInHC",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_002_ArrivingInHC"
      ]
    }
  },
  {
    "id": "HC5_ArrivingInHC",
    "name": "HC5_ArrivingInHC",
    "displayName": "Royal Spire: Arriving In HC",
    "kind": "item",
    "hash": "0xa27ed622",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC_ArrivingInHC"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_002_ArrivingInHC",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_002_ArrivingInHC"
      ]
    }
  },
  {
    "id": "HC6_ArrivingInHC",
    "name": "HC6_ArrivingInHC",
    "displayName": "Cavern: Arriving In HC",
    "kind": "item",
    "hash": "0xa27ed623",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC_ArrivingInHC"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SE_002_ArrivingInHC",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SE_002_ArrivingInHC"
      ]
    }
  },
  {
    "id": "LR1_ObjectivePlatform",
    "name": "LR1_ObjectivePlatform",
    "displayName": "Tower of Ormazd: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x06c5a282",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LR1"
    ],
    "children": [
      "LR1_SCE_SE_Objectiveplatform_V1",
      "LR1_Pr_Power_Monitor",
      "LR1_SCE_SE_Objectiveplatform_V3"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_WarriorFight_Sequence",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR1_SCE_SE_Objectiveplatform_V3",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR1_SCE_SE_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "LR1_WarriorFight_Sequence",
    "name": "LR1_WarriorFight_Sequence",
    "displayName": "Tower of Ormazd: Warrior Fight Sequence",
    "kind": "item",
    "hash": "0x52884f0f",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LR1"
    ],
    "children": [
      "LR1_SE_013_FightHints",
      "LR1_SE_WarriorFight",
      "LR1_CIN_006_1stPillar_FacialAnim",
      "LR1_CIN_007_2ndPillar_FacialAnim",
      "LR1_SCE_LDD"
    ],
    "gates": [
      "LR1_WarriorFight_Sequence::op0"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_WarriorFight_Sequence::op0",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR1_WarriorFight_Sequence::op0"
      ]
    }
  },
  {
    "id": "LR1_SE_026_GPBubbleHealing",
    "name": "LR1_SE_026_GPBubbleHealing",
    "displayName": "Tower of Ormazd: GP Fertile Ground Level Healing",
    "kind": "item",
    "hash": "0x70d5505d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_TOWER_COLLAPSE_013",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SE_026_GPBubbleHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SE_026_GPBubbleHealing"
      ]
    }
  },
  {
    "id": "LR1_TOWER_COLLAPSE",
    "name": "LR1_TOWER_COLLAPSE",
    "displayName": "Tower of Ormazd: TOWER COLLAPSE",
    "kind": "item",
    "hash": "0x06c5a2b6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "LR1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_WarriorFight_Sequence",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_CIN_TOWER_COLLAPSE_001",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_002",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_003",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_004",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_005",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_006",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_007",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_008",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_009",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_010",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_011",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_012",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SCE_CIN_TOWER_COLLAPSE_001",
        "LR1_SCE_SE_TOWER_COLLAPSE_002",
        "LR1_SCE_SE_TOWER_COLLAPSE_003",
        "LR1_SCE_SE_TOWER_COLLAPSE_004",
        "LR1_SCE_SE_TOWER_COLLAPSE_005",
        "LR1_SCE_SE_TOWER_COLLAPSE_006",
        "LR1_SCE_SE_TOWER_COLLAPSE_007",
        "LR1_SCE_SE_TOWER_COLLAPSE_008",
        "LR1_SCE_SE_TOWER_COLLAPSE_009",
        "LR1_SCE_SE_TOWER_COLLAPSE_010",
        "LR1_SCE_SE_TOWER_COLLAPSE_011",
        "LR1_SCE_SE_TOWER_COLLAPSE_012"
      ]
    }
  },
  {
    "id": "LR1_SE_018_1stBalcony",
    "name": "LR1_SE_018_1stBalcony",
    "displayName": "Tower of Ormazd: 1st Balcony",
    "kind": "item",
    "hash": "0x68cbde96",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_WarriorFight_Sequence",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SE_018_FirstBalcony",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SE_018_FirstBalcony"
      ]
    }
  },
  {
    "id": "LR1_FertileGround",
    "name": "LR1_FertileGround",
    "displayName": "Tower of Ormazd: Fertile Ground",
    "kind": "item",
    "hash": "0x85e3d020",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_SE_026_GPBubbleHealing",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "LR1_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "LR1_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "LR1_CIN_011_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "LR1_TRG_CheckPoint_012"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SCE_FirstHealing_HealingIntro",
        "LR1_SCE_FirstHealing_HealingOutro",
        "LR1_CIN_011_AfterHealing"
      ]
    }
  },
  {
    "id": "LR1_Tower_Collapse_014",
    "name": "LR1_Tower_Collapse_014",
    "displayName": "Tower of Ormazd: Tower Collapse 014",
    "kind": "item",
    "hash": "0x8cb0164a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_WarriorFight_Sequence",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR1_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_TOWER_COLLAPSE_014",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SCE_SE_TOWER_COLLAPSE_014"
      ]
    }
  },
  {
    "id": "LR1_TOWER_COLLAPSE_013",
    "name": "LR1_TOWER_COLLAPSE_013",
    "displayName": "Tower of Ormazd: TOWER COLLAPSE 013",
    "kind": "item",
    "hash": "0xb745c002",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_WarriorFight_Sequence",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_CIN_TOWER_COLLAPSE_013",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SCE_CIN_TOWER_COLLAPSE_013"
      ]
    }
  },
  {
    "id": "LR3_SCE_WARRIOR_Stage1",
    "name": "LR3_SCE_WARRIOR_Stage1",
    "displayName": "Warrior's Fortress: WARRIOR Stage 1",
    "kind": "item",
    "hash": "0x4f318004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR3_SCE_WARRIOR_Stage1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR3_SCE_WARRIOR_Stage1"
      ]
    }
  },
  {
    "id": "LR3_SCE_WARRIOR_Stage2",
    "name": "LR3_SCE_WARRIOR_Stage2",
    "displayName": "Warrior's Fortress: WARRIOR Stage 2",
    "kind": "item",
    "hash": "0x4f318005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_SCE_WARRIOR_Stage1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR3_SCE_WARRIOR_Stage2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR3_SCE_WARRIOR_Stage2"
      ]
    }
  },
  {
    "id": "LR35_CIN_007_AfterEscapingFortress",
    "name": "LR35_CIN_007_AfterEscapingFortress",
    "displayName": "Warrior's Fortress <-> City of Light: Cutscene - After Escaping Fortress",
    "kind": "item",
    "hash": "0x5894006c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR35_StickCollapse_01",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR3_CIN_007_AfterEscapingFortress",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR3_CIN_007_AfterEscapingFortress"
      ]
    }
  },
  {
    "id": "LR35_StickCollapse_05",
    "name": "LR35_StickCollapse_05",
    "displayName": "Warrior's Fortress <-> City of Light: Stick Collapse 05",
    "kind": "item",
    "hash": "0x740b002d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_CIN_ArriveAtStick",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR35_SCE_LairExit_005",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR35_SCE_LairExit_005"
      ]
    }
  },
  {
    "id": "LR3_CIN_002_FightPlatform",
    "name": "LR3_CIN_002_FightPlatform",
    "displayName": "Warrior's Fortress: Cutscene: Fight Platform",
    "kind": "item",
    "hash": "0x5894006a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR3_CIN_002_FightPlatform",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR3_CIN_002_FightPlatform"
      ]
    }
  },
  {
    "id": "LR35_StickCollapse_01",
    "name": "LR35_StickCollapse_01",
    "displayName": "Warrior's Fortress <-> City of Light: Stick Collapse 01",
    "kind": "item",
    "hash": "0x71394b2b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_CIN_ArriveAtStick",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR35_SCE_LairExit_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR35_SCE_LairExit_001"
      ]
    }
  },
  {
    "id": "LR35_StickCollapse_02",
    "name": "LR35_StickCollapse_02",
    "displayName": "Warrior's Fortress <-> City of Light: Stick Collapse 02",
    "kind": "item",
    "hash": "0x740b002a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_CIN_ArriveAtStick",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR35_SCE_LairExit_002",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR35_SCE_LairExit_002"
      ]
    }
  },
  {
    "id": "LR35_StickCollapse_03",
    "name": "LR35_StickCollapse_03",
    "displayName": "Warrior's Fortress <-> City of Light: Stick Collapse 03",
    "kind": "item",
    "hash": "0x740b002b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_CIN_ArriveAtStick",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR35_SCE_LairExit_003",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR35_SCE_LairExit_003"
      ]
    }
  },
  {
    "id": "LR35_StickCollapse_04",
    "name": "LR35_StickCollapse_04",
    "displayName": "Warrior's Fortress <-> City of Light: Stick Collapse 04",
    "kind": "item",
    "hash": "0x740b002c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_CIN_ArriveAtStick",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR35_SCE_LairExit_004",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR35_SCE_LairExit_004"
      ]
    }
  },
  {
    "id": "LR3_SCE_WARRIOR_Outro",
    "name": "LR3_SCE_WARRIOR_Outro",
    "displayName": "Warrior's Fortress: WARRIOR Outro",
    "kind": "item",
    "hash": "0x5e9c1460",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_SCE_WARRIOR_Stage1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR3_CIN_005_DeathOfWarriorKing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR3_CIN_005_DeathOfWarriorKing"
      ]
    }
  },
  {
    "id": "LR3_SCE_Warrior_LDD_001",
    "name": "LR3_SCE_Warrior_LDD_001",
    "displayName": "Warrior's Fortress: Warrior Logic 001",
    "kind": "item",
    "hash": "0x67b80003",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_SCE_WARRIOR_Stage1",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR3_CIN_002_FightPlatform",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR3_SCE_Warrior_LDD_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR3_SCE_Warrior_LDD_001"
      ]
    }
  },
  {
    "id": "LR3_SCE_WARRIOR_TAUNT",
    "name": "LR3_SCE_WARRIOR_TAUNT",
    "displayName": "Warrior's Fortress: WARRIOR TAUNT",
    "kind": "item",
    "hash": "0x5e9c1462",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_SCE_WARRIOR_Stage1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR3_SCE_WARRIOR_Stage2",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR3_SE_017_WarriorWeakens",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR3_SE_017_WarriorWeakens"
      ]
    }
  },
  {
    "id": "LR3_CIN_ArriveAtStick",
    "name": "LR3_CIN_ArriveAtStick",
    "displayName": "Warrior's Fortress: Cutscene: Arrive At Stick",
    "kind": "item",
    "hash": "0xd58b8049",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR3_SCE_WARRIOR_Outro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR3_SCE_WARRIOR_Stage3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR3_SCE_WARRIOR_Stage3"
      ]
    }
  },
  {
    "id": "LR6_ObjectivePlatform",
    "name": "LR6_ObjectivePlatform",
    "displayName": "City Gate: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x155214df",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LR6"
    ],
    "children": [
      "LR6_CIN_002_ObjPlat_1stTimeABubbleHealed"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SCE_Collapse_01",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR6_CIN_002_ObjPlat_1stTimeABubbleHealed",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR6_CIN_002_ObjPlat_1stTimeABubbleHealed"
      ]
    }
  },
  {
    "id": "LR6_SCE_Collapse_03",
    "name": "LR6_SCE_Collapse_03",
    "displayName": "City Gate: Collapse 03",
    "kind": "item",
    "hash": "0x155214e0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "LR6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SCE_Collapse_01",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_Collapse_003",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_Collapse_003"
      ]
    }
  },
  {
    "id": "LR6_SCE_FIGHT",
    "name": "LR6_SCE_FIGHT",
    "displayName": "City Gate: FIGHT",
    "kind": "item",
    "hash": "0x155214f1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SCE_Collapse_02",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_SE_Fight",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_SE_Fight"
      ]
    }
  },
  {
    "id": "LR6_SCE_WarriorWatches",
    "name": "LR6_SCE_WarriorWatches",
    "displayName": "City Gate: Warrior Watches",
    "kind": "item",
    "hash": "0x8f668d98",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_SE_014_WarriorWatches",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_SE_014_WarriorWatches"
      ]
    }
  },
  {
    "id": "LR6_FightIntro",
    "name": "LR6_FightIntro",
    "displayName": "City Gate: Fight Intro",
    "kind": "item",
    "hash": "0xa411d3d4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SCE_Collapse_02",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_CIN_005_FightIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_CIN_005_FightIntro"
      ]
    }
  },
  {
    "id": "LR6_SCE_FightOutro",
    "name": "LR6_SCE_FightOutro",
    "displayName": "City Gate: Fight Outro",
    "kind": "item",
    "hash": "0xa411d2b2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_FightIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_CIN_006_FightOutro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 3,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "LR6_FIGHT_Warrior_Spawner"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_CIN_006_FightOutro"
      ]
    }
  },
  {
    "id": "LR6_SCE_Warrior_LDD",
    "name": "LR6_SCE_Warrior_LDD",
    "displayName": "City Gate: Warrior Logic",
    "kind": "item",
    "hash": "0x6fb2c000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SCE_FightOutro",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR6_SCE_Collapse_02",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_Warrior_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_Warrior_LDD"
      ]
    }
  },
  {
    "id": "LR6_SCE_Collapse_02",
    "name": "LR6_SCE_Collapse_02",
    "displayName": "City Gate: Collapse 02",
    "kind": "item",
    "hash": "0x8c080005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR6_SCE_Collapse_01",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_Collapse_002",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "LR6_TRG_Checkpoint_004"
          },
          {
            "op": "deactivate",
            "target": "LR6_TRG_Checkpoint_005"
          },
          {
            "op": "deactivate",
            "target": "LR6_TRG_Checkpoint_008"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_Collapse_002"
      ]
    }
  },
  {
    "id": "LR6_SCE_Collapse_01",
    "name": "LR6_SCE_Collapse_01",
    "displayName": "City Gate: Collapse 01",
    "kind": "item",
    "hash": "0x8c080008",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_Collapse_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "LR6_TRG_Checkpoint_004"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_Collapse_001"
      ]
    }
  },
  {
    "id": "LR4_ObjectivePlatform",
    "name": "LR4_ObjectivePlatform",
    "displayName": "Queen's Tower: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x3c378082",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LR4"
    ],
    "children": [
      "LR4_ObjPlatform_FirstTime_PlateInactive",
      "LR4_ObjPlatform_FirstTime_PlateActive",
      "LR4_Pr_Power_Monitor",
      "LR4_ODD_003_ArrivingInCirculation_1stTime"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4_SE_012_EnteringBubble",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "LR4_FertileGround",
    "name": "LR4_FertileGround",
    "displayName": "Queen's Tower: Fertile Ground",
    "kind": "item",
    "hash": "0x8611e5b0",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4_Fight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "LR4_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "LR4_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "LR4_CIN_006_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_SCE_FirstHealing_HealingIntro",
        "LR4_SCE_FirstHealing_HealingOutro",
        "LR4_CIN_006_AfterHealing"
      ]
    }
  },
  {
    "id": "LR4_Fight",
    "name": "LR4_Fight",
    "displayName": "Queen's Tower: Fight",
    "kind": "item",
    "hash": "0x3c378084",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4_SE_012_EnteringBubble",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_SCE_CIN_FightIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR4_SCE_SE_Trap",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_SCE_CIN_FightIntro",
        "LR4_SCE_SE_Trap"
      ]
    }
  },
  {
    "id": "LR4_ExitDoor",
    "name": "LR4_ExitDoor",
    "displayName": "Queen's Tower: Exit Door",
    "kind": "item",
    "hash": "0x3c378085",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4_FertileGround",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_SCE_SE_ExitDoor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_SCE_SE_ExitDoor"
      ]
    }
  },
  {
    "id": "LR4_SE_012_EnteringBubble",
    "name": "LR4_SE_012_EnteringBubble",
    "displayName": "Queen's Tower: Entering Fertile Ground Level",
    "kind": "item",
    "hash": "0x5a935e93",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_SE_012_EnteringBubble",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_SE_012_EnteringBubble"
      ]
    }
  },
  {
    "id": "LR4_SCE_Warrior_LDD",
    "name": "LR4_SCE_Warrior_LDD",
    "displayName": "Queen's Tower: Warrior Logic",
    "kind": "item",
    "hash": "0x6ee90003",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4_SE_012_EnteringBubble",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_SCE_Warrior_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_SCE_Warrior_LDD"
      ]
    }
  },
  {
    "id": "LR2_ObjectivePlatform",
    "name": "LR2_ObjectivePlatform",
    "displayName": "Tower of Ahriman: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x3e11c05e",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LR2"
    ],
    "children": [
      "LR2_ObjPlatform_FirstTime_PlateInactive",
      "LR2_ObjPlatform_FirstTime_PlateActive",
      "LR2_Pr_Power_Monitor",
      "LR2_ODD_003_ArrivingInCirculation_1stTime"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_001_ChallengeBeginning",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR2_ObjPlatform_FirstTime_PlateActive",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR2_ObjPlatform_FirstTime_PlateActive"
      ]
    }
  },
  {
    "id": "LR2_ObjPlatform_PuzzleNotCompleted",
    "name": "LR2_ObjPlatform_PuzzleNotCompleted",
    "displayName": "Tower of Ahriman: Platform (Puzzle Incomplete)",
    "kind": "item",
    "hash": "0x3e11c05f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_001_ChallengeBeginning",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR2_002_Fight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SCE_SE_Objectiveplatform_V7",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_SE_Objectiveplatform_V7"
      ]
    }
  },
  {
    "id": "LR2_Puzzles_Challenges",
    "name": "LR2_Puzzles_Challenges",
    "displayName": "Tower of Ahriman: Puzzles Challenges",
    "kind": "item",
    "hash": "0x50c411e6",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LR2"
    ],
    "children": [
      "LR2_CIN_003_1stPuzzlePlatform",
      "LR2_CIN_005_CrankActivation",
      "LR2_SE_019_4thPuzzle",
      "LR2_ODD_4thPuzzleCrankDone",
      "LR2_Failsafe"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_001_ChallengeBeginning",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR2_ODD_4thPuzzleCrankDone",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR2_Failsafe",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR2_ODD_4thPuzzleCrankDone",
        "LR2_Failsafe"
      ]
    }
  },
  {
    "id": "LR2_002_Fight",
    "name": "LR2_002_Fight",
    "displayName": "Tower of Ahriman: Fight",
    "kind": "item",
    "hash": "0x3e11c0fb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_EndOfFight",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR2_001_ChallengeBeginning",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR2_Puzzles_Challenges",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SCE_CIN_FightIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_CIN_FightIntro"
      ]
    }
  },
  {
    "id": "LR2_001_ChallengeBeginning",
    "name": "LR2_001_ChallengeBeginning",
    "displayName": "Tower of Ahriman: Challenge Beginning",
    "kind": "item",
    "hash": "0x3e11c101",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SCE_SE_ChallengeBeginning",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_SE_ChallengeBeginning"
      ]
    }
  },
  {
    "id": "LR2_004_FertileGround",
    "name": "LR2_004_FertileGround",
    "displayName": "Tower of Ahriman: Fertile Ground",
    "kind": "item",
    "hash": "0x3e11d3f3",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_EndOfFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "LR2_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "LR2_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "LR2_CIN_009_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_FirstHealing_HealingIntro",
        "LR2_SCE_FirstHealing_HealingOutro",
        "LR2_CIN_009_AfterHealing"
      ]
    }
  },
  {
    "id": "LR2_EndOfFight",
    "name": "LR2_EndOfFight",
    "displayName": "Tower of Ahriman: End Of Fight",
    "kind": "item",
    "hash": "0x6c0f8067",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_001_ChallengeBeginning",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SCE_CIN_FightOutro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "LR2_TRG_Checkpoint_012"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_CIN_FightOutro"
      ]
    }
  },
  {
    "id": "LR2_SCE_Warrior_LDD",
    "name": "LR2_SCE_Warrior_LDD",
    "displayName": "Tower of Ahriman: Warrior Logic",
    "kind": "item",
    "hash": "0x6fb2ded5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_001_ChallengeBeginning",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR2_EndOfFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SCE_Warrior_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_Warrior_LDD"
      ]
    }
  },
  {
    "id": "LR5_ObjectivePlatform",
    "name": "LR5_ObjectivePlatform",
    "displayName": "City of Light: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x45628fa0",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "LR5"
    ],
    "children": [
      "LR5_ObjPlatform_FirstTime_PlateInactive",
      "LR5_ObjPlatform_FirstTime_PlateActive",
      "LR5_Pr_Power_Monitor"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_TrapRelease",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "LR5_ObjPlatform_FirstTime_PlateActive",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "LR5_ObjPlatform_FirstTime_PlateActive"
      ]
    }
  },
  {
    "id": "LR5_TrapRelease",
    "name": "LR5_TrapRelease",
    "displayName": "City of Light: Trap Release",
    "kind": "item",
    "hash": "0x45628fc5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SE_012_EnteringBubble",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SCE_CIN_TrapRealease",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SE_012_EnteringBubble",
        "LR5_SCE_CIN_TrapRealease"
      ]
    }
  },
  {
    "id": "LR5_Fight",
    "name": "LR5_Fight",
    "displayName": "City of Light: Fight",
    "kind": "item",
    "hash": "0x45628fc6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_MiddleOfWallRun",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SCE_SE_FightCell",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SCE_SE_FightCell"
      ]
    }
  },
  {
    "id": "LR5_FightIntro",
    "name": "LR5_FightIntro",
    "displayName": "City of Light: Fight Intro",
    "kind": "item",
    "hash": "0x310c1e92",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_MiddleOfWallRun",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SCE_CIN_FightIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SCE_CIN_FightIntro"
      ]
    }
  },
  {
    "id": "LR5_FertileGround",
    "name": "LR5_FertileGround",
    "displayName": "City of Light: Fertile Ground",
    "kind": "item",
    "hash": "0x8611f848",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_Fight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "LR5_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "LR5_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "LR5_SCE_FirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SCE_FirstHealing_HealingIntro",
        "LR5_SCE_FirstHealing_HealingOutro",
        "LR5_SCE_FirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "LR5_SE_019_WarriorTrapped",
    "name": "LR5_SE_019_WarriorTrapped",
    "displayName": "City of Light: Warrior Trapped",
    "kind": "item",
    "hash": "0x9334eb55",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_Fight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SE_019_WarriorTrapped",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SE_019_WarriorTrapped"
      ]
    }
  },
  {
    "id": "LR5_MiddleOfWallRun",
    "name": "LR5_MiddleOfWallRun",
    "displayName": "City of Light: Middle Of Wall Run",
    "kind": "item",
    "hash": "0xc71926b7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_TrapRelease",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SE_022_MiddleOfWallrun",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SE_022_MiddleOfWallrun"
      ]
    }
  },
  {
    "id": "LR5_CallElikaWhenHealing",
    "name": "LR5_CallElikaWhenHealing",
    "displayName": "City of Light: Call Elika When Healing",
    "kind": "item",
    "hash": "0x7ae14024",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_MiddleOfWallRun",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_CallElikaWhenHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_CallElikaWhenHealing"
      ]
    }
  },
  {
    "id": "LR5_Warriorlooping",
    "name": "LR5_Warriorlooping",
    "displayName": "City of Light: Warriorlooping",
    "kind": "item",
    "hash": "0x69ad0005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_WarriorLooping",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_WarriorLooping"
      ]
    }
  },
  {
    "id": "LR6_SE_002_1stArriveInCirculation",
    "name": "LR6_SE_002_1stArriveInCirculation",
    "displayName": "City Gate: 1st Arrive In Circulation",
    "kind": "item",
    "hash": "0x5b73c006",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR_1stArriveInCirculation"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_SE_002_1stArriveInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_SE_002_1stArriveInCirculation"
      ]
    }
  },
  {
    "id": "LR1_ODD_003_1stArriveInCirculation",
    "name": "LR1_ODD_003_1stArriveInCirculation",
    "displayName": "Tower of Ormazd: Dialogue: 1st Arrive In Circulation",
    "kind": "item",
    "hash": "0x5b73c007",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR_1stArriveInCirculation"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_ODD_003_1stArrivingInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_ODD_003_1stArrivingInCirculation"
      ]
    }
  },
  {
    "id": "LR4_CIN_1stArrive_in_Circulation",
    "name": "LR4_CIN_1stArrive_in_Circulation",
    "displayName": "Queen's Tower: Cutscene: 1st Arrive in Circulation",
    "kind": "item",
    "hash": "0xa7876a42",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CIN_1stArrive_in_Circulation"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_CIN_1stArrive_in_Circulation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_CIN_1stArrive_in_Circulation"
      ]
    }
  },
  {
    "id": "LR1_CIN_1stArrive_in_Circulation",
    "name": "LR1_CIN_1stArrive_in_Circulation",
    "displayName": "Tower of Ormazd: Cutscene: 1st Arrive in Circulation",
    "kind": "item",
    "hash": "0xa7876a43",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "CIN_1stArrive_in_Circulation"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_CIN_1stArrive_in_Circulation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_CIN_1stArrive_in_Circulation"
      ]
    }
  },
  {
    "id": "OB1_001_BossFight",
    "name": "OB1_001_BossFight",
    "displayName": "Machinery Ground: Boss Fight",
    "kind": "item",
    "hash": "0x07e4c000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_013_FightIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_014_FightEnd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "OB1_TRG_Checkpoint_002"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_SE_013_FightIntro",
        "OB1_SCE_SE_014_FightEnd"
      ]
    }
  },
  {
    "id": "OB1_CIN_HealingOnPlatforms",
    "name": "OB1_CIN_HealingOnPlatforms",
    "displayName": "Machinery Ground: Cutscene: Healing On Platforms",
    "kind": "item",
    "hash": "0x33590543",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_001_BossFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_CIN_003_ReachSafeGround2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_CIN_003_ReachSafeGround2"
      ]
    }
  },
  {
    "id": "OB1_ObjectivePlatform",
    "name": "OB1_ObjectivePlatform",
    "displayName": "Machinery Ground: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x07c14045",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "OB1"
    ],
    "children": [
      "OB1_ObjPlatform_FirstTime_PlateInactive",
      "OB1_ObjPlatform_FirstTime_PlateActive",
      "OB1_ObjPlatform_Return_PlateInactive",
      "OB1_SCE_OBJ_Platform_PowerCheck"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_001_BossFight",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB1_ObjPlatform_FirstTime_PlateActive",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB1_ObjPlatform_FirstTime_PlateActive"
      ]
    }
  },
  {
    "id": "OB1_003_Poison",
    "name": "OB1_003_Poison",
    "displayName": "Machinery Ground: Poison",
    "kind": "item",
    "hash": "0x0d7b14bb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_001_BossFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_Poison",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_Poison"
      ]
    }
  },
  {
    "id": "OB1_004_PoisonCleansed",
    "name": "OB1_004_PoisonCleansed",
    "displayName": "Machinery Ground: Poison Cleansed",
    "kind": "item",
    "hash": "0x0d7b17ad",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_FertileGround",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_CIN_007_PoisonCleansed",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_CIN_007_PoisonCleansed"
      ]
    }
  },
  {
    "id": "OB1_SCE_SE_ArrivingInCirculationFirstTime",
    "name": "OB1_SCE_SE_ArrivingInCirculationFirstTime",
    "displayName": "Machinery Ground: First Arrival in Circulation",
    "kind": "item",
    "hash": "0x50dc11bc",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_ArrivingInCirculationFirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_SE_ArrivingInCirculationFirstTime"
      ]
    }
  },
  {
    "id": "OB1_SCE_SE_ReturningInCirculation",
    "name": "OB1_SCE_SE_ReturningInCirculation",
    "displayName": "Machinery Ground: Return to Circulation",
    "kind": "item",
    "hash": "0x50dc11bd",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_SCE_SE_ArrivingInCirculationFirstTime",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB1_FertileGround",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_ReturningInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_SE_ReturningInCirculation"
      ]
    }
  },
  {
    "id": "OB1_FertileGround",
    "name": "OB1_FertileGround",
    "displayName": "Machinery Ground: Fertile Ground",
    "kind": "item",
    "hash": "0x83f936a4",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_001_BossFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "OB1_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "OB1_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "OB1_SCE_FirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_FirstHealing_HealingIntro",
        "OB1_SCE_FirstHealing_HealingOutro",
        "OB1_SCE_FirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "OB1_BossFightLDD",
    "name": "OB1_BossFightLDD",
    "displayName": "Machinery Ground: Boss Fight Logic",
    "kind": "item",
    "hash": "0x679e8017",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_001_BossFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_BossFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_BossFightLDD"
      ]
    }
  },
  {
    "id": "OB2_ObjectivePlatform",
    "name": "OB2_ObjectivePlatform",
    "displayName": "Heaven's Stair: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x16e740ee",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "OB2"
    ],
    "children": [
      "OB2_ObjPlatform_FirstTime_PlateInactive",
      "OB2_ObjPlatform_FirstTime_PlateActive",
      "OB2_ObjPlatform_Return_PlateInactive"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_001_GenericFight",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB2_ObjPlatform_FirstTime_PlateActive",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB2_ObjPlatform_FirstTime_PlateActive"
      ]
    }
  },
  {
    "id": "OB2_001_GenericFight",
    "name": "OB2_001_GenericFight",
    "displayName": "Heaven's Stair: Generic Fight",
    "kind": "item",
    "hash": "0x16e771bf",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_013_FirstFight",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_014_FirstFightEnd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "OB2_TRIGGER_Checkpoint_003"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_SE_013_FirstFight",
        "OB2_SCE_SE_014_FirstFightEnd"
      ]
    }
  },
  {
    "id": "OB2_002_ChallengeIntro",
    "name": "OB2_002_ChallengeIntro",
    "displayName": "Heaven's Stair: Challenge Intro",
    "kind": "item",
    "hash": "0x16e771c0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_001_GenericFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_CIN_003_ChallengeIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_CIN_003_ChallengeIntro"
      ]
    }
  },
  {
    "id": "OB2_003_GooGasActivation",
    "name": "OB2_003_GooGasActivation",
    "displayName": "Heaven's Stair: Goo Gas Activation",
    "kind": "item",
    "hash": "0x16e771d1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_002_ChallengeIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_CIN_004_GooGasActivation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_CIN_004_GooGasActivation"
      ]
    }
  },
  {
    "id": "OB2_005_BossFight",
    "name": "OB2_005_BossFight",
    "displayName": "Heaven's Stair: Boss Fight",
    "kind": "item",
    "hash": "0x16e771c2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_004_Challenge",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_CIN_006_Fight2Intro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_CIN_007_Fight2End",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "OB2_TRIGGER_Checkpoint_012"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_CIN_006_Fight2Intro",
        "OB2_SCE_CIN_007_Fight2End"
      ]
    }
  },
  {
    "id": "OB2_004_Challenge",
    "name": "OB2_004_Challenge",
    "displayName": "Heaven's Stair: Challenge",
    "kind": "item",
    "hash": "0x17e62795",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_003_GooGasActivation",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_CIN_005_ChallengeCompleted",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_CIN_005_ChallengeCompleted"
      ]
    }
  },
  {
    "id": "OB2_PowerPlateCovers",
    "name": "OB2_PowerPlateCovers",
    "displayName": "Heaven's Stair: Power Plate Covers",
    "kind": "item",
    "hash": "0x17e630fa",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_003_GooGasActivation",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_PPcover_001",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_PPcover_002",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_PPcover_003",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_PPcover_004",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_SE_PPcover_001",
        "OB2_SCE_SE_PPcover_002",
        "OB2_SCE_SE_PPcover_003",
        "OB2_SCE_SE_PPcover_004"
      ]
    }
  },
  {
    "id": "OB2_SCE_FertileGround_001",
    "name": "OB2_SCE_FertileGround_001",
    "displayName": "Heaven's Stair: Fertile Ground 001",
    "kind": "item",
    "hash": "0x5539d95c",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_005_BossFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "OB2_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "OB2_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "OB2_SCE_CIN_008_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_FirstHealing_HealingIntro",
        "OB2_SCE_FirstHealing_HealingOutro",
        "OB2_SCE_CIN_008_AfterHealing"
      ]
    }
  },
  {
    "id": "OB2_SCE_SE_RingSwitches_Activated",
    "name": "OB2_SCE_SE_RingSwitches_Activated",
    "displayName": "Heaven's Stair: Ring Switches Activated",
    "kind": "item",
    "hash": "0x52fd4000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_002_ChallengeIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_RingSwitch_001_Activated",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_RingSwitch_002_Activated",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_RingSwitch_003_Activated",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_RingSwitch_004_Activated",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_Ringswitches",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_SE_RingSwitch_001_Activated",
        "OB2_SCE_SE_RingSwitch_002_Activated",
        "OB2_SCE_SE_RingSwitch_003_Activated",
        "OB2_SCE_SE_RingSwitch_004_Activated",
        "OB2_SCE_SE_Ringswitches"
      ]
    }
  },
  {
    "id": "OB2_SCE_ODD_AcrossFightGate",
    "name": "OB2_SCE_ODD_AcrossFightGate",
    "displayName": "Heaven's Stair: Dialogue: Across Fight Gate",
    "kind": "item",
    "hash": "0x925dc008",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_AcrossFightGate",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_SE_AcrossFightGate"
      ]
    }
  },
  {
    "id": "OB2_SCE_ArrivingAtTopOfElevator",
    "name": "OB2_SCE_ArrivingAtTopOfElevator",
    "displayName": "Heaven's Stair: Arriving At Top Of Elevator",
    "kind": "item",
    "hash": "0x925dc009",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_004_Challenge",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB2_005_BossFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_ArrivingAtTopOfElevator",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_SE_ArrivingAtTopOfElevator"
      ]
    }
  },
  {
    "id": "OB2_SCE_ODD_ArrivingInCirculation",
    "name": "OB2_SCE_ODD_ArrivingInCirculation",
    "displayName": "Heaven's Stair: Dialogue: Arrival in Circulation",
    "kind": "item",
    "hash": "0x925dc010",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_ArrivingInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_SE_ArrivingInCirculation"
      ]
    }
  },
  {
    "id": "OB2_FightDoor_Activation",
    "name": "OB2_FightDoor_Activation",
    "displayName": "Heaven's Stair: Fight Door Activation",
    "kind": "item",
    "hash": "0x98970030",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_001_GenericFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_FightDoorActivation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_SE_FightDoorActivation"
      ]
    }
  },
  {
    "id": "OB2_FightKillMonitor",
    "name": "OB2_FightKillMonitor",
    "displayName": "Heaven's Stair: Fight Kill Monitor",
    "kind": "item",
    "hash": "0xcf734576",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_004_Challenge",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_FightKillMonitor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_FightKillMonitor"
      ]
    }
  },
  {
    "id": "OB2_BossFight_LDD",
    "name": "OB2_BossFight_LDD",
    "displayName": "Heaven's Stair: Boss Fight Logic",
    "kind": "item",
    "hash": "0x4decc000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_004_Challenge",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB2_005_BossFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_BossFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_BossFightLDD"
      ]
    }
  },
  {
    "id": "OB3_004_FinalFight",
    "name": "OB3_004_FinalFight",
    "displayName": "Observatory (Alchemist Lair): Final Fight",
    "kind": "item",
    "hash": "0x22528ab7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB3_003_GenericFight_002",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_CIN_004_FightIntro_02",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_CIN_005_FightOutro_02",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB3_SCE_CIN_004_FightIntro_02",
        "OB3_SCE_CIN_005_FightOutro_02"
      ]
    }
  },
  {
    "id": "OB3_001_FirstFight",
    "name": "OB3_001_FirstFight",
    "displayName": "Observatory (Alchemist Lair): First Fight",
    "kind": "item",
    "hash": "0x513d00d3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_CIN_001_FightIntro_01",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_SE_FightManager",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_CIN_002_FightOutro_01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB3_SCE_CIN_001_FightIntro_01",
        "OB3_SCE_SE_FightManager",
        "OB3_SCE_CIN_002_FightOutro_01"
      ]
    }
  },
  {
    "id": "OB3_002_GenericFight_001",
    "name": "OB3_002_GenericFight_001",
    "displayName": "Observatory (Alchemist Lair): Generic Fight 001",
    "kind": "item",
    "hash": "0x513d00d4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB3_001_FirstFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_CIN_003_GenericFight_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 0,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "OB3_TRIGGER_Checkpoint_004"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "OB3_TRIGGER_Checkpoint_004"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB3_SCE_CIN_003_GenericFight_001"
      ]
    }
  },
  {
    "id": "OB3_003_GenericFight_002",
    "name": "OB3_003_GenericFight_002",
    "displayName": "Observatory (Alchemist Lair): Generic Fight 002",
    "kind": "item",
    "hash": "0x5160c000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB3_002_GenericFight_001",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_SE_GenericFight_002",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 0,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "OB3_TRIGGER_Checkpoint_005"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "OB3_TRIGGER_Checkpoint_005"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB3_SCE_SE_GenericFight_002"
      ]
    }
  },
  {
    "id": "OB3_FightMechanics",
    "name": "OB3_FightMechanics",
    "displayName": "Observatory (Alchemist Lair): Fight Mechanics",
    "kind": "item",
    "hash": "0x5160c00a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "OB3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB3_001_FirstFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_SE_FightMechanic_GooAttack",
        "terminationOutputIdx": 1
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_SE_MechanismActivation",
        "terminationOutputIdx": 1
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB3_SCE_SE_FightMechanic_GooAttack",
        "OB3_SCE_SE_MechanismActivation"
      ]
    }
  },
  {
    "id": "OB3_ResetStage",
    "name": "OB3_ResetStage",
    "displayName": "Observatory (Alchemist Lair): Reset Stage",
    "kind": "item",
    "hash": "0x58db0439",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "OB3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB3_001_FirstFight",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB3_003_GenericFight_002",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_ResetStage",
        "terminationOutputIdx": 1
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 0,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "OB3_TRIGGER_Checkpoint_002"
          },
          {
            "op": "deactivate",
            "target": "OB3_TRIGGER_Checkpoint_003"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB3_SCE_ResetStage"
      ]
    }
  },
  {
    "id": "OB3_FinalFightLDD",
    "name": "OB3_FinalFightLDD",
    "displayName": "Observatory (Alchemist Lair): Final Fight Logic",
    "kind": "item",
    "hash": "0x68baec01",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB3_004_FinalFight",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB3_003_GenericFight_002",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_FinalFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB3_SCE_FinalFightLDD"
      ]
    }
  },
  {
    "id": "OB3_FirstFightLDD",
    "name": "OB3_FirstFightLDD",
    "displayName": "Observatory (Alchemist Lair): First Fight Logic",
    "kind": "item",
    "hash": "0x691a803c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB3_001_FirstFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB3_SCE_FirstFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB3_SCE_FirstFightLDD"
      ]
    }
  },
  {
    "id": "OB5_FightMechanics",
    "name": "OB5_FightMechanics",
    "displayName": "Reservoir: Fight Mechanics",
    "kind": "item",
    "hash": "0x25efcee1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_002_BossFight",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB5_002_BossFight",
        "inverted": false,
        "port": "Normal"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_SE_FightMechanics",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_SE_FightMechanics"
      ]
    }
  },
  {
    "id": "OB5_ObjectivePlatform",
    "name": "OB5_ObjectivePlatform",
    "displayName": "Reservoir: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x263bc000",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "OB5"
    ],
    "children": [
      "OB5_ObjPlatform_FirstTime_PlateInactive",
      "OB5_ObjPlatform_FirstTime_PlateActive",
      "OB5_ObjPlatform_Return_PlateInactive",
      "OB5_ObjPlatform_Return_PlateActive"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_001_BossIntroduction",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB5_ObjPlatform_Return_PlateActive",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB5_ObjPlatform_Return_PlateActive"
      ]
    }
  },
  {
    "id": "OB5_001_BossIntroduction",
    "name": "OB5_001_BossIntroduction",
    "displayName": "Reservoir: Boss Introduction",
    "kind": "item",
    "hash": "0x26c8807a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_SE_ArrivingInCirulationFirstTime",
        "inverted": false,
        "port": "Normal"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_CIN_003_AlchemistIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_CIN_003_AlchemistIntro"
      ]
    }
  },
  {
    "id": "OB5_002_BossFight",
    "name": "OB5_002_BossFight",
    "displayName": "Reservoir: Boss Fight",
    "kind": "item",
    "hash": "0x26c8807b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_001_BossIntroduction",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_SE_BossFight",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_SE_BossFight"
      ]
    }
  },
  {
    "id": "OB5_003_BossEnd",
    "name": "OB5_003_BossEnd",
    "displayName": "Reservoir: Boss End",
    "kind": "item",
    "hash": "0x26c88083",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_002_BossFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_CIN_004_AlchemistEscapes",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_CIN_004_AlchemistEscapes"
      ]
    }
  },
  {
    "id": "OB5_SE_ArrivingInCirulationFirstTime",
    "name": "OB5_SE_ArrivingInCirulationFirstTime",
    "displayName": "Reservoir: First Arrival in Circulation",
    "kind": "item",
    "hash": "0x5231403e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_ODD_ArrivinginCirculation",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_SE_012_EnteringBubble",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_ODD_ArrivinginCirculation",
        "OB5_SCE_SE_012_EnteringBubble"
      ]
    }
  },
  {
    "id": "OB5_FertileGround",
    "name": "OB5_FertileGround",
    "displayName": "Reservoir: Fertile Ground",
    "kind": "item",
    "hash": "0x83f909a3",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_003_BossEnd",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "OB5_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "OB5_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "OB5_SCE_CIN_005_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_FirstHealing_HealingIntro",
        "OB5_SCE_FirstHealing_HealingOutro",
        "OB5_SCE_CIN_005_AfterHealing"
      ]
    }
  },
  {
    "id": "OB5_BossTaunts",
    "name": "OB5_BossTaunts",
    "displayName": "Reservoir: Boss Taunts",
    "kind": "item",
    "hash": "0x6783a41b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_003_BossEnd",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB5_001_BossIntroduction",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_BossFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_BossFightLDD"
      ]
    }
  },
  {
    "id": "OB6_ObjectivePlatform",
    "name": "OB6_ObjectivePlatform",
    "displayName": "Cauldron: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x2c524894",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "OB6"
    ],
    "children": [
      "OB6_ObjPlatform_FirstTime_BubbleHealed"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_001_AlchemistIntroduction",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB6_ObjPlatform_FirstTime_BubbleHealed",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB6_ObjPlatform_FirstTime_BubbleHealed"
      ]
    }
  },
  {
    "id": "OB6_001_AlchemistIntroduction",
    "name": "OB6_001_AlchemistIntroduction",
    "displayName": "Cauldron: Alchemist Introduction",
    "kind": "item",
    "hash": "0x3331c000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_CIN_004_AlchemistIntroduction",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_CIN_004_AlchemistIntroduction"
      ]
    }
  },
  {
    "id": "OB6_002_BossFight",
    "name": "OB6_002_BossFight",
    "displayName": "Cauldron: Boss Fight",
    "kind": "item",
    "hash": "0x3331c001",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_001_AlchemistIntroduction",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_CIN_005_FightIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_CIN_005_FightIntro"
      ]
    }
  },
  {
    "id": "OB6_003_FightEnd",
    "name": "OB6_003_FightEnd",
    "displayName": "Cauldron: Fight End",
    "kind": "item",
    "hash": "0x3331c002",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_002_BossFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_CIN_006_FightEnd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_CIN_006_FightEnd"
      ]
    }
  },
  {
    "id": "OB6_GooRising",
    "name": "OB6_GooRising",
    "displayName": "Cauldron: Goo Rising",
    "kind": "item",
    "hash": "0x4db1d89a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_001_AlchemistIntroduction",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB6_002_BossFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_SE_019_GooRising_002",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_SE_018_GooRising_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_SE_019_GooRising_002",
        "OB6_SCE_SE_018_GooRising_001"
      ]
    }
  },
  {
    "id": "OB6_SCE_SE_RoofingTutorial",
    "name": "OB6_SCE_SE_RoofingTutorial",
    "displayName": "Cauldron: Ceiling Run (Roofing) Tutorial",
    "kind": "item",
    "hash": "0x506263be",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_SCE_SE_IfPlayerGoesWrongWay",
        "inverted": false,
        "port": "Normal"
      },
      {
        "source": "OB6_002_BossFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "OB6_SCE_SE_IfPlayerGoesWrongWay",
    "name": "OB6_SCE_SE_IfPlayerGoesWrongWay",
    "displayName": "Cauldron: If Player Goes Wrong Way",
    "kind": "item",
    "hash": "0x506263bf",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_GooRising",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB6_002_BossFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "OB6_SCE_004_Circulation_NotFirstTime",
    "name": "OB6_SCE_004_Circulation_NotFirstTime",
    "displayName": "Cauldron: Circulation Not First Time",
    "kind": "item",
    "hash": "0x84bfbab6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_SCE_002_Circulation_FirstTime",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_ODD_004_ReturninginCirculation_Not1st",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_ODD_004_ReturninginCirculation_Not1st"
      ]
    }
  },
  {
    "id": "OB6_SCE_002_Circulation_FirstTime",
    "name": "OB6_SCE_002_Circulation_FirstTime",
    "displayName": "Cauldron: Circulation First Time",
    "kind": "item",
    "hash": "0x84bfbab5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_ODD_002_ArriveinCirculation_1st_time",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_ODD_002_ArriveinCirculation_1st_time"
      ]
    }
  },
  {
    "id": "OB6_AlchemistDeathCheck",
    "name": "OB6_AlchemistDeathCheck",
    "displayName": "Cauldron: Alchemist Death Check",
    "kind": "item",
    "hash": "0x5d2cda3f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_002_BossFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_AlchemistDeathCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_AlchemistDeathCheck"
      ]
    }
  },
  {
    "id": "OB6_BossTaunts",
    "name": "OB6_BossTaunts",
    "displayName": "Cauldron: Boss Taunts",
    "kind": "item",
    "hash": "0x68b142f1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB6"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB6_002_BossFight",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB6_003_FightEnd",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_BossFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_BossFightLDD"
      ]
    }
  },
  {
    "id": "OB4_ObjectivePlatform",
    "name": "OB4_ObjectivePlatform",
    "displayName": "Construction Yard: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x40138a3b",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "OB4"
    ],
    "children": [
      "OB4_ObjPlatform_FirstTime_PlateInactive",
      "OB4_ObjPlatform_Return_PlateInactive",
      "OB4_ObjPlatform_Return_PlateActive",
      "OB4_ObjPlatform_FirstTime_PlateActive",
      "OB4_SCE_SE_ObjPlat_PowerCheck"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_ObjPlatform_Return_PlateActive",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB4_003_BossIntro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB4_ObjPlatform_Return_PlateActive"
      ]
    }
  },
  {
    "id": "OB4_001_PuzzleIntroduction",
    "name": "OB4_001_PuzzleIntroduction",
    "displayName": "Construction Yard: Puzzle Introduction",
    "kind": "item",
    "hash": "0x41b2404f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_002_Puzzle",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_CIN_003_AlchemistBlocksTheWay",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 3,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_CIN_003_AlchemistBlocksTheWay"
      ]
    }
  },
  {
    "id": "OB4_002_Puzzle",
    "name": "OB4_002_Puzzle",
    "displayName": "Construction Yard: Puzzle",
    "kind": "item",
    "hash": "0x43160045",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "OB4"
    ],
    "children": [
      "OB4_PuzzleChallenge",
      "OB4_PuzzleReturn",
      "OB4_PuzzleLeverHint",
      "OB4_SCE_SE_022_MainPlatformCrank",
      "OB4_PuzzleLongBeamHint"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_PuzzleChallenge",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "OB4_TRG_Checkpoint_009"
          },
          {
            "op": "deactivate",
            "target": "OB4_TRG_Checkpoint_008"
          },
          {
            "op": "deactivate",
            "target": "OB4_TRG_Checkpoint_007"
          },
          {
            "op": "deactivate",
            "target": "OB4_TRG_Checkpoint_006"
          },
          {
            "op": "deactivate",
            "target": "OB4_TRG_Checkpoint_005"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "OB4_PuzzleChallenge"
      ]
    }
  },
  {
    "id": "OB4_003_BossIntro",
    "name": "OB4_003_BossIntro",
    "displayName": "Construction Yard: Boss Intro",
    "kind": "item",
    "hash": "0x41b24b4d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_002_Puzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_CIN_005_FightIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_CIN_005_FightIntro"
      ]
    }
  },
  {
    "id": "OB4_004_BossEnd",
    "name": "OB4_004_BossEnd",
    "displayName": "Construction Yard: Boss End",
    "kind": "item",
    "hash": "0x41b24b4e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "OB4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_003_BossIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_CIN_006_FightEnd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "OB4_TRG_Checkpoint_010"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_CIN_006_FightEnd"
      ]
    }
  },
  {
    "id": "OB4_SCE_014_ElikaLeverSpeech",
    "name": "OB4_SCE_014_ElikaLeverSpeech",
    "displayName": "Construction Yard: Elika Lever Speech",
    "kind": "item",
    "hash": "0x8a08269b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_001_PuzzleIntroduction",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_SE_014_ElikaLeverSpeech",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_SE_014_ElikaLeverSpeech"
      ]
    }
  },
  {
    "id": "OB4_SCE_SE_ArrivingInCirculation",
    "name": "OB4_SCE_SE_ArrivingInCirculation",
    "displayName": "Construction Yard: Arrival in Circulation",
    "kind": "item",
    "hash": "0x52af0000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_ODD_003_ArrivingInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_ODD_003_ArrivingInCirculation"
      ]
    }
  },
  {
    "id": "OB4_FertileGround",
    "name": "OB4_FertileGround",
    "displayName": "Construction Yard: Fertile Ground",
    "kind": "item",
    "hash": "0x83f91645",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_004_BossEnd",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "OB4_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "OB4_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "OB4_SCE_CIN_007_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 0,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "OB4_LDM_FertileGround_Beam"
          },
          {
            "op": "activate",
            "target": "OB4_LDM_FertileGround"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_FirstHealing_HealingIntro",
        "OB4_SCE_FirstHealing_HealingOutro",
        "OB4_SCE_CIN_007_AfterHealing"
      ]
    }
  },
  {
    "id": "OB4_SCE_PivotingPlatformState",
    "name": "OB4_SCE_PivotingPlatformState",
    "displayName": "Construction Yard: Pivoting Platform State",
    "kind": "item",
    "hash": "0x3eb98e8f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_PivotingPlatformState",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_PivotingPlatformState"
      ]
    }
  },
  {
    "id": "OB4_BossTaunts",
    "name": "OB4_BossTaunts",
    "displayName": "Construction Yard: Boss Taunts",
    "kind": "item",
    "hash": "0x67838000",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_003_BossIntro",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB4_004_BossEnd",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_BossFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_BossFightLDD"
      ]
    }
  },
  {
    "id": "OB4_DeathCheck",
    "name": "OB4_DeathCheck",
    "displayName": "Construction Yard: Death Check",
    "kind": "item",
    "hash": "0x8baf8067",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_003_BossIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_CIN_006_Alchemist_DeathCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_CIN_006_Alchemist_DeathCheck"
      ]
    }
  },
  {
    "id": "OB6_FirstTimeInOB",
    "name": "OB6_FirstTimeInOB",
    "displayName": "Cauldron: First Time In OB",
    "kind": "item",
    "hash": "0x9c8a579e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB_FirstTimeInOB"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_SE_002_FirstTimeInOB",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_SE_002_FirstTimeInOB"
      ]
    }
  },
  {
    "id": "OB1_FirstTimeInOB",
    "name": "OB1_FirstTimeInOB",
    "displayName": "Machinery Ground: First Time In OB",
    "kind": "item",
    "hash": "0x9c8a579f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB_FirstTimeInOB"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_002_ArrivingInOB",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_SE_002_ArrivingInOB"
      ]
    }
  },
  {
    "id": "OB5_FirstTimeInOB",
    "name": "OB5_FirstTimeInOB",
    "displayName": "Reservoir: First Time In OB",
    "kind": "item",
    "hash": "0x9c8a57a0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB_FirstTimeInOB"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_SE_002_ArrivingInOB",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_SE_002_ArrivingInOB"
      ]
    }
  },
  {
    "id": "OB1_ReturnInOB",
    "name": "OB1_ReturnInOB",
    "displayName": "Machinery Ground: Return In OB",
    "kind": "item",
    "hash": "0x9c8a57b1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB_ReturnInOB"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_004_ReturningInOB",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_SE_004_ReturningInOB"
      ]
    }
  },
  {
    "id": "OB5_ReturnInOB",
    "name": "OB5_ReturnInOB",
    "displayName": "Reservoir: Return In OB",
    "kind": "item",
    "hash": "0x9c8a57b2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB_ReturnInOB"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_SE_004_ReturnInOB",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_SE_004_ReturnInOB"
      ]
    }
  },
  {
    "id": "RC1_IntroToBubble_001",
    "name": "RC1_IntroToBubble_001",
    "displayName": "Windmills: Intro To Fertile Ground Level 001",
    "kind": "item",
    "hash": "0x0f2e8004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_012_EnteringWindmill",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_012_EnteringWindmill"
      ]
    }
  },
  {
    "id": "RC1_SCE_SE_XXX_Circulation_Puzzle_Return",
    "name": "RC1_SCE_SE_XXX_Circulation_Puzzle_Return",
    "displayName": "Windmills: Circulation Puzzle Return",
    "kind": "item",
    "hash": "0x4d1e6760",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_IntroPuzzle1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_Circulation_Puzzle_Return",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_XXX_Circulation_Puzzle_Return"
      ]
    }
  },
  {
    "id": "RC1_AfterReboundFailed",
    "name": "RC1_AfterReboundFailed",
    "displayName": "Windmills: After Breath of Ormazd (Red Plate) Failed",
    "kind": "item",
    "hash": "0x5a6d347e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": true,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_IntroToBubble_001",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_AfterReboundFailed",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_AfterReboundFailed"
      ]
    }
  },
  {
    "id": "RC1_Circulation_V1",
    "name": "RC1_Circulation_V1",
    "displayName": "Windmills: Circulation v1",
    "kind": "item",
    "hash": "0x0f2e800b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_002_Circulation_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_002_Circulation_V1"
      ]
    }
  },
  {
    "id": "RC1_FertileGround",
    "name": "RC1_FertileGround",
    "displayName": "Windmills: Fertile Ground",
    "kind": "item",
    "hash": "0x1c40699b",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_EndFight01",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "RC1_SCE_CIN_004_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "RC1_SCE_CIN_004_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "RC1_SCE_CIN_004_FirstHealing_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC1_TRG_Checkpoint_010"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_CIN_004_FirstHealing_HealingIntro",
        "RC1_SCE_CIN_004_FirstHealing_HealingOutro",
        "RC1_SCE_CIN_004_FirstHealing_AfterHealing"
      ]
    }
  },
  {
    "id": "RC1_Puzzle1",
    "name": "RC1_Puzzle1",
    "displayName": "Windmills: Puzzle 1",
    "kind": "item",
    "hash": "0x0f2e8014",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_IntroPuzzle1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC1_SE_ShutdownPuzzle1",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1POS1",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1POS2",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1POS3",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1POS4",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1IndicatorCW",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1IndicatorCCW",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1CWRotation",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1CCWRotation",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1CheckRtGear01",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ1CheckLtGear01",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_019_PUZ1Victory",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_XXX_PUZ1POS1",
        "RC1_SCE_SE_XXX_PUZ1POS2",
        "RC1_SCE_SE_XXX_PUZ1POS3",
        "RC1_SCE_SE_XXX_PUZ1POS4",
        "RC1_SCE_SE_XXX_PUZ1IndicatorCW",
        "RC1_SCE_SE_XXX_PUZ1IndicatorCCW",
        "RC1_SCE_SE_XXX_PUZ1CWRotation",
        "RC1_SCE_SE_XXX_PUZ1CCWRotation",
        "RC1_SCE_SE_XXX_PUZ1CheckRtGear01",
        "RC1_SCE_SE_XXX_PUZ1CheckLtGear01",
        "RC1_SCE_SE_019_PUZ1Victory"
      ]
    }
  },
  {
    "id": "RC1_SCE_SE_XXX_PUZ1ElikaHints_Return",
    "name": "RC1_SCE_SE_XXX_PUZ1ElikaHints_Return",
    "displayName": "Windmills: Puzzle 1 Elika Hints Return",
    "kind": "item",
    "hash": "0x4d1e6780",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_Windmill::op0",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC1_Puzzle1",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_015_IntroPuzzle1_Return",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_015_IntroPuzzle1_Return"
      ]
    }
  },
  {
    "id": "RC1_Fight01Intro",
    "name": "RC1_Fight01Intro",
    "displayName": "Windmills: Fight 01 Intro",
    "kind": "item",
    "hash": "0x0f3446e1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_IntroPuzzle1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_025_Fight01Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC1_TRG_Checkpoint_006"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_025_Fight01Intro"
      ]
    }
  },
  {
    "id": "RC1_EndFight01",
    "name": "RC1_EndFight01",
    "displayName": "Windmills: End Fight 01",
    "kind": "item",
    "hash": "0x0f3446ea",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_Fight01Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_026_EndOfFight01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC1_TRG_Checkpoint_009"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_026_EndOfFight01"
      ]
    }
  },
  {
    "id": "RC1_ObjectivePlatform",
    "name": "RC1_ObjectivePlatform",
    "displayName": "Windmills: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x0f2e801c",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RC1_Windmill"
    ],
    "children": [
      "RC1_ObjPlatform_FirstTime_PlateInactive",
      "RC1_ObjPlatform_Return_PlateInactive",
      "RC1_ObjPlatform_FirstTime_PlateActive",
      "RC1_ObjPlatform_Return_PlateActive",
      "RC1_SCE_OBJ_Plaform_PowerCheck"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_ObjPlatform_Return_PlateActive",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC1_IntroPuzzle1",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC1_ObjPlatform_Return_PlateActive"
      ]
    }
  },
  {
    "id": "RC1_Circulation_V2",
    "name": "RC1_Circulation_V2",
    "displayName": "Windmills: Circulation v2",
    "kind": "item",
    "hash": "0x0f345b1d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_Circulation_V1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC1_EndFight01",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_004_Circulation_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_004_Circulation_V2"
      ]
    }
  },
  {
    "id": "RC1_IntroPuzzle1",
    "name": "RC1_IntroPuzzle1",
    "displayName": "Windmills: Intro Puzzle 1",
    "kind": "item",
    "hash": "0x0f344029",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_IntroToBubble_001",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC1_IntroPuzzle2",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_014_IntroPuzzle1_FirstTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_014_IntroPuzzle1_FirstTime"
      ]
    }
  },
  {
    "id": "RC1_SCE_SE_CheckFirstRotation",
    "name": "RC1_SCE_SE_CheckFirstRotation",
    "displayName": "Windmills: Check First Rotation",
    "kind": "item",
    "hash": "0x53a1402c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_IntroPuzzle1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_CheckRotation_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_CheckRotation_V1"
      ]
    }
  },
  {
    "id": "RC1_IntroPuzzle2",
    "name": "RC1_IntroPuzzle2",
    "displayName": "Windmills: Intro Puzzle 2",
    "kind": "item",
    "hash": "0x0f3446c3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_IntroPuzzle1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_021_IntroPuzzle2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_021_IntroPuzzle2"
      ]
    }
  },
  {
    "id": "RC1_Puzzle2",
    "name": "RC1_Puzzle2",
    "displayName": "Windmills: Puzzle 2",
    "kind": "item",
    "hash": "0x0f3446c4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_IntroPuzzle1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC1_SE_ShutDownPuzzle2",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2POS1",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2POS2",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2POS3",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2POS4",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2IndicatorCW",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2IndicatorCCW",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2CWRotation",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2CCWRotation",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2CheckLtGear01",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2CheckMiddleGear01",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_XXX_PUZ2CheckRtGear01",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_023_PUZ2Victory",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_XXX_PUZ2POS1",
        "RC1_SCE_SE_XXX_PUZ2POS2",
        "RC1_SCE_SE_XXX_PUZ2POS3",
        "RC1_SCE_SE_XXX_PUZ2POS4",
        "RC1_SCE_SE_XXX_PUZ2IndicatorCW",
        "RC1_SCE_SE_XXX_PUZ2IndicatorCCW",
        "RC1_SCE_SE_XXX_PUZ2CWRotation",
        "RC1_SCE_SE_XXX_PUZ2CCWRotation",
        "RC1_SCE_SE_XXX_PUZ2CheckLtGear01",
        "RC1_SCE_SE_XXX_PUZ2CheckMiddleGear01",
        "RC1_SCE_SE_XXX_PUZ2CheckRtGear01",
        "RC1_SCE_SE_023_PUZ2Victory"
      ]
    }
  },
  {
    "id": "RC1_SE_ShutdownPuzzle1",
    "name": "RC1_SE_ShutdownPuzzle1",
    "displayName": "Windmills: Shutdown Puzzle 1",
    "kind": "item",
    "hash": "0x11bf1812",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_ShutDownPuzzle1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC1_TRG_Checkpoint_002"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_ShutDownPuzzle1"
      ]
    }
  },
  {
    "id": "RC1_SE_ShutDownPuzzle2",
    "name": "RC1_SE_ShutDownPuzzle2",
    "displayName": "Windmills: Shut Down Puzzle 2",
    "kind": "item",
    "hash": "0x11bf1986",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_Windmill"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_ShutDownPuzzle2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC1_TRG_Checkpoint_003"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC1_TRG_Checkpoint_002"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC1_TRG_Checkpoint_004"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC1_TRG_Checkpoint_005"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_ShutDownPuzzle2"
      ]
    }
  },
  {
    "id": "RC2_SE_Fight01Intro",
    "name": "RC2_SE_Fight01Intro",
    "displayName": "Martyr's Tower: Fight 01 Intro",
    "kind": "item",
    "hash": "0x19461cf6",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_CIN_FertileGroundDenied",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_018_Fight01Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 0,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC2_SCE_TRG_UponLandingAfterTrap"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_018_Fight01Intro"
      ]
    }
  },
  {
    "id": "RC2_CIN_EndOfFight01",
    "name": "RC2_CIN_EndOfFight01",
    "displayName": "Martyr's Tower: Cutscene: End Of Fight 01",
    "kind": "item",
    "hash": "0x19680b59",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_SE_Fight01Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_019_EndOfFight01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC2_TRG_Checkpoint_012"
          }
        ]
      },
      {
        "kind": "NavZone",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "navzone",
            "action": 2,
            "targets": [
              "RC2_NAVMESH_GENERATOR_001"
            ]
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_019_EndOfFight01"
      ]
    }
  },
  {
    "id": "RC2_ObjectivePlatform",
    "name": "RC2_ObjectivePlatform",
    "displayName": "Martyr's Tower: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x198e90c5",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [
      "RC2_ObjPlatform_FirstTime_PlateInactive",
      "RC2_ObjPlatform_FirstTime_PlateActive",
      "RC2_ObjPlatform_Return_PlateInactive",
      "RC2_ObjPlatform_Return_PlateActive",
      "RC2_SCE_OBJ_Platform_PowerCheck"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_ObjPlatform_Return_PlateActive",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC2_CIN_FertileGroundDenied",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC2_ObjPlatform_Return_PlateActive"
      ]
    }
  },
  {
    "id": "RC2_SE_PuzzleHBeamsRotation",
    "name": "RC2_SE_PuzzleHBeamsRotation",
    "displayName": "Martyr's Tower: Puzzle Horizontal Beams Rotation",
    "kind": "item",
    "hash": "0x37356781",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_SE_Fight01Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_022_PuzzleHBeamsRotation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_022_PuzzleHBeamsRotation"
      ]
    }
  },
  {
    "id": "R2_Circulation_V1",
    "name": "R2_Circulation_V1",
    "displayName": "Martyr's Tower: Circulation v1",
    "kind": "item",
    "hash": "0x198e91f4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_ODD_002_Circulation_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_ODD_002_Circulation_V1"
      ]
    }
  },
  {
    "id": "R2_Circulation_V2",
    "name": "R2_Circulation_V2",
    "displayName": "Martyr's Tower: Circulation v2",
    "kind": "item",
    "hash": "0x198e91f5",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "R2_Circulation_V1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_ODD_004_Circulation_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_ODD_004_Circulation_V2"
      ]
    }
  },
  {
    "id": "RC2_FertileGround",
    "name": "RC2_FertileGround",
    "displayName": "Martyr's Tower: Fertile Ground",
    "kind": "item",
    "hash": "0x198e929d",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_CIN_EndOfFight01",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "RC2_SCE_CIN_005_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "RC2_SCE_CIN_005_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "RC2_SCE_CIN_005_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "RC2_LAM_ArenaBlockedDoor_01"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC2_TRG_Checkpoint_015"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "RC2_NAVMESH_GENERATOR_001"
          }
        ]
      },
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "activate",
            "target": "RC2_EnvArea_Portal"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_CIN_005_HealingIntro",
        "RC2_SCE_CIN_005_HealingOutro",
        "RC2_SCE_CIN_005_AfterHealing"
      ]
    }
  },
  {
    "id": "RC2_SE_CloseBlockedArenaDoorCOL",
    "name": "RC2_SE_CloseBlockedArenaDoorCOL",
    "displayName": "Martyr's Tower: Close Blocked Arena Door Collision",
    "kind": "item",
    "hash": "0x380782a4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_CloseBlockedArenaDoorCOL",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_CloseBlockedArenaDoorCOL"
      ]
    }
  },
  {
    "id": "RC2_CIN_FertileGroundDenied",
    "name": "RC2_CIN_FertileGroundDenied",
    "displayName": "Martyr's Tower: Cutscene: Fertile Ground Denied",
    "kind": "item",
    "hash": "0x345ea350",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_CIN_003_TopOfTower",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_CIN_003_TopOfTower"
      ]
    }
  },
  {
    "id": "RC2_SE_GameplayWithHunterScreams",
    "name": "RC2_SE_GameplayWithHunterScreams",
    "displayName": "Martyr's Tower: Gameplay With Hunter Screams",
    "kind": "item",
    "hash": "0x8c398081",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": true,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_SE_Fight01Intro",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC2_CIN_FertileGroundDenied",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_017_GameplayWithHunterScreams",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_017_GameplayWithHunterScreams"
      ]
    }
  },
  {
    "id": "RC2_SE_GripFallSequence",
    "name": "RC2_SE_GripFallSequence",
    "displayName": "Martyr's Tower: Grip Fall Sequence",
    "kind": "item",
    "hash": "0x34690038",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_CIN_FertileGroundDenied",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_ODD_GripFallSeq",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_ODD_GripFallSeq"
      ]
    }
  },
  {
    "id": "RC2_CIN_SpawnHunter",
    "name": "RC2_CIN_SpawnHunter",
    "displayName": "Martyr's Tower: Cutscene: Spawn Hunter",
    "kind": "item",
    "hash": "0x5fa29fd1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_CIN_003_SpawnHunter",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_CIN_003_SpawnHunter"
      ]
    }
  },
  {
    "id": "RC2_SCE_SE_EnteringRotatingBeamRoom_OA_020",
    "name": "RC2_SCE_SE_EnteringRotatingBeamRoom_OA_020",
    "displayName": "Martyr's Tower: Entering Rotating Beam Room",
    "kind": "item",
    "hash": "0x521bc05a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_SE_GripFallSequence",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC2_SE_Fight01Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_020_EnteringRotatingBeamRoom",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_020_EnteringRotatingBeamRoom"
      ]
    }
  },
  {
    "id": "RC2_SE_UpongLandingAfterTrap",
    "name": "RC2_SE_UpongLandingAfterTrap",
    "displayName": "Martyr's Tower: Upong Landing After Trap",
    "kind": "item",
    "hash": "0x8fc8818f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_CIN_FertileGroundDenied",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_013_UponLandingAfterTrap",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_013_UponLandingAfterTrap"
      ]
    }
  },
  {
    "id": "RC2_SCE_ArrivingOnTop",
    "name": "RC2_SCE_ArrivingOnTop",
    "displayName": "Martyr's Tower: Arriving On Top",
    "kind": "item",
    "hash": "0x927e0fa3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_CIN_EndOfFight01",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_023_ArrivingOnTop",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_023_ArrivingOnTop"
      ]
    }
  },
  {
    "id": "RC2_BossFight_LDD",
    "name": "RC2_BossFight_LDD",
    "displayName": "Martyr's Tower: Boss Fight Logic",
    "kind": "item",
    "hash": "0xd4078ef1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_Guardtower"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_SE_Fight01Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_BossFight_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_BossFight_LDD"
      ]
    }
  },
  {
    "id": "RC3_CamShake",
    "name": "RC3_CamShake",
    "displayName": "Hunter's Lair: Cam Shake",
    "kind": "item",
    "hash": "0x2e93a015",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC3_DeathFinalSequence",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC3_SCE_CAMSHAKE",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC3_SCE_CAMSHAKE"
      ]
    }
  },
  {
    "id": "RC3_SCE_SE_012_EnteringTheLair",
    "name": "RC3_SCE_SE_012_EnteringTheLair",
    "displayName": "Hunter's Lair: Entering The Lair",
    "kind": "item",
    "hash": "0x4c5240a3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC3_SCE_SE_012_EnteringTheLair",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC3_SCE_SE_012_EnteringTheLair"
      ]
    }
  },
  {
    "id": "RC3_FirstTeleport",
    "name": "RC3_FirstTeleport",
    "displayName": "Hunter's Lair: First Teleport",
    "kind": "item",
    "hash": "0x2e939c37",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC3_SCE_SE_012_EnteringTheLair",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC3_SCE_CIN_001_FirstFight_FightEnd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC3_SCE_CIN_001_FirstFight_FightEnd"
      ]
    }
  },
  {
    "id": "RC13_ActivationHoleRocks",
    "name": "RC13_ActivationHoleRocks",
    "displayName": "Windmills <-> Hunter's Lair: Hole Rocks Activation",
    "kind": "item",
    "hash": "0x6eef583f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC3_CamShake",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC13_SCE_ActivateHoleRocks",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC13_SCE_ActivateHoleRocks"
      ]
    }
  },
  {
    "id": "RC3_FinalFight",
    "name": "RC3_FinalFight",
    "displayName": "Hunter's Lair: Final Fight",
    "kind": "item",
    "hash": "0x2e93a00e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC3_SecondTeleport",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC3_SCE_SE_016_FINAL_FIGHT",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC3_SCE_SE_016_FINAL_FIGHT"
      ]
    }
  },
  {
    "id": "RC3_SecondTeleport",
    "name": "RC3_SecondTeleport",
    "displayName": "Hunter's Lair: Second Teleport",
    "kind": "item",
    "hash": "0x2e939e59",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC3_FirstTeleport",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC3_SCE_CIN_002_SecondFight_FightEnd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC3_SCE_CIN_002_SecondFight_FightEnd"
      ]
    }
  },
  {
    "id": "RC3_DeathFinalSequence",
    "name": "RC3_DeathFinalSequence",
    "displayName": "Hunter's Lair: Death Final Sequence",
    "kind": "item",
    "hash": "0x2e93a014",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC3_LAIR"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC3_FinalFight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC3_SCE_CIN_003_HunterDeath",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC3_SCE_CIN_003_HunterDeath"
      ]
    }
  },
  {
    "id": "RC6_SE_FirstTimeInCirculation",
    "name": "RC6_SE_FirstTimeInCirculation",
    "displayName": "King's Gate: First Arrival in Circulation",
    "kind": "item",
    "hash": "0x5251cc37",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC_SE_FirstTimeInCirculation"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_SE_002_ArriveInRC",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_SE_002_ArriveInRC"
      ]
    }
  },
  {
    "id": "RC2_SE_FirstTimeInCirculation",
    "name": "RC2_SE_FirstTimeInCirculation",
    "displayName": "Martyr's Tower: First Arrival in Circulation",
    "kind": "item",
    "hash": "0x5251cc38",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC_SE_FirstTimeInCirculation"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_002_ArrivingInRC",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_002_ArrivingInRC"
      ]
    }
  },
  {
    "id": "RC5_Circulation_V1",
    "name": "RC5_Circulation_V1",
    "displayName": "Sun Temple: Circulation v1",
    "kind": "item",
    "hash": "0xcd30400d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_SE_EndOfFight02_V1",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_002_Circulation_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_SE_002_Circulation_V1"
      ]
    }
  },
  {
    "id": "RC5_Circulation_V2",
    "name": "RC5_Circulation_V2",
    "displayName": "Sun Temple: Circulation v2",
    "kind": "item",
    "hash": "0xcd58063a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_Circulation_V1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC5_SE_EndOfFight02_V1",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_004_Circulation_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_SE_004_Circulation_V2"
      ]
    }
  },
  {
    "id": "RC5_SE_EndOfFight02_V1",
    "name": "RC5_SE_EndOfFight02_V1",
    "displayName": "Sun Temple: End Of Fight 02 v1",
    "kind": "item",
    "hash": "0xcc477806",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_SE_Fight02Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_023_EndOfFight02_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC5_TRG_Checkpoint_006"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_SE_023_EndOfFight02_V1"
      ]
    }
  },
  {
    "id": "RC5_CIN_EndFight01_001",
    "name": "RC5_CIN_EndFight01_001",
    "displayName": "Sun Temple: Cutscene: End Fight 01 001",
    "kind": "item",
    "hash": "0xc5ebc5c8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_CIN_Fight01Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_CIN_015_EndFight01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_CIN_015_EndFight01"
      ]
    }
  },
  {
    "id": "RC5_SE_Fight02Intro",
    "name": "RC5_SE_Fight02Intro",
    "displayName": "Sun Temple: Fight 02 Intro",
    "kind": "item",
    "hash": "0xc9328a88",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_SE_TremorReleases",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_021_Fight02Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_SE_021_Fight02Intro"
      ]
    }
  },
  {
    "id": "RC5_CIN_TrapsRelease",
    "name": "RC5_CIN_TrapsRelease",
    "displayName": "Sun Temple: Cutscene: Traps Release",
    "kind": "item",
    "hash": "0xcf978c50",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_CIN_EndFight01_001",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_CIN_001_TrapsRelease",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_CIN_001_TrapsRelease"
      ]
    }
  },
  {
    "id": "RC5_SE_TremorReleases",
    "name": "RC5_SE_TremorReleases",
    "displayName": "Sun Temple: Tremor Releases",
    "kind": "item",
    "hash": "0xcf978c51",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_CIN_HunterMovesAway",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_018_TremorRelease_001",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_XXX_TremorRelease_002",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": [
          {
            "op": "deactivate",
            "target": "RC5_TRG_Checkpoint_003"
          }
        ]
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_SE_018_TremorRelease_001",
        "RC5_SCE_SE_XXX_TremorRelease_002"
      ]
    }
  },
  {
    "id": "RC5_SE_ObjectivePlatform",
    "name": "RC5_SE_ObjectivePlatform",
    "displayName": "Sun Temple: Fertile Ground Platform",
    "kind": "item",
    "hash": "0xd04e175f",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RC5_Petra"
    ],
    "children": [
      "RC5_ObjPlatform_FirstTime_PlateInactive",
      "RC5_ObjPlatform_FirstTime_PlateActive"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_CIN_EndFight01_001",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC5_ObjPlatform_FirstTime_PlateActive",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC5_ObjPlatform_FirstTime_PlateActive"
      ]
    }
  },
  {
    "id": "RC5_CIN_Fight01Intro",
    "name": "RC5_CIN_Fight01Intro",
    "displayName": "Sun Temple: Cutscene: Fight 01 Intro",
    "kind": "item",
    "hash": "0xc5ebc003",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_CIN_012_Fight01Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_CIN_012_Fight01Intro"
      ]
    }
  },
  {
    "id": "RC5_SE_HunterDeathCheck",
    "name": "RC5_SE_HunterDeathCheck",
    "displayName": "Sun Temple: Hunter Death Check",
    "kind": "item",
    "hash": "0x41205f8d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_SE_Fight02Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_023_HunterDeathCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_SE_023_HunterDeathCheck"
      ]
    }
  },
  {
    "id": "RC5_SE_FertileGround",
    "name": "RC5_SE_FertileGround",
    "displayName": "Sun Temple: Fertile Ground",
    "kind": "item",
    "hash": "0xb27a8006",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_SE_EndOfFight02_V1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "RC5_SCE_FertileGroundHealingSetup",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "RC5_SCE_FertileGroundHealing",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "RC5_SCE_SE_025_FertileGroundHealingEnd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_FertileGroundHealingSetup",
        "RC5_SCE_FertileGroundHealing",
        "RC5_SCE_SE_025_FertileGroundHealingEnd"
      ]
    }
  },
  {
    "id": "RC5_SE_DiedByTrapsComments",
    "name": "RC5_SE_DiedByTrapsComments",
    "displayName": "Sun Temple: Died By Traps Comments",
    "kind": "item",
    "hash": "0xa9594002",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_CIN_TrapsRelease",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_018_DiedByTremorComment",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_SE_018_DiedByTremorComment"
      ]
    }
  },
  {
    "id": "RC5_CIN_HunterMovesAway",
    "name": "RC5_CIN_HunterMovesAway",
    "displayName": "Sun Temple: Cutscene: Hunter Moves Away",
    "kind": "item",
    "hash": "0xe6e7e8af",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_Petra"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC5_CIN_TrapsRelease",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_CIN_HunterMovesAway",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_CIN_HunterMovesAway"
      ]
    }
  },
  {
    "id": "RC6_ReturnInCirculation",
    "name": "RC6_ReturnInCirculation",
    "displayName": "King's Gate: Return to Circulation",
    "kind": "item",
    "hash": "0xa7d16342",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC6_CityGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_002_ArrivingInCirculation",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_ODD_004_ReturnInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_ODD_004_ReturnInCirculation"
      ]
    }
  },
  {
    "id": "RC6_002_ArrivingInCirculation",
    "name": "RC6_002_ArrivingInCirculation",
    "displayName": "King's Gate: Arrival in Circulation",
    "kind": "item",
    "hash": "0x9aa48c5d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC6_CityGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_ODD_002_ArrivingInCirculation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_ODD_002_ArrivingInCirculation"
      ]
    }
  },
  {
    "id": "RC6_SE_HunterEscapes",
    "name": "RC6_SE_HunterEscapes",
    "displayName": "King's Gate: Hunter Escapes",
    "kind": "item",
    "hash": "0x534edddf",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC6_CityGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_004_Fight",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_CIN_005_HunterEscape",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_CIN_005_HunterEscape"
      ]
    }
  },
  {
    "id": "RC6_004_Fight",
    "name": "RC6_004_Fight",
    "displayName": "King's Gate: Fight",
    "kind": "item",
    "hash": "0x26444004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC6_CityGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_CIN_004_FightIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_CIN_004_FightIntro"
      ]
    }
  },
  {
    "id": "RC6_ObjectivePlatform",
    "name": "RC6_ObjectivePlatform",
    "displayName": "King's Gate: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x2c8d2aca",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RC6_CityGate"
    ],
    "children": [
      "RC6_ObjPlatform_FirstTime"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_ObjPlatform_FirstTime",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC6_ObjPlatform_FirstTime"
      ]
    }
  },
  {
    "id": "RC6_SE_BOSS_FIGHT_LDD",
    "name": "RC6_SE_BOSS_FIGHT_LDD",
    "displayName": "King's Gate: BOSS FIGHT Logic",
    "kind": "item",
    "hash": "0x5ed6224e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC6_CityGate"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC6_004_Fight",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_SE_HunterEscapes",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_BossFightLDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_BossFightLDD"
      ]
    }
  },
  {
    "id": "RC4_SE_Objective Platform",
    "name": "RC4_SE_Objective Platform",
    "displayName": "Marshalling Ground: Fertile Ground Platform",
    "kind": "item",
    "hash": "0x2d6cc2e6",
    "type": "MissionItemList",
    "bundle": "base",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "RC4_Terrace"
    ],
    "children": [
      "RC4_OBjPlatform_FirstTime_PlateInactive_V1",
      "RC4_OBjPlatform_FirstTime_PlateActive_V3",
      "RC4_OBjPlatform_Return_PlateInactive_V2",
      "RC4_OBjPlatform_Return_PlateActive_V4",
      "RC4_SCE_OBJ_Platform_PowerCheck"
    ],
    "gates": [
      "RC4_SE_Objective Platform::op0",
      "RC4_SE_Objective Platform::op1"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SE_Objective Platform::op1",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "RC4_SE_Objective Platform::op1"
      ]
    }
  },
  {
    "id": "RC4_SE_Fight",
    "name": "RC4_SE_Fight",
    "displayName": "Marshalling Ground: Fight",
    "kind": "item",
    "hash": "0x2d6cc2e7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "RC4_Terrace"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SCE_CIN_004",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "RC4_SCE_SE_FlyTalk_OA_014_Part2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_SE_Fight_Trap",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_SE_Fight_Trap"
      ]
    }
  },
  {
    "id": "RC4_SCE_ODD_013_Manager",
    "name": "RC4_SCE_ODD_013_Manager",
    "displayName": "Marshalling Ground: Dialogue: Manager",
    "kind": "item",
    "hash": "0x596a80b3",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_Terrace"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SCE_CIN_004",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_ODD_013_Manager",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_ODD_013_Manager"
      ]
    }
  },
  {
    "id": "RC4_SCE_CIN_FightIntro",
    "name": "RC4_SCE_CIN_FightIntro",
    "displayName": "Marshalling Ground: Cutscene: Fight Intro",
    "kind": "item",
    "hash": "0x5859824b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_Terrace"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SCE_SE_FlyTalk_OA_014_Part2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_CIN_003_FightIntro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_CIN_003_FightIntro"
      ]
    }
  },
  {
    "id": "RC4_SCE_CIN_004",
    "name": "RC4_SCE_CIN_004",
    "displayName": "Marshalling Ground: Cutscene: 004",
    "kind": "item",
    "hash": "0x5859824e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_Terrace"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SCE_CIN_FightIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_CIN_004_FightOutro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_CIN_004_FightOutro"
      ]
    }
  },
  {
    "id": "RC4_FertileGround",
    "name": "RC4_FertileGround",
    "displayName": "Marshalling Ground: Fertile Ground",
    "kind": "item",
    "hash": "0x58599190",
    "type": "MissionItemFertileGround",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_Terrace"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SCE_CIN_004",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "HealingIntroScene",
        "sceneName": "RC4_SCE_FirstHealing_HealingIntro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "HealingOutroScene",
        "sceneName": "RC4_SCE_FirstHealing_HealingOutro",
        "terminationOutputIdx": 0
      },
      {
        "slot": "AfterHealingScene",
        "sceneName": "RC4_SCE_CIN_005_AfterHealing",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_FirstHealing_HealingIntro",
        "RC4_SCE_FirstHealing_HealingOutro",
        "RC4_SCE_CIN_005_AfterHealing"
      ]
    }
  },
  {
    "id": "RC4_SCE_SE_FlyTalk_OA_014_Part2",
    "name": "RC4_SCE_SE_FlyTalk_OA_014_Part2",
    "displayName": "Marshalling Ground: Wings of Ormazd Dialogue (Part 2)",
    "kind": "item",
    "hash": "0x58e55dc7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_Terrace"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SCE_SE_FlyTalk_OA_014_Part1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_SE_FlyTalk_OA_014_Part2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_SE_FlyTalk_OA_014_Part2"
      ]
    }
  },
  {
    "id": "RC4_HunterDeathCheck",
    "name": "RC4_HunterDeathCheck",
    "displayName": "Marshalling Ground: Hunter Death Check",
    "kind": "item",
    "hash": "0x3b47e779",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_Terrace"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SCE_CIN_FightIntro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_CIN_004_HunterDeathCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_CIN_004_HunterDeathCheck"
      ]
    }
  },
  {
    "id": "RC4_SCE_SE_FlyTalk_OA_014_Part1",
    "name": "RC4_SCE_SE_FlyTalk_OA_014_Part1",
    "displayName": "Marshalling Ground: Wings of Ormazd Dialogue (Part 1)",
    "kind": "item",
    "hash": "0x7b120ec2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_Terrace"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_SE_FlyTalk_OA_014_Part1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_SE_FlyTalk_OA_014_Part1"
      ]
    }
  },
  {
    "id": "HC1_ObjPlatform_FirstTime_PlateInactive",
    "name": "HC1_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Spire of Dreams: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x2dae98bd",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC1_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Normal"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_006_ObjectivePlatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_006_ObjectivePlatform_V1"
      ]
    }
  },
  {
    "id": "HC1_ObjPlatform_FirstTime_PlateActive",
    "name": "HC1_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Spire of Dreams: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x2dae98be",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_CIN_001_ObjectivePlatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_CIN_001_ObjectivePlatform_V3"
      ]
    }
  },
  {
    "id": "HC1_ObjPlatform_Return_PlateInactive",
    "name": "HC1_ObjPlatform_Return_PlateInactive",
    "displayName": "Spire of Dreams: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x2dae98bf",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC1_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_007_ObjectivePlatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_007_ObjectivePlatform_V2"
      ]
    }
  },
  {
    "id": "HC1_ObjPlatform_Return_PlateActive",
    "name": "HC1_ObjPlatform_Return_PlateActive",
    "displayName": "Spire of Dreams: Platform (Return, Plate Active)",
    "kind": "item",
    "hash": "0x2dae98c0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC1_ObjPlatform_FirstTime_PlateActive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_CIN_002_ObjectivePlatform_V4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_CIN_002_ObjectivePlatform_V4"
      ]
    }
  },
  {
    "id": "HC1_OBJ_Platform_PowerCheck",
    "name": "HC1_OBJ_Platform_PowerCheck",
    "displayName": "Spire of Dreams: Fertile Ground Platform Power Check",
    "kind": "item",
    "hash": "0x57e08e26",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC1_SCE_SE_OBJ_Platform_PowerCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC1_SCE_SE_OBJ_Platform_PowerCheck"
      ]
    }
  },
  {
    "id": "HC2_ObjPlatform_FirstTime_PlateInactive",
    "name": "HC2_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Royal Gardens: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x3386c033",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC2_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Normal"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_XXX_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_XXX_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "HC2_ObjPlatform_FirstTime_PlateActive",
    "name": "HC2_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Royal Gardens: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x3386c03b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_CIN_SE_001_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_CIN_SE_001_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "HC2_ObjPlatform_Return_PlateInactive",
    "name": "HC2_ObjPlatform_Return_PlateInactive",
    "displayName": "Royal Gardens: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x3386c03c",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC2_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_XXX_Objectiveplatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_XXX_Objectiveplatform_V2"
      ]
    }
  },
  {
    "id": "HC2_ObjPlatform_Return_PlateActive",
    "name": "HC2_ObjPlatform_Return_PlateActive",
    "displayName": "Royal Gardens: Platform (Return, Plate Active)",
    "kind": "item",
    "hash": "0x3386c041",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC2_ObjPlatform_FirstTime_PlateActive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_CIN_SE_002_Objectiveplatform_V4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_CIN_SE_002_Objectiveplatform_V4"
      ]
    }
  },
  {
    "id": "HC2_OBJ_Platform_PowerCheck",
    "name": "HC2_OBJ_Platform_PowerCheck",
    "displayName": "Royal Gardens: Fertile Ground Platform Power Check",
    "kind": "item",
    "hash": "0x57e0a68f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC2_SCE_SE_OBJ_Platform_PowerCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC2_SCE_SE_OBJ_Platform_PowerCheck"
      ]
    }
  },
  {
    "id": "HC6_ObjectivePlatform_FirstTime_NotFirstHealing",
    "name": "HC6_ObjectivePlatform_FirstTime_NotFirstHealing",
    "displayName": "Cavern: Fertile Ground Platform First Time Not First Healing",
    "kind": "item",
    "hash": "0x91be7d31",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6_SCE_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_CIN_002_ObjectivePlatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_CIN_002_ObjectivePlatform_V1"
      ]
    }
  },
  {
    "id": "HC6_ObjectivePlatform_OnReturn",
    "name": "HC6_ObjectivePlatform_OnReturn",
    "displayName": "Cavern: Fertile Ground Platform On Return",
    "kind": "item",
    "hash": "0x3c9736fd",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC6_SCE_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC6_SCE_SE_XXX_ObjectivePlatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC6_SCE_SE_XXX_ObjectivePlatform_V2"
      ]
    }
  },
  {
    "id": "HC5_ObjPlatform_FirstTime_PlateInactive",
    "name": "HC5_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Royal Spire: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x46d94098",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC5_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Normal"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_SE_006_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_SE_006_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "HC5_ObjPlatform_FirstTime_PlateActive",
    "name": "HC5_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Royal Spire: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x46d94099",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_CIN_001_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_CIN_001_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "HC5_ObjPlatform_Return_PlateInactive",
    "name": "HC5_ObjPlatform_Return_PlateInactive",
    "displayName": "Royal Spire: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x46d9409a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC5_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_SE_007_Objectiveplatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_SE_007_Objectiveplatform_V2"
      ]
    }
  },
  {
    "id": "HC5_ObjPlatform_Return_PlateActive",
    "name": "HC5_ObjPlatform_Return_PlateActive",
    "displayName": "Royal Spire: Platform (Return, Plate Active)",
    "kind": "item",
    "hash": "0x46d9409b",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC5_ObjPlatform_FirstTime_PlateActive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_CIN_002_Objectiveplatform_V4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_CIN_002_Objectiveplatform_V4"
      ]
    }
  },
  {
    "id": "HC5_OBJ_Platform_PowerCheck",
    "name": "HC5_OBJ_Platform_PowerCheck",
    "displayName": "Royal Spire: Fertile Ground Platform Power Check",
    "kind": "item",
    "hash": "0x58064c05",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC5_SCE_SE_OBJ_Platform_PowerCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC5_SCE_SE_OBJ_Platform_PowerCheck"
      ]
    }
  },
  {
    "id": "HC4_ObjPlatform_FirstTime_PlateInactive",
    "name": "HC4_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Coronation Hall: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x493ec111",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_Objective_Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "HC4_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Normal"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "HC4_ObjPlatform_Return_PlateInactive",
    "name": "HC4_ObjPlatform_Return_PlateInactive",
    "displayName": "Coronation Hall: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x493ec112",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_Objective_Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC4_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_Objectiveplatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_Objectiveplatform_V2"
      ]
    }
  },
  {
    "id": "HC4_ObjPlatform_FirstTime_PlateActive",
    "name": "HC4_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Coronation Hall: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x493ec113",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_Objective_Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "HC4_ObjPlatform_Return_PlateActive",
    "name": "HC4_ObjPlatform_Return_PlateActive",
    "displayName": "Coronation Hall: Platform (Return, Plate Active)",
    "kind": "item",
    "hash": "0x493ec114",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_Objective_Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "HC4_ObjPlatform_FirstTime_PlateActive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_XXX_Objectiveplatform_V4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_XXX_Objectiveplatform_V4"
      ]
    }
  },
  {
    "id": "HC4_OBJ_Platform_PowerCheck",
    "name": "HC4_OBJ_Platform_PowerCheck",
    "displayName": "Coronation Hall: Fertile Ground Platform Power Check",
    "kind": "item",
    "hash": "0x57e0bd40",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "HC4_Objective_Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "HC4_SCE_SE_OBJ_Platform_PowerCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "HC4_SCE_SE_OBJ_Platform_PowerCheck"
      ]
    }
  },
  {
    "id": "LR1_SCE_SE_Objectiveplatform_V1",
    "name": "LR1_SCE_SE_Objectiveplatform_V1",
    "displayName": "Tower of Ormazd: Fertile Ground Platform v1",
    "kind": "item",
    "hash": "0x06c5a283",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_Pr_Power_Monitor",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SCE_SE_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "LR1_Pr_Power_Monitor",
    "name": "LR1_Pr_Power_Monitor",
    "displayName": "Tower of Ormazd: Prince Power Monitor",
    "kind": "item",
    "hash": "0x5a300174",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_Pr_Power_Monitor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_Pr_Power_Monitor"
      ]
    }
  },
  {
    "id": "LR1_SCE_SE_Objectiveplatform_V3",
    "name": "LR1_SCE_SE_Objectiveplatform_V3",
    "displayName": "Tower of Ormazd: Fertile Ground Platform v3",
    "kind": "item",
    "hash": "0x06c5a285",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_Pr_Power_Monitor",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SCE_SE_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "LR1_SE_013_FightHints",
    "name": "LR1_SE_013_FightHints",
    "displayName": "Tower of Ormazd: Fight Hints",
    "kind": "item",
    "hash": "0x5c3a13e4",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1_WarriorFight_Sequence"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SE_013_FightHints",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SE_013_FightHints"
      ]
    }
  },
  {
    "id": "LR1_SE_WarriorFight",
    "name": "LR1_SE_WarriorFight",
    "displayName": "Tower of Ormazd: Warrior Fight",
    "kind": "item",
    "hash": "0x52884f11",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1_WarriorFight_Sequence"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_CIN_FIGHT_ARENA_GRID",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_FIGHT_ARENA_BOSSFIGHT",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_SE_FIGHT_ARENA_BOSSFIGHT_LastPillar",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SCE_CIN_FIGHT_ARENA_GRID",
        "LR1_SCE_SE_FIGHT_ARENA_BOSSFIGHT",
        "LR1_SCE_SE_FIGHT_ARENA_BOSSFIGHT_LastPillar"
      ]
    }
  },
  {
    "id": "LR1_CIN_006_1stPillar_FacialAnim",
    "name": "LR1_CIN_006_1stPillar_FacialAnim",
    "displayName": "Tower of Ormazd: Cutscene: 1st Pillar Facial Anim",
    "kind": "item",
    "hash": "0x52884f12",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1_WarriorFight_Sequence"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_CIN_006_1stPillar_FacialAnim",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_CIN_006_1stPillar_FacialAnim"
      ]
    }
  },
  {
    "id": "LR1_CIN_007_2ndPillar_FacialAnim",
    "name": "LR1_CIN_007_2ndPillar_FacialAnim",
    "displayName": "Tower of Ormazd: Cutscene: 2nd Pillar Facial Anim",
    "kind": "item",
    "hash": "0x52884f13",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1_WarriorFight_Sequence"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_CIN_006_1stPillar_FacialAnim",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_CIN_007_2ndPillar_FacialAnim",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_CIN_007_2ndPillar_FacialAnim"
      ]
    }
  },
  {
    "id": "LR1_SCE_LDD",
    "name": "LR1_SCE_LDD",
    "displayName": "Tower of Ormazd: Logic",
    "kind": "item",
    "hash": "0x6891d68f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR1_WarriorFight_Sequence"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR1_SE_WarriorFight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR1_SCE_Warrior_LDD",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR1_SCE_Warrior_LDD"
      ]
    }
  },
  {
    "id": "LR6_CIN_002_ObjPlat_1stTimeABubbleHealed",
    "name": "LR6_CIN_002_ObjPlat_1stTimeABubbleHealed",
    "displayName": "City Gate: Cutscene: Platform 1st Time A Fertile Ground Level Healed",
    "kind": "item",
    "hash": "0x59ca4011",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR6_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR6_SCE_CIN_002_ObjectivePlatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR6_SCE_CIN_002_ObjectivePlatform_V1"
      ]
    }
  },
  {
    "id": "LR4_ObjPlatform_FirstTime_PlateInactive",
    "name": "LR4_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Queen's Tower: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x3c378086",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR4_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4_Pr_Power_Monitor",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_SCE_SE_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_SCE_SE_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "LR4_ObjPlatform_FirstTime_PlateActive",
    "name": "LR4_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Queen's Tower: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x3c378087",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR4_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR4_Pr_Power_Monitor",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_SCE_SE_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_SCE_SE_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "LR4_Pr_Power_Monitor",
    "name": "LR4_Pr_Power_Monitor",
    "displayName": "Queen's Tower: Prince Power Monitor",
    "kind": "item",
    "hash": "0x5a30006a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR4_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_Pr_Power_Monitor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_Pr_Power_Monitor"
      ]
    }
  },
  {
    "id": "LR4_ODD_003_ArrivingInCirculation_1stTime",
    "name": "LR4_ODD_003_ArrivingInCirculation_1stTime",
    "displayName": "Queen's Tower: Dialogue: Arrival in Circulation 1st Time",
    "kind": "item",
    "hash": "0x86f49493",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR4_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR4_ODD_003_ArrivingInCirculation_1stTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR4_ODD_003_ArrivingInCirculation_1stTime"
      ]
    }
  },
  {
    "id": "LR2_ObjPlatform_FirstTime_PlateInactive",
    "name": "LR2_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Tower of Ahriman: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x3e11c060",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_Pr_Power_Monitor",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SCE_SE_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_SE_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "LR2_ObjPlatform_FirstTime_PlateActive",
    "name": "LR2_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Tower of Ahriman: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x3e11c061",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_Pr_Power_Monitor",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SCE_SE_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_SE_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "LR2_Pr_Power_Monitor",
    "name": "LR2_Pr_Power_Monitor",
    "displayName": "Tower of Ahriman: Prince Power Monitor",
    "kind": "item",
    "hash": "0x5a3000cd",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_Pr_Power_Monitor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_Pr_Power_Monitor"
      ]
    }
  },
  {
    "id": "LR2_ODD_003_ArrivingInCirculation_1stTime",
    "name": "LR2_ODD_003_ArrivingInCirculation_1stTime",
    "displayName": "Tower of Ahriman: Dialogue: Arrival in Circulation 1st Time",
    "kind": "item",
    "hash": "0x86a44031",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_ODD_003_ArrivingInCirculation_1stTime",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_ODD_003_ArrivingInCirculation_1stTime"
      ]
    }
  },
  {
    "id": "LR2_CIN_003_1stPuzzlePlatform",
    "name": "LR2_CIN_003_1stPuzzlePlatform",
    "displayName": "Tower of Ahriman: Cutscene: 1st Puzzle Platform",
    "kind": "item",
    "hash": "0x50c411e7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2_Puzzles_Challenges"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_CIN_003_1stPuzzlePlatform",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_CIN_003_1stPuzzlePlatform"
      ]
    }
  },
  {
    "id": "LR2_CIN_005_CrankActivation",
    "name": "LR2_CIN_005_CrankActivation",
    "displayName": "Tower of Ahriman: Cutscene: Crank Activation",
    "kind": "item",
    "hash": "0x50c41220",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2_Puzzles_Challenges"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_CIN_003_1stPuzzlePlatform",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_CIN_005_CrankActivation",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_CIN_005_CrankActivation"
      ]
    }
  },
  {
    "id": "LR2_SE_019_4thPuzzle",
    "name": "LR2_SE_019_4thPuzzle",
    "displayName": "Tower of Ahriman: 4th Puzzle",
    "kind": "item",
    "hash": "0x80b8000a",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2_Puzzles_Challenges"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_CIN_005_CrankActivation",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SE_019_Fouth_Puzzle",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SE_019_Fouth_Puzzle"
      ]
    }
  },
  {
    "id": "LR2_ODD_4thPuzzleCrankDone",
    "name": "LR2_ODD_4thPuzzleCrankDone",
    "displayName": "Tower of Ahriman: Dialogue: 4th Puzzle Crank Done",
    "kind": "item",
    "hash": "0x6e9bdaab",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2_Puzzles_Challenges"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR2_CIN_005_CrankActivation",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_ODD_4thPuzzleAfterCrank",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_ODD_4thPuzzleAfterCrank"
      ]
    }
  },
  {
    "id": "LR2_Failsafe",
    "name": "LR2_Failsafe",
    "displayName": "Tower of Ahriman: Failsafe",
    "kind": "item",
    "hash": "0x8bc9e809",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR2_Puzzles_Challenges"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR2_SCE_SE_ChallengeFailsafe",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR2_SCE_SE_ChallengeFailsafe"
      ]
    }
  },
  {
    "id": "LR5_ObjPlatform_FirstTime_PlateInactive",
    "name": "LR5_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "City of Light: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x45628fa1",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_Pr_Power_Monitor",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SCE_SE_ObjectivePlatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SCE_SE_ObjectivePlatform_V1"
      ]
    }
  },
  {
    "id": "LR5_ObjPlatform_FirstTime_PlateActive",
    "name": "LR5_ObjPlatform_FirstTime_PlateActive",
    "displayName": "City of Light: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x45628fa2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "LR5_Pr_Power_Monitor",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_SCE_SE_ObjectivePlatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_SCE_SE_ObjectivePlatform_V3"
      ]
    }
  },
  {
    "id": "LR5_Pr_Power_Monitor",
    "name": "LR5_Pr_Power_Monitor",
    "displayName": "City of Light: Prince Power Monitor",
    "kind": "item",
    "hash": "0x5a224019",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "LR5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "LR5_Pr_Power_Monitor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "LR5_Pr_Power_Monitor"
      ]
    }
  },
  {
    "id": "OB1_ObjPlatform_FirstTime_PlateInactive",
    "name": "OB1_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Machinery Ground: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x07c14046",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_SCE_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB1_SCE_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Normal"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_XXX_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_SE_XXX_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "OB1_ObjPlatform_FirstTime_PlateActive",
    "name": "OB1_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Machinery Ground: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x07c14047",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "OB1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_SCE_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_008_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_SE_008_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "OB1_ObjPlatform_Return_PlateInactive",
    "name": "OB1_ObjPlatform_Return_PlateInactive",
    "displayName": "Machinery Ground: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x07c14048",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB1_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB1_SCE_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_SE_XXX_Objectiveplatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_SE_XXX_Objectiveplatform_V2"
      ]
    }
  },
  {
    "id": "OB1_SCE_OBJ_Platform_PowerCheck",
    "name": "OB1_SCE_OBJ_Platform_PowerCheck",
    "displayName": "Machinery Ground: Fertile Ground Platform Power Check",
    "kind": "item",
    "hash": "0x57d31164",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB1_SCE_OBJ_Platform_PowerCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB1_SCE_OBJ_Platform_PowerCheck"
      ]
    }
  },
  {
    "id": "OB2_ObjPlatform_FirstTime_PlateInactive",
    "name": "OB2_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Heaven's Stair: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x16e740ef",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_SE_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "OB2_ObjPlatform_FirstTime_PlateActive",
    "name": "OB2_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Heaven's Stair: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x16e740f0",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "OB2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_SE_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "OB2_SCE_PrinceFreeze_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB2_SCE_SE_Objectiveplatform_V3",
        "OB2_SCE_PrinceFreeze_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "OB2_ObjPlatform_Return_PlateInactive",
    "name": "OB2_ObjPlatform_Return_PlateInactive",
    "displayName": "Heaven's Stair: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x16e740f2",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB2_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_SE_XXX_ObjectivePlatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_SE_XXX_ObjectivePlatform_V2"
      ]
    }
  },
  {
    "id": "OB5_ObjPlatform_FirstTime_PlateInactive",
    "name": "OB5_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Reservoir: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x263bc003",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_SE_XXX_ObjectivePlatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_SE_XXX_ObjectivePlatform_V1"
      ]
    }
  },
  {
    "id": "OB5_ObjPlatform_FirstTime_PlateActive",
    "name": "OB5_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Reservoir: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x263bc004",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_CIN_001_ObjectivePlatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_CIN_001_ObjectivePlatform_V3"
      ]
    }
  },
  {
    "id": "OB5_ObjPlatform_Return_PlateInactive",
    "name": "OB5_ObjPlatform_Return_PlateInactive",
    "displayName": "Reservoir: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x263bc005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_SE_XXX_ObjectivePlatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_SE_XXX_ObjectivePlatform_V2"
      ]
    }
  },
  {
    "id": "OB5_ObjPlatform_Return_PlateActive",
    "name": "OB5_ObjPlatform_Return_PlateActive",
    "displayName": "Reservoir: Platform (Return, Plate Active)",
    "kind": "item",
    "hash": "0x263bc006",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB5_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB5_ObjPlatform_FirstTime_PlateActive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB5_SCE_CIN_002_ObjectivePlatform_V4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB5_SCE_CIN_002_ObjectivePlatform_V4"
      ]
    }
  },
  {
    "id": "OB6_ObjPlatform_FirstTime_BubbleHealed",
    "name": "OB6_ObjPlatform_FirstTime_BubbleHealed",
    "displayName": "Cauldron: Fertile Ground Platform First Time Fertile Ground Level Healed",
    "kind": "item",
    "hash": "0x85e20011",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB6_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB6_SCE_CIN_002_ObjectivePlatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB6_SCE_CIN_002_ObjectivePlatform_V1"
      ]
    }
  },
  {
    "id": "OB4_ObjPlatform_FirstTime_PlateInactive",
    "name": "OB4_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Construction Yard: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x40138a42",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_SCE_SE_ObjPlat_PowerCheck",
        "inverted": false,
        "port": "Normal"
      },
      {
        "source": "OB4_SCE_SE_ObjPlat_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_SE_XXX_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_SE_XXX_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "OB4_ObjPlatform_Return_PlateInactive",
    "name": "OB4_ObjPlatform_Return_PlateInactive",
    "displayName": "Construction Yard: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x40138a43",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB4_SCE_SE_ObjPlat_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_SE_XXX_Objectiveplatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_SE_XXX_Objectiveplatform_V2"
      ]
    }
  },
  {
    "id": "OB4_ObjPlatform_Return_PlateActive",
    "name": "OB4_ObjPlatform_Return_PlateActive",
    "displayName": "Construction Yard: Platform (Return, Plate Active)",
    "kind": "item",
    "hash": "0x40138a44",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_ObjPlatform_FirstTime_PlateActive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_CIN_002_Objectiveplatform_V4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_CIN_002_Objectiveplatform_V4"
      ]
    }
  },
  {
    "id": "OB4_ObjPlatform_FirstTime_PlateActive",
    "name": "OB4_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Construction Yard: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x40138a45",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_SCE_SE_ObjPlat_PowerCheck",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_CIN_001_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_CIN_001_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "OB4_SCE_SE_ObjPlat_PowerCheck",
    "name": "OB4_SCE_SE_ObjPlat_PowerCheck",
    "displayName": "Construction Yard: Platform Power Check",
    "kind": "item",
    "hash": "0x882b8417",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_SE_ObjPlat_PowerCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_SE_ObjPlat_PowerCheck"
      ]
    }
  },
  {
    "id": "OB4_PuzzleChallenge",
    "name": "OB4_PuzzleChallenge",
    "displayName": "Construction Yard: Puzzle Challenge",
    "kind": "item",
    "hash": "0x43160339",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_002_Puzzle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_CIN_004_PuzzleSolved",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_CIN_004_PuzzleSolved"
      ]
    }
  },
  {
    "id": "OB4_PuzzleReturn",
    "name": "OB4_PuzzleReturn",
    "displayName": "Construction Yard: Puzzle Return",
    "kind": "item",
    "hash": "0x432ec005",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_002_Puzzle"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_PuzzleChallenge",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_SE_XXX_Objectiveplatform_V6",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_SE_XXX_Objectiveplatform_V6"
      ]
    }
  },
  {
    "id": "OB4_PuzzleLeverHint",
    "name": "OB4_PuzzleLeverHint",
    "displayName": "Construction Yard: Puzzle Lever Hint",
    "kind": "item",
    "hash": "0x432ec006",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_002_Puzzle"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_SE_014_ElikaLeverSpeech",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_SE_014_ElikaLeverSpeech"
      ]
    }
  },
  {
    "id": "OB4_SCE_SE_022_MainPlatformCrank",
    "name": "OB4_SCE_SE_022_MainPlatformCrank",
    "displayName": "Construction Yard: Main Platform Crank",
    "kind": "item",
    "hash": "0x58794bab",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_002_Puzzle"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_PuzzleLeverHint",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "OB4_PuzzleLongBeamHint",
    "name": "OB4_PuzzleLongBeamHint",
    "displayName": "Construction Yard: Puzzle Long Beam Hint",
    "kind": "item",
    "hash": "0x432ec013",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "OB4_002_Puzzle"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "OB4_PuzzleChallenge",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "OB4_PuzzleLeverHint",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "OB4_SCE_SE_015_LongBeam",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "OB4_SCE_SE_015_LongBeam"
      ]
    }
  },
  {
    "id": "RC1_ObjPlatform_FirstTime_PlateInactive",
    "name": "RC1_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Windmills: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x0f2e801d",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_SCE_OBJ_Plaform_PowerCheck",
        "inverted": false,
        "port": "Normal"
      },
      {
        "source": "RC1_SCE_OBJ_Plaform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_006_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_006_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "RC1_ObjPlatform_Return_PlateInactive",
    "name": "RC1_ObjPlatform_Return_PlateInactive",
    "displayName": "Windmills: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x0f2e801e",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC1_SCE_OBJ_Plaform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_SE_007_Objectiveplatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_SE_007_Objectiveplatform_V2"
      ]
    }
  },
  {
    "id": "RC1_ObjPlatform_FirstTime_PlateActive",
    "name": "RC1_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Windmills: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x0f2e801f",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_SCE_OBJ_Plaform_PowerCheck",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_CIN_001_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_CIN_001_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "RC1_ObjPlatform_Return_PlateActive",
    "name": "RC1_ObjPlatform_Return_PlateActive",
    "displayName": "Windmills: Platform (Return, Plate Active)",
    "kind": "item",
    "hash": "0x0f2e8020",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC1_ObjPlatform_FirstTime_PlateActive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_CIN_002_Objectiveplatform_V4_A",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_CIN_002_Objectiveplatform_V4_A"
      ]
    }
  },
  {
    "id": "RC1_SCE_OBJ_Plaform_PowerCheck",
    "name": "RC1_SCE_OBJ_Plaform_PowerCheck",
    "displayName": "Windmills: Platform Power Check",
    "kind": "item",
    "hash": "0x57b0e613",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC1_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC1_SCE_OBJ_Platform_PowerCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC1_SCE_OBJ_Platform_PowerCheck"
      ]
    }
  },
  {
    "id": "RC2_ObjPlatform_FirstTime_PlateInactive",
    "name": "RC2_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Martyr's Tower: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0x198e90c8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_SCE_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Normal"
      },
      {
        "source": "RC2_SCE_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_006_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_006_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "RC2_ObjPlatform_FirstTime_PlateActive",
    "name": "RC2_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Martyr's Tower: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0x198e90c9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_SCE_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_CIN_001_ObjectivePlatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_CIN_001_ObjectivePlatform_V3"
      ]
    }
  },
  {
    "id": "RC2_ObjPlatform_Return_PlateInactive",
    "name": "RC2_ObjPlatform_Return_PlateInactive",
    "displayName": "Martyr's Tower: Platform (Return, Plate Inactive)",
    "kind": "item",
    "hash": "0x198e90ca",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_ObjPlatform_FirstTime_PlateInactive",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC2_SCE_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_007_Objectiveplatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_007_Objectiveplatform_V2"
      ]
    }
  },
  {
    "id": "RC2_ObjPlatform_Return_PlateActive",
    "name": "RC2_ObjPlatform_Return_PlateActive",
    "displayName": "Martyr's Tower: Platform (Return, Plate Active)",
    "kind": "item",
    "hash": "0x198e90cb",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC2_ObjPlatform_FirstTime_PlateActive",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_SE_010_Objectiveplatform_V4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_SE_010_Objectiveplatform_V4"
      ]
    }
  },
  {
    "id": "RC2_SCE_OBJ_Platform_PowerCheck",
    "name": "RC2_SCE_OBJ_Platform_PowerCheck",
    "displayName": "Martyr's Tower: Fertile Ground Platform Power Check",
    "kind": "item",
    "hash": "0x57b0f258",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC2_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC2_SCE_OBJ_Platform_PowerCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC2_SCE_OBJ_Platform_PowerCheck"
      ]
    }
  },
  {
    "id": "RC5_ObjPlatform_FirstTime_PlateInactive",
    "name": "RC5_ObjPlatform_FirstTime_PlateInactive",
    "displayName": "Sun Temple: Platform (First Time, Plate Inactive)",
    "kind": "item",
    "hash": "0xcd580752",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_SE_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_006_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_SE_006_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "RC5_ObjPlatform_FirstTime_PlateActive",
    "name": "RC5_ObjPlatform_FirstTime_PlateActive",
    "displayName": "Sun Temple: Platform (First Time, Plate Active)",
    "kind": "item",
    "hash": "0xcd580791",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC5_SE_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC5_SCE_SE_008_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC5_SCE_SE_008_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "RC6_ObjPlatform_FirstTime",
    "name": "RC6_ObjPlatform_FirstTime",
    "displayName": "King's Gate: Fertile Ground Platform First Time",
    "kind": "item",
    "hash": "0x53c80031",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC6_ObjectivePlatform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC6_SCE_CIN_002_ObjectivePlatform_V1_SomeHealed",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC6_SCE_CIN_002_ObjectivePlatform_V1_SomeHealed"
      ]
    }
  },
  {
    "id": "RC4_OBjPlatform_FirstTime_PlateInactive_V1",
    "name": "RC4_OBjPlatform_FirstTime_PlateInactive_V1",
    "displayName": "Marshalling Ground: O Bj Platform First Time Plate Inactive v1",
    "kind": "item",
    "hash": "0x2dc72cd7",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_SE_Objective Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SCE_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Normal"
      },
      {
        "source": "RC4_SCE_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_SE_XXX_Objectiveplatform_V1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_SE_XXX_Objectiveplatform_V1"
      ]
    }
  },
  {
    "id": "RC4_OBjPlatform_FirstTime_PlateActive_V3",
    "name": "RC4_OBjPlatform_FirstTime_PlateActive_V3",
    "displayName": "Marshalling Ground: O Bj Platform First Time Plate Active v3",
    "kind": "item",
    "hash": "0x2dc72cd8",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_SE_Objective Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_SCE_OBJ_Platform_PowerCheck",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_SE_XXX_Objectiveplatform_V3",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_SE_XXX_Objectiveplatform_V3"
      ]
    }
  },
  {
    "id": "RC4_OBjPlatform_Return_PlateInactive_V2",
    "name": "RC4_OBjPlatform_Return_PlateInactive_V2",
    "displayName": "Marshalling Ground: O Bj Platform Return Plate Inactive v2",
    "kind": "item",
    "hash": "0x2dc72cd9",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_SE_Objective Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_OBjPlatform_FirstTime_PlateInactive_V1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC4_SCE_OBJ_Platform_PowerCheck",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_SE_XXX_Objectiveplatform_V2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_SE_XXX_Objectiveplatform_V2"
      ]
    }
  },
  {
    "id": "RC4_OBjPlatform_Return_PlateActive_V4",
    "name": "RC4_OBjPlatform_Return_PlateActive_V4",
    "displayName": "Marshalling Ground: O Bj Platform Return Plate Active v4",
    "kind": "item",
    "hash": "0x2dc72cda",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_SE_Objective Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "RC4_OBjPlatform_FirstTime_PlateActive_V3",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_SE_XXX_Objectiveplatform_V4",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_SE_XXX_Objectiveplatform_V4"
      ]
    }
  },
  {
    "id": "RC4_SCE_OBJ_Platform_PowerCheck",
    "name": "RC4_SCE_OBJ_Platform_PowerCheck",
    "displayName": "Marshalling Ground: Fertile Ground Platform Power Check",
    "kind": "item",
    "hash": "0x56d60b65",
    "type": "MissionItemSceneSequencer",
    "bundle": "base",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "RC4_SE_Objective Platform"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "RC4_SCE_OBJ_Platform_PowerCheck",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "RC4_SCE_OBJ_Platform_PowerCheck"
      ]
    }
  },
  {
    "id": "0xd71a8526",
    "name": "0xd71a8526",
    "displayName": "Epilogue DLC Addon (0xd71a8526)",
    "kind": "item",
    "hash": "0xd71a8526",
    "type": "DLCMissionAddon",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [],
    "children": [],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": false,
    "completion": {
      "rule": "not-decoded"
    }
  },
  {
    "id": "DLC_Root",
    "name": "DLC_Root",
    "displayName": "Epilogue DLC Root",
    "kind": "item",
    "hash": "0xd3258002",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [],
    "children": [
      "DLC_01_Entrance",
      "DLC_02_Corridor01",
      "DLC_03_Reservoir",
      "DLC_04_Chimney",
      "DLC_05_Hammam",
      "DLC_06_Corridor02",
      "DLC_07_Garden",
      "DLC_08_Tunnel",
      "DLC_09_Tomb",
      "DLC_10_Corridor03",
      "DLC_11_Ballroom",
      "DLC_Fresco_LDD_Manager"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_11_Ballroom",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "DLC_11_Ballroom"
      ]
    }
  },
  {
    "id": "DLC_01_Entrance",
    "name": "DLC_01_Entrance",
    "displayName": "DLC 01: Entrance",
    "kind": "item",
    "hash": "0xd3258007",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "01_Intro_CINEMATIC",
      "01_Elika_Runs",
      "01_Fight_MK_Intro",
      "01_Fight_MK_Outro",
      "01_Elika_Runs_More",
      "01_Fight_MK_Taunts"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "01_Fight_MK_Outro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "01_Fight_MK_Outro"
      ]
    }
  },
  {
    "id": "DLC_02_Corridor01",
    "name": "DLC_02_Corridor01",
    "displayName": "DLC 02: Corridor 1",
    "kind": "item",
    "hash": "0xd325801d",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "02_ODD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_01_Entrance",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "DLC_03_Reservoir",
    "name": "DLC_03_Reservoir",
    "displayName": "DLC 03: Reservoir",
    "kind": "item",
    "hash": "0xd3258025",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "03_Fresco_Intro",
      "03_Lever_Intro",
      "03_Fight_SS_Intro",
      "03_Fight_PrinceODD",
      "03_Fight_SSOutro",
      "03_Fight_Taunts",
      "03_LDD_01"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_02_Corridor01",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "03_Fight_SSOutro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "03_Fight_SSOutro"
      ]
    }
  },
  {
    "id": "DLC_04_Chimney",
    "name": "DLC_04_Chimney",
    "displayName": "DLC 04: Chimney",
    "kind": "item",
    "hash": "0xd325803a",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "04_ODD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "04_ODD",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "DLC_03_Reservoir",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "04_ODD"
      ]
    }
  },
  {
    "id": "DLC_05_Hammam",
    "name": "DLC_05_Hammam",
    "displayName": "DLC 05: Hammam",
    "kind": "item",
    "hash": "0xd3258045",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "05_Intro_Hammam",
      "05_Intro_Energize",
      "05_Gate",
      "05_Pool_Levers",
      "05_Fight_SS_Intro",
      "05_Fight_SS_Outro"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "05_Fight_SS_Outro",
        "inverted": true,
        "port": "Completed"
      },
      {
        "source": "DLC_04_Chimney",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "05_Fight_SS_Outro"
      ]
    }
  },
  {
    "id": "DLC_06_Corridor02",
    "name": "DLC_06_Corridor02",
    "displayName": "DLC 06: Corridor 2",
    "kind": "item",
    "hash": "0xd3258063",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "06_ODD"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_05_Hammam",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "06_ODD",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "06_ODD"
      ]
    }
  },
  {
    "id": "DLC_07_Garden",
    "name": "DLC_07_Garden",
    "displayName": "DLC 07: Garden",
    "kind": "item",
    "hash": "0xd3258064",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "07_Intro_Puzzle",
      "07_Lock_001",
      "07_Lock_002",
      "07_Lock_003",
      "07_InitPuzzle",
      "07_Fight",
      "07_OpenTheDoor",
      "07_Garden_Intro",
      "07_Puzzle_All_LDD",
      "07_Puzzle_LDD_1Bar",
      "07_Puzzle_LDD_2Bars"
    ],
    "gates": [
      "DLC_07_Garden::op0",
      "DLC_07_Garden::op1"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_06_Corridor02",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_Fight",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "07_Fight"
      ]
    }
  },
  {
    "id": "DLC_08_Tunnel",
    "name": "DLC_08_Tunnel",
    "displayName": "DLC 08: Tunnel",
    "kind": "item",
    "hash": "0xd3258065",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "08_Fight_Intro_Outro",
      "08_LDD_01"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_07_Garden",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "08_Fight_Intro_Outro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "08_Fight_Intro_Outro"
      ]
    }
  },
  {
    "id": "DLC_09_Tomb",
    "name": "DLC_09_Tomb",
    "displayName": "DLC 09: Tomb",
    "kind": "item",
    "hash": "0xd3258066",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "09_Intro_Tomb",
      "09_Fight_MK_Intro",
      "09_Fight_MK_Outro",
      "09_LDD_03",
      "09_Flight_MK_Taunts"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_08_Tunnel",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "09_Fight_MK_Outro",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "09_Fight_MK_Outro"
      ]
    }
  },
  {
    "id": "DLC_10_Corridor03",
    "name": "DLC_10_Corridor03",
    "displayName": "DLC 10: Corridor 3",
    "kind": "item",
    "hash": "0xd3258067",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "10_Fight_Intro_Outro_LDD",
      "10_LDD_01"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_09_Tomb",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "10_Fight_Intro_Outro_LDD",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "10_Fight_Intro_Outro_LDD"
      ]
    }
  },
  {
    "id": "DLC_11_Ballroom",
    "name": "DLC_11_Ballroom",
    "displayName": "DLC 11: Ballroom",
    "kind": "item",
    "hash": "0xd3258068",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "11_Fight_MK_Intro",
      "11_Platform_Cin",
      "11_Final_Cin",
      "11_LDD_12_13",
      "11_LDD_14_15",
      "11_LDD_12_13_Whisper",
      "11_Fight_MK_Taunts",
      "11_Fight_MK_Taunts02",
      "11_Fight_MK_Taunts03"
    ],
    "gates": [],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_10_Corridor03",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "11_Final_Cin",
        "inverted": true,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "internal-signal",
      "triggers": [
        "11_Final_Cin"
      ]
    }
  },
  {
    "id": "DLC_Fresco_LDD_Manager",
    "name": "DLC_Fresco_LDD_Manager",
    "displayName": "DLC: Fresco Manager",
    "kind": "item",
    "hash": "0xeb1b8003",
    "type": "MissionItemList",
    "bundle": "dlc",
    "seqMode": null,
    "seqModeName": null,
    "parents": [
      "DLC_Root"
    ],
    "children": [
      "03_fresco_1",
      "03_fresco_2",
      "05_fresco_1",
      "05_fresco_2",
      "07_fresco_1",
      "07_fresco_2",
      "09_fresco_1",
      "09_fresco_2",
      "11_fresco_1",
      "11_fresco_2",
      "Ach_LDD_2",
      "Ach_LDD_3"
    ],
    "gates": [
      "DLC_Fresco_LDD_Manager::op0",
      "DLC_Fresco_LDD_Manager::op1"
    ],
    "milestone": false,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "default-unknown"
    }
  },
  {
    "id": "01_Intro_CINEMATIC",
    "name": "01_Intro_CINEMATIC",
    "displayName": "DLC 01 (Entrance): Cutscene - Intro",
    "kind": "item",
    "hash": "0xd3258008",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_01_Entrance"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_01_SCE_CIN_Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_01_SCE_CIN_Intro"
      ]
    }
  },
  {
    "id": "01_Elika_Runs",
    "name": "01_Elika_Runs",
    "displayName": "DLC 01 (Entrance): Elika Runs",
    "kind": "item",
    "hash": "0xd3258009",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_01_Entrance"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "01_Intro_CINEMATIC",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_01_SCE_ElikaPursuit",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_01_SCE_ElikaPursuit"
      ]
    }
  },
  {
    "id": "01_Fight_MK_Intro",
    "name": "01_Fight_MK_Intro",
    "displayName": "DLC 01 (Entrance): Fight Mourning King Intro",
    "kind": "item",
    "hash": "0xd325800a",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "DLC_01_Entrance"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "01_Elika_Runs_More",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_01_SCE_MK_Fight_Intro_Slide",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DLC_01_SCE_MK_Fight_Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_01_SCE_MK_Fight_Intro_Slide",
        "DLC_01_SCE_MK_Fight_Intro"
      ]
    }
  },
  {
    "id": "01_Fight_MK_Outro",
    "name": "01_Fight_MK_Outro",
    "displayName": "DLC 01 (Entrance): Fight Mourning King Outro",
    "kind": "item",
    "hash": "0xd325800b",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_01_Entrance"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "01_Fight_MK_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_01_SCE_MK_Fight_End",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_01_SCE_MK_Fight_End"
      ]
    }
  },
  {
    "id": "01_Elika_Runs_More",
    "name": "01_Elika_Runs_More",
    "displayName": "DLC 01 (Entrance): Elika Runs More",
    "kind": "item",
    "hash": "0xea0e46f3",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_01_Entrance"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "01_Elika_Runs",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_01_SCE_ElikaPursuit02",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_01_SCE_ElikaPursuit02"
      ]
    }
  },
  {
    "id": "01_Fight_MK_Taunts",
    "name": "01_Fight_MK_Taunts",
    "displayName": "DLC 01 (Entrance): Fight Mourning King Taunts",
    "kind": "item",
    "hash": "0xeaff184f",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_01_Entrance"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "01_Elika_Runs_More",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_01_SCE_MK_Fight_MKTaunts",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_01_SCE_MK_Fight_MKTaunts"
      ]
    }
  },
  {
    "id": "02_ODD",
    "name": "02_ODD",
    "displayName": "DLC 02 (Corridor 1): Dialogue",
    "kind": "item",
    "hash": "0xd325801e",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_02_Corridor01"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "03_Fresco_Intro",
    "name": "03_Fresco_Intro",
    "displayName": "DLC 03 (Reservoir): Fresco Intro",
    "kind": "item",
    "hash": "0xd3258026",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_03_Reservoir"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "03_Lever_Intro",
    "name": "03_Lever_Intro",
    "displayName": "DLC 03 (Reservoir): Lever Intro",
    "kind": "item",
    "hash": "0xd3258027",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_03_Reservoir"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "03_Fresco_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "03_Fight_SS_Intro",
    "name": "03_Fight_SS_Intro",
    "displayName": "DLC 03 (Reservoir): Fight Shape Shifter Intro",
    "kind": "item",
    "hash": "0xd3258028",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_03_Reservoir"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "03_Lever_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_03_SCE_SS_Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_03_SCE_SS_Intro"
      ]
    }
  },
  {
    "id": "03_Fight_PrinceODD",
    "name": "03_Fight_PrinceODD",
    "displayName": "DLC 03 (Reservoir): Fight Prince Dialogue",
    "kind": "item",
    "hash": "0xe60a93fd",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_03_Reservoir"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "03_Lever_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_03_ODD_SSFightPrince",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_03_ODD_SSFightPrince"
      ]
    }
  },
  {
    "id": "03_Fight_SSOutro",
    "name": "03_Fight_SSOutro",
    "displayName": "DLC 03 (Reservoir): Fight Shape Shifter Outro",
    "kind": "item",
    "hash": "0xe60a9672",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_03_Reservoir"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "03_Fight_SS_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_03_SCE_SS_Fight_Outro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_03_SCE_SS_Fight_Outro"
      ]
    }
  },
  {
    "id": "03_Fight_Taunts",
    "name": "03_Fight_Taunts",
    "displayName": "DLC 03 (Reservoir): Fight Taunts",
    "kind": "item",
    "hash": "0xe9a1cdb9",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_03_Reservoir"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "03_Fight_SS_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC03_BBL_Reservoir_Taunts",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC03_BBL_Reservoir_Taunts"
      ]
    }
  },
  {
    "id": "03_LDD_01",
    "name": "03_LDD_01",
    "displayName": "DLC 03 (Reservoir): Logic 01",
    "kind": "item",
    "hash": "0xea0edb4b",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_03_Reservoir"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "03_Fresco_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_03_SCE_LDD_001",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_03_SCE_LDD_001"
      ]
    }
  },
  {
    "id": "04_ODD",
    "name": "04_ODD",
    "displayName": "DLC 04 (Chimney): Dialogue",
    "kind": "item",
    "hash": "0xd325803b",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_04_Chimney"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "05_Intro_Hammam",
    "name": "05_Intro_Hammam",
    "displayName": "DLC 05 (Hammam): Intro Hammam",
    "kind": "item",
    "hash": "0xd3258046",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_05_Hammam"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "05_Intro_Energize",
    "name": "05_Intro_Energize",
    "displayName": "DLC 05 (Hammam): Intro Energize",
    "kind": "item",
    "hash": "0xd3258047",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_05_Hammam"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "05_Gate",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_05_BBL_SCE_IntroPower",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DLC_05_SCE_EnergizePlate",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_05_BBL_SCE_IntroPower",
        "DLC_05_SCE_EnergizePlate"
      ]
    }
  },
  {
    "id": "05_Gate",
    "name": "05_Gate",
    "displayName": "DLC 05 (Hammam): Gate",
    "kind": "item",
    "hash": "0xd3258048",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_05_Hammam"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "05_Intro_Hammam",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_05_SCE_LDD_01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_05_SCE_LDD_01"
      ]
    }
  },
  {
    "id": "05_Pool_Levers",
    "name": "05_Pool_Levers",
    "displayName": "DLC 05 (Hammam): Pool Levers",
    "kind": "item",
    "hash": "0xd3258049",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_05_Hammam"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "05_Intro_Energize",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_05_BBL_Hammam_SCE_Lever01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_05_BBL_Hammam_SCE_Lever01"
      ]
    }
  },
  {
    "id": "05_Fight_SS_Intro",
    "name": "05_Fight_SS_Intro",
    "displayName": "DLC 05 (Hammam): Fight Shape Shifter Intro",
    "kind": "item",
    "hash": "0xd3258057",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_05_Hammam"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "05_Pool_Levers",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_05_BBL_SCE_SSFight_Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_05_BBL_SCE_SSFight_Intro"
      ]
    }
  },
  {
    "id": "05_Fight_SS_Outro",
    "name": "05_Fight_SS_Outro",
    "displayName": "DLC 05 (Hammam): Fight Shape Shifter Outro",
    "kind": "item",
    "hash": "0xd3258058",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_05_Hammam"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "05_Fight_SS_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_05_SCE_SSFight_Outro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_05_SCE_SSFight_Outro"
      ]
    }
  },
  {
    "id": "06_ODD",
    "name": "06_ODD",
    "displayName": "DLC 06 (Corridor 2): Dialogue",
    "kind": "item",
    "hash": "0xd325807d",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_06_Corridor02"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "07_Intro_Puzzle",
    "name": "07_Intro_Puzzle",
    "displayName": "DLC 07 (Garden): Intro Puzzle",
    "kind": "item",
    "hash": "0xd3258083",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": []
    }
  },
  {
    "id": "07_Lock_001",
    "name": "07_Lock_001",
    "displayName": "DLC 07 (Garden): Lock 001",
    "kind": "item",
    "hash": "0xd41084f2",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "07_Intro_Puzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC07_SCE_Lock01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC07_SCE_Lock01"
      ]
    }
  },
  {
    "id": "07_Lock_002",
    "name": "07_Lock_002",
    "displayName": "DLC 07 (Garden): Lock 002",
    "kind": "item",
    "hash": "0xd41084f3",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "07_Intro_Puzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC07_SCE_Lock002",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC07_SCE_Lock002"
      ]
    }
  },
  {
    "id": "07_Lock_003",
    "name": "07_Lock_003",
    "displayName": "DLC 07 (Garden): Lock 003",
    "kind": "item",
    "hash": "0xd41084f4",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "07_Intro_Puzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC07_SCE_Lock03",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC07_SCE_Lock03"
      ]
    }
  },
  {
    "id": "07_InitPuzzle",
    "name": "07_InitPuzzle",
    "displayName": "DLC 07 (Garden): Init Puzzle",
    "kind": "item",
    "hash": "0xd41084f5",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "07_Lock_001",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_Lock_002",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_Lock_003",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC07_SCE_InitPuzzle_001",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DLC07_SCE_InitPuzzle_002",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC07_SCE_InitPuzzle_001",
        "DLC07_SCE_InitPuzzle_002"
      ]
    }
  },
  {
    "id": "07_Fight",
    "name": "07_Fight",
    "displayName": "DLC 07 (Garden): Fight",
    "kind": "item",
    "hash": "0xd41084f6",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "07_OpenTheDoor",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC07_SCE_Fight",
        "terminationOutputIdx": 0
      },
      {
        "slot": "DataScenes",
        "sceneName": "DLC07_SCE_FightEnd",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC07_SCE_Fight",
        "DLC07_SCE_FightEnd"
      ]
    }
  },
  {
    "id": "07_OpenTheDoor",
    "name": "07_OpenTheDoor",
    "displayName": "DLC 07 (Garden): Open The Door",
    "kind": "item",
    "hash": "0xd4108984",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "07_InitPuzzle",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC07_SCE_OpenTheDoor",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC07_SCE_OpenTheDoor"
      ]
    }
  },
  {
    "id": "07_Garden_Intro",
    "name": "07_Garden_Intro",
    "displayName": "DLC 07 (Garden): Garden Intro",
    "kind": "item",
    "hash": "0xe72bc05c",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_07_SCE_Cam_Intro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_07_SCE_Cam_Intro"
      ]
    }
  },
  {
    "id": "07_Puzzle_All_LDD",
    "name": "07_Puzzle_All_LDD",
    "displayName": "DLC 07 (Garden): Puzzle All Logic",
    "kind": "item",
    "hash": "0xea333800",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "07_Lock_003",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_Lock_002",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_Lock_001",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_07_SCE_LDD_13_14",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_07_SCE_LDD_13_14"
      ]
    }
  },
  {
    "id": "07_Puzzle_LDD_1Bar",
    "name": "07_Puzzle_LDD_1Bar",
    "displayName": "DLC 07 (Garden): Puzzle Logic 1 Bar",
    "kind": "item",
    "hash": "0xea333806",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_07_Garden::op0",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_07_SCE_LDD_11",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_07_SCE_LDD_11"
      ]
    }
  },
  {
    "id": "07_Puzzle_LDD_2Bars",
    "name": "07_Puzzle_LDD_2Bars",
    "displayName": "DLC 07 (Garden): Puzzle Logic 2 Bars",
    "kind": "item",
    "hash": "0xea33380a",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_07_Garden"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_07_Garden::op1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_07_SCE_LDD_12",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_07_SCE_LDD_12"
      ]
    }
  },
  {
    "id": "08_Fight_Intro_Outro",
    "name": "08_Fight_Intro_Outro",
    "displayName": "DLC 08 (Tunnel): Fight Intro Outro",
    "kind": "item",
    "hash": "0xd3258088",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_08_Tunnel"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_08_SCE_SSFight_Intro_Outro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [
      {
        "kind": "SendEvent",
        "timing": 1,
        "revert": true,
        "effects": []
      }
    ],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_08_SCE_SSFight_Intro_Outro"
      ]
    }
  },
  {
    "id": "08_LDD_01",
    "name": "08_LDD_01",
    "displayName": "DLC 08 (Tunnel): Logic 01",
    "kind": "item",
    "hash": "0xea5d4bca",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_08_Tunnel"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_08_SCE_LDD_01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_08_SCE_LDD_01"
      ]
    }
  },
  {
    "id": "09_Intro_Tomb",
    "name": "09_Intro_Tomb",
    "displayName": "DLC 09 (Tomb): Intro Tomb",
    "kind": "item",
    "hash": "0xd325808e",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_09_Tomb"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_09_SCE_IntroBBL",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_09_SCE_IntroBBL"
      ]
    }
  },
  {
    "id": "09_Fight_MK_Intro",
    "name": "09_Fight_MK_Intro",
    "displayName": "DLC 09 (Tomb): Fight Mourning King Intro",
    "kind": "item",
    "hash": "0xe64bea65",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_09_Tomb"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "09_Intro_Tomb",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_09_SCE_IntroFight",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_09_SCE_IntroFight"
      ]
    }
  },
  {
    "id": "09_Fight_MK_Outro",
    "name": "09_Fight_MK_Outro",
    "displayName": "DLC 09 (Tomb): Fight Mourning King Outro",
    "kind": "item",
    "hash": "0xe64bea66",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_09_Tomb"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "09_Fight_MK_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_09_SCE_MK_Fight_Outro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_09_SCE_MK_Fight_Outro"
      ]
    }
  },
  {
    "id": "09_LDD_03",
    "name": "09_LDD_03",
    "displayName": "DLC 09 (Tomb): Logic 03",
    "kind": "item",
    "hash": "0xea5d55fc",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_09_Tomb"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "09_Intro_Tomb",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_09_SCE_LDD_03",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_09_SCE_LDD_03"
      ]
    }
  },
  {
    "id": "09_Flight_MK_Taunts",
    "name": "09_Flight_MK_Taunts",
    "displayName": "DLC 09 (Tomb): Flight Mourning King Taunts",
    "kind": "item",
    "hash": "0xeaff2577",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_09_Tomb"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "09_Intro_Tomb",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_09_SCE_MK_Fight_Taunts",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_09_SCE_MK_Fight_Taunts"
      ]
    }
  },
  {
    "id": "10_Fight_Intro_Outro_LDD",
    "name": "10_Fight_Intro_Outro_LDD",
    "displayName": "DLC 10 (Corridor 3): Fight Intro Outro Logic",
    "kind": "item",
    "hash": "0xd3258094",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 1,
    "seqModeName": "Serial",
    "parents": [
      "DLC_10_Corridor03"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_STK10_SCE_SSFight_Intro_Outro",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_STK10_SCE_SSFight_Intro_Outro"
      ]
    }
  },
  {
    "id": "10_LDD_01",
    "name": "10_LDD_01",
    "displayName": "DLC 10 (Corridor 3): Logic 01",
    "kind": "item",
    "hash": "0xea6dd18d",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_10_Corridor03"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_10_SCE_LDD_01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_10_SCE_LDD_01"
      ]
    }
  },
  {
    "id": "11_Fight_MK_Intro",
    "name": "11_Fight_MK_Intro",
    "displayName": "DLC 11 (Ballroom): Fight Mourning King Intro",
    "kind": "item",
    "hash": "0xd325809a",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_11_Ballroom"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_MK_Fight_Part1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_MK_Fight_Part1"
      ]
    }
  },
  {
    "id": "11_Platform_Cin",
    "name": "11_Platform_Cin",
    "displayName": "DLC 11 (Ballroom): Platform Cin",
    "kind": "item",
    "hash": "0xe6c45a65",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_11_Ballroom"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "11_Fight_MK_Intro",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_CheckpointPlatform",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_CheckpointPlatform"
      ]
    }
  },
  {
    "id": "11_Final_Cin",
    "name": "11_Final_Cin",
    "displayName": "DLC 11 (Ballroom): Final Cin",
    "kind": "item",
    "hash": "0xe6c45a66",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_11_Ballroom"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "11_Platform_Cin",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_Final_Cin",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_Final_Cin"
      ]
    }
  },
  {
    "id": "11_LDD_12_13",
    "name": "11_LDD_12_13",
    "displayName": "DLC 11 (Ballroom): Logic 12 13",
    "kind": "item",
    "hash": "0xea7bc6a2",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_11_Ballroom"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "11_Platform_Cin",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_SE_12_13",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_SE_12_13"
      ]
    }
  },
  {
    "id": "11_LDD_14_15",
    "name": "11_LDD_14_15",
    "displayName": "DLC 11 (Ballroom): Logic 14 15",
    "kind": "item",
    "hash": "0xea7bc6d2",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_11_Ballroom"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "11_LDD_12_13",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_LDD_14",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_LDD_14"
      ]
    }
  },
  {
    "id": "11_LDD_12_13_Whisper",
    "name": "11_LDD_12_13_Whisper",
    "displayName": "DLC 11 (Ballroom): Logic 12 13 Whisper",
    "kind": "item",
    "hash": "0xeac3d1a6",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_11_Ballroom"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "11_Platform_Cin",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_SE_12_13_Whispers",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_SE_12_13_Whispers"
      ]
    }
  },
  {
    "id": "11_Fight_MK_Taunts",
    "name": "11_Fight_MK_Taunts",
    "displayName": "DLC 11 (Ballroom): Fight Mourning King Taunts",
    "kind": "item",
    "hash": "0x02b8c426",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_11_Ballroom"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_MK_Fight_Part1_Taunts",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_MK_Fight_Part1_Taunts"
      ]
    }
  },
  {
    "id": "11_Fight_MK_Taunts02",
    "name": "11_Fight_MK_Taunts02",
    "displayName": "DLC 11 (Ballroom): Fight Mourning King Taunts 02",
    "kind": "item",
    "hash": "0x06014010",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_11_Ballroom"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_MK_Fight_Part2_Taunts",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_MK_Fight_Part2_Taunts"
      ]
    }
  },
  {
    "id": "11_Fight_MK_Taunts03",
    "name": "11_Fight_MK_Taunts03",
    "displayName": "DLC 11 (Ballroom): Fight Mourning King Taunts 03",
    "kind": "item",
    "hash": "0x0601408d",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_11_Ballroom"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_MK_Fight_Part3_Taunts",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_MK_Fight_Part3_Taunts"
      ]
    }
  },
  {
    "id": "03_fresco_1",
    "name": "03_fresco_1",
    "displayName": "DLC 03 (Reservoir): fresco 1",
    "kind": "item",
    "hash": "0xeb1b8004",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_03_SCE_Ormazd_01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_03_SCE_Ormazd_01"
      ]
    }
  },
  {
    "id": "03_fresco_2",
    "name": "03_fresco_2",
    "displayName": "DLC 03 (Reservoir): fresco 2",
    "kind": "item",
    "hash": "0xeb1b8005",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_03_SCE_Ormazd_02",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_03_SCE_Ormazd_02"
      ]
    }
  },
  {
    "id": "05_fresco_1",
    "name": "05_fresco_1",
    "displayName": "DLC 05 (Hammam): fresco 1",
    "kind": "item",
    "hash": "0xeb1b92aa",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_05_SCE_Ormazd_01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_05_SCE_Ormazd_01"
      ]
    }
  },
  {
    "id": "05_fresco_2",
    "name": "05_fresco_2",
    "displayName": "DLC 05 (Hammam): fresco 2",
    "kind": "item",
    "hash": "0xeb1b92ab",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_05_SCE_Ormazd_02",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_05_SCE_Ormazd_02"
      ]
    }
  },
  {
    "id": "07_fresco_1",
    "name": "07_fresco_1",
    "displayName": "DLC 07 (Garden): fresco 1",
    "kind": "item",
    "hash": "0xeb1b92b2",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_07_SCE_Ormazd_01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_07_SCE_Ormazd_01"
      ]
    }
  },
  {
    "id": "07_fresco_2",
    "name": "07_fresco_2",
    "displayName": "DLC 07 (Garden): fresco 2",
    "kind": "item",
    "hash": "0xeb1b92b3",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_07_SCE_Ormazd_02",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_07_SCE_Ormazd_02"
      ]
    }
  },
  {
    "id": "09_fresco_1",
    "name": "09_fresco_1",
    "displayName": "DLC 09 (Tomb): fresco 1",
    "kind": "item",
    "hash": "0xeb1b92b4",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_09_SCE_Ormazd_01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_09_SCE_Ormazd_01"
      ]
    }
  },
  {
    "id": "09_fresco_2",
    "name": "09_fresco_2",
    "displayName": "DLC 09 (Tomb): fresco 2",
    "kind": "item",
    "hash": "0xeb1b92b5",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_09_SCE_Ormazd_02",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_09_SCE_Ormazd_02"
      ]
    }
  },
  {
    "id": "11_fresco_1",
    "name": "11_fresco_1",
    "displayName": "DLC 11 (Ballroom): fresco 1",
    "kind": "item",
    "hash": "0xeb1b92b6",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_Ormazd_01",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_Ormazd_01"
      ]
    }
  },
  {
    "id": "11_fresco_2",
    "name": "11_fresco_2",
    "displayName": "DLC 11 (Ballroom): fresco 2",
    "kind": "item",
    "hash": "0xeb1b92b7",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "DLC_11_SCE_Ormazd_02",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "DLC_11_SCE_Ormazd_02"
      ]
    }
  },
  {
    "id": "Ach_LDD_2",
    "name": "Ach_LDD_2",
    "displayName": "DLC: Achievement Tracker 2",
    "kind": "item",
    "hash": "0xeb1b92de",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_Fresco_LDD_Manager::op0",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "World_Achivement_LDD_1",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "World_Achivement_LDD_1"
      ]
    }
  },
  {
    "id": "Ach_LDD_3",
    "name": "Ach_LDD_3",
    "displayName": "DLC: Achievement Tracker 3",
    "kind": "item",
    "hash": "0xeb1b92e2",
    "type": "MissionItemSceneSequencer",
    "bundle": "dlc",
    "seqMode": 0,
    "seqModeName": "Concurrent",
    "parents": [
      "DLC_Fresco_LDD_Manager"
    ],
    "children": [],
    "gates": [],
    "milestone": true,
    "persistent": false,
    "alwaysLoaded": false,
    "resetWhenCompleted": false,
    "missionActType": "Invalid",
    "requirements": [
      {
        "source": "DLC_Fresco_LDD_Manager::op1",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "scenes": [
      {
        "slot": "DataScenes",
        "sceneName": "World_Achivement_LDD_2",
        "terminationOutputIdx": 0
      }
    ],
    "actions": [],
    "decodedOk": true,
    "completion": {
      "rule": "scene-termination",
      "scenes": [
        "World_Achivement_LDD_2"
      ]
    }
  },
  {
    "id": "Desert::op0",
    "name": "Desert::op0",
    "displayName": "The Desert (OR Gate #0)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "Desert",
    "requirements": [
      {
        "source": "PowerTutorial_Grapple",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_Rebound",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_Dash",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_FlyOnBeam",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "Desert::op1",
    "name": "Desert::op1",
    "displayName": "The Desert (OR Gate #1)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "Desert",
    "requirements": [
      {
        "source": "PowerTutorial_Grapple",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_Rebound",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_Dash",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_FlyOnBeam",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "Desert::op2",
    "name": "Desert::op2",
    "displayName": "The Desert (OR Gate #2)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "Desert",
    "requirements": [
      {
        "source": "PowerTutorial_Grapple",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_Rebound",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_Dash",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "PowerTutorial_FlyOnBeam",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "VINES::op0",
    "name": "VINES::op0",
    "displayName": "Vines Traversal (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "VINES",
    "requirements": [
      {
        "source": "RC6_Vines",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_Vines2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_Vines3",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_Vines4",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_Vines5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "VINES::op1",
    "name": "VINES::op1",
    "displayName": "Vines Traversal (AND Gate #1)",
    "kind": "gate",
    "gateType": "And",
    "owner": "VINES",
    "requirements": [
      {
        "source": "LR6_Vines",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR6_Vines2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "VINES::op2",
    "name": "VINES::op2",
    "displayName": "Vines Traversal (AND Gate #2)",
    "kind": "gate",
    "gateType": "And",
    "owner": "VINES",
    "requirements": [
      {
        "source": "JCT2_Vines",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT2_Vines3",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "VINES::op3",
    "name": "VINES::op3",
    "displayName": "Vines Traversal (AND Gate #3)",
    "kind": "gate",
    "gateType": "And",
    "owner": "VINES",
    "requirements": [
      {
        "source": "JCT1_Vines",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT1_Vines3",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT1_Vines4and5",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "SLIDES::op0",
    "name": "SLIDES::op0",
    "displayName": "Slides (OR Gate #0)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "SLIDES",
    "requirements": [
      {
        "source": "HC6_Slide",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_Slide2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "ROOFING::op0",
    "name": "ROOFING::op0",
    "displayName": "Ceiling Running (Roofing) (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "ROOFING",
    "requirements": [
      {
        "source": "OB6_Roofing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB6_RoofingRing",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "ROOFING::op1",
    "name": "ROOFING::op1",
    "displayName": "Ceiling Running (Roofing) (AND Gate #1)",
    "kind": "gate",
    "gateType": "And",
    "owner": "ROOFING",
    "requirements": [
      {
        "source": "HC6_Roofing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_RoofRing",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "ROOFING::op2",
    "name": "ROOFING::op2",
    "displayName": "Ceiling Running (Roofing) (AND Gate #2)",
    "kind": "gate",
    "gateType": "And",
    "owner": "ROOFING",
    "requirements": [
      {
        "source": "RC6_Roofing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_RoofingRing",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "POLE::op0",
    "name": "POLE::op0",
    "displayName": "Poles (OR Gate #0)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "POLE",
    "requirements": [
      {
        "source": "HC6_Pole",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_Pole2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "GRIPS::op0",
    "name": "GRIPS::op0",
    "displayName": "Wall Grips & Grip Falls (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "GRIPS",
    "requirements": [
      {
        "source": "JCT1_VerticalRing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT1_HorizontalRing",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "GRIPS::op1",
    "name": "GRIPS::op1",
    "displayName": "Wall Grips & Grip Falls (AND Gate #1)",
    "kind": "gate",
    "gateType": "And",
    "owner": "GRIPS",
    "requirements": [
      {
        "source": "JCT2_VerticalRing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT2_HorizontalRing",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "GRIPS::op2",
    "name": "GRIPS::op2",
    "displayName": "Wall Grips & Grip Falls (AND Gate #2)",
    "kind": "gate",
    "gateType": "And",
    "owner": "GRIPS",
    "requirements": [
      {
        "source": "JCT3_HorizontalRing",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT3_VerticalRing",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "FERTILEGROUND::op0",
    "name": "FERTILEGROUND::op0",
    "displayName": "Fertile Grounds (OR Gate #0)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "FERTILEGROUND",
    "requirements": [
      {
        "source": "OB6_Heal_NotFirstTime",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_Heal_NotFirstTime",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_Heal_NotFirstTime",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR6_Heal_NotFirstTime",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "COLUMN::op0",
    "name": "COLUMN::op0",
    "displayName": "Columns (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "COLUMN",
    "requirements": [
      {
        "source": "RC6_Column",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_Column2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_Column3",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "COLUMN::op1",
    "name": "COLUMN::op1",
    "displayName": "Columns (AND Gate #1)",
    "kind": "gate",
    "gateType": "And",
    "owner": "COLUMN",
    "requirements": [
      {
        "source": "OB6_Column2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "OB6_Column",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "COLUMN::op2",
    "name": "COLUMN::op2",
    "displayName": "Columns (AND Gate #2)",
    "kind": "gate",
    "gateType": "And",
    "owner": "COLUMN",
    "requirements": [
      {
        "source": "LR6_Column",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR6_Column2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "COLUMN::op3",
    "name": "COLUMN::op3",
    "displayName": "Columns (AND Gate #3)",
    "kind": "gate",
    "gateType": "And",
    "owner": "COLUMN",
    "requirements": [
      {
        "source": "JCT2_Column",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT2_Colum2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT2_Column3",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT2_Column4",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "COLUMN::op4",
    "name": "COLUMN::op4",
    "displayName": "Columns (AND Gate #4)",
    "kind": "gate",
    "gateType": "And",
    "owner": "COLUMN",
    "requirements": [
      {
        "source": "JCT3_Column",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT3_Column2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT3_Column3",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "JCT3_Column4",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "AfterHealMap_CollectSparkles::op0",
    "name": "AfterHealMap_CollectSparkles::op0",
    "displayName": "Post-Heal Map: Collect Light Seeds (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "AfterHealMap_CollectSparkles",
    "requirements": [
      {
        "source": "OB6_CollectSparkles",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR6_CollectSparkles",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_CollectSparkles",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_CollectSparkles",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "PUZZLES::op0",
    "name": "PUZZLES::op0",
    "displayName": "Puzzles (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "PUZZLES",
    "requirements": [
      {
        "source": "OB4_ODD3",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC_TUT_ODD3",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC_ODD3",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "AfterHealMap_SetDestination::op0",
    "name": "AfterHealMap_SetDestination::op0",
    "displayName": "Post-Heal Map: Set Destination (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "AfterHealMap_SetDestination",
    "requirements": [
      {
        "source": "OB6_SetDestination",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC6_SetDestination",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC6_SetDestination",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR6_SetDestination",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "HC1::op0",
    "name": "HC1::op0",
    "displayName": "Spire of Dreams (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "HC1",
    "requirements": [
      {
        "source": "HC1_1st_Illusion",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC1_2nd_Illusion",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "HC2::op0",
    "name": "HC2::op0",
    "displayName": "Royal Gardens (OR Gate #0)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "HC2",
    "requirements": [
      {
        "source": "HC2_EndofFight_Lo_Up",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "HC2_EndofFight_Lo_Down",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "RC1_Windmill::op0",
    "name": "RC1_Windmill::op0",
    "displayName": "Windmills (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "RC1_Windmill",
    "requirements": [
      {
        "source": "RC1_IntroPuzzle1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC1_SCE_SE_XXX_Circulation_Puzzle_Return",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "LR1_WarriorFight_Sequence::op0",
    "name": "LR1_WarriorFight_Sequence::op0",
    "displayName": "LR 1 Warrior Fight Sequence (AND Gate #0)",
    "kind": "gate",
    "gateType": "And",
    "owner": "LR1_WarriorFight_Sequence",
    "requirements": [
      {
        "source": "LR1_SE_WarriorFight",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "LR1_CIN_007_2ndPillar_FacialAnim",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "RC4_SE_Objective Platform::op0",
    "name": "RC4_SE_Objective Platform::op0",
    "displayName": "RC 4 SE Fertile Ground Platform (OR Gate #0)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "RC4_SE_Objective Platform",
    "requirements": [
      {
        "source": "RC4_OBjPlatform_FirstTime_PlateInactive_V1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC4_OBjPlatform_FirstTime_PlateActive_V3",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "RC4_SE_Objective Platform::op1",
    "name": "RC4_SE_Objective Platform::op1",
    "displayName": "RC 4 SE Fertile Ground Platform (OR Gate #1)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "RC4_SE_Objective Platform",
    "requirements": [
      {
        "source": "RC4_OBjPlatform_Return_PlateInactive_V2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "RC4_OBjPlatform_Return_PlateActive_V4",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "DLC_07_Garden::op0",
    "name": "DLC_07_Garden::op0",
    "displayName": "DLC 07: Garden (OR Gate #0)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "DLC_07_Garden",
    "requirements": [
      {
        "source": "07_Lock_001",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_Lock_002",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_Lock_003",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "DLC_07_Garden::op1",
    "name": "DLC_07_Garden::op1",
    "displayName": "DLC 07: Garden (OR Gate #1)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "DLC_07_Garden",
    "requirements": [
      {
        "source": "07_Lock_001",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_Lock_002",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_Lock_003",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "DLC_Fresco_LDD_Manager::op0",
    "name": "DLC_Fresco_LDD_Manager::op0",
    "displayName": "DLC: Fresco Manager (OR Gate #0)",
    "kind": "gate",
    "gateType": "Or",
    "owner": "DLC_Fresco_LDD_Manager",
    "requirements": [
      {
        "source": "03_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "03_fresco_2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "05_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "05_fresco_2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_fresco_2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "09_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "09_fresco_2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "11_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "11_fresco_2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  },
  {
    "id": "DLC_Fresco_LDD_Manager::op1",
    "name": "DLC_Fresco_LDD_Manager::op1",
    "displayName": "DLC: Fresco Manager (AND Gate #1)",
    "kind": "gate",
    "gateType": "And",
    "owner": "DLC_Fresco_LDD_Manager",
    "requirements": [
      {
        "source": "03_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "03_fresco_2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "05_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "05_fresco_2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "07_fresco_2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "09_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "09_fresco_2",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "11_fresco_1",
        "inverted": false,
        "port": "Completed"
      },
      {
        "source": "11_fresco_2",
        "inverted": false,
        "port": "Completed"
      }
    ],
    "completion": {
      "rule": "gate-combine"
    }
  }
];

export default missionNodes;
