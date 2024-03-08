let arr =[1,6,11,5];

function minDifference(arr,n,range){
    let space = new Array(n+1);
    for(let i=0;i<n+1;i++){
        space[i] = new Array(range+1);
    }
    for(let j=0; j<range+1; j++){
        space[0][j] = false;
    }
    for(let i=0; i<n+1; i++){
        space[i][0] = true;
    }
    // from here i will from all the subset 
    for(let i=1; i<n+1; i++){
        for(let j=1; j<range+1; j++){
            if(arr[i-1] <= j){
                space[i][j] = space[i-1][j] || space[i-1][j-arr[i-1]]
                continue;
            }
            space[i][j] = space[i-1][j];
        }
    }
    let min = -1;
    for(let j=0; j<= range/2 ; j++){
        if(space[n][j] && space[n][j] === true){
            console.log(j);
            min = j;
        }
    }
    return range - (2*min);
}
let range = arr.reduce((c,ele)=>{
    return c+ele
},0);

console.log(minDifference(arr,arr.length,range));