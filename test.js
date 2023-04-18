const a = 3;
const b = 5;

function solution(a, b) {
  var answer = 0;
  if (a === b) {
    answer = a;
    return answer;
  } else if (a < b) {
    answer += a;
    a + 1;
    return answer;
  } else if (a > b) {
    answer += b;
    b + 1;
    return answer;
  }
}

solution(a, b);
