// 10798 세로읽기
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
let arr = [];
let num = 0;
while (true) {
  let tempArr = [];
  for (const i of input) {
    if (i[num] !== undefined && i[num] !== "\r") {
      arr.push(i[num]);
    }
    tempArr.push(i[num]);
  }
  if (
    tempArr[0] === undefined &&
    tempArr[1] === undefined &&
    tempArr[2] === undefined &&
    tempArr[3] === undefined &&
    tempArr[4] === undefined
  ) {
    break;
  }
  num++;
}
console.log(arr.join(""));
