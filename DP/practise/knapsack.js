function knapSack(val,wt,W,n,dp={}){
    if(n==0 || W==0){
        return 0;
    }
    if(dp[n,W]){
        return dp[n,W];
    }
    if(W>wt[n]){
        dp[n,W] = Math.max(val[n]+knapSack(val,wt,W-wt[n],n-1,dp),knapSack(val,wt,W,n-1,dp));
        return dp[n,W];
    }
    dp[n,W] = knapSack(val,wt,W,n-1,dp);
    return dp[n,W];
}

function knapSackTopDown(val,wt,W,n){
    let space = new Array(n+1);
    for(let i=0; i<=n; i++){
        space[i] = new Array(W+1).fill(0);
    }
    for(let i=0; i<=n; i++){
        for(let w=0; w<=W; w++){
            if(i==0 || w==0){
                continue;
            }
            if(w>=wt[i-1]){
                space[i][w] = Math.max(val[i-1]+space[i-1][w-wt[i-1]],space[i-1][w]);
            }
            else{
                space[i][w] = space[i-1][w];
            }
        }
    }
    return space[n][W];
}

let n = 3;
let w = 4;
let val = [1,2,3];
let wt = [4,5,1];

// console.log(knapSack(val,wt,w,n));
console.log(knapSackTopDown(val,wt,w,n));