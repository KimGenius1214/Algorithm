// 2163 초콜릿 자르기
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");
console.log(input[0] * input[1] - 1);
