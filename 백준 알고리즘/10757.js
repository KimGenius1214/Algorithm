var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split(" ");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
