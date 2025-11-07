function solution(str) {
  let stack = [];

  for (const i of str) {
    if (Number(i)) {
      stack.push(Number(i));
    } else if (i === "+") {
      const next = stack.pop();
      const prev = stack.pop();
      stack.push(prev + next);
    } else if (i === "-") {
      const next = stack.pop();
      const prev = stack.pop();
      stack.push(prev - next);
    } else if (i === "*") {
      const next = stack.pop();
      const prev = stack.pop();
      stack.push(prev * next);
    } else if (i === "/") {
      const next = stack.pop();
      const prev = stack.pop();
      stack.push(prev / next);
    }
  }

  return stack[0] || 0;
}

let str = "352+*9-";

console.log(solution(str));
