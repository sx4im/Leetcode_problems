// 241. Different Ways to Add Parentheses
/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
  const results = [];

  for (let i = 0; i < expression.length; i++) {
    if ('+-*'.includes(expression[i])) {
      const left = diffWaysToCompute(expression.slice(0, i));
      const right = diffWaysToCompute(expression.slice(i + 1));
      left.forEach(l => right.forEach(r =>
        results.push(expression[i] === '+' ? l + r : expression[i] === '-' ? l - r : l * r)));
    }
  }

  return results.length ? results : [+expression];
};