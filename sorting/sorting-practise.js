let arr = [12,34,5,6,77,3,2];
//Quicksort will have 2 functions partion and quicksort
function partition(arr,low,high){
    let pivot = arr[high];
    let i = low-1;
    for(let j=low; j<high; j++){
        if(pivot>arr[j]){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
    return i+1;
}
function quicksort(arr,low,high){
    if(high>low){
        let pi= partition(arr,low,high);
        quicksort(arr,low,pi-1);
        quicksort(arr,pi+1,high);
    }
}
console.log(quicksort(arr,arr.length,0));
console.log(arr);