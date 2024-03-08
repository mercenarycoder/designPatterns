function isSubsetsumPossible(arr,n){
    let dupArray = [...arr];
    const sum = dupArray.reduce((pre,ele)=>{
        return pre+ele
    },0);
    if(sum % 2 !== 0){
        return false;
    }
    let result = isHalfsumPossible(dupArray,sum / 2, n);
    return result;
}

function isHalfsumPossible(arr,sum,n){
    let space = new Array(n+1);
    for(let i=0; i<n+1; i++){
        space[i] = new Array(sum+1);
    }
    for(let i=0; i<sum+1; i++)
        space[0][i] = false;
    for(let i=0; i<n+1; i++)
        space[i][0] = true;

    for(let i=1; i<n+1; i++){
        for(let j=1; j<sum+1; j++){
            if(arr[i-1] <= j){
                space[i][j] = space[i-1][j] || space[i-1][j-arr[i-1]];   
                continue;
            }
            space[i][j] = space[i-1][j];
        }
    }
    return space[n][sum];
}


let arr=[1,5,10,16];
console.log(isSubsetsumPossible(arr,arr.length));