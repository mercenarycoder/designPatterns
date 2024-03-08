const prec= {
    "^":3,
    "/":2,
    "*":2,
    "+":1,
    "-":1
};

function infixToPostfix(exp){
    st =[];
    let postfix ="";
    for(let i=0;i<exp.length;i++){
        let c = exp[i];
        if((c>='a'&&c<='z')||(c>=0&&c<=9)){
            postfix+=c;
        }
        else if(c === "("){
            st.push(c);
        } else if(c === ")"){
            while(st[st.length-1]!='('){
                postfix+=st[st.length-1];
                st.pop();
            }
            
        }
    }
}