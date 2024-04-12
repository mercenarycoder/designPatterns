//this if you see carefully can be found by peak element finding logic.
function getRotatedIndex(arr){
    let start = 0;
    let end = arr.length;
    while(start<end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]>arr[mid+1]){
            end = mid;
        } else{
            start = mid+1;
        }
    }
    return start===arr.length ? 0 : start;
}
function formSortedArrayAndFindIndex(arr,target){
    if(arr.length==1){
        return arr[0]===target ? 0 : -1;
    }
    let findRotatedIndex = getRotatedIndex(arr);
    findRotatedIndex = findRotatedIndex !==-1 ? findRotatedIndex : arr.length; 
    console.log(findRotatedIndex);
    let targetIndex = simpleBinarySearch(arr,target,0,findRotatedIndex);
    console.log(targetIndex);
    if(targetIndex == -1 && findRotatedIndex.length == arr.length){
        return -1;
    } else if(targetIndex == -1){
        targetIndex = simpleBinarySearch(arr,target,findRotatedIndex+1,arr.length);
    }
    return targetIndex;
}
function simpleBinarySearch(arr,target,low,high){
    let start = low;
    let end = high;
    let mid = Math.floor((start+end)/2);
    while(start<=end){
        mid = Math.floor((start+end)/2);
        console.log(start," ",end," ",mid," ",arr[mid]," ",target);
        if(arr[mid] == target){
            console.log("coming here");
            return mid;
        } else if(arr[mid]>target){
            end = mid-1;
            continue;
        }
        start = mid+1;
    }
    return -1;
}

let arr = [4,5,6,7,0,1,2];
let target = 0;
console.log(formSortedArrayAndFindIndex(arr,target));