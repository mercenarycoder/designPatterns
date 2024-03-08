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
//carefully forming a vector to find next greater element.
function rightGreaterElement(arr,n){
    let stack = new Stack();
    let vector= [];
    for(let i = n-1; i>=0; i--){
        if(stack.getLength() == 0){
            vector.push(-1);
        }
        if(arr[i]<stack.top()){
            vector.push(stack.top());
        }
        else if(arr[i]>stack.top()){
            while(stack.getLength()>0 && arr[i]>=stack.top()){
                stack.pop();
            }
            if(stack.getLength() === 0){
                vector.push(-1);
            } else{
                vector.push(stack.top());
            }
        }
        stack.push(arr[i]);
    }
    return vector.reverse();
}
//now finding next smaller element to the left
function nextLeftSmaller(arr,n){
    let stack = new Stack();
    let vector= [];
    for(let i=0; i<n; i++){
        if(stack.getLength() === 0){
            vector.push(-1);
        }
        if(arr[i]>stack.top()){
            vector.push(stack.top());
        }
        if(arr[i]<stack.top()){
            while(stack.getLength()>0 && arr[i]<stack.top()){
                stack.pop();
            }
            if(stack.getLength()>0){
                vector.push(stack.top());
            } else {
                vector.push(-1);
            }
        }
        stack.push(arr[i]);
    } 
    return vector;
}

//now findind next smaller element to the right
function nextRightSmaller(arr,n){
    let stack = new Stack();
    let vector= [];
    for(let i=n-1; i>=0; i++){
        if(stack.getLength() === 0){
            vector.push(-1);
        }
        else if(arr[i]>stack.top()){
            vector.push(stack.top());
        }
        else if(arr[i]<stack.top()){
            while(stack.getLength()>0 && arr[i]<stack.top()){
                stack.pop();
            }
            if(stack.getLength()>0){
                vector.push(stack.top());
            } else {
                vector.push(-1);
            }
        }
        stack.push(arr[i]);
    } 
    return vector;
}

let arr=[1,3,2,4];
let arr2=[4,5,2,10,8];
// console.log(rightGreaterElement(arr,arr.length));
// console.log(nextLeftSmaller(arr2,arr2.length));
console.log(nextRightSmaller(arr2,arr2.length));