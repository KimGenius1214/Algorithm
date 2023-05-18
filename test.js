const s = "AB";
const n = 1;

function solution(s, n) {
  var answer = "";
  let arr = [];
  for (const i of s) {
    let str = "";
    if (i === " ") {
      str = " ";
    } else {
      str =
        (i.charCodeAt() + n > 90 && i.charCodeAt() < 91) ||
        i.charCodeAt() + n > 122
          ? i.charCodeAt() + n - 26
          : i.charCodeAt() + n;
    }
    answer += str === " " ? " " : String.fromCharCode(str);
  }
  return answer;
}

solution(s, n);
