// 382. Linked List Random Node
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let current = this.head;
  let result = current.val;
  let count = 1;

  while (current.next) {
    current = current.next;
    count++;
    if (Math.random() < 1 / count) {
      result = current.val;
    }
  }

  return result;
};