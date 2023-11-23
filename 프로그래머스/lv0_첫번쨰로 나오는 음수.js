function solution(num_list) {
  var answer = 0;
  let num = num_list.filter((r) => r < 0);
  answer = num_list.indexOf(num[0]);
  return answer;
}
