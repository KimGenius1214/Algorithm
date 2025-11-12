function solution(s, arr) {
  let answer = Array.from({ length: s }).fill(0);

  for (const i of arr) {
    answer.unshift(i);
    if (answer.length > s) {
      answer.pop();
    }
  }

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution(5, arr));
