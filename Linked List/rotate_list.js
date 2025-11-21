// Rotate List

function rotateRight(head, k) {
  // corner cases
  if (!head || !head.next) return head;

  // calculating length
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  // avoiding the unneccessary rotation
  // ex = 16 % length(5) = 1; loop run only for one rotaion
  k = k % length;

  // reach first pointer to k steps ahead
  let second = head;
  let first = head;
  for (let i = 0; i < k; i++) {
    first = first.next;
  }

  // reaching the end of list
  while (first.next) {
    second = second.next;
    first = first.next;
  }

  // connect first pointing last node to first(head) node
  first.next = head;

  // assien newHead is your second.next
  let newHead = second.next;

  // than your second.next part is pointing to null and last node allready connected to first(head) head
  second.next = null;

  // return this newHead beacuse newHead to last node is connected to first(head) node so now newHead is your represented your list
  return newHead;
}
