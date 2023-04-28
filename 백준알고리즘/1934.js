// 1934 최소공배수
const fs = require("fs");
const input = fs
  // .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = Number(input[0]);
const answer = [];
const getGCD = (a, b) => {
  let gcd = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

// 최소공배수
const getLCM = (a, b) => {
  let lcm = 1;
  while (true) {
    if (lcm % a == 0 && lcm % b == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};

for (let i = 1; i <= a; i++) {
  let x = Number(input[i].split(" ")[0]);
  let y = Number(input[i].split(" ")[1]);
  let common = getGCD(x, y);
  answer.push((x * y) / common);
}

console.log(answer.join("\n").trim());
