// 402. Remove K Digits
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const stack = [];

  for (const n of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > n) {
      stack.pop();
      k--;
    }
    stack.push(n);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  const result = stack.join('').replace(/^0+/, '');
  return result.length ? result : '0';
};