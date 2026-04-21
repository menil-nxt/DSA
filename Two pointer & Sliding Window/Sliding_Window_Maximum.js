// Sliding Window Maximum

var maxSlidingWindow = function (nums, k) {
  let res = [];
  let q = [];

  let i = (j = 0);
  while (j < nums.length) {
    // push current element , after removing all smaller element from last(back) of queue
    while (q.length && nums[j] > q[q.length - 1]) {
      q.pop();
    }
    q.push(nums[j]);

    // when window size is k
    if (j >= k - 1) {
      res.push(q[0]); // because q[0] is always maximum element

      // if leftmost element for current window(arr[i]) is largest q[0]
      // than remove it. before i increase(i++);
      nums[i] == q[0] && q.shift();
      i++;
    }
    j++;
  }
  return res;
};
