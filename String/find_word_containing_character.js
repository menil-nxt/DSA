// Find Words containing character

// With built in function
// Approch - 1
function findWordsContaining(words, x) {
  let ans = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      ans.push(i);
    }
  }
  return ans;
}

// Without builtin function
// Approch - 2

function findWordsContaining(words, x) {
  let arr = [];

  // for loop throw whole array
  for (let i = 0; i < words.length; i++) {
    // for check each of character in ith position (for each and every word)
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        arr.push(i);
        break;
      }
    }
  }
  return arr;
}
