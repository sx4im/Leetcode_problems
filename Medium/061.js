// 61. Rotate List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Get length and tail
    let len = 1, tail = head;
    while (tail.next) {
        tail = tail.next;
        len++;
    }

    k = k % len;
    if (k === 0) return head;

    tail.next = head; // Make it circular
    let stepsToNewHead = len - k;
    let newTail = tail;

    while (stepsToNewHead--) {
        newTail = newTail.next;
    }

    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};
