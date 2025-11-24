function solution(n, m) {
  let answer = [];
  let temp = [];

  function DFS(level) {
    if (level === m) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= n; i++) {
        temp[level] = i;
        DFS(level + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
