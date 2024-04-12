//solution 1
var searchRange = function(nums, target) {
    let obj= {};
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]].push(i);
        } else{
            obj[nums[i]]=[i];
        }
    }
    if(obj[target+""]){
        if(obj[target].length>=2 || nums.length==1){
            return [obj[target][0],obj[target][obj[target].length-1]];
        } else{
            return [obj[target][0],-1]
        }
    }
    return [-1,-1]
};
//
function findIndex(nums,target,seeingFirst){
    let high = nums.length;
    let low = 0;
    let mid = Math.floor((high+low)/2);
    let ans = -1;
    while(high>=low){
        mid = Math.floor((high+low)/2);
        if(nums[mid]===target){
            ans = mid;
            if(seeingFirst){
                high = mid-1;
            } else{
                low = mid+1;
            }
        } else if(nums[mid]>target){
            high = mid-1;
        } else{
            low = mid+1;
        }
    }
    return ans;
}
var searchRange2 = function(nums,target){
    let ans = [findIndex(nums,target,true),findIndex(nums,target,false)];
    return ans;
}
let nums = [1,3];
let target = 1;
console.log(searchRange2(nums,target));