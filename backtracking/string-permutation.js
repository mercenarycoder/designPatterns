function stringPermutations(input,index,str,result=[]){
    if(index<0){
        result.push(str);
        return;
    }
    for(let i =0; i<input.length; i++){
        console.log(input.substring(i,i+1));
        str = str+input.substring(i,i+1);
        stringPermutations(input,index-1,str,result);
    }
    return result;
}

function stringPermutations(str,l,r,res=[]){
    if(l==r){
        res.push(str)
    } else{
        for(let i = l; i<=r; i++){
            str = swap(str,l,i);
            stringPermutations(str,l+1,r,res);
            str = swap(str,l,i);
        }
    }
    return res;
}

function swap(a,i,j){
    let arr = a.split("");
    [arr[i],arr[j]] = [arr[j],arr[i]];
    return arr.join("");
}

let str = "abc";
console.log(stringPermutations(str,0,str.length-1))