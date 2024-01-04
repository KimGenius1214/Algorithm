function solution(my_string, s, e) {
  var answer = "";
  let temp = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  let start = my_string.slice(0, s);
  let end = my_string.slice(e + 1);
  answer = start + temp + end;
  return answer;
}
