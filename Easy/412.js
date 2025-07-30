// 412. Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  return Array.from(new Array(n), (_, i) => i + 1).map(i =>
    i % 3 === 0 && i % 5 === 0
      ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : String(i)
  );
};