const x = 13;
function solution(x) {
  var answer = true;
  let num = 0;
  for (const i of String(x)) {
    num += Number(i);
  }
  if (x % Number(num) === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

solution(x);
