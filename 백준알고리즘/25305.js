// 25305 커트라인
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const sortedArr = arr.sort((a, b) => {
  return b - a;
});
let newArr = [];
for (let i = 0; i < a[1]; i++) {
  newArr.push(sortedArr[i]);
}
console.log(Math.min(...newArr));
