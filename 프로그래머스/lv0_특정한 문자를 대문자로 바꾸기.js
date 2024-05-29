function solution(my_string, alp) {
  var answer = "";
  for (const i of my_string) {
    console.log(i);
    if (i === alp) {
      answer += i.toUpperCase();
    } else {
      answer += i;
    }
  }
  return answer;
}
