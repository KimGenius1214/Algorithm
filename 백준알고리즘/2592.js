// 2592 대표값
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
for (const i of input) {
  sum += i;
}
const avg = parseInt(sum / 10);
let number = input.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
let maxCount = Math.max(...Object.values(number));
let findMax = Object.keys(number).filter((x) => number[x] === maxCount);
console.log(avg);
console.log(findMax[0]);
