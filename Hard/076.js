// 76. Minimum Window Substring
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var need = {}, have = {}
    for (var c of t) need[c] = (need[c]||0) + 1
    var required = Object.keys(need).length
    var formed = 0
    var l = 0, r = 0, best = [Infinity,0,0]

    while (r < s.length) {
        var c = s[r]
        have[c] = (have[c]||0) + 1
        if (need[c] && have[c] === need[c]) formed++
        while (l <= r && formed === required) {
            if (r-l+1 < best[0]) best = [r-l+1, l, r]
            var cl = s[l]
            have[cl]--
            if (need[cl] && have[cl] < need[cl]) formed--
            l++
        }
        r++
    }

    return best[0] === Infinity ? "" : s.slice(best[1], best[2]+1)
}
