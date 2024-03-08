function subsetExist(S,arr,i,N){
    if(i===N){
        return 0;
    }
    if(S === 0){
        return 1;
    }
    if(arr[i] <= S){
        return Math.max(subsetExist(S-arr[i],arr,i+1,N),subsetExist(S,arr,i+1,N)); 
    }
    return subsetExist(S,arr,i+1,N);
}

function subsetMemoized(sum,arr,n){
    let mem = new Array(n+1);
    for(let i=0; i<=sum; i++){
        mem[i] = new Array(sum+1).fill(0);
    }
    let i,w;
    
}

let arr = [2,3,17,18,10];
let sum = 11;
console.log(subsetExist(sum,arr,0,arr.length));