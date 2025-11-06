function Node(val) {
  this.val = val;
  this.next = null;
}
let myLinkedList = function () {
  this.head = null;
  this.size = 0;
};

// delete at index
function deletAtIndex(index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
}
