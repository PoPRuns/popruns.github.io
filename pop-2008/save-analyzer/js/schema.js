// schema.js -- port of save_schema.py + the schema-census/name-resolution half of pop_save.py.
// Takes already-parsed JSON (schema_cache.json, forge_name_registry.json) rather than loading
// them itself, so the same class works identically in a browser (fetch) or Node (fs), and is
// directly unit-testable without mocking either.
'use strict';

// ---- primitive widths by typeIndex (mid byte of the field trailer) -- mirrors save_schema.PRIM_WIDTH
export const PRIM_WIDTH = {
    0x00: 1, 0x01: 1, 0x02: 4, 0x03: 1, 0x04: 2, 0x05: 2, 0x06: 4, 0x07: 4,
    0x09: 8, 0x0a: 4, 0x0b: 8, 0x0c: 12, 0x0d: 16, 0x0e: 16, 0x10: 64, 0x11: 4, 0x19: 4, 0x1f: 8,
};
export const SERIALIZE_BIT = 0x2000000;
export const SAVE_PERSIST_BIT = 0x8000000;

function hex8(n) {
    return '0x' + (n >>> 0).toString(16).padStart(8, '0');
}

export class Schema {
    constructor(schemaCacheJson, forgeNameRegistryJson) {
        this.types = new Map();
        for (const [h, info] of Object.entries(schemaCacheJson.types)) {
            this.types.set(parseInt(h, 16) >>> 0, {
                parent: parseInt(info.parent, 16) >>> 0,
                fields: info.fields,   // [[flags, nameHash, fieldTypehash, trailer], ...]
            });
        }
        this.names = new Map();
        for (const [h, name] of Object.entries(schemaCacheJson.names)) {
            this.names.set(parseInt(h, 16) >>> 0, name);
        }
        this.forgeNames = new Map();
        for (const [h, name] of Object.entries(forgeNameRegistryJson || {})) {
            this.forgeNames.set(parseInt(h, 16) >>> 0, name);
        }
        this._savePersistedCensus = null;
        this._fullSchemaCensus = null;
        this._boolFields = null;
    }

    namesLookup(h) {
        h = h >>> 0;
        const nm = this.names.get(h);
        return nm !== undefined ? nm : hex8(h);
    }

    resolveInstanceName(uid) {
        if (uid === null || uid === undefined) return null;
        const nm = this.forgeNames.get(uid >>> 0);
        return nm !== undefined ? nm : null;
    }

    _buildCensus(persistOnly) {
        const census = {};
        for (const [th, info] of this.types) {
            const hits = [];
            for (const [fl, nh, fth, tr] of info.fields) {
                if (persistOnly && !(fl & SAVE_PERSIST_BIT)) continue;
                const kind = (tr >>> 16) & 0x1f;
                const width = Object.prototype.hasOwnProperty.call(PRIM_WIDTH, kind) ? PRIM_WIDTH[kind] : null;
                hits.push([this.names.get(nh) ?? hex8(nh), kind, width]);
            }
            if (hits.length) census[this.names.get(th) ?? hex8(th)] = hits;
        }
        return census;
    }

    savePersistedCensus() {
        if (!this._savePersistedCensus) this._savePersistedCensus = this._buildCensus(true);
        return this._savePersistedCensus;
    }

    fullSchemaCensus() {
        if (!this._fullSchemaCensus) this._fullSchemaCensus = this._buildCensus(false);
        return this._fullSchemaCensus;
    }

    // Names the schema declares as a 1-byte bool (kind 0) EVERY time they appear -- a name that's
    // bool on one class and something wider on another isn't safely treated as one.
    boolFieldNames() {
        if (this._boolFields) return this._boolFields;
        const NOT_REALLY_BOOL = new Set(['Brightness', 'BrightnessDefault']);
        const kinds = new Map();
        for (const fields of Object.values(this.fullSchemaCensus())) {
            for (const [nm, kind] of fields) {
                if (!kinds.has(nm)) kinds.set(nm, new Set());
                kinds.get(nm).add(kind);
            }
        }
        const out = new Set();
        for (const [nm, ks] of kinds) {
            if (ks.size === 1 && ks.has(0) && !NOT_REALLY_BOOL.has(nm)) out.add(nm);
        }
        this._boolFields = out;
        return out;
    }

    isBoolField(name) {
        return this.boolFieldNames().has(name);
    }

    bestCensusMatch(want, census) {
        let bestCls = null, bestScore = 0;
        for (const [cls, fields] of Object.entries(census)) {
            const have = new Set(fields.map((f) => f[0]));
            let overlap = 0;
            for (const w of want) if (have.has(w)) overlap++;
            if (overlap === 0) continue;
            const score = overlap - 0.1 * Math.abs(have.size - want.size);
            if (score > bestScore || (score === bestScore && bestCls === null)) {
                bestCls = cls; bestScore = score;
            }
        }
        return bestCls ? [bestCls, bestScore] : [null, 0];
    }

    guessRecordClass(propertyNames) {
        const want = new Set(propertyNames);
        if (want.size === 0) return [null, 0];
        let [cls, score] = this.bestCensusMatch(want, this.savePersistedCensus());
        if (cls) return [cls, score];
        return this.bestCensusMatch(want, this.fullSchemaCensus());
    }
}
