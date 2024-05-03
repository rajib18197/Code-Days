const luxuryCars = "abc";

// 1
const subset2 = function (arr, choiceBox, ans) {
  if (arr.length === 0) {
    ans.push([choiceBox]);
    return;
  }

  subset2(arr.slice(1), choiceBox + arr[0], ans);
  subset2(arr.slice(1), choiceBox, ans);
};

// const ans = [];
// subset2(luxuryCars, "", ans);
// console.log(ans);

// 2
const subset3 = function (arr, choiceBox, ans) {
  if (arr.length === 0) {
    console.log(choiceBox);
    ans.push([...choiceBox]);
    return;
  }

  choiceBox.push(arr[0]);
  subset3(arr.slice(1), choiceBox, ans);
  choiceBox.pop(arr[0]);
  subset3(arr.slice(1), choiceBox, ans);
};

// const ans2 = [];
// subset3([1, 2, 3], [], ans2);
// console.log(ans2);

// 3
const subset = function (arr, choiceBox) {
  if (arr.length === 0) {
    console.log(choiceBox);
    return [choiceBox];
  }

  const accepted = subset(arr.slice(1), choiceBox + arr[0]);
  const rejected = subset(arr.slice(1), choiceBox);
  //   Not Possible cause - 1st return [[1,2]], 2nd - [[[1, 2]]], every return new arr will be added which is invalid
  //   const arr2 = [];
  //   arr2.push(accepted);
  //   arr2.push(rejected);
  return [].concat(accepted, rejected);
};

// const mixedVersions = subset(luxuryCars, "");
// console.log(mixedVersions);

// 4
const subset4 = function (arr, choiceBox) {
  if (arr.length === 0) {
    const newArr = [];
    console.log(choiceBox, 111);
    newArr.push([...choiceBox]);
    return newArr;
  }

  choiceBox.push(arr[0]);
  const accepted = subset4(arr.slice(1), choiceBox);
  choiceBox.pop();
  const rejected = subset4(arr.slice(1), choiceBox);
  //   console.log(accepted, rejected, 11);
  return [].concat(accepted, rejected);
};

const mixed = subset4([1, 2, 3], []);
console.log(mixed);
