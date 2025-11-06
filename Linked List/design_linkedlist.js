// Design Linked list

// creating node with this function
function Node(val) {
  this.val = val;
  this.next = null;
}

let newNode = new Node(7); // with new key-word we are created new node with diffrent values.
let newNode1 = new Node(5);
console.log(newNode);
console.log(newNode1);

// creating new linked list with this function
let myLinkedList = function () {
  // linked-list is a represented of it's --> head
  this.head = null; // linked list is empty that's why head is null
  this.size = 0; // size of linked-list is iniitaly 0;
};

let newLinkedList = new myLinkedList();
console.log(newLinkedList);

// adding node at head

function addAtHead(val) {
  let newNode = new Node(val); // new node created
  newNode.next = this.head; // new node -> next assien to -> this.head (privous head we can say)
  this.head = newNode; // now head assien to --> newNode
  this.size++; // increse size of your linked-list by +1
}

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

// Get index node or element
function get(val) {
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head; // pointer
  for (let i = 0; i < index; i++) {
    // loop throw till index
    curr = curr.next;
  }
  return curr.val; // if ask you return node -> only curr
}

// Delete at the index
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
