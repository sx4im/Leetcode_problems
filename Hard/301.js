// 301. Remove Invalid Parentheses
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const result = new Set();
  let minRemoved = Infinity;

  backtrack(s, 0, 0, 0, 0, '');

  return Array.from(result);

  function backtrack(str, index, open, close, removed, curr) {
    if (index === s.length) {
      if (open === close && removed <= minRemoved) {
        if (removed < minRemoved) {
          result.clear();
          minRemoved = removed;
        }
        result.add(curr);
      }
      return;
    }

    if (s[index] !== '(' && s[index] !== ')') {
      backtrack(str, index + 1, open, close, removed, curr + s[index]);
    } else {
      backtrack(str, index + 1, open, close, removed + 1, curr);
      if (s[index] === '(') {
        backtrack(str, index + 1, open + 1, close, removed, curr + '(');
      } else if (close < open) {
        backtrack(str, index + 1, open, close + 1, removed, curr + ')');
      }
    }
  }
};