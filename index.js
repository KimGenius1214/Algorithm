function solution(n) {
  const answer = [];
  const temp = [];
  let callCount = 0;

  function DFS(level, indent = "") {
    callCount++;
    const id = callCount;

    console.log(`${indent}[${id}] DFS(${level}) 시작 | temp=[${temp}]`);

    if (level > n) {
      if (temp.length > 0) {
        console.log(`${indent}[${id}] ✓ 출력: [${temp}]`);
        answer.push([...temp]);
      }
      console.log(`${indent}[${id}] return`);
      return;
    }

    // 포함
    temp.push(level);
    console.log(`${indent}[${id}] ${level} 추가 → temp=[${temp}]`);
    DFS(level + 1, indent + "  ");

    console.log(`${indent}[${id}] ← 재귀에서 돌아옴`);

    // 미포함
    temp.pop();
    console.log(`${indent}[${id}] ${level} 제거 → temp=[${temp}]`);
    DFS(level + 1, indent + "  ");

    console.log(`${indent}[${id}] DFS(${level}) 종료`);
  }

  DFS(1);
  return answer;
}

console.log("\n최종 결과:", solution(3));
