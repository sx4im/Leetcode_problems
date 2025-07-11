// 38. Count and Say
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";

    let prev = countAndSay(n - 1);
    let result = '';
    let count = 1;

    for (let i = 1; i <= prev.length; i++) {
        if (prev[i] === prev[i - 1]) {
            count++;
        } else {
            result += count.toString() + prev[i - 1];
            count = 1;
        }
    }

    return result;
};
