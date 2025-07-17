// 303. Range Sum Query - Immutable
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.nums.slice(left, right + 1).reduce((sum, n) => sum + n, 0);
};