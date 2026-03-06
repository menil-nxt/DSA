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

// Optimize Approch

function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let pairTwoFind = target - nums[i];
    if (map[pairTwoFind] && map[pairTwoFind] != i) {
      return [i, map[pairTwoFind]];
    }
  }
}
