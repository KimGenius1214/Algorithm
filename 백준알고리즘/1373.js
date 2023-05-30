// 1373 2진수 8진수 
const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("")
  .map(Number)

console.log(input)