// 328. Odd Even Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head) return head;

  const even = head.next;
  let odd = head;

  while (odd.next && odd.next.next) {
    const pointer = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    pointer.next = odd.next;
  }

  odd.next = even;
  return head;
};