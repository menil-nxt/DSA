// Longest Repeating Character Replacement

// With Map
var characterReplacement = function (s, k) {
  let i = (j = 0);
  let map = {};
  map[s[0]] = 1;
  let maxWindow = 0;
  while (j < s.length) {
    if (isValidWindow(map, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      ++j;
      map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]];
    } else {
      --map[s[i]];
      ++i;
    }
  }
  return maxWindow;
};

var isValidWindow = function (map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    //65 - A , 66 - B
    let char = String.fromCharCode(i + 65);
    if (map[char]) {
      totalCount = totalCount + map[char];
      maxCount = Math.max(maxCount, map[char]);
    }
  }
  return totalCount - maxCount <= k;
};

// WithOut Map -> (with Array)
var characterReplacement = function (s, k) {
  let i = (j = 0);
  let map = Array(26).fill(0);
  map[s.charCodeAt(0) - 65] = 1;
  let maxWindow = 0;
  while (j < s.length) {
    if (isValidWindow(map, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      ++j;
      ++map[s.charCodeAt(j) - 65];
    } else {
      --map[s.charCodeAt(i) - 65];
      ++i;
    }
  }
  return maxWindow;
};

var isValidWindow = function (map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    totalCount = totalCount + map[i];
    maxCount = Math.max(maxCount, map[i]);
  }
  return totalCount - maxCount <= k;
};
