// 10870 피보나치 수 5
const fs = require("fs");
const input = fs.readFileSync("example.txt").toString();
let n = Number(input);
// var input = fs.readFileSync("/dev/stdin").toString();
let prev = 0;
let next = 1;
let result = 0;
for (let i = 0; i < n; i++) {
  next = prev + next;
  prev = next;
}
console.log(prev);
