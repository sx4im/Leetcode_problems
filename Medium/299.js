// 299. Bulls and Cows
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const map = Array(10).fill(0);
  let a = 0;
  let b = 0;

  for (const i in secret) {
    if (secret[i] === guess[i]) {
      a++;
    } else {
      map[secret[i]]++;
      map[guess[i]]--;
      b += map[secret[i]] <= 0;
      b += map[guess[i]] >= 0;
    }
  }

  return `${a}A${b}B`;
};