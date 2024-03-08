function subSets2(nums,i,n,result=[]){
    
    if(i==n){
        console.log(result);
        return;
    } 
    subSets2(nums,i+1,n,result+[nums[i]]);
    subSets2(nums,i+1,n,result);
}
// let result =[]
let arr =[1,2,3];
let res=[];
let subset=[]
function subSets3(arr,res,subset,index,n){
    res.push([...subset]);
    for(let i=index; i<n; i++){
        subset.push(arr[i]);
        subSets3(arr,res,subset,i+1,n);
        subset.pop();
    }
}
console.log(subSets3(arr,res,subset,0,arr.length));
console.log(res);

function subSets2(nums,i,n,result=[]){
    if(i==n){
        return result;
    } 
    subSets2(nums,i+1,n,result+nums[i]);
    subSets2(nums,i+1,n,result);
}
let result =[]

function recursiveCombination(arr,sum,i,n,result=[]){
    if(sum==0){
        console.log(result);
        return;
    } 
    if(i==n || sum<0){
        return;
    }
    recursiveCombination(arr,sum-arr[i],i,n,[...result,arr[i]]);
    // recursiveCombination(arr,sum-arr[i],i+1,n,result+[arr[i]]);
    recursiveCombination(arr,sum,i+1,n,result);
}

let arr2 = [2,3,6,7];
let target =7;
// console.log(recursiveCombination(arr2,8,0,arr2.length));