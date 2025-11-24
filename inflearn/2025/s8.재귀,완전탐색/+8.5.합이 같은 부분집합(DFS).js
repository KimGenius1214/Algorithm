function solution(arr) {
  const n = arr.length;
  const total = arr.reduce((a, b) => a + b, 0);

  if (total % 2 !== 0) return "NO";
  const target = total / 2;
  let found = false;

  function DFS(level, sum) {
    if (found) return;

    if (sum > target) return;

    if (sum === target) {
      found = true;
      return;
    }

    if (level === n) return;

    DFS(level + 1, sum + arr[level]);

    DFS(level + 1, sum);
  }
  DFS(0, 0);

  return found ? "YES" : "NO";
}

const arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
