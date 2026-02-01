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

function mySqrt(x) {
  // Broute Froce

  let ans;
  for (let i = 0; i <= x; i++) {
    if (x < 2) {
      return x;
    }

    if (i * i > x) {
      // if 5 * 5 => 25 > x => 20 ---> i - 1 -> (4) ans
      ans = i - 1;
      break;
    }
  }
  return ans;
}

// With Batter Optimization (Binary Search Algorithm)

function mySqrt(x) {
  if (x < 2) return x;

  let l = 2;
  let r = Math.floor(x / 2);

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    // let mid = l + Math.floor(((r - l) / 2));

    if (x === mid) {
      return mid;
    } else if (x < mid * mid) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  if (r <= l) {
    return r; // Or just (return r;)  no need to return mid or check condition it's just for understanding purpose
  }
  return mid;
}
