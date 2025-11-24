function solution(m, arr) {
  let answer = 0;
  let n = arr.length;

  function DFS(level, sum, time) {
    if (time > m) return;
    if (level === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(level + 1, sum + arr[level][0], time + arr[level][1]);

      DFS(level + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

const arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
