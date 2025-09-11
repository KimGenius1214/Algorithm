function solution(n) {
  var answer = 1;
  for (let i = 0; i < n - 1; i++) {
    answer++;
    while (String(answer).includes("3") || answer % 3 === 0) {
      answer++;
    }
  }
  return answer;
}
