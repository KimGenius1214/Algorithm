// 10953 A + B - 6
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = input.shift();
const arr = input.map((r) => r.replace("\r", "").split(","));
for (const i of arr) {
  let res = 0;
  for (const j of i) {
    res += Number(j);
  }
  console.log(res);
}
