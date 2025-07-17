// 138. Copy List with Random Pointer
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    // Step 1: interleave cloned nodes
    let curr = head;
    while (curr) {
        const newNode = new Node(curr.val);
        newNode.next = curr.next;
        curr.next = newNode;
        curr = newNode.next;
    }

    // Step 2: assign random pointers
    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    // Step 3: separate the lists
    curr = head;
    const cloneHead = head.next;
    while (curr) {
        const clone = curr.next;
        curr.next = clone.next;
        clone.next = clone.next ? clone.next.next : null;
        curr = curr.next;
    }

    return cloneHead;
};
