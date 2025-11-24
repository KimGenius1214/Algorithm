function solution(arr, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;

  function DFS(level, sum) {
    if (sum > m) return;
    if (level >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, level);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(level + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

function solution(coins, M) {
  let dp = Array(M + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= M; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[M];
}

let arr = [1, 2, 5];
console.log(solution(arr, 15));
