// 2309 일곱 난쟁이
const input = require("fs")
  //   .readFileSync("/dev/stdin", "utf-8")
  .readFileSync("example.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);
let result;
for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const sum = input.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    if (sum - input[i] - input[j] === 100) {
      result = input.filter((r) => r !== input[i] && r !== input[j]);

      break;
    }
  }

  if (result) {
    break;
  }
}

console.log(result.sort((a, b) => a - b).join("\n"));
