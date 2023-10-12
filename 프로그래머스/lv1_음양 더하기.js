function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    const tempNum = absolutes[i];
    const tempSign = signs[i];
    if (tempSign) {
      answer += tempNum;
    } else {
      answer -= tempNum;
    }
  }
  return answer;
}
