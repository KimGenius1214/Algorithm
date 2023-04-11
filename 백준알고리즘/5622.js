// 5622 다이얼
// var fs = require("fs");
// var input = fs.readFileSync("example.txt").toString();
// var input = fs.readFileSync("/dev/stdin").toString();

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = "";
rl.on("line", function (line) {
  input += line + "\n";
}).on("close", function () {
  solution(input.slice(0, -1));
  process.exit();
});

const obj = {
  A: 3,
  B: 3,
  C: 3,
  D: 4,
  E: 4,
  F: 4,
  G: 5,
  H: 5,
  I: 5,
  J: 6,
  K: 6,
  L: 6,
  M: 7,
  N: 7,
  O: 7,
  P: 8,
  Q: 8,
  R: 8,
  S: 8,
  T: 9,
  U: 9,
  V: 9,
  W: 10,
  X: 10,
  Y: 10,
  Z: 10,
};

function solution(input) {
  let result = 0;
  for (const i of input) {
    result += obj[i];
  }
  console.log(result);
}
