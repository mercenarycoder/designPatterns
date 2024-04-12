function rodCut(length,price,n){
    let size = length.length;
    let space = new Array(size+1);
    for(let i=0; i<size+1; i++){
        space[i] = new Array(n+1).fill(0);
    }
    for(let i=1; i<size+1; i++){
        for(let j=1; j<n+1; j++){
            if(j>=length[i-1]){
                space[i][j] = Math.max(price[i-1]+space[i][j-length[i-1]],space[i-1][j]);
            }
            else{
                space[i][j] = space[i-1][j];
            }
        }
    }
    return space[size][n];
}
let length =[1,2,3,4,5,6,7,8];
let price =[1,5,8,9,10,17,17,20];
let n=8;
console.log(rodCut(length,price,n));