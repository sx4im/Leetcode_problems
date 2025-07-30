// 409. Longest Palindrome
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const set = new Set();
  return [...s].reduce((count, c) => {
    return set.delete(c) ? count + 2 : (set.add(c), count);
  }, 0) + (set.size > 0 ? 1 : 0);
};