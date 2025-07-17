// 389. Find the Difference
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const map = new Map();
  t.split('').forEach(c => map.set(c, (map.get(c) ?? 0) + 1));
  s.split('').forEach(c => map.set(c, map.get(c) - 1));
  return Array.from(map).find(([letter, count]) => count)[0];
};