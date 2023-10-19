function solution(n) {
  //   for (let i = 2; i < n; i++) {
  //     if (n % i === 1) return i;
  //   }
  let answer = 1;
  while (n % answer !== 1) answer++;
  return answer;
}
