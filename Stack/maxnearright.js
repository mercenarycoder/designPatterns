//Nearest greater element
function nearGreaterElement(arr){
    let stack =[];
    let vector =[];
    for(let i = arr.length-1; i>=0; i--){
        if(stack.length === 0){
            vector.push(-1);
        } else if(stack.length>0 && arr[i]<stack[stack.length-1]){
            vector.push(stack[stack.length-1]);
        } else{
            while(stack.length>0 && arr[i]>stack[stack.length-1]){
                stack.pop();
            }
            if(stack.length===0){
                vector.push(-1);
            } else{
                vector.push(stack[stack.length-1]);
            }
        }
        stack.push(arr[i])
    }
    return vector.reverse();
}
function nearGreaterLeft(arr){
    let stack2 = [];
    let vector = [];
    for(let i=0;i<arr.length;i++){
        if(stack2.length===0){
            vector.push(-1);
        }
        else if(stack2.length>0 && arr[i]>stack2[stack2.length-1]){
            vector.push(stack2[stack2.length-1]);
        } else{
            while(stack2.length>0 && arr[i]<stack2[stack2.length-1]){
                stack2.pop();
            }
            if(stack2.length===0){
                vector.push(-1);
            }else{
                vector.push(stack2[stack2.length-1]);
            }
        }
        stack2.push(arr[i]);
    }
    return vector;
}
function stockSpan(arr){
    let stack2 = [];
    let vector = [];
    for(let i=0;i<arr.length;i++){
        if(stack2.length===0){
            vector.push(1);
        }
        else if(stack2.length>0 && arr[i]<stack2[stack2.length-1]){
            vector.push(1);
        } else{
            let count = 1;
            let stack = [...stack2];
            while(stack.length>0 && arr[i]>stack[stack.length-1]){
                count++;
                stack.pop();
            }
            vector.push(count)
        }
        stack2.push(arr[i]);
    }
    return vector;
}
function nsR(arr){
    let vector = [];
    let stack = [];
    for(let i=arr.length-1; i>=0; i--){
       if(stack.length==0){
        vector.push(-1);
       } else if(stack.length>0 && arr[i] >= stack[stack.length-1].val){
        vector.push(stack[stack.length-1].key);
        console.log(stack[stack.length-1].val);
       } else {
        while(stack.length>0 && arr[i] < stack[stack.length-1].val){
            stack.pop();
        }
        if(stack.length===0){
            vector.push(-1);
        } else{
        console.log(stack[stack.length-1].val);

            vector.push(stack[stack.length-1].key)
        }
       }
       stack.push({key:i,val:arr[i]});
    }
    return vector.reverse();
}
function nsL(arr){
    let vector = [];
    let stack = [];
    for(let i=0; i<arr.length; i++){
       if(stack.length==0){
        vector.push(-1);
       } else if(stack.length>0 && arr[i] > stack[stack.length-1].val){
        vector.push(stack[stack.length-1].key);
       } else {
        while(stack.length>0 && arr[i] < stack[stack.length-1].val){
            stack.pop();
        }
        if(stack.length===0){
            vector.push(-1);
        } else{
            vector.push(stack[stack.length-1].key)
        }
       }
       stack.push({key:i,val:arr[i]});
    }
    return vector;
}
let arr = [6,2,5,4,5,1,6];
function maxAreaHistogram(arr){
    let nsr = nsR(arr);
    let nsl = nsL(arr);
    console.log(nsr);
    console.log(nsl);
    let areas = [];
    for(let i=0; i<arr.length; i++){
        let breadth = Math.abs(nsl[i]-nsr[i]+1);
        let area = arr[i] * breadth; 
        areas.push(area);
    }
    console.log(areas)
    let max = Math.max(areas);
    return max;
}
console.log(maxAreaHistogram(arr));
// console.log(nearGreaterLeft([2,3,6,4,7,8]));
// console.log(stockSpan([100,80,60,70,60,75,85]));