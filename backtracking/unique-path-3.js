var uniquePathsIII = function(grid) {
    
};

let grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]];
let r = 0;
let c =0;
let em_square = 0;
for(let i=0; i<grid.length; i++){
    for(let j=0; j<grid[0].length; j++){
        if(grid[i][j]==1){
            r=i;
            c=j;
        }
        if(grid[i][j] == 0){
            em_square+=1
        }
    }
}
console.log(em_square);
console.log(uniquePaths(r,c,grid,em_square,0,0));
function findpaths(r,c,grid,traversed,path=[]){
    let mr = grid.length-1;
    let mc = grid[0].length-1;
    if(r<mr && c<mc && grid[r][c] == 2){
        console.log(path);
        return;
    }
    console.log(mr," ",mc);
    //Down operation
    console.log(r<mr," ",grid[r][c]," ",traversed[r][c]);
    if(r<mr && grid[r][c]==0 && traversed[r][c]==0){
        traversed[r][c]= -1;
        path.push((r,c));
        findpaths(r+1,c,grid,traversed,path);
    }
    //right operation
    if(c<mc && grid[r][c]==0 && traversed[r][c]==0){
        traversed[r][c]= -1;
        path.push((r,c));
        findpaths(r,c+1,grid,traversed,path);
    }
    //left operation
    if(c>0 && c<mc && grid[r][c]==0 && traversed[r][c]==0){
        traversed[r][c]= -1;
        path.push((r,c));
        findpaths(r,c-1,grid,traversed,path);
    }
    //up operation
    if(r>0 && r<mr && grid[r][c]==0 && traversed[r][c]==0){
        traversed[r][c]= -1;
        path.push((r,c));
        findpaths(r-1,c,grid,traversed,path);
    }
    console.log(traversed);
}

function uniquePaths(r,c,grid,em_square,count,ans=0,path=[]){
    count+=1;
    // console.log(r," ",c," ",count);
    if(grid[r][c] == 2){
        console.log(path);
        ans+=1;
        return;    
    }
    if(count>em_square){
        return;
    }
    let maxR = grid.length;
    let maxC = grid[0].length;
    grid[r][c] = -1;
    if(r+1<maxR && (grid[r+1][c]==0 ||grid[r+1][c] == 2)){
        path.push({r:r+1,c:c});
        uniquePaths(r+1,c,grid,em_square,count,ans,path);
    }
    if(c+1<maxC && (grid[r][c+1]==0||grid[r][c+1] == 2)){
        path.push({r:r,c:c+1});
        uniquePaths(r,c+1,grid,em_square,count,ans,path);
    }
    if(r-1>=0 && (grid[r-1][c]==0||grid[r-1][c] == 2)){
        path.push({r:r-1,c:c});
        uniquePaths(r-1,c,grid,em_square,count,ans,path);
    }
    if(c-1>=0 && (grid[r][c-1]==0||grid[r][c-1] == 2)){
        path.push({r:r,c:c-1});
        uniquePaths(r,c-1,grid,em_square,count,ans,path);
    }
    grid[r][c] = 0;
    count-=1;
    return ans;
}