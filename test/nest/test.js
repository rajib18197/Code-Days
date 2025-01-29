// const edges = [];
// const places = [];

// const graph = Array.from({ length: places.length }, () => []);

// for (let i = 0; i < edges.length; i++) {
//   graph[edges[i][0]].push([edges[i][1], edges[i][2]]);
//   graph[edges[i][1]].push([edges[i][0], edges[i][2]]);
// }

// const src = 0;
// const pq = [];
// const dist = [];
// dist[src] = 0;
// pq.push([0, src]);
// const parent = [];

// while (pq.length !== 0) {
//   const [distance, node] = pq.shift();
//   for (let i = 0; i < graph[node].length; i++) {
//     const adjNode = graph[node][i][0];
//     const weight = graph[node][i][1];
//     if (distance + weight < dist[adjNode]) {
//       dist[adjNode] = distance + weight;
//       pq.push([dist[adjNode], adjNode]);
//       parent[adjNode] = node;
//     }
//   }
// }
// const destination = 5;
// if (dest[destination] === Number.MAX_VALUE) return [-1];
// const path = [];
// let node = destination;

// while (parent[node] !== node) {
//   path.push(node);
//   node = parent[node];
// }

// path.unshift(node);

const grid = [
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1],
];

const queue = [];
const dist = Array.from({ length: grid.length }, () =>
  Array.from({ length: grid[0].length }, () => Number.MAX_VALUE)
);

const srcRow = 0;
const srcCol = 2;
queue.push([0, srcRow, srcCol]);
dist[srcRow][srcCol] = 0;
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
while (queue.length !== 0) {
  const [distance, row, col] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const newRow = row + dr[i];
    const newCol = row + dr[i];
    if (
      isValid(newRow, newCol) &&
      grid[newRow][newCol] === 1 &&
      1 + distance < dist[newRow][newCol]
    ) {
      dist[newRow][newCol] = 1 + distance;
      if (destination[0] === newRow && destination[1] === newCol)
        return 1 + distance;
      queue.push([dist[newRow][newCol], newRow, newCol]);
    }
  }
}
