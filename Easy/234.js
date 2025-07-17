// 234. Palindrome Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const vals = [];
    while (head) {
        vals.push(head.val);
        head = head.next;
    }
    let i = 0, j = vals.length - 1;
    while (i < j) {
        if (vals[i] !== vals[j]) return false;
        i++;
        j--;
    }
    return true;
};
