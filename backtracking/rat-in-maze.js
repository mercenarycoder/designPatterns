let maze = [[0,0,0],[0,0,0],[0,0,0]];
function solutionMaze(r,c,dp){
    if(r<0 || c<0){
        return 0;
    }
    if(r==0&&c==0){
        return 1;
    }
    console.log(dp[r-1][c]," ",dp[r][c-1]);
    if(r>0) dp[r-1][c] = solutionMaze(r-1,c,dp);
    if(c>0) dp[r][c-1] = solutionMaze(r,c-1,dp);
    return dp[r-1][c]+dp[r][c-1];
}
let r = 3;
let c = 3;
let dp = new Array(r+1);
for(let i=0; i<r+1; i++){
    dp[i] = new Array(c+1).fill(-1);
}

function pathPrint(r,c,path){
    if(r==1 && c==1){
        console.log(path);
        return;
    }
    if(r>1 && c>1){
        pathPrint(r-1,c-1,path+"\\>");
    }
    if(r>1){
        pathPrint(r-1,c,path+"D");
    }
    if(c>1){
        pathPrint(r,c-1,path+"R");
    }
}
// console.table(dp);
// console.log(solutionMaze(r,c,dp));
console.log(pathPrint(3,3,""));