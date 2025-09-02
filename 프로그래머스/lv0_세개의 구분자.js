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

function solution(myStr) {
  const arr1 = myStr.split("a").join("b");
  const arr2 = arr1.split("b").join("c");
  const arr3 = arr2.split("c").filter((a) => a);
  return arr3.length ? arr3 : ["EMPTY"];
}
