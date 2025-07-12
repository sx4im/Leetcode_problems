// 23. Merge k Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const heap = [];

    // Push all non-null list heads into the heap
    for (let node of lists) {
        if (node) heap.push(node);
    }

    // Sort the heap by node value
    heap.sort((a, b) => a.val - b.val);

    const dummy = new ListNode(0);
    let current = dummy;

    while (heap.length > 0) {
        // Pop the smallest node
        let node = heap.shift();
        current.next = node;
        current = current.next;

        if (node.next) {
            // Insert the next node and re-sort
            heap.push(node.next);
            heap.sort((a, b) => a.val - b.val);
        }
    }

    return dummy.next;
};
