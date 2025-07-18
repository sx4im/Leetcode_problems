// 378. Kth Smallest Element in a Sorted Matrix
var RandomizedSet = function() {
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  const hasValue = this.set.has(val);
  this.set.add(val);
  return !hasValue;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  const hasValue = this.set.has(val);
  this.set.delete(val);
  return hasValue;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const item = Array.from(this.set);
  const randomIndex = Math.floor(Math.random() * item.length);
  return item[randomIndex];
};