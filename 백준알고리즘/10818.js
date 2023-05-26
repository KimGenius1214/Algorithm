// 최소 최대
const fs = require("fs");
const input = fs
    .readFileSync("/dev/stdin")
  // .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")

const a = input.shift()
const arr= input.map((r)=> r.split(" "))
const res = arr[0].map(Number)
console.log(Math.min(...res), Math.max(...res))
