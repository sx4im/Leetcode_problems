/**
 * 118. Pascal's Triangle
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];
  
    for (let i = 1; i < numRows; i++) {
      result[i] = [1];
      result[i - 1].forEach((value, j, prev) => {
        result[i][j + 1] = (prev[j + 1] + value) || 1;
      });
    }
  
    return result;
  };