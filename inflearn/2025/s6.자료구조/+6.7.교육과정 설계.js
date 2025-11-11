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

function solution(n, str) {
  let queue = n.split("");
  for (const i of str) {
    if (queue.includes(i)) {
      if (queue.shift() !== i) {
        return "NO";
      }
    }
  }
  if (queue.length > 0) {
    return "NO";
  }

  return "YES";
}

let ness = "CBA";
let list = "CBDAGE";

console.log(solution(ness, list));
