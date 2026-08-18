const missionItems = [
    {
        "name": "POP0_ROOT",
        "hash": "0x6b866308",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [],
        "requirements": [
            {
                "connected_uid": "0x21e6414b",
                "inverted": true,
                "source_resource": "ACT3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6b86631b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6b86631c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1",
        "hash": "0x21460002",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "POP0_ROOT"
        ],
        "requirements": [
            {
                "connected_uid": "0x25a9c008",
                "inverted": true,
                "source_resource": "ACT1_005_WorldCorrupts",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21460007",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT2",
                        "inverted": false
                    },
                    {
                        "resource": "DE3_ODD2",
                        "inverted": false
                    },
                    {
                        "resource": "ALL_SpeedKill",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x21460008",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3",
        "hash": "0x21e6414a",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "POP0_ROOT"
        ],
        "requirements": [
            {
                "connected_uid": "0x21460009",
                "inverted": false,
                "source_resource": "ACT2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x21e6418a",
                "inverted": true,
                "source_resource": "ACT3_CIN_IntoTheSunset",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21e6414b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "POP0_ROOT",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x21e6414c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT2",
        "hash": "0x21460003",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "POP0_ROOT"
        ],
        "requirements": [
            {
                "connected_uid": "0x21460007",
                "inverted": false,
                "source_resource": "ACT1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x22528010",
                "inverted": true,
                "source_resource": "ACT2_OrmazhdPortal",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21460009",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3",
                        "inverted": false
                    },
                    {
                        "resource": "AcrobaticTutorials",
                        "inverted": true
                    },
                    {
                        "resource": "ALL_SpeedKill",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2146000a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "AcrobaticTutorials",
        "hash": "0x4daec588",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "POP0_ROOT"
        ],
        "requirements": [
            {
                "connected_uid": "0x21460009",
                "inverted": true,
                "source_resource": "ACT2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4daec589",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4daec58a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_005_WorldCorrupts_003_TempleCollapses",
        "hash": "0x37e531a9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e52fa6",
                "inverted": false,
                "source_resource": "ACT1_005_WorldCorrupts_001_MK_Arrives",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e531ab",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37e531ac",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_002_AdvTutorial_004_GuardFight",
        "hash": "0x37e505b6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e505bd",
                "inverted": false,
                "source_resource": "ACT1_002_AdvTutorial_002_Bridge",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e505c3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37e505c4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_001_BasicTutorial_007",
        "hash": "0x37e5025d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e50269",
                "inverted": false,
                "source_resource": "ACT1_001_BasicTutorial_004",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e50275",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37e50276",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_005_WorldCorrupts_002_BrokenCorridorOn",
        "hash": "0x37e533de",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e52fa6",
                "inverted": false,
                "source_resource": "ACT1_005_WorldCorrupts_001_MK_Arrives",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e533df",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37e533e0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_005_WorldCorrupts",
        "hash": "0x25a9c001",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e531b0",
                "inverted": false,
                "source_resource": "ACT1_005_WorldCorrupts_004_CorridorCollapses",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x25a9c008",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x25a9c009",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_003_TutorialGripFall_004",
        "hash": "0xa5d40369",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e50dbf",
                "inverted": false,
                "source_resource": "ACT1_003_FinalTrial_003_MK",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa5d4036a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xa5d4036b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3C_SCE_SE_AhrimanWhispering_OA_006",
        "hash": "0x5120802c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e52faa",
                "inverted": true,
                "source_resource": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x37e51a86",
                "inverted": false,
                "source_resource": "ACT1_004_Temple_003_InTree",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5120802d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5120802e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_DE2_HideAllSparkles",
        "hash": "0x9b874005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9b87400a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x9b87400b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_001_BasicTutorial_001",
        "hash": "0x37e50256",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e5025e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_001_BasicTutorial_002",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e5025f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_001_BasicTutorial_002",
        "hash": "0x37e50258",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e5025e",
                "inverted": false,
                "source_resource": "ACT1_001_BasicTutorial_001",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e50261",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_001_BasicTutorial_004",
                        "inverted": false
                    },
                    {
                        "resource": "ACT1_001_BasicTutorial_005",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e50262",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_003_FinalTrial_001_FightIntro",
        "hash": "0x4c4645a2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4c4645a4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_003_FinalTrial_002_secondGuard",
                        "inverted": false
                    },
                    {
                        "resource": "ACT1_003_FirstGuardSpawning",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4c4645a5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_001_BasicTutorial_004",
        "hash": "0x37e5025a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e50261",
                "inverted": false,
                "source_resource": "ACT1_001_BasicTutorial_002",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e50269",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_001_BasicTutorial_007",
                        "inverted": false
                    },
                    {
                        "resource": "ACT1_001_BasicTutorial_006",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e5026a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_001_BasicTutorial_005",
        "hash": "0x37e5025b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e50261",
                "inverted": false,
                "source_resource": "ACT1_001_BasicTutorial_002",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e5026d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37e5026e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_001_BasicTutorial_006",
        "hash": "0x37e5025c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e50269",
                "inverted": false,
                "source_resource": "ACT1_001_BasicTutorial_004",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e50271",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37e50272",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_002_AdvTutorial_001",
        "hash": "0x37e505b1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e505b7",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37e505b8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_002_AdvTutorial_002_TreeVista",
        "hash": "0x37e505b2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e505ba",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37e505bb",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_002_AdvTutorial_002_Bridge",
        "hash": "0x37e505b3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e505bd",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_002_AdvTutorial_004_GuardFight",
                        "inverted": false
                    },
                    {
                        "resource": "ACT1_002_AdvTutorial_003_ElikaChat",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e505be",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_002_AdvTutorial_003_ElikaChat",
        "hash": "0x37e505b4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e505bd",
                "inverted": false,
                "source_resource": "ACT1_002_AdvTutorial_002_Bridge",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e505bf",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_003_FirstGuardSpawning",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e505c0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_005_WorldCorrupts_004_CorridorCollapses",
        "hash": "0x37e531af",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x39504018",
                "inverted": false,
                "source_resource": "ACT1_005_Temple_003_2ndGenFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e531b0",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_005_WorldCorrupts",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e531b1",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_003_FinalTrial_002_secondGuard",
        "hash": "0x37e50db9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x4c4645a4",
                "inverted": false,
                "source_resource": "ACT1_003_FinalTrial_001_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e50dbb",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_003_FinalTrial_003_MK",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e50dbc",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_003_FinalTrial_003_MK",
        "hash": "0x37e50dba",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e50dbb",
                "inverted": false,
                "source_resource": "ACT1_003_FinalTrial_002_secondGuard",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e50dbf",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_003_TutorialGripFall_004",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e50dc0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_004_Temple_001_ElikaRuns",
        "hash": "0x37e517c1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e51a80",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_004_Temple_003_InTree",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e51a81",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_004_Temple_003_InTree",
        "hash": "0x37e517c4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e51a80",
                "inverted": false,
                "source_resource": "ACT1_004_Temple_001_ElikaRuns",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e51a86",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3C_SCE_SE_AhrimanWhispering_OA_006",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e51a87",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_005_SCE_FirstMKfight_LDD",
        "hash": "0x6c3fc95d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e52fa6",
                "inverted": false,
                "source_resource": "ACT1_005_WorldCorrupts_001_MK_Arrives",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x37e52faa",
                "inverted": true,
                "source_resource": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6c3fdb9b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6c3fdb9c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_004_Temple_006_InsideTemple",
        "hash": "0x37e52a6c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e52a71",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37e52a72",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_005_WorldCorrupts_001_MK_Arrives",
        "hash": "0x37e52fa5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e52fa6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_005_WorldCorrupts_003_TempleCollapses",
                        "inverted": false
                    },
                    {
                        "resource": "ACT1_005_WorldCorrupts_002_BrokenCorridorOn",
                        "inverted": false
                    },
                    {
                        "resource": "ACT1_005_SCE_FirstMKfight_LDD",
                        "inverted": false
                    },
                    {
                        "resource": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e52fa7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
        "hash": "0x37e52fa9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e52fa6",
                "inverted": false,
                "source_resource": "ACT1_005_WorldCorrupts_001_MK_Arrives",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37e52faa",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3C_SCE_SE_AhrimanWhispering_OA_006",
                        "inverted": true
                    },
                    {
                        "resource": "ACT1_005_SCE_FirstMKfight_LDD",
                        "inverted": true
                    },
                    {
                        "resource": "ACT1_005_Temple_003_2ndGenFight",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37e52fab",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_005_Temple_003_2ndGenFight",
        "hash": "0x39504000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e52faa",
                "inverted": false,
                "source_resource": "ACT1_005_WorldCorrupts_002_AfterMKFight_Corruption",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x39504018",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT1_005_WorldCorrupts_004_CorridorCollapses",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x39504019",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_004_RingSwitch",
        "hash": "0x7f8bc0c7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "ACT1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7f8bc0c8",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7f8bc0c9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_003_FirstGuardSpawning",
        "hash": "0xdb8bc000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT1"
        ],
        "requirements": [
            {
                "connected_uid": "0x37e505bf",
                "inverted": false,
                "source_resource": "ACT1_002_AdvTutorial_003_ElikaChat",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x4c4645a4",
                "inverted": true,
                "source_resource": "ACT1_003_FinalTrial_001_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xdb8bc001",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xdb8bc002",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_CIN_AhrimanDefeated",
        "hash": "0x21e6414d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x39b12c90",
                "inverted": false,
                "source_resource": "ACT3_FertileGround4",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21e64151",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x21e64152",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_CarryElika",
        "hash": "0x21e6414e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21e64155",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3_A3_SCE_CIN_Vision5",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x21e64156",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_AhrimanWhisperings_DesertTree4",
        "hash": "0x64f94f1c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64159",
                "inverted": false,
                "source_resource": "DE3_A3_SCE_CIN_Vision5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x64f94f23",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_DesertTreeNo4Destroyed",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_AhrimanWhisperings_180SecondsMark",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x64f94f24",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_A3_SCE_CIN_Vision5",
        "hash": "0x21e64150",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64155",
                "inverted": false,
                "source_resource": "ACT3_SE_CarryElika",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21e64159",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_AhrimanWhisperings_DesertTree4",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_AhrimanWhisperings_DesertTree2",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_AhrimanWhisperings_DesertTree3",
                        "inverted": false
                    },
                    {
                        "resource": "DE3_A3_KeepElikaDeadLoop",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_AhrimanWhisperings_180SecondsMark",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_AhrimanWhisperings_DesertTree1",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_FailsafeScenaricControl",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x21e6415a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_AllTheDesertTreesAreDestroyed",
        "hash": "0x22ba4018",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x27522d79",
                "inverted": false,
                "source_resource": "ACT3_SE_DesertTreeNo1Destroyed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x27522d7b",
                "inverted": false,
                "source_resource": "ACT3_SE_DesertTreeNo2Destroyed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x27522d7d",
                "inverted": false,
                "source_resource": "ACT3_SE_DesertTreeNo3Destroyed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x27522d7f",
                "inverted": false,
                "source_resource": "ACT3_SE_DesertTreeNo4Destroyed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22ba401a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_KillSacredTree",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_OuterTempleDoorsManager",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22ba4021",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_AhrimanWhisperings_DesertTree2",
        "hash": "0x21e6415c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64159",
                "inverted": false,
                "source_resource": "DE3_A3_SCE_CIN_Vision5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21e6416e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_DesertTreeNo2Destroyed",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_AhrimanWhisperings_180SecondsMark",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x21e6416f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_DesertTreeNo4Destroyed",
        "hash": "0x27522d76",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x64f94f23",
                "inverted": false,
                "source_resource": "ACT3_SE_AhrimanWhisperings_DesertTree4",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x27522d7f",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_AllTheDesertTreesAreDestroyed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x27522d89",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_DesertTreeNo3Destroyed",
        "hash": "0x27522d75",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x64f94f20",
                "inverted": false,
                "source_resource": "ACT3_SE_AhrimanWhisperings_DesertTree3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x27522d7d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_AllTheDesertTreesAreDestroyed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x27522d86",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_DesertTreeNo2Destroyed",
        "hash": "0x27522d74",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e6416e",
                "inverted": false,
                "source_resource": "ACT3_SE_AhrimanWhisperings_DesertTree2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x27522d7b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_AllTheDesertTreesAreDestroyed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x27522d83",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_DesertTreeNo1Destroyed",
        "hash": "0x27522d73",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x64f94f19",
                "inverted": false,
                "source_resource": "ACT3_SE_AhrimanWhisperings_DesertTree1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x27522d79",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_AllTheDesertTreesAreDestroyed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x27522d80",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_KillSacredTree",
        "hash": "0x21e64161",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x22ba401a",
                "inverted": false,
                "source_resource": "ACT3_SE_AllTheDesertTreesAreDestroyed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21e64181",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_CarryLight",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x21e64182",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_CarryLight",
        "hash": "0x21e64162",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64181",
                "inverted": false,
                "source_resource": "ACT3_SE_KillSacredTree",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21e64187",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_CIN_IntoTheSunset",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x21e64188",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_CIN_IntoTheSunset",
        "hash": "0x21e64163",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64187",
                "inverted": false,
                "source_resource": "ACT3_SE_CarryLight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21e6418a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x21e6418b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_FinalMkFight_LDD",
        "hash": "0x770bc4a8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0xae993cc9",
                "inverted": false,
                "source_resource": "001_AhrimanPortal",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x308e9224",
                "inverted": true,
                "source_resource": "002_MourningKingFightOutro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x770bc4c3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x770bc4c4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_DesertTreeManager",
        "hash": "0x25844373",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x25844375",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x25844376",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_AhrimanWhisperings_DesertTree3",
        "hash": "0x64f94f1b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64159",
                "inverted": false,
                "source_resource": "DE3_A3_SCE_CIN_Vision5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x64f94f20",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_DesertTreeNo3Destroyed",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_AhrimanWhisperings_180SecondsMark",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x64f94f21",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_OuterTempleDoorsManager",
        "hash": "0x343007fc",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x22ba401a",
                "inverted": false,
                "source_resource": "ACT3_SE_AllTheDesertTreesAreDestroyed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x34300821",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x34300822",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "AhrimanFightMechanic",
        "hash": "0x22528009",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x22528027",
                "inverted": true,
                "source_resource": "003_AhrimanFinalFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x308e9224",
                "inverted": false,
                "source_resource": "002_MourningKingFightOutro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2252802a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2252802b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "003_AhrimanFinalFight",
        "hash": "0x22528008",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x308e9224",
                "inverted": false,
                "source_resource": "002_MourningKingFightOutro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22528027",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "AhrimanFightMechanic",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22528028",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "002_MourningKingFightIntro",
        "hash": "0x22528007",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0xae993cc9",
                "inverted": false,
                "source_resource": "001_AhrimanPortal",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22528024",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ElikaGoTo",
                        "inverted": false
                    },
                    {
                        "resource": "002_MourningKingFightOutro",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22528025",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "001_AhrimanPortal",
        "hash": "0xae993cc7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xae993cc9",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_FinalMkFight_LDD",
                        "inverted": false
                    },
                    {
                        "resource": "002_MourningKingFightIntro",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xae993cca",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_A3_KeepElikaDeadLoop",
        "hash": "0xb7aa8cf5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64159",
                "inverted": false,
                "source_resource": "DE3_A3_SCE_CIN_Vision5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb8964004",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xb8964005",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_ActivateInvisibleWalls",
        "hash": "0xc9c54b48",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xc9c54b4b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xc9c54b4c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ElikaGoTo",
        "hash": "0xc0c11acb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x39b12c82",
                "inverted": true,
                "source_resource": "ACT3_FertileGround1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x22528024",
                "inverted": false,
                "source_resource": "002_MourningKingFightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xc113c003",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xc113c004",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "002_MourningKingFightOutro",
        "hash": "0x308e9221",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x22528024",
                "inverted": false,
                "source_resource": "002_MourningKingFightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x308e9224",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_FinalMkFight_LDD",
                        "inverted": true
                    },
                    {
                        "resource": "AhrimanFightMechanic",
                        "inverted": false
                    },
                    {
                        "resource": "003_AhrimanFinalFight",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x308e9226",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_FertileGround1",
        "hash": "0x39b12c7e",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x39b12c82",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ElikaGoTo",
                        "inverted": true
                    },
                    {
                        "resource": "ACT3_FertileGround2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x39b12c83",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_FertileGround2",
        "hash": "0x39b12c7f",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x39b12c82",
                "inverted": false,
                "source_resource": "ACT3_FertileGround1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x39b12c86",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_FertileGround3",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x39b12c87",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_FertileGround3",
        "hash": "0x39b12c80",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x39b12c86",
                "inverted": false,
                "source_resource": "ACT3_FertileGround2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x39b12c8b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_FertileGround4",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x39b12c8c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_FertileGround4",
        "hash": "0x39b12c81",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x39b12c8b",
                "inverted": false,
                "source_resource": "ACT3_FertileGround3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x39b12c90",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_CIN_AhrimanDefeated",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_FakeCredits",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x39b12c91",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_AhrimanWhisperings_180SecondsMark",
        "hash": "0x64f9400d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64159",
                "inverted": false,
                "source_resource": "DE3_A3_SCE_CIN_Vision5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x64f94f19",
                "inverted": true,
                "source_resource": "ACT3_SE_AhrimanWhisperings_DesertTree1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x21e6416e",
                "inverted": true,
                "source_resource": "ACT3_SE_AhrimanWhisperings_DesertTree2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x64f94f20",
                "inverted": true,
                "source_resource": "ACT3_SE_AhrimanWhisperings_DesertTree3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x64f94f23",
                "inverted": true,
                "source_resource": "ACT3_SE_AhrimanWhisperings_DesertTree4",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 5,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x64f9400f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x64f94010",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_AhrimanWhisperings_DesertTree1",
        "hash": "0x64f94f18",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64159",
                "inverted": false,
                "source_resource": "DE3_A3_SCE_CIN_Vision5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x64f94f19",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT3_SE_DesertTreeNo1Destroyed",
                        "inverted": false
                    },
                    {
                        "resource": "ACT3_SE_AhrimanWhisperings_180SecondsMark",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x64f94f1a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_FakeCredits",
        "hash": "0xb9c8f85",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x39b12c90",
                "inverted": false,
                "source_resource": "ACT3_FertileGround4",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb9c8f86",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xb9c8f87",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT3_SE_FailsafeScenaricControl",
        "hash": "0x2936ad95",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT3"
        ],
        "requirements": [
            {
                "connected_uid": "0x21e64159",
                "inverted": false,
                "source_resource": "DE3_A3_SCE_CIN_Vision5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2936bca2",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2936bca3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HighCastle",
        "hash": "0x22528003",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "ACT2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2252801f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x22528020",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LavaRift",
        "hash": "0x22528001",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "ACT2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2252801b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2252801c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "Observatory",
        "hash": "0x22528002",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "ACT2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2252801d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2252801e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RuinedCity",
        "hash": "0x22528000",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "ACT2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22528019",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2252801a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "Desert",
        "hash": "0x85b48004",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "ACT2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x85b48006",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x85b48007",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "X6_FirstTimeHealing",
        "hash": "0x534eedd1",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "ACT2"
        ],
        "requirements": [
            {
                "connected_uid": "0x92cd50d3",
                "inverted": true,
                "source_resource": "HC6_CIN_FirstTimeHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x972c6339",
                "inverted": true,
                "source_resource": "LR6_CIN_FirstTimeHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x585cc002",
                "inverted": true,
                "source_resource": "RC6_CIN_FirstTimeHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x85a59927",
                "inverted": true,
                "source_resource": "OB6_CIN_FirstTimeHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x534eedd3",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "X6_NotFirstTimeHealing",
                        "inverted": false
                    },
                    {
                        "resource": "OB6_Heal_NotFirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_Heal_NotFirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "RC6_Heal_NotFirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "LR6_Heal_NotFirstTime",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x534eedd4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "X6_NotFirstTimeHealing",
        "hash": "0x534eedd2",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "ACT2"
        ],
        "requirements": [
            {
                "connected_uid": "0x534eedd3",
                "inverted": false,
                "source_resource": "X6_FirstTimeHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x534eee00",
                "inverted": true,
                "source_resource": "X6_AllBubblesHealed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x534eedd5",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x534eedd6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "Vision Manager",
        "hash": "0x854bc004",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x854bc005",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x854bc006",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT2_ActivateElikaAbilities",
        "hash": "0x64c41815",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x64c41816",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x64c41817",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT2_OrmazhdPortal",
        "hash": "0x22528004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT2"
        ],
        "requirements": [
            {
                "connected_uid": "0x22528013",
                "inverted": false,
                "source_resource": "HC3_LAIR",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x22528015",
                "inverted": false,
                "source_resource": "LR3_LAIR",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x22528017",
                "inverted": false,
                "source_resource": "RC3_LAIR",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x21460040",
                "inverted": false,
                "source_resource": "OB3_LAIR",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22528010",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT2",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22528011",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "CINE_BlackGate",
        "hash": "0x5de7811f",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "ACT2"
        ],
        "requirements": [
            {
                "connected_uid": "0x5de78128",
                "inverted": true,
                "source_resource": "CINE_BlarkGate_005_AfterFinalLair",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5de78125",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5de78126",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT2_HealedWorldODD",
        "hash": "0x7ddc2dfe",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7ddc2dff",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7ddc2e00",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT1_006_MapTutorial",
        "hash": "0x25a9c002",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x25a9c004",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x25a9c00b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ACT2_OrmazhdGlowingDoor",
        "hash": "0xa70582db",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ACT2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa70582dc",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xa70582dd",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "POWERS",
        "hash": "0x49ad8022",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad8023",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad8024",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "VINES",
        "hash": "0x49ad800b",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f4031",
                "inverted": true,
                "source_resource": "VINES",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f4033",
                "inverted": true,
                "source_resource": "VINES",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f4035",
                "inverted": true,
                "source_resource": "VINES",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f4037",
                "inverted": true,
                "source_resource": "VINES",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 5,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad8020",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad8021",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "SLIDES",
        "hash": "0x49ad800a",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f4025",
                "inverted": true,
                "source_resource": "SLIDES",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x500867d0",
                "inverted": true,
                "source_resource": "OB6_Slide",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x747df121",
                "inverted": true,
                "source_resource": "JCT3_Slide",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad801e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad801f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ROOFING",
        "hash": "0x49ad8009",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x5142d0e7",
                "inverted": true,
                "source_resource": "LR6_Roofing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f4018",
                "inverted": true,
                "source_resource": "ROOFING",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f401a",
                "inverted": true,
                "source_resource": "ROOFING",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f401c",
                "inverted": true,
                "source_resource": "ROOFING",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 5,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad801c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad801d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "POLE",
        "hash": "0x49ad8008",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f4049",
                "inverted": true,
                "source_resource": "POLE",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x4e692fa4",
                "inverted": true,
                "source_resource": "JCT1_Pole",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad801a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad801b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "GRIPS",
        "hash": "0x49ad8007",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f4008",
                "inverted": true,
                "source_resource": "GRIPS",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f400a",
                "inverted": true,
                "source_resource": "GRIPS",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb68f400c",
                "inverted": true,
                "source_resource": "GRIPS",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad8018",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad8019",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "FERTILEGROUND",
        "hash": "0x49ad8006",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0xcf5d2c4f",
                "inverted": true,
                "source_resource": "FERTILEGROUND",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad8016",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad8017",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "COMPASS",
        "hash": "0x49ad957d",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x32ca916d",
                "inverted": true,
                "source_resource": "JCT1_Compass",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x36dcc175",
                "inverted": true,
                "source_resource": "JCT2_Compass2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x37b71484",
                "inverted": true,
                "source_resource": "JCT3_Compass3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad9581",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad9582",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "BEAM",
        "hash": "0x49ad8002",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x500867c4",
                "inverted": true,
                "source_resource": "OB6_BeamPer",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x4f0cd3f8",
                "inverted": true,
                "source_resource": "HC6_BeamPer",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x72008050",
                "inverted": true,
                "source_resource": "JCT1_BeamPer",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad800e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad800f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_LeapOfFaith",
        "hash": "0x4e692d3e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4e692d3f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4e692d40",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_Gripfall",
        "hash": "0x38550fbe",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38550fc5",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x38550fc6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_Attack",
        "hash": "0x3922f9d0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3922f9db",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3922f9dc",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "CANYON_TEMPLE",
        "hash": "0x49ad8001",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6044531b",
                "inverted": true,
                "source_resource": "DE3_CoopJump",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad800c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "COOP",
                        "inverted": false
                    },
                    {
                        "resource": "DE3_ODD2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x49ad800d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_Cracks4",
        "hash": "0x4e693ab9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4e693aba",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4e693abb",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_Cracks5",
        "hash": "0x72008467",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x72008468",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x72008469",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ALL_NoDestination",
        "hash": "0x764dcde2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x674149c7",
                "inverted": false,
                "source_resource": "DE3_ODD2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x764dce01",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x764dce02",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Gripfall2",
        "hash": "0x38d44007",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38d44011",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x38d44012",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Gripfall3",
        "hash": "0x38d44008",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38d44013",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x38d44014",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "COOP",
        "hash": "0x49ad8004",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x6efe4ef1",
                "inverted": true,
                "source_resource": "JCT1_CoopJump",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x4e6923b4",
                "inverted": true,
                "source_resource": "JCT2_CoopJump",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x4e692440",
                "inverted": true,
                "source_resource": "JCT3_CoopJump",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x49ad800c",
                "inverted": false,
                "source_resource": "CANYON_TEMPLE",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 5,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad8012",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad8013",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "COLUMN",
        "hash": "0x49ad8003",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb65b32c6",
                "inverted": true,
                "source_resource": "COLUMN",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb65b32c8",
                "inverted": true,
                "source_resource": "COLUMN",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb65b32ca",
                "inverted": true,
                "source_resource": "COLUMN",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb65b32cc",
                "inverted": true,
                "source_resource": "COLUMN",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xb65b32ce",
                "inverted": true,
                "source_resource": "COLUMN",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 6,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad8010",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad8011",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "CRACKS",
        "hash": "0x49ad8005",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x747de72d",
                "inverted": true,
                "source_resource": "JCT3_CracksAndCracks2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x6e26c515",
                "inverted": true,
                "source_resource": "JCT1_Cracks",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x73448c44",
                "inverted": true,
                "source_resource": "JCT2_Cracks",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad8014",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad8015",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Gripfall",
        "hash": "0x57704004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5770400b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5770400c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_ODD2",
        "hash": "0x674149c3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x21460007",
                "inverted": false,
                "source_resource": "ACT1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x49ad800c",
                "inverted": false,
                "source_resource": "CANYON_TEMPLE",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x674149c7",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ALL_NoDestination",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x674149c8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "AfterHealMap_CollectSparkles",
        "hash": "0xb5204320",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0xb520432b",
                "inverted": true,
                "source_resource": "AfterHealMap_CollectSparkles",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb5204321",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xb5204322",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "TEM_BuyPower3",
        "hash": "0x6a3dc214",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6a3dc215",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "VINES",
                        "inverted": true
                    },
                    {
                        "resource": "SLIDES",
                        "inverted": true
                    },
                    {
                        "resource": "ROOFING",
                        "inverted": true
                    },
                    {
                        "resource": "POLE",
                        "inverted": true
                    },
                    {
                        "resource": "GRIPS",
                        "inverted": true
                    },
                    {
                        "resource": "COMPASS",
                        "inverted": true
                    },
                    {
                        "resource": "BEAM",
                        "inverted": true
                    },
                    {
                        "resource": "JCT1_LeapOfFaith",
                        "inverted": true
                    },
                    {
                        "resource": "OB6_Gripfall",
                        "inverted": true
                    },
                    {
                        "resource": "HC6_Attack",
                        "inverted": true
                    },
                    {
                        "resource": "CANYON_TEMPLE",
                        "inverted": true
                    },
                    {
                        "resource": "JCT1_Cracks4",
                        "inverted": true
                    },
                    {
                        "resource": "JCT1_Cracks5",
                        "inverted": true
                    },
                    {
                        "resource": "RC6_Gripfall2",
                        "inverted": true
                    },
                    {
                        "resource": "RC6_Gripfall3",
                        "inverted": true
                    },
                    {
                        "resource": "COOP",
                        "inverted": true
                    },
                    {
                        "resource": "COLUMN",
                        "inverted": true
                    },
                    {
                        "resource": "CRACKS",
                        "inverted": true
                    },
                    {
                        "resource": "RC6_Gripfall",
                        "inverted": true
                    },
                    {
                        "resource": "DE3_ODD2",
                        "inverted": true
                    },
                    {
                        "resource": "AfterHealMap_CollectSparkles",
                        "inverted": true
                    },
                    {
                        "resource": "JCT3_Cracks3",
                        "inverted": true
                    },
                    {
                        "resource": "JCT1_BeamAbove",
                        "inverted": true
                    },
                    {
                        "resource": "OB6_BeamAbove",
                        "inverted": true
                    },
                    {
                        "resource": "JCT2_Cracks",
                        "inverted": true
                    },
                    {
                        "resource": "JCT1_Cracks3",
                        "inverted": true
                    },
                    {
                        "resource": "AfterHealMap_SetDestination",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6a3dc216",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ALL_BuyPower_Warp",
        "hash": "0x6901c118",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x775f4046",
                "inverted": true,
                "source_resource": "Vision 4",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6901c11a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6901c11b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "PUZZLES",
        "hash": "0x6cccc034",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0xb65b059b",
                "inverted": true,
                "source_resource": "PUZZLES",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6cccc035",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6cccc036",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_Cracks3",
        "hash": "0x74bfd28d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x73448c44",
                "inverted": true,
                "source_resource": "JCT2_Cracks",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x72008097",
                "inverted": true,
                "source_resource": "JCT1_Cracks3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x74bfd2cd",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "JCT2_Cracks",
                        "inverted": true
                    },
                    {
                        "resource": "JCT1_Cracks3",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x74bfd2ce",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_BeamAbove",
        "hash": "0x720083b0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x500867c8",
                "inverted": true,
                "source_resource": "OB6_BeamAbove",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x720083b1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_BeamAbove",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x720083b2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_BeamAbove",
        "hash": "0x500867c7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x720083b1",
                "inverted": true,
                "source_resource": "JCT1_BeamAbove",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x500867c8",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "JCT1_BeamAbove",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x500867c9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_Cracks",
        "hash": "0x73448c43",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x72008097",
                "inverted": true,
                "source_resource": "JCT1_Cracks3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x74bfd2cd",
                "inverted": true,
                "source_resource": "JCT3_Cracks3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x73448c44",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CRACKS",
                        "inverted": true
                    },
                    {
                        "resource": "JCT3_Cracks3",
                        "inverted": true
                    },
                    {
                        "resource": "JCT1_Cracks3",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x73448c45",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_Cracks3",
        "hash": "0x72008096",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x73448c44",
                "inverted": true,
                "source_resource": "JCT2_Cracks",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x74bfd2cd",
                "inverted": true,
                "source_resource": "JCT3_Cracks3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x72008097",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "JCT3_Cracks3",
                        "inverted": true
                    },
                    {
                        "resource": "JCT2_Cracks",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x72008098",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ALL_SpeedKill",
        "hash": "0xb6e008a5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x21460007",
                "inverted": false,
                "source_resource": "ACT1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x21460009",
                "inverted": true,
                "source_resource": "ACT2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb6e008cb",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xb6e008cc",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "ALL_ODD_LEARN",
        "hash": "0xc7ec802a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xc7ec802b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xc7ec802c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "AfterHealMap_SetDestination",
        "hash": "0xe6354024",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "AcrobaticTutorials"
        ],
        "requirements": [
            {
                "connected_uid": "0x6a3dc215",
                "inverted": true,
                "source_resource": "TEM_BuyPower3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xe635402e",
                "inverted": true,
                "source_resource": "AfterHealMap_SetDestination",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xe6354025",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xe6354026",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1",
        "hash": "0x1310cacd",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x85a6a112",
                "inverted": true,
                "source_resource": "HC1_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1310cacf",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    },
                    {
                        "resource": "HC1_ElevatorUnblock_001",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x1310cad0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ObjPlatform_FirstTime_Healed",
        "hash": "0x1310cace",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x1310cacf",
                "inverted": false,
                "source_resource": "HC1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1310cad1",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x1310cad2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2",
        "hash": "0x1cea8000",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x865f3ee3",
                "inverted": true,
                "source_resource": "HC2_FertileGround_001",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1cea8001",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x1cea8002",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_ObjPlatform_FirstTime_Healed",
        "hash": "0x1cea8014",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x1cea8001",
                "inverted": false,
                "source_resource": "HC2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1cea8015",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x1cea8016",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_LAIR",
        "hash": "0x2252800d",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0xd405e87b",
                "inverted": true,
                "source_resource": "HC3_After_Healing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22528013",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT2_OrmazhdPortal",
                        "inverted": false
                    },
                    {
                        "resource": "HC3_LairDone",
                        "inverted": false
                    },
                    {
                        "resource": "HC4_CIN_ReturnToBlackGate",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22528032",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6",
        "hash": "0x2d70c795",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x91be574d",
                "inverted": true,
                "source_resource": "HC6_SCE_EndFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2d70c799",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_SetDestination",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2d70c79a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_ObjPlatform_FirstTime_Healed",
        "hash": "0x2d70c797",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x2d70c799",
                "inverted": false,
                "source_resource": "HC6",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2d70c79d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2d70c79e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_LairDone",
        "hash": "0x2db9402e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x22528013",
                "inverted": false,
                "source_resource": "HC3_LAIR",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2db9402f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2db94030",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5",
        "hash": "0x46d9408f",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0xa32c0005",
                "inverted": true,
                "source_resource": "HC5_Leaving_Bubble",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x46d94091",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x46d94092",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_ObjPlatform_FirstTime_Healed",
        "hash": "0x46d94090",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x46d94091",
                "inverted": false,
                "source_resource": "HC5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x46d94093",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x46d94094",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_CentralPeak",
        "hash": "0x47040d45",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x50673f59",
                "inverted": true,
                "source_resource": "HC4_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x47040d47",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    },
                    {
                        "resource": "HC4_BG_Unlocked",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x47040d48",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_ObjPlatform_FirstTime_Healed",
        "hash": "0x50673f9d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x47040d47",
                "inverted": false,
                "source_resource": "HC4_CentralPeak",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50673f9e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x50673f9f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_CIN_ReturnToBlackGate",
        "hash": "0x56ca9ff2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x22528013",
                "inverted": false,
                "source_resource": "HC3_LAIR",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x56ca9ff3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x56ca9ff4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC_ArrivingInHC",
        "hash": "0xa27ed61a",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0xa27ed625",
                "inverted": true,
                "source_resource": "HC1_ArrivingInHC",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xa27ed627",
                "inverted": true,
                "source_resource": "HC5_ArrivingInHC",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xa27ed629",
                "inverted": true,
                "source_resource": "HC6_ArrivingInHC",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa27ed61c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC_ReturnInHC",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa27ed61d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC_ReturnInHC",
        "hash": "0xa27ed61b",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0xa27ed61c",
                "inverted": false,
                "source_resource": "HC_ArrivingInHC",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa27ed61e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xa27ed61f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_BG_Unlocked",
        "hash": "0x7b8b9267",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x47040d47",
                "inverted": false,
                "source_resource": "HC4_CentralPeak",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7b8b9268",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7b8b9269",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ElevatorUnblock_001",
        "hash": "0x81791ee7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [
            {
                "connected_uid": "0x1310cacf",
                "inverted": false,
                "source_resource": "HC1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x81791f05",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x81791f06",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC34_PicDestruction",
        "hash": "0x9e84c21b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9e84c21c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x9e84c21d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_DeactivateAfterBlackGateODD",
        "hash": "0xdefccd60",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HighCastle"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xdefccd61",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xdefccd62",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1",
        "hash": "0x6c5a281",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x8611c001",
                "inverted": true,
                "source_resource": "LR1_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6c5a289",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR1_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6c5a28a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_ObjPlatform_FirstTime_Healed",
        "hash": "0xd41d0e1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x6c5a289",
                "inverted": false,
                "source_resource": "LR1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xd41d0e3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xd41d0e5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR3_LAIR",
        "hash": "0x2252800b",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x58940079",
                "inverted": true,
                "source_resource": "LR35_CIN_007_AfterEscapingFortress",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22528015",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT2_OrmazhdPortal",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22528030",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6",
        "hash": "0x155214de",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0xa411d2b4",
                "inverted": true,
                "source_resource": "LR6_SCE_FightOutro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x155214e2",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR6_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    },
                    {
                        "resource": "LR6_SetDestination",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x155214e3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_ObjPlatform_FirstTime_Healed",
        "hash": "0x20da4654",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x155214e2",
                "inverted": false,
                "source_resource": "LR6",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x20ea8671",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x20ea8676",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4",
        "hash": "0x3c37807a",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x3c37808d",
                "inverted": true,
                "source_resource": "LR4_ExitDoor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c37807c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR4_ObjPlatform_FirstTimeHealed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3c37807d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_ObjPlatform_FirstTimeHealed",
        "hash": "0x3c37807b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x3c37807c",
                "inverted": false,
                "source_resource": "LR4",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c37807e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3c37807f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2",
        "hash": "0x3e11c013",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x3e11d3f6",
                "inverted": true,
                "source_resource": "LR2_004_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e11c014",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_ObjPlatform_FirstTimeHealed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3e11c015",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_ObjPlatform_FirstTimeHealed",
        "hash": "0x3e11c016",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x3e11c014",
                "inverted": false,
                "source_resource": "LR2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e11c017",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3e11c018",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5",
        "hash": "0x45628003",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x8611f84c",
                "inverted": true,
                "source_resource": "LR5_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x45628f9a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR5_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    },
                    {
                        "resource": "LR5_BG_Unlocked",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x45628f9b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_ObjPlatform_FirstTime_Healed",
        "hash": "0x45628004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x45628f9a",
                "inverted": false,
                "source_resource": "LR5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x45628f9c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x45628f9d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR_1stArriveInCirculation",
        "hash": "0x5b73c005",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x5b73c00a",
                "inverted": true,
                "source_resource": "LR6_SE_002_1stArriveInCirculation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x5b73c00d",
                "inverted": true,
                "source_resource": "LR1_ODD_003_1stArriveInCirculation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5b73c008",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5b73c009",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_ReInitPuzzle",
        "hash": "0xb28549ef",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x50c411e8",
                "inverted": false,
                "source_resource": "LR2_Puzzles_Challenges",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb2854a40",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xb2854a41",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_BG_Unlocked",
        "hash": "0x7b841e52",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0x45628f9a",
                "inverted": false,
                "source_resource": "LR5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7b841e53",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7b841e54",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "CIN_1stArrive_in_Circulation",
        "hash": "0xa7876a41",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LavaRift"
        ],
        "requirements": [
            {
                "connected_uid": "0xa7876a47",
                "inverted": true,
                "source_resource": "LR4_CIN_1stArrive_in_Circulation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xa7876a49",
                "inverted": true,
                "source_resource": "LR1_CIN_1stArrive_in_Circulation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa7876a44",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xa7876a45",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_DeactivateAfterBlackGateODD",
        "hash": "0xdeeffd31",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LavaRift"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xdeeffd32",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xdeeffd33",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1",
        "hash": "0x7c14042",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0xd7b17af",
                "inverted": true,
                "source_resource": "OB1_004_PoisonCleansed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7c1404c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB1_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x7c1404d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_ObjPlatform_FirstTime_Healed",
        "hash": "0x7c1406e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x7c1404c",
                "inverted": false,
                "source_resource": "OB1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7c14070",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7c14071",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2",
        "hash": "0x16e74067",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x5539d95e",
                "inverted": true,
                "source_resource": "OB2_SCE_FertileGround_001",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e74069",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB2_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    },
                    {
                        "resource": "OB2_BG_Unlocked",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x16e7406a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_ObjPlatform_FirstTime_Healed",
        "hash": "0x16e74068",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e74069",
                "inverted": false,
                "source_resource": "OB2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e7406b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x16e7406c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB3_LAIR",
        "hash": "0x2146003e",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x22528ab9",
                "inverted": true,
                "source_resource": "OB3_004_FinalFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x21460040",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT2_OrmazhdPortal",
                        "inverted": false
                    },
                    {
                        "resource": "OB2_CIN_013_ReturningToTheBlackGate",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x21460048",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5",
        "hash": "0x23ee80a4",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x83f909a5",
                "inverted": true,
                "source_resource": "OB5_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x23ee80aa",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB5_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x23ee80ab",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6",
        "hash": "0x23ee80a5",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x3331c004",
                "inverted": true,
                "source_resource": "OB6_003_FightEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x23ee80ac",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    },
                    {
                        "resource": "OB6_SetDestination",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x23ee80ad",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_ObjPlatform_FirstTime_Healed",
        "hash": "0x23ee80a6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x23ee80aa",
                "inverted": false,
                "source_resource": "OB5",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x23ee80ae",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x23ee80af",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_ObjPlatform_FirstTime_Healed",
        "hash": "0x23ee80a7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x23ee80ac",
                "inverted": false,
                "source_resource": "OB6",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x23ee80b1",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x23ee80b2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4",
        "hash": "0x40138a34",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x83f91648",
                "inverted": true,
                "source_resource": "OB4_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x40138a36",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x40138a37",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_ObjPlatform_FirstTime_Healed",
        "hash": "0x40138a35",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x40138a36",
                "inverted": false,
                "source_resource": "OB4",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x40138a38",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x40138a39",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_CIN_013_ReturningToTheBlackGate",
        "hash": "0x573800f6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x21460040",
                "inverted": false,
                "source_resource": "OB3_LAIR",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x573800f7",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x573800f8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB_FirstTimeInOB",
        "hash": "0x9c8a5797",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x9c8a57a2",
                "inverted": true,
                "source_resource": "OB1_FirstTimeInOB",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x9c8a57a4",
                "inverted": true,
                "source_resource": "OB5_FirstTimeInOB",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x9c8a57a6",
                "inverted": true,
                "source_resource": "OB6_FirstTimeInOB",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9c8a5799",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB_ReturnInOB",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x9c8a579a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB_ReturnInOB",
        "hash": "0x9c8a5798",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x9c8a5799",
                "inverted": false,
                "source_resource": "OB_FirstTimeInOB",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x9c8a57b5",
                "inverted": true,
                "source_resource": "OB1_ReturnInOB",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x9c8a57b7",
                "inverted": true,
                "source_resource": "OB5_ReturnInOB",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9c8a579b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x9c8a579c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_BG_Unlocked",
        "hash": "0x7b8b926c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Observatory"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e74069",
                "inverted": false,
                "source_resource": "OB2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7b8b926d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7b8b926e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_DeactivateAfterBlackGateODD",
        "hash": "0xdefce1fe",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Observatory"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xdefce1ff",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xdefce200",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_ObjPlatform_FirstTime_Healed",
        "hash": "0x175f4011",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0xf2e8002",
                "inverted": false,
                "source_resource": "RC1_Windmill",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x175f4013",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x175f4014",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_Windmill",
        "hash": "0xf2e8000",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x1c40699c",
                "inverted": true,
                "source_resource": "RC1_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf2e8002",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    },
                    {
                        "resource": "RC1_BG_Unlocked",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf2e8003",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_Guardtower",
        "hash": "0x19461cee",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x198e929f",
                "inverted": true,
                "source_resource": "RC2_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x19461cf2",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x19461cf3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_ObjPlatform_FirstTime_Healed",
        "hash": "0x1c405e13",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x19461cf2",
                "inverted": false,
                "source_resource": "RC2_Guardtower",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1c405e14",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x1c405e15",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC3_LAIR",
        "hash": "0x2252800c",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x6eef5840",
                "inverted": true,
                "source_resource": "RC13_ActivationHoleRocks",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22528017",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ACT2_OrmazhdPortal",
                        "inverted": false
                    },
                    {
                        "resource": "RC1_CIN_008_ReturningToTheBlackGate",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22528031",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC_SE_FirstTimeInCirculation",
        "hash": "0x5251cc30",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x5251cc3a",
                "inverted": true,
                "source_resource": "RC6_SE_FirstTimeInCirculation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x5251cc3c",
                "inverted": true,
                "source_resource": "RC2_SE_FirstTimeInCirculation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5251cc32",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5251cc33",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_Petra",
        "hash": "0xcd304001",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0xb27a8007",
                "inverted": true,
                "source_resource": "RC5_SE_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcd304003",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xcd304004",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_CityGate",
        "hash": "0x2633008c",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x534edde1",
                "inverted": true,
                "source_resource": "RC6_SE_HunterEscapes",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2633008e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC6_PostHeal_Trigger",
                        "inverted": false
                    },
                    {
                        "resource": "RC6_SetDestination",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2633008f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_CIN_008_ReturningToTheBlackGate",
        "hash": "0x55c52545",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x22528017",
                "inverted": false,
                "source_resource": "RC3_LAIR",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x55c53713",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x55c53714",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_Terrace",
        "hash": "0x2d6cc2e5",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x58599191",
                "inverted": true,
                "source_resource": "RC4_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2d6cc2f1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC4_ObjPlatform_FirstTime_Healed",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2d6cc2f2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_ObjPlatform_FirstTime_Healed",
        "hash": "0x2df94004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x2d6cc2f1",
                "inverted": false,
                "source_resource": "RC4_Terrace",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2df94005",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2df94006",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_BG_Unlocked",
        "hash": "0x7b8b9271",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0xf2e8002",
                "inverted": false,
                "source_resource": "RC1_Windmill",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7b8b9272",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7b8b9273",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_PostHeal_Trigger",
        "hash": "0x2e02c00d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [
            {
                "connected_uid": "0x2633008e",
                "inverted": false,
                "source_resource": "RC6_CityGate",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e02cab6",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2e02cab7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC13_CollapsingBridge",
        "hash": "0x2e939687",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e93969e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2e93969f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC_CloseBlackGateODD",
        "hash": "0x63f30c53",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RuinedCity"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x63f30c66",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x63f30c67",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "MourningKingFight_2ndPower",
        "hash": "0x24c3ce69",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x512080a5",
                "inverted": false,
                "source_resource": "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x24c3ce6d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3C_MK2ndFight_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x24c3ce6e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "MourningKingFight_4thPower",
        "hash": "0x24c3ce6a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x775f4046",
                "inverted": false,
                "source_resource": "Vision 4",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x24c3ce6c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3C_MK4thFight_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x24c3ce6f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "Vision 4",
        "hash": "0x775f4045",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [],
        "requirements": [
            {
                "connected_uid": "0x22fd0727",
                "inverted": false,
                "source_resource": "PowerTutorial_Grapple",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x22fd0725",
                "inverted": false,
                "source_resource": "PowerTutorial_Rebound",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x22fd0721",
                "inverted": false,
                "source_resource": "PowerTutorial_Dash",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x22fd0723",
                "inverted": false,
                "source_resource": "PowerTutorial_FlyOnBeam",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x775f4046",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ALL_BuyPower_Warp",
                        "inverted": true
                    },
                    {
                        "resource": "MourningKingFight_4thPower",
                        "inverted": false
                    },
                    {
                        "resource": "DE3C_MK4thFight_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x775f4047",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE2_SCE_CIN_CorruptedIntro_OA_012",
        "hash": "0x5289401e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x52894025",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3_SCE_SE_015_FirstTimeReturnToTemple",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x52894026",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3C_SCE_CIN_MK1_Encounter_OA_004",
        "hash": "0x52894598",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x85b48027",
                "inverted": false,
                "source_resource": "Desert",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5289459a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5289459b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3C_SCE_CIN_MK3",
        "hash": "0x5333c03e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x775f4010",
                "inverted": false,
                "source_resource": "Vision 2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5333c03f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5333c040",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_SCE_CIN_002_PowerIntro",
        "hash": "0x51208082",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x5120807b",
                "inverted": false,
                "source_resource": "DE3_SCE_SE_015_FirstTimeReturnToTemple",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x51208084",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x51208088",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_SCE_SE_015_FirstTimeReturnToTemple",
        "hash": "0x5120807a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x52894025",
                "inverted": false,
                "source_resource": "DE2_SCE_CIN_CorruptedIntro_OA_012",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5120807b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3_SCE_CIN_002_PowerIntro",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5120807c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
        "hash": "0x512080a4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x5289459a",
                "inverted": false,
                "source_resource": "DE3C_SCE_CIN_MK1_Encounter_OA_004",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x512080a5",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "MourningKingFight_2ndPower",
                        "inverted": false
                    },
                    {
                        "resource": "DE3C_MK2ndFight_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x512080a6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "PowerTutorial_Dash",
        "hash": "0x22fd071d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "Desert"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22fd0721",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "Vision 4",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22fd0722",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "PowerTutorial_FlyOnBeam",
        "hash": "0x22fd071e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "Desert"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22fd0723",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "Vision 4",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22fd0724",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "PowerTutorial_Grapple",
        "hash": "0x22fd0720",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "Desert"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22fd0727",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "Vision 4",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22fd0728",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "PowerTutorial_Rebound",
        "hash": "0x22fd071f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "Desert"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22fd0725",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "Vision 4",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22fd0726",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3C_MK4thFight_LDD",
        "hash": "0x751a41e6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x775f4046",
                "inverted": false,
                "source_resource": "Vision 4",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x24c3ce6c",
                "inverted": true,
                "source_resource": "MourningKingFight_4thPower",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x751a41e7",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x751a41e8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "Vision 2",
        "hash": "0x775f400f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [],
        "requirements": [
            {
                "connected_uid": "0xc9ac4001",
                "inverted": false,
                "source_resource": "Desert",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x775f4010",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3C_SCE_CIN_MK3",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x775f4011",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "Vision3",
        "hash": "0x775f4040",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x775f403b",
                "inverted": false,
                "source_resource": "Desert",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x775f4041",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x775f4042",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3C_MK2ndFight_LDD",
        "hash": "0x6cd9c34c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [
            {
                "connected_uid": "0x512080a5",
                "inverted": false,
                "source_resource": "DE3C_SCE_SE_PowerAfterFirstKingEncounter_OA_018",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x24c3ce6d",
                "inverted": true,
                "source_resource": "MourningKingFight_2ndPower",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x72aec001",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x72aec002",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "VO_SCR_DE_DE3_016",
        "hash": "0x7fbb0022",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7fbb0936",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7fbb0937",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "PowerTutorialLDD",
        "hash": "0xa655c92a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "Desert"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa655c952",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xa655c953",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "PowerTutorialLDD_VariableHolder",
        "hash": "0xe32e004c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Desert"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xe32e004d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xe32e004e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_CIN_FirstTimeHealing",
        "hash": "0x585cc001",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "X6_FirstTimeHealing"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x585cc002",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "X6_FirstTimeHealing",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x585cc003",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_CIN_FirstTimeHealing",
        "hash": "0x92cd50d2",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "X6_FirstTimeHealing"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x92cd50d3",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "X6_FirstTimeHealing",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x92cd50d4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_CIN_FirstTimeHealing",
        "hash": "0x972c6338",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "X6_FirstTimeHealing"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x972c6339",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "X6_FirstTimeHealing",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x972c633a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_CIN_FirstTimeHealing",
        "hash": "0x85a59926",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "X6_FirstTimeHealing"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x85a59927",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "X6_FirstTimeHealing",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x85a59928",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_CIN_NotFirstTimeHealing",
        "hash": "0x58900aba",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "X6_NotFirstTimeHealing"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x58900abb",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x58900abc",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "X6_AllBubblesHealed",
        "hash": "0x534eedfe",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "X6_NotFirstTimeHealing"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x534eee00",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "X6_NotFirstTimeHealing",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x534eee01",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_CIN_NotFirstTimeHealing",
        "hash": "0x97c1dd43",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "X6_NotFirstTimeHealing"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x97c1dd44",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x97c1dd45",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_CIN_NotFirstTimeHealing",
        "hash": "0x85a5992d",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "X6_NotFirstTimeHealing"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x85a5992e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x85a5992f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_CIN_NotFirstTimeHealing",
        "hash": "0x92cd5141",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "X6_NotFirstTimeHealing"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x92cd5142",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x92cd5143",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "GLO_Blackgate_OB_SCE_Loader",
        "hash": "0x6e6c8ddb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Vision Manager"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6e6c8ec2",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6e6c8ec3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "GLO_Blackgate_LR_SCE_Loader",
        "hash": "0x6e6c8ddc",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Vision Manager"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6e6c8ec5",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6e6c8ec6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "GLO_Blackgate_HC_SCE_Loader",
        "hash": "0x6e6c8dd6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "Vision Manager"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6e6c8ebc",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6e6c8ebd",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "GLO_Blackgate_RC_SCE_Loader",
        "hash": "0x6e6c8dda",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "Vision Manager"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6e6c8ebf",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6e6c8ec0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "CINE_BlarkGate_001",
        "hash": "0x5de78120",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CINE_BlackGate"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5de78129",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CINE_BlarkGate_002",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5de7812a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "CINE_BlarkGate_002",
        "hash": "0x5de78121",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CINE_BlackGate"
        ],
        "requirements": [
            {
                "connected_uid": "0x5de78129",
                "inverted": false,
                "source_resource": "CINE_BlarkGate_001",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5de7812c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CINE_BlarkGate_003",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5de7812d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "CINE_BlarkGate_003",
        "hash": "0x5de78122",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CINE_BlackGate"
        ],
        "requirements": [
            {
                "connected_uid": "0x5de7812c",
                "inverted": false,
                "source_resource": "CINE_BlarkGate_002",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5de78130",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CINE_BlarkGate_004",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5de78131",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "CINE_BlarkGate_004",
        "hash": "0x5de78123",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CINE_BlackGate"
        ],
        "requirements": [
            {
                "connected_uid": "0x5de78130",
                "inverted": false,
                "source_resource": "CINE_BlarkGate_003",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5de78134",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CINE_BlarkGate_005_AfterFinalLair",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5de78135",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "CINE_BlarkGate_005_AfterFinalLair",
        "hash": "0x5de78124",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CINE_BlackGate"
        ],
        "requirements": [
            {
                "connected_uid": "0x5de78134",
                "inverted": false,
                "source_resource": "CINE_BlarkGate_004",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5de78128",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CINE_BlackGate",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5de78138",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "GLO_ODD_AfterFirstPowerUse",
        "hash": "0x63aac1ae",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "POWERS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x63aac1af",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x63aac1b0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "TUTODASH_Dash",
        "hash": "0x678f4852",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "POWERS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x678f48cc",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x678f48cd",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "TUTOREBOUND_Rebound",
        "hash": "0x678f4857",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "POWERS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x678f48d7",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x678f48d8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "TUTOFOB_FlyOnBeam",
        "hash": "0x678f4854",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "POWERS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x678f48d1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "TUTOFOB_FlyOnBeam2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x678f48d2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "TUTOGRAPPLE_Grapple",
        "hash": "0x678f4856",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "POWERS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x678f48d5",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x678f48d6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "TUTOFOB_FlyOnBeam2",
        "hash": "0x678f4aa2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "POWERS"
        ],
        "requirements": [
            {
                "connected_uid": "0x678f48d1",
                "inverted": false,
                "source_resource": "TUTOFOB_FlyOnBeam",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x678f4ae4",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x678f4ae5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_Vines",
        "hash": "0x51fe072d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x51fe072f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x51fe0730",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_Vines2",
        "hash": "0x51fe072e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x51fe0734",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x51fe0735",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Vines",
        "hash": "0x57704005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5770400d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5770400e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Vines2",
        "hash": "0x57704006",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5770400f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x57704010",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Vines3",
        "hash": "0x5d4ac001",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5d4ac002",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5d4ac003",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_Vines",
        "hash": "0x6e26ffb0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6e26ffb1",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6e26ffb2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Vines4",
        "hash": "0x6f258002",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6f258003",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6f258004",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Vines5",
        "hash": "0x6f25800d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6f258047",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6f258048",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_Vines3",
        "hash": "0x71914ace",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x71914acf",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x71914ad0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_Vines4and5",
        "hash": "0x71914e41",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x71914e42",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x71914e43",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_Vines",
        "hash": "0x7400ca1c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7400ca1d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7400ca1e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_Vines3",
        "hash": "0x7400cbd6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "VINES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7400cbd7",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7400cbd8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_Slide",
        "hash": "0x4f0cd3f1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "SLIDES"
        ],
        "requirements": [
            {
                "connected_uid": "0x50e5c48e",
                "inverted": true,
                "source_resource": "HC6_Slide2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4f0cd3f2",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_Slide2",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4f0cd3f3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_Slide2",
        "hash": "0x50e5c48d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "SLIDES"
        ],
        "requirements": [
            {
                "connected_uid": "0x4f0cd3f2",
                "inverted": true,
                "source_resource": "HC6_Slide",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50e5c48e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_Slide",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x50e5c48f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_Slide",
        "hash": "0x500867cf",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "SLIDES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x500867d0",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "SLIDES",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x500867d1",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_Slide",
        "hash": "0x747df120",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "SLIDES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x747df121",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "SLIDES",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x747df122",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_Roofing",
        "hash": "0x38550fbb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ROOFING"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38550fbf",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x38550fc0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_RoofingRing",
        "hash": "0x38550fbc",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ROOFING"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38550fc1",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x38550fc2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Roofing",
        "hash": "0x38d44003",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ROOFING"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38d44009",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x38d4400a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_Roofing",
        "hash": "0x4b4ce714",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ROOFING"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4b4ce715",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4b4ce716",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_RoofRing",
        "hash": "0x4b4ce9ad",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ROOFING"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4b4ce9ae",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4b4ce9af",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_Roofing",
        "hash": "0x5142d0e6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ROOFING"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5142d0e7",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "ROOFING",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5142d0e8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_RoofingRing",
        "hash": "0x57704014",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "ROOFING"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x57704015",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x57704016",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_Pole",
        "hash": "0x4b4cd2a8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "POLE"
        ],
        "requirements": [
            {
                "connected_uid": "0x4b4ce5d0",
                "inverted": true,
                "source_resource": "HC6_Pole2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4b4ce5cd",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_Pole2",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4b4ce5ce",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_Pole2",
        "hash": "0x4b4cd2a9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "POLE"
        ],
        "requirements": [
            {
                "connected_uid": "0x4b4ce5cd",
                "inverted": true,
                "source_resource": "HC6_Pole",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4b4ce5d0",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_Pole",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4b4ce5d1",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_Pole",
        "hash": "0x4e692fa3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "POLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4e692fa4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "POLE",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4e692fa5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_VerticalRing",
        "hash": "0x6e26f939",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "GRIPS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6e26f93a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6e26f93b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_HorizontalRing",
        "hash": "0x6e26fe13",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "GRIPS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6e26fe14",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6e26fe15",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_VerticalRing",
        "hash": "0x73448821",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "GRIPS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x73448822",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x73448823",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_HorizontalRing",
        "hash": "0x73448d3c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "GRIPS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x73448d3d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x73448d3e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_HorizontalRing",
        "hash": "0x747de4a9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "GRIPS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x747de4aa",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x747de4ab",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_VerticalRing",
        "hash": "0x747de574",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "GRIPS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x747de575",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x747de576",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_Heal_FirstTime",
        "hash": "0x38550fbd",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "FERTILEGROUND"
        ],
        "requirements": [
            {
                "connected_uid": "0x3331c004",
                "inverted": false,
                "source_resource": "OB6_003_FightEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3922f9df",
                "inverted": true,
                "source_resource": "HC6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x38d4400d",
                "inverted": true,
                "source_resource": "RC6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x36b7d113",
                "inverted": true,
                "source_resource": "LR6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38550fc3",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "RC6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "LR6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "OB6_Heal_NotFirstTime",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x38550fc4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_Heal_FirstTime",
        "hash": "0x3922f9d2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "FERTILEGROUND"
        ],
        "requirements": [
            {
                "connected_uid": "0x91be574d",
                "inverted": false,
                "source_resource": "HC6_SCE_EndFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x38550fc3",
                "inverted": true,
                "source_resource": "OB6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x38d4400d",
                "inverted": true,
                "source_resource": "RC6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x36b7d113",
                "inverted": true,
                "source_resource": "LR6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3922f9df",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "RC6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "LR6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "HC6_Heal_NotFirstTime",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3922f9e0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Heal_FirstTime",
        "hash": "0x38d44005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "FERTILEGROUND"
        ],
        "requirements": [
            {
                "connected_uid": "0x534edde1",
                "inverted": false,
                "source_resource": "RC6_SE_HunterEscapes",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x38550fc3",
                "inverted": true,
                "source_resource": "OB6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3922f9df",
                "inverted": true,
                "source_resource": "HC6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x36b7d113",
                "inverted": true,
                "source_resource": "LR6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38d4400d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "HC6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "LR6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "RC6_Heal_NotFirstTime",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x38d4400e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_Heal_FirstTime",
        "hash": "0x36b7c103",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "FERTILEGROUND"
        ],
        "requirements": [
            {
                "connected_uid": "0xa411d2b4",
                "inverted": false,
                "source_resource": "LR6_SCE_FightOutro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x38550fc3",
                "inverted": true,
                "source_resource": "OB6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3922f9df",
                "inverted": true,
                "source_resource": "HC6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x38d4400d",
                "inverted": true,
                "source_resource": "RC6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 4,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x36b7d113",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "HC6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "RC6_Heal_FirstTime",
                        "inverted": true
                    },
                    {
                        "resource": "LR6_Heal_NotFirstTime",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x36b7d114",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_Heal_NotFirstTime",
        "hash": "0xcf5d2bd8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "FERTILEGROUND"
        ],
        "requirements": [
            {
                "connected_uid": "0x3331c004",
                "inverted": false,
                "source_resource": "OB6_003_FightEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x534eedd3",
                "inverted": false,
                "source_resource": "X6_FirstTimeHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x38550fc3",
                "inverted": true,
                "source_resource": "OB6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcf5d2c51",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xcf5d2c66",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_Heal_NotFirstTime",
        "hash": "0xcf5d2bd9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "FERTILEGROUND"
        ],
        "requirements": [
            {
                "connected_uid": "0x91be574d",
                "inverted": false,
                "source_resource": "HC6_SCE_EndFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x534eedd3",
                "inverted": false,
                "source_resource": "X6_FirstTimeHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3922f9df",
                "inverted": true,
                "source_resource": "HC6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcf5d2c53",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xcf5d2c69",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Heal_NotFirstTime",
        "hash": "0xcf5d2bda",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "FERTILEGROUND"
        ],
        "requirements": [
            {
                "connected_uid": "0x534edde1",
                "inverted": false,
                "source_resource": "RC6_SE_HunterEscapes",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x534eedd3",
                "inverted": false,
                "source_resource": "X6_FirstTimeHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x38d4400d",
                "inverted": true,
                "source_resource": "RC6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcf5d2c55",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xcf5d2c6b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_Heal_NotFirstTime",
        "hash": "0xcf5d2bdb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "FERTILEGROUND"
        ],
        "requirements": [
            {
                "connected_uid": "0xa411d2b4",
                "inverted": false,
                "source_resource": "LR6_SCE_FightOutro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x534eedd3",
                "inverted": false,
                "source_resource": "X6_FirstTimeHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x36b7d113",
                "inverted": true,
                "source_resource": "LR6_Heal_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcf5d2c57",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xcf5d2c6e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_Compass3",
        "hash": "0x37b71483",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COMPASS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37b71484",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "COMPASS",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x37b71485",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_Compass2",
        "hash": "0x36dcc174",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COMPASS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x36dcc175",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "COMPASS",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x36dcc176",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_Compass",
        "hash": "0x32ca9158",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COMPASS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x32ca916d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "COMPASS",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x32ca916e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_BeamPer",
        "hash": "0x7200804f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "BEAM"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x72008050",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "BEAM",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x72008051",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_BeamPer",
        "hash": "0x4f0cd386",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "BEAM"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4f0cd3f8",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "BEAM",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4f0cd3f9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_BeamPer",
        "hash": "0x500867c3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "BEAM"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x500867c4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "BEAM",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x500867c5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_Jump2",
        "hash": "0x49ad8249",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x49ad824a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x49ad824b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_WallrunH",
        "hash": "0x4e4743ac",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4e4743ad",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4e4743ae",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_WallrunHJump",
        "hash": "0x4e4743dd",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4e4743de",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4e4743df",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_WallrunV",
        "hash": "0x4e47440e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4e47440f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4e474410",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_WallrunVJump",
        "hash": "0x4ed2c56e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4ed2c56f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4ed2c570",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_WallrunHJump2",
        "hash": "0x4ed2c53d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4ed2c53e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4ed2c53f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_Jump",
        "hash": "0x4daec58b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4daec5a7",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4daec5a8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_WallrunH2",
        "hash": "0x4cd5003e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4cd5003f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4cd50040",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_WallrunHJump3",
        "hash": "0x5ec915f5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5ec915f6",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5ec915f7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_Gripfall",
        "hash": "0x5ec924f2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5ec924f3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5ec924f4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_Lever",
        "hash": "0x5f6e47c8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5f6e47c9",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3_Gripfall",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5f6e47ca",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_WallrunV",
        "hash": "0x5f994705",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5f994706",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5f994707",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_Cracks",
        "hash": "0x5f994f99",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5f994f9a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5f994f9b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_Gripfall",
        "hash": "0x60060000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [
            {
                "connected_uid": "0x5f6e47c9",
                "inverted": false,
                "source_resource": "DE3_Lever",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6006004e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6006004f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_Ringswitch",
        "hash": "0x60444593",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x60444594",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x60444595",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_CoopJump",
        "hash": "0x60445319",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [
            {
                "connected_uid": "0x60445523",
                "inverted": false,
                "source_resource": "DE3_Cracks2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6044531b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CANYON_TEMPLE",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6044531c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_DoubleWallRun",
        "hash": "0x6044531e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x60445345",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x60445346",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE3_Cracks2",
        "hash": "0x60445522",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x60445523",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "DE3_CoopJump",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x60445524",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_CAMERA",
        "hash": "0x664a7022",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x664a703f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x664a7040",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "DE1_ODD",
        "hash": "0x664a7817",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CANYON_TEMPLE"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x664a7818",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x664a7819",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_CoopJump",
        "hash": "0x4e69243f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COOP"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4e692440",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "COOP",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4e692441",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_CoopJump",
        "hash": "0x4e6923b0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COOP"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4e6923b4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "COOP",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4e6923b5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_CoopJump",
        "hash": "0x6efe4eef",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COOP"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6efe4ef1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "COOP",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6efe4ef2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_Column2",
        "hash": "0x38550fb8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38550fb9",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x38550fba",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Column3",
        "hash": "0x38d44004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38d4400b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x38d4400c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Column2",
        "hash": "0x38d44000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x38d44001",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x38d44002",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_Column",
        "hash": "0x500867cb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x500867cc",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x500867cd",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_Column",
        "hash": "0x51fe0727",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x51fe0729",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x51fe072a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_Column2",
        "hash": "0x51fe0728",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x51fe072b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x51fe072c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_Column",
        "hash": "0x57704011",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x57704012",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x57704013",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_Column",
        "hash": "0x7400d560",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7400d561",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7400d562",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_Colum2",
        "hash": "0x74548ca3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x74548ca4",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x74548ca5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_Column3",
        "hash": "0x747dc24f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x747dc250",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x747dc251",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT2_Column4",
        "hash": "0x747dc329",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x747dc32a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x747dc32b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_Column",
        "hash": "0x747dfd73",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x747dfd74",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x747dfd75",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_Column2",
        "hash": "0x74bfc3c5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x74bfc3c6",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x74bfc3c7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_Column4",
        "hash": "0x74bfc850",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x74bfc851",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x74bfc852",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_Column3",
        "hash": "0x74bfcca8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "COLUMN"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x74bfcca9",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x74bfccaa",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT1_Cracks",
        "hash": "0x6e26c514",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CRACKS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6e26c515",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CRACKS",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6e26c516",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "JCT3_CracksAndCracks2",
        "hash": "0x747de72c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CRACKS"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x747de72d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CRACKS",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x747de72e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_CollectSparkles",
        "hash": "0x678f64df",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AfterHealMap_CollectSparkles"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x678f656c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x678f656d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_CollectSparkles",
        "hash": "0xb5204326",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AfterHealMap_CollectSparkles"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb520432e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xb5204333",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_CollectSparkles",
        "hash": "0xb5204328",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AfterHealMap_CollectSparkles"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb5204330",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xb5204334",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_CollectSparkles",
        "hash": "0xb5204329",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AfterHealMap_CollectSparkles"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb5204332",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xb5204335",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_ODD3",
        "hash": "0x6cccc037",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "PUZZLES"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6cccc038",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6cccc039",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC_TUT_ODD3",
        "hash": "0x766bd37b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "PUZZLES"
        ],
        "requirements": [
            {
                "connected_uid": "0xf3446af",
                "inverted": false,
                "source_resource": "RC1_IntroPuzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x766bd397",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x766bd398",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC_ODD3",
        "hash": "0x762ad1b7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "PUZZLES"
        ],
        "requirements": [
            {
                "connected_uid": "0x33bc400c",
                "inverted": false,
                "source_resource": "HC2_000_PresentationPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x762aea54",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x762aea55",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_SetDestination",
        "hash": "0xe6354028",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AfterHealMap_SetDestination"
        ],
        "requirements": [
            {
                "connected_uid": "0x23ee80ac",
                "inverted": false,
                "source_resource": "OB6",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xe6354030",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xe6354037",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SetDestination",
        "hash": "0xe6354029",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AfterHealMap_SetDestination"
        ],
        "requirements": [
            {
                "connected_uid": "0x2d70c799",
                "inverted": false,
                "source_resource": "HC6",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xe6354034",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xe6354038",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_SetDestination",
        "hash": "0xe635402a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AfterHealMap_SetDestination"
        ],
        "requirements": [
            {
                "connected_uid": "0x2633008e",
                "inverted": false,
                "source_resource": "RC6_CityGate",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xe6354032",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xe6354039",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_SetDestination",
        "hash": "0xe635402b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "AfterHealMap_SetDestination"
        ],
        "requirements": [
            {
                "connected_uid": "0x155214e2",
                "inverted": false,
                "source_resource": "LR6",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xe6354036",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xe635403a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_001_ElikaCapture",
        "hash": "0x1310cad4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1310cad5",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "HC1_1st_Illusion",
                        "inverted": false
                    },
                    {
                        "resource": "HC1_2nd_Illusion",
                        "inverted": false
                    },
                    {
                        "resource": "HC1_Arrival_at_Elevator",
                        "inverted": false
                    },
                    {
                        "resource": "HC1_ElikaCaptureCol_Logic",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x1310cad6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_002_ConcubineAttacks",
        "hash": "0x14e08002",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0xc485e45d",
                "inverted": false,
                "source_resource": "HC1_Elika_Freed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x14e08004",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_003_ConcubineEscapes",
                        "inverted": false
                    },
                    {
                        "resource": "HC1_BossFight_LDD",
                        "inverted": false
                    },
                    {
                        "resource": "HC1_SE_016_Concubine_Tower_Taunts",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x14e08005",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_003_ConcubineEscapes",
        "hash": "0x14e08003",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x14e08004",
                "inverted": false,
                "source_resource": "HC1_002_ConcubineAttacks",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x14e08008",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_FertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "HC1_BossFight_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x14e08009",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ObjectivePlatform",
        "hash": "0x2dae98bc",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x1310cad5",
                "inverted": true,
                "source_resource": "HC1_001_ElikaCapture",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x2dae98d0",
                "inverted": true,
                "source_resource": "HC1_ObjPlatform_Return_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2dae98c3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2dae98c4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_FertileGround",
        "hash": "0x85a6a10f",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x14e08008",
                "inverted": false,
                "source_resource": "HC1_003_ConcubineEscapes",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x85a6a112",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1",
                        "inverted": true
                    },
                    {
                        "resource": "HC1_ElevatorUnblock",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x85a6a113",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_Arrival_on_Platform",
        "hash": "0x8b525007",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8b52500f",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_014_ElevatorPrinceTalk",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8b525012",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_1st_Illusion",
        "hash": "0x8b525008",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x1310cad5",
                "inverted": false,
                "source_resource": "HC1_001_ElikaCapture",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8b525014",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8b525015",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_2nd_Illusion",
        "hash": "0x8b525009",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x1310cad5",
                "inverted": false,
                "source_resource": "HC1_001_ElikaCapture",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8b525018",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8b525019",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_014_ElevatorPrinceTalk",
        "hash": "0x8c98fad7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x8b52500f",
                "inverted": false,
                "source_resource": "HC1_Arrival_on_Platform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8c98fad8",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8c98fad9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_Elika_Freed",
        "hash": "0xc485e45c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0xc485e5bf",
                "inverted": false,
                "source_resource": "HC1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xc485e45d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_002_ConcubineAttacks",
                        "inverted": false
                    },
                    {
                        "resource": "HC1_ElevatorUnblock",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xc485e45e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_Arrival_at_Elevator",
        "hash": "0x8b52500c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x1310cad5",
                "inverted": false,
                "source_resource": "HC1_001_ElikaCapture",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8b525024",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_Elevator_Talks",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8b525025",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_Elevator_Talks",
        "hash": "0x8b52500d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x8b525024",
                "inverted": false,
                "source_resource": "HC1_Arrival_at_Elevator",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8b525011",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8b525028",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ReturnInCirculation",
        "hash": "0xa3719d78",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0xa3719d79",
                "inverted": false,
                "source_resource": "HC1_ArrivalInCirculation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa3719d7b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xa3719d7c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ArrivalInCirculation",
        "hash": "0xa3719d77",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa3719d79",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_ReturnInCirculation",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa3719d7a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ElevatorUnblock",
        "hash": "0x8122b8c2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0xc485e45d",
                "inverted": false,
                "source_resource": "HC1_Elika_Freed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x85a6a112",
                "inverted": true,
                "source_resource": "HC1_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8122b8c3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8122b8c4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_BossFight_LDD",
        "hash": "0x60714eb9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x14e08004",
                "inverted": false,
                "source_resource": "HC1_002_ConcubineAttacks",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x14e08008",
                "inverted": true,
                "source_resource": "HC1_003_ConcubineEscapes",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x60714eba",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x60714ebb",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ElikaCaptureCol_Logic",
        "hash": "0x87ba8047",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x1310cad5",
                "inverted": false,
                "source_resource": "HC1_001_ElikaCapture",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xc485e5bf",
                "inverted": true,
                "source_resource": "HC1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x87baa4e2",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x87baa4e3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_SE_016_Concubine_Tower_Taunts",
        "hash": "0xce2095ac",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1"
        ],
        "requirements": [
            {
                "connected_uid": "0x14e08004",
                "inverted": true,
                "source_resource": "HC1_002_ConcubineAttacks",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xce2095ad",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xce2095ae",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_001_1stPuzzle",
        "hash": "0x1cea8003",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x33bc400c",
                "inverted": false,
                "source_resource": "HC2_000_PresentationPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1cea8007",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_002_2ndPuzzle",
                        "inverted": false
                    },
                    {
                        "resource": "HC2_Puzzle1stSaveState",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x1cea8008",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_002_2ndPuzzle",
        "hash": "0x1cea8004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x1cea8007",
                "inverted": false,
                "source_resource": "HC2_001_1stPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1cea800b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_ObjPlatform_PuzzleCompleted",
                        "inverted": false
                    },
                    {
                        "resource": "HC2_005_FightSequence",
                        "inverted": false
                    },
                    {
                        "resource": "HC2_ObjPlatform_PuzzleNotCompleted",
                        "inverted": true
                    },
                    {
                        "resource": "HC2_PuzzleEndSaveState",
                        "inverted": false
                    },
                    {
                        "resource": "HC2_BossFight_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x1cea800c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_ObjPlatform_PuzzleCompleted",
        "hash": "0x33bc400a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x1cea8011",
                "inverted": true,
                "source_resource": "HC2_005_FightSequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x1cea800b",
                "inverted": false,
                "source_resource": "HC2_002_2ndPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x33bc4013",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x33bc4014",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_005_FightSequence",
        "hash": "0x1cea8006",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x1cea800b",
                "inverted": false,
                "source_resource": "HC2_002_2ndPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1cea8011",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_ObjPlatform_PuzzleCompleted",
                        "inverted": true
                    },
                    {
                        "resource": "HC2_LoverFightStatusMonitor",
                        "inverted": false
                    },
                    {
                        "resource": "HC2_EndofFight_Lo_Down",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x1cea8012",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_SE_ArrivingInCirculation",
        "hash": "0xc90ebc01",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xc90ebc02",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xc90ebc03",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_ObjectivePlatform",
        "hash": "0x3386c02e",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x33bc400c",
                "inverted": true,
                "source_resource": "HC2_000_PresentationPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3386c042",
                "inverted": true,
                "source_resource": "HC2_ObjPlatform_Return_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3386c02f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3386c030",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_ObjPlatform_PuzzleNotCompleted",
        "hash": "0x33bc4008",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x33bc400c",
                "inverted": false,
                "source_resource": "HC2_000_PresentationPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x1cea800b",
                "inverted": true,
                "source_resource": "HC2_002_2ndPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x33bc400e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x33bc400f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_000_PresentationPuzzle",
        "hash": "0x33bc4009",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x33bc400c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC_ODD3",
                        "inverted": false
                    },
                    {
                        "resource": "HC2_001_1stPuzzle",
                        "inverted": false
                    },
                    {
                        "resource": "HC2_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "HC2_ObjPlatform_PuzzleNotCompleted",
                        "inverted": false
                    },
                    {
                        "resource": "First Gate Open - Corruption Flowing",
                        "inverted": false
                    },
                    {
                        "resource": "First Gate Open - Corruption Not Flowing",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x33bc4012",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_PuzzleEndSaveState",
        "hash": "0x97ec8180",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x1cea800b",
                "inverted": false,
                "source_resource": "HC2_002_2ndPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x97ec818a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x97ec818b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_FertileGround_001",
        "hash": "0x865f3ee1",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0xcc1490f9",
                "inverted": false,
                "source_resource": "HC2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x865f3ee3",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x865f3ee4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "First Gate Open - Corruption Flowing",
        "hash": "0x8a93405e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [],
        "requirements": [
            {
                "connected_uid": "0x8a934063",
                "inverted": true,
                "source_resource": "First Gate Open - Corruption Not Flowing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x33bc400c",
                "inverted": false,
                "source_resource": "HC2_000_PresentationPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8a934061",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "First Gate Open - Corruption Not Flowing",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8a934064",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "First Gate Open - Corruption Not Flowing",
        "hash": "0x8a93405f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [],
        "requirements": [
            {
                "connected_uid": "0x8a934061",
                "inverted": true,
                "source_resource": "First Gate Open - Corruption Flowing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x33bc400c",
                "inverted": false,
                "source_resource": "HC2_000_PresentationPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8a934063",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "First Gate Open - Corruption Flowing",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8a934067",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_BossFight_LDD",
        "hash": "0x5ed41e04",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x1cea800b",
                "inverted": false,
                "source_resource": "HC2_002_2ndPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xcc14800e",
                "inverted": true,
                "source_resource": "HC2_EndofFight_Lo_Up",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xcc14800b",
                "inverted": true,
                "source_resource": "HC2_EndofFight_Lo_Down",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5ed41e05",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5ed41e06",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_Puzzle1stSaveState",
        "hash": "0x81920000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x1cea8007",
                "inverted": false,
                "source_resource": "HC2_001_1stPuzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x81920001",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x81920002",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_LoverFightStatusMonitor",
        "hash": "0xcc148005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x1cea8011",
                "inverted": false,
                "source_resource": "HC2_005_FightSequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xcc14800b",
                "inverted": true,
                "source_resource": "HC2_EndofFight_Lo_Down",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcc148008",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_EndofFight_Lo_Down",
                        "inverted": true
                    },
                    {
                        "resource": "HC2_EndofFight_Lo_Up",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xcc148009",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_EndofFight_Lo_Down",
        "hash": "0xcc148006",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0x1cea8011",
                "inverted": false,
                "source_resource": "HC2_005_FightSequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xcc148008",
                "inverted": true,
                "source_resource": "HC2_LoverFightStatusMonitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcc14800b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_BossFight_LDD",
                        "inverted": true
                    },
                    {
                        "resource": "HC2_LoverFightStatusMonitor",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xcc14800c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_EndofFight_Lo_Up",
        "hash": "0xcc148007",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2"
        ],
        "requirements": [
            {
                "connected_uid": "0xcc148008",
                "inverted": false,
                "source_resource": "HC2_LoverFightStatusMonitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcc14800e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_BossFight_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xcc14800f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_ClosingDoors",
        "hash": "0x2db94022",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2db94023",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC3_Fight01_Manager",
                        "inverted": false
                    },
                    {
                        "resource": "HC3_Fight01_Counter_01",
                        "inverted": false
                    },
                    {
                        "resource": "HC3_Fight01_WatchConcubineHealth",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2db94024",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_Fight03_ResumeElikaForSaveMe",
        "hash": "0x3c1f91e9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x3c1f8044",
                "inverted": false,
                "source_resource": "HC3_Fight03_CaptureElika",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c1f91ea",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3c1f91eb",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_After_Final_Fight",
        "hash": "0x3c1f86f2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x3c1f8044",
                "inverted": false,
                "source_resource": "HC3_Fight03_CaptureElika",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c1f86f3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3c1f86f4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_Fight01_Manager",
        "hash": "0x2e1bc007",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2db94023",
                "inverted": false,
                "source_resource": "HC3_ClosingDoors",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e1bc00e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC3_BossFight01_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2e1bc00f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_Fight01_Counter_01",
        "hash": "0x2e1bc2ae",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2db94023",
                "inverted": false,
                "source_resource": "HC3_ClosingDoors",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e1bc2af",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2e1bc2b0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_Fight01_WatchConcubineHealth",
        "hash": "0x2e1bc7b0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2db94023",
                "inverted": false,
                "source_resource": "HC3_ClosingDoors",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e1bc7b2",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC3_ClosingDoors2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2e1bc7b3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_ClosingDoors2",
        "hash": "0x3569ebfa",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2e1bc7b2",
                "inverted": false,
                "source_resource": "HC3_Fight01_WatchConcubineHealth",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3569ebfb",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC3_Fight02_WatchConcubineHealth",
                        "inverted": false
                    },
                    {
                        "resource": "HC3_BossFight01_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3569ebfc",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_After_Healing",
        "hash": "0xd405e879",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x3c1f8044",
                "inverted": false,
                "source_resource": "HC3_Fight03_CaptureElika",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xd405e87b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC3_LAIR",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xd405e87c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_Fight03_CaptureElika",
        "hash": "0x3c1f8042",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x3569f035",
                "inverted": false,
                "source_resource": "HC3_Fight02_WatchConcubineHealth",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c1f8044",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC3_Fight03_ResumeElikaForSaveMe",
                        "inverted": false
                    },
                    {
                        "resource": "HC3_After_Final_Fight",
                        "inverted": false
                    },
                    {
                        "resource": "HC3_After_Healing",
                        "inverted": false
                    },
                    {
                        "resource": "HC3_Fight03_StartFightAfterSaveMe",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3c1f8045",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_Fight03_StartFightAfterSaveMe",
        "hash": "0x3c1f9c30",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x3c1f8044",
                "inverted": false,
                "source_resource": "HC3_Fight03_CaptureElika",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c1f9c32",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC3_BossFight03_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3c1f9c33",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_Fight02_WatchConcubineHealth",
        "hash": "0x3569f034",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x3569ebfb",
                "inverted": false,
                "source_resource": "HC3_ClosingDoors2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3569f035",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC3_Fight03_CaptureElika",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3569f036",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_BossFight01_LDD",
        "hash": "0x65bf3083",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2e1bc00e",
                "inverted": false,
                "source_resource": "HC3_Fight01_Manager",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3569ebfb",
                "inverted": true,
                "source_resource": "HC3_ClosingDoors2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x65bf3084",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x65bf3085",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC3_BossFight03_LDD",
        "hash": "0x65bf3086",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x3c1f9c32",
                "inverted": false,
                "source_resource": "HC3_Fight03_StartFightAfterSaveMe",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x65bf3089",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x65bf308a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_DestroyedColumnTeleport",
        "hash": "0x2d70c798",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "HC6"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2d70c79b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_SCE_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "HC6_SCE_UnplugElika",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_SCE_FirstIlusionDead",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_SCE_ElikaBarks",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_CapturedElika_Colmap",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_SCE_FirstConcubineAtmosphere",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2d70c79c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_ObjectivePlatform",
        "hash": "0x3c9736fb",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x91be7d34",
                "inverted": true,
                "source_resource": "HC6_ObjectivePlatform_FirstTime_NotFirstHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x2d70c79b",
                "inverted": true,
                "source_resource": "HC6_SCE_DestroyedColumnTeleport",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c9736fe",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3c9736ff",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_UnplugElika",
        "hash": "0x3e0f1791",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x2d70c79b",
                "inverted": false,
                "source_resource": "HC6_SCE_DestroyedColumnTeleport",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e0f1793",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3e0f1795",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_ThirdIllusionDead",
        "hash": "0x3e2f4671",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x91be559d",
                "inverted": false,
                "source_resource": "HC6_SCE_SecondIllusionDead",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e2f4673",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_SCE_ElikaBarks",
                        "inverted": true
                    },
                    {
                        "resource": "HC6_SCE_FightLDD",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_SCE_ConcubineOnFightPlatform",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_CapturedElika_Colmap",
                        "inverted": true
                    },
                    {
                        "resource": "HC6_SCE_RemoveJumpAbility",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3e2f4675",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_FirstIlusionDead",
        "hash": "0x92cd4197",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x2d70c79b",
                "inverted": false,
                "source_resource": "HC6_SCE_DestroyedColumnTeleport",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x92cd4199",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_SCE_SecondIllusionDead",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_SCE_SecondConcubineAtmosphere",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x92cd419a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_ArrivingInCirculation",
        "hash": "0x88618ac2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x88618ac4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_SCE_ReturnInCirculation",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x88618ac5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_ReturnInCirculation",
        "hash": "0x88618ac3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x88618ac4",
                "inverted": false,
                "source_resource": "HC6_SCE_ArrivingInCirculation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x88618ac6",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x88618ac7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_ElikaBarks",
        "hash": "0x91be49b0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x2d70c79b",
                "inverted": false,
                "source_resource": "HC6_SCE_DestroyedColumnTeleport",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3e2f4673",
                "inverted": true,
                "source_resource": "HC6_SCE_ThirdIllusionDead",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x91be49b1",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x91be49b2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_SecondIllusionDead",
        "hash": "0x91be559c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x92cd4199",
                "inverted": false,
                "source_resource": "HC6_SCE_FirstIlusionDead",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x91be559d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_SCE_ThirdIllusionDead",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_SCE_ThirdConcubineAtmosphere",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x91be559e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_EndFight",
        "hash": "0x91be574b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x60448a09",
                "inverted": false,
                "source_resource": "HC6_SCE_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x91be574d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6",
                        "inverted": true
                    },
                    {
                        "resource": "HC6_Heal_FirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_Heal_NotFirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "HC6_SCE_FightLDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x91be5750",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_FightIntro",
        "hash": "0x60448a07",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x6fd849a8",
                "inverted": false,
                "source_resource": "HC6_SCE_ConcubineOnFightPlatform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x60448a09",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_SCE_EndFight",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x60448a0a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_FightLDD",
        "hash": "0x5ee7c009",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x91be574d",
                "inverted": true,
                "source_resource": "HC6_SCE_EndFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3e2f4673",
                "inverted": false,
                "source_resource": "HC6_SCE_ThirdIllusionDead",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5ee7c00a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5ee7c00b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_ConcubineOnFightPlatform",
        "hash": "0x6fd849a5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x3e2f4673",
                "inverted": false,
                "source_resource": "HC6_SCE_ThirdIllusionDead",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6fd849a8",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_SCE_FightIntro",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6fd849a9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_CapturedElika_Colmap",
        "hash": "0x746cc64b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x2d70c79b",
                "inverted": false,
                "source_resource": "HC6_SCE_DestroyedColumnTeleport",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3e2f4673",
                "inverted": true,
                "source_resource": "HC6_SCE_ThirdIllusionDead",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x746cc64c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x746cc64d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_FirstConcubineAtmosphere",
        "hash": "0xce2c014c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x2d70c79b",
                "inverted": false,
                "source_resource": "HC6_SCE_DestroyedColumnTeleport",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xce2c014d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xce2c014e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_SecondConcubineAtmosphere",
        "hash": "0xce2c0170",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x92cd4199",
                "inverted": false,
                "source_resource": "HC6_SCE_FirstIlusionDead",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xce2c0171",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xce2c0172",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_ThirdConcubineAtmosphere",
        "hash": "0xce2c0193",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x91be559d",
                "inverted": false,
                "source_resource": "HC6_SCE_SecondIllusionDead",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xce2c0194",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xce2c0195",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_SCE_RemoveJumpAbility",
        "hash": "0xdb0e9757",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6"
        ],
        "requirements": [
            {
                "connected_uid": "0x3e2f4673",
                "inverted": false,
                "source_resource": "HC6_SCE_ThirdIllusionDead",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xdb0e9758",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xdb0e9759",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_ObjectivePlatform",
        "hash": "0x46d94097",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x46d940ac",
                "inverted": true,
                "source_resource": "HC5_ObjPlatform_Return_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x46d940a0",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x46d940a1",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_001_FightIntro",
        "hash": "0x4d8bcef0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x91cb3dab",
                "inverted": false,
                "source_resource": "HC5_003_Arriving_On_Platform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4d8bcef1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_002_FightEnd",
                        "inverted": false
                    },
                    {
                        "resource": "HC5_IntroToConcubine",
                        "inverted": true
                    },
                    {
                        "resource": "HC5_FinalPlatform",
                        "inverted": true
                    },
                    {
                        "resource": "HC5_Fight_ElikaMonitor",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4d8bcef2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_002_FightEnd",
        "hash": "0x4d8bcef4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x4d8bcef1",
                "inverted": false,
                "source_resource": "HC5_001_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4d8bcef6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_FertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "HC5_FightLDD",
                        "inverted": true
                    },
                    {
                        "resource": "HC5_Fight_ElikaMonitor",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4d8bcef7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_FertileGround",
        "hash": "0x85a79498",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x4d8bcef6",
                "inverted": false,
                "source_resource": "HC5_002_FightEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x85a7949a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_Leaving_Bubble",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x85a7949b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_003_Arriving_In_Circulation",
        "hash": "0x91cb3da6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x91cb3da7",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_ReturnInCirculation",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x91cb3da8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_003_Arriving_On_Platform",
        "hash": "0x91cb3daa",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x91cb3dab",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_001_FightIntro",
                        "inverted": false
                    },
                    {
                        "resource": "HC5_FinalPlatform",
                        "inverted": false
                    },
                    {
                        "resource": "HC5_FightLDD",
                        "inverted": false
                    },
                    {
                        "resource": "HC5_ODD_FailedGrapple",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x91cb3dac",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_Leaving_Bubble",
        "hash": "0xa32c0004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x85a7949a",
                "inverted": false,
                "source_resource": "HC5_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa32c0005",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa32c0006",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_IntroToConcubine",
        "hash": "0x9208f6eb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x4d8bcef1",
                "inverted": true,
                "source_resource": "HC5_001_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9208f6ec",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x9208f6ed",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_FinalPlatform",
        "hash": "0x9208f6f2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x91cb3dab",
                "inverted": false,
                "source_resource": "HC5_003_Arriving_On_Platform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x4d8bcef1",
                "inverted": true,
                "source_resource": "HC5_001_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9208f6f4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_ODD_FailedGrapple",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x9208f6f7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_ReturnInCirculation",
        "hash": "0xa27ee938",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x91cb3da7",
                "inverted": false,
                "source_resource": "HC5_003_Arriving_In_Circulation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa27ee939",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xa27ee93a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_FightLDD",
        "hash": "0x5f72c004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x91cb3dab",
                "inverted": false,
                "source_resource": "HC5_003_Arriving_On_Platform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x4d8bcef6",
                "inverted": true,
                "source_resource": "HC5_002_FightEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5f72c005",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5f72c006",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_Fight_ElikaMonitor",
        "hash": "0xe257abf7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x4d8bcef1",
                "inverted": false,
                "source_resource": "HC5_001_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x4d8bcef6",
                "inverted": true,
                "source_resource": "HC5_002_FightEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xe257abf8",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xe257abf9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_ODD_FailedGrapple",
        "hash": "0xe622989d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5"
        ],
        "requirements": [
            {
                "connected_uid": "0x91cb3dab",
                "inverted": false,
                "source_resource": "HC5_003_Arriving_On_Platform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x9208f6f4",
                "inverted": true,
                "source_resource": "HC5_FinalPlatform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xe622989e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xe622989f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_CIN_ConcubineEscapes",
        "hash": "0x493ec0fc",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec10d",
                "inverted": false,
                "source_resource": "HC4_SE_ConcubineReturns",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec10f",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_SE_ActivateFertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "HC4_SE_BossFightLDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x493ec110",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_Objective_Platform",
        "hash": "0x493ec0e9",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec11e",
                "inverted": true,
                "source_resource": "HC4_ObjPlatform_Return_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x493ec0ff",
                "inverted": true,
                "source_resource": "HC4_SE_1rstillusion",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec0ed",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x493ec0ee",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_ConcubineReturns",
        "hash": "0x493ec0fb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec10b",
                "inverted": false,
                "source_resource": "HC4_SE_TrapsReleased",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec10d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_CIN_ConcubineEscapes",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x493ec10e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_CIN_ElikaTrapped",
        "hash": "0x493ec0f3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec0fd",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_SE_1rstillusion",
                        "inverted": false
                    },
                    {
                        "resource": "HC4_SE_IfPlayerDiesWhenElikaTrappedActivate2ndCOL",
                        "inverted": false
                    },
                    {
                        "resource": "HC4_SE_KeepElikaTrapped",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x493ec0fe",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_1rstillusion",
        "hash": "0x493ec0f4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec0fd",
                "inverted": false,
                "source_resource": "HC4_CIN_ElikaTrapped",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec0ff",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_Objective_Platform",
                        "inverted": true
                    },
                    {
                        "resource": "HC4_SE_2ndillusion",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x493ec100",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_IfPlayerDiesWhenElikaTrappedActivate2ndCOL",
        "hash": "0xd89747a8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec0fd",
                "inverted": false,
                "source_resource": "HC4_CIN_ElikaTrapped",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x5c768007",
                "inverted": true,
                "source_resource": "HC4_SE_Elika_Returns",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xd89747a9",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xd89747aa",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_4thIllusion",
        "hash": "0x493ec0f6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x8c088003",
                "inverted": false,
                "source_resource": "HC4_SE_3rdillusion",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec103",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x493ec104",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_ActivateFertileGround",
        "hash": "0x5d328b6d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec10f",
                "inverted": false,
                "source_resource": "HC4_CIN_ConcubineEscapes",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5d328b6f",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_FertileGround",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5d328b70",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_FertileGround",
        "hash": "0x50673f58",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x5d328b6f",
                "inverted": false,
                "source_resource": "HC4_SE_ActivateFertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50673f59",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_CentralPeak",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x50673f5a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_Elika_Returns",
        "hash": "0x5c768005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5c768007",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_SE_IfPlayerDiesWhenElikaTrappedActivate2ndCOL",
                        "inverted": true
                    },
                    {
                        "resource": "HC4_SE_TrapsReleased",
                        "inverted": false
                    },
                    {
                        "resource": "HC4_SE_RingSwitch1",
                        "inverted": false
                    },
                    {
                        "resource": "HC4_SE_RingSwitch2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5c768008",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_TrapsReleased",
        "hash": "0x493ec0fa",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x5c768007",
                "inverted": false,
                "source_resource": "HC4_SE_Elika_Returns",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec10b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_SE_ConcubineReturns",
                        "inverted": false
                    },
                    {
                        "resource": "HC4_SE_BossFightLDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x493ec10c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_BossFightLDD",
        "hash": "0x67e54031",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec10b",
                "inverted": false,
                "source_resource": "HC4_SE_TrapsReleased",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x493ec10f",
                "inverted": true,
                "source_resource": "HC4_CIN_ConcubineEscapes",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x67e54032",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x67e54033",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_ExtendedDeathHeightSlides",
        "hash": "0x892ad88f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x8c088003",
                "inverted": false,
                "source_resource": "HC4_SE_3rdillusion",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x892ad98f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x892ad990",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_RingSwitch1",
        "hash": "0x89d7000c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x5c768007",
                "inverted": false,
                "source_resource": "HC4_SE_Elika_Returns",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x89d7000d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x89d7000e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_RingSwitch2",
        "hash": "0x89d70011",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x5c768007",
                "inverted": false,
                "source_resource": "HC4_SE_Elika_Returns",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x89d70012",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x89d70013",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_KeepElikaTrapped",
        "hash": "0x8a6698b7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec0fd",
                "inverted": false,
                "source_resource": "HC4_CIN_ElikaTrapped",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8a6698b8",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8a6698b9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_2ndillusion",
        "hash": "0x8c088000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec0ff",
                "inverted": false,
                "source_resource": "HC4_SE_1rstillusion",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8c088004",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_SE_3rdillusion",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8c088005",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_SE_3rdillusion",
        "hash": "0x8c088001",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_CentralPeak"
        ],
        "requirements": [
            {
                "connected_uid": "0x8c088004",
                "inverted": false,
                "source_resource": "HC4_SE_2ndillusion",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8c088003",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_SE_4thIllusion",
                        "inverted": false
                    },
                    {
                        "resource": "HC4_SE_ExtendedDeathHeightSlides",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8c088007",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ArrivingInHC",
        "hash": "0xa27ed621",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC_ArrivingInHC"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa27ed625",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC_ArrivingInHC",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa27ed62a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_ArrivingInHC",
        "hash": "0xa27ed622",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC_ArrivingInHC"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa27ed627",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC_ArrivingInHC",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa27ed62f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_ArrivingInHC",
        "hash": "0xa27ed623",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC_ArrivingInHC"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa27ed629",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC_ArrivingInHC",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa27ed630",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_ObjectivePlatform",
        "hash": "0x6c5a282",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LR1"
        ],
        "requirements": [
            {
                "connected_uid": "0x52884f16",
                "inverted": true,
                "source_resource": "LR1_WarriorFight_Sequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x6c5a296",
                "inverted": true,
                "source_resource": "LR1_SCE_SE_Objectiveplatform_V3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6c5a28b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6c5a28c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_WarriorFight_Sequence",
        "hash": "0x52884f0f",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LR1"
        ],
        "requirements": [
            {
                "connected_uid": "0x889a7636",
                "inverted": true,
                "source_resource": "LR1_WarriorFight_Sequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x52884f16",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR1_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "LR1_TOWER_COLLAPSE",
                        "inverted": false
                    },
                    {
                        "resource": "LR1_SE_018_1stBalcony",
                        "inverted": false
                    },
                    {
                        "resource": "LR1_Tower_Collapse_014",
                        "inverted": false
                    },
                    {
                        "resource": "LR1_TOWER_COLLAPSE_013",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x52884f17",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_SE_026_GPBubbleHealing",
        "hash": "0x70d5505d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1"
        ],
        "requirements": [
            {
                "connected_uid": "0xb745c005",
                "inverted": false,
                "source_resource": "LR1_TOWER_COLLAPSE_013",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x70d5505f",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR1_FertileGround",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x70d55060",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_TOWER_COLLAPSE",
        "hash": "0x6c5a2b6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "LR1"
        ],
        "requirements": [
            {
                "connected_uid": "0x52884f16",
                "inverted": false,
                "source_resource": "LR1_WarriorFight_Sequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6c5a2be",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6c5a2bf",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_SE_018_1stBalcony",
        "hash": "0x68cbde96",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1"
        ],
        "requirements": [
            {
                "connected_uid": "0x52884f16",
                "inverted": false,
                "source_resource": "LR1_WarriorFight_Sequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x68cbde98",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x68cbde99",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_FertileGround",
        "hash": "0x85e3d020",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1"
        ],
        "requirements": [
            {
                "connected_uid": "0x70d5505f",
                "inverted": false,
                "source_resource": "LR1_SE_026_GPBubbleHealing",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8611c001",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR1",
                        "inverted": true
                    },
                    {
                        "resource": "LR1_Tower_Collapse_014",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8611c002",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_Tower_Collapse_014",
        "hash": "0x8cb0164a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1"
        ],
        "requirements": [
            {
                "connected_uid": "0x52884f16",
                "inverted": false,
                "source_resource": "LR1_WarriorFight_Sequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x8611c001",
                "inverted": true,
                "source_resource": "LR1_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8cb0164b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8cb0164c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_TOWER_COLLAPSE_013",
        "hash": "0xb745c002",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1"
        ],
        "requirements": [
            {
                "connected_uid": "0x52884f16",
                "inverted": false,
                "source_resource": "LR1_WarriorFight_Sequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb745c005",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR1_SE_026_GPBubbleHealing",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xb745c006",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR3_SCE_WARRIOR_Stage1",
        "hash": "0x4f318004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4f318007",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR3_SCE_WARRIOR_Stage2",
                        "inverted": false
                    },
                    {
                        "resource": "LR3_SCE_WARRIOR_Outro",
                        "inverted": false
                    },
                    {
                        "resource": "LR3_SCE_Warrior_LDD_001",
                        "inverted": true
                    },
                    {
                        "resource": "LR3_SCE_WARRIOR_TAUNT",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4f318008",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR3_SCE_WARRIOR_Stage2",
        "hash": "0x4f318005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x4f318007",
                "inverted": false,
                "source_resource": "LR3_SCE_WARRIOR_Stage1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4f31800e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR3_SCE_WARRIOR_TAUNT",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4f31800f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR35_CIN_007_AfterEscapingFortress",
        "hash": "0x5894006c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x71394b2e",
                "inverted": false,
                "source_resource": "LR35_StickCollapse_01",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x58940079",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR3_LAIR",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5894007a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR35_StickCollapse_05",
        "hash": "0x740b002d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0xd58b804b",
                "inverted": false,
                "source_resource": "LR3_CIN_ArriveAtStick",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x740b003a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x740b003b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR3_CIN_002_FightPlatform",
        "hash": "0x5894006a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5894006e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR3_SCE_Warrior_LDD_001",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x58940072",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR35_StickCollapse_01",
        "hash": "0x71394b2b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0xd58b804b",
                "inverted": false,
                "source_resource": "LR3_CIN_ArriveAtStick",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x71394b2e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR35_CIN_007_AfterEscapingFortress",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x71394b2f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR35_StickCollapse_02",
        "hash": "0x740b002a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0xd58b804b",
                "inverted": false,
                "source_resource": "LR3_CIN_ArriveAtStick",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x740b002e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x740b002f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR35_StickCollapse_03",
        "hash": "0x740b002b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0xd58b804b",
                "inverted": false,
                "source_resource": "LR3_CIN_ArriveAtStick",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x740b0032",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x740b0033",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR35_StickCollapse_04",
        "hash": "0x740b002c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0xd58b804b",
                "inverted": false,
                "source_resource": "LR3_CIN_ArriveAtStick",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x740b0036",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x740b0037",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR3_SCE_WARRIOR_Outro",
        "hash": "0x5e9c1460",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x4f318007",
                "inverted": false,
                "source_resource": "LR3_SCE_WARRIOR_Stage1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5e9c3271",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR3_CIN_ArriveAtStick",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5e9c3272",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR3_SCE_Warrior_LDD_001",
        "hash": "0x67b80003",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x4f318007",
                "inverted": true,
                "source_resource": "LR3_SCE_WARRIOR_Stage1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x5894006e",
                "inverted": false,
                "source_resource": "LR3_CIN_002_FightPlatform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x67b80004",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x67b80005",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR3_SCE_WARRIOR_TAUNT",
        "hash": "0x5e9c1462",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x4f318007",
                "inverted": false,
                "source_resource": "LR3_SCE_WARRIOR_Stage1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x4f31800e",
                "inverted": true,
                "source_resource": "LR3_SCE_WARRIOR_Stage2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5e9c3278",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5e9c3279",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR3_CIN_ArriveAtStick",
        "hash": "0xd58b8049",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x5e9c3271",
                "inverted": false,
                "source_resource": "LR3_SCE_WARRIOR_Outro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xd58b804b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR35_StickCollapse_05",
                        "inverted": false
                    },
                    {
                        "resource": "LR35_StickCollapse_01",
                        "inverted": false
                    },
                    {
                        "resource": "LR35_StickCollapse_02",
                        "inverted": false
                    },
                    {
                        "resource": "LR35_StickCollapse_03",
                        "inverted": false
                    },
                    {
                        "resource": "LR35_StickCollapse_04",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xd58b8050",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_ObjectivePlatform",
        "hash": "0x155214df",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LR6"
        ],
        "requirements": [
            {
                "connected_uid": "0x8c08000b",
                "inverted": true,
                "source_resource": "LR6_SCE_Collapse_01",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x59ca4018",
                "inverted": true,
                "source_resource": "LR6_CIN_002_ObjPlat_1stTimeABubbleHealed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x155214e4",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x155214e5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_SCE_Collapse_03",
        "hash": "0x155214e0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "LR6"
        ],
        "requirements": [
            {
                "connected_uid": "0x8c08000b",
                "inverted": false,
                "source_resource": "LR6_SCE_Collapse_01",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x155214e8",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x155214e9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_SCE_FIGHT",
        "hash": "0x155214f1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR6"
        ],
        "requirements": [
            {
                "connected_uid": "0x8c080006",
                "inverted": false,
                "source_resource": "LR6_SCE_Collapse_02",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x155214f3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x155214f4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_SCE_WarriorWatches",
        "hash": "0x8f668d98",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR6"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8f668d9a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8f668d9d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_FightIntro",
        "hash": "0xa411d3d4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR6"
        ],
        "requirements": [
            {
                "connected_uid": "0x8c080006",
                "inverted": false,
                "source_resource": "LR6_SCE_Collapse_02",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa411d3d6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR6_SCE_FightOutro",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa411d3d7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_SCE_FightOutro",
        "hash": "0xa411d2b2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR6"
        ],
        "requirements": [
            {
                "connected_uid": "0xa411d3d6",
                "inverted": false,
                "source_resource": "LR6_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa411d2b4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR6",
                        "inverted": true
                    },
                    {
                        "resource": "LR6_Heal_FirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "LR6_Heal_NotFirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "LR6_SCE_Warrior_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa411d2b5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_SCE_Warrior_LDD",
        "hash": "0x6fb2c000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR6"
        ],
        "requirements": [
            {
                "connected_uid": "0xa411d2b4",
                "inverted": true,
                "source_resource": "LR6_SCE_FightOutro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x8c080006",
                "inverted": false,
                "source_resource": "LR6_SCE_Collapse_02",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6fb2c001",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6fb2c002",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_SCE_Collapse_02",
        "hash": "0x8c080005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR6"
        ],
        "requirements": [
            {
                "connected_uid": "0x8c08000b",
                "inverted": false,
                "source_resource": "LR6_SCE_Collapse_01",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8c080006",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR6_SCE_FIGHT",
                        "inverted": false
                    },
                    {
                        "resource": "LR6_FightIntro",
                        "inverted": false
                    },
                    {
                        "resource": "LR6_SCE_Warrior_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8c080007",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_SCE_Collapse_01",
        "hash": "0x8c080008",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR6"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8c08000b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR6_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "LR6_SCE_Collapse_03",
                        "inverted": false
                    },
                    {
                        "resource": "LR6_SCE_Collapse_02",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8c08000d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_ObjectivePlatform",
        "hash": "0x3c378082",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LR4"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a935e95",
                "inverted": true,
                "source_resource": "LR4_SE_012_EnteringBubble",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c37808e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3c37808f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_FertileGround",
        "hash": "0x8611e5b0",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR4"
        ],
        "requirements": [
            {
                "connected_uid": "0x3c3780a1",
                "inverted": false,
                "source_resource": "LR4_Fight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8611e5b4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR4_ExitDoor",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8611e5b5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_Fight",
        "hash": "0x3c378084",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR4"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a935e95",
                "inverted": false,
                "source_resource": "LR4_SE_012_EnteringBubble",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c3780a1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR4_FertileGround",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3c3780a2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_ExitDoor",
        "hash": "0x3c378085",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR4"
        ],
        "requirements": [
            {
                "connected_uid": "0x8611e5b4",
                "inverted": false,
                "source_resource": "LR4_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c37808d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR4",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3c3780a7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_SE_012_EnteringBubble",
        "hash": "0x5a935e93",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR4"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5a935e95",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR4_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "LR4_Fight",
                        "inverted": false
                    },
                    {
                        "resource": "LR4_SCE_Warrior_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5a935e96",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_SCE_Warrior_LDD",
        "hash": "0x6ee90003",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR4"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a935e95",
                "inverted": false,
                "source_resource": "LR4_SE_012_EnteringBubble",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6ee90004",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6ee90005",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_ObjectivePlatform",
        "hash": "0x3e11c05e",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LR2"
        ],
        "requirements": [
            {
                "connected_uid": "0x3e11c106",
                "inverted": true,
                "source_resource": "LR2_001_ChallengeBeginning",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3e11c071",
                "inverted": true,
                "source_resource": "LR2_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e11c064",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3e11c065",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_ObjPlatform_PuzzleNotCompleted",
        "hash": "0x3e11c05f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2"
        ],
        "requirements": [
            {
                "connected_uid": "0x3e11c106",
                "inverted": false,
                "source_resource": "LR2_001_ChallengeBeginning",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3e11c0fe",
                "inverted": true,
                "source_resource": "LR2_002_Fight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e11c06c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3e11c06d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_Puzzles_Challenges",
        "hash": "0x50c411e6",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LR2"
        ],
        "requirements": [
            {
                "connected_uid": "0x3e11c106",
                "inverted": false,
                "source_resource": "LR2_001_ChallengeBeginning",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x6e9bdacb",
                "inverted": true,
                "source_resource": "LR2_ODD_4thPuzzleCrankDone",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x8c1182c2",
                "inverted": true,
                "source_resource": "LR2_Failsafe",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50c411e8",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_ReInitPuzzle",
                        "inverted": false
                    },
                    {
                        "resource": "LR2_002_Fight",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x50c411e9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_002_Fight",
        "hash": "0x3e11c0fb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2"
        ],
        "requirements": [
            {
                "connected_uid": "0x6c0f8068",
                "inverted": true,
                "source_resource": "LR2_EndOfFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3e11c106",
                "inverted": false,
                "source_resource": "LR2_001_ChallengeBeginning",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x50c411e8",
                "inverted": false,
                "source_resource": "LR2_Puzzles_Challenges",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 3,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e11c0fe",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_ObjPlatform_PuzzleNotCompleted",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3e11c0ff",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_001_ChallengeBeginning",
        "hash": "0x3e11c101",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e11c106",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "LR2_ObjPlatform_PuzzleNotCompleted",
                        "inverted": false
                    },
                    {
                        "resource": "LR2_Puzzles_Challenges",
                        "inverted": false
                    },
                    {
                        "resource": "LR2_002_Fight",
                        "inverted": false
                    },
                    {
                        "resource": "LR2_EndOfFight",
                        "inverted": false
                    },
                    {
                        "resource": "LR2_SCE_Warrior_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3e11c10b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_004_FertileGround",
        "hash": "0x3e11d3f3",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2"
        ],
        "requirements": [
            {
                "connected_uid": "0x6c0f8068",
                "inverted": false,
                "source_resource": "LR2_EndOfFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e11d3f6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3e11d3f7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_EndOfFight",
        "hash": "0x6c0f8067",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2"
        ],
        "requirements": [
            {
                "connected_uid": "0x3e11c106",
                "inverted": false,
                "source_resource": "LR2_001_ChallengeBeginning",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6c0f8068",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_002_Fight",
                        "inverted": true
                    },
                    {
                        "resource": "LR2_004_FertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "LR2_SCE_Warrior_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6c0f8069",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_SCE_Warrior_LDD",
        "hash": "0x6fb2ded5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2"
        ],
        "requirements": [
            {
                "connected_uid": "0x3e11c106",
                "inverted": false,
                "source_resource": "LR2_001_ChallengeBeginning",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x6c0f8068",
                "inverted": true,
                "source_resource": "LR2_EndOfFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6fb2dedc",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6fb2dedd",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_ObjectivePlatform",
        "hash": "0x45628fa0",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "LR5"
        ],
        "requirements": [
            {
                "connected_uid": "0x45628fc7",
                "inverted": true,
                "source_resource": "LR5_TrapRelease",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x45628fb2",
                "inverted": true,
                "source_resource": "LR5_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x45628fa5",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x45628fa6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_TrapRelease",
        "hash": "0x45628fc5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x45628fc7",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR5_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "LR5_MiddleOfWallRun",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x45628fc8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_Fight",
        "hash": "0x45628fc6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5"
        ],
        "requirements": [
            {
                "connected_uid": "0xc798c589",
                "inverted": false,
                "source_resource": "LR5_MiddleOfWallRun",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x45628fc9",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR5_FertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "LR5_SE_019_WarriorTrapped",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x45628fca",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_FightIntro",
        "hash": "0x310c1e92",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5"
        ],
        "requirements": [
            {
                "connected_uid": "0xc798c589",
                "inverted": false,
                "source_resource": "LR5_MiddleOfWallRun",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x310c1e93",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x310c1e94",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_FertileGround",
        "hash": "0x8611f848",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5"
        ],
        "requirements": [
            {
                "connected_uid": "0x45628fc9",
                "inverted": false,
                "source_resource": "LR5_Fight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8611f84c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR5",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8611f84d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_SE_019_WarriorTrapped",
        "hash": "0x9334eb55",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5"
        ],
        "requirements": [
            {
                "connected_uid": "0x45628fc9",
                "inverted": false,
                "source_resource": "LR5_Fight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9334eb56",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x9334eb57",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_MiddleOfWallRun",
        "hash": "0xc71926b7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5"
        ],
        "requirements": [
            {
                "connected_uid": "0x45628fc7",
                "inverted": false,
                "source_resource": "LR5_TrapRelease",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xc798c589",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR5_Fight",
                        "inverted": false
                    },
                    {
                        "resource": "LR5_FightIntro",
                        "inverted": false
                    },
                    {
                        "resource": "LR5_CallElikaWhenHealing",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xc798c58c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_CallElikaWhenHealing",
        "hash": "0x7ae14024",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5"
        ],
        "requirements": [
            {
                "connected_uid": "0xc798c589",
                "inverted": false,
                "source_resource": "LR5_MiddleOfWallRun",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7ae14025",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7ae14026",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_Warriorlooping",
        "hash": "0x69ad0005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x69ad0006",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x69ad0007",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_SE_002_1stArriveInCirculation",
        "hash": "0x5b73c006",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR_1stArriveInCirculation"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5b73c00a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR_1stArriveInCirculation",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5b73c00b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_ODD_003_1stArriveInCirculation",
        "hash": "0x5b73c007",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR_1stArriveInCirculation"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5b73c00d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR_1stArriveInCirculation",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5b73c013",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_CIN_1stArrive_in_Circulation",
        "hash": "0xa7876a42",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CIN_1stArrive_in_Circulation"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa7876a47",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CIN_1stArrive_in_Circulation",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa7876a4a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_CIN_1stArrive_in_Circulation",
        "hash": "0xa7876a43",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "CIN_1stArrive_in_Circulation"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa7876a49",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "CIN_1stArrive_in_Circulation",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xa7876a50",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_001_BossFight",
        "hash": "0x7e4c000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7e4c031",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB1_CIN_HealingOnPlatforms",
                        "inverted": false
                    },
                    {
                        "resource": "OB1_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "OB1_003_Poison",
                        "inverted": false
                    },
                    {
                        "resource": "OB1_FertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "OB1_BossFightLDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x7e4c032",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_CIN_HealingOnPlatforms",
        "hash": "0x33590543",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1"
        ],
        "requirements": [
            {
                "connected_uid": "0x7e4c031",
                "inverted": false,
                "source_resource": "OB1_001_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x33590545",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x33590546",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_ObjectivePlatform",
        "hash": "0x7c14045",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "OB1"
        ],
        "requirements": [
            {
                "connected_uid": "0x7e4c031",
                "inverted": true,
                "source_resource": "OB1_001_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x7c1405b",
                "inverted": true,
                "source_resource": "OB1_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7c14055",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7c14056",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_003_Poison",
        "hash": "0xd7b14bb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1"
        ],
        "requirements": [
            {
                "connected_uid": "0x7e4c031",
                "inverted": false,
                "source_resource": "OB1_001_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xd7b14bd",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xd7b14c0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_004_PoisonCleansed",
        "hash": "0xd7b17ad",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1"
        ],
        "requirements": [
            {
                "connected_uid": "0x83f936a6",
                "inverted": false,
                "source_resource": "OB1_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xd7b17af",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB1",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xd7b17b0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_SCE_SE_ArrivingInCirculationFirstTime",
        "hash": "0x50dc11bc",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50dc11be",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB1_SCE_SE_ReturningInCirculation",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x50dc11bf",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_SCE_SE_ReturningInCirculation",
        "hash": "0x50dc11bd",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1"
        ],
        "requirements": [
            {
                "connected_uid": "0x50dc11be",
                "inverted": false,
                "source_resource": "OB1_SCE_SE_ArrivingInCirculationFirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x83f936a6",
                "inverted": true,
                "source_resource": "OB1_FertileGround",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50dc11c0",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x50dc11c1",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_FertileGround",
        "hash": "0x83f936a4",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1"
        ],
        "requirements": [
            {
                "connected_uid": "0x7e4c031",
                "inverted": false,
                "source_resource": "OB1_001_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x83f936a6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB1_004_PoisonCleansed",
                        "inverted": false
                    },
                    {
                        "resource": "OB1_SCE_SE_ReturningInCirculation",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x83f936a7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_BossFightLDD",
        "hash": "0x679e8017",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1"
        ],
        "requirements": [
            {
                "connected_uid": "0x7e4c031",
                "inverted": true,
                "source_resource": "OB1_001_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x679e8018",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x679e8019",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_ObjectivePlatform",
        "hash": "0x16e740ee",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e771c6",
                "inverted": true,
                "source_resource": "OB2_001_GenericFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x16e740fb",
                "inverted": true,
                "source_resource": "OB2_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e740f5",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x16e740f6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_001_GenericFight",
        "hash": "0x16e771bf",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e771c6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB2_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "OB2_002_ChallengeIntro",
                        "inverted": false
                    },
                    {
                        "resource": "OB2_FightDoor_Activation",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x16e771c7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_002_ChallengeIntro",
        "hash": "0x16e771c0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e771c6",
                "inverted": false,
                "source_resource": "OB2_001_GenericFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e771c8",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB2_003_GooGasActivation",
                        "inverted": false
                    },
                    {
                        "resource": "OB2_SCE_SE_RingSwitches_Activated",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x16e771c9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_003_GooGasActivation",
        "hash": "0x16e771d1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e771c8",
                "inverted": false,
                "source_resource": "OB2_002_ChallengeIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e771d7",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB2_004_Challenge",
                        "inverted": false
                    },
                    {
                        "resource": "OB2_PowerPlateCovers",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x16e771dc",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_005_BossFight",
        "hash": "0x16e771c2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x17e62797",
                "inverted": false,
                "source_resource": "OB2_004_Challenge",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e771c4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB2_SCE_FertileGround_001",
                        "inverted": false
                    },
                    {
                        "resource": "OB2_SCE_ArrivingAtTopOfElevator",
                        "inverted": true
                    },
                    {
                        "resource": "OB2_BossFight_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x16e771ce",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_004_Challenge",
        "hash": "0x17e62795",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e771d7",
                "inverted": false,
                "source_resource": "OB2_003_GooGasActivation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x17e62797",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB2_005_BossFight",
                        "inverted": false
                    },
                    {
                        "resource": "OB2_SCE_ArrivingAtTopOfElevator",
                        "inverted": false
                    },
                    {
                        "resource": "OB2_FightKillMonitor",
                        "inverted": false
                    },
                    {
                        "resource": "OB2_BossFight_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x17e62798",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_PowerPlateCovers",
        "hash": "0x17e630fa",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e771d7",
                "inverted": false,
                "source_resource": "OB2_003_GooGasActivation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x17e630fb",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x17e630fc",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_SCE_FertileGround_001",
        "hash": "0x5539d95c",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e771c4",
                "inverted": false,
                "source_resource": "OB2_005_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5539d95e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB2",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5539d95f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_SCE_SE_RingSwitches_Activated",
        "hash": "0x52fd4000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e771c8",
                "inverted": false,
                "source_resource": "OB2_002_ChallengeIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x52fd4004",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x52fd4005",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_SCE_ODD_AcrossFightGate",
        "hash": "0x925dc008",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x925dc00a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x925dc00b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_SCE_ArrivingAtTopOfElevator",
        "hash": "0x925dc009",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x17e62797",
                "inverted": false,
                "source_resource": "OB2_004_Challenge",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x16e771c4",
                "inverted": true,
                "source_resource": "OB2_005_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x925dc00d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x925dc00e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_SCE_ODD_ArrivingInCirculation",
        "hash": "0x925dc010",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x925dc013",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x925dc014",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_FightDoor_Activation",
        "hash": "0x98970030",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e771c6",
                "inverted": false,
                "source_resource": "OB2_001_GenericFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9897004f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x98970050",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_FightKillMonitor",
        "hash": "0xcf734576",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x17e62797",
                "inverted": false,
                "source_resource": "OB2_004_Challenge",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcf734577",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xcf734578",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_BossFight_LDD",
        "hash": "0x4decc000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2"
        ],
        "requirements": [
            {
                "connected_uid": "0x17e62797",
                "inverted": false,
                "source_resource": "OB2_004_Challenge",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x16e771c4",
                "inverted": true,
                "source_resource": "OB2_005_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4decc016",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4decc017",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB3_004_FinalFight",
        "hash": "0x22528ab7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x5160c002",
                "inverted": false,
                "source_resource": "OB3_003_GenericFight_002",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x22528ab9",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB3_LAIR",
                        "inverted": true
                    },
                    {
                        "resource": "OB3_FinalFightLDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x22528aba",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB3_001_FirstFight",
        "hash": "0x513d00d3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB3_LAIR"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5160c003",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB3_002_GenericFight_001",
                        "inverted": false
                    },
                    {
                        "resource": "OB3_FightMechanics",
                        "inverted": true
                    },
                    {
                        "resource": "OB3_ResetStage",
                        "inverted": false
                    },
                    {
                        "resource": "OB3_FirstFightLDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5160c004",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB3_002_GenericFight_001",
        "hash": "0x513d00d4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x5160c003",
                "inverted": false,
                "source_resource": "OB3_001_FirstFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5160c005",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB3_003_GenericFight_002",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5160c006",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB3_003_GenericFight_002",
        "hash": "0x5160c000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x5160c005",
                "inverted": false,
                "source_resource": "OB3_002_GenericFight_001",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5160c002",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB3_004_FinalFight",
                        "inverted": false
                    },
                    {
                        "resource": "OB3_ResetStage",
                        "inverted": true
                    },
                    {
                        "resource": "OB3_FinalFightLDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5160c008",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB3_FightMechanics",
        "hash": "0x5160c00a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "OB3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x5160c003",
                "inverted": true,
                "source_resource": "OB3_001_FirstFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5160c00b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5160c00c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB3_ResetStage",
        "hash": "0x58db0439",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "OB3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x5160c003",
                "inverted": false,
                "source_resource": "OB3_001_FirstFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x5160c002",
                "inverted": true,
                "source_resource": "OB3_003_GenericFight_002",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x58db043a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x58db043b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB3_FinalFightLDD",
        "hash": "0x68baec01",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x22528ab9",
                "inverted": true,
                "source_resource": "OB3_004_FinalFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x5160c002",
                "inverted": false,
                "source_resource": "OB3_003_GenericFight_002",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x68baec02",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x68baec03",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB3_FirstFightLDD",
        "hash": "0x691a803c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x5160c003",
                "inverted": true,
                "source_resource": "OB3_001_FirstFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x691a8486",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x691a8487",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_FightMechanics",
        "hash": "0x25efcee1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5"
        ],
        "requirements": [
            {
                "connected_uid": "0x26c8807f",
                "inverted": true,
                "source_resource": "OB5_002_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x26c88081",
                "inverted": false,
                "source_resource": "OB5_002_BossFight",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x26334000",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x26334001",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_ObjectivePlatform",
        "hash": "0x263bc000",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "OB5"
        ],
        "requirements": [
            {
                "connected_uid": "0x26c8807d",
                "inverted": true,
                "source_resource": "OB5_001_BossIntroduction",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x263bc012",
                "inverted": true,
                "source_resource": "OB5_ObjPlatform_Return_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x263bc001",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x263bc002",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_001_BossIntroduction",
        "hash": "0x26c8807a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5"
        ],
        "requirements": [
            {
                "connected_uid": "0x52314041",
                "inverted": false,
                "source_resource": "OB5_SE_ArrivingInCirulationFirstTime",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x26c8807d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB5_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "OB5_002_BossFight",
                        "inverted": false
                    },
                    {
                        "resource": "OB5_BossTaunts",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x26c88080",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_002_BossFight",
        "hash": "0x26c8807b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5"
        ],
        "requirements": [
            {
                "connected_uid": "0x26c8807d",
                "inverted": false,
                "source_resource": "OB5_001_BossIntroduction",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x26c8807f",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB5_FightMechanics",
                        "inverted": true
                    },
                    {
                        "resource": "OB5_003_BossEnd",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x26c88081",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "OB5_FightMechanics",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_003_BossEnd",
        "hash": "0x26c88083",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5"
        ],
        "requirements": [
            {
                "connected_uid": "0x26c8807f",
                "inverted": false,
                "source_resource": "OB5_002_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x26c88084",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB5_FertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "OB5_BossTaunts",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x26c88085",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_SE_ArrivingInCirulationFirstTime",
        "hash": "0x5231403e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x52314040",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x52314041",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "OB5_001_BossIntroduction",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_FertileGround",
        "hash": "0x83f909a3",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5"
        ],
        "requirements": [
            {
                "connected_uid": "0x26c88084",
                "inverted": false,
                "source_resource": "OB5_003_BossEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x83f909a5",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB5",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x83f909a6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_BossTaunts",
        "hash": "0x6783a41b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5"
        ],
        "requirements": [
            {
                "connected_uid": "0x26c88084",
                "inverted": true,
                "source_resource": "OB5_003_BossEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x26c8807d",
                "inverted": false,
                "source_resource": "OB5_001_BossIntroduction",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6783a41c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6783a41d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_ObjectivePlatform",
        "hash": "0x2c524894",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "OB6"
        ],
        "requirements": [
            {
                "connected_uid": "0x3331c006",
                "inverted": true,
                "source_resource": "OB6_001_AlchemistIntroduction",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x85e20013",
                "inverted": true,
                "source_resource": "OB6_ObjPlatform_FirstTime_BubbleHealed",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2c524898",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2c524899",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_001_AlchemistIntroduction",
        "hash": "0x3331c000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB6"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3331c006",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "OB6_002_BossFight",
                        "inverted": false
                    },
                    {
                        "resource": "OB6_GooRising",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3331c007",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_002_BossFight",
        "hash": "0x3331c001",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "OB6"
        ],
        "requirements": [
            {
                "connected_uid": "0x3331c006",
                "inverted": false,
                "source_resource": "OB6_001_AlchemistIntroduction",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3331c008",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_003_FightEnd",
                        "inverted": false
                    },
                    {
                        "resource": "OB6_GooRising",
                        "inverted": true
                    },
                    {
                        "resource": "OB6_SCE_SE_RoofingTutorial",
                        "inverted": true
                    },
                    {
                        "resource": "OB6_SCE_SE_IfPlayerGoesWrongWay",
                        "inverted": true
                    },
                    {
                        "resource": "OB6_AlchemistDeathCheck",
                        "inverted": false
                    },
                    {
                        "resource": "OB6_BossTaunts",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3331c009",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_003_FightEnd",
        "hash": "0x3331c002",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB6"
        ],
        "requirements": [
            {
                "connected_uid": "0x3331c008",
                "inverted": false,
                "source_resource": "OB6_002_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3331c004",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6",
                        "inverted": true
                    },
                    {
                        "resource": "OB6_Heal_FirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "OB6_Heal_NotFirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "OB6_BossTaunts",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3331c00b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_GooRising",
        "hash": "0x4db1d89a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "OB6"
        ],
        "requirements": [
            {
                "connected_uid": "0x3331c006",
                "inverted": false,
                "source_resource": "OB6_001_AlchemistIntroduction",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3331c008",
                "inverted": true,
                "source_resource": "OB6_002_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4db1d89c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_SCE_SE_IfPlayerGoesWrongWay",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4db1d89d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_SCE_SE_RoofingTutorial",
        "hash": "0x506263be",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB6"
        ],
        "requirements": [
            {
                "connected_uid": "0x50b70003",
                "inverted": false,
                "source_resource": "OB6_SCE_SE_IfPlayerGoesWrongWay",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            },
            {
                "connected_uid": "0x3331c008",
                "inverted": true,
                "source_resource": "OB6_002_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50b70000",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x50b70001",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_SCE_SE_IfPlayerGoesWrongWay",
        "hash": "0x506263bf",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB6"
        ],
        "requirements": [
            {
                "connected_uid": "0x4db1d89c",
                "inverted": false,
                "source_resource": "OB6_GooRising",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3331c008",
                "inverted": true,
                "source_resource": "OB6_002_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50b70005",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x50b70003",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "OB6_SCE_SE_RoofingTutorial",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_SCE_004_Circulation_NotFirstTime",
        "hash": "0x84bfbab6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB6"
        ],
        "requirements": [
            {
                "connected_uid": "0x84bfbab7",
                "inverted": false,
                "source_resource": "OB6_SCE_002_Circulation_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x84bfbab9",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x84bfbaba",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_SCE_002_Circulation_FirstTime",
        "hash": "0x84bfbab5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB6"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x84bfbab7",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_SCE_004_Circulation_NotFirstTime",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x84bfbab8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_AlchemistDeathCheck",
        "hash": "0x5d2cda3f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB6"
        ],
        "requirements": [
            {
                "connected_uid": "0x3331c008",
                "inverted": false,
                "source_resource": "OB6_002_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5d2cda40",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5d2cda41",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_BossTaunts",
        "hash": "0x68b142f1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB6"
        ],
        "requirements": [
            {
                "connected_uid": "0x3331c008",
                "inverted": false,
                "source_resource": "OB6_002_BossFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x3331c004",
                "inverted": true,
                "source_resource": "OB6_003_FightEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x68b142f2",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x68b142f3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_ObjectivePlatform",
        "hash": "0x40138a3b",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "OB4"
        ],
        "requirements": [
            {
                "connected_uid": "0x40138a50",
                "inverted": true,
                "source_resource": "OB4_ObjPlatform_Return_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x41b24b56",
                "inverted": true,
                "source_resource": "OB4_003_BossIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x40138a3c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x40138a3d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_001_PuzzleIntroduction",
        "hash": "0x41b2404f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4"
        ],
        "requirements": [
            {
                "connected_uid": "0x43160047",
                "inverted": true,
                "source_resource": "OB4_002_Puzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x41b24050",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_SCE_014_ElikaLeverSpeech",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x41b24051",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_002_Puzzle",
        "hash": "0x43160045",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "OB4"
        ],
        "requirements": [
            {
                "connected_uid": "0x4316033d",
                "inverted": true,
                "source_resource": "OB4_PuzzleChallenge",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x43160047",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_001_PuzzleIntroduction",
                        "inverted": true
                    },
                    {
                        "resource": "OB4_003_BossIntro",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x43160048",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_003_BossIntro",
        "hash": "0x41b24b4d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4"
        ],
        "requirements": [
            {
                "connected_uid": "0x43160047",
                "inverted": false,
                "source_resource": "OB4_002_Puzzle",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x41b24b56",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "OB4_004_BossEnd",
                        "inverted": false
                    },
                    {
                        "resource": "OB4_BossTaunts",
                        "inverted": false
                    },
                    {
                        "resource": "OB4_DeathCheck",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x41b24b57",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_004_BossEnd",
        "hash": "0x41b24b4e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "OB4"
        ],
        "requirements": [
            {
                "connected_uid": "0x41b24b56",
                "inverted": false,
                "source_resource": "OB4_003_BossIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x41b24b50",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_FertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "OB4_BossTaunts",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x41b24b59",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_SCE_014_ElikaLeverSpeech",
        "hash": "0x8a08269b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4"
        ],
        "requirements": [
            {
                "connected_uid": "0x41b24050",
                "inverted": false,
                "source_resource": "OB4_001_PuzzleIntroduction",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8a08269c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8a08269d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_SCE_SE_ArrivingInCirculation",
        "hash": "0x52af0000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x52af0002",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x52af0003",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_FertileGround",
        "hash": "0x83f91645",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4"
        ],
        "requirements": [
            {
                "connected_uid": "0x41b24b50",
                "inverted": false,
                "source_resource": "OB4_004_BossEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x83f91648",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x83f9164b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_SCE_PivotingPlatformState",
        "hash": "0x3eb98e8f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3eb98e90",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3eb98e91",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_BossTaunts",
        "hash": "0x67838000",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4"
        ],
        "requirements": [
            {
                "connected_uid": "0x41b24b56",
                "inverted": false,
                "source_resource": "OB4_003_BossIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x41b24b50",
                "inverted": true,
                "source_resource": "OB4_004_BossEnd",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x67838001",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x67838002",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_DeathCheck",
        "hash": "0x8baf8067",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4"
        ],
        "requirements": [
            {
                "connected_uid": "0x41b24b56",
                "inverted": false,
                "source_resource": "OB4_003_BossIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8baf8068",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8baf8069",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_FirstTimeInOB",
        "hash": "0x9c8a579e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB_FirstTimeInOB"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9c8a57a6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB_FirstTimeInOB",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x9c8a57a7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_FirstTimeInOB",
        "hash": "0x9c8a579f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB_FirstTimeInOB"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9c8a57a2",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB_FirstTimeInOB",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x9c8a57ad",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_FirstTimeInOB",
        "hash": "0x9c8a57a0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB_FirstTimeInOB"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9c8a57a4",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB_FirstTimeInOB",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x9c8a57af",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_ReturnInOB",
        "hash": "0x9c8a57b1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB_ReturnInOB"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9c8a57b5",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB_ReturnInOB",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x9c8a57ba",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_ReturnInOB",
        "hash": "0x9c8a57b2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB_ReturnInOB"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9c8a57b7",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB_ReturnInOB",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x9c8a57c0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_IntroToBubble_001",
        "hash": "0xf2e8004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf2e8005",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_AfterReboundFailed",
                        "inverted": true
                    },
                    {
                        "resource": "RC1_IntroPuzzle1",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf2e8006",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_SCE_SE_XXX_Circulation_Puzzle_Return",
        "hash": "0x4d1e6760",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf3446af",
                "inverted": false,
                "source_resource": "RC1_IntroPuzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4d1e6785",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4d1e6786",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_AfterReboundFailed",
        "hash": "0x5a6d347e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf2e8005",
                "inverted": true,
                "source_resource": "RC1_IntroToBubble_001",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5a6d347f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5a6d3480",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_Circulation_V1",
        "hash": "0xf2e800b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf2e8012",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_Circulation_V2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf2e8013",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_FertileGround",
        "hash": "0x1c40699b",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf3446eb",
                "inverted": false,
                "source_resource": "RC1_EndFight01",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x1c40699c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_Windmill",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x1c40699d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_Puzzle1",
        "hash": "0xf2e8014",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf3446af",
                "inverted": false,
                "source_resource": "RC1_IntroPuzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x11bf1835",
                "inverted": true,
                "source_resource": "RC1_SE_ShutdownPuzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf2e8016",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_SCE_SE_XXX_PUZ1ElikaHints_Return",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf2e8017",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_SCE_SE_XXX_PUZ1ElikaHints_Return",
        "hash": "0x4d1e6780",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0x4d1e6782",
                "inverted": false,
                "source_resource": "RC1_Windmill",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xf2e8016",
                "inverted": true,
                "source_resource": "RC1_Puzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4d1e6789",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x4d1e678a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_Fight01Intro",
        "hash": "0xf3446e1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf3446af",
                "inverted": false,
                "source_resource": "RC1_IntroPuzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf3446e3",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_EndFight01",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf3446e4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_EndFight01",
        "hash": "0xf3446ea",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf3446e3",
                "inverted": false,
                "source_resource": "RC1_Fight01Intro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf3446eb",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_FertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "RC1_Circulation_V2",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf3446ec",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_ObjectivePlatform",
        "hash": "0xf2e801c",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf34400f",
                "inverted": true,
                "source_resource": "RC1_ObjPlatform_Return_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xf3446af",
                "inverted": true,
                "source_resource": "RC1_IntroPuzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf344004",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xf344005",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_Circulation_V2",
        "hash": "0xf345b1d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf2e8012",
                "inverted": false,
                "source_resource": "RC1_Circulation_V1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xf3446eb",
                "inverted": true,
                "source_resource": "RC1_EndFight01",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf345b1e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xf345b1f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_IntroPuzzle1",
        "hash": "0xf344029",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf2e8005",
                "inverted": false,
                "source_resource": "RC1_IntroToBubble_001",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xf3446c6",
                "inverted": true,
                "source_resource": "RC1_IntroPuzzle2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf3446af",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC_TUT_ODD3",
                        "inverted": false
                    },
                    {
                        "resource": "RC1_SCE_SE_XXX_Circulation_Puzzle_Return",
                        "inverted": false
                    },
                    {
                        "resource": "RC1_Puzzle1",
                        "inverted": false
                    },
                    {
                        "resource": "RC1_Fight01Intro",
                        "inverted": false
                    },
                    {
                        "resource": "RC1_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "RC1_SCE_SE_CheckFirstRotation",
                        "inverted": false
                    },
                    {
                        "resource": "RC1_IntroPuzzle2",
                        "inverted": false
                    },
                    {
                        "resource": "RC1_Puzzle2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf3446b1",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_SCE_SE_CheckFirstRotation",
        "hash": "0x53a1402c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf3446af",
                "inverted": false,
                "source_resource": "RC1_IntroPuzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x53a1402d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x53a1402e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_IntroPuzzle2",
        "hash": "0xf3446c3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf3446af",
                "inverted": false,
                "source_resource": "RC1_IntroPuzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf3446c6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_IntroPuzzle1",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf3446c7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_Puzzle2",
        "hash": "0xf3446c4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [
            {
                "connected_uid": "0xf3446af",
                "inverted": false,
                "source_resource": "RC1_IntroPuzzle1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x11bf1987",
                "inverted": true,
                "source_resource": "RC1_SE_ShutDownPuzzle2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf3446c9",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xf3446ca",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_SE_ShutdownPuzzle1",
        "hash": "0x11bf1812",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x11bf1835",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_Puzzle1",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x11bf1836",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_SE_ShutDownPuzzle2",
        "hash": "0x11bf1986",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_Windmill"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x11bf1987",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_Puzzle2",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x11bf1988",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SE_Fight01Intro",
        "hash": "0x19461cf6",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x345ea351",
                "inverted": false,
                "source_resource": "RC2_CIN_FertileGroundDenied",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x19461cf7",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_CIN_EndOfFight01",
                        "inverted": false
                    },
                    {
                        "resource": "RC2_SE_PuzzleHBeamsRotation",
                        "inverted": false
                    },
                    {
                        "resource": "RC2_SE_GameplayWithHunterScreams",
                        "inverted": true
                    },
                    {
                        "resource": "RC2_SCE_SE_EnteringRotatingBeamRoom_OA_020",
                        "inverted": false
                    },
                    {
                        "resource": "RC2_BossFight_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x19461cf8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_CIN_EndOfFight01",
        "hash": "0x19680b59",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x19461cf7",
                "inverted": false,
                "source_resource": "RC2_SE_Fight01Intro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x19680b5a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_FertileGround",
                        "inverted": false
                    },
                    {
                        "resource": "RC2_SCE_ArrivingOnTop",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x19680b5b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_ObjectivePlatform",
        "hash": "0x198e90c5",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x198e90d1",
                "inverted": true,
                "source_resource": "RC2_ObjPlatform_Return_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x345ea351",
                "inverted": true,
                "source_resource": "RC2_CIN_FertileGroundDenied",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x198e90c6",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x198e90c7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SE_PuzzleHBeamsRotation",
        "hash": "0x37356781",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x19461cf7",
                "inverted": false,
                "source_resource": "RC2_SE_Fight01Intro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x37356782",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x37356783",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "R2_Circulation_V1",
        "hash": "0x198e91f4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x198e91f6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "R2_Circulation_V2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x198e91f7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "R2_Circulation_V2",
        "hash": "0x198e91f5",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x198e91f6",
                "inverted": false,
                "source_resource": "R2_Circulation_V1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x198e91f9",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x198e91fa",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_FertileGround",
        "hash": "0x198e929d",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x19680b5a",
                "inverted": false,
                "source_resource": "RC2_CIN_EndOfFight01",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x198e929f",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_Guardtower",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x198e92a0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SE_CloseBlockedArenaDoorCOL",
        "hash": "0x380782a4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x380782a6",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x380782a7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_CIN_FertileGroundDenied",
        "hash": "0x345ea350",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x345ea351",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_SE_Fight01Intro",
                        "inverted": false
                    },
                    {
                        "resource": "RC2_ObjectivePlatform",
                        "inverted": true
                    },
                    {
                        "resource": "RC2_SE_GameplayWithHunterScreams",
                        "inverted": false
                    },
                    {
                        "resource": "RC2_SE_GripFallSequence",
                        "inverted": false
                    },
                    {
                        "resource": "RC2_SE_UpongLandingAfterTrap",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x345ea352",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SE_GameplayWithHunterScreams",
        "hash": "0x8c398081",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x19461cf7",
                "inverted": true,
                "source_resource": "RC2_SE_Fight01Intro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x345ea351",
                "inverted": false,
                "source_resource": "RC2_CIN_FertileGroundDenied",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8c398082",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8c398083",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SE_GripFallSequence",
        "hash": "0x34690038",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x345ea351",
                "inverted": false,
                "source_resource": "RC2_CIN_FertileGroundDenied",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3469003b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_SCE_SE_EnteringRotatingBeamRoom_OA_020",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3469003c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_CIN_SpawnHunter",
        "hash": "0x5fa29fd1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5fa29fd2",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5fa29fd3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SCE_SE_EnteringRotatingBeamRoom_OA_020",
        "hash": "0x521bc05a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x3469003b",
                "inverted": false,
                "source_resource": "RC2_SE_GripFallSequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x19461cf7",
                "inverted": false,
                "source_resource": "RC2_SE_Fight01Intro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x521bc05b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x521bc05c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SE_UpongLandingAfterTrap",
        "hash": "0x8fc8818f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x345ea351",
                "inverted": false,
                "source_resource": "RC2_CIN_FertileGroundDenied",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8fc88190",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x8fc88191",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SCE_ArrivingOnTop",
        "hash": "0x927e0fa3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x19680b5a",
                "inverted": false,
                "source_resource": "RC2_CIN_EndOfFight01",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x927e0fa4",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x927e0fa5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_BossFight_LDD",
        "hash": "0xd4078ef1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_Guardtower"
        ],
        "requirements": [
            {
                "connected_uid": "0x19461cf7",
                "inverted": false,
                "source_resource": "RC2_SE_Fight01Intro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xd4078ef2",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xd4078ef3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC3_CamShake",
        "hash": "0x2e93a015",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2e93a019",
                "inverted": false,
                "source_resource": "RC3_DeathFinalSequence",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e93a017",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC13_ActivationHoleRocks",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2e93a01d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC3_SCE_SE_012_EnteringTheLair",
        "hash": "0x4c5240a3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC3_LAIR"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4c5240a5",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC3_FirstTeleport",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4c5240a6",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC3_FirstTeleport",
        "hash": "0x2e939c37",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x4c5240a5",
                "inverted": false,
                "source_resource": "RC3_SCE_SE_012_EnteringTheLair",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e939c39",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC3_SecondTeleport",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2e939c3a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC13_ActivationHoleRocks",
        "hash": "0x6eef583f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2e93a017",
                "inverted": false,
                "source_resource": "RC3_CamShake",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6eef5840",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC3_LAIR",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6eef5841",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC3_FinalFight",
        "hash": "0x2e93a00e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2e939e5a",
                "inverted": false,
                "source_resource": "RC3_SecondTeleport",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e93a010",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC3_DeathFinalSequence",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2e93a011",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC3_SecondTeleport",
        "hash": "0x2e939e59",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2e939c39",
                "inverted": false,
                "source_resource": "RC3_FirstTeleport",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e939e5a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC3_FinalFight",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2e939e5b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC3_DeathFinalSequence",
        "hash": "0x2e93a014",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC3_LAIR"
        ],
        "requirements": [
            {
                "connected_uid": "0x2e93a010",
                "inverted": false,
                "source_resource": "RC3_FinalFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2e93a019",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC3_CamShake",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2e93a01a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_SE_FirstTimeInCirculation",
        "hash": "0x5251cc37",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC_SE_FirstTimeInCirculation"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5251cc3a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC_SE_FirstTimeInCirculation",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5251cc3d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SE_FirstTimeInCirculation",
        "hash": "0x5251cc38",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC_SE_FirstTimeInCirculation"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5251cc3c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC_SE_FirstTimeInCirculation",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5251cc43",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_Circulation_V1",
        "hash": "0xcd30400d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xcc477807",
                "inverted": true,
                "source_resource": "RC5_SE_EndOfFight02_V1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcd30400e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_Circulation_V2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xcd30400f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_Circulation_V2",
        "hash": "0xcd58063a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xcd30400e",
                "inverted": false,
                "source_resource": "RC5_Circulation_V1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xcc477807",
                "inverted": true,
                "source_resource": "RC5_SE_EndOfFight02_V1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcd58063d",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xcd58063e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_SE_EndOfFight02_V1",
        "hash": "0xcc477806",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xc9328a8c",
                "inverted": false,
                "source_resource": "RC5_SE_Fight02Intro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcc477807",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_Circulation_V1",
                        "inverted": true
                    },
                    {
                        "resource": "RC5_Circulation_V2",
                        "inverted": true
                    },
                    {
                        "resource": "RC5_SE_FertileGround",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xcc477808",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_CIN_EndFight01_001",
        "hash": "0xc5ebc5c8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xc5ebc005",
                "inverted": false,
                "source_resource": "RC5_CIN_Fight01Intro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xc5ebc5c9",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_CIN_TrapsRelease",
                        "inverted": false
                    },
                    {
                        "resource": "RC5_SE_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xc5ebc5ca",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_SE_Fight02Intro",
        "hash": "0xc9328a88",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xcf978c56",
                "inverted": false,
                "source_resource": "RC5_SE_TremorReleases",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xc9328a8c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_SE_EndOfFight02_V1",
                        "inverted": false
                    },
                    {
                        "resource": "RC5_SE_HunterDeathCheck",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xc9328a8d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_CIN_TrapsRelease",
        "hash": "0xcf978c50",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xc5ebc5c9",
                "inverted": false,
                "source_resource": "RC5_CIN_EndFight01_001",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcf978c52",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_SE_DiedByTrapsComments",
                        "inverted": false
                    },
                    {
                        "resource": "RC5_CIN_HunterMovesAway",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xcf978c53",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_SE_TremorReleases",
        "hash": "0xcf978c51",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xe6e7e8b1",
                "inverted": false,
                "source_resource": "RC5_CIN_HunterMovesAway",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcf978c56",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_SE_Fight02Intro",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xcf978c57",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_SE_ObjectivePlatform",
        "hash": "0xd04e175f",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xc5ebc5c9",
                "inverted": true,
                "source_resource": "RC5_CIN_EndFight01_001",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0xcd580796",
                "inverted": true,
                "source_resource": "RC5_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xd04e1760",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xd04e1761",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_CIN_Fight01Intro",
        "hash": "0xc5ebc003",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xc5ebc005",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_CIN_EndFight01_001",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xc5ebc006",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_SE_HunterDeathCheck",
        "hash": "0x41205f8d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xc9328a8c",
                "inverted": false,
                "source_resource": "RC5_SE_Fight02Intro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x41206de4",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x41206de5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_SE_FertileGround",
        "hash": "0xb27a8006",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xcc477807",
                "inverted": false,
                "source_resource": "RC5_SE_EndOfFight02_V1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xb27a8007",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_Petra",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xb27a8008",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_SE_DiedByTrapsComments",
        "hash": "0xa9594002",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xcf978c52",
                "inverted": false,
                "source_resource": "RC5_CIN_TrapsRelease",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa9594003",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xa9594004",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_CIN_HunterMovesAway",
        "hash": "0xe6e7e8af",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_Petra"
        ],
        "requirements": [
            {
                "connected_uid": "0xcf978c52",
                "inverted": false,
                "source_resource": "RC5_CIN_TrapsRelease",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xe6e7e8b1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_SE_TremorReleases",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xe6e7e8b2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_ReturnInCirculation",
        "hash": "0xa7d16342",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC6_CityGate"
        ],
        "requirements": [
            {
                "connected_uid": "0x9aa48c5e",
                "inverted": false,
                "source_resource": "RC6_002_ArrivingInCirculation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xa7d16343",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xa7d16344",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_002_ArrivingInCirculation",
        "hash": "0x9aa48c5d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC6_CityGate"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x9aa48c5e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC6_ReturnInCirculation",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x9aa48c5f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_SE_HunterEscapes",
        "hash": "0x534edddf",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC6_CityGate"
        ],
        "requirements": [
            {
                "connected_uid": "0x26444011",
                "inverted": false,
                "source_resource": "RC6_004_Fight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x534edde1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC6_CityGate",
                        "inverted": true
                    },
                    {
                        "resource": "RC6_Heal_FirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "RC6_Heal_NotFirstTime",
                        "inverted": false
                    },
                    {
                        "resource": "RC6_SE_BOSS_FIGHT_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x534edde2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_004_Fight",
        "hash": "0x26444004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC6_CityGate"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x26444011",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC6_SE_HunterEscapes",
                        "inverted": false
                    },
                    {
                        "resource": "RC6_SE_BOSS_FIGHT_LDD",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x26444012",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_ObjectivePlatform",
        "hash": "0x2c8d2aca",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [
            "RC6_CityGate"
        ],
        "requirements": [
            {
                "connected_uid": "0x53c80033",
                "inverted": true,
                "source_resource": "RC6_ObjPlatform_FirstTime",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2c8d2ad1",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2c8d2ad2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_SE_BOSS_FIGHT_LDD",
        "hash": "0x5ed6224e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC6_CityGate"
        ],
        "requirements": [
            {
                "connected_uid": "0x26444011",
                "inverted": false,
                "source_resource": "RC6_004_Fight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x534edde1",
                "inverted": true,
                "source_resource": "RC6_SE_HunterEscapes",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5ed6224f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5ed62250",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_SE_Objective Platform",
        "hash": "0x2d6cc2e6",
        "type": "MissionItemList",
        "seqmode": null,
        "seqmode_name": "unknown(None)",
        "parents": [],
        "requirements": [
            {
                "connected_uid": "0x2dc72cdc",
                "inverted": true,
                "source_resource": "RC4_SE_Objective Platform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2d6cc2f3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2d6cc2f4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_SE_Fight",
        "hash": "0x2d6cc2e7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "RC4_Terrace"
        ],
        "requirements": [
            {
                "connected_uid": "0x58598254",
                "inverted": true,
                "source_resource": "RC4_SCE_CIN_004",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x58e55dc9",
                "inverted": false,
                "source_resource": "RC4_SCE_SE_FlyTalk_OA_014_Part2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2d6cc2fa",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2d6cc2fb",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_SCE_ODD_013_Manager",
        "hash": "0x596a80b3",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_Terrace"
        ],
        "requirements": [
            {
                "connected_uid": "0x58598254",
                "inverted": false,
                "source_resource": "RC4_SCE_CIN_004",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x596a80b4",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x596a80b5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_SCE_CIN_FightIntro",
        "hash": "0x5859824b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_Terrace"
        ],
        "requirements": [
            {
                "connected_uid": "0x58e55dc9",
                "inverted": false,
                "source_resource": "RC4_SCE_SE_FlyTalk_OA_014_Part2",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x58598251",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC4_SCE_CIN_004",
                        "inverted": false
                    },
                    {
                        "resource": "RC4_HunterDeathCheck",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x58598250",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_SCE_CIN_004",
        "hash": "0x5859824e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_Terrace"
        ],
        "requirements": [
            {
                "connected_uid": "0x58598251",
                "inverted": false,
                "source_resource": "RC4_SCE_CIN_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x58598254",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC4_SE_Fight",
                        "inverted": true
                    },
                    {
                        "resource": "RC4_SCE_ODD_013_Manager",
                        "inverted": false
                    },
                    {
                        "resource": "RC4_FertileGround",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x58598255",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_FertileGround",
        "hash": "0x58599190",
        "type": "MissionItemFertileGround",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_Terrace"
        ],
        "requirements": [
            {
                "connected_uid": "0x58598254",
                "inverted": false,
                "source_resource": "RC4_SCE_CIN_004",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x58599191",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC4_Terrace",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x58599192",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_SCE_SE_FlyTalk_OA_014_Part2",
        "hash": "0x58e55dc7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_Terrace"
        ],
        "requirements": [
            {
                "connected_uid": "0x7b120eec",
                "inverted": false,
                "source_resource": "RC4_SCE_SE_FlyTalk_OA_014_Part1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x58e55dc9",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC4_SE_Fight",
                        "inverted": false
                    },
                    {
                        "resource": "RC4_SCE_CIN_FightIntro",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x58e55dca",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_HunterDeathCheck",
        "hash": "0x3b47e779",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_Terrace"
        ],
        "requirements": [
            {
                "connected_uid": "0x58598251",
                "inverted": false,
                "source_resource": "RC4_SCE_CIN_FightIntro",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3b47e77a",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3b47e77b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_SCE_SE_FlyTalk_OA_014_Part1",
        "hash": "0x7b120ec2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_Terrace"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7b120eec",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC4_SCE_SE_FlyTalk_OA_014_Part2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x7b120eed",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x2dae98bd",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57e08e2a",
                "inverted": true,
                "source_resource": "HC1_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57e08e28",
                "inverted": false,
                "source_resource": "HC1_OBJ_Platform_PowerCheck",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2dae98cc",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2dae98d1",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x2dae98be",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57e08e2a",
                "inverted": false,
                "source_resource": "HC1_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2dae98ca",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_ObjPlatform_Return_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2dae98d8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ObjPlatform_Return_PlateInactive",
        "hash": "0x2dae98bf",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x2dae98cc",
                "inverted": false,
                "source_resource": "HC1_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57e08e2a",
                "inverted": true,
                "source_resource": "HC1_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2dae98ce",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2dae98da",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_ObjPlatform_Return_PlateActive",
        "hash": "0x2dae98c0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x2dae98ca",
                "inverted": false,
                "source_resource": "HC1_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2dae98d0",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2dae98dc",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC1_OBJ_Platform_PowerCheck",
        "hash": "0x57e08e26",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC1_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x57e08e2a",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC1_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "HC1_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    },
                    {
                        "resource": "HC1_ObjPlatform_Return_PlateInactive",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x57e08e28",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "HC1_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x3386c033",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57e0a693",
                "inverted": true,
                "source_resource": "HC2_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57e0a691",
                "inverted": false,
                "source_resource": "HC2_OBJ_Platform_PowerCheck",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3386c034",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3386c035",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x3386c03b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57e0a693",
                "inverted": false,
                "source_resource": "HC2_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3386c03d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_ObjPlatform_Return_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3386c03e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_ObjPlatform_Return_PlateInactive",
        "hash": "0x3386c03c",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x3386c034",
                "inverted": false,
                "source_resource": "HC2_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57e0a693",
                "inverted": true,
                "source_resource": "HC2_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3386c03f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3386c040",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_ObjPlatform_Return_PlateActive",
        "hash": "0x3386c041",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x3386c03d",
                "inverted": false,
                "source_resource": "HC2_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3386c042",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3386c043",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC2_OBJ_Platform_PowerCheck",
        "hash": "0x57e0a68f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC2_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x57e0a693",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC2_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "HC2_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    },
                    {
                        "resource": "HC2_ObjPlatform_Return_PlateInactive",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x57e0a691",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "HC2_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_ObjectivePlatform_FirstTime_NotFirstHealing",
        "hash": "0x91be7d31",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6_SCE_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x91be7d34",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC6_SCE_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x91be7d35",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC6_ObjectivePlatform_OnReturn",
        "hash": "0x3c9736fd",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC6_SCE_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c973702",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3c97370b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x46d94098",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x58064c0b",
                "inverted": true,
                "source_resource": "HC5_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x58064c09",
                "inverted": false,
                "source_resource": "HC5_OBJ_Platform_PowerCheck",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x46d940a8",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x46d940b1",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x46d94099",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x58064c0b",
                "inverted": false,
                "source_resource": "HC5_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x46d940a6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_ObjPlatform_Return_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x46d940b8",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_ObjPlatform_Return_PlateInactive",
        "hash": "0x46d9409a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x46d940a8",
                "inverted": false,
                "source_resource": "HC5_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x58064c0b",
                "inverted": true,
                "source_resource": "HC5_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x46d940aa",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x46d940ba",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_ObjPlatform_Return_PlateActive",
        "hash": "0x46d9409b",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x46d940a6",
                "inverted": false,
                "source_resource": "HC5_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x46d940ac",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x46d940bd",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC5_OBJ_Platform_PowerCheck",
        "hash": "0x58064c05",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC5_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x58064c0b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC5_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "HC5_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    },
                    {
                        "resource": "HC5_ObjPlatform_Return_PlateInactive",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x58064c09",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "HC5_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x493ec111",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_Objective_Platform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57e0bd48",
                "inverted": true,
                "source_resource": "HC4_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57e0bd46",
                "inverted": false,
                "source_resource": "HC4_OBJ_Platform_PowerCheck",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec119",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x493ec121",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_ObjPlatform_Return_PlateInactive",
        "hash": "0x493ec112",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_Objective_Platform"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec119",
                "inverted": false,
                "source_resource": "HC4_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57e0bd48",
                "inverted": true,
                "source_resource": "HC4_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec120",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x493ec125",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x493ec113",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_Objective_Platform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57e0bd48",
                "inverted": false,
                "source_resource": "HC4_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec11b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_ObjPlatform_Return_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x493ec128",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_ObjPlatform_Return_PlateActive",
        "hash": "0x493ec114",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_Objective_Platform"
        ],
        "requirements": [
            {
                "connected_uid": "0x493ec11b",
                "inverted": false,
                "source_resource": "HC4_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x493ec11e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_Objective_Platform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x493ec12a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "HC4_OBJ_Platform_PowerCheck",
        "hash": "0x57e0bd40",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "HC4_Objective_Platform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x57e0bd48",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "HC4_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "HC4_ObjPlatform_Return_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "HC4_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x57e0bd46",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "HC4_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_SCE_SE_Objectiveplatform_V1",
        "hash": "0x6c5a283",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a300176",
                "inverted": true,
                "source_resource": "LR1_Pr_Power_Monitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6c5a28f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6c5a290",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_Pr_Power_Monitor",
        "hash": "0x5a300174",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5a300176",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR1_SCE_SE_Objectiveplatform_V1",
                        "inverted": true
                    },
                    {
                        "resource": "LR1_SCE_SE_Objectiveplatform_V3",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5a30017a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_SCE_SE_Objectiveplatform_V3",
        "hash": "0x6c5a285",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a300176",
                "inverted": false,
                "source_resource": "LR1_Pr_Power_Monitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6c5a296",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR1_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6c5a297",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_SE_013_FightHints",
        "hash": "0x5c3a13e4",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1_WarriorFight_Sequence"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5c3a13e6",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x5c3a13e7",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_SE_WarriorFight",
        "hash": "0x52884f11",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1_WarriorFight_Sequence"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x52884f19",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR1_SCE_LDD",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x52884f23",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_CIN_006_1stPillar_FacialAnim",
        "hash": "0x52884f12",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1_WarriorFight_Sequence"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x52884f26",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR1_CIN_007_2ndPillar_FacialAnim",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x52884f27",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_CIN_007_2ndPillar_FacialAnim",
        "hash": "0x52884f13",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1_WarriorFight_Sequence"
        ],
        "requirements": [
            {
                "connected_uid": "0x52884f26",
                "inverted": false,
                "source_resource": "LR1_CIN_006_1stPillar_FacialAnim",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x52884f29",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x52884f2a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR1_SCE_LDD",
        "hash": "0x6891d68f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR1_WarriorFight_Sequence"
        ],
        "requirements": [
            {
                "connected_uid": "0x52884f19",
                "inverted": true,
                "source_resource": "LR1_SE_WarriorFight",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6891d690",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x6891d691",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR6_CIN_002_ObjPlat_1stTimeABubbleHealed",
        "hash": "0x59ca4011",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR6_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x59ca4018",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR6_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x59ca4021",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x3c378086",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR4_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a30006c",
                "inverted": true,
                "source_resource": "LR4_Pr_Power_Monitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c378096",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3c3780aa",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x3c378087",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR4_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a30006c",
                "inverted": false,
                "source_resource": "LR4_Pr_Power_Monitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3c378098",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3c3780b2",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_Pr_Power_Monitor",
        "hash": "0x5a30006a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR4_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5a30006c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR4_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "LR4_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5a30006f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR4_ODD_003_ArrivingInCirculation_1stTime",
        "hash": "0x86f49493",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR4_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x86f49494",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x86f49495",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x3e11c060",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a3000d1",
                "inverted": true,
                "source_resource": "LR2_Pr_Power_Monitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e11c06e",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x3e11c06f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x3e11c061",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a3000d1",
                "inverted": false,
                "source_resource": "LR2_Pr_Power_Monitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x3e11c071",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x3e11c077",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_Pr_Power_Monitor",
        "hash": "0x5a3000cd",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5a3000d1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "LR2_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5a3000d4",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_ODD_003_ArrivingInCirculation_1stTime",
        "hash": "0x86a44031",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x86a44032",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x86a44033",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_CIN_003_1stPuzzlePlatform",
        "hash": "0x50c411e7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2_Puzzles_Challenges"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50c411eb",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_CIN_005_CrankActivation",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x50c411ec",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_CIN_005_CrankActivation",
        "hash": "0x50c41220",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2_Puzzles_Challenges"
        ],
        "requirements": [
            {
                "connected_uid": "0x50c411eb",
                "inverted": false,
                "source_resource": "LR2_CIN_003_1stPuzzlePlatform",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x50c41221",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_SE_019_4thPuzzle",
                        "inverted": false
                    },
                    {
                        "resource": "LR2_ODD_4thPuzzleCrankDone",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x50c41222",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_SE_019_4thPuzzle",
        "hash": "0x80b8000a",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2_Puzzles_Challenges"
        ],
        "requirements": [
            {
                "connected_uid": "0x50c41221",
                "inverted": false,
                "source_resource": "LR2_CIN_005_CrankActivation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x80b8000c",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x80b8000d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_ODD_4thPuzzleCrankDone",
        "hash": "0x6e9bdaab",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2_Puzzles_Challenges"
        ],
        "requirements": [
            {
                "connected_uid": "0x50c41221",
                "inverted": false,
                "source_resource": "LR2_CIN_005_CrankActivation",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x6e9bdacb",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_Puzzles_Challenges",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x6e9bdacc",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR2_Failsafe",
        "hash": "0x8bc9e809",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR2_Puzzles_Challenges"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x8c1182c2",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR2_Puzzles_Challenges",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x8c1182c3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x45628fa1",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a22401c",
                "inverted": true,
                "source_resource": "LR5_Pr_Power_Monitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x45628fab",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x45628fac",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x45628fa2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x5a22401c",
                "inverted": false,
                "source_resource": "LR5_Pr_Power_Monitor",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x45628fb2",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR5_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x45628fb3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "LR5_Pr_Power_Monitor",
        "hash": "0x5a224019",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "LR5_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x5a22401c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "LR5_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "LR5_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x5a224020",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x7c14046",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57d31168",
                "inverted": true,
                "source_resource": "OB1_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57d31166",
                "inverted": false,
                "source_resource": "OB1_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7c1405d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB1_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x7c14062",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x7c14047",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "OB1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57d31168",
                "inverted": false,
                "source_resource": "OB1_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7c1405b",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB1_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x7c14067",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_ObjPlatform_Return_PlateInactive",
        "hash": "0x7c14048",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x7c1405d",
                "inverted": false,
                "source_resource": "OB1_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57d31168",
                "inverted": true,
                "source_resource": "OB1_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x7c1405f",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x7c14069",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB1_SCE_OBJ_Platform_PowerCheck",
        "hash": "0x57d31164",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB1_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x57d31168",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB1_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "OB1_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    },
                    {
                        "resource": "OB1_ObjPlatform_Return_PlateInactive",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x57d31166",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "OB1_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x16e740ef",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e740fd",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB2_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x16e74106",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x16e740f0",
        "type": "MissionItemSceneSequencer",
        "seqmode": 1,
        "seqmode_name": "Serial",
        "parents": [
            "OB2_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e740fb",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB2_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x16e7410a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB2_ObjPlatform_Return_PlateInactive",
        "hash": "0x16e740f2",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x16e740fd",
                "inverted": false,
                "source_resource": "OB2_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x16e740ff",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x16e7410b",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x263bc003",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x263bc007",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB5_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x263bc008",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x263bc004",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x263bc00e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB5_ObjPlatform_Return_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x263bc00f",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_ObjPlatform_Return_PlateInactive",
        "hash": "0x263bc005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x263bc007",
                "inverted": false,
                "source_resource": "OB5_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x263bc010",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x263bc011",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB5_ObjPlatform_Return_PlateActive",
        "hash": "0x263bc006",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB5_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x263bc00e",
                "inverted": false,
                "source_resource": "OB5_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x263bc012",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB5_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x263bc013",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB6_ObjPlatform_FirstTime_BubbleHealed",
        "hash": "0x85e20011",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB6_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x85e20013",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB6_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x85e20014",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x40138a42",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x882b841a",
                "inverted": false,
                "source_resource": "OB4_SCE_SE_ObjPlat_PowerCheck",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            },
            {
                "connected_uid": "0x882b841c",
                "inverted": true,
                "source_resource": "OB4_SCE_SE_ObjPlat_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x40138a4e",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x40138a53",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_ObjPlatform_Return_PlateInactive",
        "hash": "0x40138a43",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x40138a4e",
                "inverted": false,
                "source_resource": "OB4_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x882b841c",
                "inverted": true,
                "source_resource": "OB4_SCE_SE_ObjPlat_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x40138a52",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x40138a5a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_ObjPlatform_Return_PlateActive",
        "hash": "0x40138a44",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x40138a4c",
                "inverted": false,
                "source_resource": "OB4_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x40138a50",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x40138a5d",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x40138a45",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x882b841c",
                "inverted": false,
                "source_resource": "OB4_SCE_SE_ObjPlat_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x40138a4c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_ObjPlatform_Return_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x40138a60",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_SCE_SE_ObjPlat_PowerCheck",
        "hash": "0x882b8417",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x882b841c",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "OB4_ObjPlatform_Return_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "OB4_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x882b841a",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "OB4_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_PuzzleChallenge",
        "hash": "0x43160339",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_002_Puzzle"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x4316033d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_002_Puzzle",
                        "inverted": true
                    },
                    {
                        "resource": "OB4_PuzzleReturn",
                        "inverted": true
                    },
                    {
                        "resource": "OB4_PuzzleLongBeamHint",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x4316033e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_PuzzleReturn",
        "hash": "0x432ec005",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_002_Puzzle"
        ],
        "requirements": [
            {
                "connected_uid": "0x4316033d",
                "inverted": true,
                "source_resource": "OB4_PuzzleChallenge",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x432ec009",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x432ec00a",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_PuzzleLeverHint",
        "hash": "0x432ec006",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_002_Puzzle"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x432ec00d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "OB4_SCE_SE_022_MainPlatformCrank",
                        "inverted": false
                    },
                    {
                        "resource": "OB4_PuzzleLongBeamHint",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x432ec00e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_SCE_SE_022_MainPlatformCrank",
        "hash": "0x58794bab",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_002_Puzzle"
        ],
        "requirements": [
            {
                "connected_uid": "0x432ec00d",
                "inverted": false,
                "source_resource": "OB4_PuzzleLeverHint",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x58794bac",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x58794bad",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "OB4_PuzzleLongBeamHint",
        "hash": "0x432ec013",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "OB4_002_Puzzle"
        ],
        "requirements": [
            {
                "connected_uid": "0x4316033d",
                "inverted": true,
                "source_resource": "OB4_PuzzleChallenge",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x432ec00d",
                "inverted": false,
                "source_resource": "OB4_PuzzleLeverHint",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x432ec017",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x432ec018",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0xf2e801d",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57b0e645",
                "inverted": false,
                "source_resource": "RC1_SCE_OBJ_Plaform_PowerCheck",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            },
            {
                "connected_uid": "0x57b0e647",
                "inverted": true,
                "source_resource": "RC1_SCE_OBJ_Plaform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf344006",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf344007",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_ObjPlatform_Return_PlateInactive",
        "hash": "0xf2e801e",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0xf344006",
                "inverted": false,
                "source_resource": "RC1_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57b0e647",
                "inverted": true,
                "source_resource": "RC1_SCE_OBJ_Plaform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf34400b",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xf34400c",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_ObjPlatform_FirstTime_PlateActive",
        "hash": "0xf2e801f",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57b0e647",
                "inverted": false,
                "source_resource": "RC1_SCE_OBJ_Plaform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf34400d",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_ObjPlatform_Return_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf34400e",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_ObjPlatform_Return_PlateActive",
        "hash": "0xf2e8020",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0xf34400d",
                "inverted": false,
                "source_resource": "RC1_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xf34400f",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xf344010",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC1_SCE_OBJ_Plaform_PowerCheck",
        "hash": "0x57b0e613",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC1_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x57b0e647",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC1_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "RC1_ObjPlatform_Return_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "RC1_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x57b0e645",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "RC1_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0x198e90c8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57b0f275",
                "inverted": false,
                "source_resource": "RC2_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            },
            {
                "connected_uid": "0x57b0f273",
                "inverted": true,
                "source_resource": "RC2_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x198e90d8",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_ObjPlatform_Return_PlateInactive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x198e90d9",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_ObjPlatform_FirstTime_PlateActive",
        "hash": "0x198e90c9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x57b0f273",
                "inverted": false,
                "source_resource": "RC2_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x198e90d6",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_ObjPlatform_Return_PlateActive",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x198e90de",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_ObjPlatform_Return_PlateInactive",
        "hash": "0x198e90ca",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x198e90d8",
                "inverted": false,
                "source_resource": "RC2_ObjPlatform_FirstTime_PlateInactive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x57b0f273",
                "inverted": true,
                "source_resource": "RC2_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x198e90d3",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x198e90e0",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_ObjPlatform_Return_PlateActive",
        "hash": "0x198e90cb",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_ObjectivePlatform"
        ],
        "requirements": [
            {
                "connected_uid": "0x198e90d6",
                "inverted": false,
                "source_resource": "RC2_ObjPlatform_FirstTime_PlateActive",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x198e90d1",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x198e90e3",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC2_SCE_OBJ_Platform_PowerCheck",
        "hash": "0x57b0f258",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC2_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x57b0f273",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC2_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": true
                    },
                    {
                        "resource": "RC2_ObjPlatform_FirstTime_PlateActive",
                        "inverted": false
                    },
                    {
                        "resource": "RC2_ObjPlatform_Return_PlateInactive",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x57b0f275",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "RC2_ObjPlatform_FirstTime_PlateInactive",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_ObjPlatform_FirstTime_PlateInactive",
        "hash": "0xcd580752",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_SE_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcd580754",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0xcd580755",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC5_ObjPlatform_FirstTime_PlateActive",
        "hash": "0xcd580791",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC5_SE_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0xcd580796",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC5_SE_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0xcd580798",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC6_ObjPlatform_FirstTime",
        "hash": "0x53c80031",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC6_ObjectivePlatform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x53c80033",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC6_ObjectivePlatform",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x53c80035",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_OBjPlatform_FirstTime_PlateInactive_V1",
        "hash": "0x2dc72cd7",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_SE_Objective Platform"
        ],
        "requirements": [
            {
                "connected_uid": "0x56d60b6a",
                "inverted": false,
                "source_resource": "RC4_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 1,
                "source_port_type": 2,
                "source_port_type_name": "Normal"
            },
            {
                "connected_uid": "0x56d60b67",
                "inverted": true,
                "source_resource": "RC4_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2dc72cde",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC4_OBjPlatform_Return_PlateInactive_V2",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2dc72ce5",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_OBjPlatform_FirstTime_PlateActive_V3",
        "hash": "0x2dc72cd8",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_SE_Objective Platform"
        ],
        "requirements": [
            {
                "connected_uid": "0x56d60b67",
                "inverted": false,
                "source_resource": "RC4_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2dc72ce0",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC4_OBjPlatform_Return_PlateActive_V4",
                        "inverted": false
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x2dc72cec",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_OBjPlatform_Return_PlateInactive_V2",
        "hash": "0x2dc72cd9",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_SE_Objective Platform"
        ],
        "requirements": [
            {
                "connected_uid": "0x2dc72cde",
                "inverted": false,
                "source_resource": "RC4_OBjPlatform_FirstTime_PlateInactive_V1",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            },
            {
                "connected_uid": "0x56d60b67",
                "inverted": true,
                "source_resource": "RC4_SCE_OBJ_Platform_PowerCheck",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 2,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2dc72ce2",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2dc72cee",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_OBjPlatform_Return_PlateActive_V4",
        "hash": "0x2dc72cda",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_SE_Objective Platform"
        ],
        "requirements": [
            {
                "connected_uid": "0x2dc72ce0",
                "inverted": false,
                "source_resource": "RC4_OBjPlatform_FirstTime_PlateActive_V3",
                "source_port_index": 0,
                "source_port_type": 1,
                "source_port_type_name": "Completed"
            }
        ],
        "n_ports_in": 1,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x2dc72ce4",
                "type": 1,
                "type_name": "Completed",
                "consumers": []
            },
            {
                "index": 1,
                "uid": "0x2dc72cf1",
                "type": 2,
                "type_name": "Normal",
                "consumers": []
            }
        ],
        "n_ports_out": 2
    },
    {
        "name": "RC4_SCE_OBJ_Platform_PowerCheck",
        "hash": "0x56d60b65",
        "type": "MissionItemSceneSequencer",
        "seqmode": 0,
        "seqmode_name": "Concurrent",
        "parents": [
            "RC4_SE_Objective Platform"
        ],
        "requirements": [],
        "n_ports_in": 0,
        "ports_out": [
            {
                "index": 0,
                "uid": "0x56d60b67",
                "type": 1,
                "type_name": "Completed",
                "consumers": [
                    {
                        "resource": "RC4_OBjPlatform_FirstTime_PlateInactive_V1",
                        "inverted": true
                    },
                    {
                        "resource": "RC4_OBjPlatform_FirstTime_PlateActive_V3",
                        "inverted": false
                    },
                    {
                        "resource": "RC4_OBjPlatform_Return_PlateInactive_V2",
                        "inverted": true
                    }
                ]
            },
            {
                "index": 1,
                "uid": "0x56d60b6a",
                "type": 2,
                "type_name": "Normal",
                "consumers": [
                    {
                        "resource": "RC4_OBjPlatform_FirstTime_PlateInactive_V1",
                        "inverted": false
                    }
                ]
            }
        ],
        "n_ports_out": 2
    }
];

export default missionItems;