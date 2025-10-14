// print n to 1 with recursion
function fun(num) {
  if (num == 0) {
    return;
  }

  console.log(num);
  num = num - 1;
  fun(num);
}

let num = 10;
fun(num);

// print 1 to n with recursion

let n = 5;
function print(x) {
  if (x > n) {
    return;
  }

  console.log(x);
  print(++x); // equal to x = x + 1 -> print(x) == print(++x)
}

print(1);
