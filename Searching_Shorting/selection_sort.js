// Selection sort

let arr = [3, 7, 4, 8, 10, 0, -22, 45, 67];

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j; // min = index of j
      }
    }
    if (arr[min] != i) {
      // if(min value is not equal to i than swapping is happend)
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
console.log(selectionSort(arr));
