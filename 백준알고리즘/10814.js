// 10814 나이순 정렬
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const a = input.shift();
input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
console.log(input.join("\n"));
