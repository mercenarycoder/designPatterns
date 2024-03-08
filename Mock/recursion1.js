

function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}

function power(n,p){
    if(p==0) return 1;
    return n*power(n,p-1);
}
// 0 1 1 2 3 5 8
function fibonacci(a,b,n){
    if(n==0) return a;
    let c = a+b;
    return fibonacci(b,c,n-1);
}
function allSets(str,n,size,results){
    if(n==size){
        results.push(str,{});
        return results;
    }
    
}
// [1,2,3,4,5]
// ABC :- A,B,C,AB,AC,BC,ABC,{}
// console.log(power(5,2));
console.log(fibonacci(0,1,6));