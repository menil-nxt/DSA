// Swap Nodes In Pairs (Iterative Approch)

function swapPairs(head) {
  // corner cases
  if (!head || !head.next) return head; // for swaping we must have two values or node

  // add prev node inisialy it's dummy node
  let dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let curr = head;
  let nxt = head.next;

  // if my curr and next node is present than and than loop is run
  while (curr && nxt) {
    prev.next = nxt;
    curr.next = nxt.next;
    nxt.next = curr;

    prev = curr;
    curr = prev.next;
    nxt = curr && curr.next;
  }
  return dummy.next;
}

// Swap Nodes In Pairs (Recursive Approch)

function swapPairs(head) {
  // base case
  if (!head || !head.next) return head;

  let left = head;
  let right = head.next;

  left.next = swapPairs(right.next);
  right.next = left;

  return right;
}
