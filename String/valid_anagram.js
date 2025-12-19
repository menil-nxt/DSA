// Valid Anagram

// built-in approch                     time -> O(nlogn)

function isAnagram(s, t) {
  // 1. split() -> convert to an array
  // 2. sort() -> array is sorted
  // 3. join() -> sorted array join and make one string.

  return s.split("").sort().join("") === t.split("").sort().join("");
}

// without built-in function (Hash Map)

function isAnagram(s, t) {
  // if both string length length is not equle then it's not anagram
  if (s.length != t.length) return false;

  // Otherwise create map object
  let map = {};

  // put s string all char in-side map
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  console.log(map);

  // we have to check each char of t string is present inside map or not
  // if it's not than return false otherwise decrise count of that
  for (let j = 0; j < t.length; j++) {
    if (!map[t[j]]) {
      return false;
    } else if (map[t[j]] < 0) {
      return false;
    } else {
      map[t[j]]--;
    }
  }
  return true;
}
