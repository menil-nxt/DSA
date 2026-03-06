// Two Sum

// Brute force

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let add = nums[i] + nums[j];
      if (add === target) {
        return [i, j];
        break;
      }
    }
  }
}
