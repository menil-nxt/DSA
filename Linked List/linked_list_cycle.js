// Linked List Cycle

// Approch - 1
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
