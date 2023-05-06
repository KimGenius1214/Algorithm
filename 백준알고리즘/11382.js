// 11382 꼬마 정민
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let res = 0;
for (const i of input) {
  res += i;
}
console.log(res);
