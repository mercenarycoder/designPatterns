function dec2Bin(dec){
    return (dec >>> 0).toString(2);
}

function printAllnth(digit,n,zero,one){
    if(digit.length===n){
        console.log(digit);
        return;
    }
    if(zero<one){
        zero= zero+1;
        let digit2 = digit+"0";
        printAllnth(digit2,n,zero,one);
    }
    let digitOne = digit+"1";
    one=one+1;
    printAllnth(digitOne,n,zero,one);
    return;
}

class Solution {
    constructor(){
       this.result=""
    }
    NBitBinary(n){
       //code here
       this.printAllnth("",n,0,0)
       return result;
    }
    printAllnth(digit,n,zero,one){
    if(digit.length===n){
        result+=digit+","
        return;
    }
    if(zero<one){
        zero= zero+1;
        let digit2 = digit+"0";
       this.printAllnth(digit2,n,zero,one);
    }
    let digitOne = digit+"1";
    one=one+1;
    this.printAllnth(digitOne,n,zero,one);
    return;
}
}

let num = 5;
printAllnth("",3,0,0);