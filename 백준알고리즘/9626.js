// 9625 BABBA
const input = require("fs")
  //   .readFileSync("/dev/stdin", "utf-8")
  .readFileSync("example.txt", "utf-8")
  .trim();
let str = "A";
let temp = "";
for (let i = 0; i < Number(input); i++) {
  temp = str.replace("A", "B");
  temp.replace("B", "BA");
}
console.log(temp);
