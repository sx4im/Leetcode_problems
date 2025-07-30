// 520. Detect Capital
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  return /^[A-Z]?[a-z]+$|^[A-Z]+$/.test(word);
};