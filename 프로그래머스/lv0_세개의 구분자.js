function solution(myStr) {
  return myStr.match(/[^a-c]+/g) || ["EMPTY"];
}

function solution(myStr) {
  var answer = [];
  answer = [...myStr]
    .map((e) => (e === "a" || e === "b" || e === "c" ? " " : e))
    .join("")
    .split(" ")
    .filter((a) => a);
  return answer.length ? answer : ["EMPTY"];
}
