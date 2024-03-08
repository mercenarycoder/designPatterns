/**  
 *@param {string} str1
 *@param {int} n
*/
function longestRepeatingSubsequence(str1,n){
    let table = new Array(n+1);
    for(let i=0; i<n+1;i++)
    {
        table[i] = new Array(n+1).fill(0);
    }
    let max =0;
    for(let i=1; i<n+1; i++){
        for(let j=i+1; j<n+1; j++){
            if(str1[i-1]===str1[j-1]){
                table[i][j] = 1+table[i-1][j-1];
                if(table[i][j] > max)
                max=table[i][j];
            } else{
                table[i][j] = Math.max(table[i-1][j],table[i][j-1]);
            }
        }
    }
    console.table(table);
    return max;
}

let str1 = "aabebcdd";
console.log(longestRepeatingSubsequence(str1,str1.length));
let str2 = "axxxd";
console.log(longestRepeatingSubsequence(str2,str2.length));
