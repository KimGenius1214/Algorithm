function solution(n) {
  const result = [];

  function DFS(v) {
    if (v > 7) return;
    //전위 순회 출력
    // else {
    //   result.push(v);
    //   DFS(v * 2);
    //   DFS(v * 2 + 1);
    // }
    //중위 순회 출력
    // else {
    //   DFS(v * 2);
    //   result.push(v);
    //   DFS(v * 2 + 1);
    // }
    //후위 순회 출력
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      result.push(v);
    }
  }
  DFS(n);

  return result.join(" ");
}

console.log(solution(1));
