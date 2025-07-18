// 395. Longest Substring with At Least K Repeating Characters
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  for (const char of Array.from(new Set(s))) {
    if (s.match(new RegExp(char, 'g')).length < k) {
      return Math.max(...s.split(char).map(str => longestSubstring(str, k)));
    }
  }
  return s.length;
};