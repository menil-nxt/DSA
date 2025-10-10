// function merge(num1) {
//   let num1Copy = num1.slice(0, num1.lenght);      // slice => copying 0 to lenth of array
//   console.log(num1Copy);
// }

// let num1 = [0, 6, 4, 5, 7];
// let result = merge(num1);
// console.log(result);

// first Approch

// function merge(num1, m, num2, n) {
//   let num1Copy = num1.slice(0, m);

//   let p1 = 0;
//   let p2 = 0;

//   for (let i = 0; i < m + 1; i++) {
//     if ((p1 < m && num1Copy[p1] < num2[p2]) || p2 >= n) {
//       num1[i] = num1Copy[p1];
//       p1++;
//     } else {
//       num1[i] = num2[i];
//       p2++;
//     }
//   }
// }

// second Approch

function merge(num1, m, num2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= m; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && num1[p1] > num2[p2]) {
      num1[i] = num1[p1];
      p1--;
    } else {
      num1[i] = num2[p2];
      p2--;
    }
  }
}

let num1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let num2 = [2, 5, 6];
let n = 3;
const result = merge(num1, m, num2, n);
console.log(result);
