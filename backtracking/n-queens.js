let n=4;
let table = new Array(n);
for(let i=0; i<n; i++){
    table[i] = new Array(n).fill(false);
}

console.log(queens(table,0));

function queens(table,row){
    if(row == table.length){
        console.table(table);
        return 1;
    }
    let count = 0;
    for(let col=0; col<table.length; col++){
        if(isSafe(table,row,col)){
            table[row][col] = true;
            count += queens(table,row+1);
            table[row][col] = false;
        }
    }
    return count;
}
function isSafe(table,row,col){
    //check vertical row
    for(let i=0;i<row;i++){
        if(table[i][col]){
            return false;
        }
    }
    //diagonal left
    let maxLeft = Math.min(row,col);
    for(let i=1; i<=maxLeft; i++){
        if(table[row-i][col-i]){
            return false;
        }
    }
    //diagonal right
    let maxRight = Math.min(row,table.length-col-1);
    for(let i=1; i<=maxRight; i++){
        if(table[row-i][col+i]){
            return false;
        }
    }
    return true;
}

