// 224. Basic Calculator
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let result = 0;

  for (let i = 0, sign = 1; i < s.length; i += 1) {
    if (s[i] >= '0' && s[i] <= '9') {
      let value = 0;
      while (s[i] >= '0' && s[i] <= '9') {
        value = (value * 10) + (s[i] - '0');
        i += 1;
      }
      result += value * sign;
      i -= 1;
    } else if (s[i] === '+') {
      sign = 1;
    } else if (s[i] === '-') {
      sign = -1;
    } else if (s[i] === '(') {
      stack.push(result, sign);
      result = 0;
      sign = 1;
    } else if (s[i] === ')') {
      result = stack.pop() * result;
      result += stack.pop();
    }
  }

  return result;
};