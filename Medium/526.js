// 526. Beautiful Arrangement
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
  let count = 0;
  backtrack(1, 0);
  return count;

  function backtrack(offset, used) {
    if (offset > n) {
      count++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (!(used & (1 << i)) && (i % offset === 0 || offset % i === 0)) {
        backtrack(offset + 1, used | (1 << i));
      }
    }
  }
};