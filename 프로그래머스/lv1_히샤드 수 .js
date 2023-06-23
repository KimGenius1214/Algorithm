const x = 10;
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
  console.log(answer);
  return answer;
}

solution(x);
