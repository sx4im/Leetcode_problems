// 491. Non-decreasing Subsequences
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const result = new Set();
  backtrack(result, nums, 0, []);
  return Array.from(result).map(s => s.split(',').map(Number));
};

function backtrack(result, nums, offset, order) {
  if (order.length > 1) {
    result.add(order.join());
  }
  for (let index = offset; index < nums.length; index++) {
    if (order.length === 0 || order[order.length - 1] <= nums[index]) {
      backtrack(result, nums, index + 1, [...order, nums[index]]);
    }
  }
}