// 11170 0의 개수
const fs = require("fs");
const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .split("\n");

const a = input.shift();
const check = (n, m) => {
  let cnt = 0;
  for (let i = n; i <= m; i++) {
    if (i === 0) cnt++;
    let i2 = i;
  }
  return cnt;
};
for (const i of input) {
  let arr = [];
  arr = i.replace("\r", "").split(" ").map(Number);
  console.log(check(arr[0], arr[1]));
}
