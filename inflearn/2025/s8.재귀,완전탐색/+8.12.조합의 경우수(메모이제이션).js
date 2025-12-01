function solution(n, r) {
  const dp = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));

  function DFS(n, r) {
    if (r === 0 || n === r) {
      return 1;
    }

    if (dp[n][r] > 0) {
      return dp[n][r];
    }

    dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    return dp[n][r];
  }
  return DFS(n, r);
}

console.log(solution(5, 3));
