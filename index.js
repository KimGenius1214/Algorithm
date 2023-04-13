// 5585 거스름돈
const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("example.txt").toString();
let a = Number(input);

const solution = (a) => {
  let result = 0;
  let deposit = 0;
  while (true) {
    if (deposit + a === 1000) {
      console.log(result);
      break;
    }
    if (a > 500) {
      result += 1;
      deposit += 500;
    } else if (a < 500 && a >= 100) {
      result += 1;
      deposit += 100;
    } else if (a < 100 && a >= 50) {
      result += 1;
      deposit += 50;
    } else if (a < 50 && a >= 10) {
      result += 1;
      deposit += 10;
    } else if (a < 10 && a >= 5) {
      result += 1;
      deposit += 5;
    } else if (a < 5 && a >= 1) {
      result += 1;
      deposit += 1;
    }
  }
};
solution(a);
