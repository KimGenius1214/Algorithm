function solution(strArr) {
  var answer = strArr.map((x) => x.length);
  let dic = {};
  for (const i of answer) {
    dic[i] = (dic[i] || 0) + 1;
  }
  return Math.max(...Object.values(dic));
}
