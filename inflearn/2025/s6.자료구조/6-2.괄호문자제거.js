function solution(str) {
  let stack = [];
  let answer = "";

  for (const i of str) {
    if (i === "(") stack.push(i);
    else if (i === ")") {
      stack.pop();
    } else {
      if (stack.length === 0) {
        answer += i;
      }
    }
  }

  return answer;
}

function solution(str) {
  let answer = "";
  let stack = [];
  for (const i of str) {
    if (i === "(") {
      stack.push(i);
    } else if (i === ")") {
      stack.pop();
    } else {
      if (stack.length === 0) {
        answer += i;
      }
    }
  }
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
