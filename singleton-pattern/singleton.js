let counter=0;
let instance;

class Counter{
    constructor(){
        if(instance){
            throw new Error("cannot create a new instance");
        }
        this.counter = counter;
        instance = this;
    }
    getCount(){
        return this.counter;
    }
    increment(){
        return ++this.counter;
    }
    decrement(){
        return --this.counter;
    }
}

const ref = Object.freeze(new Counter());
console.log(ref.getCount());
ref.increment();
ref.increment();
console.log(ref.getCount())