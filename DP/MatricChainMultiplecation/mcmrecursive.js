 function matricChainMuliplication(arr,i,j){
    if(i>=j)
    return 0;
    if(temp[i][j] != -1){
        return temp[i][j]
    }
    var min = Number.MAX_VALUE;
    for(let k=i; k<j; k++){
        tempA= matricChainMuliplication(arr,i,k)+
                 matricChainMuliplication(arr,k+1,j)+
                 arr[i-1]*arr[k]*arr[j];
        if(min>tempA){
            min = tempA;
        }
    }
    return temp[i][j]=min;
 }
 let arr = [40,20,30,10,30];
 let n = arr.length;
 // memoization
 let temp = new Array(n+1);
 for(let i=0; i<n+1; i++){
    temp[i] = new Array(n+1).fill(-1);
 }
 //
 // kon konse i,j vary
 // temp[i][j]
 console.log(matricChainMuliplication(arr,1,n-1));

 // i=1
 // [40,20,30,10,30]
 // i=1    k=1        j=n-1 
 // A  B CD
 // 
 // A:- arr[i-1] * arr[i] 
