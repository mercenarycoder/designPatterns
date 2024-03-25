class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchtree {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (this.root == null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      if (current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeFunction = function (node, data) {
      if (node == null) {
        return null;
      }
      if (node.data == data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeFunction(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeFunction(node.left, data);
        return node;
      } else {
        node.right = removeFunction(node.right, data);
        return node;
      }
    };
    this.root = removeFunction(this.root, data);
  }
  bfs() {
    let node = this.root;
    let queue = [node];
    let res=[];
    while (queue.length > 0) {
      let element = queue.shift();
      res.push(element.data);
      if (element.left) {
        queue.push(element.left);
      }
      if (element.right) {
        queue.push(element.right);
      }
    }
    console.log(res);
  }
  dfs() {
    let node = this.root;
    let stack = [node];
    let res = [];
    while (stack.length > 0) {
        let element = stack.unshift();
        if(element.right){
            stack.push(element.right);
        }
        res.push(element.data);
        if(element.left){
            stack.push(element.left);
        }
        // res.push(element.data); // Pushing here will result in preorder
    }
    console.log(res);
  }
  findMinHeight(node = this.root){
    if(node===null){
        return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if(left<right){
        return left+1;
    } else {
        return right+1;
    }
  }
  findMaxHeight(node=this.root){
    if(node == null){
        return -1
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if(left>right){
        return left+1;
    } else{
        return right+1;
    }
  }
  isBalanced(){
    return (this.findMaxHeight()-1<=this.findMinHeight());
  }
}

let bst = new BinarySearchtree();
let arr = [9, 4, 17, 3, 6, 22, 5, 7, 20];
for (let i = 0; i < arr.length; i++) {
  let data = bst.add(arr[i]);
}
// for(let i=arr.length-1; i>=0; i--){
//     console.log(bst.find(arr[i]));
// }
console.log(bst.findMax());
console.log(bst.findMin());
console.log("bfs---------------------");
bst.bfs();
bst.dfs();
console.log(bst.findMaxHeight());
console.log(bst.findMinHeight());
console.log(bst.isBalanced())
bst.add(10)
console.log(bst.isBalanced())

