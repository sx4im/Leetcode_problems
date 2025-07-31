// 440. K-th Smallest in Lexicographical Order
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  let result = 1;
  k--;

  while (k > 0) {
    let count = 0;
    for (let first = result, last = result + 1; first <= n; first *= 10, last *= 10) {
      count += Math.min(n + 1, last) - first;
    }

    if (count <= k) {
      result++;
      k -= count;
    } else {
      result *= 10;
      k--;
    }
  }

  return result;
};