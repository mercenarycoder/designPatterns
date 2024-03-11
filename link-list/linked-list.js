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
    addNodeCircular(ele){
        let node = new Node(ele);
        if(this.root === null){
            this.root=node;
            node.next = this.root;
            this.length = 1;
            return;
        }
        let top = this.root;
        while(top.next !== this.root){
            top= top.next;
        }
        top.next = node;
        node.next = this.root;
    }
    printCircularList(){
        let top = this.root;
        while(top.next !== this.root){
            console.log(top.ele);
            top = top.next;
        }
        console.log(top.ele);
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
}

let list1 = new LinkedList();
// list1.addNode(12);
// list1.addNode(11);
// list1.addNode(4);
// list1.addNode(5);
// list1.addNode(56);
// list1.printList();
// list1.deleteNode(5);
// list1.reverseTraverse()
list1.addNodeCircular(12);
list1.addNodeCircular(11);
list1.addNodeCircular(4);
list1.addNodeCircular(5);
list1.addNodeCircular(56);
list1.printCircularList();