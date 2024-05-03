function findTargetIndexes(arr, target) {
  let m = arr.length + 1;
  let n = target + 1;
  let space = new Array(arr.length + 1);
  for (let i = 0; i < space.length; i++) {
    space[i] = new Array(n).fill([]);
  }
  for (let i = 1; i < m; i++) {
    for (let w = 1; w < n; w++) {
      if (w >= arr[i - 1]) {
        space[i][w] =
          space[i - 1][w - arr[i - 1]].length > 0
            ? [i - 1, ...space[i - 1][w - arr[i - 1]]]
            : [i - 1,...space[i - 1][w]];
      }else{
          space[i][w] = space[i-1][w];
      }
    }
  }
  console.log(space);
  return space[m-1][n-1];
}

function findWithMCMPattern(arr, target, i, j){

}

let arr = [2, 3, 1, 2, 4, 3];
let target = 7;
console.log(findTargetIndexes(arr, target));


 