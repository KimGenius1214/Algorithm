// 6749 Next in line
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = Number(input[0]);
const b = Number(input[1]);
const c = b - a;
console.log(b + c);
