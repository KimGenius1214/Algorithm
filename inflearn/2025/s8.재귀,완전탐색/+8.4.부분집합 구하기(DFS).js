function solution(n) {
  const answer = [];
  const temp = [];

  function DFS(L) {
    if (L > n) {
      if (temp.length > 0) answer = [[...temp]];
      return;
    }

    temp.push(L);
    DFS(L + 1);

    temp.pop();
    DFS(L + 1);
  }

  DFS(1);

  return answer.join("\n");
}

console.log(solution(3));
