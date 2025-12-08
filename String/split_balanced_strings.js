// Split a string in balanced strings

// Approch 1
function balancedStringSplit(s) {
  // keep a treack or count of R and L
  let R = 0;
  let L = 0;
  let belancedCount = 0;

  // loop throw whole string
  for (let i = 0; i < s.length; i++) {
    // R and L count
    if (s[i] === "R") {
      R++;
    } else {
      L++;
    }

    // whenever R and L both. count count is equal
    if (R == L) {
      // if both are equal than belancedCount is increase
      belancedCount++;
      // and again both count is 0
      R = 0;
      L = 0;
    }
  }
  return belancedCount;
}

// Approch 2
function balancedStringSplit(s) {
  // keep a treack or count of temp
  let temp = 0;
  let belancedCount = 0;

  // loop throw whole string
  for (let i = 0; i < s.length; i++) {
    // (R -> +1) and (L -> -1) count
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }

    // whenever temp is 0 means string is balanced R or L is equal
    if (temp === 0) {
      // so just increase count of belancedCount
      belancedCount++;
      // no need to do count 0 it's allready 0
    }
  }
  return belancedCount;
}
