// Feactorial no

function factorial(n) {
  if (n == 1) return 1; // here we can run this recursion till 1 so it's return 1.-> not 0 (because 0 into any number it's 0)
  return n * factorial(n - 1);
}

console.log(factorial(6));
