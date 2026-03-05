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
