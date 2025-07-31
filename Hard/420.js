// 420. Strong Password Checker
/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function(password) {
  const types = 3 - (/[a-z]/.test(password) + /[A-Z]/.test(password) + /[0-9]/.test(password));
  let replacements = 0;
  let modOneCount = 0;
  let modTwoCount = 0;

  if (password.length < 6) {
    return Math.max(6 - password.length, types);
  }

  for (let i = 0; i < password.length;) {
    let j = i;
    while (j < password.length && password[j] === password[i]) {
      j++;
    }
    const repeatLength = j - i;
    if (repeatLength >= 3) {
      replacements += Math.floor(repeatLength / 3);
      if (repeatLength % 3 === 0) modOneCount++;
      if (repeatLength % 3 === 1) modTwoCount++;
    }
    i = j;
  }

  if (password.length <= 20) {
    return Math.max(types, replacements);
  }

  const deletions = password.length - 20;
  replacements -= Math.min(deletions, modOneCount);
  replacements -= Math.min(Math.max(deletions - modOneCount, 0), modTwoCount * 2) / 2;
  replacements -= Math.max(deletions - modOneCount - modTwoCount * 2, 0) / 3;

  return deletions + Math.max(types, Math.max(0, Math.ceil(replacements)));
};