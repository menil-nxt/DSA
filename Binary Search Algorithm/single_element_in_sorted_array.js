// Single Element in a Sorted Array

// Linear Search Approach (without map)(with array)
function singleNonDuplicate(nums) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] != nums[i + 1]) {
      return nums[i];
    } else if (nums[i] === nums[i + 1]) {
      i = i + 2;
    }
  }
}

// Linear Search Approach (with map)
function singleNonDuplicate(nums) {
  const map = {}; // Creating a plain JS object

  // Step 1: Count the frequency of each number
  for (let num of nums) {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  // Step 2: Iterate through the object keys to find the one with count 1
  for (let num in map) {
    if (map[num] === 1) {
      return Number(num); // Object keys are strings, so we convert back to a number
    }
  }
}

function singleNonDuplicate(nums) {
  const map = {}; // Creating a plain JS object

  // Step 1: Count the frequency of each number
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  console.log(map);
  // Step 2: Iterate through the object keys to find the one with count 1
  for (let num in map) {
    if (map[num] === 1) {
      return Number(num); // Object keys are strings, so we convert back to a number
    }
  }
}

// Binary search
function singleNonDuplicate(nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = l + (r - l) / 2;
    if (nums[m] != nums[m + 1] && nums[m] != nums[m - 1]) {
      return nums[m];
    }

    // where is mid of pair element is exist

    // pair of mid is exist on left side
    if (nums[m] === nums[m - 1]) {
      // where is odd exist
      leftCount = m - 1 - l;
      if (leftCount % 2 === 1) {
        // odd
        r = m - 2; // left side odd exist
      } else {
        l = m + 1; // right side odd is exist
      }
    }

    // pair of mid is exist on right side
    if (nums[m] === nums[m + 1]) {
      // where is odd exist
      rightCount = r - (m + 1);
      if (rightCount % 2 === 1) {
        l = m + 2; // right side odd is exist
      } else {
        r = m - 1; // left side odd is exist
      }
    }
  }
}
