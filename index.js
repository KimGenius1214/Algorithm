// 2941 크로아티아 알파벳
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim();

function solution(input) {
  const dic = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let num = 0;
  for (let i = 0; i < dic.length; i++) {
    while (input !== input.replace(dic[i], "")) {
      num += 1;
      input = input.replace(dic[i], " ");
    }
  }
  return num + input.split(" ").join("").length;
}

console.log(solution(input));
