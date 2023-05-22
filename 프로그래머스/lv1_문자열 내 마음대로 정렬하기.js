const strings = "try hello world";
const n = 1;
function solution(strings, n) {
  var answer = "";
  let arr = [];
  for (const i of strings) {
    arr.push(strings.localeCompare(i[1]));
  }
  console.log(arr);
  return answer;
}

solution(strings, n);
