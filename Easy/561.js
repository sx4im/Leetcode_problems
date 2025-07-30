// 561. Array Partition
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    let maxSum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        maxSum += nums[i];
    }
    
    return maxSum;
};