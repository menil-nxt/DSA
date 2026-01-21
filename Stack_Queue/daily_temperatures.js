// Daily Temperatures (using stack)

function dailyTemperatures(arr) {
  let stack = [];
  let n = arr.length;
  let ans = Array(n).fill(0); // create arr = [] -> filled out with 0 ->[0,0,0,0,0,0,0,0......n]

  stack.push(n - 1); // last element of array push -> index
  // same -> let ans = Array(n).fill(0);
  ans[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] >= arr[top]) {
        stack.pop();
      } else {
        ans[i] = top - i; // if we get arr[i] < arr[top] -> both index arr[i](currant) - arr[top](stack top element).
        break;
      }
    }
    if (stack.length === 0) {
      // no need of this (because we are already push all till n element 0) but for understanding
      ans[i] = 0;
    }
    stack.push(i); // every time just push into stack -> index of element
  }
  return ans;
}

// Daily Temperatures (Optimize using stack)
function dailyTemperatures(arr) {
  let stack = [];
  let n = arr.length;
  let ans = Array(n).fill(0); // create arr = [] -> filled out with 0 ->[0,0,0,0,0,0,0,0......n]

  stack.push(n - 1); // last element of array push -> index
  // same -> let ans = Array(n).fill(0);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] >= arr[top]) {
        stack.pop();
      } else {
        ans[i] = top - i; // if we get arr[i] < arr[top] -> both index arr[i](currant) - arr[top](stack top element).
        break;
      }
    }
    stack.push(i); // every time just push into stack -> index of element
  }
  return ans;
}
