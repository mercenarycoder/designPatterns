function lcsTopDown(str1,str2,m,n){
    let table = new Array(m+1);
    for(let i=0; i<m+1; i++){
        table[i] = new Array(n+1).fill(0);
    }
    for(let i=1; i<m+1; i++){
        for(let j=1; j<n+1; j++){
            if(str1[i-1] === str2[j-1]){
                table[i][j] = 1 + table[i-1][j-1];
            } else{
                table[i][j] = Math.max(table[i-1][j],table[i][j-1]);
            }
        }
    }
    return table[m][n];
}

let str1="manjeet";
let str2="manprrt";
console.log(lcsTopDown(str1,str2,str1.length,str2.length));