function solution(a) {
  let answer = "";
  if (a.length % 2 === 0) {
    answer = a.substr(a.length / 2 - 1, 2);
  } else {
    answer = a.substr(Math.floor(a.length / 2), 1);
  }
  return answer;
}
console.log(solution("good"));
