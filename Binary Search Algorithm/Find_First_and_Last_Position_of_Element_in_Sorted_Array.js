// Find First and Last Position of Element in Sorted Array

function searchRange(nums, target) {
  //inatialy both variables are -1
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) {
        // if first time it's -1 than only it's change
        first = i;
      }
      last = i; // every time we update last till nums[i] > target
    }
  }

  return [first, last];
}

// Binary Search

function searchRange(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let arr = [-1, -1];

  // for target starting index
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2); // Math.floor (Round Down -> 2.95 = 2)
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  if (nums[l] === target) arr[0] = l; // only index return not element

  // for target ending index
  l = 0;
  r = nums.length - 1;
  while (l < r) {
    let mid = l + Math.ceil((r - l) / 2); // Math.ceil (Round UP -> 2.95 = 3)
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }

  if (nums[l] === target) arr[1] = l; // only index return not element

  return arr;
}

// Approch - 2

function searchRange(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = [-1, -1];

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      ans[0] = mid;
      r = mid - 1; // r pointer is move mid - 1 for check if any another ending index is present or not (left side move)
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  l = 0;
  r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      ans[1] = mid;
      l = mid + 1; // l pointer is move mid + 1 for check if any another ending index is present or not (right side move)
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return ans;
}
