function solution(ness, list) {
  let queue = ness.split("");
  let answer = "YES";
  for (const i of list) {
    if (queue.includes(i)) {
      if (i !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

let ness = "CBA";
let list = "CBDAGE";

console.log(solution(ness, list));
