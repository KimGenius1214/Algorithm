function solution(n) {
  const result = [];

  function DFS(v) {
    if (v > 7) return;
    else {
      //전위 순회 출력
      result.push(v);
      DFS(v * 2);
      DFS(v * 2 + 1);

      //중위 순회 출력
      DFS(v * 2);
      result.push(v);
      DFS(v * 2 + 1);

      //후위 순회 출력
      DFS(v * 2);
      DFS(v * 2 + 1);
      result.push(v);
    }
  }
  DFS(v);

  return result.join(" ");
}

console.log(solution(1));
