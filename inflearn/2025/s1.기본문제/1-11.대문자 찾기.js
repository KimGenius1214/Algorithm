function solution(a) {
  let num = 0;
  for (const i of a) {
    if (i.toUpperCase() === i) num++;
  }
  return num;
}
console.log(solution("COMPUTERPROGRAMMING"));
