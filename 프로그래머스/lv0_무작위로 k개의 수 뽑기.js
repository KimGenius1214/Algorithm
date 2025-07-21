function solution(arr, k) {
  var answer = [];
  const set = Array.from(new Set(arr));
  for (let i = 0; i + 1 <= k; i++) {
    if (!answer.includes(set[i])) {
      if (set[i] === undefined) {
        answer.push(-1);
      } else {
        answer.push(set[i]);
      }
    } else {
      answer.push(-1);
    }
  }
  return answer;
}
