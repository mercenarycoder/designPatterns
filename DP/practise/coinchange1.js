let coins = [1,2,3];
let sum =5;
console.log(coinChangeTotal(coins,sum));

function coinChangeTotal(coin,sum){
    let n = coin.length;
    let space= new Array(n+1);
    for(let i=0; i<n+1; i++){
        if(i===0){
            space[i] = new Array(sum+1).fill(Number.MAX_SAFE_INTEGER);
        }
        space[i]=new Array(sum+1).fill(0);
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<sum+1; j++){
            let fill = Number.MAX_SAFE_INTEGER;
            if(coin[i]>0){
                let res = Math.abs(j/coin[i])
                fill = res===Math.floor(res) && Math.floor(res)<j ? res : Number.MAX_SAFE_INTEGER 
            }
            space[1][j] = fill;
        }
    }
    
    for(let i=2;i<n+1;i++){
        for(let j=1; j<sum+1; j++){
            if(j>=coin[i-1]){
                space[i][j] = Math.min(1+space[i][j-coin[i-1]],space[i-1][j]);
            }
            else{
                space[i][j] = space[i-1][j];
            }
        }
    }
    return space[n][sum];
}