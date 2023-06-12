// 17608 막대기
const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  // .readFileSync("example.txt", "utf-8")
  .trim();

console.log(parseInt(input, 16));
