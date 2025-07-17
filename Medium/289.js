// 289. Game of Life
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const directions = [[1, -1], [1, 0], [1, 1], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1]];
  const r = board.length;
  const c = board[0].length;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let lives = 0;
      for (const d of directions) {
        if (d[0] + i < 0 || d[0] + i >= r || d[1] + j < 0 || d[1] + j >= c) {
          continue;
        } else if (board[d[0] + i][d[1] + j] === 1 || board[d[0] + i][d[1] + j] === 2) {
          lives++;
        }
      }
      if (board[i][j] === 0 && lives === 3) {
        board[i][j] = 3;
      } else if (board[i][j] === 1 && (lives < 2 || lives > 3)) {
        board[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      board[i][j] %= 2;
    }
  }
};