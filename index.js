// 10814 나이순 정렬
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const a = input.shift();
let arr = [];
for (const i of input) {
  arr.push(i.split(" "));
}
arr.map((r) => {
  console.log();
});
