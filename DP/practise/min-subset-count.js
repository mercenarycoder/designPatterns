//whenever the sum related to difference comes try making equations and solving with the addtion one first
function getCountMin(arr,diff){
   let sum = 0;
   let n = arr.length;
   for(let i=0; i<arr.length; i++){
    sum+=arr[i];
   }
   let req = Math.floor((diff+sum)/2); // derived from S1 + S2 = sum , S1 - S2 = diff
   let space = new Array(n+1);
   for(let i=0; i<n+1; i++){
    space[i] = new Array(req+1).fill(0);
    // space[i][0]=1;
   }
   for(let i=1; i<=n; i++){
    for(let j=1; j<=req; j++){
        if(j>=arr[i-1]){
            space[i][j] = Math.max(1+space[i-1][j-arr[i-1]],space[i-1][j]);
        }
        else{
            space[i][j] = space[i-1][j];
        }
    }
   }
   console.table(space);
   return space[n][req];
}

function countSubsetWithSum(arr,sum){
    let n = arr.length;
    let space= new Array(n+1);
    for(let i=0; i<n+1; i++){
        space[i] = new Array(sum+1).fill(0);
        space[i][0] = 1;
    }
    for(let i=1; i<n+1; i++){
        for(let j=1; j<sum+1; j++){
            if(j>=arr[i-1]){

            }
        }
    }
}

let arr=[1,1,2,3];
let diff = 1;
console.log(getCountMin(arr,diff));