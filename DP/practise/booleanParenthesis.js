
function booleanParenthesis(s,i,j,k,istrue){
    if(i>j) return 0;
    if(i==j){
        return istrue == true ? (s[i] === 'T'?1:0) : (s[i] === 'F'?1:0);
    }
    let ans = 0;
    for(let k=i+1; k<j; k=k+2){
        let lt = booleanParenthesis(s,i,k-1,true);
        let lf = booleanParenthesis(s,i,k-1,false);
        let rt = booleanParenthesis(s,k+1,j,true);
        let rf = booleanParenthesis(s,k+1,j,false);
        console.log(lt,"-",lf,"-",rt,"-",rf);
        ans = getCountP(s,k,lt,lf,rt,rf,istrue,ans);
    }
    return ans;
}

function getCountP(s,k,lt,lf,rt,rf,istrue,ans){
    switch(s[k]){
        case '&':
        {
            return istrue === true ? ans+(lt*rt) : ans + (lt*rf) + (lf*rt) + (lf*rf);
        };
        case '|':
        {
            return istrue === true ? ans + (lt*rf) + (lf*rt) + (lt*rt) : ans+(lf*rf);    
        } 
        case '^':{
            return istrue === true ? ans + (lt*rf) + (lf*rt) + (lf*rf) : ans+(lt*rt) ;
        }
    }
}

let str = "T^F&T";
console.log(booleanParenthesis(str,0,str.length,0,true));