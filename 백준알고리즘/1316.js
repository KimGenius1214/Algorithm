// 1316 그룹단어체커
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = input.shift();
let res = 0;

let arr = [];

input.forEach((r) => {
  if (!arr.includes(r)) return arr.push(r);
});
console.log(arr);
