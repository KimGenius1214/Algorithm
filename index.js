// 25628 햄버거 만들기
const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  // .readFileSync("example.txt", "utf-8")
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.min(parseInt(input[0] / 2), input[1]));
