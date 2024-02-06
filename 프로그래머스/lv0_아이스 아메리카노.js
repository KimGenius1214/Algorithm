function solution(money) {
  var answer = [];
  let num;
  let temp;

  num = parseInt(money / 5500);
  temp = money % 5500;

  answer.push(num);
  answer.push(temp);
  return answer;
}
