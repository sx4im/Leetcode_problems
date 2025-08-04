// 462. Minimum Moves to Equal Array Elements II
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];
  return nums.reduce((sum, num) => sum + Math.abs(num - median), 0);
};