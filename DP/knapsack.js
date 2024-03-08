function knapSack(wt,vl,W,n,i){
    if(i==n || W == 0){
        return 0;
    }
    if(wt[i] > W){
        return 0 + knapSack(wt,vl,W,n,i+1);
    }
    return Math.max(vl[i]+knapSack(wt,vl,W-wt[i],n,i+1),knapSack(wt,vl,W,n,i+1));
}

function knapSackDynamic(wt,vl,W,n){
    let space = new Array(n+1);
    for(let i=0; i<n+1; i++)
        space[i] = new Array(W+1).fill(0);

    for(let i=1; i<n+1;i++){
        for(let j=1; j<W+1; j++){
            if(wt[i-1] <= j){
                space[i][j] = Math.max(vl[i-1]+space[i-1][j-wt[i-1]],space[i-1][j]);
            }
            else{
                space[i][j] =0+ space[i-1][j];
            }
        }
    }
    console.table(space);
    return space[n][W];    
}

// function knapSackTopDown(wt,vl,W,n){
//     let arr= new Array(n+1);
//     for(let i=0;i<W;i++){
//         arr[i] = new Array(W+1).fill(0);
//     }
//     for()
// }

let wt =[4,5,1];
let vl = [1,2,3];
// console.log(knapSack(wt,vl,4,wt.length,0));
// console.log(knapSackDynamic(wt,vl,4,wt.length));

function subSet(arr,sum,n){
    let space = new Array(n+1);
    for(let i=0;i<n+1;i++){
        space[i] = new Array(sum+1).fill(0);
        space[i][0] = 1;
    }
    for(let i=1; i<n+1; i++){
        for(let j=1; j<sum+1; j++){
            if(arr[i-1]<=j){
                space[i][j] = space[i-1][j-arr[i-1]]+space[i-1][j];
            } else{
                space[i][j] = space[i-1][j];
            }
        }
    }
    console.table(space);
    return space[n][sum];
}

let sub = [2,3,7,8,10];
let sum = 11;
console.log(subSet(sub,sum,sub.length));

function equalPartion(sum1,sum2,arr,i,n){
    if(sum1===sum2&&i===n){
        return true;
    }
    if(i>=n){
        return false;
    }
    return equalPartion(sum1+arr[i],sum2,arr,i+1,n) || equalPartion(sum1,sum2+arr[i],arr,i+1,n); 
}

let equal = [1,5,11,5];
let space = new Array(equal.length+1);
for(let i=0; i<space.length; i++){
    space[i] = new Array(equal.length+1).fill(-1);
    space[i]
}
// console.log(equalPartion(0,0,equal,0,equal.length));
