// Jewels And Stones

// Approch - 1
// with Built-in function
function numJewelsInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
}

// Approch - 2
// without built-in function
function numJewelsInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count++;
      }
    }
  }
  return count;
}

// With Has-Map(Set)

function numJewelsInStones(jewels, stones) {
  let jSet = new Set(); // cteate set
  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]); // put all jewels into set
  }
  let count = 0;
  for (let j = 0; j < stones.length; j++) {
    // if(jewels.includes(stones[j])) -> O(n)
    if (jSet.has(stones[j])) {
      // check set is has stone or not -> O(1)
      count++; // if it has than count increase
    }
  }
  return count;
}
