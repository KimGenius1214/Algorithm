// 12904 A와 B
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = input.shift();

console.log(a);
// a += "A";
