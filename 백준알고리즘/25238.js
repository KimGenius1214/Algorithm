// 25238 가희와 방어율 무시
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

const result = a - a * (b / 100);

if (result >= 100) {
  console.log(0);
} else {
  console.log(1);
}
