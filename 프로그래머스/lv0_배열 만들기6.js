function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      answer.push(arr[i]);
      continue;
    } else if (answer.length > 0 && answer[answer.length - 1] === arr[i]) {
      answer.pop();
      continue;
    } else if (answer.length > 0 && answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
      continue;
    }
  }
  return answer.length ? answer : [-1];
}

function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
  });

  return stk.length ? stk : [-1];
}
