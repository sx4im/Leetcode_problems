// 312. Burst Balloons
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  const track = [1, ...nums, 1];
  const dp = new Array(nums.length + 2).fill().map(() => new Array(nums.length + 2).fill(0));

  for (let count = 1; count <= nums.length; count++) {
    for (let i = 1; i <= nums.length - count + 1; i++) {
      const j = i + count - 1;
      for (let k = i; k <= j; k++) {
        dp[i - 1][j + 1] = Math.max(
          dp[i - 1][j + 1],
          dp[i - 1][k] + dp[k][j + 1] + track[i - 1] * track[k] * track[j + 1]
        );
      }
    }
  }

  return dp[0][nums.length + 1];
};