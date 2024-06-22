function solution(str_list, ex) {
  var answer = "";
  for (const i of str_list) {
    if (i.includes(ex)) {
      answer += "";
    } else {
      answer += i;
    }
  }
  return answer;
}
