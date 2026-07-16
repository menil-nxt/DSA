// Heap-sort

let arr = [4, 10, 5, 1, 3, 45, 23, 7];

function heapSort(arr) {
  let n = arr.length;

  // create a max heap
  // not need to heapifyDown or find max heap for leaf node. // so in any tree n / 2 node are leaf node and n / 2 is parents node that has child.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // sort the array
  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i); // because every time i is decrising so length of arr is also decrising
  }
  return arr;
}

function heapifyDown(arr, i, n) {
  let largest = i;

  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}

const ans = heapSort(arr);
console.log(ans);
