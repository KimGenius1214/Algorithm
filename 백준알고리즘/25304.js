// 25304 영수증
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const a = input.shift();
const b = input.shift();
let result = 0;
for (const i of input) {
  let arr = [];
  let res = 1;
  arr.push(i.replace("\r", "").split(" "));
  for (const j of arr.flat()) {
    res = res * j;
  }
  result += res;
}
if (result === Number(a)) {
  console.log("Yes");
} else console.log("No");
