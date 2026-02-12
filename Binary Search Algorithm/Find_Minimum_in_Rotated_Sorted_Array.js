// Find Minimum in Rotated Sorted Array

// Linear Search

function findMin(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) {
      // if min > nums[i] than min become new nums[i].
      min = nums[i];
    }
  }
  return min;
}

// Binary Search

function findMin(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    // if searching space is sorted than return first element
    if (arr[l] <= arr[r]) {
      return arr[l];
    }

    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }

    // left part is non-sorted
    else if (arr[l] > arr[mid]) {
      r = mid - 1;
    }

    // right part is non-sorted
    else {
      l = mid + 1;
    }
  }
}
