// 26711 A+B
const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  // .readFileSync("example.txt", "utf-8")
  .trim()
  .split("\n");

console.log(Number(input[0]) + Number(input[1]));
