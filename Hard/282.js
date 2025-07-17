// 282. Expression Add Operators
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  const result = [];
  backtrack('', 0, 0, 0);
  return result;

  function backtrack(expression, sum, prev, start) {
    if (start === num.length && sum === target) {
      result.push(expression);
      return;
    }
    for (let i = start, str = ''; i < num.length; i++) {
      str += num[i];
      const n = Number(str);
      if (!start) {
        backtrack(str, n, n, i + 1);
        if (str === '0') return;
        continue;
      }
      backtrack(expression + '*' + n, sum - prev + prev * n, prev * n, i + 1);
      backtrack(expression + '+' + n, sum + n, n, i + 1);
      backtrack(expression + '-' + n, sum - n, -n, i + 1);
      if (str === '0') return;
    }
  }
};