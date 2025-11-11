function solution(str) {
  let stack = [];
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      if (str[i - 1] === "(") answer += stack.length;
      else answer++;
    }
  }

  return answer;
}

function solution(str) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      if (str[i - 1] === "(") answer += stack.length;
      else answer++;
    }
  }

  return answer;
}

function solution(str) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (str[i - 1] === ")") {
        answer += stack.length;
      } else {
        answer++;
      }
    }
  }
}

let str = "()(((()())(())()))(())";

console.log(solution(str));
