// 알파벳 찾기
var fs = require("fs");
// var input = fs.readFileSync("example.txt").toString();
var input = fs.readFileSync("/dev/stdin").toString();

let arr = [];
for (let i = 97; i < 123; i++) {
  arr.push(input.indexOf(String.fromCharCode(i)));
}

console.log(arr.join(" "));
