
function formAdjacencyList(relations){
    let obj = {};
    for(let i = 0; i<relations.length; i++){
        let [a, b] = relations[i];
        if(!(a in obj)) obj[+a] = [];
        if(!(b in obj)) obj[+b] = [];
        obj[a].push(b);
    }
    return obj;
}

function detectCycle(list,src,num,visited= new Set()){
    if(visited.has(src)){
        // console.log(visited);
        console.log("coming here");
        return {answer:false,set:visited};
    }
    for(let neighbour of list[src]){
        visited.add(src);
        if(detectCycle(list,neighbour,num,visited).answer==false){
            return false;
        };
    }
    return {answer: true, set:visited};
}


// let relations = [[0,1],[0,2],[1,3],[1,4],[3,4]];
let relations = [[1,0],[0,1]];
let n = 5;
let list = formAdjacencyList(relations);
console.log(list);
console.log(detectCycle(list, 0, n));
