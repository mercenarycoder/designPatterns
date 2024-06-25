/*
Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. 
Example:
Input: arr = {-2,-3,4,-1,-2,1,5,-3}
Output: 7
Explanation: The subarray {4,-1, -2, 1, 5} has the largest sum 7.
*/
getLargestSum([-2,-3,4,-1,-2,1,5,-3]);

function getLargestSum(arr) {
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;
  let totalInitialSum =  sumTotal(arr.slice(left, right+1)); 
  while (right > left) {
    
    if (totalInitialSum > sum) {
      sum = totalInitialSum;
    }
    let s2 = totalInitialSum - arr[left];
    let s3 = totalInitialSum - arr[right];
    // console.log(totalInitialSum," ",s2," ",s3);
    if (s2 > s3) {
      left += 1;
      totalInitialSum = s2;
    } else {
      right -= 1;
      totalInitialSum = s3;
    }
  }
  console.log(sum);
}

function sumTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
