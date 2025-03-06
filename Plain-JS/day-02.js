"use strict";

const createGraph = function (numOfVertices, edges) {
  const adj = Array.from({ length: numOfVertices }, () => []);

  for (const [u, v] of edges) {
    adj[u].push(v);
  }

  return adj;
};

const calcTopologicalSort = function (numOfVertices, edges) {
  const graph = createGraph(numOfVertices, edges);
  const indegree = Array.from({ length: numOfVertices }, () => 0);

  for (let i = 0; i < numOfVertices; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      indegree[graph[i][j]]++;
    }
  }

  const queue = [];
  for (const [i, el] of indegree.entries()) {
    if (el === 0) queue.push(i);
  }

  const ans = [];

  while (queue.length !== 0) {
    const vertex = queue.shift();
    ans.push(vertex);

    for (const neighbour of graph[vertex]) {
      indegree[neighbour]--;
      if (indegree[neighbour] === 0) {
        queue.push(neighbour);
      }
    }
  }

  console.log(ans);
  return ans;
};

const init = () => {
  calcTopologicalSort(6, [
    [5, 0],
    [4, 0],
    [5, 2],
    [2, 3],
    [3, 1],
    [4, 1],
  ]);
};

init();
