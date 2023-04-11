const s = "abcde";
// const s = "qwer"

function solution(s) {
  var answer = "";
  if (s.length % 2 !== 0) {
    const num = parseInt(s.length / 2);
    answer = s[num];
  } else {
    const num = parseInt(s.length / 2);
    answer = s[num - 1] + s[num];
  }

  return answer;
}

solution(s);
