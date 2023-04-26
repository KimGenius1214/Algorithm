// 10951 A + B - 4
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  // .replace(/\r/gi, "")
  .split("\n");

for (const i of input) {
  let num = 0;
  for (const j of i) {
    num += Number(j);
  }
  console.log(num);
}
