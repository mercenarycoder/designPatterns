//triplets where the sum is zero
function triplets(arr,triplet,sum,i){
    if(sum===0 && triplet.length===3){
        console.log(triplet);
        return;
    }
    if(sum<0 || triplet.length>3){
        return;
    }
    let newTriplet = triplet.push(arr[i]);
    triplets(arr,newTriplet,sum-arr[i],i+1);
    triplets(arr,triplet,sum,i+1);
    return;
}
function summer(arr){
    
}
let result = [];
let arr = [0,-1,2,-3,1];

triplets(arr,[],0)