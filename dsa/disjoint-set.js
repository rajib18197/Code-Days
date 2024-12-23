class DisjointSet {
  constructor(v) {
    this.parent = Array.from({ length: v + 1 }, (_, i) => i);
    this.rank = Array.from({ length: v + 1 }, () => 0);
    this.size = Array.from({ length: v + 1 }, () => 1);
  }

  findUltimateParent(vertex) {
    if (this.parent[vertex] === vertex) {
      return vertex;
    }

    return (this.parent[vertex] = this.findUltimateParent(this.parent[vertex]));
  }

  unionByRank(u, v) {
    const parentOfU = this.findUltimateParent(u);
    const parentOfV = this.findUltimateParent(v);
    // they are already in the same component. No need to do anything.
    if (parentOfU === parentOfV) return;

    if (this.rank[parentOfU] < this.rank[parentOfV]) {
      this.parent[parentOfU] = parentOfV;
    } else if (this.rank[parentOfU] > this.rank[parentOfV]) {
      this.parent[parentOfV] = parentOfU;
    } else {
      // this.rank[parentOfU] === this.rank[parentOfV]
      this.parent[parentOfU] = parentOfV;
      this.rank[parentOfV]++;
    }
  }

  unionBySize(u, v) {
    const [parentOfU, parentOfV] = [
      this.findUltimateParent(u),
      this.findUltimateParent(v),
    ];

    if (parentOfU === parentOfV) return;

    if (this.size[parentOfU] < this.size[parentOfV]) {
      this.parent[parentOfU] = parentOfV;
      this.size[parentOfV] += this.size[parentOfU];
    } else {
      // this.size[parentOfU] >= this.size[parentOfV]
      this.parent[parentOfV] = parentOfU;
      this.size[parentOfU] += this.size[parentOfV];
    }
  }
}

const disjointSet = new DisjointSet(6);
disjointSet.unionByRank(0, 1);
disjointSet.unionByRank(1, 2);
disjointSet.unionByRank(3, 4);
if (disjointSet.findUltimateParent(4) === disjointSet.findUltimateParent(6)) {
  console.log("same");
} else {
  console.log("Not Same");
}
disjointSet.unionByRank(4, 6);

if (disjointSet.findUltimateParent(4) === disjointSet.findUltimateParent(6)) {
  console.log("same");
} else {
  console.log("Not Same");
}
