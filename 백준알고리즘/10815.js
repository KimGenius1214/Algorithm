// 10815 숫자 카드
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const arrA = input[1];
const arrB = input[3];
let res = [];
console.log(arrB);
for (const i of arrB) {
  if (arrA.includes(i)) {
    res.push(1);
  } else {
    res.push(0);
  }
}
// console.log(res.join(" "));
