// Find Peak Element

// Linear Search

function findPeakElement(nums) {
  if (nums.length === 1) return 0;

  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < prev) {
      return i - 1;
    }
    prev = nums[i];
  }

  // If never dropped, last element is a peak
  return nums.length - 1;
}

// Binary Search

function findPeakElement(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mis + 1] > arr[mid]) {
      l = mid + 1; // no chance to peak on left side so it always on right
    } else {
      // arr[mis + 1] < arr[mid]
      r = mid; // mid also included in next search space.
    }
  }
  return l; // or r because both are at same position
}
