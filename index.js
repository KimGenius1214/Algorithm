// 17608 막대기
const input = require("fs")
  // .readFileSync("/dev/stdin", "utf-8")
  .readFileSync("example.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

const a = input.pop();
const b = input.shift();
let num = 1;

for (const i of input) {
  if (i > a) {
    num += 1;
  }
}
console.log(num);
