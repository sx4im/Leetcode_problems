// 330. Patching Array
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let result = 0;

  for (let i = 0, k = 1; k <= n;) {
    if (i < nums.length && nums[i] <= k) {
      k += nums[i++];
    } else {
      k += k;
      result++;
    }
  }

  return result;
};