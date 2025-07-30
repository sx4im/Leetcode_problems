// 557. Reverse Words in a String III
/**
 * @param {string} str
 * @return {string}
 */
var reverseWords = function(str) {
  return str.split(/\s/).map(s => s.split('').reverse().join('')).join(' ');
};