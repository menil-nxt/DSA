// 3 Sum

function threeSum(nums) {
  // sort the original array
  nums.sort((a, b) => a - b); // sort both which ever is lower -> first , Higher -> second
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      // Corner case if prev i is same than avoid that duplicate ans not call twoSum
      twoSum(nums, i, ans); // two sum problem is called with nums(array) , i(a) , ans(array)
    }
  }
  return ans;
}

function twoSum(nums, a, ans) {
  let i = a + 1;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[a] + nums[j] + nums[i];
    if (sum > 0) {
      // Sum === 0 than it's triplets
      j--;
    } else if (sum < 0) {
      i++;
    } else {
      ans.push([nums[a], nums[j], nums[i]]);
      i++;
      j--;
      while (i < j && nums[i] == nums[i - 1]) {
        // if both are same prev and curr than both are duplicate than i move ahead
        i++;
      }
    }
  }
}
