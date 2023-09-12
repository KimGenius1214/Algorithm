// 10987 모음의 개수
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim();

let num = 0;

for (const i of input) {
  if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
    num++;
  }
}
console.log(num);
