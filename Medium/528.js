// 528. Random Pick with Weight
/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.sums = [];
  let sum = 0;
  for (const weight of w) {
    sum += weight;
    this.sums.push(sum);
  }
  this.total = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const target = Math.random() * this.total;
  let left = 0;
  let right = this.sums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (this.sums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};