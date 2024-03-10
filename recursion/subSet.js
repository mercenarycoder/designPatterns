function subsets(input,output){
    if(input.length<=0){
        console.log(output);
        return;
    }
    let output1 = output;
    let output2 = output+input[0];
    input = input.slice(1);
    subsets(input,output1);
    subsets(input,output2);
    return;
}

let str="abc";
console.log(subsets(str,""));