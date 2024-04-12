function nearestGreaterRight(arr) {
  //will traverse it from back anf try to fill the vector array and will reserve it to find the answer
  let stack = new Stack();
  let vector = [];
  let n = arr.length - 1;
  for (let i = n; i >= 0; i--) {
    let ele = arr[i];
    if (stack.size() == 0) {
      vector.push(-1);
    }
    if (stack.size() > 0) {
      if (ele > stack.getTop()) {
        while (stack.size() > 0 && ele >= stack.getTop()) {
          stack.pop();
        }
        if (stack.size() == 0) {
          vector.push(-1);
        } else {
          vector.push(stack.getTop());
        }
      } else if (ele < stack.getTop()) {
        vector.push(stack.getTop());
      }
    }
    stack.push(ele);
  }
  return vector.reverse();
}

function nextLargestLeft(arr) {
  let stack = new Stack();
  let vector = [];
  let n = arr.length - 1;
  for (let i = 0; i <= n; i++) {
    let ele = arr[i];
    console.log(stack);
    if (stack.size() == 0) {
      vector.push(-1);
    }
    if (stack.size() > 0) {
      if (ele > stack.getTop()) {
        while (stack.size() > 0 && ele >= stack.getTop()) {
          stack.pop();
        }
        if (stack.size() == 0) {
          vector.push(-1);
        } else {
          vector.push(stack.getTop());
        }
      } else if (ele < stack.getTop()) {
        vector.push(stack.getTop());
      }
    }
    stack.push(ele);
  }
  return vector;
}

function stockSpan(arr) {
  //nextLargestLeft with elements store as index and value
}

class Node {
  constructor(data, index) {
    this.data = data;
    this.index = index;
  }
}

function getNearestSmallElementLeft(arr) {
  let stack = new Stack();
  let vector = [];
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (stack.size() == 0) {
      vector.push(-1);
    }
    if (stack.size() > 0) {
    }
    stack.push(new Node(ele, i));
  }
}

class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }
  push(ele) {
    this.stack.push(ele);
    this.length++;
  }
  pop() {
    let element = this.stack.pop();
    this.length--;
    return element;
  }
  size() {
    return this.length;
  }
  getTop() {
    return this.stack[this.length - 1];
  }
}

let arr = [1, 3, 2, 4];
// console.log(nearestGreaterRight(arr));
console.log(nextLargestLeft(arr));

let stocks = [];
let table = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];



function calculateMahspecific(arr){

}

function calculateMah(table){

};
