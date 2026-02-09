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
