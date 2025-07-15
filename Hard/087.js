// 87. Scramble String
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    var n = s1.length
    var memo = {}
    function dfs(i, j, len) {
        var key = i+'_'+j+'_'+len
        if (memo[key]!==undefined) return memo[key]
        var a = s1.substr(i,len), b = s2.substr(j,len)
        if (a === b) return memo[key] = true
        var cnt = Array(26).fill(0)
        for (var k = 0; k < len; k++) {
            cnt[a.charCodeAt(k)-97]++
            cnt[b.charCodeAt(k)-97]--
        }
        for (var v of cnt) if (v) return memo[key] = false
        for (var k = 1; k < len; k++) {
            if (dfs(i, j, k) && dfs(i+k, j+k, len-k)) return memo[key] = true
            if (dfs(i, j+len-k, k) && dfs(i+k, j, len-k)) return memo[key] = true
        }
        return memo[key] = false
    }
    return dfs(0,0,n)
}
