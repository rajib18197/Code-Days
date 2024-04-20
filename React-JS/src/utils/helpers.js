export const hasPointedHalf = function (e) {
  const position = e.target.closest("svg").getBoundingClientRect();
  const distance = e.clientX - position.x;

  if (distance < Math.round(position.width / 2)) {
    return true;
  }

  return false;
};

const split = function (str, divider) {
  const arr = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === divider) {
      arr[arr.length] = word;
      word = "";
      continue;
    }

    word += str[i];
  }

  if (word) arr[arr.length] = word;

  console.log(arr);
  return arr;
};

const transform = split("a+very+nice+string", "+");
const transform2 = split("Ra Ju", " ");

console.log(transform, transform2);
