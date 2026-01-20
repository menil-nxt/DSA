// Next Greater Element I (Brute Force(with-out stack))

var nextGreaterElement = function (nums1, nums2) {
  let ans = [];

  // Loop through the first array
  for (let i = 0; i < nums1.length; i++) {
    let fix = -1; // Default answer is -1

    // Loop through second array to find the match
    for (let j = 0; j < nums2.length; j++) {
      // We found the number from nums1 inside nums2
      if (nums1[i] == nums2[j]) {
        // Start searching from the NEXT index (j + 1)
        for (let k = j + 1; k < nums2.length; k++) {
          // Check if this number is bigger
          if (nums1[i] < nums2[k]) {
            fix = nums2[k]; // assien that number to fix default value
            break; // break the loop
          }
        }
      }
    }
    ans.push(fix); //push our all default values in-side ans
  }
  return ans;
};

/*
    1. The Short Answer
    In programming, when you want to access items in an array one by one using a loop, the computer needs to know the Position Number (Index), not the number inside that position.
    j = The Index (The address/position, e.g., 0, 1, 2, 3...)
    nums2[j] = The Value (The actual number sitting there, e.g., 50, 99, 4...)
    We set k = j + 1 because we want to start looking at the next position.

    2. Why k = nums2[j] breaks the code
    Imagine nums2 is this array: [10, 20, 55, 60].
    Let's say our loop is currently at 20.
    The Index (j) is 1.
    The Value (nums2[j]) is 20.

    Scenario A: Correct (k = j + 1)
    We want to look at the numbers after 20.
    We start k at j + 1 (which is 1 + 1 = 2).
    Does index 2 exist? Yes (it's 55). Perfect!

    Scenario B: Incorrect (k = nums2[j])
    We try to start k at nums2[j] (which is 20).
    The loop tries to access nums2[20].
    ERROR: The array only has 4 items! Index 20 doesn't exist. The code crashes or gives undefined.

    3. The "House" Analogy
    Think of an array like a street with houses.
    Index (j): The House Address (0, 1, 2, 3).
    Value (nums2[j]): The Person living inside (Dave, Sarah, Mike).

    If you are at house #1 and want to visit the next neighbor, you go to House #2 (j + 1). You do not go to House #Sarah (nums2[j]). "Sarah" is not an address; you can't walk to "House Sarah".
    */

// Next Greater Element I (With Stack)

function nextGreaterElement(nums1, arr) {
  let ngeMap = {};
  let stack = [];
  let n = arr.length;

  stack.push(arr[n - 1]);
  ngeMap[arr[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (arr[i] < top) {
      ngeMap[arr[i]] = top;
    } else {
      while (stack.length) {
        if (stack[stack.length - 1] < arr[i]) {
          stack.pop();
        } else {
          ngeMap[arr[i]] = stack[stack.length - 1];
          break;
        }
      }
      if (stack.length === 0) {
        ngeMap[arr[i]] = -1;
      }
    }
    stack.push(arr[i]);
  }

  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(ngeMap[nums1[i]]);
  }

  return ans;
}

//  Next Greater Element I - (Optimized Approch)

function nextGreaterElement(nums1, arr) {
  let ngeMap = {};
  let stack = [];
  let n = arr.length;

  stack.push(arr[n - 1]);
  ngeMap[arr[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] < arr[i]) {
        stack.pop();
      } else {
        ngeMap[arr[i]] = stack[stack.length - 1];
        break;
      }
    }
    if (stack.length === 0) {
      ngeMap[arr[i]] = -1;
    }
    stack.push(arr[i]);
  }

  return nums1.map((x) => ngeMap[x]);
}
