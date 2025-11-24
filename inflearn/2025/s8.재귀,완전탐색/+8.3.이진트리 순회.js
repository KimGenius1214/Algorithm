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

  //스택방식
  const stack = [n];
  while (stack.length > 0) {
    const v = stack.pop();
    if (v <= 7) {
      result.push(v);

      stack.push(v * 2);
      stack.push(v * 2 + 1);
    }
  }

  return result.join(" ");
}

console.log(solution(1));
