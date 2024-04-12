var peakIndexInMountainArray = function(arr) {
    if(arr.length === 1){
        return 0;
    }
    for(let i=1; i<arr.length; i++){
        if(arr[i-1]<=arr[i]){
            continue;
        } else{
            return i-1;
        }
    }
};

var peakIndexInMountainArray2 = function(arr) {
    let start = 0;
    let end = arr.length;
    let mid = Math.floor((start+end)/2);
    while(start<=end){
        mid = Math.floor((start+end)/2);
        if(start===end){
            return arr[mid-1];
        } else if(arr[mid]>arr[mid-1]){
            start = mid+1; 
        } else if(arr[mid]>arr[mid+1]){
            end = mid;
        }
    }
    return -1;
}

let arr = [1,2,3,8,6,2,1];
console.log(peakIndexInMountainArray2(arr));

