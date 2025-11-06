function Node(val) {
  this.val = val;
  this.next = null;
}
let myLinkedList = function () {
  this.head = null;
  this.size = 0;
};

// adding node at head
function addAtHead(val) {
  let newNode = new Node(val); // new node created
  newNode.next = this.head; // new node -> next assien to -> this.head (privous head we can say)
  this.head = newNode; // now head assien to --> newNode
  this.size++; // increse size of your linked-list by +1
}
