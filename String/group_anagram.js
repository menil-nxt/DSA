// Group Of Anagram

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
