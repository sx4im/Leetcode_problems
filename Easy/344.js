// 344. Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[s.length - 1 - i], s[i]] = [s[i], s[s.length - 1 - i]];
  }
};