// 1292 쉽게 푸는 문제
const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  // .readFileSync("example.txt", "utf-8")
  .trim()
  .split(" ")
  .map(Number);

let arr = [];
for (let i = 1; i <= 1000; i++) {
  for (let j = 0; j < i; j++) {
    arr.push(i);
  }
  if (arr.length >= input[1]) break;
}

console.log(arr.slice(input[0] - 1, input[1]).reduce((x, y) => x + y, 0));
