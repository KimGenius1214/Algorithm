// 1475 방 번호
const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  // .readFileSync("example.txt", "utf-8")
  .trim();
function solution(input) {
  let arr = Array.from({ length: 10 }, () => 0);
  for (let i = 0; i < input.length; i++) {
    arr[input[i]]++;
  }
  if (arr[9]) {
    arr[6] += arr.pop();
  }
  arr[6] = Math.ceil(arr[6] / 2);
  let max = Math.max(...arr);
  return max;
}
console.log(solution(input));
