// 438. Find All Anagrams in a String
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const group = new Array(26).fill(0);
  const result = [];

  for (let i = 0; i < p.length; i++) {
    group[p.charCodeAt(i) - 97]--;
  }

  outer: for (let i = 0; i < s.length; i++) {
    group[s.charCodeAt(i) - 97]++;
    if (i < p.length - 1) {
      continue;
    } else if (i > p.length - 1) {
      group[s.charCodeAt(i - p.length) - 97]--;
    }
    for (let j = 0; j < 26; j++) {
      if (group[j]) {
        continue outer;
      }
    }
    result.push(i + 1 - p.length);
  }

  return result;
};