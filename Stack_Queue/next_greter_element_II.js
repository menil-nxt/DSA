// Next Greter Element II

function nextGreaterElements(nums) {
  let arr = [...nums, ...nums]; // arr = [...nums, ...nums]; <- spread operator (same)
  let stack = [];
  let n = arr.length;

  let ans = Array(n).fill(-1);

  stack.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] < top) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i]);
  }
  return ans.slice(0, n / 2);
}
