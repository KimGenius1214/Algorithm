function solution(a, arr) {
  let answer = 0;
  for (const i of arr) {
    const num = i % 10;
    if (num === a) {
      answer++;
    }
  }
  return answer;
}
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
