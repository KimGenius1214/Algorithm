function solution(arr, m) {
  let answer = [];
  let n = arr.length;
  let temp = [];
  let visited = Array(n).fill(false);

  function DFS(level) {
    if (level === m) {
      answer.push([...temp]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        temp.push(arr[i]);

        DFS(level + 1);

        temp.pop();
        visited[i] = false;
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(arr, 2));
