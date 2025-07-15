// 52. N-Queens II
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let cols = new Set(),
        d1 = new Set(),
        d2 = new Set(),
        count = 0;

    function back(r) {
        if (r === n) {
            count++;
            return;
        }
        for (let c = 0; c < n; c++) {
            let k1 = r - c, k2 = r + c;
            if (cols.has(c) || d1.has(k1) || d2.has(k2)) continue;
            cols.add(c); d1.add(k1); d2.add(k2);
            back(r + 1);
            cols.delete(c); d1.delete(k1); d2.delete(k2);
        }
    }

    back(0);
    return count;
};
