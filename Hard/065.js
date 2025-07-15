// 65. Valid Number
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim()
    var seenDigit = false, seenDot = false, seenExp = false
    for (var i = 0; i < s.length; i++) {
        var c = s[i]
        if (c >= '0' && c <= '9') {
            seenDigit = true
        } else if (c === '.') {
            if (seenDot || seenExp) return false
            seenDot = true
        } else if (c === 'e' || c === 'E') {
            if (!seenDigit || seenExp) return false
            seenExp = true
            seenDigit = false
        } else if (c === '+' || c === '-') {
            if (i !== 0 && s[i-1] !== 'e' && s[i-1] !== 'E') return false
        } else {
            return false
        }
    }
    return seenDigit
}
