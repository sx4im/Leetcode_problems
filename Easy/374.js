// 374. Guess Number Higher or Lower
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const pivot = Math.floor((right + left) / 2);
    switch (guess(pivot)) {
      case -1: right = pivot - 1; break;
      case 1: left = pivot + 1; break;
      case 0: return pivot;
    }
  }
};