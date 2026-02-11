// Find First and Last Position of Element in Sorted Array

function searchRange(nums, target) {
  //inatialy both variables are -1
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) {
        // if first time it's -1 than only it's change
        first = i;
      }
      last = i; // every time we update last till nums[i] > target
    }
  }

  return [first, last];
}
