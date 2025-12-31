// Valid Parentheses (without Map)

function isValid(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      // if top is empty OR top === "opning Breacket" && s[i] not equal to "closing Breacket" than return false;
      if (
        !top ||
        (top === "[" && s[i] != "]") ||
        (top === "{" && s[i] != "}") ||
        (top === "(" && s[i] != ")")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0; // if it's length 0 than -> true , otherwise -> false;
}

// Valid Parentheses (with Map)

function isValid(s) {
  let stack = [];

  let map = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || s[i] != map[top]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
