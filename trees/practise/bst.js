class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
    this.next = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.diameter = 0;
    this.inorder = [];
  }
  add(data) {
    let node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchNode = function (node) {
        if (node.val > data) {
          if (node.left === null) {
            node.left = new Node(data);
          } else {
            searchNode(node.left);
          }
        } else if (node.val < data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else {
            searchNode(node.right);
          }
        } else {
          return null;
        }
      };
      return searchNode(node);
    }
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.val) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.right == null) {
          return node.left;
        }
        if (node.left == null) {
          return node.right;
        }
        let nextRight = node.right;
        while (nextRight.left !== null) {
          nextRight = nextRight.left;
        }
        node.data = nextRight.data;
        node.right = removeNode(node.right, nextRight.data);
        return node;
      }
      if (data > node.val) {
        removeNode(node.right, data);
      } else if (data < node.val) {
        removeNode(node.left, data);
      }
    };
    this.root = removeNode(this.root, data);
  }
  //Always use stack to do Depth first Search
  dfs() {
    const stack = [this.root];
    const bfs = [];
    while (stack.length > 0) {
      let current = stack.pop();
      bfs.push(current.val);
      if (current.right !== null) {
        stack.push(current.right);
      }
      if (current.left !== null) {
        stack.push(current.left);
      }
    }
    return bfs;
  }
  //Always use Queue to do Breadth First Search
  bfs() {
    const queue = [this.root];
    const dfs = [];
    while (queue.length > 0) {
      let current = queue.shift();
      dfs.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return dfs;
  }
  bfsLevelWise() {
    const queue = [this.root];
    const bfs = [];
    while (queue.length > 0) {
      let size = queue.length;
      let level = [];
      while (size > 0) {
        let current = queue.shift();
        level.push(current.val);
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        size--;
      }
      bfs.push(level);
    }
    return bfs;
  }
  //will use bfs for this and will do level order traversal
  populateNextPointer(root = this.root) {
    let queue = [root];
    while (queue.length > 0) {
      let size = queue.length;
      let level = [];
      while (size > 0) {
        current = queue.shift();
        level.push(current);
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        size--;
      }
      let prev = null;
      for (let i = level.length - 1; i >= 0; i--) {
        level[i].next = prev;
        prev = level[i];
      }
    }
    return root;
  }
  populateNextPointerWay2(root = this.root) {
    if (root == null) {
      return null;
    }
    let leftMost = root;
    while (leftMost.left !== null) {
      let current = leftMost;
      while (current !== null) {
        current.left.next = current.right;
        if (current.next !== null) {
          current.right.next = current.next.left;
        }
        current = current.next;
      }
      leftMost = leftMost.left;
    }
    return root;
  }
  rightSideView(root = this.root) {
    if (root == null) {
      return root;
    }
    const queue = [root];
    const ans = [];
    while (queue.length > 0) {
      let size = queue.length;
      let current = null;
      while (size > 0) {
        current = queue.shift();
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        size--;
      }
      ans.push(current.val);
    }
    return ans;
  }
  cousionsOfBinary(root = this.root, x, y) {
    const queue = [{ root, root }];
  }

  inOrderTraversal(node = this.root) {
    if (node == null) {
      return 0;
    }
    let left = this.inOrderTraversal(node.left);
    // console.log(node.val);
    let right = this.inOrderTraversal(node.right);
    let max = left + right + 1;
    this.diameter = Math.max(max, this.diameter);
    return Math.max(left, right) + 1;
  }

  invertBinaryTree(root = this.root) {
    if (node == null) {
      return;
    }
    const queue = [root];
    let level = [];
    while (queue.length > 0) {
      let current = queue.pop();
      level.push(current);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    while (level.length > 0) {
      const current = level.pop();
      let left = current.left;
      let right = current.right;
      current.right = left;
      current.left = right;
    }
    return root;
  }

  // Carefully pay attention do DFS for the tree and store them and then reverse the stack and make each coming next node pointing to the next node in the list
  flattenBinaryToLinkedList(root = this.root) {
    if (root == null) {
      return root;
    }
    let stack = [root];
    let linkedList = [];
    let dfs = [];
    while (stack.length > 0) {
      let current = stack.pop();
      linkedList.push(current);
      dfs.push(current.val);
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
    }
    let length = linkedList.length;
    let head = linkedList[0];
    console.log(dfs);
    for (let i = 1; i < length; i++) {
      // console.log(linkedList[i]);
      head.right = linkedList[i];
      head.left = null;
      head = linkedList[i];
    }
    head.right = null;
    head.left = null;
    return root;
  }
  traverseLinkedList(root = this.root) {
    let traverse = [];
    let node = root;
    while (node.right !== null) {
      traverse.push(node.val);
      traverse.push(node.left);
      node = node.right;
    }
    return traverse;
  }

  lowestCommonAnsestor(root = this.root, p, q) {
    if (root == null) {
      return null;
    }

    if (root.val == p || root.val == q) {
      return root;
    }

    const left = this.lowestCommonAnsestor(root.left, p, q);
    const right = this.lowestCommonAnsestor(root.right, p, q);

    if (left !== null && right !== null) {
      return root;
    }

    return left == null ? right : left;
  }

  pushRightMinPlace(arr, val) {
    console.log(arr, " ", val);
    let length = arr.length;
    console.log(length);
    let result = new Array(length + 1);
    let j = 0;

    for (let i = 0; i < result.length; i++) {
      if (arr[j] > val) {
        result.push(val);
        val = Number.MAX_SAFE_INTEGER;
        continue;
      }
      if (j < arr.length) {
        result.push(arr[j]);
      }
      j++;
    }
    return result;
  }
  kthSmallestElement(k, root = this.root) {
    let orderElements = [];
    let stack = [root];
    while (stack.length > 0) {
      let current = stack.pop();
      orderElements.push(current.val);
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
    }
    orderElements.sort((a, b) => a - b);
    return orderElements[k - 1];
  }

  inOrderKthTraversal(root = this.root) {
    if (root == null) {
      return;
    }
    this.inOrderKthTraversal(root.left);
    this.inorder.push(root.val);
    console.log(root.val);
    this.inOrderKthTraversal(root.right);
  }

  buildTree(preorder, inorder) {
    if (preorder.length == 0) {
      return null;
    }

    let r = preorder[0];
    let index = 0;

    for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] === r) {
        index = i;
      }
    }
    const node = new Node(r);
    node.left = this.buildTree(
      [...preorder.slice(1, index + 1)],
      [...inorder.slice(0, index)]
    );
    node.right = this.buildTree(
      [...preorder.slice(index + 1, preorder.length)],
      [...inorder.slice(index + 1, inorder.length)]
    );

    return node;
  }

  serialize(root = this.root){
    let queue = [root];
    let encryption = [];
    while(queue.length>0){
        
            let current = queue.shift();
            current===null ? encryption.push("null") : encryption.push(current.val);
            if(current!==null){
                current.left !== null ? queue.push(current.left) : queue.push(null);
                current.right !== null ? queue.push(current.right) : queue.push(null);
            }
    }
    return encryption+"";
  }

  deserialize(data){
    let nodes = data.split(",");
    let levels = [];
    let index = 1;
    let root = new Node(+nodes[0]);
    if(isNaN(+nodes[0])){
        return root;
    }
    levels.push([root]);
    nodes.splice(0,1);
    while(nodes.length>0){
        let coming = nodes.splice(0,Math.pow(2,index));
        index++;
        let currentLevel = [];
        for(let i = 0; i<coming.length; i++){
            if(coming[i] === "null"){
                currentLevel.push(null);
            }
            else{
                let node = new Node(+coming[i]);
                currentLevel.push(node);
            }
        }
        levels.push(currentLevel);
    }   
    for(let i=0; i<levels.length-2; i++){
        let currentLevel = levels[i];
        let r = 0;
        for(let j=0; j<currentLevel.length; j++){
            let currentElement = currentLevel[j];
            if(currentElement===null) continue;
            currentElement.left = levels[i+1][2*r]!==undefined?levels[i+1][2*r]:null;
            currentElement.right = levels[i+1][2*r+1]!==undefined?levels[i+1][2*r+1]:null;
            r++;
        }
    }
    // console.log(this.dfs(root));
    // console.log(this.inorder);
    return root;
  }

  pathSum(root = this.root, sum, target){
    if(sum < 0){
        return false;
    }
    if(root.val+sum == target && root.left == null && root.right == null){
        return true;
    }
    if(root == null){
        return null;
    }
    sum = sum + root.val;
    let left = this.pathSum(root.left, sum);
    let right = this.pathSum(root.right, sum);
    return left || right;
  }

  sumFromRoot(path, root = this.root){
    if(root == null){
        return 0;
    }
    if(root.left == null && root.right == null){
        let sum = +path;
        return sum;
    }
    let left = this.sumFromRoot( path+`${root.val}`, root.left);
    let right = this.sumFromRoot( path+`${root.val}`, root.right);
    return left+right;
  }
  
  maxPathSum(sum, root = this.root){
    if(root == null){
        return sum;
    }
    let left = this.maxPathSum(sum+root.val, root.left);
    let right = this.maxPathSum(sum+root.val, root.right);
    left = Math.max(0,left);
    right = Math.max(0,right);
    return Math.max(left,right);
  }

  maxPathSum2(root = this.root){
    if(root == null){
        return 0;
    }

    let left = this.maxPathSum2(root.left);
    let right = this.maxPathSum2(root.right);

    let pathSum = left+right+root.val;
    this.diameter = Math.max(this.diameter,pathSum);

    return Math.max(left,right)+root.val;
  }

  checkRoute(root=this.root, arr){
    if(root == null){
        return arr.length == 0;
    }

  }

  checkRouteHelper(node,arr,index){
    
  }
}

let bst = new BinarySearchTree();
// let arr = [9, 4, 17, 3, 6, 22, 5, 7, 20];
let arr = [1,2,3];
for (let i = 0; i < arr.length; i++) {
  bst.add(arr[i]);
}
// console.log(bst.dfs());
// console.log(bst.bfs());
// console.log(bst.bfsLevelWise());
// console.log(bst.rightSideView());
// console.log(bst.inOrderTraversal() - 1);
// console.log(bst.diameter);
// console.log(bst.flattenBinaryToLinkedList());
// console.log(bst.traverseLinkedList());
// console.log(bst.kthSmallestElement(2));
// console.log(bst.inOrderKthTraversal());
// console.log(bst.inorder[2]);
// let serialized = bst.serialize()
// console.log(bst.deserialize(serialized));
// console.log(bst.sumFromRoot(""));
console.log(bst.maxPathSum(0));