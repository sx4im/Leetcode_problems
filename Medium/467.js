// 467. Unique Substrings in Wraparound String
/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function(s) {
  const maxLength = new Array(26).fill(0);
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count = i > 0 && (s.charCodeAt(i) - s.charCodeAt(i - 1) - 1) % 26 === 0 ? count + 1 : 1;
    const index = s.charCodeAt(i) - 97;
    maxLength[index] = Math.max(maxLength[index], count);
  }

  return maxLength.reduce((sum, n) => sum + n, 0);
};