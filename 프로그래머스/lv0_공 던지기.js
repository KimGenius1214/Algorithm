function solution(numbers, k) {
  var answer = 0;
  let num = 0;
  let len = numbers.length;
  for (let i = 0; i < k; i++) {
    if (i === 0) {
      num = 0;
    } else {
      num = num + 2;
    }
    if (num === len) {
      num = 0;
    } else if (num > len) {
      num = 1;
    }
    answer = numbers[num];
  }
  return answer;
}
