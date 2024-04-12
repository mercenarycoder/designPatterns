//this is pattern 1 searching algorithms
//cieling of a number
let arr = [2,3,5,9,14,15,16,17,18];
// smallest element in array greater or equal to target.
let target = 15;

function binary(arr,target){
    let n = arr.length;
    let high = n;
    let low =0;
    let mid = Math.floor((high+low)/2)
    while(high>low){
        mid = Math.floor((high+low)/2);
        if(arr[mid]===target){
            return arr[mid];
        } else if(arr[mid]<target){
            low = mid+1;
        } else if(arr[mid]>target){
            high = mid-1;
        }
    }
    if(!arr[low]){
        return arr[high];
    }
    return arr[low];
}
console.log(binary(arr,19));