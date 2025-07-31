// 446. Arithmetic Slices II - Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const dp = new Array(nums.length).fill().map(() => new Map());
  let result = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const prev = dp[j].get(diff) || 0;
      const current = (dp[i].get(diff) || 0) + prev + 1;
      dp[i].set(diff, current);
      result += prev;
    }
  }

  return result;
};