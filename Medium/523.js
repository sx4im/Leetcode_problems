// 523. Continuous Subarray Sum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const map = new Map([[0, -1]]);

  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k !== 0) {
      sum = sum % k;
    }

    if (map.has(sum)) {
      if (i - map.get(sum) >= 2) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }

  return false;
};