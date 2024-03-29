// 11655 ROT13
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim();

let str = "";
for (const i of input) {
  if (
    i.charCodeAt(0) === 32 ||
    (i.charCodeAt(0) > 47 && i.charCodeAt(0) < 58)
  ) {
    str += i;
  } else if (i.charCodeAt(0) < 91) {
    str += String.fromCharCode(
      i.charCodeAt(0) + 13 > 90 ? i.charCodeAt(0) - 13 : i.charCodeAt(0) + 13
    );
  } else {
    str += String.fromCharCode(
      i.charCodeAt(0) + 13 > 122 ? i.charCodeAt(0) - 13 : i.charCodeAt(0) + 13
    );
  }
}

console.log(str);

// 11655 ROT13
var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin").toString().split("");
var answer = "";
for (var i = 0; i < inputs.length; i++) {
  var char = inputs[i].charCodeAt(0);
  if (char >= 65 && char <= 90) {
    var upper = char + 13;
    if (upper > 90) {
      answer += String.fromCharCode(upper - 26);
    } else {
      answer += String.fromCharCode(upper);
    }
  } else if (char >= 97 && char <= 122) {
    var lower = char + 13;
    if (lower > 122) {
      answer += String.fromCharCode(lower - 26);
    } else {
      answer += String.fromCharCode(lower);
    }
  } else if (char === 32) {
    answer += " ";
  } else {
    answer += inputs[i];
  }
}
console.log(answer);
