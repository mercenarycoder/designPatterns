function unboundedKnapsack(arr,n,wt,val){
    let space = new Array(n+1);
    for(let i=0;i<n+1;i++){
        space[i] = new Array(wt+1);
    }
    for(let i=0; i<n+1; i++){
        space[i][0] = 0;
    }
    for(let j=0; j<wt+1; j++){
        space[0][j] = 0;
    }
    for(let i=1; i<n+1; i++){
        for(let j=1; j<wt+1; j++){
            if(arr[i-1] <= j){
                space[i][j] = Math.max(val[i-1]+space[i][j-arr[i-1]],space[i-1][j]);
                continue;
            }
            space[i][j] = space[i-1][j];
        }
    }
    return space[n][wt];
}

let arr = [1,2,3,4,5,6];
let val = [1,2,3,4,5,6];
let wt = 7;
console.log(unboundedKnapsack(arr,arr.length,wt,val));
