function minOperations(nums,sum){
    let space = new Array(nums.length+1);
    for(let i=0; i<space.length; i++){
        space[i] = new Array(sum+1);
        space[i][0] = 0;
    }
    for(let j=0; j<sum+1; j++){
        space[0][j] = 0;
    }
    for(let i=1; i<nums.length+1; i++){
        for(let j=1; j<sum+1; j++){
            if(nums[i-1] <= j){
                console.log(nums[i-1]," ",j);
                space[i][j] = Math.max(1+space[i][j-nums[i-1]],space[i-1][j]);
            }
            space[i][j] = space[i-1][j];
        }
    }
    console.table(space);
    return space[1][sum];
}

console.log(minOperations([3,4],10))