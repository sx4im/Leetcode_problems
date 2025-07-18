// 375. Guess Number Higher or Lower II
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  const dp = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      const k = j + i - 1;
      let min = Infinity;
      for (let pivot = j; pivot < k; pivot++) {
        min = Math.min(min, pivot + Math.max(dp[j][pivot - 1], dp[pivot + 1][k]));
      }
      dp[j][k] = min;
    }
  }

  return dp[1][n];
};