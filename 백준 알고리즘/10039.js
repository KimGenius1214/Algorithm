let fs = require("fs");
// var input = fs.readFileSync("example.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
var sum = 0;

for (let i = 0; i < 5; i++) {
  sum += Math.max(Number(input[i]), 40);
}
console.log(Math.floor(sum / 5));
