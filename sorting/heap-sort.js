function heapify(arr,N,i){
    var largest = i;
    var l = 2*i + 1;
    var r = 2*i + 2;
    if(l<N && arr[l]>arr[largest]){
        largest = l;
    }
    if(r<N && arr[r]>arr[largest]){
        largest = r;
    }
    if(largest!==i){
        [arr[largest],arr[i]] = [arr[i],arr[largest]];
        heapify(arr,N,largest);
    }
}

function sort(arr){
    var N= arr.length;
    //Build heap (rearrange array)
    for(var i=Math.floor(N/2)-1;i>0;i--) {
        heapify(arr,N,i);
    }

    for(var i=N-1; i>0; i--){
        [arr[0],arr[i]] = [arr[i],arr[0]];
        heapify(arr,i,0);
    }
}

var arr=[23,45,66,2,89,6];
sort(arr);
console.log(arr.join(" "));