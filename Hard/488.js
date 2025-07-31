// 488. Zuma Game
/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {
  const handCount = {};
  for (const ball of hand) {
    handCount[ball] = (handCount[ball] || 0) + 1;
  }

  const memo = new Map();

  function dfs(board, hand) {
    if (board.length === 0) return 0;
    if (Object.values(hand).every(count => count === 0)) return -1;
    const key = board + getHandString(hand);
    if (memo.has(key)) return memo.get(key);
    let minSteps = Infinity;

    for (const color in hand) {
      if (hand[color] <= 0) continue;
      hand[color]--;
      for (let i = 0; i <= board.length; i++) {
        if (i > 0 && i < board.length) {
          const left = board[i-1];
          const right = board[i];
          if (left !== color && right !== color && left !== right) continue;
        }
        const newBoard = board.slice(0, i) + color + board.slice(i);
        const afterRemove = removeConsecutive(newBoard);
        const steps = dfs(afterRemove, hand);
        if (steps !== -1) {
          minSteps = Math.min(minSteps, steps + 1);
        }
      }
      hand[color]++;
    }
    const result = minSteps === Infinity ? -1 : minSteps;
    memo.set(key, result);
    return result;
  };

  return dfs(board, handCount);
};

function getHandString(hand) {
  return Object.entries(hand)
    .filter(([_, count]) => count > 0)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([color, count]) => color + count)
    .join('');
}

function removeConsecutive(board) {
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < board.length;) {
      let j = i;
      while (j < board.length && board[j] === board[i]) {
        j++;
      }
      if (j - i >= 3) {
        board = board.substring(0, i) + board.substring(j);
        changed = true;
        i = 0;
      } else {
        i++;
      }
    }
  }
  return board;
}