class Node{
    constructor(ele){
        this.ele = ele;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.root = null;
        this.tail = null;
        this.length = 0;
    }
    addNode(ele){
        let node = new Node(ele);
        if(this.root===null){
            this.root = node;
            //these operations I am adding for doubly linked list
            node.prev = this.root;
            this.tail = this.root;
            this.length = 1;
            return;
        }
        let top = this.root;
        let size = this.length;
        while(top.next){
            top = top.next;
            size++;
        }
        top.next=node;
        node.prev = top;
        this.tail = top.next;
        this.length = size;
    }
    
    printList(){
        let top = this.root;
        while(top.next!==null){
            console.log(top.ele);
            top = top.next;
        }
        console.log(top.ele);
    }
    deleteNode(ele){
        let pointer = this.root;
        while(pointer.next!=null){
            if(pointer.next.ele === ele){
                break;
            }
            pointer = pointer.next;
        }
        console.log("Deleting node:-",pointer.next.ele);
        pointer.next = pointer.next.next;
        pointer.next.prev = pointer;
        this.length = this.length - 1;
        this.printList();
    }
    reverseTraverse(){
        console.log("reverse:-")
        let last = this.tail;
        while(last !== this.root){
            console.log(last.ele);
            last = last.prev;
        }
        console.log(last.ele);
    }
    reverseLinkedList(){
        let prev = null;
        let present = this.root;
        let next = this.root.next;
        console.log()
        while(present!==null){
            present.next = prev;
            prev = present;
            present = next;
            if(next!=null){
                next = next.next;
            }
        }
        this.root = prev;
        this.printList();
    }
}

class MergeSort{
    sortList(head){
        if(head == null || head.next == null){
            return head;
        }
        let mid = this.getMid(head);
        console.log(mid.ele);
        let left = this.sortList(head);
        let right = this.sortList(mid);

        return this.merge(left,right);
    }
    merge(list1,list2){
        let root1 = list1.root;
        let root2 = list2.root;
        let ansList = new LinkedList();
        while(root1!==null && root2 !== null){
            if(root1.ele > root2.ele){
                ansList.addNode(root2.ele);
                root2 = root2.next;
            } else{
                ansList.addNode(root1.ele);
                root1 = root1.next;
            }
        }
        while(root1!==null){
            ansList.addNode(root1.ele);
            root1 = root1.next;
        }
        while(root2!==null){
            ansList.addNode(root2.ele);
            root2 = root2.next;
        }
        return ansList;
    }
    getMid(head){
        let mid = head.root;
        let fast = head.root;
        while(fast!==null && fast.next!==null){
            mid = mid.next;
            fast = fast.next.next;
        }
        return mid;
    }
    
}

let list1 = new LinkedList();
let arr =[12,2,4,22,45];
for(let i=0;i<arr.length;i++){
    list1.addNode(arr[i]);
}
list1.reverseLinkedList();
//  list2 =bubbleSort(list1);
//  list2.printList();

 function bubbleSort(list){
    let start = list.root;
    while(start!=null){
        let forward = start.next;
        while(forward!==null){
            if(start.ele > forward.ele){
                let temp = forward.ele;
                forward.ele = start.ele;
                start.ele = temp;
            }
            forward = forward.next;
        }
        start = start.next
    }
    return list;
 }
//recursion reverse

 
