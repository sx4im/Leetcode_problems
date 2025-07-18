// 322. Coin Change
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const counts = new Array(amount + 1).fill(amount + 1);
  counts[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        counts[i] = Math.min(counts[i], 1 + counts[i - coins[j]]);
      }
    }
  }

  return counts[amount] !== amount + 1 ? counts[amount] : -1;
};