// Longest Substring Without Repeating Characters

function lengthOfLongestSubString(s) {
  let i = (j = 0);
  let map = {};
  let maxWS = 0;

  for (j = 0; j < s.length; j++) {
    if (map[s[j]] != undefined && map[s[j]] >= i) {
      // Duplicate char
      i = map[s[j]] + 1; // it's move i pointer by map[s[j(value ==> index)]] + 1 index
    }

    // update j pointer index into map
    map[s[j]] = j;
    //calculate curr Window size
    currWS = j - i + 1;
    maxWS = Math.max(maxWS, currWS);
    console.log(map, [maxWS, currWS]);
  }
  return maxWS;
}
