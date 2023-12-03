function solution(s, skip, index) {
  var arr = s.split("");
  let answer = "";

  arr.map((r) => {
    let num = r.charCodeAt();
    for (let i = 0; i < index; i++) {
      num++;
      if (num > 122) {
        num = 97;
      }
      while (skip.includes(String.fromCodePoint(num))) {
        num++;
        if (num > 122) {
          num = 97;
        }
      }
    }
    answer += String.fromCodePoint(num);
  });

  return answer;
}
