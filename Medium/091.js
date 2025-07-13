// 91. Decode Ways
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0;

    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= s.length; i++) {
        const one = parseInt(s.slice(i - 1, i));
        const two = parseInt(s.slice(i - 2, i));
        
        if (one >= 1 && one <= 9) dp[i] += dp[i - 1];
        if (two >= 10 && two <= 26) dp[i] += dp[i - 2];
    }

    return dp[s.length];
};
