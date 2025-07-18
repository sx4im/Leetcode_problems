// 398. Random Pick Index
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!this.map.has(nums[i])) {
      this.map.set(nums[i], []);
    }
    this.map.get(nums[i]).push(i);
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const result = this.map.get(target);
  return result[Math.floor(Math.random() * result.length)];
};
