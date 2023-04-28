// 9093 단어 뒤집기
const fs = require("fs");
const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const a = input.shift();
let arr = [];
for (const i of input) {
  arr.push(i.split(" "));
}

for (const i of arr) {
  const j = i.map((x) => x.replace("\r", "").split("").reverse().join(""));
  console.log(j.join(" "));
}
