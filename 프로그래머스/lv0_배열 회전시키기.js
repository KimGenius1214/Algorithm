function solution(numbers, direction) {
  var answer = [];
  let temp = 0;
  if (direction === "left") {
    temp = numbers.shift();
    answer = numbers;
    answer.push(temp);
  } else {
    temp = numbers.pop();
    answer = numbers;
    answer.unshift(temp);
  }
  return answer;
}
