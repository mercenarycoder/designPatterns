// // console.log('First line')
// // fs.readFile('sample.txt', () => {
// //     console.log('reading completed')
// // })
// // setTimeout(()=>{
// //     console.log("timeout");
// // },2000);
// // console.log('Last line')

// let arr = [2,4,6,7,9];
// let target = 13;
// //output = [1,4]
// let res = [];
// function getTargetSum(i,target,sum,list){
//     if(sum==target && list.length == 2){
//         res.push([...list]);
//         return;
//     }
//     if(i>=arr.length || sum > target){
//         // console.log(sum);
//         return;
//     }
//     list.push(arr[i]);
//     getTargetSum(i,target,sum+arr[i],list);
//     list.pop();
//     getTargetSum(i+1,target,sum,list);
// }
// getTargetSum(0,target,0,[]);
// // console.log(res);
// let ans = [];
// let obj = {};
// for(let i=0; i<arr.length; i++){
//     if(!obj[arr[i]]){
//         obj[arr[i]] = i;
//     }
// }
// for(let i=0; i<res.length; i++){
//     let [a,b] = res[i];
//     ans.push([obj[a],obj[b]]);
// }
// console.log(ans);

// function outer(){
//     let name = "manjeet"
//     function inner(){

//         console.log(name);
//     };
//     return inner;
// }
// let name;
// outer();

function printHello() {
    console.log('Hello')
}
printHello()
var a = [];
console.log(a) //undefined 10
a=10;
useEffect(async()=>{
    const res1 = await axios.get('');
});

actions
reducers

mapState

dis

//mounting phase
constructor(){

}
componentDidMount(){

}
render(){
  
}

//updatingphase
shouldComponentUpdate()

