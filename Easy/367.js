// 367. Valid Perfect Square
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let i = 1;

  while (num > 0) {
    num -= i;
    i += 2;
    if (num === 0) {
      return true;
    }
  }

  return false;
};