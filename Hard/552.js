// 552. Student Attendance Record II
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  const MOD = 1e9 + 7;
  const dp = [[1, 0, 0], [0, 0, 0]];

  for (let i = 0; i < n; i++) {
    const m = dp.map(row => [...row]);
    dp[0][0] = (m[0][0] + m[0][1] + m[0][2]) % MOD;
    dp[0][1] = m[0][0];
    dp[0][2] = m[0][1];
    dp[1][0] = (m[0][0] + m[0][1] + m[0][2] + m[1][0] + m[1][1] + m[1][2]) % MOD;
    dp[1][1] = m[1][0];
    dp[1][2] = m[1][1];
  }

  return (dp[0][0] + dp[0][1] + dp[0][2] + dp[1][0] + dp[1][1] + dp[1][2]) % MOD;
};