// Merge Sort

let arr = [4, 6, 2, 9, -10, 22, 45, 5];

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // function calling it self with left array
  let right = mergeSort(arr.slice(mid)); // function calling it self with right array

  return merge(left, right);
}

function merge(left, right) {
  // empty array
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  // logic for adding remening element
  return [...res, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort(arr));
