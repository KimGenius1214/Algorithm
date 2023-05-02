// 1316 그룹단어체커
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = input.shift();

for (const i of input) {
  let arr = [];
  for (const j of i) {
    if (!arr.includes(j)) arr.push(j);
  }
  const newRes = i.split("").filter((x) => !arr.includes(x));
}
