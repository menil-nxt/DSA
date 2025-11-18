// Remove Duplicate from sorted list

function removeDuplicate(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr !== curr.next) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  return head;
}
