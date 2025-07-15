// 68. Text Justification
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var res = []
    var i = 0, n = words.length
    while (i < n) {
        var lenWords = words[i].length
        var j = i+1
        while (j < n && lenWords + 1 + words[j].length <= maxWidth) {
            lenWords += 1 + words[j].length
            j++
        }
        var count = j - i
        var line = ''
        if (j === n || count === 1) {
            line = words[i]
            for (var k = i+1; k < j; k++) line += ' ' + words[k]
            while (line.length < maxWidth) line += ' '
        } else {
            var totalSpaces = maxWidth - (lenWords - (count-1))
            var avg = Math.floor(totalSpaces/(count-1))
            var extra = totalSpaces % (count-1)
            for (var k = i; k < j; k++) {
                line += words[k]
                if (k < j-1) {
                    var sp = avg + (k - i < extra ? 1 : 0)
                    for (var t = 0; t < sp; t++) line += ' '
                }
            }
        }
        res.push(line)
        i = j
    }
    return res
}
