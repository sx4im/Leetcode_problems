// 390. Elimination Game
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let result = 1;

  for (let isRemaining = true, count = n, step = 1; count > 1;) {
    if (isRemaining || count % 2 === 1) {
      result += step;
    }
    count = Math.floor(count / 2);
    isRemaining = !isRemaining;
    step *= 2;
  }

  return result;
};