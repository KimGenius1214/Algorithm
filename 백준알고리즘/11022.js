// 11022 A + B - 8
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const a = input.shift();
let num = 1;
for (const i of input) {
  console.log(
    `Case #${num}: ${i[0]} + ${i[2]} = ${Number(i[0]) + Number(i[2])}`
  );
  num++;
}
