// 10824 네 수
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

const a = input[0] + input[1];
const b = input[2] + input[3];

console.log(Number(a) + Number(b));
