// 10798 세로읽기
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let arr = [];
let num = 0;
while (true) {
  let tempArr = [];
  for (const i of input) {
    if (i !== undefined) {
      arr.push(i[num]);
    }
    tempArr.push(i[num]);
  }
  if (tempArr.length === 0) {
    break;
  }
  num++;
}
console.log(arr.join(""));
