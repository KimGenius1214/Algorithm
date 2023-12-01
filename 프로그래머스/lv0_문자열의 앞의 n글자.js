function solution(my_string, n) {
  var answer = "";
  let num = my_string.length - n;
  answer = my_string.substring(num);
  return answer;
}
