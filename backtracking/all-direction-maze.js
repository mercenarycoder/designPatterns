let r=3;
let c=3;

function findSafeAllPath(r,c,travel,path=""){
    let mr = travel.length-1;
    let mc = travel[0].length-1;
    console.log(mr," ",mc);
    console.log(r," ",c);
    console.log(travel);
    if(r==travel.length-1 && c == travel[0].length-1){
        console.table(travel);
        console.log(path);
        return;
    }
    if(r<mr && travel[r+1][c]){
        travel[r][c] = false;
        findSafeAllPath(r+1,c,path+"Down,",travel);
    }
    if(c<mc && travel[r][c+1]){
        travel[r][c] = false;
        findSafeAllPath(r,c+1,path+"Right,",travel);
    }
    if(r>0 && r<mr && travel[r-1][c]){
        travel[r][c] = false;
        findSafeAllPath(r-1,c,path+"Up,",travel);
    }
    if(c>0 && c<mc && travel[r][c-1]){
        travel[r][c] = false;
        findSafeAllPath(r,c-1,path="Left",travel);
    }
}

function allDirections(r,c,travel,path,step=0){
    let maxR = travel.length-1;
    let maxC = travel[0].length-1;
    // console.log(r," ",c," ",maxR," ",maxC);
    if(r==maxR && c == maxC){
        path[r][c] = step+1;
        console.table(path);
        path[r][c] = 0;
        counter++;
        return;
    }
    if(!travel[r][c]){
        return;
    }
    path[r][c] = step+1;
    travel[r][c] = false;
    if(c<maxC){
       allDirections(r,c+1,travel,path,step+1);
    }
    if(r<maxR){
       allDirections(r+1,c,travel,path,step+1);
    }
    if(r>0){
       allDirections(r-1,c,travel,path,step+1);
    }
    if(c>0){
       allDirections(r,c-1,travel,path,step+1);
    }
    travel[r][c] = true;
    path[r][c] = 0;
    return;
}

let travel = new Array(r);
let path = new Array(r);
let counter = 0;
for(let i=0; i<r;i++){
    travel[i] = new Array(c).fill(true);
    path[i] = new Array(c).fill(0);
}
console.log(allDirections(0,0,travel,path));
console.log(counter);