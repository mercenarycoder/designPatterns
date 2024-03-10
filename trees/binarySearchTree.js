class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                    } else{
                        searchTree(node.left);
                    }
                } else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                    } else{
                        searchTree(node.right);
                    }
                } else{
                    return null;
                }
            }
            return searchTree(node);
        }
    }
    // In a binary search tree minimum node is at the leftest leaf node
    getMin(){
        const current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.val;
    }
    // In a BST maximum element is at the righmost corner
    getMax(){
        const current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.val;
    }
    find(data){
        const node = this.root;
        //Implementing DFS to find the node
        let stack = [node];
        while(stack.length>0){
            const current = stack.pop();
            if(current.val === data){
                return true;
            }
            if(current.right !== null){
                stack.push(current.right);
            } 
            if(current.left !== null){
                stack.push(current.left);
            }
        }
        return false;
    }
    remove(data) {
        const removeNode = function(node,data){
            if(node === null){
                return null;
            }
            if(data == node.data){
                //node has no children
                if(node.left === null && node.right === null) return null;
                //node has no left child
                if(node.left === null) return node.right;
                //node has no right child
                if(node.right === null) return node.left;
                //node has 2 children
                let tempnode = node.right;
                while(tempnode.left !== null){
                    tempnode= tempnode.left;
                } 
                node.data = tempnode.data;
                node.right = removeNode(node.right,tempnode.data);
                return node;
            } else if(data < node.data){
                node.left = removeNode(node.left,data);
            } else{
                node.right = removeNode(node.right,data);
            }
        }
        this.root = removeNode(this.root,data);
    }
}