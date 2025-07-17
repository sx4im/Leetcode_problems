// 345. Reverse Vowels of a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = s.match(/[aeiou]/ig);
  return s.replace(/[aeiou]/ig, () => vowels.pop());
};