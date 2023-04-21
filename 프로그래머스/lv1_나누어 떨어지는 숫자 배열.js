function solution(arr, divisor) {
  var answer = [];
  for (const i of arr) {
    if (i % divisor === 0) {
      answer.push(i);
    }
  }
  const result = answer.sort((a, b) => a - b);
  if (answer.length === 0) {
    answer.push(-1);
  }
  return result;
}
