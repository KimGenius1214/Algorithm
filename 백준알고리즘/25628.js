// 25628 햄버거 만들기
const input = require("fs")
  //   .readFileSync("/dev/stdin", "utf-8")
  .readFileSync("example.txt", "utf-8")
  .trim()
  .split(" ");

let a = input[0];
let b = input[1];

let res = 0;

while (True) {
  if (a <= 0 || b <= 0) {
    break;
  }
  if (a - 2 > 0 && b - 1 > 0) {
    a -= 2;
    b -= 1;
    res += 1;
  }
}

console.log(res);
