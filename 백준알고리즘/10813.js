// 10813 공 바꾸기
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const A = input[0].split(" ");
const arrLen = A[0];
const len = A[1];

console.log(arrLen, len);
