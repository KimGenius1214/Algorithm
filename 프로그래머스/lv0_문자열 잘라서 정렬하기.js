function solution(myString) {
  let answer = myString.split("x");
  answer = answer.filter((r) => r !== "");
  answer = answer.sort();
  return answer;
}
