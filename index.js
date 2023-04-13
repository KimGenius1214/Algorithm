// 5585 거스름돈
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
// const input = fs.readFileSync("example.txt").toString();
let change = 1000 - input;
let count = 0;
const coins = [500, 100, 50, 10, 5, 1];
for (let i = 0; i < coins.length; i++) {
  let quo = Math.floor(change / coins[i]);
  change %= coins[i];
  count += quo;
}
console.log(count);
