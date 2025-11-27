// Length Of Last Word

// let s = "    my name is menil   ";

// let result = s.trim();
// console.log(result);

// let result = s.split(" ");
// console.log(result);

// simple way
function lengthOfLastWord(s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
  // s[s.length - 1] --> give you last word OR .length --> is give you length of that word
}

// but this is not right way to solve this question for interview with built-in function

// without built-in function
function lengthOfLastWord(s) {
  // trim all the spaces at the end
  let n = s.length - 1; // start from last char (it's your last char)
  while (n >= 0) {
    if (s[n] != " ") {
      break;
    }
    --n;
  }
  // n is the point where my last word starts

  // count the character till you again reach a space
  let count = 0;
  while (n >= 0) {
    if (s[n] === " ") {
      break;
    }
    --n;
    ++count;
  }
  return count;
}
