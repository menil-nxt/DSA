//  Find K Closest Elements

// Linear Search

function findClosestElement(arr, k, x) {
  let diff = [];

  // Linear traversal
  for (let i = 0; i < arr.length; i++) {
    diff.push([Math.abs(arr[i] - x), arr[i]]);
  }

  // Sort by difference then value
  diff.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let result = [];

  // Take first k elements
  for (let i = 0; i < k; i++) {
    result.push(diff[i][1]);
  }

  // Sort result
  result.sort((a, b) => a - b);

  return result;
}

// (Binary Search)

function findClosestElement(arr, k, x) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    // if both are at same potion loop is break -> l == r
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid + k] - x < x - arr[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return arr.slice(l, l + k);
}

function findClosestElement(arr, k, x) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    // if both are at same potion loop is break -> l == r
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid + k] - x < x - arr[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  let ans = [];
  for (let i = l; i < l + k; i++) {
    ans.push(arr[i]);
  }

  return ans;
}
