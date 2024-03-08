class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SingleLinked{
    constructor(){
        this.head = null;
    }
    checkStartNode(value){
        if(this.head == null){
            this.head = new Node(value);
            return true;
        }
        return false;
    }
    addNode(value){
        if(this.checkStartNode(value))
        return;

        let start = this.head;
        while(start.next){
            start = start.next;
        }
        console.log(start);
        start.next = new Node(value);
    }
    addNodeStart(value){
        if(this.checkStartNode())
        return;

        this.head.next = this.head;
        this.head= new Node(1);
    }
    print(){
        let start = this.head;
        while(start){
            console.log(start.value);
            start = start.next;
        }
    }
}

linkedList = new SingleLinked();
linkedList.addNode(12);
linkedList.addNode(23);
linkedList.addNode(4);
linkedList.print();
linkedList.addNodeStart(1);
linkedList.print();