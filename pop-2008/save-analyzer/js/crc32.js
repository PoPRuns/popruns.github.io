// crc32.js -- standard CRC-32 (IEEE 802.3 / zlib.crc32), used throughout this format for hashing
// class/field/instance names. Same algorithm Python's zlib.crc32() uses, verified against it.
'use strict';

const CRC32_TABLE = (() => {
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) {
            c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        }
        table[n] = c >>> 0;
    }
    return table;
})();

export function crc32(str) {
    let crc = 0xffffffff;
    for (let i = 0; i < str.length; i++) {
        const byte = str.charCodeAt(i) & 0xff;
        crc = CRC32_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
}
