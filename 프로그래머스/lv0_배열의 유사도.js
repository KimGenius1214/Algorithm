const s1 = ["a", "b", "c"];
const s2 = ["com", "b", "d", "p", "c"];

function solution(s1, s2) {
  let answer = s1.filter((x) => s2.includes(x));
  return answer.length;
}

solution(s1, s2);
