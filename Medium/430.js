// 430. Flatten a Multilevel Doubly Linked List
/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
  if (!head) return null;

  let current = head;
  while (current) {
    if (!current.child) {
      current = current.next;
    } else {
      const { child, next } = current;
      current.child = null;
      current.next = child;
      child.prev = current;

      let tail = child;
      while (tail.next) {
        tail = tail.next;
      }

      tail.next = next;
      if (next) {
        next.prev = tail;
      }
      current = current.next;
    }
  }

  return head;
};