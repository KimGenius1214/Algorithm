// 27889 특별한 학교 이름
var fs = require("fs");
// var input = fs.readFileSync("example.txt").toString().split(" ");
var input = fs.readFileSync("/dev/stdin").toString();

if (input === "NLCS") {
  console.log("North London Collegiate School");
} else if (input === "BHA") {
  console.log("Branksome Hall Asia");
} else if (input === "KIS") {
  console.log("Korea International School");
} else if (input === "SJA") {
  console.log("St. Johnsbury Academy");
}
