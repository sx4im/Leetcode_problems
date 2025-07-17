// 147. Insertion Sort List
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  const result = new ListNode(0);

  while (head) {
    const tail = head;
    let current = result;
    head = head.next;

    while (current) {
      if (!current.next || tail.val <= current.next.val) {
        [current.next, tail.next] = [tail, current.next];
        break;
      }
      current = current.next;
    }
  }

  return result.next;
};
