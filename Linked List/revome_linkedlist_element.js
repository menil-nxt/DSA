// Remove Linked List Element

// function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)       val is there than retuen val otherwise return 0
//      this.next = (next===undefined ? null : next)    next is node value is there than return next otherwise return null
// }

function removeElement(head, val) {
  // create setinel node with below function refrence

  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  while (prev && prev.next) {
    if (prev.next == val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinel.next;
}
