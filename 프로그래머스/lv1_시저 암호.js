const s = "AB";
const n = 1;

function solution(s, n) {
  var answer = "";
  let arr = [];
  for (const i of s) {
    if (i === " ") {
      arr.push(" ");
    } else {
      arr.push(char(i));
    }
  }
  return answer;
}

solution(s, n);
