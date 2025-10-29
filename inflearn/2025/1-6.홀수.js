function solution(arr) {
  let oddNum = arr.filter((num) => num % 2 === 1);
  let sum = oddNum.reduce((acc, cur) => acc + cur, 0);
  let min = Math.min(...oddNum);
  return `${sum}\n${min}`;
}
