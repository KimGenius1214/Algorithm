function solution(n) {
  let arr = new Array(n).fill(0);
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(arr.map((a, index) => (i === index ? 1 : 0)));
  }
  return answer;
}
