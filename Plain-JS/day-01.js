const maxPriceMemoization = function (index, maxWeight, wt, val, cache) {
  if (index === 0) {
    if (wt[0] <= maxWeight) return val[0];
    return 0;
  }

  if (cache[index][maxWeight] !== -1) return cache[index][maxWeight];

  const notTake = 0 + maxPriceMemoization(index - 1, maxWeight, wt, val, cache);
  let take = -1e9;

  if (wt[index] <= maxWeight) {
    take =
      val[index] +
      maxPriceMemoization(index - 1, maxWeight - wt[index], wt, val, cache);
  }

  return (cache[index][maxWeight] = notTake > take ? notTake : take);
};

const maxPriceTabulation = function (wt, val, maxWeight) {
  //   const cache = Array.from({ length: wt.length }, () =>
  //     Array.from({ length: maxWeight + 1 }, () => 0)
  //   );

  let prev = Array.from({ length: maxWeight + 1 }, () => 0);
  //   const curr = Array.from({ length: maxWeight + 1 }, () => 0);

  for (let w = wt[0]; w <= maxWeight; w++) {
    prev[w] = val[0];
  }

  for (let index = 1; index < val.length; index++) {
    for (let w = maxWeight; w >= 0; w--) {
      const notTake = 0 + prev[w];
      let take = -1e9;
      if (wt[index] <= w) {
        take = val[index] + prev[w - wt[index]];
      }
      prev[w] = notTake > take ? notTake : take;
    }

    // must have done deep copy
    // prev = [...curr];
  }

  console.log(prev);
};

const calcMaxPrice = function (wt, val, maxWeight) {
  const cache = Array.from({ length: val.length }, () =>
    Array.from({ length: maxWeight + 1 }, () => -1)
  );
  const maxPrice = maxPriceMemoization(
    val.length - 1,
    maxWeight,
    wt,
    val,
    cache
  );
  console.log(maxPrice);
  console.log(cache);
};

const init = function () {
  const wt = [1, 2, 4, 5];
  const val = [5, 4, 8, 6];
  //   calcMaxPrice(wt, val, 5);
  maxPriceTabulation(wt, val, 5);
};

// init();

class PriorityQueue {
  constructor(totalLength) {
    this.arr = Array.from({ length: totalLength }, () => []);
    this.totalLength = totalLength;
    this.curr = 0;
  }

  push(value) {
    if (this.curr === this.totalLength) {
      return;
    }

    this.arr[this.curr] = [...value];
    let index = this.curr;
    this.curr++;

    let child = index;
    let parent = Math.floor((child - 1) / 2);

    while (parent >= 0 && this.arr[child][0] < this.arr[parent][0]) {
      let temp = this.arr[child];
      this.arr[child] = this.arr[parent];
      this.arr[parent] = temp;

      child = parent;
      parent = Math.floor((child - 1) / 2);
    }
  }

  remove() {
    if (this.curr === 0) {
      return -1;
    }

    const removedValue = this.arr[0];

    this.arr[0] = this.arr[this.curr - 1];
    this.curr--;

    if (this.curr === 0) {
      return removedValue;
    }

    let index = 0;
    let smallest = index;
    let left = smallest * 2 + 1;
    let right = smallest * 2 + 2;

    while (
      (left < this.curr && this.arr[smallest][0] > this.arr[left][0]) ||
      (right < this.curr && this.arr[smallest][0] > this.arr[right][0])
    ) {
      if (left < this.curr && this.arr[smallest][0] > this.arr[left][0]) {
        smallest = left;
      }

      if (right < this.curr && this.arr[smallest][0] > this.arr[right][0]) {
        smallest = right;
      }

      let temp = this.arr[smallest];
      this.arr[smallest] = this.arr[index];
      this.arr[index] = temp;

      index = smallest;
      left = smallest * 2 + 1;
      right = smallest * 2 + 2;
    }

    return removedValue;
  }
}

const createGraph = function (V, edges) {
  const adj = Array.from({ length: V }, () => []);

  for (let i = 0; i < edges.length; i++) {
    const [u, v, weight] = edges[i];
    adj[u].push([v, weight]);
    adj[v].push([u, weight]);
  }

  return adj;
};

const calcMinimumSpanningTree = function (V, edges) {
  const graph = createGraph(V, edges);

  const pq = new PriorityQueue(edges.length);
  const visited = Array.from({ length: V }, () => 0);

  pq.push([0, 0, -1]);
  let mstSum = 0;
  const mst = [];

  while (pq.curr !== 0) {
    const [weight, node, parent] = pq.remove();

    if (visited[node] === 1) {
      continue;
    }

    visited[node] = 1;

    if (parent !== -1) {
      mstSum += weight;
      mst.push([node, parent, weight]);
    }

    for (const [neighbourNode, weight] of graph[node]) {
      if (!visited[neighbourNode]) {
        pq.push([weight, neighbourNode, node]);
      }
    }
  }

  console.log(mstSum);
  console.log(mst);

  return { mstEdges: mst, totalWeight: mstSum };
};

calcMinimumSpanningTree(5, [
  [0, 1, 2],
  [0, 3, 6],
  [1, 2, 3],
  [1, 3, 8],
  [1, 4, 5],
  [4, 2, 7],
]);
