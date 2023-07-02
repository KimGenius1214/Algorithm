function solution(num_list) {
  var answer = 0;
  let even = "";
  let odd = "";
  for (const i of num_list) {
    if (i % 2 === 0) {
      even += String(i);
    } else {
      odd += String(i);
    }
  }
  answer = Number(even) + Number(odd);
  return answer;
}
