// 318. Maximum Product of Word Lengths
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const letters = words.map(word => Array.from(new Set(word)));
  let result = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!letters[i].some(item => letters[j].includes(item))) {
        const product = words[i].length * words[j].length;
        if (product > result) {
          result = product;
        }
      }
    }
  }

  return result;
};