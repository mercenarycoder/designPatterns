var compareVersion = function(version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    let ans = 0;
    let i = v1.length-1;
    let j = v2.length-1;
    if(i>j){
        for(let x=0; x<i-j; x++){
            v2.push(0);
        }
        j = i;
    }
    else if(j>i){
        for(let x=0; x<j-i; x++){
            v1.push(0);
        }
        i = j; 
    }
    while(i>=0 && j>=0){
        let com1 = +v1[i];
        let com2 = +v2[j];
        if(com1>com2){
            ans=1;
        } else if(com1<com2){
            ans=-1;
        } else{
            ans = ans;
        }
        i--;
        j--;
    }
    return ans;
};

let k=[1,0,0,2,3];
console.log(compareVersion("1","1.1"));