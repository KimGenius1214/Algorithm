function solution(n, f) {
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  function combination(n, r) {
    if (r === 0 || n === r) {
      return 1;
    }

    if (dp[n][r] > 0) return dp[n][r];

    dp[n][r] = combination(n - 1, r - 1) + combination(n - 1, r);
    return dp[n][r];
  }

  const coef = [];
  for (let i = 0; i < n; i++) {
    coef[i] = combination(n - 1, i);
  }

  const result = [];
  const visited = Array(n + 1).fill(false);
  const perm = Array(n).fill(0);
  let found = false;

  function DFS(level) {
    if (found) return;

    if (level === n) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += perm[i] * coef[i];
      }

      if (sum === f) {
        result.push(...perm);
        found = true;
      }
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (found) return;

      if (!visited[i]) {
        visited[i] = true;
        perm[level] = i;

        DFS(level + 1);

        visited[i] = false;
      }
    }
  }
  DFS(0);

  return result.join(" ");
}

console.log(solution(4, 16));
