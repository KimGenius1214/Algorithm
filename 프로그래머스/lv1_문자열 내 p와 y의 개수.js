const s = "pPoooyY";

function solution(s) {
  var answer = true;
  let arr = [];
  for (const i of s) {
    if (i.toLowerCase() === "y" || i.toLowerCase() === "p") {
      arr.push(i);
    }
  }

  console.log("answer");

  return answer;
}
solution(s);
