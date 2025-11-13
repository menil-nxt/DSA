// Plindrome linked-list

// Approch - 1 (not solved)
var isPalindrome = function (arr) {
  convertArray(head);
  if (arr.length < 0) return false;
  let nCopy = arr;
  let reverse = [];
  for (let rev = arr[arr.length - 1]; rev < 0; rev--) {
    reverse.push(rev);
  }

  // let mid = Math.floor(arr.length / 2);
  // let reverseArray = [];
  // for(let i = 0; i < mid; i++){
  //     let rev = arr[arr.length - i - 1];
  //     if( arr[i] == rev){
  //         reverseArray.push(rev);
  //         i++;
  //     }
  // }
  if (reverse == nCopy) return true;
  else return false;
};

function convertArray(head) {
  let arr = [];
  while (head != null) {
    arr.push(head);
    head.next;
  }
  return arr;
}

// Approch - 2

function isPalindrome(head) {
  // find middle element of linked list
  let slow = (fast = head);
  while (fast && fast.next) {
    // fsat && fast.next != null than run loop
    slow = slow.next; // middle of list
    fast = fast.next.next; // full of list
  }

  // reversing second(right) List (reversed second half part of the list)
  let prev = null;
  let curr = slow; // we put curr at starting of second list so (slow is reached to middle)
  while (curr) {
    // curr is exist -> (curr != null)
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // finding palindrome
  let firstList = head; // first half part of list  1(head) --> 2 --> 3(middle) --> 2 --> 1
  let secondList = prev; // second half part of list   1 --> 2 --> 3(pointing to null)(middle) <-- 2 <-- 1(prev)
  while (secondList) {
    if (firstList.val != secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
}
