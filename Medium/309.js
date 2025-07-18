// 309. Best Time to Buy and Sell Stock with Cooldown
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;
  let remaining = 0;

  for (let i = 0, limit = -Infinity; i < prices.length; i++) {
    limit = Math.max(limit, remaining - prices[i]);
    remaining = Math.max(remaining, result);
    result = limit + prices[i];
  }

  return Math.max(result, remaining);
};