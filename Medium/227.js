// 227. Basic Calculator II
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];

  for (let i = 0, num = 0, sign = '+'; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') num = num * 10 + (s[i] - '0');
    if ((s[i] < '0' && s[i] !== ' ') || i === s.length - 1) {
      if (sign === '+') stack.push(num);
      else if (sign === '-') stack.push(-num);
      else if (sign === '*') stack.push(stack.pop() * num);
      else if (sign === '/') stack.push(Math.trunc(stack.pop() / num));
      sign = s[i];
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};