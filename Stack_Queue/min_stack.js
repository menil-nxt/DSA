// Min Stack

var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.stack.push([val, val]);
  } else {
    // Math.min(last min , curr val) -> min vaule
    // min valueis the minimum between last min and curr val

    // let lastMinVal = stack[stack.length-1][1];
    let minVal = Math.min(val, this.stack[this.stack.length - 1][1]);
    this.stack.push([val, minVal]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let front = this.stack[this.stack.length - 1][0];
  return front;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = this.stack[this.stack.length - 1][1];
  return min;
};
