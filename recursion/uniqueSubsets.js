function generateBalancedPrenthesis(open,closed,output){
    if(output.length==2*n){
        console.log(output);
        return;
    }
    if(open<closed && closed>0){
        closed = closed-1;
        generateBalancedPrenthesis(open,closed,output+")");
    }
    if(open!=0){
        open = open-1;
        generateBalancedPrenthesis(open,closed,output+"(");
    }
    return;
}
let n=3;
generateBalancedPrenthesis(3,3,"");