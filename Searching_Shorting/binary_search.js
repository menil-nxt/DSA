// Binary Search => always shorted array.

function binarySearch(arr, target) {
  let left = 0; // two pointers are taken left and right
  let right = arr.length - 1;

  while (right >= left) {
    // if array containes only one element [2] and target = 2. then (right >= left)
    let middle = Math.floor((left + right) / 2);

    if (target == arr[middle]) {
      return middle;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

let arr = [-1, 3, 4, 5, 6, 7, 8, 9, 22];
console.log(binarySearch(arr, 8));
