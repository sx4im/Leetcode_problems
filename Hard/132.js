// 132. Palindrome Partitioning II
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length;
    const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));
    const dp = new Array(n).fill(0);

    // Fill isPalindrome table
    for (let end = 0; end < n; end++) {
        for (let start = 0; start <= end; start++) {
            if (s[start] === s[end] && (end - start <= 2 || isPalindrome[start + 1][end - 1])) {
                isPalindrome[start][end] = true;
            }
        }
    }

    // Fill dp table
    for (let i = 0; i < n; i++) {
        if (isPalindrome[0][i]) {
            dp[i] = 0;
        } else {
            let min = Infinity;
            for (let j = 0; j < i; j++) {
                if (isPalindrome[j + 1][i]) {
                    min = Math.min(min, dp[j] + 1);
                }
            }
            dp[i] = min;
        }
    }

    return dp[n - 1];
};
