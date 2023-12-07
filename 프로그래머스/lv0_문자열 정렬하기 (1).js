function solution(my_string) {
  var answer = [];
  for (const i of my_string) {
    if (!isNaN(i)) {
      answer.push(Number(i));
    }
  }
  return answer.sort();
}
