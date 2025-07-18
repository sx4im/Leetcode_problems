// 380. Insert Delete GetRandom O(1)
var RandomizedSet = function() {
  this.valToIndex = new Map();
  this.values = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.valToIndex.has(val)) return false;

  this.values.push(val);
  this.valToIndex.set(val, this.values.length - 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.valToIndex.has(val)) return false;

  const index = this.valToIndex.get(val);
  const last = this.values[this.values.length - 1];

  // Swap with last element
  this.values[index] = last;
  this.valToIndex.set(last, index);

  // Remove last element
  this.values.pop();
  this.valToIndex.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randIndex = Math.floor(Math.random() * this.values.length);
  return this.values[randIndex];
};
