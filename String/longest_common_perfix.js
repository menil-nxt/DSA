// Longest Common Prefix

function longestCommonPrefix(strs) {
  // check each string comman char
  let x = 0;
  while (x < strs[0].length) {
    // x is lesser than first string of length -> loop is run

    char = strs[0][x]; //for first string x char

    // we have to check for all other string x char
    for (let i = 1; i < strs.length; i++) {
      if (char != strs[i][x] || x == strs[i].length) {
        // if x is reach to any string of length than break it
        // beacuse prefix cannot be graterthen length of any element

        // break loop when char are not equal
        // and just return substring of(0,x (x is not included) )
        // substring return into first string
        return strs[0].substring(0, x);
      }
    }
    x++; // if char is equal than x move ahead
  }
  return strs[0]; // if first string length is smaller than another string OR all string length is equal
}
