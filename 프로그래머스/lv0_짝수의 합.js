function solution(n) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }

  answer = arr.reduce((acc, cur) => acc + cur, 0);
  return answer;
}
