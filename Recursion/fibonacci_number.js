// Fibonacci Number OR sirise

// what is fiabonacci sequence

// [0,1,(0+1)-> 1, (1+1)-> 2, (1+2)-> 3,(3+2)-> 5,8,13,21,34.......]

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));
