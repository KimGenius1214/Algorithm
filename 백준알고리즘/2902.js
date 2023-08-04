// 2902 KMP는 왜 KMP일까?
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim();

let str = "";

for (const i of input) {
  if (i === i.toUpperCase()) {
    str += i;
  }
}

console.log(str.replace(/-/gi, ""));
