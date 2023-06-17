// 26711 A+B
const input = require("fs")
  //   .readFileSync("/dev/stdin", "utf-8")
  .readFileSync("example.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);

console.log(input[0] + input[1]);
