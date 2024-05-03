
const graph= {
    a:['c', 'b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

const depthFirstPrintR = (graph, source) => {
    console.log(source);
    for(let neighbor of graph[source]){
        depthFirstPrintR(graph,neighbor);
    }
};

const depthFirstPrint = (graph,source) =>{
    const stack = [source];
    while(stack.length>0){
        let element = stack.pop();
        console.log(element);
        for(let neighbor of graph[element]){
            stack.push(neighbor);
        };
    }
};

//BFS solution is possible iteratively only
const breadthFirstSearch = (graph,source)=>{
    const queue = [source];
    while(queue.length>0){
        let current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}

const hasPath = (graph,src,dst) =>{
    if(src===dst){
        return true;
    }
    for(let neighbour of graph[src]){
       if(hasPath(graph,neighbour,dst)){
        return true;
       };
    }
    return false;
}

console.log(depthFirstPrintR(graph,"a"));
console.log("--------------------------");
console.log(breadthFirstSearch(graph,"a"));
console.log(hasPath(graph,"a","e"));