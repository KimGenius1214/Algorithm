// 9625 BABBA
const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  // .readFileSync("example.txt", "utf-8")
  .trim();
let a = 1;
let b = 0;
let temp;
for (let i = 0; i < Number(input); i++) {
  temp = a + b;
  a = b;
  b = temp;
}
console.log(a, b);
