// 481. Magical String
/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  if (n <= 0) return 0;
  if (n <= 3) return 1;

  const stack = [1, 2, 2];
  let result = 1;

  for (let i = 2, num = 1; stack.length < n; i++) {
    for (let j = 0; j < stack[i]; j++) {
      stack.push(num);
      if (num === 1 && stack.length <= n) {
        result++;
      }
    }
    num = num === 1 ? 2 : 1;
  }

  return result;
};