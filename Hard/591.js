// 591. Tag Validator
/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  const stack = [];

  for (let i = 0; i < code.length;) {
    if (i > 0 && !stack.length) {
      return false;
    }
    if (code.startsWith('<![CDATA[', i)) {
      const j = i + 9;
      i = code.indexOf(']]>', j);
      if (i === -1) {
        return false;
      }
      i += 3;
    } else if (code.startsWith('</', i)) {
      const j = i + 2;
      i = code.indexOf('>', j);
      if (i === -1) {
        return false;
      }
      const tag = code.slice(j, i);
      if (!stack.length || stack.pop() !== tag || !/^[A-Z]{1,9}$/.test(tag)) {
        return false;
      }
      i++;
    } else if (code[i] === '<') {
      const j = i + 1;
      i = code.indexOf('>', j);
      if (i === -1) {
        return false;
      }
      const tag = code.slice(j, i);
      if (!/^[A-Z]{1,9}$/.test(tag)) {
        return false;
      }
      stack.push(tag);
      i++;
    } else {
      i++;
    }
  }

  return !stack.length;
};