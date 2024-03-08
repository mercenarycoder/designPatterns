class Node {
  constructor(val) {
    this.data = val;
    this.ptr = null;
  }
}

var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(3);
var six = new Node(2);
var seven = new Node(1);
one.ptr = two;
two.ptr = three;
three.ptr = four;
four.ptr = five;
five.ptr = six;
six.ptr = seven;
var condition = isPalindrome(one);
console.log("isPalidrome: " + condition);

function isPalindrome(head){
    let stack =[];
    let count = head;
    let isPalin = true;
    while(count !== null){
        stack.push(count.data);
        count = count.ptr;
    }
    while(head !== null){
        let ele = stack.pop();
        if(ele == head.data){
            isPalin = true;
        } else{
            isPalin = false;
        }
        head= head.ptr;
    }
    return isPalin;
}
