function solution(age) {
  var answer = "";
  let obj = {
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    0: "a",
  };
  for (const i of String(age)) {
    answer += obj[i];
  }
  return answer;
}
