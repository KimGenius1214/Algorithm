// 10952 A  + B - 5
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

for (const i of input) {
  if (Number(i[0]) === 0 && Number(i[2]) === 0) {
    break;
  }
  console.log(Number(i[0]) + Number(i[2]));
}
