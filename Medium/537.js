// 537. Complex Number Multiplication
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
  const [r1, i1] = num1.split('+').map(n => parseInt(n.replace('i', '')));
  const [r2, i2] = num2.split('+').map(n => parseInt(n.replace('i', '')));
  return `${r1 * r2 - i1 * i2}+${r1 * i2 + r2 * i1}i`;
};