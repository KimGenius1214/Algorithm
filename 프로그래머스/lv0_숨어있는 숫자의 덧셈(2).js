function solution(my_string) {
  var answer = 0;
  let newAnswer = my_string.replace(/[A-z]/g, " ").split(" ");
  for (const i of newAnswer) {
    if (!isNaN(i)) {
      answer += Number(i);
    }
  }
  return answer;
}
