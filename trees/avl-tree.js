//difference in height of left and right tree is <=1 then it is a balanced tree
class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}

// AVL -> a self balancing binary tree
/* 
  Insertion:- 
  1. Insert a node n in tree.
  2. 
 O(log n) in insertion complexity
*/
class AvlTree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(value){

    }
    height(node){
        if(node == undefined){
            return -1;
        }
        if(node === null){
            return -1;
        }
        return node.height;
    }
    display(){
        this.display(this.root,"Root node:-");
    }
    display(node,details){
        if(node===null){
            return;
        }
        console.log(details+" "+node.value);
        this.display(node.left,`The Left child of:-${node.value}`);
        this.display(node.right,`The Right child of:-${node.value}`);
    }
    insert(val,node){
        if(this.root == null){
            this.root = new Node(val);
            return;
        }
        if(node == null){
            return new Node(val);
        }
        if(val < node.value){
            node.left = this.insert(val,node.left);
        } else if(val > node.value){
            node.right = this.insert(val,node.right);
        }
        node.height = Math.max( this.height(node.left),this.height(node.right))+1;
        console.log(node.height);
        return this.rotate(node);
    }

    rotate(node){
        if(this.height(node.left)-this.height(node.right)>1){
            console.log("Coming here");
            //the tree is left heavy
            if(this.height(node.left.left) - this.height(node.left.right) >0){
                //left left case
                console.log("Coming here left->left case");
                return this.rotateRight(node);
            }
            else if(this.height(node.left.left) - this.height(node.left.right)<0){
                //left right case
                console.log("Coming here left right");
                node.left = this.leftRotate(node);
                console.log(node.left);
                return this.rotateRight(node);
            }
        }
        if(this.height(node.left) - this.height(node.right) <-1){
            console.log("Coming here right heavy");
            // the tree is right heavy
            if(this.height(node.right.left) - this.height(node.right.right) < 0){
                // right-right heavy
                return this.leftRotate(node);
            }
            if(this.height(node.right.left) - this.height(node.right.right) >0 ){
                // right - left heavy
                node.right = this.rotateRight(node.right);
                return this.leftRotate(node);
            }
        }
        return node;
    }

    rotateRight(p){
        if(p.left==null || p.left.right==null){
            return p;
        }
        let c = p.left;
        let t = c.right;

        c.right = p;
        p.left = t;
        
        p.height=Math.max(this.height(p.left),this.height(p.right)+1);
        c.height=Math.max(this.height(c.left),this.height(c.right)+1);
        
        return c;
    }
    leftRotate(c){
        if(c.right==null || c.right.left==null ){
            return c;
        }
        let p = c.right;
        let t = p.left;

        p.left = c;
        c.right = t;
        
        p.height=Math.max(this.height(p.left),this.height(p.right)+1);
        c.height=Math.max(this.height(c.left),this.height(c.right)+1);
        console.log(p.height," ",c.height);
        return p;
    }

    balancedOrNot(node= this.root){
        if(node == null){
            return true;
        }
        return Math.abs(this.height(node.left)-this.height(node.right))<=1 && this.balancedOrNot(node.left) && this.balancedOrNot(node.right);
    }

    depthFirstSearch(node=this.root){
        if(node == null){
            return;
        }
        console.log(node.value);
        this.depthFirstSearch(node.left);
        this.depthFirstSearch(node.right);
    }
    populateSorted(nums,start,end){
        if(start>end){
            return;
        }
        let mid = Math.floor((start+end)/2);
        this.insert(nums[mid]);
        this.populateSorted(nums,start,mid);
        this.populateSorted(nums,mid+1,end);
    }
    display(node = this.root,details){
        if(node == null){
            return;
        }
        console.log(`${details}:- ${node.value}`);
        this.display(node.left,`Left of node:-${node.value}`);
        this.display(node.right,`Right of node:-${node.value}`);
    }
    breadthFirstSearch(node=this.root){
        let queue = [this.root];
        let result = [];
        while(queue.length>0){
            let current = queue.shift();
            result.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        console.log(result);
    }
}

let avlTree = new AvlTree();
avlTree.insert(12)
for(let i=1; i<5; i++){
    avlTree.insert(i,avlTree.root);
}
avlTree.display();