const n = 12345;

function solution(n) {
  let answer = [];
  for (const i of String(n)) {
    answer.push(i);
  }
  let res = answer.sort((a, b) => Number(b) - Number(a));
  let newRes = [];
  for (const i of res) {
    newRes.push(Number(i));
  }
  return newRes;
}

solution(n);
