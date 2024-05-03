// check how many components are present inside a graph
// component:- nodes which could be traversed from as they are connected with each other.

const graph = {
    3:[],
    4:[6],
    6:[4,5,7,8],
    8:[6],
    7:[6],
    5:[6],
    1:[2],
    2:[1]
}

function bfsGraph(graph,start){
    const queue = [+start];
    const ans = [];
    const visited = new Set();
    while(queue.length>0){
        const current = queue.shift();
        visited.add(current);
        ans.push(current);
        for(let neighbor of graph[current]){
            if(visited.has(neighbor)){
                continue;
            }
            queue.push(neighbor);
        }
    }
    return ans;
}

function countComponentNum(graph){
    const allComponents = [];
    for(let key in graph){
        if(checkPresence(allComponents,key)){
            continue;
        }
        //this will return everything associated with this node
        let allNodesTraversal = bfsGraph(graph,key);
        allComponents.push(allNodesTraversal);
    }
    console.log(allComponents);
}

function checkPresence(allPaths,node){
    for(let path of allPaths){
        if(path.includes(+node)){
            return true;
        }
    }
    return false;
}
console.log(countComponentNum(graph));