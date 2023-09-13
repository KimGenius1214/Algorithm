// 19532 수학은 비대면강의입니다.
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// let x = 1;
// let y = 1;

const a = input[0];
const b = input[1];
const c = input[2];
const d = input[3];
const e = input[4];
const f = input[5];

const temp1 = b * d - e * a;
const temp2 = c * d - f * a;

// y = temp2 / temp1;

// x = (c - b * y) / a || (f - e * y) / d;

// const y = (a * f - c * d) / (a * e - b * d);
// const x = (c - b * y) / a || (f - e * y) / d;
// console.log(x, y);

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y == c && d * x + e * y == f) {
      console.log(x, y);
      return;
    }
  }
}
