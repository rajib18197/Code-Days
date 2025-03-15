var DisjointSet = /** @class */ (function () {
    function DisjointSet(length) {
        this.parent = Array.from({ length: length }, function (_, i) { return i; });
        this.rank = Array.from({ length: length }, function () { return 1; });
        this.size = Array.from({ length: length }, function () { return 1; });
    }
    DisjointSet.prototype.findUltimateParent = function (u) {
        if (this.parent[u] === u) {
            return u;
        }
        return (this.parent[u] = this.findUltimateParent(this.parent[u]));
    };
    DisjointSet.prototype.unionByRank = function (u, v) {
        var ult_u = this.findUltimateParent(u);
        var ult_v = this.findUltimateParent(v);
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
    };
    DisjointSet.prototype.unionBySize = function (u, v) {
        var ult_u = this.findUltimateParent(u);
        var ult_v = this.findUltimateParent(v);
        if (ult_u === ult_v) {
            return false;
        }
        if (this.size[ult_u] === this.size[ult_v]) {
            this.parent[ult_u] = ult_v;
            this.size[ult_v]++;
            return true;
        }
        if (this.size[ult_u] < this.size[ult_v]) {
            this.parent[ult_u] = ult_v;
            this.size[ult_v]++;
            return true;
        }
        if (this.size[ult_u] > this.size[ult_v]) {
            this.parent[ult_v] = ult_u;
            this.size[ult_u]++;
            return true;
        }
        return false;
    };
    return DisjointSet;
}());
var ds = new DisjointSet(3);
