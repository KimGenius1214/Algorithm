// 5585 거스름돈
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
// const input = fs.readFileSync("example.txt").toString()
let a = Number(input);

const solution = (a) => {
  let result = 0;
  while (a === 0) {
    if (a < 500) {
      result += 1;
      a -= 500;
    } else if (a < 100) {
      result += 1;
      a -= 100;
    } else if (a < 50) {
      result += 1;
      a -= 50;
    } else if (a < 10) {
      result += 1;
      a -= 10;
    } else if (a < 5) {
      result += 1;
      a -= 5;
    } else if (a < 1) {
      result += 1;
      a -= 1;
    }
  }
  return result;
};
solution(a);
