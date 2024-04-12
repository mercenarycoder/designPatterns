function findMaximumSum(str,k){
    //a way to convert a string into a number in javascript
    // str = +str;
    let obj = {};
    str = str.split('');
    for(let i=0; i<str.length; i++){
        if(obj[str[i]]){
            obj[str[i]].push(i);
        } else{
            obj[str[i]] = [i];
        }
    }
    let copy = [...str];
    console.log(obj);
    let arr = str.sort((a,b)=>b-a);
    console.log(arr);
    let j=0;
    let z=0;
    let swaps = 0;
    while(swaps!==k && j<str.length){
        if(obj[arr[j]] && obj[arr[j]].length>0){
            let index = obj[arr[j]].shift();
            //element already at position
            if(index == j){
                continue;
            } else{
                let temp = copy[j];
                str[index] = temp;
                str[j] = arr[j];
                swaps++;
            }
        }
        j++;
    }
    str = str.join('');
    return str;
}

function maximumElement(str,k,l,max){
    if(k==0 || l==str.length-1){
        return;
    } else{
        for(let i=l+1; i<str.length; i++){
            
        }
    }
}

let str = "3435335";
let k = 3;
console.log(findMaximumSum(str,k));