// 202. Happy Number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

    const getNext = (num) => {
        let total = 0;
        while (num > 0) {
            let d = num % 10;
            total += d * d;
            num = Math.floor(num / 10);
        }
        return total;
    }

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }

    return n === 1;
};
