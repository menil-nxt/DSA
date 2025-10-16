// sum of first n numbers

// var sum = 0;
// function sumOfNumber(n) {
//   if (n <= 0) {
//     return;
//   }
//   sum = sum + n;
//   sumOfNumber(--n);
// }
// sumOfNumber(10);
// console.log(sum);

function add(n) {
  if (n == 0) return 0;
  return n + add(n - 1);
}

console.log(add(5));
