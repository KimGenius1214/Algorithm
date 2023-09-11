// 11721 열 개씩 끊어 출력하기
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim();

const len = input.length;
const num = parseInt(len / 10) + 1;

for (let i = 0; i < num; i++) {
  const res = input.substring(i * 10, i * 10 + 10);
  console.log(res);
}
