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

function NSR(arr,n){
    let stack = new Stack();
    let vector = [];
    for(let i=n-1; i>=0; i--){
        if(stack.getLength()===0){
            vector.push(-1);
        } else if(arr[i]>=stack.top().value){
            vector.push(stack.top().key);
        } else if(arr[i]<stack.top().value){
            while(stack.getLength()>0 && arr[i]<stack.top().value){
                stack.pop();
            }
            if(stack.getLength()===0){
                vector.push(-1);
            } else{
                vector.push(stack.top().key);
            }
        }
        stack.push({key:i,value:arr[i]});
    }
    return vector.reverse();
}

function NSL(arr,n){
    let stack = new Stack();
    let vector = [];
    for(let i=0; i<n; i++){
        if(stack.getLength()===0){
            vector.push(-1);
        } else if(arr[i]>=stack.top().value){
            vector.push(stack.top().key);
        } else if(arr[i]<stack.top().value){
            while(stack.getLength()>0 && arr[i]<stack.top().value){
                stack.pop();
            }
            if(stack.getLength()===0){
                vector.push(-1);
            } else{
                vector.push(stack.top().key);
            }
        }
        stack.push({key:i,value:arr[i]});
    }
    return vector;
}

function MAH(arr,n){
    let right = NSR(arr,n);
    let left = NSL(arr,n);
    let width = [];
    for(let i=0; i<n; i++){
        width[i] = right[i]-left[i]-1;
    }
    let area = [];
    for(let i=0; i<n; i++){
        area[i] = arr[i]*width[i];
    }
    let max = Math.max(...area);
    console.log("Areas:-",area);
    return max;
}

// let arr=[6,2,5,4,5,1,6];
// console.log(MAH(arr,arr.length));
function maxRectangle(matrix,n,m){
    let vector = [];
    for(let j=0; j<m; j++){
      vector.push(matrix[0][j]);   
    }
    let max = MAH(vector,n);
    for(let i=1; i<n; i++){
        for(let j=0; j<m; j++){
            if(matrix[i][j]==0){
                vector[j]=0;
            } else{
                vector[j] = vector[j] + matrix[i][j];
            }
        }
        console.log(vector);
        let mahi = MAH(vector,n);
        console.log(mahi);
        if(mahi>max){
            max=mahi;
        }
    }
    return max;
}

let matrix = [[0,1,1,0],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,0,0]];
console.log(maxRectangle(matrix,4,4));