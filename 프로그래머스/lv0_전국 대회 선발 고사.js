function solution(rank, attendance) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) arr.push(rank[i]);
  }
  arr.sort((a, b) => a - b);
  answer =
    10000 * rank.indexOf(arr[0]) +
    100 * rank.indexOf(arr[1]) +
    rank.indexOf(arr[2]);
  return answer;
}

function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort(([a], [b]) => a - b);
  return 10000 * a[1] + 100 * b[1] + c[1];
}
