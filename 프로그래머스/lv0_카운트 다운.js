function solution(start, end_num) {
  var answer = [];
  for (let i = start; i > end_num - 1; i--) {
    answer.push(i);
  }
  return answer;
}
