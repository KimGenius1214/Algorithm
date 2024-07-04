function solution(numbers, n) {
  var answer = 0;
  for (const i of numbers) {
    answer += i;
    if (answer > n) {
      return answer;
    }
  }
}
