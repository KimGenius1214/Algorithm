// 10952 A  + B - 5
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

for (const i of input) {
  console.log(i);
}
