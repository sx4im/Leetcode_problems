// 316. Remove Duplicate Letters
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (stack.indexOf(letter) > -1) {
      continue;
    }
    while (stack.length > 0 && stack[stack.length - 1] > letter && s.indexOf(stack[stack.length - 1], i) > i) {
      stack.pop();
    }
    stack.push(letter);
  }

  return stack.join('');
};