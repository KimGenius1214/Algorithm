// 11170 0의 개수
const fs = require("fs");
const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .split("\n");

const a = input.shift();
let arr = [];
for (const i of input) {
  let res = [];
  let cnt = 0;
  arr = i.replace("\r", "").split(" ").map(Number);
  for (let j = arr[0]; j < arr[1] + 1; j++) {
    res.push(j);
  }
  for (const k of res) {
    if (k % 10 === 0) {
      cnt++;
    }
  }
  console.log(cnt);
}
