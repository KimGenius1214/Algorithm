function solution(str) {
  let stack = [];

  for (const i of str) {
    if (i === "(") stack.push(i);
    else {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";

  return "YES";
}

let str = "(()(()))(()";
console.log(solution(str));
