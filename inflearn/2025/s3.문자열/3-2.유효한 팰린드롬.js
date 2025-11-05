function solution(str) {
  let filteredStr = str.toUpperCase().replace(/[^A-Z]/g, "");
  let reversedStr = filteredStr.split("").reverse().join("");
  let answer = filteredStr === reversedStr ? "YES" : "NO";
  return answer;
}
const str = "ound7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
