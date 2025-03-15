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

const quiz = function () {
  const question = new Map([
    ["name", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Rust"],
    [3, "JavaScript"],
    ["answer", 3],
    [true, "Correct Answer"],
    [false, "Try Again"],
  ]);

  //   console.log(question.get("name"));
  //   for (const [key, value] of question) {
  //     if (typeof key === "number") {
  //       console.log(value);
  //     }
  //   }

  const answer = 3;

  const result = question.get(question.get("answer") === answer);
  //   console.log(result);
  question.set([1, 2], "array");
  console.log([...question.keys()]);
  console.log([...question.values()]);
  console.log([...question.entries()]);
};

const init = () => {
  //   calcTopologicalSort(6, [
  //     [5, 0],
  //     [4, 0],
  //     [5, 2],
  //     [2, 3],
  //     [3, 1],
  //     [4, 1],
  //   ]);

  quiz();
};

// init();
