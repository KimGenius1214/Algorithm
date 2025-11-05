function solution(a, arr) {
  let min = [];
  let answer = [];
  for (const i of arr) {
    if (i < a) min.push(i);
  }
  let max = Math.max(...min);
  for (const i of arr) {
    if (i > max) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
