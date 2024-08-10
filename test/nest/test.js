// const calc = require(`../../calc`);
const path = require("path");
const fs = require("fs");

// console.log(path.resolve("."));
// console.log(path.resolve(__dirname));
console.log(__dirname, 111);

// const data = fs.readFileSync("../../hello.txt", "utf-8");
// const data = fs.readFileSync(path.join(__dirname, "../../hello.txt"));
const data = fs.readFileSync(`${__dirname}/../../hello.txt`);
console.log(data);
