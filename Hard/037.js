// 37. Sudoku Solver
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (r, c, val) => {
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === val) return false;
            if (board[i][c] === val) return false;
            const rowBox = 3 * Math.floor(r / 3) + Math.floor(i / 3);
            const colBox = 3 * Math.floor(c / 3) + i % 3;
            if (board[rowBox][colBox] === val) return false;
        }
        return true;
    };

    const solve = () => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let d = 1; d <= 9; d++) {
                        const val = d.toString();
                        if (isValid(r, c, val)) {
                            board[r][c] = val;
                            if (solve()) return true;
                            board[r][c] = '.'; // backtrack
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();
};
