// Linear Search Algoritham

let arr = [5, 3, 6, 8, 3, 0, 1, 2]; // target -> 0  target to find in this array.
// in array iterate loop on each of element on by one and -> check if this target is present or not

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
}

console.log(linearSearch(arr, 10));
