function solution(num, k) {
  var answer = 0;
  answer =
    String(num).indexOf(String(k)) === -1
      ? -1
      : String(num).indexOf(String(k)) + 1;
  return answer;
}
