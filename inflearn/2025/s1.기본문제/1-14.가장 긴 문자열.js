function solution(a, arr) {
  let maxLength = 0;
  let answer = "";
  for (const i of arr) {
    if (i.length > maxLength) {
      maxLength = i.length;
      answer = i;
    }
  }
  return answer;
}
console.log(solution(5, ["teacher", "time", "student", "beautiful", "good"]));
