// 10988 팰린드롬인지 확인하기
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// const input = fs.readFileSync("example.txt").toString().trim();
const reverseInput = input.split("").reverse().join("");
if (input === reverseInput) {
  console.log(1);
} else {
  console.log(0);
}
