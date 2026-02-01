// Guess Number is Higher or Lower

function guessNumber(n) {
  let l = 1;
  let r = n;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let ans = guess(mid); // mid element check with guess API ans API give ans in (-1,1,0) that we are storing in ans and than check

    if (ans === 0) {
      // your guess is equal to the number I picked (0)
      return mid;
    } else if (ans < 0) {
      // Your guess is higher than the number I picked (-1)
      r = mid - 1; // right move mid - 1
    } else {
      // Your guess is lower than the number I picked (1)
      l = mid + 1; // left move m + 1
    }
  }
}
