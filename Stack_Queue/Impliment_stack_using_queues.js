// Impliment Stack Using Queues (Two Queues)

var MyStack = function () {
  // create Two Queue
  this.q1 = []; // Main
  this.q2 = []; // Helper
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  // enqueue(add) in q1
  this.q1.push(x); // x element is push on q1 queue
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  // calculate length of q1
  let n = this.q1.length;
  // q1 -> Dequeue and Enqueue -> q2
  for (let i = 0; i < n - 1; i++) {
    // for Dequeue you have shift in queue
    // for that we will get element from frontElement and push it q2

    let frontEle = this.q1.shift();

    // put frontEle into q2
    this.q2.push(frontEle);

    // this.q2.push(this.q1.shift()) it's also doing in same thing
  }
  let ans = this.q1.shift();
  // exchange q1 <-> q2 swap
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());

    // let frontEle = this.q1.shift();  same
    // this.q2.push(frontEle);
  }
  // returning top of queue

  //let front = this.q1[0];
  //this.q2.push(this.q1.shift());

  // OR
  let ans = this.q1.shift();
  // enqueue this ans
  this.q2.push(ans);
  // exchange q1 <-> q2
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
  // if(this.q1.length === 0){
  //     true;
  // }
  // else{
  //     false;
  // }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// Impliment Stack Using Queues (One Queues)

var MyStack = function () {
  this.q1 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    // q1 shift by one and push(enqueue) it into itself every time
    this.q1.push(this.q1.shift());
  }
  return this.q1.shift(); // only return dequeue element
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    // q1 shift by one and push(enqueue) it into itself every time
    this.q1.push(this.q1.shift());
  }
  let front = this.q1[0];
  this.q1.push(this.q1.shift()); // dequeue element and return that element and than enqueue(push)
  return front;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};
