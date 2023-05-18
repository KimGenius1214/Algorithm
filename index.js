// 1316 그룹단어체커
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = input.shift();
let res = 0;

for (const i of input) {
  let arr = [];
  let isGroupWord = true;

  for (const j of i) {
    if (arr.indexOf(j) === -1) {
      arr.push(j);
    } else {
      if (arr.indexOf(j) !== arr.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }

  if (isGroupWord) {
    res += 1;
  }
}

console.log(res);
