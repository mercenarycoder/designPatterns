let str = "aabcabca";
let obj = {};
let res = [];
for(let i=0; i<str.length; i++){
    if(obj[str[i]]){
        obj[str[i]] += 1;
    } else{
        obj[str[i]] = 1;
    }
}
for(let i= str.length-1; i>=0; i--){
    if(obj[str[i]]>2){
        obj[str[i]] -=1;
    } else{
        res.push(str[i]);
    }
}
console.log(res.reverse().join(''));
// url shorting
// 1. long url
// 2. domain name + url (www.wikipedia.com/url)
// 3. hashing function (key)
// 4. redis (cache heavy) (hashkey)
// 5. url short (url)
// 6. Promise.resolve().reject()
// SSO :- (slack,gmail,teams) :- Identity provider (login user) -> identity validation -> token
// React.js () //error handling (req,res,next)