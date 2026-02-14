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
