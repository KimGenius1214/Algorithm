function solution(c, arr) {
  let answer = 0;
  let n = arr.length;

  function DFS(level, sum) {
    if (sum > c) return;
    if (level === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(level + 1, sum + arr[level]);

      DFS(level + 1, sum);
    }
  }
  DFS(0, 0);

  return answer;
}

const arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
