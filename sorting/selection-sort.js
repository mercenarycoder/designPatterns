function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j = i+1; j<arr.length;j++){
            if(arr[min] > arr[j])
            min=j;
        }
        swap(arr,i,min);
    }
    console.log(arr);
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr =[25,34,22,12,3]
selectionSort(arr);