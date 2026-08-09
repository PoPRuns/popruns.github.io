// binreader.js -- little-endian byte reading over a Uint8Array, mirroring struct.unpack_from('<...')
// calls throughout pop_save.py. Works in a browser or Node (both expose Uint8Array/DataView).
'use strict';

export class BinReader {
    constructor(bytes) {
        this.bytes = bytes;                 // Uint8Array
        this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
        this.length = bytes.length;
    }

    u8(off) { return this.bytes[off]; }
    s8(off) { return this.view.getInt8(off); }
    u16(off) { return this.view.getUint16(off, true); }
    u32(off) { return this.view.getUint32(off, true); }
    s32(off) { return this.view.getInt32(off, true); }
    f32(off) { return this.view.getFloat32(off, true); }
    u64(off) { return this.view.getBigUint64(off, true); }   // rarely needed, kept for parity

    slice(off, len) { return this.bytes.subarray(off, off + len); }

    // ASCII, stops at the first NUL or `maxLen`.
    ascii(off, maxLen) {
        let end = off;
        const limit = maxLen ? Math.min(off + maxLen, this.length) : this.length;
        while (end < limit && this.bytes[end] !== 0) end++;
        return Buffer_or_TextDecoder_ascii(this.bytes, off, end);
    }

    // UTF-16LE, stops at the first double-NUL (u16 == 0), matching pop_save.py's wstr().
    utf16(off, maxBytes) {
        const limit = Math.min(off + maxBytes, this.length);
        let end = limit;
        for (let i = off; i + 1 < limit; i += 2) {
            if (this.bytes[i] === 0 && this.bytes[i + 1] === 0) { end = i; break; }
        }
        return decodeUtf16LE(this.bytes, off, end);
    }
}

function Buffer_or_TextDecoder_ascii(bytes, start, end) {
    let s = '';
    for (let i = start; i < end; i++) s += String.fromCharCode(bytes[i]);
    return s;
}

function decodeUtf16LE(bytes, start, end) {
    let s = '';
    for (let i = start; i + 1 < end; i += 2) {
        s += String.fromCharCode(bytes[i] | (bytes[i + 1] << 8));
    }
    return s;
}

// Find the first occurrence of a 4-byte little-endian u32 needle, scanning byte-by-byte (not just
// 4-aligned) -- mirrors Python's `bytes.find(struct.pack('<I', x))`.
export function findU32(bytes, needle, fromIndex) {
    const b0 = needle & 0xff, b1 = (needle >>> 8) & 0xff, b2 = (needle >>> 16) & 0xff, b3 = (needle >>> 24) & 0xff;
    const n = bytes.length;
    for (let i = fromIndex || 0; i <= n - 4; i++) {
        if (bytes[i] === b0 && bytes[i + 1] === b1 && bytes[i + 2] === b2 && bytes[i + 3] === b3) return i;
    }
    return -1;
}

export function bytesEqual(a, aOff, b) {
    for (let i = 0; i < b.length; i++) if (a[aOff + i] !== b[i]) return false;
    return true;
}
