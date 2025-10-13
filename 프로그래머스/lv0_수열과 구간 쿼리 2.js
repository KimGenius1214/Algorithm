function solution(arr, queries) {
  var answer = [];
  for (const j of queries) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (j[0] <= i && i <= j[1] && j[2] < arr[i]) {
        temp.push(arr[i]);
      }
    }
    answer.push(temp.length ? Math.min(...temp) : -1);
  }

  return answer;
}
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
