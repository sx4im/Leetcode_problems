// 455. Assign Cookies
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let result = 0;
  for (let j = 0; result < g.length && j < s.length; j++) {
    if (s[j] >= g[result]) {
      result++;
    }
  }

  return result;
};