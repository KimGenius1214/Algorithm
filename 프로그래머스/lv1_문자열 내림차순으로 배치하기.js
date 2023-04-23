const s = "Zbcdefg";
function solution(s) {
  var answer = s.split("").sort().reverse().join("");
  return answer;
}

solution(s);
