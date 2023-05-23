// 10815 숫자 카드
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((r) => r.replace("\r", ""));
const arrA = new Set(input[1].split(" "));
const arrB = input[3].split(" ");
let res = [];
for (const i of arrB) {
  if (arrA.has(i)) {
    res.push(1);
  } else {
    res.push(0);
  }
}
console.log(res.join(" "));
