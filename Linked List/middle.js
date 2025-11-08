// Middle of the linked list
function middle(head) {
  let slow = head;
  let fast = head;
  // while(fast != null && fast.next != null) both are same
  while (fast && fast.next) {
    // loop is run till my fast or fast.next is exist
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
