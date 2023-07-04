function solution(n) {
  var answer = 0;
  Number.isInteger(Math.sqrt(n))
    ? (answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1))
    : (answer = -1);
  return answer;
}
