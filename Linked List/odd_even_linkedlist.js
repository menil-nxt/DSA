// Odd Even Linked List

function oddEven(head) {
  let odd = head;
  let even = head.next;
  let evenStart = even; // troring this even start value because after odd list finish from odd.next attach this even startnode
  while (odd.next && even.next) {
    // here you can not (even.next && odd.next) because before odd.next(even) check it's present or not we can not check even.next
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next; // keep move ahead next position
    even = even.next; // keep move ahead next poistion
  }
  odd.next = evenStart; // odd.next is connect with evenStart node

  return head;
}
