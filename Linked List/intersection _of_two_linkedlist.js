// Interascton of two linked list

function intersction(headA, headB) {
  // put my all node of headB in side set
  let newSet = new Set();
  while (headB) {
    newSet.add(headB);
    headB = headB.next;
  }

  // checking set has head1 element(value) --> (check for each element of headA if they are present in set)
  while (headA) {
    if (newSet.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  return null;
}
