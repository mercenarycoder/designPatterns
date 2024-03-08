function isPalindrome(str,i,j){
    for(let z=i; z<=j; z++){
        if(str[z] !== str[j-z]){
            return false;
        }
    }
    return true;
}
function partition(str,i,j){
    if(i>=j){
        return 0;
    }
    if(isPalindrome(str,i,j)){
        return 0;
    }
    let min =Number.MAX_VALUE;
    for(let k=i; k<=j; k++){
      let temp = partition(str,i,k)+partition(str,k+1,j)+1;
      if(min>temp){
        min = temp;
      }
    }
    return min;
}

let str = "ma";
console.log(partition(str,0,str.length-1));