function solution(num_list) {
  var answer = 0;
  const mul = num_list.reduce((acc, cur) => acc * cur, 1);
  const sum = num_list.reduce((acc, cur) => acc + cur, 0);
  Math.min(mul, sum * sum) === mul ? (answer = 1) : (answer = 0);
  return answer;
}
