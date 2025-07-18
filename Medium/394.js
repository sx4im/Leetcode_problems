// 394. Decode String
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let result = '';
  let decoder = 0;

  for (const c of s) {
    if (!isNaN(c) && Number(c) >= 0 && Number(c) <= 9) {
      decoder = Number(c) + decoder * 10;
    } else if (c === '[') {
      stack.push([result, decoder]);
      result = '';
      decoder = 0;
    } else if (c === ']') {
      const [previous, count] = stack.pop();
      result = previous + result.repeat(count);
    } else {
      result += c;
    }
  }

  return result;
};