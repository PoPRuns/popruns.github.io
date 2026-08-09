// popsave_header.js -- port of pop_save.py's header/blob2/blob1 layer.
'use strict';

import { BinReader } from './binreader.js';
import { lzssBlock } from './lzss.js';

export const MAGIC = 0x484d4752;   // "RGMH"
export const HEADER_SIZE = 0x203f;
export const ROOT_TYPEHASH = 0x89ddA5b >>> 0;   // SaveGameObject
export const COMPOSITE_TYPEHASH = 0x2198212e;

export class SaveFormatError extends Error { }

export function parseHeader(data) {
    if (data.length < HEADER_SIZE) throw new SaveFormatError('file too short for header: ' + data.length);
    const r = new BinReader(data);
    const magic = r.u32(0);
    if (magic !== MAGIC) throw new SaveFormatError('bad magic ' + magic.toString(16));

    const version = r.u32(0x04);
    const trailerSize = r.u32(0x14);
    const title = r.utf16(0x28, 0x800);
    const levelName = r.utf16(0x828, 0x800);
    const blob1Size = r.u32(0x2030);
    const year = r.u16(0x2034);
    const month = r.u8(0x2036);
    const day = r.u8(0x2037);
    const hour = r.u8(0x2038);
    const minute = r.u8(0x2039);
    const second = r.u8(0x203a);
    const blob2Size = r.u32(0x203b);

    let timestampUtc = null;
    try {
        // header stores UTC -- Date.UTC validates ranges loosely, so check components explicitly
        // the way Python's datetime(...) constructor would reject an invalid date.
        if (month >= 1 && month <= 12 && day >= 1 && day <= 31 && hour <= 23 && minute <= 59 && second <= 59) {
            const ms = Date.UTC(year, month - 1, day, hour, minute, second);
            const d = new Date(ms);
            if (d.getUTCFullYear() === year && d.getUTCMonth() === month - 1 && d.getUTCDate() === day) {
                timestampUtc = d;
            }
        }
    } catch (e) { /* leave null */ }

    return {
        magic, version, trailerSize, title, levelName, blob1Size, blob2Size,
        year, month, day, hour, minute, second, timestampUtc,
    };
}

export function parseBlob2(data, off, size) {
    const blob2 = data.subarray(off, off + size);
    const r = new BinReader(blob2);
    const marker = blob2.length >= 4 ? r.u32(0) : null;
    let code = null;
    if (blob2.length > 4) {
        let end = -1;
        for (let i = 4; i < blob2.length; i++) { if (blob2[i] === 0) { end = i; break; } }
        if (end < 0) end = blob2.length;
        code = asciiSlice(blob2, 4, end);
    }
    let levelName = null;
    let i = 4 + (code ? code.length : 0);
    i += ((-i) % 2 + 2) % 2;
    while (i < blob2.length - 1 && blob2[i] === 0 && blob2[i + 1] === 0) i += 2;
    if (i < blob2.length - 1) {
        let end = i;
        while (end < blob2.length - 1 && !(blob2[end] === 0 && blob2[end + 1] === 0)) end += 2;
        levelName = r.utf16(i, end - i);
    }
    return { marker, checkpointCode: code, levelName, raw: blob2 };
}

function asciiSlice(bytes, start, end) {
    let s = '';
    for (let i = start; i < end; i++) s += String.fromCharCode(bytes[i]);
    return s;
}

const BLOB1_FIRST_BLOCK_HEADER = 25;
const BLOB1_BLOCK_HEADER_SIZE = 13;

export function decompressBlob1(data, off, size) {
    const blob1 = data.subarray(off, off + size);
    if (blob1.length < BLOB1_FIRST_BLOCK_HEADER + BLOB1_BLOCK_HEADER_SIZE) {
        throw new SaveFormatError('blob1 too short: ' + blob1.length);
    }
    const out = [];
    let p = BLOB1_FIRST_BLOCK_HEADER;
    let blocks = 0;
    const r = new BinReader(blob1);
    while (p + BLOB1_BLOCK_HEADER_SIZE <= blob1.length) {
        const flag = blob1[p];
        const csize = r.u32(p + 1);
        const usize = r.u32(p + 5);
        const start = p + BLOB1_BLOCK_HEADER_SIZE;
        if (csize === 0 || usize === 0 || start + csize > blob1.length) break;
        let chunk;
        if (flag === 0 || csize === usize) {
            chunk = blob1.subarray(start, start + csize);
        } else {
            chunk = lzssBlock(blob1, start).out;
        }
        if (chunk.length < usize) throw new SaveFormatError('blob1 block ' + blocks + ' short');
        for (let k = 0; k < usize; k++) out.push(chunk[k]);
        p = start + csize;
        blocks += 1;
        if (blocks > 1000) throw new SaveFormatError("blob1 decompression didn't terminate");
    }
    return Uint8Array.from(out);
}

// Checkpoint-code suffix -> human level name (literal mnemonics, not a hash -- see pop_save.py).
export const LEVEL_CODES = {
    CA: 'Canyon', DE: 'Desert', TL: 'Temple',
    HC1: 'Spire of Dreams', HC2: 'Royal Gardens',
    HC3: 'The Palace Rooms', HC4: 'Coronation Hall', HC5: 'Royal Spire',
    HC6: 'The Cavern',
    LR1: 'Tower of Ormazd', LR2: 'Tower of Ahriman', LR3: "Warrior's Fortress",
    LR4: "Queen's Tower", LR5: 'City of Light', LR6: 'City Gate',
    OB1: 'Machinery Ground', OB2: "Heaven's Stair", OB3: 'The Observatory',
    OB4: 'Construction Yard', OB5: 'Reservoir', OB6: 'The Cauldron',
    RC1: 'The Windmills', RC2: "Martyrs' Tower", RC3: "Hunter's Lair",
    RC4: 'Marshalling Ground', RC5: 'The Sun Temple', RC6: "King's Gate",
};

export function resolveCheckpointCode(checkpointCode) {
    if (checkpointCode == null) return [null, null];
    if (checkpointCode.toUpperCase().startsWith('AUTOSAV')) return [null, 'Autosave'];
    if (!checkpointCode.includes('.')) return [checkpointCode, null];
    const dot = checkpointCode.indexOf('.');
    const h = checkpointCode.slice(0, dot);
    const suffix = checkpointCode.slice(dot + 1);
    return [h, LEVEL_CODES[suffix] || null];
}
