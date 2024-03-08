function insertionSort(arr,n){
    let ele,i,j;
    for(i=0;i<n;i++){
        ele = arr[i];
        j=i-1;
        while(j>=0 && arr[j] > ele){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = ele;
    }
    console.log(arr);
}

insertionSort([23,4,12,13,44,2],6);
