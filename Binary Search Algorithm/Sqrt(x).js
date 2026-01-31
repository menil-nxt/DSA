// Sqrt(x)

// With built-in function (Not valid)

function mySqrt(x) {
  return Math.floor(Math.pow(x, 0.5)); // SAME

  // Math.trunc(Math.pow(x , 0.5));
  // Math.floor(x ** 0.5);
  // Math.trunc(x ** 0.5);
}

// with-out built-in function (Broute Force Approch)

function mySqrt(x) {
  let ans;
  for (let i = 0; i <= x; i++) {
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    if (i * i > x) {
      ans = i - 1;
      break;
    }
  }
  return ans;
}
