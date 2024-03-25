//in this program will implement a simple binary search tree

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = null;
    }
}
//left hand side will be smaller
//right side element will be greater
class binarySearchTree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(value){

    }
    height(node){
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
        return node;
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

let tree = new binarySearchTree();
tree.insert(10);
tree.insert(20,tree.root);
tree.insert(4,tree.root);
let arr =[2,3,1,5,7,6];
for(let i=0; i<arr.length; i++){
    tree.insert(arr[i],tree.root);
}
// tree.depthFirstSearch();
// tree.display();
tree.breadthFirstSearch()
console.log(tree.balancedOrNot());