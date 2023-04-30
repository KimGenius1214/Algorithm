// 1427 소트인사이드
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim();

const res = input.split("").sort((a, b) => {
  return b - a;
});
console.log(res.join(""));
