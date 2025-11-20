// Merge Two Sorted List

// Approch - 1 (with out dummy node)

function mergeTwoLists(l1, l2) {
  if (!l1) return l2; // if l1 is not exist than only l2 return it
  if (!l2) return l1; // if l2 is not exist than only l1 return it

  // finding starting node of merged list
  let curr = null; // initially
  if (l1.val < l2.val) {
    curr = l1;
    l1 = l1.next;
  } else {
    curr = l2;
    l2 = l2.next;
  }
  let start = curr; //after finding curr of starting node storing into start for copy

  // finding second smallest vale and attech with it
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // if any of list is after loop null than your curr next part is connect with rest list
  if (!l1) {
    curr.next = l2;
  }
  if (!l2) {
    curr.next = l1;
  }
  return start;
}

// Approch - 2 (with Dummy node)

var mergeTwoLists = function (l1, l2) {
  // no need this things with dummy node

  // if(!l1) return l2;  // if l1 is not exist than only l2 return it
  // if(!l2) return l1;  // if l2 is not exist than only l1 return it

  // // finding starting node of merged list
  // let curr = null;    // initially
  // if(l1.val < l2.val){
  //     curr = l1;
  //     l1 = l1.next;
  // }
  // else{
  //     curr = l2;
  //     l2 = l2.next;
  // }
  // let start = curr;   //after finding curr of starting node storing into start for copy

  // add dummy node so we don't need or no need this finding first start node
  let start = new ListNode();
  let curr = start;
  // finding second smallest vale and attech with it
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // if any of list is after loop null than your curr next part is connect with rest list
  if (!l1) {
    curr.next = l2;
  }
  if (!l2) {
    curr.next = l1;
  }
  return start.next;
};
