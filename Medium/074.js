// 74. Search a 2D Matrix
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let val = matrix[Math.floor(mid / n)][mid % n];

        if (val === target) return true;
        else if (val < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
};
