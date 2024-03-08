function lcsMemo(str1,str2,m,n,table){
    if(m<0 || n<0){
        return 0;
    }
    if(table[m][n]!=-1){
        return table[m][n];
    }
    if(str1[m] === str2[n]){
        table[m][n] = 1+lcsMemo(str1,str2,m-1,n-1,table);
        return table[m][n];
    }
    table[m][n] = Math.max(lcsMemo(str1,str2,m-1,n,table),lcsMemo(str1,str2,m,n-1,table));
    return table[m][n];
}

export let str1 = "manjeet";
export let str2 = "manprrt";
let table = new Array(str1.length+1).fill(-1);
for(let i=0; i<str1.length+1; i++){
    table[i] = new Array(str2.length+1).fill(-1);
}
console.log(lcsMemo(str1,str2,str1.length-1,str2.length-1,table));
