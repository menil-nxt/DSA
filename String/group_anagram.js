// Group Of Anagram

// Approsch - 1 (Sorted keys)
function groupAnagrams(strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    // 1. sort string
    let sortedStr = strs[i].split("").sort().join("");
    // store it in map

    // if map does not have sortedStr key
    if (!map[sortedStr]) {
      map[sortedStr] = [strs[i]]; // this value is come with array
    }
    // if map has key
    else {
      map[sortedStr].push(strs[i]);
    }
  }
  // spread operator return value of map object
  return [...Object.values(map)];
}

// Approch - 2 (Hashed Key)

function groupAnagrams(strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    // create a key
    let freqArr = Array(26).fill(0);
    let s = strs[i];
    for (let j = 0; j < s.length; j++) {
      // each s[j] index
      let index = s[j].charCodeAt() - "a".charCodeAt();
      freqArr[index]++;
    }
    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k) + freqArr[k];
    }
    //fill the map
    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }
  return [...Object.values(map)];
}
