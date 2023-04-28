const s = "a234";
// const s = "1234";

function solution(s) {
  var answer = true;
  if (Number(s)) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

solution(s);
