// Peak Index in a Mountain Array

// Linear way

function peakIndexInMountainArray(arr) {
  let max = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  return index;
}

//Binary Search

function peakIndexInMountainArray(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < arr[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return r;
}
