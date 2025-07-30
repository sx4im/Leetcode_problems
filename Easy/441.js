// 441. Arranging Coins
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let count = 0;
  for (; count <= n; count++) {
    n -= count;
  }
  return count - 1;
};