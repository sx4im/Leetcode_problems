// 522. Longest Uncommon Subsequence II
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function(strs) {
  strs.sort((a, b) => b.length - a.length);

  for (let i = 0; i < strs.length; i++) {
    let isUnique = true;
    for (let j = 0; j < strs.length; j++) {
      if (i !== j && isSubsequence(strs[i], strs[j])) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return strs[i].length;
    }
  }

  return -1;

  function isSubsequence(s1, s2) {
    let index = 0;
    for (const char of s2) {
      if (char === s1[index]) index++;
      if (index === s1.length) return true;
    }
    return false;
  }
};