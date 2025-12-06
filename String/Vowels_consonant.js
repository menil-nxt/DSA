// Vowels and consonant

var maxFreqSum = function (s) {
  // store all the value with frequency in a map
  let map = {}; // it's one object
  for (let i = 0; i < s.length; i++) {
    // checking each charecter is present inside map or not
    // and also storing all charecter inside map with it's count
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  //find the max vowels and consonant inside the map
  let vowel = ["a", "e", "i", "o", "u"];
  let maxVowels = 0;
  let maxConsonant = 0;
  for (let i = 0; i < s.length; i++) {
    // Vowels
    if (vowel.includes(s[i])) {
      if (map[s[i]] > maxVowels) {
        maxVowels = map[s[i]];
      }
    }
    // Consonant
    else {
      if (map[s[i]] > maxConsonant) {
        maxConsonant = map[s[i]];
      }
    }
  }
  // return both sum
  return maxVowels + maxConsonant;
};
