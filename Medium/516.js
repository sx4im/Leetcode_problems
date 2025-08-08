// 516. Longest Palindromic Subsequence
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const dp = new Array(s.length).fill(0);

  for (let i = s.length - 1, previous; i >= 0; i--) {
    previous = dp.slice();
    dp[i] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[j] = (previous[j - 1] || 0) + 2;
      } else {
        dp[j] = Math.max(dp[j - 1], previous[j]);
      }
    }
  }

  return dp[s.length - 1];
};