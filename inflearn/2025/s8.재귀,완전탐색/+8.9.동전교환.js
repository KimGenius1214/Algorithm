function solution(coins, M) {
  let answer = Infinity;
  coins.sort((a, b) => b - a);

  function DFS(sum, count) {
    if (count >= answer) return;

    if (sum === M) {
      answer = Math.min(answer, count);
      return;
    }

    if (sum > M) return;

    for (let coin of coins) {
      if (sum + coin <= M) {
        DFS(sum + coin, count + 1);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(arr, 15));
