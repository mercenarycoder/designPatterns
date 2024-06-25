function numberOfWays(target, arr, i, sum, dp = {}) {
  //console.log(i," ",sum);
  if (sum === target) {
    // console.log(dp);
    return 1;
  }
  if (sum > target || i >= arr.length) {
    return 0;
  }
  if (dp[`${i},${sum}`]) {
    return dp[`${i},${sum}`];
  }
  let newSum = sum + arr[i];
  dp[`${i},${newSum}`] = numberOfWays(target, arr, i, newSum, dp)+numberOfWays(target, arr, i + 1, sum, dp);
  return dp[`${i},${newSum}`];
}

let arr = [1, 2, 5];
let sum = 500;
console.log(numberOfWays(sum, arr, 0, 0));
