// 474. Ones and Zeroes
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
  for (const str of strs) {
    const zeros = (str.match(/0/g) || []).length;
    const ones = str.length - zeros;
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }
  return dp[m][n];
};