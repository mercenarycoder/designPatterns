class MyStack{
    constructor() {
        this.s=[];
        this.minEle;
    }
    getMin(){
        if(this.s.length == 0){
            console.log("Stack is empty");
        }
        else
         console.log(this.minEle);
    }
    peek(){
        if(this.s.length == 0){
            console.log("stack is empty");
            return;
        }
        let t = this.s[0];
        (t<this.minEle) ? console.log(this.minEle) : console.log(t);
    }
    pop(){
        if(this.s.length == 0){
            console.log("empty");
            return;
        }
        let t = this.s[0];
        this.s.shift();
        if(t < this.minEle){
            console.log(this.minEle);
            this.minEle = (2*this.minEle) - t;
        }
        else{
            console.log(t);
        }
    }
    push(x){
        if(this.s.length == 0){
            this.minEle = x;
            this.s.unshift(x);
            console.log("Number inserted: ",x);
            return;
        }
        else if(x < this.minEle){
            this.s.unshift(2*x - this.minEle);
            this.minEle = x;
        }
        else {
            this.s.unshift(x);
        }
        console.log("Number Inserted: ",x);
    }
}

let z = new MyStack();
z.push(1);
z.push(22);
z.getMin();