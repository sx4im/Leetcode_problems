// 451. Sort Characters By Frequency
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = new Map();
  s.split('').forEach(char => {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  });

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0].repeat(entry[1]))
    .join('');
};