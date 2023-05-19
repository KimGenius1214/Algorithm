// 9316 Hello Judge
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim();

for (let i = 0; i < Number(input); i++) {
  console.log(`Hello World, Judge ${i + 1}!`);
}
