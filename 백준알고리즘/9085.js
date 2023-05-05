// 9085 더하기
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = input.shift();
for (let i = 0; i < input.length; i++) {
  let arr = [];

  if (i % 2 === 1) {
    arr.push(input[i]);
  }
  console.log(arr);
}
