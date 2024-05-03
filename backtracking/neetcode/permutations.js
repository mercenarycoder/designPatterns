let nums = [1,2,3];
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function generatePermutations(nums,i,j,result=[]){
    if(j === nums.length){
        console.log(nums);
        result.push(nums);
        return;
    }
    for(let w = i; w<nums.length; w++){
        nums = swapper(nums,j,nums.length-1);
        generatePermutations(nums,w,j+1,result);
        nums = swapper(nums,j,nums.length-1);
    }
    return result;
}

function swapper(nums,i,j){
    
    [nums[i],nums[j]] = [nums[j],nums[i]];
    return nums;
}
console.log(generatePermutations(nums,0));