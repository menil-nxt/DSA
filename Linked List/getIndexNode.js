function Node(val) {
    this.val = val;
    this.next = null;
}
let myLinkedList = function () {
  this.head = null;
  this.size = 0;
};

// Get index node or element
function get(val){
    if(index < 0 || index >= this.size) return -1;

    curr = this.head;   // pointer
    for(let i = 0; i < index; i++){     // loop throw till index
        curr = curr.next;
    }
    return curr.val;    // if ask you return node -> only curr
}
