// Trapping Rain Water

var trap = function (arr) {
  let n = arr.length;

  // Calculating maxL
  let maxL = []; // this maxL Array
  maxL[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxL[i] = Math.max(arr[i], maxL[i - 1]); // maxL = Max between arr[i](curr) OR maxL[i - 1](prev element of maxL array)
  }

  // Calculating maxR
  let maxR = [];
  maxR[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxR[i] = Math.max(arr[i], maxR[i + 1]);
  }

  // Calculating ans
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
    // ans = ans + (waterTrapped < 0 ? 0 : waterTrapped);
    ans = ans + Math.max(waterTrapped, 0);
  }
  return ans;
};

// Another ways

var trap = function (arr) {
  let n = arr.length;

  // Calculating maxL OR maxR  (in one Loop)
  let maxL = []; // this maxL Array
  maxL[0] = arr[0];
  let maxR = [];
  maxR[n - 1] = arr[n - 1];
  for (let i = 1; i < arr.length; i++) {
    maxL[i] = Math.max(arr[i], maxL[i - 1]); // maxL = Max between arr[i](curr) OR maxL[i - 1](prev element of maxL array)
    maxR[n - 1 - i] = Math.max(arr[n - 1 - i], maxR[n - i]); // also claculating from last index n - i - 1 from last index it's starts
  }

  // Calculating ans
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
    ans = ans + (waterTrapped < 0 ? 0 : waterTrapped);
    // ans = ans + Math.max(waterTrapped , 0)
  }
  return ans;
};
