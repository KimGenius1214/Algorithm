function solution(a, b) {
  var answer1 = "";
  answer1 += String(a);
  answer1 += String(b);
  var answer2 = "";
  answer2 += String(b);
  answer2 += String(a);
  return Math.max(Number(answer1), Number(answer2));
}
