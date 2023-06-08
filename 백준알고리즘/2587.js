// 2587 대표값2
const fs = require("fs");
const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map(Number);

let num = 0;
for (const i of input) {
  num += i;
}
let avg = parseInt(num / input.length);

function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

let mid = solution(input);
console.log(avg);
console.log(mid);
