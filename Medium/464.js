// 464. Can I Win
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  const memo = new Map();
  const sum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;

  if (desiredTotal <= 0) return true;
  if (sum < desiredTotal) return false;

  return check(0, desiredTotal);

  function check(state, remaining) {
    if (remaining <= 0) return false;

    const key = state.toString();
    if (memo.has(key)) return memo.get(key);

    for (let i = 1; i <= maxChoosableInteger; i++) {
      const mask = 1 << i;
      if (!(state & mask) && (i >= remaining || !check(state | mask, remaining - i))) {
        memo.set(key, true);
        return true;
      }
    }

    memo.set(key, false);
    return false;
  }
};