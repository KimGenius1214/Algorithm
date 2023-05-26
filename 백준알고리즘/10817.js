// 10817 세 수
const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")

input.sort((a, b) => Number(b) - Number(a))

console.log(input[1])
