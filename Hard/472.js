// 472. Concatenated Words
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
  const set = new Set(words);
  const map = new Map();

  function isValid(word) {
    if (map.has(word)) return map.get(word);
    for (let i = 1; i < word.length; i++) {
      const suffix = word.slice(i);
      if (set.has(word.slice(0, i)) && (set.has(suffix) || isValid(suffix))) {
        map.set(word, true);
        return true;
      }
    }
    map.set(word, false);
    return false;
  }

  return words.filter(word => word.length > 0 && isValid(word));
};