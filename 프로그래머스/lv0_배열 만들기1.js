function solution(n, k) {
  var answer = [];
  let num = parseInt(n / k);
  for (let i = 0; i < num; i++) {
    answer.push((i + 1) * k);
  }
  return answer;
}
