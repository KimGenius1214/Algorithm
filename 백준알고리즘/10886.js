// 0 = not cute / 1 = cute 10886
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  //   .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const A = input.shift();
let notCute = 0;
let cute = 0;

for (const i of input) {
  if (i === "0") {
    notCute += 1;
  } else {
    cute += 1;
  }
}

if (notCute > cute) {
  console.log("Junhee is not cute!");
} else {
  console.log("Junhee is cute!");
}
