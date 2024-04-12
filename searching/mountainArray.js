function MountainArray(){
    this.arr=[]
    this.get = function(index){
        return this.arr[index];
    } 
    this.length = function() {
        return this.arr.length;
    }  
}

function getPeakElement(arr){
    let start = 0;
    let end = arr.length;
    let mid = Math.floor((start+end)/2);
    while(start<end){
        mid = Math.floor((start+end)/2);
        if(arr[mid]>arr[mid+1]) {

            end = mid;
        } else {
            start = mid + 1;
        }    
    }
    return start;
}
function simpleBinarySearch(arr,target,high){
    let start = 0;
    let end = high;
    let mid = Math.floor((start+end)/2);
    while(start<=end){
        mid = Math.floor((start+end)/2);
        if(arr[mid] === target){
            return mid;
        } else if(arr[mid]>target){
            end = mid;
        } else{
            start = mid+1;
        }
    }
    return -1;
}

let arr = [1,2,3,8,6,2,1];
let peak=getPeakElement(arr);
console.log(simpleBinarySearch(arr,3,peak));