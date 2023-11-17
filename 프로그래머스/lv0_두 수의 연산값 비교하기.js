function solution(a, b) {
  var answer = 0;
  let tmp1 = Number(String(a) + String(b));
  let tmp2 = 2 * a * b;
  answer = Math.max(tmp1, tmp2);
  return answer;
}
