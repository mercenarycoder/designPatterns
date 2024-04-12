//Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
// [0,1] :- 2
// [0,1,0] :- 2

/**
 * 
 * @param {Number []} nums
 * @returns {number} 
 */
var findMaxLength = function(nums) {
    let len = 0;
    let zeroStack = [];
    let oneStack = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 0 && oneStack.length>0){
            oneStack.pop();
            len+=2;
            continue;
        } else if(nums[i] == 1 && zeroStack.length>0){
            len+=2;
            zeroStack.pop();
            continue;
        }
        if(nums[i] == 0){
            zeroStack.push(0);
        } else if(nums[i] == 1){
            oneStack.push(1);
        }
    }    
    return len;
};

let nums = [0,0,0,1,1,1,0];
console.log(findMaxLength(nums));