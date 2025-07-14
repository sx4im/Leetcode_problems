// 118. Pascal's Triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]];
    for (let i = 1; i < numRows; i++) {
        let row = [1];
        let prev = res[i - 1];
        for (let j = 1; j < i; j++) {
            row.push(prev[j - 1] + prev[j]);
        }
        row.push(1);
        res.push(row);
    }
    return res;
};
