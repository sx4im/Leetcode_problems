// 123. Best Time to Buy and Sell Stock III
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length === 0) return 0;

    let n = prices.length;
    // Initialize DP arrays
    let dp1 = new Array(n).fill(0); // max profit from [0...i]
    let dp2 = new Array(n).fill(0); // max profit from [i...n-1]

    // First pass: max profit until day i (1 transaction)
    let minPrice = prices[0];
    for (let i = 1; i < n; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        dp1[i] = Math.max(dp1[i - 1], prices[i] - minPrice);
    }

    let maxPrice = prices[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxPrice = Math.max(maxPrice, prices[i]);
        dp2[i] = Math.max(dp2[i + 1], maxPrice - prices[i]);
    }

    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
        maxProfit = Math.max(maxProfit, dp1[i] + dp2[i]);
    }

    return maxProfit;
};
