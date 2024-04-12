let n=4;
let table = new Array(n);
//need to create a virtual space to perform knights check.
for(let i=0; i<n; i++){
    table[i] = new Array(n).fill(false);
}

console.log(nKnights(table,0,0,n));

function nKnights(table,row,col,knights){
    if(knights==0){
        console.table(table);
        return 1;
    }
    if(row == table.length-1 && col==table.length){
        return;
    }
    if(col == table.length){
        nKnights(table,row+1,0,knights);
        return;
    }
    if(isSafe(table,row,col)){
        table[row][col] = true;
        nKnights(table,row,col+1,knights-1);
        table[row][col] = false; //backtracking step
    }
    nKnights(table,row,col+1,knights);
}

//in problems like n-queens , n-knights try to figure out isSafe() function first
function isSafe(table,row,col){
    if(isValid(table,row+2,col-1)){
        if(table[row+2][col-1]){
            return false;
        }
    }
    if(isValid(table,row+2,col+1)){
        if(table[row+2][col+1]){
            return false;
        }
    }
    if(isValid(table,row-2,col+1)){
        if(table[row-2][col+1]){
            return false;
        }
    }
    if(isValid(table,row-2,col-1)){
        if(table[row-2][col-1]){
            return false;
        }
    }
    if(isValid(table,row+1,col-2)){
        if(table[row+1][col-2]){
            return false;
        }
    }
    if(isValid(table,row+1,col+2)){
        if(table[row+1][col+2]){
            return false;
        }
    }
    if(isValid(table,row-1,col+2)){
        if(table[row-1][col+2]){
            return false;
        }
    }
    if(isValid(table,row-1,col-2)){
        if(table[row-1][col-2]){
            return false;
        }
    }
    return true;
}

function isValid(table,row,col){
    return row>=0 && row<table.length && col>=0 && col<table.length;
}