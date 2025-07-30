// 405. Convert a Number to Hexadecimal
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) {
    return num.toString();
  }
  const words = '0123456789abcdef';
  let result = '';
  while (num !== 0) {
    result = words[num & 0xf] + result;
    num >>>= 4;
  }
  return result;
};