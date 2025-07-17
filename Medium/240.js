// 240. Search a 2D Matrix II

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let i = 0, j = matrix[0].length - 1; i < matrix.length && j >= 0;) {
    if (matrix[i][j] === target) {
      return true;
    }
    matrix[i][j] > target ? j-- : i++;
  }
  return false;
};