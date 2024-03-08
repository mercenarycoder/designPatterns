//this is a unbounded knapsack problem as same coin can be used again and again.
function coinChange(arr,n,sum){
    let space = new Array(n+1);
    for(let i=0; i<n+1; i++){
        space[i] = new Array(sum+1);
    }
    for(let j=0; j<sum+1; j++){
        space[0][j] = 0;
    }
    for(let i=0; i<n+1; i++){
        space[i][0] = 1;
    }
    for(let i=1; i<n+1; i++){
        for(let j=1; j<sum+1; j++){
            if(arr[i-1] <= j){
                space[i][j] = space[i][j-arr[i-1]]+space[i-1][j]; 
            } else{
                space[i][j] = space[i-1][j];
            }
        }
    }
    return space[n][sum];
}

let arr=[1,2,3];
let sum=5;
console.log(coinChange(arr,arr.length,sum));