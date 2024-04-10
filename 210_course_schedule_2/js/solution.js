var findOrder = function (numCourses, prerequisites) {
  const dfs = (node, adj, visited, inStack) => {
    if (inStack[node]) return true;
    if (visited[node]) return false;
    visited[node] = true;
    inStack[node] = true;

    for (const neighbor of adj[node]) {
      if (dfs(neighbor, adj, visited, inStack)) {
        return true;
      }
    }
    inStack[node] = false;
    res.push(node);
    return false;
  };
  const res = [];

  const adj = [];
  for (let i = 0; i < numCourses; i++) {
    adj.push([]);
  }

  for (const prereq of prerequisites) {
    adj[prereq[1]].push(prereq[0]);
  }

  const visited = new Array(numCourses).fill(false);
  const inStack = new Array(numCourses).fill(false);

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i, adj, visited, inStack)) {
      return [];
    }
  }
  return res.reverse();
};
