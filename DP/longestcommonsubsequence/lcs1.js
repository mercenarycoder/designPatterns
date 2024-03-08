
//recursive solution of lcs
function lcs(x,y,i,j,l1,l2){
    if(i>=l1 || j>=l2){
        return 0;
    }
    if(x[i] === y[j]){
        return Math.max(1+lcs(x,y,i+1,j+1,l1,l2));
    }
    return Math.max(lcs(x,y,i+1,j+1,l1,l2),lcs(x,y,i+1,j,l1,l2),lcs(x,y,i,j+1,l1,l2));
}

let x = "abcdgh";
let y = "abedfhr";
console.log(lcs(x,y,0,0,x.length,y.length));