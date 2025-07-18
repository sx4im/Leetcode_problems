// 341. Flatten Nested List Iterator
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.stack = [];
  this.flatten(nestedList);
};

/**
 * @this NestedIterator
 * @param {NestedInteger[]} nestedList
 * @returns {void}
 */
NestedIterator.prototype.flatten = function(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    this.stack.push(list[i]);
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  while (this.stack.length > 0 && !this.stack[this.stack.length - 1].isInteger()) {
    const nested = this.stack.pop().getList();
    this.flatten(nested);
  }
  return this.stack.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  return this.stack.pop().getInteger();
};