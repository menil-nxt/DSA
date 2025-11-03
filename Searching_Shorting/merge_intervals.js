// // Merge Intervals

// function merge(iteration) {
//   if (iteration.length <= 1) return iteration;

//   let mid = Math.floor(iteration.length / 2);
//   let left = merge(iteration.slice(0, mid));
//   let right = merge(iteration.slice(mid));

//   return mergeArray(left, right);
// }

// function mergeArray(left, right) {
//   let res = [];
//   let i = 0; // Left
//   let j = 0; // Right

//   while (i < left.length && j < right.length) {
//     let res1 = [];
//     let m = 0; // Left on --> m
//     let n = 0; // Right on --> n
//     while (m < left[i].length && n < right[j].length) {
//       if (
//         left[i][m + 1] <= left[i + 1][m] &&
//         right[j][n + 1] <= right[j + 1][n]
//       ) {
//         res1.pop([left[i][m + 1], left[i + 1][m]]);
//         res1.push([left[i][m]], left[i + 1][m + 1]);
//         left[i]++;
//       } else {
//         res.push(left[i]);
//       }
//     }
//   }
// }

function merge(Intervals) {
  // sorting our array
  Intervals.sort((a, b) => a[0] - b[0]);
  // store intervals result into result
  const result = [Intervals[0]];

  for (let interval of Intervals) {
    let e1 = result[result.length - 1][1]; // first or privious array --> last index(end)
    let s2 = interval[0]; // second array --> first index(start)
    let e2 = interval[1]; // second array --> last index(end)

    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      result.push(interval);
    }
  }
  return result;
}

let Intervals = [
  [1, 3],
  [2, 4],
  [2, 6],
  [8, 10],
  [9, 11],
  [15, 18],
  [16, 17],
];

let output = merge(Intervals);
console.log(output);
