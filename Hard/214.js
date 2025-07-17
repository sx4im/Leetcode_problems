// 214. Shortest Palindrome
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  const reversed = s.split('').reverse().join('');
  for (let i = s.length; i > 0; i--) {
    if (s.slice(0, i) === reversed.slice(s.length - i)) {
      return reversed.slice(0, reversed.length - i) + s;
    }
  }
  return '';
};