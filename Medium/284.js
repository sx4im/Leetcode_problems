// 284. Peeking Iterator
/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
  this.iterator = iterator;
  this.peekValue = iterator.next();
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  return this.peekValue;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  const next = this.peekValue;
  this.peekValue = this.iterator.next();
  return next;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  return this.peekValue > 0;
};