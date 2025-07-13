// 73. Set Matrix Zeroes
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let firstRowZero = false, firstColZero = false;
    const m = matrix.length, n = matrix[0].length;

    // First row and column flags
    for (let i = 0; i < m; i++) if (matrix[i][0] === 0) firstColZero = true;
    for (let j = 0; j < n; j++) if (matrix[0][j] === 0) firstRowZero = true;

    // Mark zeros in first row and col
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Zero out marked cells
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (firstRowZero) for (let j = 0; j < n; j++) matrix[0][j] = 0;
    if (firstColZero) for (let i = 0; i < m; i++) matrix[i][0] = 0;
};
