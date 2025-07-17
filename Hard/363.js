// 363. Max Sum of Rectangle No Larger Than K
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  let max = -Infinity;

  for (let l = 0; l < matrix[0].length; l++) {
    const counts = new Array(matrix.length).fill(0);
    for (let r = l; r < matrix[0].length; r++) {
      for (let i = 0; i < matrix.length; i++) counts[i] += matrix[i][r];
      const set = new Set([0]);
      let sum = 0;
      let value = -Infinity;
      for (const num of counts) {
        sum += num;
        for (const previous of set) {
          if (sum - previous <= k) {
            value = Math.max(value, sum - previous);
          }
        }
        set.add(sum);
      }
      max = Math.max(max, value);
    }
  }

  return max;
};