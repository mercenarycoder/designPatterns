class Node {
  constructor(start, end) {
    this.data = null;
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
  }
}
class SegmentTree {
  constructor(arr) {
    this.root = this.constructTree(arr, 0, arr.length);
  }
  //O(n) to construct tree
  constructTree(arr, start, end) {
    if (start == end) {  
      let leaf = new Node(start, end);
      leaf.data = arr[start];
      return leaf;
    }
    let node = new Node(start, end);
    let mid = Math.floor((start + end) / 2);
    node.left = this.constructTree(arr, start, mid);
    node.right = this.constructTree(arr, mid + 1, end);
    node.data = node.left.data + node.right.data;
    return node;
  }
  display(node = this.root) {
    let str = "";
    if (node.left != null) {
      str =
        str +
        "Interval=[" +
        node.left.start +
        "-" +
        node.left.end +
        "] and data:" +
        node.left.data +
        "+ ->";
    } else {
      str = str + "No left child";
    }
    //for current node
    str =
      str +
      "Internal=[" +
      node.start +
      "-" +
      node.end +
      "] and data:" +
      node.data +
      " <-";

    if (node.right != null) {
      str =
        str +
        "Interval=[" +
        node.right.start +
        "-" +
        node.right.end +
        "] and data:" +
        node.right.data +
        " ->";
    } else {
      str = str + "No Right child";
    }
    console.log(str);
    if (node.left) {
      this.display(node.left);
    }
    if (node.right) {
      this.display(node.right);
    }
  }
  query(starti, endi, node = this.root) {
    if (node.start >= starti && node.end <= endi) {
      //node is completely lying inside
      return node.data;
    } else if (node.start > endi || node.end < starti) {
      return 0;
    } else {
      return (
        this.query(starti, endi, node.left) +
        this.query(starti, endi, node.right)
      );
    }
  }
  update(index,value,node = this.root){
    if(index >= node.start && index<=node.end){
        if(index == node.start && index == node.end){
            node.data = value;
            console.log(node.data);
            return node.data;
        } else {
            let leftAns = this.update(index,value,node.left)+0;
            let rightAns = this.update(index,value,node.right)+0;
            console.log(leftAns," ",rightAns);
            node.data = Math.floor(leftAns+rightAns);
            return node.data;
        }
    } 
    return node.data;
  }
}

let arr=[3,8,6,7,-2,-8,4,9];
let st = new SegmentTree(arr);
// st.display()
// st.update(3,23);
// st.display();
console.log(st.query(1,6));