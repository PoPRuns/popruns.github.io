// lzss.js -- port of forge/lzss.py. Bit-packed format: each control bit selects a literal byte (0)
// or a match (1). A match is either "short" (1 more control bit, 2 bytes: offset-1, 2-bit length)
// or "long" (2 bytes: 5-bit offset-low + 8-bit offset-high + 3-bit length, with length 0 meaning an
// extended/escape length that continues reading extra length bytes, and offset 0 in that case
// marking end-of-block).
'use strict';

// Returns { out: Uint8Array, consumed: number }.
export function lzssBlock(src, ip) {
    const out = [];
    let bb = 0, bc = 0;
    const start = ip;

    function need(n) {
        while (bc < n) {
            bb |= src[ip] << bc;
            ip += 1;
            bc += 8;
        }
    }

    while (true) {
        need(1);
        const bit = bb & 1;
        bb >>>= 1;
        bc -= 1;
        if (bit === 0) {
            out.push(src[ip]);
            ip += 1;
            continue;
        }
        need(1);
        const tb = bb & 1;
        bb >>>= 1;
        bc -= 1;
        if (tb === 0) {
            need(2);
            let length = (bb & 3) + 2;
            bb >>>= 2;
            bc -= 2;
            const o = src[ip];
            ip += 1;
            let m = out.length - o - 1;
            for (let k = 0; k < length; k++) { out.push(out[m]); m += 1; }
        } else {
            const b0 = src[ip];
            const b1 = src[ip + 1];
            ip += 2;
            const o = (b1 << 5) | (b0 & 0x1f);
            const l3 = b0 >>> 5;
            let m = out.length - o;
            let length;
            if (l3 === 0) {
                length = 9;
                while (src[ip] === 0) { length += 0xff; ip += 1; }
                length += src[ip];
                ip += 1;
            } else {
                if (o === 0) break;
                length = l3 + 2;
            }
            for (let k = 0; k < length; k++) { out.push(out[m]); m += 1; }
        }
    }
    return { out: Uint8Array.from(out), consumed: ip - start };
}
