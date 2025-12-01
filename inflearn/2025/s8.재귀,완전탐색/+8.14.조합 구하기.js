function solution(n, m) {
  const result = [];
  const temp = [];
  let count = 0;

  function DFS(level, start) {
    if (level === m) {
      result.push(temp.join(" "));
      count++;
      return;
    }

    for (let i = start; i <= n; i++) {
      temp[level] = i;
      DFS(level + 1, i + 1);
    }
  }
  DFS(0, 1);

  return result;
}

console.log(solution(4, 2));
