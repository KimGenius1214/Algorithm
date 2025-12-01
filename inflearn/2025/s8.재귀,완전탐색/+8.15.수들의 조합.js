function solution(n, k, arr, m) {
  let count = 0;

  function DFS(level, start, sum) {
    if (level === k) {
      if (sum % m === 0) {
        count++;
      }
      return;
    }

    for (let i = start; i < n; i++) {
      DFS(level + 1, i + 1, sum + arr[i]);
    }
  }
  DFS(0, 0, 0);
}

const arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
