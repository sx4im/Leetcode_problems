// 79. Word Search
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length, n = board[0].length;

    function dfs(i, j, index) {
        if (index === word.length) return true;
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== word[index]) return false;

        const temp = board[i][j];
        board[i][j] = '#';

        const found = dfs(i+1, j, index+1) ||
                      dfs(i-1, j, index+1) ||
                      dfs(i, j+1, index+1) ||
                      dfs(i, j-1, index+1);

        board[i][j] = temp;
        return found;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};
