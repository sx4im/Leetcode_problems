// 476. Number Complement
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return parseInt(num.toString(2).split('').map(n => 1 - n).join(''), 2);
};