// popsave.js -- port of pop_save.py's record-scanning/decoding layer (everything below the
// header/blob1-decompression layer in popsave_header.js). Takes a Schema instance (schema.js) as
// a constructor dependency instead of reaching for a module-level singleton, so this stays
// directly testable.
'use strict';

import { BinReader, findU32, bytesEqual } from './binreader.js';
import { crc32 } from './crc32.js';
import { ROOT_TYPEHASH, COMPOSITE_TYPEHASH } from './popsave_header.js';

function h(name) { return crc32(name) >>> 0; }

// ---- ENUM_NAMES ----
export const ENUM_NAMES = {
    FertileGroundStatus: { 0: 'FertileGroundStatus_Available', 1: 'FertileGroundStatus_Healed', 2: 'FertileGroundStatus_Locked' },
    MIState: { 0: 'MissionItemState_Locked', 1: 'MissionItemState_WaitingForData', 2: 'MissionItemState_Unlocked', 3: 'MissionItemState_Completed' },
    CurrentPopGameStage: { 0: 'Beginning', 1: 'TutorialDone', 2: 'TreeOfLifeEvent', 3: 'HealingFertileGrounds', 4: 'KilledAriman', 5: 'BroughtBackElika' },
    CurrentAct: { 0: 'MissionActType_Invalid', 1: 'MissionActType_Act1', 2: 'MissionActType_Act2', 3: 'MissionActType_Act3' },
    BondState: { 0: 'STRANGERS', 1: 'ALLIES', 2: 'COMPANIONS', 3: 'BONDSTATE_MAXIMUM' },
    SpecialGamePlayContext: { 0: 'SpecialGamePlayContext_None', 1: 'SpecialGamePlayContext_Puzzle', 2: 'SpecialGamePlayContext_Challenge' },
    TrapType: { 0: 'Tremor', 1: 'Geyser', 2: 'Swarm', 3: 'GooGaz', 4: 'Poison', 5: 'InvalidTrap' },
    MagicPlateComponentType: { 0: 'MagicType_Invalid', 1: 'MagicType_Rebound', 2: 'MagicType_Target', 3: 'MagicType_Grapple', 4: 'MagicType_Dash', 5: 'MagicType_FlyOnBeam' },
};
export function enumName(fieldName, value) {
    const table = ENUM_NAMES[fieldName];
    if (!table) return null;
    const nm = table[value];
    return nm !== undefined ? nm : null;
}

export const BITMASK_FIELDS = new Set(['AllCombosUsedAtLeastOnce', 'ActiveSlotData']);

// ---- CONFIRMED_VALUE_OFFSETS: hash -> [relOffset, fmt] ----
const CONFIRMED_VALUE_OFFSETS = new Map([
    [h('CurrentPopGameStage'), [473, 'u32']], [h('NumberCompletedFight'), [477, 'u32']],
    [h('SparkleCount'), [481, 'u32']], [h('LastPopEnvironmentAreaPortalID'), [485, 'u32']],
    [h('LastPopEnvironmentAreaPortalBlendingRatio'), [489, 'f32']],
    [h('StateOffensiveLocked'), [541, 'u8']], [h('StateDefensiveLocked'), [542, 'u8']],
    [h('StateGooLocked'), [543, 'u8']], [h('StateHealthRegenLocked'), [544, 'u8']],
    [h('StateDisruptLocked'), [545, 'u8']], [h('StateGooSpitLocked'), [546, 'u8']],
    [h('StatePainLocked'), [547, 'u8']], [h('ComplexAttackWeaponLocked'), [548, 'u8']],
    [h('ComplexAttackGooLocked'), [549, 'u8']], [h('ComplexAttackAcrobaticLocked'), [550, 'u8']],
    [h('ComplexAttackGrabLocked'), [551, 'u8']], [h('DeflectLocked'), [552, 'u8']],
    [h('ModifierPushBackLocked'), [553, 'u8']], [h('ModifierBlockBreakerLocked'), [554, 'u8']],
    [h('ModifierKnockDownLocked'), [555, 'u8']], [h('SpecialAbilityHunterLocked'), [556, 'u8']],
    [h('SpecialAbilityWarriorLocked'), [557, 'u8']], [h('SpecialAbilityConcubineLocked'), [558, 'u8']],
    [h('SpecialAbilityAlchemistLocked'), [559, 'u8']],
    [h('StaminaBonusHunter'), [560, 'u32']], [h('StaminaBonusWarrior'), [564, 'u32']],
    [h('StaminaBonusConcubine'), [568, 'u32']], [h('StaminaBonusAlchemist'), [572, 'u32']],
    [h('StaminaBonusMourningKing'), [576, 'u32']], [h('StaminaBonusMourningKingCorrupted'), [580, 'u32']],
    [h('StaminaBonusMonsterX'), [584, 'u32']], [h('StaminaBonusGuard'), [588, 'u32']],
    [h('MIState'), [85, 'u8']], [h('WasEverCompleted'), [89, 'u8']], [h('WasEverPlayed'), [90, 'u8']],
    [h('TargetSectionID'), [465, 'u32']], [h('SpecialGamePlayContext'), [477, 'u32']],
    [h('SavedDivisionID'), [609, 'u32']], [h('SavedCorruptionZoneID'), [613, 'u32']],
    [h('CameraFOV'), [649, 'f32']], [h('CurrentFightCount'), [653, 'u32']],
    [h('CurrentAct'), [657, 'u32']], [h('BondState'), [661, 'u32']],
    [h('CurrentPortalSoundReverbSetObjectID'), [47, 'u32']],
]);

const MULTI_COMPONENT_OFFSETS = new Map([
    [h('MousePosition'), [469, [['X', 0, 'f32'], ['Y', 4, 'f32']]]],
    [h('PrinceMatrix'), [481, [['X', 48, 'f32'], ['Y', 52, 'f32'], ['Z', 56, 'f32']]]],
    [h('LoverMatrix'), [545, [['X', 48, 'f32'], ['Y', 52, 'f32'], ['Z', 56, 'f32']]]],
    [h('CameraPos'), [617, [['X', 0, 'f32'], ['Y', 4, 'f32'], ['Z', 8, 'f32']]]],
    [h('CameraOrientation'), [633, [['X', 0, 'f32'], ['Y', 4, 'f32'], ['Z', 8, 'f32'], ['W', 12, 'f32']]]],
]);

const ACTIVE_ODD_TAGS_COUNT_OFFSET = 665;
const POP_GPM_TAIL_LEN = 75;
const POP_GPM_TAIL_OFFSETS = new Map([
    [h('SavePrinceDeathHeight'), [0, 'u8']], [h('SavePrinceDeathHeightValue'), [1, 'f32']],
    [h('SaveElikaFollowUpActive'), [5, 'u8']], [h('SaveElikaActionCoopJump'), [6, 'u8']],
    [h('SaveElikaActionMagicPlate'), [7, 'u8']], [h('SaveElikaActionCompass'), [8, 'u8']],
    [h('SaveElikaUnderPersistantScenaricControl'), [9, 'u8']], [h('SaveElikaIsCaptured'), [10, 'u8']],
]);
const SAVE_ELIKA_CAPTURED_POS = h('SaveElikaCapturedPos');
const ACTIVE_ODD_TAGS_HASH = h('ActiveODDTags');

const ACHIEVEMENTS_TRACKING_DATA_FIELDS = [
    ['TotalCoopJumps', 493, 'u32'], ['TotalPrinceDeflects', 497, 'u32'], ['TotalPrinceBlocks', 501, 'u32'],
    ['TotalDodgeWarriorAttackCount', 505, 's8'], ['DefeatedConcubineNoGrab', 506, 'u8'],
    ['DefeatedAlchemistNoAcro', 507, 'u8'], ['AllCombosUsedAtLeastOnce', 508, 'u64'],
    ['SaveMeCount', 516, 'u32'], ['TotalPlayingTimeInSec', 520, 'f32'], ['TotalHealingCompleted', 524, 'u32'],
    ['SpeedkillCountAchievement', 528, 'u32'], ['DialogueWithElikaCount', 532, 'u32'],
    ['CompassCount', 536, 'u32'], ['TotalEnemiesThrown', 540, 'u32'],
];

const SECTION_GAME_DATA_MAX_SIZE = 150;
const SECTION_GAME_DATA_TAIL_OFFSETS = new Map([
    [h('NbTimeVisited'), [-16, 'u32']], [h('NbSparklesCollected'), [-12, 'u32']],
    [h('FertileGroundStatus'), [-8, 'u32']], [h('NbFightsDone'), [-4, 'u32']],
]);
const CORRUPTION_ZONE_MAX_SIZE = 60;
const CORRUPTION_ZONE_TAIL_OFFSETS = new Map([[h('CorruptionLevel'), [-1, 's8']]]);
const IGRAPH_RULE_MAX_SIZE = 60;
const IGRAPH_RULE_TAIL_OFFSETS = new Map([[h('RuntimeEnabled'), [-1, 'u8']]]);
const TAIL_OFFSET_TABLES = [
    [SECTION_GAME_DATA_TAIL_OFFSETS, SECTION_GAME_DATA_MAX_SIZE],
    [CORRUPTION_ZONE_TAIL_OFFSETS, CORRUPTION_ZONE_MAX_SIZE],
    [IGRAPH_RULE_TAIL_OFFSETS, IGRAPH_RULE_MAX_SIZE],
];
const SECTION_GAME_DATA_BLOB_LEN = 16;
const SECTION_GAME_DATA_BLOB_FIELDS = new Map([
    [h('NbTimeVisited'), [0, 'u32']], [h('NbSparklesCollected'), [4, 'u32']],
    [h('FertileGroundStatus'), [8, 'u32']], [h('NbFightsDone'), [12, 'u32']],
]);

const FMT_SIZE = { u8: 1, s8: 1, u16: 2, u32: 4, f32: 4, u64: 8 };

function readFmt(r, off, fmt) {
    switch (fmt) {
        case 'u8': return r.u8(off);
        case 's8': return r.s8(off);
        case 'u16': return r.u16(off);
        case 'u32': return r.u32(off);
        case 'f32': return r.f32(off);
        // Kept as BigInt, not Number -- AllCombosUsedAtLeastOnce is a genuine 64-bit bitmask and real
        // save data exceeds Number.MAX_SAFE_INTEGER (confirmed: 4704080987655426267 loses precision
        // as a double). Callers that need to display/popcount it must use BigInt-safe operations.
        case 'u64': return r.u64(off);
        default: throw new Error('bad fmt ' + fmt);
    }
}

export class PopSave {
    constructor(schema) {
        this.schema = schema;
    }

    namesLookup(hv) { return this.schema.namesLookup(hv); }
    resolveInstanceName(uid) { return this.schema.resolveInstanceName(uid); }

    walkPropertyDeclarations(dec, start, end) {
        const r = new BinReader(dec);
        const out = [];
        let p = start;
        const limit = end != null ? end : dec.length;
        while (p + 17 <= limit) {
            const marker = r.u32(p);
            if (marker !== 2) break;
            const cls = r.u32(p + 4);
            const idx = r.u16(p + 8);
            const fld = r.u32(p + 10);
            const tail = r.u16(p + 14);
            if (tail !== 0xffff) break;
            out.push({ offset: p, className: this.namesLookup(cls), index: idx, fieldName: this.namesLookup(fld) });
            p += 17;
        }
        return out;
    }

    enumerateSaveGameObjects(dec) {
        const r = new BinReader(dec);
        const offs = [];
        for (let i = 0; i <= dec.length - 4; i += 4) {
            if (r.u32(i) === ROOT_TYPEHASH) offs.push(i);
        }
        const out = [];
        for (let i = 0; i < offs.length; i++) {
            const off = offs[i];
            const end = i + 1 < offs.length ? offs[i + 1] : dec.length;
            const uid = off + 8 <= dec.length ? r.u32(off + 4) : null;
            out.push({ offset: off, end, size: end - off, uid, kind: end - off === 364 ? 'normal' : 'outlier' });
        }
        return out;
    }

    // ---- Mission items ----
    isMissionItem(dec, offset) {
        const MISSION_ITEM_SIZE = 91;
        if (offset < 0 || offset + MISSION_ITEM_SIZE > dec.length) return false;
        const r = new BinReader(dec);
        if (r.u32(offset) !== ROOT_TYPEHASH) return false;
        if (r.u32(offset + 16) !== 3) return false;
        const fieldHashes = [h('MIState'), h('WasEverCompleted'), h('WasEverPlayed')];
        for (let i = 0; i < 3; i++) {
            if (r.u32(offset + 25 + 11 * i) !== fieldHashes[i]) return false;
        }
        return r.u32(offset + 81) === 6;
    }

    findMissionItems(dec) {
        const MISSION_ITEM_SIZE = 91;
        const r = new BinReader(dec);
        const out = [];
        let p = 0;
        const n = dec.length;
        while (p < n - MISSION_ITEM_SIZE) {
            if (!this.isMissionItem(dec, p)) { p += 1; continue; }
            while (this.isMissionItem(dec, p)) {
                const values = p + 85;
                out.push({
                    offset: p, size: MISSION_ITEM_SIZE, uid: r.u32(p + 4),
                    state: dec[values], stateOffset: values,
                    wasEverCompleted: dec[values + 4], wasEverPlayed: dec[values + 5],
                });
                p += MISSION_ITEM_SIZE;
            }
        }
        return out;
    }

    // ---- Region trackers ----
    isSectionGameData(dec, offset) {
        if (offset < 0 || offset + 110 > dec.length) return false;
        const r = new BinReader(dec);
        if (r.u32(offset) !== ROOT_TYPEHASH) return false;
        if (r.u32(offset + 16) !== 4) return false;
        const hashes = [h('NbTimeVisited'), h('NbSparklesCollected'), h('FertileGroundStatus'), h('NbFightsDone')];
        for (let i = 0; i < 4; i++) if (r.u32(offset + 25 + 11 * i) !== hashes[i]) return false;
        return true;
    }

    seedRegionRank(regionName) {
        const m = /^(HC|LR|OB|RC)([1-6])_/.exec(regionName);
        if (!m) return null;
        const areas = ['HC', 'LR', 'OB', 'RC'];
        return areas.indexOf(m[1]) * 6 + parseInt(m[2], 10) - 1;
    }

    findLengthPrefixedBlob(dec, searchFrom, blobLen, limit) {
        const r = new BinReader(dec);
        let p = searchFrom;
        while (p + 4 + blobLen <= limit) {
            if (r.u32(p) === blobLen) return p + 4;
            p += 1;
        }
        return null;
    }

    sectionGameDataBlob(dec, recordOffset, limit) {
        const PREFIX_OFFSET = 100;
        const r = new BinReader(dec);
        const off = recordOffset + PREFIX_OFFSET;
        if (off + 4 + SECTION_GAME_DATA_BLOB_LEN <= dec.length && r.u32(off) === SECTION_GAME_DATA_BLOB_LEN) {
            return off + 4;
        }
        return this.findLengthPrefixedBlob(dec, recordOffset + 69, SECTION_GAME_DATA_BLOB_LEN, Math.min(recordOffset + 220, limit));
    }

    findSectionGameData(dec) {
        const MAX_SPARKLES_PER_REGION = 45;
        const MISSION_ITEM_SIZE = 91;
        const r = new BinReader(dec);
        const out = [];
        const n = dec.length;
        let p = 0;
        while (p < n - 110) {
            if (!this.isSectionGameData(dec, p)) { p += 1; continue; }
            const start = this.sectionGameDataBlob(dec, p, n);
            if (start !== null) {
                const visits = r.u32(start), sparkles = r.u32(start + 4), fertile = r.u32(start + 8), fights = r.u32(start + 12);
                if (fertile <= 2) {
                    out.push({
                        offset: p, uid: r.u32(p + 4), blobOffset: start,
                        NbTimeVisited: visits, NbSparklesCollected: sparkles, FertileGroundStatus: fertile, NbFightsDone: fights,
                        initialized: sparkles <= MAX_SPARKLES_PER_REGION,
                    });
                }
            }
            p += MISSION_ITEM_SIZE;
        }
        return out;
    }

    // ---- Composite objects ----
    parseComposite(dec, offset) {
        const HEADER = 32, CHILD_FIXED = 43, EMPTY_CHILD = 24;
        const r = new BinReader(dec);
        const n = dec.length;
        if (offset + HEADER > n) return null;
        if (r.u32(offset) !== COMPOSITE_TYPEHASH) return null;
        const count = r.u32(offset + 28);
        if (!(count >= 0 && count <= 64)) return null;
        let p = offset + HEADER;
        const children = [];
        for (let k = 0; k < count; k++) {
            if (p + 21 > n) return null;
            const nprops = r.u32(p + 12);
            const uid = r.u32(p);
            if (nprops === 0) {
                if (p + EMPTY_CHILD > n) return null;
                children.push({ uid, name: null, empty: true });
                p += EMPTY_CHILD;
            } else if (nprops === 1) {
                if (p + CHILD_FIXED > n) return null;
                const nameHash = r.u32(p + 21);
                const kind = r.u16(p + 37);
                const blobLen = r.u32(p + 39);
                if (blobLen > 4096 || p + CHILD_FIXED + blobLen > n) return null;
                children.push({
                    uid, name: this.namesLookup(nameHash), nameHash, kind,
                    valueOffset: p + CHILD_FIXED, valueLen: blobLen,
                });
                p += CHILD_FIXED + blobLen;
            } else {
                return null;
            }
        }
        return { offset, uid: r.u32(offset + 4), length: p - offset, children };
    }

    findComposites(dec) {
        const out = [];
        let i = findU32(dec, COMPOSITE_TYPEHASH, 0);
        while (i !== -1) {
            const rec = this.parseComposite(dec, i);
            if (rec !== null) {
                out.push(rec);
                i = findU32(dec, COMPOSITE_TYPEHASH, i + Math.max(rec.length, 4));
            } else {
                i = findU32(dec, COMPOSITE_TYPEHASH, i + 4);
            }
        }
        return out;
    }

    compositeChildValue(dec, child) {
        if (child.empty) return null;
        const FMT = { 0: 'u8', 3: 's8', 5: 'u16', 6: 'u32', 7: 'u32', 10: 'f32', 0x19: 'u32' };
        const fmt = FMT[child.kind];
        if (!fmt) return null;
        if (FMT_SIZE[fmt] !== child.valueLen) return null;
        const r = new BinReader(dec);
        return readFmt(r, child.valueOffset, fmt);
    }

    // ---- Graph records ----
    graphClass(uid) {
        const GRAPH_CLASS_BY_UID = {
            0x0d4bc26a: 'VoiceGraph', 0x14a38039: 'TutorialGraph', 0x6fab4001: 'FXGraph',
            0xc4210004: 'AnimationGraph', 0xc58f04b4: 'CameraGraph', 0xda22e3a4: 'PopAudioGraph',
            0x20bbc006: 'AchievementSet',
        };
        return GRAPH_CLASS_BY_UID[uid >>> 0] || 'Graph';
    }

    parseGraph(dec, offset, end) {
        const DECL_OFFSET = 38;
        const r = new BinReader(dec);
        const n = dec.length;
        if (offset + DECL_OFFSET > n) return null;
        if (r.u32(offset) !== ROOT_TYPEHASH) return null;
        const decls = this.walkPropertyDeclarations(dec, offset + DECL_OFFSET);
        if (end == null) {
            end = n;
            for (const th of [ROOT_TYPEHASH, COMPOSITE_TYPEHASH]) {
                const j = findU32(dec, th, offset + DECL_OFFSET + 17 * decls.length);
                if (j !== -1) end = Math.min(end, j);
            }
        }
        const start = end - 4 * decls.length;
        if (start < offset + DECL_OFFSET + 17 * decls.length) return null;
        const values = decls.map((d, k) => ({
            index: d.index, fieldName: d.fieldName, className: d.className,
            offset: start + 4 * k, value: r.f32(start + 4 * k),
        }));
        const grouped = new Map();
        for (const v of values) {
            if (!grouped.has(v.index)) grouped.set(v.index, []);
            grouped.get(v.index).push(v);
        }
        const variables = [];
        for (const idx of [...grouped.keys()].sort((a, b) => a - b)) {
            const fields = grouped.get(idx);
            const namesHere = new Set(fields.map((f) => f.fieldName));
            let klass;
            if (namesHere.size === 1 && namesHere.has('Duration')) klass = 'DelayTimer';
            else if (namesHere.size === 2 && namesHere.has('RuntimeValue') && namesHere.has('OriginalValue')) klass = 'GraphVariable';
            else klass = 'IGraphVariable';
            variables.push({ index: idx, klass, fields });
        }
        const uid = r.u32(offset + 4);
        return { offset, uid, klass: this.graphClass(uid), declarations: decls, values, variables, length: end - offset };
    }

    findGraphs(dec) {
        const needle = h('RulesLibraryBook');
        const out = [];
        let i = findU32(dec, needle, 0);
        while (i !== -1) {
            const rec = this.parseGraph(dec, i - 25);
            if (i >= 25 && rec !== null) out.push(rec);
            i = findU32(dec, needle, i + 1);
        }
        return out;
    }

    findNextRecord(dec, start, limit) {
        limit = limit || 4096;
        const r = new BinReader(dec);
        const end = Math.min(start + limit, dec.length);
        for (let cand = start; cand < end; cand++) {
            const v = r.u32(cand);
            if (v === ROOT_TYPEHASH || v === COMPOSITE_TYPEHASH) return cand;
        }
        return null;
    }

    // ---- Traps/Powers array containers ----
    findArrayContainers(dec, fieldName) {
        const ARRAY_CONTAINER_FIELDS = {
            Traps: ['TrapType', 'Enabled', 'ManualActivation'],
            Powers: ['MagicPlateComponentType', 'Enabled', 'ManualActivation'],
        };
        const ARRAY_ELEMENT_WIDTH = { TrapType: 4, MagicPlateComponentType: 4, Enabled: 1, ManualActivation: 1 };
        const fields = ARRAY_CONTAINER_FIELDS[fieldName];
        const needle = h(fieldName);
        const r = new BinReader(dec);
        const out = [];
        let i = findU32(dec, needle, 0);
        while (i !== -1) {
            const p = i - 4;
            if (p >= 0 && r.u32(p) === 2 && r.u16(p + 8) === 0) {
                const recOff = p - 21;
                if (recOff >= 0 && r.u32(recOff) === ROOT_TYPEHASH) {
                    const decls = this.walkPropertyDeclarations(dec, p);
                    const vend = p + 17 * decls.length;
                    const totalW = decls.reduce((s, d) => s + ARRAY_ELEMENT_WIDTH[d.fieldName], 0);
                    const nxt = this.findNextRecord(dec, vend);
                    if (nxt !== null && nxt - vend >= totalW && decls.length % fields.length === 0) {
                        let off = nxt - totalW;
                        const elements = [];
                        let elem = {};
                        for (const d of decls) {
                            const w = ARRAY_ELEMENT_WIDTH[d.fieldName];
                            elem[d.fieldName] = w === 1 ? dec[off] : r.u32(off);
                            off += w;
                            if (Object.keys(elem).length === fields.length) { elements.push(elem); elem = {}; }
                        }
                        const uid = r.u32(recOff + 4);
                        out.push({ offset: recOff, uid, elements, valueOffset: nxt - totalW });
                    }
                }
            }
            i = findU32(dec, needle, i + 1);
        }
        return out;
    }

    // ---- PortalDynamicLoaderSaveState fixed-capacity arrays ----
    findFixedCapacityArrays(dec) {
        const PREAMBLE_HEX = '00000000009e030000000000009e0310000000';
        const preamble = Uint8Array.from(Buffer_or_hex(PREAMBLE_HEX));
        const CAP = 50;
        const needle = h('ObjectToSave');
        const r = new BinReader(dec);
        const out = [];
        const n = dec.length;
        let i = findU32(dec, needle, 0);
        while (i !== -1) {
            let recOff = null;
            for (let b = 0; b < 400; b++) {
                if (i - b >= 0 && r.u32(i - b) === ROOT_TYPEHASH) { recOff = i - b; break; }
            }
            if (recOff !== null) {
                const t = this.readPropertyTable(dec, recOff);
                if (t && t.properties.length === 2 && t.properties[0].name === 'ObjectToSave' && t.properties[1].name === 'ActiveFlag') {
                    const vstart = t.nameTableEnd;
                    if (vstart + 19 + 4 + CAP * 4 + 4 + CAP * 4 <= n && bytesEqual(dec, vstart, preamble) && r.u32(vstart + 19) === CAP) {
                        const list1 = vstart + 23;
                        const list2CapOff = list1 + 4 * CAP;
                        if (r.u32(list2CapOff) === CAP) {
                            const list2 = list2CapOff + 4;
                            const objIds = []; const flags = [];
                            for (let k = 0; k < CAP; k++) objIds.push(r.u32(list1 + 4 * k));
                            for (let k = 0; k < CAP; k++) flags.push(r.u32(list2 + 4 * k));
                            const uid = r.u32(recOff + 4);
                            out.push({ offset: recOff, uid, objectToSave: objIds, activeFlag: flags, objectToSaveOffset: list1, activeFlagOffset: list2 });
                        }
                    }
                }
            }
            i = findU32(dec, needle, i + 1);
        }
        return out;
    }

    // ---- Single-field 48-byte records (CorruptionZone/IGraphRule) ----
    findSingleFieldRecords(dec, fieldName) {
        const RECORD_SIZE = 48, VALUE_OFFSET = 47;
        const needle = h(fieldName);
        const r = new BinReader(dec);
        const out = [];
        const n = dec.length;
        let i = findU32(dec, needle, 0);
        while (i !== -1) {
            const p = i - 25;
            if (p >= 0 && p + RECORD_SIZE <= n && r.u32(p) === ROOT_TYPEHASH && r.u32(p + 16) === 1 && r.u32(p + 43) === 1) {
                out.push({ offset: p, uid: r.u32(p + 4), valueOffset: p + VALUE_OFFSET, value: dec[p + VALUE_OFFSET] });
            }
            i = findU32(dec, needle, i + 1);
        }
        return out;
    }

    // ---- Unaligned-record recovery (only ever finds PopGamePlayManager in practice) ----
    findUnalignedRecords(dec) {
        const MIN_FIELDS = 6, ANCHOR_LEN = 4;
        const r = new BinReader(dec);
        const compositeSpans = this.enumerateSaveGameObjects(dec).filter((o) => o.kind === 'normal').map((o) => [o.offset, o.end]);
        const insideComposite = (off) => compositeSpans.some(([lo, hi]) => lo <= off && off < hi);

        const census = this.schema.savePersistedCensus();
        const found = [];
        const seen = new Set();
        for (const [cls, fields] of Object.entries(census)) {
            if (fields.length < MIN_FIELDS) continue;
            const anchorHashes = fields.slice(0, Math.min(ANCHOR_LEN, fields.length)).map((f) => h(f[0]));
            let i = findU32(dec, anchorHashes[0], 0);
            while (i !== -1) {
                let ok = true;
                for (let k = 0; k < anchorHashes.length; k++) {
                    if (i + 11 * k + 4 > dec.length || r.u32(i + 11 * k) !== anchorHashes[k]) { ok = false; break; }
                }
                if (ok) {
                    const recOff = i - 25;
                    if (recOff >= 0 && recOff % 4 !== 0 && !seen.has(recOff) && !insideComposite(recOff) && r.u32(recOff) === ROOT_TYPEHASH) {
                        seen.add(recOff);
                        found.push({ offset: recOff, uid: r.u32(recOff + 4), klass: cls });
                    }
                }
                i = findU32(dec, anchorHashes[0], i + 1);
            }
        }
        return found;
    }

    // ---- Named property table ----
    looksLikeRealHash(hv) {
        const b0 = hv & 0xff, b1 = (hv >>> 8) & 0xff, b2 = (hv >>> 16) & 0xff, b3 = (hv >>> 24) & 0xff;
        let degenerate = 0;
        for (const b of [b0, b1, b2, b3]) if (b === 0x00 || b === 0xff) degenerate++;
        return degenerate <= 1;
    }

    readPropertyTable(dec, recordOffset, recordSize) {
        const HEADER = 25, NAME_REC = 11;
        if (recordSize === 364) return null;
        const r = new BinReader(dec);
        if (recordOffset + HEADER > dec.length) return null;
        if (r.u32(recordOffset) !== ROOT_TYPEHASH) return null;
        const count = r.u32(recordOffset + 16);
        if (!(count > 0 && count <= 300)) return null;
        let p = recordOffset + HEADER;
        if (p + count * NAME_REC > dec.length) return null;
        const props = [];
        for (let i = 0; i < count; i++) {
            const hv = r.u32(p);
            const name = this.namesLookup(hv);
            if (name.startsWith('0x') && !this.looksLikeRealHash(hv)) break;
            props.push({ hash: hv, name });
            p += NAME_REC;
        }
        return { count: props.length, properties: props, nameTableEnd: p };
    }

    // ---- multi-component / ODD tags / achievements ----
    popgameplaymanagerTailStart(dec, recordOffset) {
        const r = new BinReader(dec);
        const off = recordOffset + ACTIVE_ODD_TAGS_COUNT_OFFSET;
        if (off + 4 > dec.length) return null;
        const count = r.u32(off);
        if (!(count >= 0 && count <= 4096)) return null;
        const start = off + 4 + 4 * count;
        if (start + POP_GPM_TAIL_LEN > dec.length) return null;
        return start;
    }

    resolveMultiComponent(dec, recordOffset, propHash) {
        const r = new BinReader(dec);
        let base, comps;
        if (MULTI_COMPONENT_OFFSETS.has(propHash)) {
            const [b, c] = MULTI_COMPONENT_OFFSETS.get(propHash);
            base = recordOffset + b; comps = c;
        } else if (propHash === SAVE_ELIKA_CAPTURED_POS) {
            const tail = this.popgameplaymanagerTailStart(dec, recordOffset);
            if (tail === null) return null;
            base = tail + 11;
            comps = [['X', 48, 'f32'], ['Y', 52, 'f32'], ['Z', 56, 'f32']];
        } else {
            return null;
        }
        const out = [];
        for (const [label, rel, fmt] of comps) {
            const off = base + rel;
            if (off + FMT_SIZE[fmt] > dec.length) return null;
            out.push([label, off, fmt, readFmt(r, off, fmt)]);
        }
        return out;
    }

    activeOddTags(dec, recordOffset, propHash) {
        if (propHash !== ACTIVE_ODD_TAGS_HASH) return null;
        const r = new BinReader(dec);
        const off = recordOffset + ACTIVE_ODD_TAGS_COUNT_OFFSET;
        if (off + 4 > dec.length) return null;
        const count = r.u32(off);
        if (!(count >= 0 && count <= 4096) || off + 4 + 4 * count > dec.length) return null;
        const entries = [];
        for (let i = 0; i < count; i++) entries.push(r.u32(off + 4 + 4 * i));
        return [count, entries];
    }

    decodeAchievementsTrackingData(dec, recordOffset) {
        if (recordOffset + 544 > dec.length) return null;
        const r = new BinReader(dec);
        return ACHIEVEMENTS_TRACKING_DATA_FIELDS.map(([name, relOff, fmt]) => {
            const off = recordOffset + relOff;
            return [name, off, fmt, readFmt(r, off, fmt)];
        });
    }

    trueRecordEnd(dec, recordOffset) {
        const nxt = findU32(dec, ROOT_TYPEHASH, recordOffset + 25);
        return nxt === -1 ? dec.length : nxt;
    }

    resolvePropertyValueSlot(dec, recordOffset, propHash, recordSize, nameTableEnd) {
        const entry = CONFIRMED_VALUE_OFFSETS.get(propHash);
        if (entry !== undefined) {
            const [relOff, fmt] = entry;
            const off = recordOffset + relOff;
            if (off + FMT_SIZE[fmt] > dec.length) return null;
            return [off, fmt];
        }
        for (const [table, maxSize] of TAIL_OFFSET_TABLES) {
            const tailEntry = table.get(propHash);
            if (tailEntry === undefined) continue;
            const [tailRel, fmt] = tailEntry;
            const candidates = [recordSize, this.trueRecordEnd(dec, recordOffset) - recordOffset];
            for (const size of candidates) {
                if (size == null || !(size > 0 && size <= maxSize)) continue;
                const off = recordOffset + size + tailRel;
                if (off >= 0 && off <= dec.length - FMT_SIZE[fmt]) return [off, fmt];
            }
        }
        const gpmEntry = POP_GPM_TAIL_OFFSETS.get(propHash);
        if (gpmEntry !== undefined) {
            const [rel, fmt] = gpmEntry;
            const start = this.popgameplaymanagerTailStart(dec, recordOffset);
            if (start !== null) {
                const off = start + rel;
                if (off >= 0 && off <= dec.length - FMT_SIZE[fmt]) return [off, fmt];
            }
        }
        const blobEntry = SECTION_GAME_DATA_BLOB_FIELDS.get(propHash);
        if (blobEntry !== undefined && nameTableEnd != null) {
            const [rel, fmt] = blobEntry;
            const start = this.findLengthPrefixedBlob(dec, nameTableEnd, SECTION_GAME_DATA_BLOB_LEN, this.trueRecordEnd(dec, recordOffset));
            if (start !== null) {
                const off = start + rel;
                if (off >= 0 && off <= dec.length - FMT_SIZE[fmt]) return [off, fmt];
            }
        }
        return null;
    }

    decodePropertyValue(dec, recordOffset, propHash, recordSize, nameTableEnd) {
        const slot = this.resolvePropertyValueSlot(dec, recordOffset, propHash, recordSize, nameTableEnd);
        if (slot === null) return null;
        const [off, fmt] = slot;
        return readFmt(new BinReader(dec), off, fmt);
    }
}

function Buffer_or_hex(hexStr) {
    const out = [];
    for (let i = 0; i < hexStr.length; i += 2) out.push(parseInt(hexStr.substr(i, 2), 16));
    return out;
}

// Field names whose format is genuinely 'f32' (i.e. Python's isinstance(val, float) would be
// True) -- JS doesn't distinguish 1 from 1.0 at runtime the way Python distinguishes int/float,
// so formatValue can't infer "was this a float field" from the decoded value's shape alone (a
// whole-number float like CameraFOV=1.0 must still render as "1.0000", not "1"). Every 'f32'
// entry across CONFIRMED_VALUE_OFFSETS/POP_GPM_TAIL_OFFSETS/ACHIEVEMENTS_TRACKING_DATA_FIELDS.
export const FLOAT_FIELD_NAMES = new Set([
    'LastPopEnvironmentAreaPortalBlendingRatio', 'CameraFOV',
    'SavePrinceDeathHeightValue', 'TotalPlayingTimeInSec',
]);

export const FIXED_ARRAY_CAPACITY = 50;
export { CONFIRMED_VALUE_OFFSETS, MULTI_COMPONENT_OFFSETS };
