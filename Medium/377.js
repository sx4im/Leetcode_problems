// 377. Combination Sum IV
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    nums.forEach(n => dp[i] += i >= n ? dp[i - n] : 0);
  }

  return dp[target];
};