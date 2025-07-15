// 85. Maximal Rectangle
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0
    var m = matrix.length, n = matrix[0].length
    var heights = Array(n).fill(0), best = 0

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            heights[j] = matrix[i][j]==='1' ? heights[j]+1 : 0
        }
        var stack = [], j = 0
        while (j <= n) {
            var h = j < n ? heights[j] : 0
            if (!stack.length || h >= heights[stack[stack.length-1]]) {
                stack.push(j++)
            } else {
                var tp = stack.pop()
                var width = stack.length ? j - stack[stack.length-1] - 1 : j
                best = Math.max(best, heights[tp] * width)
            }
        }
    }
    return best
}
