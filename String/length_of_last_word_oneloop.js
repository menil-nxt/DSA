// length of last word (one loop)

function lengthOfLastWord(s) {
  let n = s.length - 1;
  let count = 0;

  while (n >= 0) {
    if (s[n] != " ") {
      count++;
    }

    // if string has count and that count is > 0 than break loop
    else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
}
