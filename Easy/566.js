// 566. Reshape the Matrix
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  const flat = mat.flat();
  const result = [];

  if (flat.length !== r * c) {
    return mat;
  }

  while (flat.length) {
    result.push(flat.splice(0, c));
  }

  return result;
};