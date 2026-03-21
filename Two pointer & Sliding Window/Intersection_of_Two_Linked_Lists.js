//  Intersection of Two Linked Lists

var getIntersectionNode = function (headA, headB) {
  // calculating length of headA linked List
  let n = 0;
  let pA = headA;
  while (pA) {
    n++;
    pA = pA.next;
  }

  // calculating length of headB linked List
  let m = 0;
  let pB = headB;
  while (pB) {
    m++;
    pB = pB.next;
  }

  // calculating diff of length of headA and headB
  let diff = Math.abs(n - m);

  // I want this -> first list as small, second list as large
  if (n > m) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }

  // now First list as small, second list as large
  // move headB pointer at diffrence of both length

  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  // now both ponter at same length where you can start checking both are same or not
  pA = headA;
  pB = headB;

  while (pA != pB) {
    // if both are not equal than loop is run
    pA = pA.next;
    pB = pB.next;
  }

  // if both are same than return that intersection point

  return pA; // OR pB any of you can return both are at same position
};
