// Container With Most Water

// Brute Force
function maxArea(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let area = Math.min(arr[i], arr[j]) * (j - i);
      if (area > max) {
        max = area;
      }
    }
  }
  return max;
}

// Optimized Approch -> o(n)

function maxArea(arr) {
  let i = 0;
  let j = arr.length - 1;

  let max = 0;
  while (i < j) {
    let area = Math.min(arr[i], arr[j]) * (j - i);
    max = Math.max(max, area);
    if (arr[i] > arr[j]) {
      j--;
    } else {
      i++;
    }
    // if(area > max){
    //     max = area;
    // }
  }
  return max;
}
