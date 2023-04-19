// 2609 최대공약수와 최소공배수
var fs = require("fs");
// var input = fs.readFileSync("example.txt").toString().split(" ");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

function solution(num1, num2) {
  const mulNum = num1 * num2;
  const gcd = getGCD(num1, num2);
  console.log(gcd);
  console.log(mulNum / gcd);
}

let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

solution(a, b);
