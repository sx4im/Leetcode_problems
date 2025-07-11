// 5. Longest Palindromic Substring
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0, end = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1]; // return valid indices
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        let [left1, right1] = expandAroundCenter(i, i);
        // Even length palindrome
        let [left2, right2] = expandAroundCenter(i, i + 1);

        if (right1 - left1 > end - start) {
            start = left1;
            end = right1;
        }
        if (right2 - left2 > end - start) {
            start = left2;
            end = right2;
        }
    }

    return s.substring(start, end + 1);
};
