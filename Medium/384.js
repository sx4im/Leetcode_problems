// 384. Shuffle an Array
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.original = [...nums];
  this.result = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.result = [...this.original];
  return this.result;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  for (let i = this.result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.result[i], this.result[j]] = [this.result[j], this.result[i]];
  }
  return this.result;
};