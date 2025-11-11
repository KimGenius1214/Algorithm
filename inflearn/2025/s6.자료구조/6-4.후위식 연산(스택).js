function solution(str) {
  let stack = [];

  for (const i of str) {
    if (Number(i)) {
      stack.push(Number(i));
    } else {
      const prev = stack.pop();
      const next = stack.pop();
      if (i === "+") {
        stack.push(prev + next);
      } else if (i === "-") {
        stack.push(prev - next);
      } else if (i === "*") {
        stack.push(prev * next);
      } else if (i === "/") {
        stack.push(prev / next);
      }
    }
  }

  return stack[0] || 0;
}

function solution(str) {
  let stack = [];
  for (const i of str) {
    if (Number(i)) {
      stack.push();
    } else {
      const prev = stack.pop();
      const next = stack.pop();
      if (i === "+") {
        stack.push(prev + next);
      } else if (i === "-") {
        stack.push(prev - next);
      } else if (i === "*") {
        stack.push(prev * next);
      } else if (i === "/") {
        stack.push(prev / next);
      }
    }
  }
  return stack[0] || 0;
}

let str = "352+*9-";

console.log(solution(str));
