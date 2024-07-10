function solution(order) {
  var answer = 0;
  for (const i of order) {
    if (i.includes("cafe")) {
      answer += 5000;
    } else {
      answer += 4500;
    }
  }
  return answer;
}
