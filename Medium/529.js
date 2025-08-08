// 529. Minesweeper
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const [row, col] = click;
  const rows = board.length;
  const cols = board[0].length;
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]
  ];

  if (board[row][col] === 'M') {
    board[row][col] = 'X';
    return board;
  }

  dfs(row, col);
  return board;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'E') return;

    let mines = 0;
    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] === 'M') {
        mines++;
      }
    }

    board[r][c] = mines > 0 ? mines.toString() : 'B';
    if (mines === 0) {
      for (const [dr, dc] of directions) {
        dfs(r + dr, c + dc);
      }
    }
  }
};