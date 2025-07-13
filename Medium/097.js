// 97. Interleaving String
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length, n = s2.length;
    if (m + n !== s3.length) return false;

    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));
    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i > 0) dp[i][j] |= (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]);
            if (j > 0) dp[i][j] |= (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }

    return dp[m][n];
};
