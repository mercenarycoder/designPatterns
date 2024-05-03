var findOrder = function (numCourses, prerequisites) {
  let obj = {};
  for (let i = 0; i < numCourses; i++) {
    obj[i] = [];
  }
  for (let [i, j] of prerequisites) {
    obj[i].push(j);
  }
  let output = [];
  let visited = new Set();
  let cycle = new Set();
  function dfs(crs) {
    if (cycle.has(crs)) {
      return false;
    }
    if (visited.has(crs)) {
      return true;
    }
    cycle.add(crs);
    for (let pre of obj[crs]) {
      let result = dfs(pre);
      if (!result) {
        return false;
      }
    }
    cycle.delete(crs);
    visited.add(crs);
    output.push(crs);
    return true;
  }
  for (let i = 0; i <= numCourses; i++) {
    if (!dfs(i)) {
      return [];
    }
  }
//   console.log(output);
  output = [...new Set(output)];
  return output;
};

let lis = [[0,1],[1,0]];
let num = 2;
console.log(findOrder(num, lis));
