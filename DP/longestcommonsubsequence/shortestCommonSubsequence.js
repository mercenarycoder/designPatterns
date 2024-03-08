   /**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shorttestCommonSubsequence = function(str1, str2) {
    let m= str1.length;
    let n= str2.length;
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
    let str=[];
    let i= m;
    let j= n;
    while(i>0 && j>0){
        if(str1[i-1]===str2[j-1]){
            str.push(str1[i-1]);
            i--;
            j--;
        } else{
            if(table[i-1][j] > table[i][j-1]){
                str.push(str1[i-1]);
                i--;
            } else{
                str.push(str2[j-1]);
                j--;
            }
        }
    }
    while(i>0){
        str.push(str1[i-1]);
        i--;
    }
    while(j>0){
        str.push(str2[j-1]);
        j--;
    }
    return str.reverse().join('')
};


let str1= "acbcf";
let str2= "abcdaf";
console.log(shorttestCommonSubsequence(str1,str2));