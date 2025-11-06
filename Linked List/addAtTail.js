function Node(val) {
  this.val = val;
  this.next = null;
}

let myLinkedList = function () {
  this.head = null;
  this.size = 0;
};

// adding node at Tail
function addAttail(val) {
  let newNode = new Node(val); // if Linked list is not empty
  if (this.head == null) {
    // head == null
    this.head = newNode; // head is == newNode;
  } else {
    let curr = this.head; // curr(pointer) -> on head
    while (curr.next !== null) {
      // loop through over linked-list till we reached tail of linked-list
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
}
