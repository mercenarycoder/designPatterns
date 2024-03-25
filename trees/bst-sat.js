class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

class BinarySearchTree {
  constructor(arr) {
    this.root = null;
    this.diameter = 0;
    this.constructTree(arr);
  }
  constructTree(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.add(arr[i]);
    }
  }
  add(data) {
    if (data == null) {
      return;
    }
    if (this.root == null) {
      this.root = new Node(data);
      return;
    }
    let node = this.root;
    const addNode = (node, data) => {
      if (node.left == null) {
        node.left = new Node(data);
        return;
      } else if (node.right == null) {
        node.right = new Node(data);
        return;
      }
      if (data > node.data) {
        addNode(node.right, data);
      } else {
        addNode(node.left, data);
      }
    };
    addNode(node, data);
    return;
  }
  bfsArray() {
    let node = this.root;
    let queue = [node];
    let result = [];
    while (queue.length > 0) {
      let len = queue.length;
      let subRes = [];
      for (let i = 0; i < len; i++) {
        let sib = queue.shift();
        if (sib !== null) {
          subRes.push(sib.data);
          if (sib.left !== null) {
            queue.push(sib.left);
          }
          if (sib.right !== null) {
            queue.push(sib.right);
          }
        }
      }
      if (subRes.length > 0) {
        result.push(subRes);
      }
    }
    return result;
  }
  averageBfs() {
    let queue = [this.root];
    let result = [];
    while (queue.length > 0) {}
  }
  nextTraverseElement(data) {
    let node = this.root;
    let queue = [node];
    let find = false;
    while (queue.length > 0) {
      let n = queue.shift();
      if (n == null) {
        continue;
      }
      if (find) {
        return n.data;
      }
      if (n.data == data) {
        find = true;
      }
      if (n.left !== null) {
        queue.push(n.left);
      }
      if (n.right !== null) {
        queue.push(n.right);
      }
    }
  }
  populateNextPointer() {
    let node = this.root;
    let queue = [node];
    let result = [];
    while(queue.length>0){
        let len = queue.length;
        for(let i=0; i<len; i++){
            let element = queue.shift();
            console.log(element);
            if(element!==null){
                result.push(element.data);
                if(element.left!==null){
                    queue.push(element.left);
                } 
                if(element.right!==null){
                    queue.push(element.right);
                }
            }
        }
        result.push("#");
    }
    console.log(result);
    let answer="";
    for(let i=0;i<result.length;i++){
        if(result[0]==="#"){
            return [];
        }
        else{
            answer+=result[i];
        }
        if(i<result.length-1){
            answer+=",";
        }
    }
    // answer+="]"
    return answer.split(",");
  }
  pupulateNext(){
    let leftMost = this.root;
    while(leftMost.left!=null){
        let current = leftMost;
        while(current!=null){
            current.left.next = current.right;
            if(current.next!=null){
                current.right.next = current.next.left;
            }
            current = current.next;
        }
        leftMost = leftMost.left;
    }
    return this.root;
  }
  mirrorImage(){
    let node = this.root;
    let queue = [node];
    let ans = true;
    while(queue.length>0){
        let node = root;
        let queue = [node];
        let ans = true;
        while(queue.length>0){
            let len = queue.length;
            let res = [];
            for(let i=0; i<len; i++){
                let data = queue.shift();
                if(data==null){
                    res.push(-101);
                    continue;
                }
                res.push(data.val);
                queue.push(data.left);
                queue.push(data.right);
            }
            let mid = Math.floor((0+res.length)/2);
            let midArr = res.splice(mid);
            res = res.reverse();
            for(let i=0; i<res.length; i++){
                if(midArr[i]!==res[i]){
                    ans=false;
                }
            }
        }
        return ans;
  }
  }
  dfsSearch(){
    let node = this.root;
    let stack = [node];
    let result = [];
    while(stack.length>0){
        let element = stack.pop();
        result.push(element.data);
        if(element.right) stack.push(element.right);
        if(element.left) stack.push(element.left);
    }
    return result;
  }
  diameterOfBinaryTree(node = this.root,diameter=0){
    if(node === null){
        return 0;
    }
    let left = this.diameterOfBinaryTree(node.left);
    let right = this.diameterOfBinaryTree(node.right);
     console.log(left," ",right);
    let dia = left+right+1;

    this.diameter = Math.max(this.diameter,dia);
    return {value:Math.max(left,right)+1,diameter}
  }
  invertBinaryTree(){
    let node = this.root;
    let queue = [node];
    while(queue.length>0){
        let baby = queue.shift();
        [baby.left,baby.right] = [baby.right,baby.left];
        if(baby.left){
            queue.push(baby.left);
        }
        if(baby.right){
            queue.push(baby.right);
        }
    }
  }
  flattenToList(){
    let element = this.root;
    while(element!==null){
        let left = element.left;
        if(left !== null){
            while(left.right!==null){
                left=left.right;
            }
            left.right = element.right;
            element.right = element.left;
            element.left = null;
        }
        element=element.right;
    }
  }
  giveTree(){
    return this.root;
  }
  validateBST(){
    let node = this.root;
    let queue = [node];
    while(queue.length>0){
        let element = queue.shift();
        if(!this.validNode(element)){
            return false;
        }
        if(element.left){
            queue.push(element.left);
        }
        if(element.right){
            queue.push(element.right);
        }
    }
    return true;
  }
  balanceOrNot(node=this.root,low=null,high=null){
    if(node!==null){
        return true;
    }
    if(low!==null && node.data>low){
        return false;
    }
    if(high!==null && node.data<high){
        return false;
    }
    let left = this.balanceOrNot(node.left,node.data,high);
    let right= this.balanceOrNot(node.right,low,node.data);
    return left && right; 
  }
  validNode(node){
    let valid = true;
    if(node.left){
        valid = node.data > node.left.data ? true:false;
    }
    if(node.right){
        valid = node.data < node.right.data ? true:false;
    }
    return valid;
  }
}

let arr = [2,1,3];
let btree = new BinarySearchTree(arr);
// btree.flattenToList();
console.log(btree.bfsArray());
// console.log(btree.validateBST()); 
console.log(btree.balanceOrNot());
// btree.invertBinaryTree();
// console.log(btree.bfsArray());
// console.log(btree.nextTraverseElement(20));
// console.log(btree.populateNextPointer());
// console.log(btree.mirrorImage());
// console.log(btree.dfsSearch());
// console.log(btree.diameterOfBinaryTree());
// console.log(btree.diameter-1);
let root = btree.giveTree();
// console.log(dfsSearch(root));
function dfsSearch(root){
    let node = root;
    let stack = [node];
    let result = [];
    while(stack.length>0){
        let element = stack.pop();
        result.push(element.data);
        if(element.right) stack.push(element.right);
        if(element.left) stack.push(element.left);
    }
    return result;
}
let diameter = 0;
let diameterOfBinaryTree =(node)=>{
    if(node === null){
        return 0;
    }
    let left = diameterOfBinaryTree(node.left);
    let right = diameterOfBinaryTree(node.right);
     console.log(left," ",right);
    let dia = left+right+1;

    diameter = Math.max(diameter,dia);
    return Math.max(left,right)+1;
}
// console.log(diameterOfBinaryTree(root));
// console.log(diameter-1);