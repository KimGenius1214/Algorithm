function solution(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [from, to] of edges) {
    graph[from].push(to);
  }

  const visited = Array(n + 1).fill(false);

  let count = 0;

  function DFS(current) {
    if (current === n) {
      count++;
      return;
    }

    for (let next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        DFS(next);
        visited[next] = false;
      }
    }
  }

  visited[1] = true;
  DFS(1);

  return count;
}

const n = 5;
const edges = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(solution(n, edges));
