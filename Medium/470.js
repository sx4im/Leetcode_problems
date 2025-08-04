// 470. Implement Rand10() Using Rand7()
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  while (true) {
    const n = (rand7() - 1) * 7 + rand7();
    if (n <= 40) {
      return (n % 10) + 1;
    }
  }
};