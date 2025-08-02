// 424. Longest Repeating Character Replacement
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const count = new Map();
  let max = 0;
  let left = 0;

  return s.split('').reduce((maxLength, char, right) => {
    count.set(char, (count.get(char) || 0) + 1);
    max = Math.max(max, count.get(char));
    if (right - left + 1 - max > k) {
      count.set(s[left], count.get(s[left++]) - 1);
    }
    return Math.max(maxLength, right - left + 1);
  }, 0);
};