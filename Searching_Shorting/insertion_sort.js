// Insertion sort

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

let arr = [6, 5, 8, 3, 1, 7, 2, 0, -10, -9, -5];

let result = insertionSort(arr);
console.log(result);
