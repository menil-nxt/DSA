// 1. Approch

// function singleNumber(nums) {
//   let hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (!hash[nums[i]]) {
//       hash[nums[i]] = 1;
//     } else {
//       hash[nums[i]]++;
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]] == 1) {
//       return nums[i];
//     }
//   }
// }

// 2. Approch = Bitwise XOR using

function singleNumber(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

let nums = [1, 2, 3, 4, 2, 3, 1];
let result = singleNumber(nums);
console.log(result);
