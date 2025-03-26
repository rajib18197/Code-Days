var NodeBST = /** @class */ (function () {
    function NodeBST(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return NodeBST;
}());
var comparator = function (data, key) {
    if (key && typeof data[key] === "number") {
        return data[key];
    }
    return Number(data);
};
var constructBSTFromPreorder = function (_a) {
    var preorder = _a.preorder, index = _a.index, lower = _a.lower, upper = _a.upper, key = _a.key;
    if (index[0] === preorder.length ||
        comparator(preorder[index[0]], key) < lower ||
        comparator(preorder[index[0]], key) > upper) {
        return null;
    }
    var value = preorder[index[0]];
    index[0] = index[0] + 1;
    var node = new NodeBST(value);
    node.left = constructBSTFromPreorder({
        preorder: preorder,
        index: index,
        lower: lower,
        upper: comparator(node.data, key),
        key: key,
    });
    node.right = constructBSTFromPreorder({
        preorder: preorder,
        index: index,
        lower: comparator(node.data, key),
        upper: upper,
        key: key,
    });
    return node;
};
var init = function () {
    //   const preorder = [10, 5, 1, 7, 40, 50];
    var preorder = [
        { firstName: "raju", age: 25 },
        { firstName: "john", age: 30 },
        { firstName: "alice", age: 28 },
    ];
    var index = [0];
    var root = constructBSTFromPreorder({
        preorder: preorder,
        index: index,
        lower: Number.MIN_VALUE,
        upper: Number.MAX_VALUE,
        key: "age",
    });
    console.log(root);
};
init();
