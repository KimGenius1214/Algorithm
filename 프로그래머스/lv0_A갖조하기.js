function solution(myString) {
  var answer = "";
  for (const i of myString) {
    if (i === "a" || i === "A") {
      answer += "A";
    } else {
      answer += i.toLowerCase();
    }
  }
  return answer;
}
