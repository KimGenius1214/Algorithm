function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (Number(p) >= Number(t.substring(i, p.length + i))) {
      answer += 1;
    }
  }

  return answer;
}
