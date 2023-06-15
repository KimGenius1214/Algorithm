// 1475 방 번호
const input = require("fs")
  //   .readFileSync("/dev/stdin", "utf-8")
  .readFileSync("example.txt", "utf-8")
  .trim();
let res = 0;
for (const i of input) {
  let set = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (set.includes(Number(i))) {
    set = set.filter((r) => r !== Number(i));
    console.log(set);
  } else {
    res += 1;
  }
}
console.log(res);
