function naiveAlgo(str, pattern) {
  let i = 0;
  let j = 0;
  let start = 0;
  let match = false;
  while (
    match === false &&
    start <= str.length - pattern.length &&
    i <= str.length
  ) {
    if (str[i] === pattern[j]) {
      i++;
      j++;
    } else if (str[i] !== pattern[j]) {
      start = start + 1;
      i = start;
      j = 0;
    }
    if (j === pattern.length) {
      match = true;
    }
    // console.log(i," ",j," ",start)
  }
  return match;
}
function getPrefixTable(p,m){
    let f =[];
    let i=1;
    let j=0;
    f[0] = 0;
    //this kind of a 2 pointer approach
    while(i<m){
        if(p[i]===p[j]){
            f[i] = j+1;
            i++;
            j++;
        } else if(j>0){
            j = f[j-1];
        } else{
            f[i] = 0;
            i++;
        }
    }
    return f;
}

function KMPfinal(t,n,p,m){
    let prefixTable = getPrefixTable(p,m);
    let i=0;
    let j=0;
    while(i<n){
        if(t[i]===p[j]){
            console.log(t[i]," ",p[j]);
            if(j===m-1){
                //index at which a match is found
                console.log("coming here");
                return i-j;
            }
            else{
                i++;
                j++;
            }
        } else if(j>0){
            j = prefixTable[j-1];
        } else{
            i++;
        }
    }
    return -1;
}
let str="abcdefgh";
// prefixTable(str,str.length);
// console.log(f);
console.log(KMPfinal("abcdefgh",str.length, "def",3));
