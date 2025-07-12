// 25. Reverse Nodes in k-Group
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
var reverseKGroup = function(head, k) {
    // Helper function to get the kth node
    const getKth = (curr, k) => {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    };

    const dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        const kth = getKth(groupPrev, k);
        if (!kth) break;

        let groupNext = kth.next;
        // Reverse the group
        let prev = kth.next;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        // Adjust group pointers
        let tmp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = tmp;
    }

    return dummy.next;
};
