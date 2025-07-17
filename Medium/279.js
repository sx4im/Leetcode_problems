// 279. Perfect Squares
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n + 1).fill(0).map((_, i) => !i ? 0 : Infinity);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
};