// 152. Maximum Product Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxSoFar = nums[0], minSoFar = nums[0], result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        [maxSoFar, minSoFar] = [
            Math.max(curr, curr * maxSoFar, curr * minSoFar),
            Math.min(curr, curr * maxSoFar, curr * minSoFar)
        ];
        result = Math.max(result, maxSoFar);
    }
    
    return result;
};
