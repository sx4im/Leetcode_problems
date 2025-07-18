// 388. Longest Absolute File Path
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  const stack = [0];
  let result = 0;

  for (const line of input.split('\n')) {
    const level = line.lastIndexOf('\t') + 1;
    while (stack.length > level + 1) stack.pop();
    stack.push(stack.at(-1) + line.length - level + 1);
    if (line.includes('.')) {
      result = Math.max(result, stack.at(-1) - 1);
    }
  }

  return result;
};