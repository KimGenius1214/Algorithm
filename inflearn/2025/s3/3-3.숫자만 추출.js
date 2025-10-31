function solution(str) {
  let answer = 0;
  let replacedStr = str.replace(/[^0-9]/g, "");
  answer = Number(replacedStr);
  return answer;
}
const str = "tge0a1h205er";
console.log(solution(str));
