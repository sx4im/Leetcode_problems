// 541. Reverse String II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const split = s.split('');
  for (let i = 0; i < s.length; i += 2 * k) {
    split.splice(i, 0, ...split.splice(i, k).reverse());
  }
  return split.join('');
};