// 11. Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        maxArea = Math.max(maxArea, h * w);

        if (height[left] < height[right]) left++;
        else right--;
    }

    return maxArea;
};
