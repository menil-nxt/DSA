// Search in Rotated Sorted Array

function search(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    // Checking which part is sorted

    // 1. Left-side sorted
    if (arr[l] <= arr[mid]) {
      // if only two element are their than arr[l] <= arr[mid] equl-to is neeed
      if (target < arr[mid] && target >= arr[l]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    // right-side sorted
    else {
      // arr[l] > arr[mid]
      if (target > arr[mid] && target <= arr[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
}

let arr = [6, 7, 8, 0, 1, 2, 3, 4, 5];

console.log(search(arr, 1));
