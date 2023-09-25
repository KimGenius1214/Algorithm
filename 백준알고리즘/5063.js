// 5063 TGN
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const A = input.shift();

for (const i of input) {
  const arr = i.split(" ").map(Number);
  if (arr[0] > arr[1] - arr[2]) {
    console.log("do not advertise");
  } else if (arr[0] === arr[1] - arr[2]) {
    console.log("does not matter");
  } else {
    console.log("advertise");
  }
}
