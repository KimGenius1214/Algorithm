function solution(a) {
  let num = "";
  for (const i of a) {
    num += i.toUpperCase();
  }
  return num;
}
console.log(solution("ItisTimeToStudy"));
