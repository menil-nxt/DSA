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
