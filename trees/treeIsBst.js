class Node{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

function checkBst(root){
    return checkBstDeep(root,Number.MIN_VALUE,Number.MAX_SAFE_INTEGER);
}

function checkBstDeep(root,min,max){
    if(root === null) return true;
    if(root.val > max || root.val < min) return false;
    return checkBstDeep(root,root.left+1,max) && checkBst(root,min,root.right);
}

const a = new Node(5);
const b = new Node(2);
const c = new Node(7);
const d = new Node(1);
const e = new Node(3);
const f = new Node(6);
const g = new Node(8);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = g;
c.left = f;

console.log(checkBst(a));