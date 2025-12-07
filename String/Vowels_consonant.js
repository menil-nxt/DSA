// Vowels and consonant

let s = "Menil";

var maxFreqSum = function (s) {
  // store all the value with frequency in a map
  let map = {}; // it's one object
  for (let i = 0; i < s.length; i++) {
    // checking each charecter is present inside map or not
    // and also storing all charecter inside map with it's count

    map[s[i]] = !map[s[i]] ? 1 : map[s[i]]++; // if else instade of ternary operator

    // if (!map[s[i]]) {
    //   map[s[i]] = 1;
    // } else {
    //   map[s[i]]++;
    // }
  }

  //find the max vowels and consonant inside the map
  let vowel = ["a", "e", "i", "o", "u"];
  let maxVowels = 0;
  let maxConsonant = 0;
  let mapKeys = Object.keys(map); // reduce the iteration -> only checking for map of keys
  for (let i = 0; i < mapKeys.length; i++) {
    // Vowels
    if (vowel.includes(mapKeys[i])) {
      maxVowels = Math.max(map[mapKeys[i]], maxVowels); // find max value in both and put inside maxVowels

      // if (map[mapKeys[i]] > maxVowels) {
      //   maxVowels = map[mapKeys[i]];
      // }
    }

    // Consonant
    else {
      maxConsonant = Math.max(maxConsonant, map[mapKeys[i]]); // find max value in both and put inside maxConsonant

      // if (map[mapKeys[i]] > maxConsonant) {
      //   maxConsonant = map[mapKeys[i]];
      // }
    }
  }
  // return both sum
  return maxVowels + maxConsonant;
};
