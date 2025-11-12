// Linked List Cycle

// Approch - 1    ( Hash Map OR Hash Table)
function hasCycle(head) {
  let seenNodes = new Set(); // creating set
  let curr = head;

  while (curr != null) {
    if (seenNodes.has(curr)) {
      // if curr is allready present inside set than return true because is priviously added so element is present.
      return true;
    }
    seenNodes.add(curr); // otherwise add inside set that new current element
  }
  return false; // if null is there than while loop is break than it's return false.
}

// Approch - 2    (Floyd's  Algorithm) OR (Floyd's Cycle Finding Algorithm)

function hasCycle(head) {
  if (!head) return false;

  let slow = head;
  let fast = head.next; // because of i don't want to fast and slow both are collepssed at first place because we are starting from their.

  while (slow == fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
