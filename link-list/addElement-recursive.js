class Node{
    constructor(ele) {
        this.ele = ele;
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.root = null;
    }
    addEle(ele,node=this.root){
        if(node.next === null){
            let nodeTemp =new Node(ele);
            node.next = nodeTemp;
            return ;
        }
        this.addEle(ele,node.next);
    }
    printList(){
        let top = this.root;
        while(top.next!==null){
            console.log(top.ele);
            top = top.next;
        }
        console.log(top.ele);
    }
    removeDuplicate(){
        let unique = new Set();
        let top = this.root;
        console.log(top);
        unique.add(top.ele);
        while(top.next!==null){
            if(unique.has(top.next.ele)){
                console.log("coming here");
                let nextElement = top;
                nextElement.next = nextElement.next.next;
                continue;
                // top.next = top.next.next; 
            } else{
                unique.add(top.ele);
            }
            top = top.next;
        }
        if(unique.has(top.ele)){
            top.next = null;
        }
        this.printList();
    }
}

function merge2SortedList(list1,list2){
    let listFinal = new LinkList();
    let root1 = list1.root;
    let root2 = list2.root;
    while(root1.next!==null && root2.next!==null){
        if(root1.ele>=root2.ele){
            listFinal.addEle(root1.ele);
            root1 = root1.next;
        } else{
            listFinal.addEle(root2.ele);
            root2 = root2.next;
        }
    }
    while(root1.next!==null){
        listFinal.addEle(root1.ele);
    }
    while(root2.next!==null){
        listFinal.addEle(root2.ele);
    }
}

// let list2 = new LinkList();
// list2.root = new Node(3);
// let arr = [3,4,5,1,2,3,4,7,8,5];
// for(let i=0; i<arr.length; i++){
//     list2.addEle(arr[i]);
// }
// list2.printList();
// console.log("Now removing duplicates..");
// list2.removeDuplicate();

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let tracker = new Set();
    tracker.add(n);
    while(n!==1){
        let ans = sqaureFinder(n);
        if(tracker.has(ans)){
            return false;
        }else{
            tracker.add(ans);
        }
        // console.log(ans);
        n = ans;
    }
    return true;
};
var sqaureFinder = function(n){
    let ans=0;
    while(n>0){
        let ele = n%10;
        console.log(ele);
        ans = Math.abs(ans + Math.pow(ele,2));
        n = Math.floor(n/10);
    }
    return ans;
}

console.log(isHappy(19));
// console.log(sqaureFinder(19));