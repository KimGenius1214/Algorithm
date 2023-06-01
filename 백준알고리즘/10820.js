// 10820 문자열 분석
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

for (const i of input) {
  let lower = 0;
  let upper = 0;
  let num = 0;
  let space = 0;
  for (const j of i) {
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

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var result = "";
for (var i in input) {
  if (input[i] === "") continue;
  var answer = [0, 0, 0, 0];
  var splited = input[i].split("");
  for (var j in splited) {
    if (splited[j] >= "a" && splited[j] <= "z") {
      answer[0]++;
    } else if (splited[j] >= "A" && splited[j] <= "Z") {
      answer[1]++;
    } else if (splited[j] >= "0" && splited[j] <= "9") {
      answer[2]++;
    } else if (splited[j] === " ") {
      answer[3]++;
    }
  }
  result += answer.join(" ") + "\n";
}
console.log(result.trim());
