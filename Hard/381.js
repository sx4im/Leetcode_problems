// 381. Insert Delete GetRandom O(1) - Duplicates allowed
var RandomizedCollection = function() {
  this.values = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  this.values.push(val);
  const values = this.map.get(val) || new Set();
  values.add(this.values.length - 1);
  this.map.set(val, values);
  return values.size === 1;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if (!this.map.has(val)) return false;
  const values = this.map.get(val);
  const index = values.values().next().value;
  values.delete(index);
  if (index < this.values.length - 1) {
    const last = this.values.pop();
    this.values[index] = last;
    const lastValues = this.map.get(last);
    lastValues.delete(this.values.length);
    lastValues.add(index);
  } else {
    this.values.pop();
  }
  if (!values.size) {
    this.map.delete(val);
  }
  return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  return this.values[Math.floor(Math.random() * this.values.length)];
};