// 205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const cs = s[i], ct = t[i];

        if ((mapST.has(cs) && mapST.get(cs) !== ct) ||
            (mapTS.has(ct) && mapTS.get(ct) !== cs)) {
            return false;
        }

        mapST.set(cs, ct);
        mapTS.set(ct, cs);
    }

    return true;
};
