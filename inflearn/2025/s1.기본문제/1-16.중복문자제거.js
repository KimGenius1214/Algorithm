function solution(a) {
  let answer = new Set();
  for (const i of a) {
    answer.add(i);
  }
  return [...answer].join("");
}
console.log(solution("ksekkset"));
