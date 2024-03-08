function returnMaxRight(arr,n){
    let max= arr[0];
    let maxR=[]; 
    for(let i=0; i<n;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        maxR.push(max);
    }
    return maxR;
}
function returnMaxLeft(arr,n){
    let max= arr[0];
    let maxL=[]; 
    for(let i=n-1; i>=0; i--){
        if(arr[i]>max){
            max=arr[i];
        }
        maxL.push(max);
    }
    return maxL;
}

function waterTrapped(arr,n){
    let maxR= returnMaxRight(arr,n);
    let maxL= returnMaxLeft(arr,n);
    let ans=[];
    for(let i=0;i<n;i++){
        ans[i]= Math.min(maxL[i],maxR[i])-arr[i];
    }
    let totalWater = ans.reduce((total,ele)=>{
        return total+ele;
    },0);
    return totalWater;
}

let arr=[3,0,0,2,0,4];
console.log(waterTrapped(arr,arr.length));