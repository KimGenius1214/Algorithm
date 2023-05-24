// 2941 크로아티아 알파벳
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim();

const dic = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
console.log(input.includes(dic));
