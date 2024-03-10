function permutations(nums,result=[]){
    if(nums.length==0){
        answer.push(result);
        return;
    } 
    for(let j = 0; j<nums.length; j++){
        let element = nums[j];
        permutations([...nums.slice(0,j),...nums.slice(j+1)],[element,...result]);
    }
}
let answer = [];
let set = [1,2,1,3];
let ques = Set(...set);

console.log(permutations(set));