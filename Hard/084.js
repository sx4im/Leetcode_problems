// 84. Largest Rectangle in Histogram
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var n = heights.length
    var stack = []
    var maxA = 0
    for (var i = 0; i <= n; i++) {
        var h = (i === n ? 0 : heights[i])
        while (stack.length && h < heights[stack[stack.length-1]]) {
            var tp = stack.pop()
            var left = stack.length ? stack[stack.length-1] : -1
            var width = i - left - 1
            var area = heights[tp] * width
            if (area > maxA) maxA = area
        }
        stack.push(i)
    }
    return maxA
}
