function maxConsicutive(nums) {
  currCount = 0;
  maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currCount++;
    } else {
      maxCount = Math.max(currCount, maxCount);
      currCount = 0;
    }
  }

  return Math.max(currCount, maxCount);
}

const nums = [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1];

const result = maxConsicutive(nums);
console.log(result);
