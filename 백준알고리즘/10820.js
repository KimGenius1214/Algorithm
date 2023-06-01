// 10820 문자열 분석
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

for (const i of input) {
  let lower = 0;
  let upper = 0;
  let num = 0;
  let space = 0;
  for (const j of i.replace("\r", "")) {
    if (j === " ") {
      space += 1;
    } else if (!isNaN(Number(j))) {
      num += 1;
    } else if (j === j.toUpperCase()) {
      upper += 1;
    } else if (j === j.toLowerCase()) {
      lower += 1;
    }
  }
  console.log(lower, upper, num, space);
}
