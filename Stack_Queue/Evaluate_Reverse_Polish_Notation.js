// Evaluate Reverse Polish Notation

// without map -> (with Evaluate eval() function)
function evalRPN(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-" || arr[i] === "*" || arr[i] === "/") {
      let a = stack.pop();
      let b = stack.pop();

      // ex( withOut evaluate (eval()) ) - "5" + "+" + "4") -> return "5 + 4" string not ans
      // eval() is one function that is evaluate two value with operand
      let ans = eval(`${b} ${arr[i]} ${a}`); // ex - eval("5" + "+" + "4") -> return 9

      stack.push(Math.trunc(ans));
    } else {
      stack.push(arr[i]);
    }
  }
  // return it but in number not in string
  // convert in number -> Number("345");  OR  +("345"); -> convert to in nnumber
  return Number(stack.pop()); // +stack.pop();
}

// if (arr[i] === "+" || arr[i] === "-" || arr[i] === "*" || arr[i] === "/") -> ["+", "-", "*", "/"].includes(arr[i])

function evalRPN(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (["+", "-", "*", "/"].includes(arr[i])) {
      let a = stack.pop();
      let b = stack.pop();

      // ex( withOut evaluate (eval()) ) - "5" + "+" + "4") -> return "5 + 4" string not ans
      // eval() is one function that is evaluate two value with operand
      let ans = eval(`${b} ${arr[i]} ${a}`); // ex - eval("5" + "+" + "4") -> return 9

      stack.push(Math.trunc(ans));
    } else {
      stack.push(arr[i]);
    }
  }
  // return it but in number not in string
  // convert in number -> Number("345");  OR  +("345"); -> convert to in nnumber
  return Number(stack.pop()); // +stack.pop();
}

// with map -> (withOut Evaluate eval() function) (more optimized)

function evalRPN(arr) {
  let stack = [];

  // with map you an also do same thing -> no need to write eval function
  let map = {
    "+": (a, b) => b + a, // every mapOfKey -> take callback function
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => Math.trunc(b / a),
  };
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      let a = stack.pop();
      let b = stack.pop();

      // with out evel() function
      let ans = map[arr[i]](Number(a), Number(b)); // map[arr[i]] with number(a,b)
      stack.push(ans);
    } else {
      stack.push(arr[i]);
    }
  }
  // return it but in number not in string
  // convert in number -> Number("345");  OR  +("345"); -> convert to in nnumber
  return Number(stack.pop()); // +stack.pop();
}
