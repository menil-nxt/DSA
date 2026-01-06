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
