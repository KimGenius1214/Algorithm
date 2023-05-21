const s = "try hello world";
function solution(s) {
  var answer = "";
  let res = s.split(" ");
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      if (j % 2 === 0) {
        answer += res[i][j].toUpperCase();
      } else {
        answer += res[i][j].toLowerCase();
      }
    }
    if (i < res.length - 1) answer += " ";
  }
  return answer;
}

solution(s);
