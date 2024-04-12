let str1="leetciklode";
let str2="etcodc";
console.log(lcsCountinous(str1,str2));
function lcsCountinous(str1,str2){
    let n = str1.length;
    let m = str2.length;
    let space = new Array(n+1);
    for(let i=0; i<n+1; i++){
        space[i] = new Array(m+1).fill(0);
    }
    let max = 0;
    for(let i=1; i<n+1; i++){
        for(let j=1; j<m+1; j++){
            if(str1[i-1]===str2[j-1]){
                space[i][j] = 1+space[i-1][j-1];
                if(max<space[i][j]){
                    max=space[i][j];
                }
            }
            else{
                // space[i][j] = Math.max(space[i-1][j],space[i][j-1]);
            }
        }
    }
    console.table(space);
    return max;
}