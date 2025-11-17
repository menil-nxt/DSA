// Remove Nth node from end of list

// function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)       val is there than retuen val otherwise return 0
//      this.next = (next===undefined ? null : next)    next is node value is there than return next otherwise return null
// }

// Approch - 1 (Two Pass)
function removeNode(head, n) {
  // for finding nth node or deleting that we need sentinel node
  // when you have any question about remove any node frome list at that time in your first come sentinel node
  let sentinel = new ListNode();
  sentinel.next = head;

  // find the length of linked list
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  // for finding deleting node formula
  //   deleteNode = length - n + 1;

  // for deleting nth npde we must know previous node
  prevPosition = length - n; // formula to reach at previous position length - n

  prev = sentinel; // prev pointing to sentinel
  for (let i = 0; i < prevPosition; i++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return sentinel.next;
}

// Approch - 2 (One pass) (with --> two pointer)

function removeNode() {
  // add a sentinel node at start
  let sentinel = new ListNode();
  sentinel.next = head;

  // move my first pointer ahead bt n
  first = sentinel; // initialy first pointer at sentinel node
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  // move both pointer untile first pointer reach at last node
  let second = sentinel;
  while (first.next) {
    first = first.next;
    second = second.next;
  }

  // just delete second.next node
  second.next = second.next.next;

  return sentinel.next;
}
