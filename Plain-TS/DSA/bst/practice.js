// type bstFromPreorder<T> = {
//   preorder: T[];
//   index: [number];
//   lower: number;
//   upper: number;
//   key: keyof T;
// };
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var insert = function (props) {
    if (props.node === null) {
        var newNode = new NodeBST(props.data);
        return newNode;
    }
    if (props.mode === "primitive") {
        if (props.node.data > props.data) {
            props.node.left = insert(__assign(__assign({}, props), { node: props.node.left }));
        }
        else {
            props.node.right = insert(__assign(__assign({}, props), { node: props.node.right }));
        }
        return props.node;
    }
    else {
        if (props.node.data[props.key] > props.data[props.key]) {
            props.node.left = insert(__assign(__assign({}, props), { node: props.node.left }));
        }
        else {
            props.node.right = insert(__assign(__assign({}, props), { node: props.node.right }));
        }
        return props.node;
    }
};
var constructBST = function (arr, options) {
    var root = null;
    for (var i = 0; i < arr.length; i++) {
        root = insert(__assign({ node: root, data: arr[i] }, options));
    }
    return root;
};
var inorderTraversal = function (node) {
    var ans = [];
    if (node === null) {
        return ans;
    }
    var left = inorderTraversal(node.left);
    ans.push(node.data);
    var right = inorderTraversal(node.right);
    return __spreadArray(__spreadArray(__spreadArray([], left, true), ans, true), right, true);
};
var merge2SortedArr = function (arr1, arr2) {
    var mergedArr = [];
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr[k++] = arr1[i++];
        }
        else {
            mergedArr[k++] = arr2[j++];
        }
    }
    while (i < arr1.length) {
        mergedArr[k++] = arr1[i++];
    }
    while (j < arr2.length) {
        mergedArr[k++] = arr2[j++];
    }
    return mergedArr;
};
var merge2BST = function (root1, root2) {
    //   const root1Ans = inorderTraversal(root1);
    //   const root2Ans = inorderTraversal(root2);
    //   const ans = merge2SortedArr(root1Ans, root2Ans);
    //   console.log(ans);
    //   return ans;
    if (root1 === null || root2 === null) {
        return;
    }
    var stack1 = [];
    var stack2 = [];
    while (root1) {
        stack1.push(root1);
        root1 = root1.left;
    }
    while (root2) {
        stack2.push(root2);
        root2 = root2.left;
    }
    var ans = [];
    var i = 0;
    while (stack1.length !== 0 && stack2.length !== 0) {
        var first = stack1[stack1.length - 1];
        var second = stack2[stack2.length - 1];
        if (first.data < second.data) {
            ans[i++] = first.data;
            stack1.pop();
            var curr = first.right;
            console.log(curr === null || curr === void 0 ? void 0 : curr.data);
            while (curr !== null) {
                stack1.push(curr);
                curr = curr.left;
            }
        }
        else {
            ans[i++] = second.data;
            stack2.pop();
            var curr = second.right;
            console.log(curr === null || curr === void 0 ? void 0 : curr.data, 22);
            while (curr !== null) {
                stack2.push(curr);
                curr = curr.left;
            }
        }
    }
    while (stack1.length !== 0) {
        var first = stack1[stack1.length - 1];
        ans[i++] = stack1.pop().data;
        var curr = first.right;
        while (curr !== null) {
            stack1.push(curr);
            curr = curr.left;
        }
    }
    while (stack2.length !== 0) {
        var second = stack2[stack2.length - 1];
        ans[i++] = stack2.pop().data;
        var curr = second.right;
        while (curr !== null) {
            stack2.push(curr);
            curr = curr.right;
        }
    }
    console.log(ans);
};
var init = function () {
    var arr1 = [5, 3, 6, 2, 4];
    var arr2 = [2, 1, 3, 7, 6];
    var root1 = constructBST(arr1, { mode: "primitive" });
    var root2 = constructBST(arr2, { mode: "primitive" });
    // console.log(root1);
    // console.log(root2);
    merge2BST(root1, root2);
    //   [1, 2, 2, 3, 3, 4, 5, 6, 6, 7]
    //   const arr = [16, 27, 6, 5, 45, 33, 65, 1];
    //   const root = constructBST(arr, { mode: "primitive" });
    //   const ansArr = inorderTraversal(root);
    //   console.log(ansArr);
    //   type PersonInfo = {
    //     fullName: string;
    //     age: number;
    //     subject: "CSE" | "Math" | "EEE";
    //     profession: "Teacher" | "Engineer";
    //   };
    //   const personPreorder: PersonInfo[] = [
    //     { fullName: "Ra Ju", age: 25, subject: "CSE", profession: "Engineer" },
    //     { fullName: "Max Miller", age: 22, subject: "EEE", profession: "Engineer" },
    //     { fullName: "Mesut Ozil", age: 35, subject: "Math", profession: "Teacher" },
    //     { fullName: "Jim Rohn", age: 28, subject: "CSE", profession: "Teacher" },
    //   ];
    //   const options: ReferenceProps<PersonInfo> = {
    //     mode: "reference",
    //     key: "age",
    //   };
    //   const root2 = constructBST(personPreorder, options);
    //   const ans = inorderTraversal(root2);
    //   console.log(ans);
};
init();
