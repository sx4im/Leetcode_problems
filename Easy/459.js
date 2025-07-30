// 459. Repeated Substring Pattern
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, s.length * 2 - 1).indexOf(s) !== -1;
};