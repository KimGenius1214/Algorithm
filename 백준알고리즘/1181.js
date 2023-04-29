// 1181 단어 정렬
const fs = require("fs");
const input = fs
  //   .readFileSync("/dev/stdin")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const a = input.shift();

const arr = input.map((r) => r.replace("\r", ""));

const newArr = arr.sort((a, b) => {
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return (
    a.length - b.length || // sort by length, if equal then
    a.localeCompare(b)
  );
});

let result = Array.from(new Set(newArr));
console.log(result.join("\n"));
