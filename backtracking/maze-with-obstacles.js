let m=3;
let n=3;
let obs = [[true,true,true],[true,false,true],[true,true,true]];

//findSafePath to the end
function findSafepath(obs,i,j,path=""){
    console.log(i," ",j);
   if(i==obs.length-1 && j == obs[0].length-1){
     console.log(path);
     return;
   }
   if(!obs[i][j]){
    return;
   }
   if(i<obs.length-1){
    findSafepath(obs,i+1,j,path+"Down->");
   }
   if(j<obs[0].length-1){
    findSafepath(obs,i,j+1,path+"Right->");
   }
}

console.log(findSafepath(obs,0,0));
