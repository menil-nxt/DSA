// Remove Outermost Parentheses (Using Stack)

function removeOuterParentheses(s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      ans += stack.length > 1 ? s[i] : "";
    } else {
      ans += stack.length > 1 ? s[i] : "";
      stack.pop();
    }
  }
  return ans;
}

// Remove Outermost Parentheses (withOut Using Stack)

// in above (using Stack) in stack we are just checking level so with out stack we can also do that thing

function removeOuterParentheses(s) {
  let level = 0;
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      ans += level > 1 ? s[i] : "";
    } else {
      ans += level > 1 ? s[i] : "";
      level--;
    }
  }
  return ans;
}

// ingnore 0 level not 1 level -> for that we are starting level from -1.
function removeOuterParentheses(s) {
  let level = -1; // 0 level is ingnoring lavel
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      ans += level ? s[i] : ""; // we don't want to check level > 1 or not because it 0 level that we ingnoring
    } else {
      ans += level ? s[i] : "";
      level--;
    }
  }
  return ans;
}
