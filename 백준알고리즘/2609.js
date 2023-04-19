// 2609 최대공약수와 최소공배수
var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split(" ");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (a > b) {
}
function solution(a, b) {
  let res = 1;
  while (a % b != 0) {
    r = a % b;
    a = b;
    b = r;
  }
}
