function solution(a, b) {
  let num = 0;
  for (const i of a) {
    if (i === b) num++;
  }
  return num;
}
console.log(solution("COMPUTERPROGRAMMING", "R"));
