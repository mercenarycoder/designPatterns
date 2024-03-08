function numSubsets(arr,n,sum){
    let space = new Array(n+1);
    for(let i=0; i<n+1; i++){
        space[i] = new Array(sum+1);
    }
    for(let i=0; i<sum+1; i++){
        space[0][i] = 0;
    }
    for(let i=0; i<n+1; i++){
        space[i][0] = 1;
    }
    console.log(space);
    for(let i=1; i<n+1; i++){
        for(let j=1; j<sum+1; j++){
            if(arr[i-1] <= j){
                space[i][j] = space[i-1][j]+space[i-1][j-arr[i-1]];
                continue;
            }
            space[i][j] = space[i-1][j];
        }
    }
    console.log(space);
    return space[n][sum];
}

let arr=[15,5,12,10];
console.log(numSubsets(arr,arr.length,15));