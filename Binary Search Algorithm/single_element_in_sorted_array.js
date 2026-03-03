// Singlr Element in a Sorted Array

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
