class DisjointSet {
  private parent: number[];
  private rank: number[];
  private size: number[];

  constructor(length: number) {
    this.parent = Array.from({ length: length }, (_, i) => i);
    this.rank = Array.from({ length: length }, () => 1);
    this.size = Array.from({ length: length }, () => 1);
  }

  findUltimateParent(u: number): number {
    if (this.parent[u] === u) {
      return u;
    }

    return (this.parent[u] = this.findUltimateParent(this.parent[u]));
  }

  unionByRank(u: number, v: number): boolean {
    const ult_u: number = this.findUltimateParent(u);
    const ult_v: number = this.findUltimateParent(v);

    if (ult_u === ult_v) {
      return false;
    }

    if (this.rank[ult_u] === this.rank[ult_v]) {
      this.parent[ult_u] = ult_v;
      this.rank[ult_v]++;
      return true;
    }

    if (this.rank[ult_u] < this.rank[ult_v]) {
      this.parent[ult_u] = ult_v;
      return true;
    }

    if (this.rank[ult_u] > this.rank[ult_v]) {
      this.parent[ult_v] = ult_u;
      return true;
    }

    return false;
  }

  unionBySize(u: number, v: number): boolean {
    const ult_u: number = this.findUltimateParent(u);
    const ult_v: number = this.findUltimateParent(v);

    if (ult_u === ult_v) {
      return false;
    }

    if (this.size[ult_u] === this.size[ult_v]) {
      this.parent[ult_u] = ult_v;
      this.size[ult_v] += this.size[ult_u];
      return true;
    }

    if (this.size[ult_u] < this.size[ult_v]) {
      this.parent[ult_u] = ult_v;
      this.size[ult_v] += this.size[ult_u];
      return true;
    }

    if (this.size[ult_u] > this.size[ult_v]) {
      this.parent[ult_v] = ult_u;
      this.size[ult_u] += this.size[ult_v];
      return true;
    }

    return false;
  }
}

const ds: DisjointSet = new DisjointSet(3);
ds.unionByRank(1, 2);

// const arr: Array<(number, number)> = [1, 2];
let arr: [number, number];

arr = [1, 2];
