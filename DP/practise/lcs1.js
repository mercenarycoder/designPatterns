let str1 = "abac";
let str2 = "cab";

console.log(lcsLength(str1,str2));

function lcsLength(str1,str2){
    let n = str1.length;
    let m = str2.length;
    let space = new Array(n+1);
    for(let i=0; i<n+1; i++){
        space[i] = new Array(m+1).fill(0);
    }

    for(let i=1; i<n+1; i++){
        for(let j=1; j<m+1; j++){
            if(str1[i-1]===str2[j-1]){
                space[i][j] = 1+space[i-1][j-1];
            } else{
                space[i][j] = Math.max(space[i-1][j],space[i][j-1]);
            }
        }
    }
    let str = [];
    while(n>0 && m>0){
        if(str1[n-1] === str2[m-1]){
            str.push(str1[n-1]);
            n--;
            m--;
        }
        else{
            if(space[n-1][m]>space[n][m-1]){
                str.push(str1[n-1]);
                n--;
            }
            else{
                str.push(str2[m-1]);
                m--;
            }
        }
    }
    while(n>0){
        str.push(str1[n-1]);
        n--;
    }
    while(m>0){
        str.push(str2[m-1]);
        m--;
    }
    console.log(str.reverse().join(""));
    return space[n][m];
}