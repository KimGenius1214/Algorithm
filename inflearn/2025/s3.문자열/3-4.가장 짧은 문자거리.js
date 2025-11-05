function solution(str1, str2) {
  let answer = [];
  let distance = 0;

  for (const i of str1) {
    if (i === str2) {
      distance = 0;
    } else {
      distance++;
    }
    answer.push(distance);
  }

  for (let i = str1.length - 1; i >= 0; i--) {
    if (str1[i] === str2) distance = 0;
    else {
      distance++;
      answer[i] = Math.min(answer[i], distance);
    }
  }

  return answer;
}
const str1 = "teachermode";
const str2 = "e";
console.log(solution(str1, str2));
