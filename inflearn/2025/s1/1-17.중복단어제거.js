function solution(a, arr) {
  let answer = new Set();
  for (const i of arr) {
    answer.add(i);
  }
  return [...answer];
}
console.log(solution(5, ["good", "time", "good", "time", "student"]));
