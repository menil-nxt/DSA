// Add Two Numbers

function addTwoNumbers(l1, l2) {
  // let create one dummy node for where to starting our actual list
  // and ans is pointing to dummy node
  let ans = new ListNode();
  let ansHead = ans;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10); // it's give you carry of sum
    let digit = sum % 10; // it's give you reminder of sum

    // create new node with new digit
    let newNode = new ListNode(digit);
    ans.next = newNode;
    ans = ans.next;

    l1 = l1 && l1.next; // if both are exist than only l1 move head
    l2 = l2 && l2.next; // if both are exist than only l2 move head
  }
  return ansHead.next; // it's starting of your linked list
}
