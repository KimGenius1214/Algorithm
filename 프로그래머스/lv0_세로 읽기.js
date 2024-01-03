function solution(my_string, m, c) {
  var answer = "";
  let arr = [];
  for (let i = 0; i < my_string.length / m; i++) {
    arr.push(my_string.substring(i * m, m * (i + 1)));
  }
  for (const i of arr) {
    answer += i[c - 1];
  }
  return answer;
}
