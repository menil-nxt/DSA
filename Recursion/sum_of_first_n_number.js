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

// sum of all element in an array
let arr = [5, 3, 2, 0, 1];
function fun(n) {
  if (n == 0) {
    return arr[n];
  }
  return arr[n] + fun(n - 1);
}

console.log(fun(arr.length - 1));

// sum of all odd numbers in an array

let arr1 = [1, 3, 2, 4, 6, 5];
function sum(n) {
  let isOdd = arr1[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? arr1[n] : 0;
  }
  return (isOdd ? arr1[n] : 0) + sum(n - 1);
}
console.log(sum(arr1.length - 1));
