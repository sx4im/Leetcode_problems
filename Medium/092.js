// 92. Reverse Linked List IIq2w3e4yuiikjh<xm
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head);
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let current = prev.next;
    for (let i = 0; i < right - left; i++) {
        const temp = current.next;
        current.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }

    return dummy.next;
};
