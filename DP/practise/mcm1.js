
function palindromePatition(s,i,j,dp){
    if(j<i){
        return 0;
    }
    if(i==j){
        return 1;
    }
    if(dp[i][j]!==null){
        console.log("here");
        return dp[i][j];
    }
    if(isPlaindrome(s,i,j)){
        return 0;
    }
    let ans = s.length;
    for(let k=i; k<j-1; k++){
        dp[i][j] = Math.floor(1+palindromePatition(s,i,k,dp)+palindromePatition(s,k+1,j,dp));
        ans = Math.min(ans,dp[i][j]);
    }
    return ans;
}

function isPlaindrome(s,i,j){
    let str = s.substring(i,j);
    let revStr = str.split("").reverse().join("");
    return str === revStr ? true : false;
}

let str = "nitikn";
let dp = new Array(str.length+1);
for(let i=0; i<=str.length; i++){
    dp[i] = new Array(str.length+1).fill(null);
}
console.log(palindromePatition(str,0,str.length,dp));
