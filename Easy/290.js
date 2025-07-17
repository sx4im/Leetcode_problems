// 290. Word Pattern
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;
  const map = new Map();
  return pattern.split('').every((char, i) =>
    map.has(char)
      ? map.get(char) === words[i]
      : !([...map.values()].includes(words[i])) && map.set(char, words[i])
  );
};