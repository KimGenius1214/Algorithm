function solution(n, control) {
  var answer = n;
  for (const i of control) {
    switch (i) {
      case "w":
        answer += 1;
        break;
      case "s":
        answer -= 1;
        break;
      case "d":
        answer += 10;
        break;
      case "a":
        answer -= 10;
        break;
    }
  }
  return answer;
}
