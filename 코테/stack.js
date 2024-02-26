function solution(s) {
  let stack = [];
  let arr = s.split("");

  for (const i of arr) {
    if (i === "(") stack.push("(");
    if (i === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
