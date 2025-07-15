// 60. Permutation Sequence
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var facts = [1]
    for (var i = 1; i <= n; i++) facts[i] = facts[i-1] * i
    var nums = []
    for (var i = 1; i <= n; i++) nums.push(''+i)
    k-- 
    var res = []
    for (var i = n; i >= 1; i--) {
        var f = facts[i-1]
        var idx = Math.floor(k / f)
        res.push(nums[idx])
        nums.splice(idx,1)
        k %= f
    }
    return res.join('')
}