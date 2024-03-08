class Queue{
    constructor() {
        this.rear = -1;
        this.front = -1;
        this.size = 5;
        this.arr = new Array();
    }
    enQueue(value) {
        if((this.front == 0 && this.rear == this.size-1)||
        (this.rear == (this.front - 1) % (this.size - 1))) {
            console.log("Queue is Full");
            return;
        }
        else if(this.front == -1) {
            this.front = this.rear =0;
            this.arr[this.rear] = value;
        }
        else if(this.rear == this.size - 1 && this.front != 0) {
            this.rear = 0;
            this.arr[this.rear] = value;
        }
        else {
            this.rear++;
            this.arr[this.rear] = value;
        }
    }
    enQueue2(value) {
        if((this.front == 0 && this.rear == this.size -1) || (this.rear == (this.front-1) % (this.rear -1))){
            console.log("Queue is full");
            return;
        }
        if(this.front == -1){
            this.front = this.rear = 0;
            this.arr[this.rear] = value;
        }
        else if(this.rear == this.size-1 && this.front !=0){
            this.rear = 0;
            this.arr[this.rear] = value;
        }
        else{
            this.rear++;
            this.arr[this.rear] = value;
        }
    }
    deQueue() {
        if(this.front == -1){
            console.log("Queue is empty");
            return;
        }
        let data = this.arr[this.front];
        this.arr[this.front] = -1;
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }
        else if(this.front == this.size -1){
            this.front = 0;
        }
        else {
            this.front++;
        }
        return data;
    }
    deQueue2() {
        if(this.front == -1) {
            console.log("Queue is empty");
        }
        const element = this.arr[this.front];
        this.arr[this.front] = -1;
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }
        else if(this.front == this.size -1 ){
            this.front = 0;
        }
        else{
            this.front++;
        }
        return element;
    }
    displayQueue() {
        if(this.front == -1){
            console.log("Queue is empty");
            return;
        }
        if(this.rear >= this.front){
            for(let i = this.front; i<= this.rear; i++)
             console.log(this.arr[i]);
        } else {
            for(let i = this.front; i< this.size; i++)
                console.log(this.arr[i]);
            for(let i = 0; i<= this.rear; i++)
                console.log(this.arr[i]);
        }
    }
}

let arr = [12,12,34,5];
arr.__proto__.creator = () =>{
    console.log("Thanks krishna I am learning again.");
}

console.log(arr.creator());

let q = new Queue;
q.enQueue(13);
q.enQueue(22);
q.enQueue(16);
q.enQueue(-6);

q.displayQueue();

console.log("Delete value:-" +q.deQueue());