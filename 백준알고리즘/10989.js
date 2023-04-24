// 10989 수 정렬하기 3
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const iter = input.shift();

const arr = input.toString().split("").sort().join("");

for (const i of arr) {
  console.log(i);
}
