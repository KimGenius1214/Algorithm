function solution(num_list) {
  var answer = 0;
  if (num_list.length > 10) {
    for (const i of num_list) {
      answer += i;
    }
  } else {
    answer = 1;
    for (const i of num_list) {
      answer = answer * i;
    }
  }
  return answer;
}
