// 51. N-Queens
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let cols = new Set(),
        d1 = new Set(),
        d2 = new Set(),
        state = Array(n),
        ans = [];

    function back(r) {
        if (r === n) {
            let board = state.map(c => {
                let row = Array(n).fill('.');
                row[c] = 'Q';
                return row.join('');
            });
            ans.push(board);
            return;
        }
        for (let c = 0; c < n; c++) {
            let k1 = r - c, k2 = r + c;
            if (cols.has(c) || d1.has(k1) || d2.has(k2)) continue;
            cols.add(c); d1.add(k1); d2.add(k2);
            state[r] = c;
            back(r + 1);
            cols.delete(c); d1.delete(k1); d2.delete(k2);
        }
    }

    back(0);
    return ans;
};
