// 2748 피보나치 수 2
const fs = require("fs");
const input = fs
  // .readFileSync("./example.txt")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

let first = 0;
let next = 1;
let temp = 0;
for (let i = 0; i < Number(input); i++) {
  temp = BigInt(first + next);
  first = BigInt(next);
  next = BigInt(temp);
}
console.log(first.toString());
