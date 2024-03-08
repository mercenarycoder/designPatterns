class Stack{
    constructor(){
        this.elements = [];
        this.size =0;
    };
    push(ele){
        this.elements.push(ele);
        this.size = this.size + 1;
    }
    pop(){
        if(this.size<=0){
            console.log("stack is empty");
            return;
        }
        let ele = this.elements.pop();
        this.size = this.size - 1;
        return ele;
    }
    getLength() {
        return this.size;
    }
    top(){
        return this.elements[this.size-1];
    }
}

function stockSpan(arr,n){
    let stack = new Stack();
    // for(let i=0; i<n; i++){
    //     stack.push(arr[i]);
    // }
    let vector = [];
    for(let i=0; i<n; i++){
        if(stack.getLength()===0){
            vector.push(-1);
        }
        else if(arr[i]<stack.top().value){
            vector.push(stack.top().key);
        } else if(arr[i]>=stack.top().value){
            while(stack.getLength()>0 && stack.top().value <= arr[i]){
                stack.pop();
            } 
            if(stack.getLength()>0){
                vector.push(stack.top().key);
            } else{
                vector.push(-1);
            }
        }
        stack.push({key:i,value:arr[i]})
    }
    return vector;
}

let arr=[100,80,60,70,60,75,85];
let ans=stockSpan(arr,arr.length);
for(let i=0; i<arr.length; i++){
    console.log(i-ans[i]);
}
