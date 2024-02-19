function solution(my_string) {
  var answer = "";
  for (const i of my_string) {
    if (i === "a" || i === "u" || i === "e" || i === "o" || i === "i") {
      answer += "";
    } else {
      answer += i;
    }
  }
  return answer;
}
