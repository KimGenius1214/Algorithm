var fs = require("fs");
// var input = fs.readFileSync("example.txt").toString().split(" ");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = input[0];
var b = input[1];

let revA = reverseString(a);
let revB = reverseString(b);

console.log(Math.max(Number(revA), Number(revB)));

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray; // "olleh"
}
