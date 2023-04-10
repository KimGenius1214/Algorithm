function solution(name, yearning, photo) {
  var answer = [];
  let obj = {};
  let cnt = 0;
  for (const i of name) {
    obj[i] = yearning[cnt];
    cnt += 1;
  }
  for (const i of photo) {
    let res = 0;
    for (const j of i) {
      res += obj[j] ? obj[j] : 0;
    }

    answer.push(res);
  }
  return answer;
}
