// 524. Longest Word in Dictionary through Deleting
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
  return dictionary
    .sort((a, b) => a.length === b.length ? a.localeCompare(b) : b.length - a.length)
    .find(word => {
      let i = 0;
      for (const character of s) {
        if (character === word[i]) i++;
        if (i === word.length) return true;
      }
      return false;
    }) || '';
};