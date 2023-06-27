// 5355 화성 수학
let input = require("fs")
  //   .readFileSync("/dev/stdin", "utf-8")
  .readFileSync("example.txt", "utf-8")
  .trim()
  .split("\n");

const a = input.shift();

input = input.map((el) => el.split(" "));
for (let i = 0; i < input.length; i++) {
  let value = +input[i][0];
  for (let j = 1; j < input[i].length; j++) {
    if (input[i][j] === "@") value *= 3;
    else if (input[i][j] === "%") value += 5;
    else value -= 7;
  }
  console.log(value.toFixed(2));
}
