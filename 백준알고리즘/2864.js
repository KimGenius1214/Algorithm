// 2864 5와 6의 차이
const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  // .readFileSync("example.txt", "utf-8")
  .trim()
  .split(" ");

let a = input[0];
let b = input[1];
let minA = "";
let maxA = "";
let minB = "";
let maxB = "";

for (const i of a) {
  if (i === "5") {
    maxA += "6";
    minA += i;
  } else if (i === "6") {
    minA += "5";
    maxA += i;
  } else {
    minA += i;
    maxA += i;
  }
}

for (const i of b) {
  if (i === "5") {
    maxB += "6";
    minB += i;
  } else if (i === "6") {
    minB += "5";
    maxB += i;
  } else {
    minB += i;
    maxB += i;
  }
}

console.log(Number(minA) + Number(minB), Number(maxA) + Number(maxB));
