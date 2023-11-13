// 27959 초코바
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

const A = input[0];
const B = input[1];

if (A * 100 >= B) {
  console.log("Yes");
} else {
  console.log("No");
}
