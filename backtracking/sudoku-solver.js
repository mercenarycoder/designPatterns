let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.table(sudokuSolver(board));

function isSafe(board,row,col,num){
    //check the row
    for(let i=0; i<board.length; i++){
        //check if number is their in row
        if(board[i][col]!=="." && +board[i][col] == num){
            return false;
        }
    }
    //check the col
    for(let i=0; i<board.length; i++){
        if(board[row][i]!=="." && +board[row][i] == num){
            return false;
        }
    }
    let sqrt = Math.floor(Math.sqrt(board.length));
    let start = row - Math.floor(row%sqrt);
    let end = col - Math.floor(col%sqrt);
    for(let r= start; r<start+sqrt; r++){
        for(let c= end; c<end+sqrt; c++){
            if(board[r][c]!=="." && +board[r][c] == num){
                return false;
            }
        }
    }
    return true;
}

function sudokuSolver(board){
    let row = -1;
    let col = -1;
    let emptyLeft = true;
    //this is how the r,c is being replaced from function
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j]==="."){
                row = i;
                col = j;
                emptyLeft = false;
                break;
            }
        }
        // If you find some empty cell in the row then break
        if(!emptyLeft){
            break;
        }
    }

    if(emptyLeft){
        //soduko is solved
        return true;
    }
    //backtrack
    for(let number = 1; number<=9; number++){
        if(isSafe(board,row,col,number)){
            let existing = board[row][col];
            board[row][col] = number;
            if(sudokuSolver(board)){
                return board;
            } else{
                board[row][col] = existing;
            }
        }
    }
    return false;
}