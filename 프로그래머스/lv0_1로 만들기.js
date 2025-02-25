function solution(num_list) {
  var answer = 0;
  for (const i of num_list) {
    let num = i;
    while (true) {
      if (num === 1) {
        break;
      }
      if (num % 2 === 0) {
        num = num / 2;
        answer++;
        continue;
      } else {
        num = (num - 1) / 2;
        answer++;
        continue;
      }
    }
  }
  return answer;
}
