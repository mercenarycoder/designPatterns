var isHappy = function(n) {
    let obj = {};
    while(n!==1){
        if(obj[n]){
            return false;
        }
        obj[n] = sumSqaureNumber(n);
        n = obj[n]; 
    }
    return true;
}

function sumSqaureNumber(num){
    let sum = 0;
    while(num>0){
        let digit = Math.floor(num%10);
        sum = sum + Math.floor(digit*digit);
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(isHappy(19));
console.log(isHappy(2));
