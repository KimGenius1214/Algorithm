function solution(a, b, c) {
  let answer;
  if (a > b) {
    answer = b;
  } else {
    answer = a;
  }
  if (c < answer) {
    answer = c;
  }
  console.log(answer);
  return answer;
}
