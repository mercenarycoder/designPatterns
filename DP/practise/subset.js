let arr = [2,3,7,8,10];
let sum = 11;

function subSetFinder(arr,sum,n,dp={}){
    if(sum==0){
        return true;
    }
    if(n<0){
        return false;
    }
    if(dp[sum,n]){
        return dp[sum,n];
    }
    if(sum>=arr[n]){
        dp[sum,n] = (subSetFinder(arr,sum-arr[n],n-1,dp)||subSetFinder(arr,sum,n-1,dp));
        return dp[sum,n];
    }
    else{
        dp[sum,n] = subSetFinder(arr,sum,n-1,dp);
        return dp[sum,n];
    }
}

console.log(subSetFinder(arr,sum,arr.length-1));