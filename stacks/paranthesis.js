function parenthesis(exp){
    let stack =[];
    let obj={
        ")":"(",
        "}":"{",
        "]":"["
    };
    for(let i=0;i<exp.length;i++){
        if(["(","{","["].includes(exp[i])){
            stack.push(exp[i]);
        } else if([")","}","]"].includes(exp[i])){
            let inclusive = stack.pop();
            if(inclusive !== obj[exp[i]])
            return false;
        }
    }
    if(stack.length >0){
        return false;
    }
    return true;
}

console.log(parenthesis("A+(b-c)"));