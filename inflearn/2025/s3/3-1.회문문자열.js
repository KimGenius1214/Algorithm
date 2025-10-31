function solution(str) {
  let upperStr = str.toUpperCase();
  let reversedstr = "";
  for (let i = upperStr.length - 1; i >= 0; i--) {
    reversedstr += upperStr[i];
  }
  let answer = reversedstr === upperStr ? "YES" : "NO";
  return answer;
}

let str = "gooGD";
console.log(solution(str));
