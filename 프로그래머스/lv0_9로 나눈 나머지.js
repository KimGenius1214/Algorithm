function solution(number) {
  var answer = 0;
  let sumNum = 0;
  for (const i of number) {
    sumNum += Number(i);
  }
  answer = sumNum % 9;
  return answer;
}
