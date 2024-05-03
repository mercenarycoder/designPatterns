const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n'],
    ['k','j']
];

function formAdjacentListGraph(edges){
    const graph ={};
    for(let i=0; i<edges.length; i++){
        let [a,b] = edges[i];
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

//dfs is needed to mark the node as visited
//also this solution will print all those loops
const hasPath = (graph,src,dst,visited=new Set()) => {
    if(src===dst){
        return true;
    }
    if(visited.has(src)){
        console.log(visited);
        visited.clear();
        return false;
    }
    for(let neighbour of graph[src]){
        // console.log(neighbour);
        visited.add(src);
        if(hasPath(graph,neighbour,dst,visited)){
            return true;
        };
    }
    return false;
};

const graphG = formAdjacentListGraph(edges);
console.log(graphG);
console.log(hasPath(graphG,"i","l"));