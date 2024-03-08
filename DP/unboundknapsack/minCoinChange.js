function minCoinChange(arr,n,sum){
    let space = new Array(n+1);
    for(let i=0;i<n+1;i++){
        space[i] = new Array(sum+1);
    }
    for(let j=0;j<sum+1;j++){
        space[0][j] = Number.MAX_SAFE_INTEGER;
    }
    for(let i=1;i<n+1;i++){
        space[i][0] = 0;
    }
    //minimum number of coincs needed for sum
    for(let i=1;i<n+1;i++){
        for(let j=1;j<sum+1;j++){
            if(arr[i-1] <= j){
                space[i][j] = Math.min(1+space[i][j-arr[i-1]],space[i-1][j]);
            } else{
                space[i][j] = space[i-1][j];
            }
        }
    }
    console.log(space);
    return space[n][sum];
}

let arr = [1,2,3];
let sum = 5;
console.log(minCoinChange(arr,arr.length,sum));