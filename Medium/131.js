// 131. Palindrome Partitioning
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];

    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left++] !== str[right--]) return false;
        }
        return true;
    }

    function backtrack(start, path) {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.slice(start, end + 1));
                backtrack(end + 1, path);
                path.pop(); // backtrack
            }
        }
    }

    backtrack(0, []);
    return result;
};
