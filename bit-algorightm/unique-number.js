function findUnique(nums){
    let num = nums[0];
    for(let i=1; i<nums.length; i++){
        num = num ^ nums[i];
        console.log(num);
    }
    return num;
}

const arr = [2,2,4,3,4,5,5,6,8,6,8];
console.log(findUnique(arr));
// console.log(Math.abs(-2));