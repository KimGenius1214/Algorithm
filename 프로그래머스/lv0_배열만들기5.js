function solution(intStrs, k, s, l) {
  var answer = [];
  let result = [];
  for (const i of intStrs) {
    answer.push(Number(i.substring(s, s + l)));
  }
  for (const i of answer) {
    if (k < i) {
      result.push(i);
    }
  }
  return result;
}
